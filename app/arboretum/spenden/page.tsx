import type { Metadata } from 'next'
import Link from 'next/link'
import { AE } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Spenden',
  description: 'Unterstützen Sie das Arboretum Ellerhoop mit einer Spende auf das Konto des Förderkreises.',
}

export default function SpendenPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Fördern</p>
        <h1>Was der Jahreshaushalt nicht trägt.</h1>
        <p>Ihre Spende hält Qualität und Entwicklung des Parks – ohne unnötige Bürokratie.</p>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <p>{AE.bank}</p>
          <p><strong>IBAN</strong> {AE.iban}<br /><strong>BIC</strong> {AE.bic}</p>
          <p>Ab 300 € stellen wir auf Wunsch eine Spendenbescheinigung aus – bitte per E-Mail an <a href={`mailto:${AE.email}`}>{AE.email}</a>. Kleinere Beträge können Sie mit dem Kontoauszug geltend machen.</p>
          <p>Der Förderkreis sagt Danke.</p>
          <p><Link href="/arboretum/verein/">Lieber Mitglied werden?</Link></p>
        </div>
      </section>
    </main>
  )
}
