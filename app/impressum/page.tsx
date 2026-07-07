import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
}

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Vantura Studios
        <br />
        Inh. Jonathan Kokalj
        <br />
        Moorkampshöhe 5
        <br />
        25462 Rellingen
        <br />
        Deutschland
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: +49 151 29833507
        <br />
        E-Mail: {SITE.email}
      </p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Jonathan Kokalj, Moorkampshöhe 5, 25462 Rellingen</p>
      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
        übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
        gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalPage>
  )
}
