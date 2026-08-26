import type { Metadata } from 'next'
import Link from 'next/link'
import { AE } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Partner & Sponsoren',
  description: 'Dank an Partner und Sponsoren des Arboretum Ellerhoop.',
}

export default function PartnerPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Gemeinsam</p>
        <h1>Ohne Partner blüht weniger.</h1>
        <p>Wir danken allen, die die Gartenschau auf vielfältige Weise möglich machen.</p>
      </header>
      <section className="ae-section">
        <div className="ae-wrap ae-narrow">
          <article className="ae-card">
            <div className="ae-card-body">
              <h3>Mathias-Tantau-Stiftung</h3>
              <p>Herzlichen Dank für die großzügige Unterstützung.</p>
            </div>
          </article>
          <p style={{ marginTop: 28, color: 'var(--muted)', lineHeight: 1.7 }}>
            Werden Sie Sponsor und verbinden Sie Ihren Namen mit 17 Hektar Gartenkunst im Norden. Schreiben Sie an{' '}
            <a href={`mailto:${AE.vereinEmail}`}>{AE.vereinEmail}</a> oder nutzen Sie das <Link href="/arboretum/kontakt/">Kontaktformular</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
