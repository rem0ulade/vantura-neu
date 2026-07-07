# Grace — Website

Marketing-Website: **„Bessere Entscheidungen beginnen mit besseren Daten."**

Reporting-, Dashboard- und Automatisierungslösungen für Unternehmen.

Domain: [meet-grace.com](https://meet-grace.com)

## Stack

- Next.js 16 (App Router, statischer Export)
- React 19 · TypeScript
- Tailwind CSS 4
- Framer Motion · Lucide Icons

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statischer Export nach ./out
```

## Architektur

```
app/               Routen, Layout, Metadata, SEO (robots, sitemap, icon)
components/
  sections/        Eine Datei pro Seitensektion (Hero, Problem, Cost, …)
  dashboard/       Selbstgebaute Dashboard-Mockups (reines SVG/CSS)
  ui/              Wiederverwendbare Bausteine (Button, Container, Reveal, …)
lib/
  site.ts          ⭐ Zentrale Markenkonfiguration (Name, Claim, E-Mail, URL)
  content.ts       Alle Texte/Inhalte der Sektionen
docs/brand/        Brand Foundation, Messaging, Voice & Style
```

### Markenname ändern

Der Markenname wird ausschließlich über [`lib/site.ts`](lib/site.ts)
referenziert — **eine Änderung dort benennt die gesamte Website um**
(Navigation, Texte, Metadata, Footer).

### Referenzen ergänzen

Einträge in `REFERENCES` in [`lib/content.ts`](lib/content.ts) hinzufügen.
Die Sektion erscheint automatisch, sobald der erste Eintrag existiert.

### Vor Veröffentlichung offen

- Impressum & Datenschutz: Platzhalter (`[…]`) mit echten Unternehmensdaten füllen.

## Deployment

Jeder Push auf `main` baut die Seite via GitHub Actions
(`.github/workflows/deploy.yml`) und veröffentlicht sie auf **GitHub Pages**:
https://rem0ulade.github.io/vantura-neu/

Der Base-Pfad (`/vantura-neu`) wird über `NEXT_PUBLIC_BASE_PATH` in der CI
gesetzt; lokal läuft die Seite ohne Präfix.

### Umzug auf meet-grace.com

Sobald die Domain auf das Hosting zeigt:

1. `NEXT_PUBLIC_BASE_PATH` aus `.github/workflows/deploy.yml` entfernen
   (bei GitHub Pages mit Custom Domain liegt die Seite im Root).
2. Bei GitHub Pages: Custom Domain `meet-grace.com` in den Repo-Settings
   setzen (legt den CNAME an) und „Enforce HTTPS" aktivieren.
3. `SITE.url` in `lib/site.ts` ist bereits auf `https://meet-grace.com` gesetzt.
