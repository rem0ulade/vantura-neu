import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gartenakademie',
  description: 'Gartenakademie im Arboretum Ellerhoop – Fachwissen, Baumtag und grüner Austausch.',
}

const talks = [
  'Rechtsanwalt Armin Braun – Recht und Verkehrssicherheit',
  'Prof. Dr. habil. Hartmut Balder – Sturmschäden und Baumpflege',
  'Stefan Düsterdiek (B.Sc. Arboristik) – Standfestigkeit von Hochstubben',
  'Thomas Amtage – Ausschreibung nach VOB/ZTV Baumpflege',
  'Dr. Dieter Mahsberg – Lebensraum Stadtbaum als Refugium für Biene & Co.',
]

const companies = [
  'COMPO EXPERT GmbH',
  'd.b.g. Datenbankgesellschaft mbH',
  'Fibo ExClay Deutschland GmbH',
  'Flügel GmbH',
  'Funke Kunststoffe GmbH',
  'HanseGrand Klimabaustoffe GmbH & Co. KG',
  'Hermann Meyer KG',
  'IML Instrumenta Mechanik Labor System GmbH',
  'K+E Kompost und Erden GmbH',
  'Lorberg Quality Plants GmbH & Co. KG',
  'TerraCottem Vertrieb',
  'TFI Vitaleres Grün GmbH',
]

export default function GartenakademiePage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Wissen</p>
        <h1>Hier wird der grüne Wissenshunger gestillt.</h1>
        <p>Die Gartenakademie im Arboretum verbindet Fachpublikum, Praxis und den Park selbst.</p>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <h2>Erster Ellerhooper Baumtag</h2>
          <p>26. März 2026, komplett ausgebucht: über 100 Fachleute zu Baumkontrolle, Baumpflege und Stadtgrün.</p>
          <h3>Referent:innen 2026</h3>
          <ul>{talks.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Ausstellende</h3>
          <ul>{companies.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Vorträge zum Download stehen auf der bisherigen Website bereit. Neue Termine: <Link href="/arboretum/veranstaltungen/">Veranstaltungen</Link> oder <Link href="/arboretum/kontakt/">Kontakt</Link>.</p>
        </div>
      </section>
    </main>
  )
}
