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
        Diese Website wird über Vercel (Vercel Inc., USA) bereitgestellt. Dabei
        werden technische Verbindungsdaten zur Auslieferung und Absicherung der
        Website verarbeitet. Weitere Informationen finden Sie in der{' '}
        <a href="https://vercel.com/legal/privacy-notice" rel="noopener noreferrer">
          Datenschutzerklärung von Vercel
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
        Auf unserer Website werden keine Analyse- oder Werbetracking-Skripte
        geladen. Die Terminbuttons führen zu einer externen Buchungsseite von
        Calendly. Dabei können Kampagnenparameter (UTM) zur Zuordnung der
        Buchungsquelle im Link übergeben werden. Diese Parameter werden auf
        unserer Website nicht in Cookies oder im Browserspeicher gespeichert.
      </p>

      <h2>6. Terminbuchung über Calendly</h2>
      <p>
        Für die freiwillige Terminbuchung verlinken wir auf Calendly, LLC (USA).
        Erst wenn Sie den Terminlink öffnen, wird die externe Buchungsseite
        aufgerufen. Calendly ist auf unserer Website nicht eingebettet. Die bei
        der Buchung angegebenen Kontaktdaten, Ihr Anliegen und der gewählte
        Termin werden zur Vorbereitung und Durchführung des Gesprächs verarbeitet.
        Alternativ können Sie uns per E-Mail kontaktieren. Informationen zur
        Datenverarbeitung und zu internationalen Übermittlungen finden Sie in der{' '}
        <a href="https://calendly.com/legal/privacy-notice" rel="noopener noreferrer">
          Datenschutzerklärung von Calendly
        </a>
        .
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>
        Sie haben gemäß DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
        Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und
        Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht (Art. 21). Zur
        Ausübung Ihrer Rechte wenden Sie sich bitte an: {SITE.email}
      </p>

      <h2>8. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        Zuständig für Schleswig-Holstein ist das Unabhängige Landeszentrum für
        Datenschutz (ULD),{' '}
        <a href="https://www.datenschutzzentrum.de" rel="noopener noreferrer">
          www.datenschutzzentrum.de
        </a>
        .
      </p>

      <h2>9. Aktualität dieser Erklärung</h2>
      <p>
        Diese Datenschutzerklärung hat den Stand Oktober 2026. Sie kann bei Änderungen
        unserer Website oder gesetzlichen Anforderungen angepasst werden.
      </p>
    </LegalPage>
  )
}
