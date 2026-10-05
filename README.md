# Vantura — Webdesign

Marketing site for **Vantura Studios**: webdesign, online shops and relaunches.

Domain: [vantura-studios.com](https://vantura-studios.com)

## Stack

- Next.js 16 (App Router, static export)
- React 19 · TypeScript
- Tailwind CSS 4
- Framer Motion · Space Grotesk · JetBrains Mono

## Development

```bash
npm install
npm run build:work   # clone/build demos into public/work (first time / refresh)
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
```

`build:work` is only needed when refreshing demo sources. Built demos under `public/work/` are committed so CI can deploy with `npm ci && npm run build` alone.

## Architecture

```
app/                 Routes (home EN/DE, /work, legal, legacy redirects)
components/webdesign Kinetic Brutal marketing sections
components/          WorkDemoShell, LegacyRedirect, language helpers
lib/site.ts          Brand + mailto CTA
lib/work.ts          Work catalog (six in-site demos)
lib/webdesign-content.ts  EN/DE copy
public/work/<slug>/  Static demo assets served on-domain
scripts/             Demo build + GitHub Pages mirror helpers
docs/superpowers/    Spec + plans
```

## Work demos

In-site only (no primary github.io links):

- `/work/bonsai-home`
- `/work/proud-together`
- `/work/arslan-gartenloewe`
- `/work/onebyone`
- `/work/grace`
- `/work/jonathan`

Each demo page shows a floating „← Vantura Work“ chip over a same-origin iframe.

## Deployment

Push to `main` → GitHub Actions → GitHub Pages (see `.github/workflows/deploy.yml`).
