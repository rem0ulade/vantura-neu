import type { Metadata } from 'next'
import { AE } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakt zum Arboretum Ellerhoop: E-Mail, Telefon, Bürozeiten und Adresse.',
}

export default function KontaktPage() {
  const mail = `mailto:${AE.email}?subject=${encodeURIComponent('Anfrage Arboretum Ellerhoop')}`
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Büro</p>
        <h1>Schreiben Sie uns – das ist der schnellste Weg.</h1>
        <p>Bitte primär per E-Mail. Das Büro ist montags bis freitags von 8 bis 12 Uhr erreichbar, am Wochenende nicht besetzt.</p>
      </header>
      <section className="ae-section">
        <div className="ae-wrap ae-grid-2">
          <div className="ae-card">
            <div className="ae-card-body" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3>{AE.name}</h3>
              <p>{AE.address}<br />{AE.zip}</p>
              <p><a href={AE.phoneHref}>{AE.phone}</a></p>
              <p><a href={`mailto:${AE.email}`}>{AE.email}</a></p>
              <p>Instagram: <a href={AE.instagram} target="_blank" rel="noreferrer">@arboretum_ellerhoop</a><br />Facebook: <a href={AE.facebook} target="_blank" rel="noreferrer">arboretumellerhoop</a></p>
              <a className="ae-cta" href={mail} style={{ marginTop: 16 }}>E-Mail schreiben</a>
            </div>
          </div>
          <div className="ae-prose">
            <h2>Hinweise</h2>
            <p>Führungen, Gruppen im Café, Mobilitätshilfen und Spendenbescheinigungen bitte mit ausreichend Vorlauf – das Büro arbeitet nur unter der Woche vormittags.</p>
            <p>
              Karte:{' '}
              <a href="https://maps.google.com/?q=Thiensen+4+25373+Ellerhoop" target="_blank" rel="noreferrer">
                Thiensen 4, 25373 Ellerhoop
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
