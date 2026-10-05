#!/usr/bin/env python3
"""Mirror a GitHub Pages site into a local directory and rewrite path prefixes."""

from __future__ import annotations

import argparse
import re
import sys
from collections import deque
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlparse
from urllib.request import Request, urlopen

TEXT_SUFFIXES = {
    ".html",
    ".htm",
    ".css",
    ".js",
    ".json",
    ".txt",
    ".svg",
    ".xml",
    ".map",
}

ASSET_RE = re.compile(
    r"""(?:href|src)=["']([^"']+)["']"""
    r"""|url\(\s*['"]?([^'")\s]+)['"]?\s*\)"""
    r"""|["']((?:/[^"']+?)(?:\.(?:html?|css|js|json|png|jpe?g|webp|gif|ico|svg|woff2?|ttf|eot|map|txt)))["']"""
)


def is_text_path(path: str) -> bool:
    suffix = Path(urlparse(path).path).suffix.lower()
    if suffix in TEXT_SUFFIXES:
        return True
    if not suffix:
        return True
    return False


def normalize_site_path(url: str, site_path_prefix: str) -> str | None:
    """Return path relative to site root (e.g. index.html, _next/foo.js), or None."""
    parsed = urlparse(url)
    path = unquote(parsed.path)
    if parsed.scheme and parsed.netloc:
        if "github.io" not in parsed.netloc:
            return None
    if not path.startswith(site_path_prefix):
        return None
    rel = path[len(site_path_prefix) :].lstrip("/")
    if not rel or path.endswith("/"):
        rel = f"{rel}index.html" if rel else "index.html"
    return rel


def extract_links(content: str, page_url: str, site_path_prefix: str) -> set[str]:
    found: set[str] = set()
    for match in ASSET_RE.finditer(content):
        for g in match.groups():
            if not g or g.startswith(("#", "mailto:", "tel:", "javascript:")):
                continue
            absolute = urljoin(page_url, g)
            rel = normalize_site_path(absolute, site_path_prefix)
            if rel:
                found.add(rel)
    return found


def fetch(url: str) -> tuple[bytes, str | None]:
    req = Request(url, headers={"User-Agent": "vantura-work-demo-mirror/1.0"})
    with urlopen(req, timeout=60) as resp:
        data = resp.read()
        ctype = resp.headers.get("Content-Type")
        return data, ctype


def rewrite_text(data: bytes, old_prefix: str, new_prefix: str) -> bytes:
    """Replace old_prefix with new_prefix without doubling (e.g. /work/work/)."""
    text = data.decode("utf-8", errors="surrogateescape")
    if old_prefix == new_prefix:
        return data
    # old_prefix often appears inside new_prefix (/work/proud-together/ contains proud-together/)
    old = old_prefix if old_prefix.startswith("/") else f"/{old_prefix}"
    pattern = re.compile(rf"(?<!/work){re.escape(old)}")
    text = pattern.sub(new_prefix, text)
    return text.encode("utf-8", errors="surrogateescape")


def mirror(
    base_url: str,
    dest: Path,
    site_segment: str,
    old_prefix: str,
    new_prefix: str,
) -> int:
    base_url = base_url if base_url.endswith("/") else f"{base_url}/"
    site_path_prefix = f"/{site_segment.strip('/')}/"
    parsed_base = urlparse(base_url)
    origin = f"{parsed_base.scheme}://{parsed_base.netloc}"

    dest.mkdir(parents=True, exist_ok=True)
    queue: deque[str] = deque(["index.html"])
    seen: set[str] = set()
    downloaded = 0

    seed_pages = [
        "index.html",
        "impressum/index.html",
        "datenschutz/index.html",
        "404.html",
        "og.png",
        "favicon.ico",
        "favicon.svg",
    ]
    for p in seed_pages:
        if p not in seen:
            queue.append(p)

    while queue:
        rel = queue.popleft()
        if rel in seen:
            continue
        seen.add(rel)

        url = urljoin(base_url, rel)
        try:
            data, _ctype = fetch(url)
        except HTTPError as e:
            if e.code == 404:
                continue
            print(f"HTTP {e.code} for {url}", file=sys.stderr)
            continue
        except URLError as e:
            print(f"Failed {url}: {e}", file=sys.stderr)
            continue

        out_path = dest / rel
        out_path.parent.mkdir(parents=True, exist_ok=True)

        if is_text_path(rel):
            try:
                raw_text = data.decode("utf-8", errors="replace")
                links = extract_links(raw_text, url, site_path_prefix)
                for link in links:
                    if link not in seen:
                        queue.append(link)
            except Exception:
                pass
            data = rewrite_text(data, old_prefix, new_prefix)

        out_path.write_bytes(data)
        downloaded += 1
        print(f"  {rel}")

    return downloaded


def main() -> int:
    parser = argparse.ArgumentParser(description="Mirror GitHub Pages export")
    parser.add_argument("base_url", help="e.g. https://user.github.io/repo/")
    parser.add_argument("dest", type=Path, help="Local output directory")
    parser.add_argument(
        "--segment",
        required=True,
        help="Repo segment on github.io (e.g. proud-together)",
    )
    parser.add_argument(
        "--old-prefix",
        default=None,
        help="Path prefix to replace (default: /segment/)",
    )
    parser.add_argument(
        "--new-prefix",
        default=None,
        help="Replacement prefix (default: /work/segment/)",
    )
    args = parser.parse_args()
    seg = args.segment.strip("/")
    old = args.old_prefix or f"/{seg}/"
    new = args.new_prefix or f"/work/{seg}/"
    n = mirror(args.base_url, args.dest, seg, old, new)
    print(f"Downloaded {n} files into {args.dest}")
    return 0 if (args.dest / "index.html").is_file() else 1


if __name__ == "__main__":
    raise SystemExit(main())
