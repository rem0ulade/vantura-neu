# Vantura — Website

Marketing-Website: **„Bessere Entscheidungen beginnen mit besseren Daten."**

Reporting-, Dashboard- und Automatisierungslösungen für Unternehmen.

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
```

### Markenname ändern

Der Markenname ist noch nicht final. Er wird ausschließlich über
[`lib/site.ts`](lib/site.ts) referenziert — **eine Änderung dort benennt die
gesamte Website um** (Navigation, Texte, Metadata, Footer).

### Referenzen ergänzen

Einträge in `REFERENCES` in [`lib/content.ts`](lib/content.ts) hinzufügen.
Die Sektion erscheint automatisch, sobald der erste Eintrag existiert.

### Vor Veröffentlichung offen

- Impressum & Datenschutz: Platzhalter (`[…]`) mit echten Unternehmensdaten füllen.

## Deployment

Jeder Push auf `main` baut die Seite via GitHub Actions
(`.github/workflows/deploy.yml`) und veröffentlicht sie auf **GitHub Pages**.
Der Base-Pfad (`/vantura-neu`) wird über `NEXT_PUBLIC_BASE_PATH` in der CI
gesetzt; lokal läuft die Seite ohne Präfix. Bei Umzug auf eine eigene Domain:
Variable entfernen und `SITE.url` in `lib/site.ts` anpassen.
