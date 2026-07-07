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
        {/* TODO: Vor Veröffentlichung mit echten Unternehmensdaten befüllen. */}
        {SITE.name}
        <br />
        Jonathan Kokalj
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ und Ort]
      </p>
      <h2>Kontakt</h2>
      <p>
        E-Mail: {SITE.email}
        <br />
        Telefon: [Telefonnummer]
      </p>
      <h2>Umsatzsteuer-ID</h2>
      <p>[USt-IdNr. gemäß § 27 a Umsatzsteuergesetz — sofern vorhanden]</p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Jonathan Kokalj, Anschrift wie oben</p>
    </LegalPage>
  )
}
