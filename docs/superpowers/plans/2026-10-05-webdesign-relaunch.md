# Webdesign Relaunch Implementation Plan

> Copied from the approved Cursor plan for persistence in-repo. Do not treat this as the live todo source.

**Goal:** Ship a webdesign-only Vantura marketing site that sells websites/shops immediately, showcases motion craft, and hosts proof-of-work under `vantura-studios.com/work/...`.

**Architecture:** Next.js static export. Kinetic Brutal scroll-story home (EN + DE). Demos in `public/work/<slug>/` with App Router shells + floating back chip. Soft client redirects for legacy routes.

**Spec:** [../specs/2026-10-05-webdesign-relaunch-design.md](../specs/2026-10-05-webdesign-relaunch-design.md)

## Tasks

1. Brand tokens, fonts, site config
2. Work catalog + demo build pipeline (`public/work`)
3. WorkDemoShell + `/work` routes
4. New webdesign home sections EN/DE
5. Motion polish + reduced-motion
6. Legacy redirects + sitemap
7. Verify + README

See the Cursor plan attachment for full detail.
