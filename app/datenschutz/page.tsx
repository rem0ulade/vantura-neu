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
      <h2>Allgemeine Hinweise</h2>
      <p>
        Diese Website verarbeitet personenbezogene Daten so sparsam wie möglich. Es werden
        keine Cookies gesetzt, keine Tracking-Dienste eingebunden und keine Besucherprofile
        erstellt.
      </p>
      <h2>Hosting</h2>
      <p>
        Diese Website wird über GitHub Pages (GitHub, Inc.) bereitgestellt. Beim Aufruf der
        Seite verarbeitet GitHub technisch notwendige Verbindungsdaten (z.&nbsp;B.
        IP-Adresse) zur Auslieferung der Inhalte. Details finden Sie in der{' '}
        <a
          href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>
      <h2>Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail an {SITE.email} kontaktieren, werden Ihre Angaben zur
        Bearbeitung der Anfrage und für Anschlussfragen gespeichert. Diese Daten geben wir
        nicht ohne Ihre Einwilligung weiter.
      </p>
      <h2>Verantwortliche Stelle</h2>
      <p>
        {/* TODO: Vor Veröffentlichung mit echten Unternehmensdaten befüllen. */}
        Jonathan Kokalj — Kontaktdaten siehe Impressum.
      </p>
      <h2>Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
        der Verarbeitung Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei der
        zuständigen Aufsichtsbehörde.
      </p>
    </LegalPage>
  )
}
