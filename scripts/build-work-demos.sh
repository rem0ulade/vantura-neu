#!/usr/bin/env bash
# Clone, build and copy work demos into public/work/<slug>/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CACHE="$ROOT/.cache/work-repos"
PUBLIC="$ROOT/public/work"
OWNER="rem0ulade"

mkdir -p "$CACHE" "$PUBLIC"

clone_or_update() {
  local repo="$1"
  local dir="$CACHE/$repo"
  if [[ -d "$dir/.git" ]]; then
    git -C "$dir" fetch --depth 1 origin
    git -C "$dir" reset --hard origin/HEAD 2>/dev/null || git -C "$dir" pull --ff-only
  else
    git clone --depth 1 "https://github.com/$OWNER/$repo.git" "$dir"
  fi
}

fix_double_work_prefix() {
  local dest="$1"
  find "$dest" -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.json' -o -name '*.txt' \) -print0 2>/dev/null \
    | while IFS= read -r -d '' f; do
        sed -i.bak 's|/work/work/|/work/|g' "$f" && rm -f "$f.bak"
      done || true
}

mirror_github_pages() {
  local slug="$1"
  local segment="$2"
  local dest="$PUBLIC/$slug"
  local url="https://${OWNER}.github.io/${segment}/"
  echo "--> mirroring $url → $dest (Python urllib fallback)"
  rm -rf "$dest"
  python3 "$ROOT/scripts/mirror_github_pages.py" "$url" "$dest" \
    --segment "$segment" \
    --old-prefix "/${segment}/" \
    --new-prefix "/work/${slug}/"
}

rewrite_base_in_tree() {
  local dest="$1"
  local old_base="$2"
  local new_base="$3"
  # Rewrite common absolute prefixes that break under /work/<slug>/
  if command -v rg >/dev/null 2>&1; then
    rg -l --hidden -g '!*.{png,jpg,jpeg,webp,gif,ico,woff,woff2,ttf,eot}' "$old_base" "$dest" 2>/dev/null \
      | while read -r f; do
          sed -i.bak "s|${old_base}|${new_base}|g" "$f" && rm -f "$f.bak"
        done || true
  else
    find "$dest" -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.json' \) -print0 \
      | while IFS= read -r -d '' f; do
          sed -i.bak "s|${old_base}|${new_base}|g" "$f" && rm -f "$f.bak"
        done
  fi
}

copy_static() {
  local repo="$1"
  local slug="$2"
  local src="$CACHE/$repo"
  local dest="$PUBLIC/$slug"
  rm -rf "$dest"
  mkdir -p "$dest"
  # Prefer project root files; skip .git
  rsync -a --exclude '.git' --exclude 'node_modules' --exclude '.next' --exclude 'out' "$src/" "$dest/"
  rewrite_base_in_tree "$dest" "/$repo/" "/work/$slug/"
  rewrite_base_in_tree "$dest" "/$repo" "/work/$slug"
  # Ensure index.html exists
  if [[ ! -f "$dest/index.html" ]]; then
    if [[ -f "$dest/index.htm" ]]; then
      mv "$dest/index.htm" "$dest/index.html"
    else
      echo "WARN: no index.html in $slug" >&2
    fi
  fi
}

build_vite_or_next() {
  local repo="$1"
  local slug="$2"
  local src="$CACHE/$repo"
  local dest="$PUBLIC/$slug"
  local base="/work/$slug/"

  pushd "$src" >/dev/null
  if [[ -f package.json ]]; then
    npm install --no-fund --no-audit
    # Vite base
    if [[ -f vite.config.ts || -f vite.config.js || -f vite.config.mjs ]]; then
      export VITE_BASE="$base"
      # Patch vite config if needed via env; many projects use base: '/'
      if grep -q "base:" vite.config.* 2>/dev/null; then
        npm run build -- --base "$base" 2>/dev/null || npx vite build --base "$base"
      else
        npx vite build --base "$base" || npm run build
      fi
      rm -rf "$dest"
      mkdir -p "$dest"
      if [[ -d dist ]]; then
        rsync -a dist/ "$dest/"
      elif [[ -d out ]]; then
        rsync -a out/ "$dest/"
      fi
    elif grep -q '"next"' package.json; then
      # Next static export with basePath
      export NEXT_PUBLIC_BASE_PATH="/work/$slug"
      # Write temporary next config overlay if none sets basePath
      if [[ -f next.config.ts || -f next.config.js || -f next.config.mjs ]]; then
        npm run build
      else
        npm run build
      fi
      rm -rf "$dest"
      mkdir -p "$dest"
      if [[ -d out ]]; then
        rsync -a out/ "$dest/"
      else
        echo "WARN: Next build produced no out/ for $slug — copying source as fallback" >&2
        popd >/dev/null
        copy_static "$repo" "$slug"
        return
      fi
      rewrite_base_in_tree "$dest" "/$repo/" "/work/$slug/"
    else
      # Generic npm build
      npm run build 2>/dev/null || true
      rm -rf "$dest"
      mkdir -p "$dest"
      if [[ -d dist ]]; then
        rsync -a dist/ "$dest/"
      elif [[ -d out ]]; then
        rsync -a out/ "$dest/"
      elif [[ -d build ]]; then
        rsync -a build/ "$dest/"
      else
        popd >/dev/null
        copy_static "$repo" "$slug"
        return
      fi
    fi
  else
    popd >/dev/null
    copy_static "$repo" "$slug"
    return
  fi
  popd >/dev/null
  rewrite_base_in_tree "$dest" "/$repo/" "/work/$slug/"
  fix_double_work_prefix "$dest"
  if [[ ! -f "$dest/index.html" && "$slug" == "proud-together" ]]; then
    mirror_github_pages "$slug" "$repo"
  fi
}

echo "==> Building work demos into public/work"

# Static HTML/CSS projects
for pair in "bonsai-home:bonsai-home" "onebyone-mockup:onebyone" "grace_webpage_v1:grace"; do
  repo="${pair%%:*}"
  slug="${pair##*:}"
  echo "--> $repo → $slug (static)"
  clone_or_update "$repo"
  copy_static "$repo" "$slug"
done

# Buildable apps
for pair in "proud-together:proud-together" "arslan-gartenloewe:arslan-gartenloewe" "website-jonathan:jonathan"; do
  repo="${pair%%:*}"
  slug="${pair##*:}"
  echo "--> $repo → $slug (build)"
  clone_or_update "$repo"
  build_vite_or_next "$repo" "$slug"
  if [[ "$slug" == "arslan-gartenloewe" ]]; then
    fix_double_work_prefix "$PUBLIC/$slug"
  fi
  if [[ "$slug" == "jonathan" && -d "$CACHE/$repo/public" ]]; then
    echo "--> syncing website-jonathan/public → $PUBLIC/jonathan"
    rsync -a "$CACHE/$repo/public/" "$PUBLIC/jonathan/"
    if [[ -d "$CACHE/$repo/public/brand" ]]; then
      mkdir -p "$ROOT/public/brand"
      rsync -a "$CACHE/$repo/public/brand/" "$ROOT/public/brand/"
    fi
  fi
done

echo "==> Done. Demos in $PUBLIC"
ls -la "$PUBLIC"
