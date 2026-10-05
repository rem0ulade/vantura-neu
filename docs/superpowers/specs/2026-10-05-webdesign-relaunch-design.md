# Vantura Studios — Webdesign Relaunch Design Spec

**Date:** 2026-10-05  
**Repo:** `rem0ulade/vantura-neu` (live: https://vantura-studios.com)  
**Status:** Implemented (2026-10-05)

## Goal

Reposition Vantura Studios as a **webdesign studio** (including online shops and relaunches). The marketing site must sell that offer immediately (CTA above the fold) and **demonstrate craft** through aggressive motion and in-domain proof of work. Visitors must not leave `vantura-studios.com` to evaluate demos.

## Non-goals

- Selling Data / Reporting, AI Officer, or Software product studio as home offerings
- Linking proof-of-work to `*.github.io` or other off-domain demo hosts as the primary experience
- Rebuilding Grace or the personal site as full product platforms inside Vantura (previews / marketing captures only)

## Decisions (locked)

| Topic | Decision |
|-------|----------|
| Scope | Webdesign + shops + relaunches only |
| Languages | Keep DE / EN toggle |
| Motion | Vollgas — page is the showcase |
| Visual direction | **Kinetic Brutal (C)** — light ground `#f2efe8`, ink `#111`, signal orange `#ff4d1a`, oversized type, hard edges |
| Hero | **Full-bleed Brand (A)** — brand + one headline + one line + primary CTA on dominant visual plane |
| Architecture approach | Rebuild home as scroll-story selling site (Approach 1); do not keep the four-space studio shell |
| Proof | In-site demos under `/work/...` |
| CTA | `mailto:jk@vantura-studios.com` with webdesign-focused subject |
| Fonts | **Space Grotesk** (UI/display) + **JetBrains Mono** (details/labels) |
| Demo chrome | Floating back chip only („← Vantura Work“); demos nearly fullscreen |
| Legacy redirects | Mix: old service routes → `/` (or `/de/`); old portfolio routes → `/work` (or `/de/work`) |
| Grace source | Clone `rem0ulade/grace_webpage_v1` into `/work/grace` (same as live meet-grace.com) |

## Information architecture

### Home (`/` and `/de/`)

1. **Nav** — Vantura · Work · Leistungen · DE/EN · CTA „Projekt anfragen“
2. **Hero** — Kinetic Brutal full-bleed; brand-first; primary CTA + secondary „Arbeiten ansehen“
3. **Leistungen** — Websites · Online-Shops · Redesign/Relaunch (single purpose section)
4. **Capabilities** — sticky scroll story demonstrating layout, type, hover, shop UI patterns
5. **Work** — grid of case cards linking to in-site demos
6. **Ablauf** — four short steps
7. **Final CTA + Footer** — contact, Impressum, Datenschutz

### Work routes (same domain)

| Route | Source |
|-------|--------|
| `/work` | Portfolio index |
| `/work/bonsai-home` | `rem0ulade/bonsai-home` |
| `/work/proud-together` | `rem0ulade/proud-together` |
| `/work/arslan-gartenloewe` | `rem0ulade/arslan-gartenloewe` |
| `/work/onebyone` | `rem0ulade/onebyone-mockup` |
| `/work/grace` | `rem0ulade/grace_webpage_v1` (live equivalent of meet-grace.com) |
| `/work/jonathan` | `rem0ulade/website-jonathan` (jonathankokalj.com) |

Each demo page:

1. Immediate full demo with **only** a floating back chip — no case header bar, no intro gate
2. Persistent control: **„← Vantura Work“** returns to `/work` (or `/de/work`) without leaving the domain
3. Optional secondary „Original öffnen“ only if a stable live URL exists — never as the only path

German paths: mirror under `/de/work/...` with the same assets, localized chip copy.

## Demo integration strategy

1. Clone required repos into a local workspace (they are not on the machine today).
2. Prefer **static export / built assets** copied into `public/work/<slug>/` so Next static export keeps serving them.
3. For already-static HTML/CSS projects: copy into `public/work/<slug>/`.
4. For Next/Vite apps: build, then copy `out`/`dist` into `public/work/<slug>/`.
5. App Router may expose thin wrappers (metadata, back chip) that iframe or rewrite to the static folder **only if** that preserves same-origin feel; prefer same-origin static files over third-party hosts.
6. Do not deep-link primary CTAs to `rem0ulade.github.io/...`.

## Visual system (Kinetic Brutal)

- **Background:** warm paper `#f2efe8` (not cream+terracotta editorial cliché; orange is signal, not brand wash)
- **Ink:** `#111111`
- **Accent:** `#ff4d1a`
- **Type:** **Space Grotesk** for display/UI (oversized, tight tracking, heavy weight); **JetBrains Mono** for meta labels / chip / technical accents — no Inter/Roboto/Arial defaults
- **Shapes:** hard edges, 0–2px borders, no soft card farm in the hero
- **Hero budget:** brand, one headline, one supporting sentence, one CTA group, one dominant visual plane — no stats strips or promo chips overlaid on hero media
- **Composition:** first viewport reads as one poster-like composition, not a dashboard

## Motion system

Minimum intentional beats:

1. Hero entrance (type + CTA stagger; subtle scroll-linked background)
2. Capabilities sticky scroll story (at least four beats)
3. Work card hover / reveal + transition into `/work/...`

Also allowed: marquees, magnetic/hover accents, section pin reveals. Honor `prefers-reduced-motion: reduce` by collapsing to simple fades or none.

## Content / messaging direction

- Lead with selling websites and shops, not data/AI.
- German and English copy maintained in parallel (existing locale pattern).
- CTA labels emphasize project inquiry / Erstgespräch for webdesign.
- Update `lib/site.ts` claim, description, mail subject, and page metadata away from reporting defaults.

## Removals / redirects

- Home must no longer present Data / AI / Software studio spaces.
- Primary nav and SEO title/description must say webdesign (and shops).
- Legacy redirects (soft, preserve bookmarks):
  - Service routes (`/reporting`, `/ai`, `/projects`, `/projekt`, `/design`, `/websites`, and DE mirrors) → `/` or `/de/`
  - Portfolio routes (`/portfolio`, `/portfolio/websites`, `/rem0/portfolio`, `/test/Portfolio`, `/de/Portfolio`, etc.) → `/work` or `/de/work`
- Existing in-repo demos (Arboretum, Brühl, etc.) may remain as additional `/work` entries if they strengthen the webdesign case; they are optional extras, not blockers for the six named sources.

## Stack

Keep current production stack:

- Next.js App Router, static export
- React 19, TypeScript
- Tailwind CSS 4
- Framer Motion
- GitHub Pages deploy workflow (existing)

No new backend. Contact remains mailto unless later replaced.

## Success criteria

1. First viewport communicates: Vantura sells webdesign/shops + clear CTA (< 5 seconds).
2. No primary path to github.io demos.
3. All named GitHub projects viewable under `vantura-studios.com/work/...`.
4. Grace and Jonathan appear as in-site previews when repos/builds allow.
5. Motion feels intentional and dense; reduced-motion users still get a usable site.
6. DE and EN both ship.

## Resolved implementation details

All previously open items are locked in **Decisions** above (fonts, demo chrome, redirect mix, Grace source). No design blockers remain for the implementation plan.
