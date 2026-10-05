# Grace Site — Deploy (meet-grace.com primary)
Stand: 15.07.2026 · M7

═════════════════════════════════════════════════════════════════
PRIMARY — meet-grace.com
═════════════════════════════════════════════════════════════════

Live-URL:
`https://meet-grace.com/`

Hinweis:
- Jonathan hat meet-grace.com als Primary-Domain bestätigt.
- Aura-Repo `Grace-AI-Assistant` ist legacy.
- Vantura-Hauptsite verlinkt extern auf meet-grace.com.

═════════════════════════════════════════════════════════════════
CURRENT MIRROR — GitHub Pages docs/
═════════════════════════════════════════════════════════════════

Repo: `github.com/rem0ulade/Grace-AI-Assistant`
Live-URL:
`https://rem0ulade.github.io/Grace-AI-Assistant/`

Hinweis:
- `docs/` ist aktueller Spiegel der Marketing-Site.
- Nach DNS-Umstellung auf meet-grace.com wird docs/ ggf. abgekoppelt oder umgeleitet.
- Kein Push in Grace-AI-Assistant ohne Jonathan-GO.

═════════════════════════════════════════════════════════════════
LOKAL TESTEN
═════════════════════════════════════════════════════════════════

```sh
python3 -m http.server 8080 --directory .
open http://localhost:8080/
```

═════════════════════════════════════════════════════════════════
VANTURA-WEBSITE ANSCHLUSS
═════════════════════════════════════════════════════════════════

- Vantura Hauptsite verlinkt extern auf meet-grace.com.
- `vantura-website/grace/` bleibt als Legacy-Referenz erhalten.
- Relevant für ASC/Marketing: externe Links statt internem `/grace/`.

═════════════════════════════════════════════════════════════════
NICHT MEHR
═════════════════════════════════════════════════════════════════

~~vantura-website/grace/ sync~~ — verworfen
~~github.io als Primary~~ — verworfen
