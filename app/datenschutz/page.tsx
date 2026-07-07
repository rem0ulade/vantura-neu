import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false },
}

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
      <p>
        Vantura Studios
        <br />
        Inh. Jonathan Kokalj
        <br />
        Moorkampshöhe 5, 25462 Rellingen
        <br />
        E-Mail: {SITE.email}
      </p>

      <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>
        Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung
        unserer Website erforderlich ist. Beim Besuch dieser Website werden automatisch
        technische Zugriffsdaten (sog. Server-Logfiles) verarbeitet: IP-Adresse, Datum
        und Uhrzeit des Zugriffs, aufgerufene URL sowie Browser und Betriebssystem.
        Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit
        der Website und werden nicht mit anderen Daten zusammengeführt. Rechtsgrundlage:
        Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird über GitHub Pages (GitHub, Inc., USA) bereitgestellt. Beim
        Aufruf der Seite verarbeitet GitHub die unter Ziffer 2 genannten Verbindungsdaten
        zur Auslieferung der Inhalte. Der Datentransfer in die USA erfolgt auf Grundlage
        des EU-U.S. Data Privacy Framework bzw. von Standardvertragsklauseln gemäß
        Art. 46 DSGVO. Details finden Sie in der{' '}
        <a
          href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>

      <h2>4. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten
        (Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage und für
        Anschlussfragen gespeichert und verarbeitet. Eine Weitergabe an Dritte erfolgt
        nicht. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>5. Cookies und Tracking</h2>
      <p>
        Diese Website verwendet keine Cookies, keine Tracking-Dienste und keine
        Analyse-Tools. Es werden keine Besucherprofile erstellt.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben gemäß DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
        Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und
        Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht (Art. 21). Zur
        Ausübung Ihrer Rechte wenden Sie sich bitte an: {SITE.email}
      </p>

      <h2>7. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        Zuständig für Schleswig-Holstein ist das Unabhängige Landeszentrum für
        Datenschutz (ULD),{' '}
        <a href="https://www.datenschutzzentrum.de" rel="noopener noreferrer">
          www.datenschutzzentrum.de
        </a>
        .
      </p>

      <h2>8. Aktualität dieser Erklärung</h2>
      <p>
        Diese Datenschutzerklärung hat den Stand Juli 2026. Sie kann bei Änderungen
        unserer Website oder gesetzlichen Anforderungen angepasst werden.
      </p>
    </LegalPage>
  )
}
