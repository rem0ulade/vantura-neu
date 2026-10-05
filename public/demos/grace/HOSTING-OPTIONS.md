# Grace Website — Hosting Options
Stand: 15.07.2026 · M6

═════════════════════════════════════════════════════════════════
OPTION A — GitHub Pages aus Grace-AI-Assistant/docs/
═════════════════════════════════════════════════════════════════

Status: aktuell genutzt
URL: https://rem0ulade.github.io/Grace-AI-Assistant/
Repo: rem0ulade/Grace-AI-Assistant
Pfad: docs/ als GitHub-Pages-Root

Vorteile:
- Schnellste Option
- Keine extra Domain nötig

Risiko:
- Namenskollision mit einer zweiten „Grace“-App im selben Repo

═════════════════════════════════════════════════════════════════
OPTION B — Eigenes Repo + GitHub Pages + CNAME
═════════════════════════════════════════════════════════════════

Status: empfohlen, wenn Namensgleichheit unangenehm wird
URL: grace.vantura-studios.com
Repo: eigenes Repo, z. B. grace-website
Pfad: Root oder /docs als GitHub-Pages-Root
CNAME: grace.vantura-studios.com

Vorteile:
- Klare Trennung zur anderen App
- Eigener Domain-Auftritt
- Unabhängiger Lebenszyklus

Risiko:
- DNS-/CNAME-Setup nötig
- Jonathan muss Repo + Domain konfigurieren

═════════════════════════════════════════════════════════════════
OPTION C — vantura-website Unterordner
═════════════════════════════════════════════════════════════════

Status: legacy
Pfad: ~/Developer/vantura-website/grace/

Hinweis:
- Wird nicht mehr empfohlen, weil die finale Site extern verlinkt wird.
- Ordner bleibt vorerst als Legacy-Referenz erhalten.
- Nicht löschen ohne Jonathan-GO.

═════════════════════════════════════════════════════════════════
ENTSCHEIDUNG
═════════════════════════════════════════════════════════════════

Jonathan entscheidet:
A = aktuell weiter nutzen
B = umziehen in eigenes Repo/Subdomain
C = zurück in vantura-website/grace/

Hermes trifft keine Wahl.
