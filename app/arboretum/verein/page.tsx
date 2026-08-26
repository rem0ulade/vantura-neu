import type { Metadata } from 'next'
import Link from 'next/link'
import { AE, board } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Der Verein',
  description: 'Förderkreis Arboretum Baumpark Ellerhoop-Thiensen e. V. – Mitgliedschaft, Vorstand und Ehrenamt.',
}

const benefits = [
  'Unterstützung des Arboretums',
  'Eintritt 5 € statt 10 €, Dauerkarte 50 € statt 80 €',
  'Vorträge zu Gartenthemen (exklusiv, nach Anmeldung)',
  'Mitgliederführungen durch den Park',
  'Gemeinschaft, die in Politik und Presse gehört wird',
  'Einladung zur Jahresmitgliederversammlung',
  'Ehrenamt in Garten und Veranstaltungen',
  'Mitgliederinfo „Baumblatt“',
]

export default function VereinPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Förderkreis e. V.</p>
        <h1>Betreiber, Chefgärtner, Finanzier, Macher.</h1>
        <p>Der gemeinnützige Verein bewirtschaftet den Park: Schulbiologie, Baumwissenschaft und Gartenkunst auf fast 17 Hektar.</p>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-grid-2">
          <div>
            <h2>Mitglieder</h2>
            <p>Geleitet von einem ehrenamtlichen Vorstand. Vorsitzende seit 29.11.2022: Aenne von Wurmb. Dazu Ehrenamtliche, Praktikant:innen, Menschen im Ruhestand und Angestellte in Park, Kasse, Café und Büro.</p>
            <p>Rund 750 Mitglieder. Jahresbeitrag 30 €, Firmen und Organisationen 60 €. Höhere Beträge gelten als Spende.</p>
            <p><a className="ae-cta" href={AE.mitgliedschaft} target="_blank" rel="noreferrer">Beitrittserklärung (PDF)</a></p>
          </div>
          <div>
            <h2>Was die Mitgliedschaft bringt</h2>
            <ul>{benefits.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="ae-section" style={{ background: 'var(--cream)' }}>
        <div className="ae-wrap">
          <h2 style={{ fontSize: 36, marginBottom: 20 }}>Vorstand</h2>
          <table className="ae-table">
            <tbody>
              {board.map(([role, name]) => (
                <tr key={role}><td>{role}</td><td><strong>{name}</strong></td></tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 28 }}>
            <Link href="/arboretum/geschichte/">Geschichte des Parks</Link>
            {' · '}
            <Link href="/arboretum/spenden/">Spenden</Link>
            {' · '}
            <Link href="/arboretum/partner/">Partner</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
