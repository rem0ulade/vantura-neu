import type { Metadata } from 'next'
import { AE } from '@/lib/arboretum'

export const metadata: Metadata = { title: 'Impressum' }

export default function ImpressumPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Rechtliches</p>
        <h1>Impressum</h1>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Förderkreis Arboretum Baumpark Ellerhoop-Thiensen e. V.<br />
            {AE.address}<br />{AE.zip}
          </p>
          <p>
            <strong>Vertreten durch</strong><br />
            Aenne von Wurmb (1. Vorsitzende)<br />
            Hanns-Jürgen Redeker (2. Vorsitzender)
          </p>
          <p>Telefon: {AE.phone}<br />E-Mail: {AE.email}</p>
          <p>Vereinsregister: {AE.register}<br />USt-ID {AE.vat}</p>
          <p><strong>Verantwortlich nach § 18 Abs. 2 MStV</strong><br />Aenne von Wurmb (1. Vorsitzende)</p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <h2>Haftung für Inhalte</h2>
          <p>Die Inhalte wurden mit Sorgfalt erstellt. Für Vollständigkeit, Richtigkeit und Aktualität wird keine Gewähr übernommen. Haftungsansprüche materieller oder ideeller Art sind ausgeschlossen, soweit kein vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Angebote sind freibleibend. Inhalte können ohne Ankündigung geändert oder eingestellt werden.</p>
          <h2>Verfügbarkeit</h2>
          <p>Unterbrechungsfreier Abruf wird angestrebt, Ausfallzeiten sind nicht ausgeschlossen.</p>
          <h2>Haftung für Links</h2>
          <p>Für Inhalte verlinkter Drittseiten sind ausschließlich deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.</p>
          <h2>Urheberrecht</h2>
          <p>Die Inhalte unterliegen dem deutschen Urheberrecht. Nutzung außerhalb der gesetzlichen Schranken nur mit Zustimmung der Rechteinhaber. Fotos auf diesem Konzeptentwurf stammen vom öffentlichen Auftritt des Arboretums und dienen der Redesign-Vorlage.</p>
          <p>Diese Seite ist ein unverbindlicher Website-Entwurf von Vantura Studios, nicht der laufende offizielle Internetauftritt.</p>
        </div>
      </section>
    </main>
  )
}
