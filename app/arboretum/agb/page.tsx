import type { Metadata } from 'next'
import { AE } from '@/lib/arboretum'

export const metadata: Metadata = { title: 'AGB' }

export default function AgbPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Rechtliches</p>
        <h1>Allgemeine Geschäftsbedingungen</h1>
        <p>Zusätzlich zur Parkordnung – Förderkreis Arboretum Baumpark Ellerhoop-Thiensen e. V.</p>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <h2>1. Geltungsbereich</h2>
          <p>Diese AGB gelten für Gruppenangebote im Café, Führungen sowie den Kauf von Tickets oder Gutscheinen inklusive pretix-Shop, in der zum Bestellzeitpunkt gültigen Fassung. Abweichende Bedingungen der Kund:innen gelten nicht.</p>
          <h2>2. Gruppen und Stornierungen</h2>
          <p>Angebotspreise stehen unter Vorbehalt. Für den Parkeintritt gelten die Preise des Besuchstags. Gruppenpreise nur bei gemeinsamer Zahlung in einem Vorgang.</p>
          <ul>
            <li>Stornierung Café und Führungen bis 5 Werktage vorher kostenfrei.</li>
            <li>Später: vereinbarter Preis abzüglich ersparter Aufwendungen.</li>
            <li>No-Show am Tag: Preis pro Person abzüglich ersparter Aufwendungen.</li>
            <li>Zusätzliche Gäste können zurückgewiesen werden.</li>
            <li>Zahlung vor Ort in einem Vorgang. Ohne Gedeck-Reservierung keine Platzfreihaltung. Reservierung max. 2 Stunden.</li>
          </ul>
          <h2>3. pretix-Shop und Veranstaltungen</h2>
          <p>Zutritt nur mit gültigem Ticket. Kein Ersatz für abhanden gekommene Tickets. Verträge über Freizeitveranstaltungen nach § 312g Abs. 2 Nr. 9 BGB – kein gesetzliches Widerrufsrecht.</p>
          <h2>4. Allgemeines</h2>
          <p>Ermäßigung nur mit Nachweis, sonst Differenz zum Vollpreis. Für den Park gilt die Parkordnung.</p>
          <h2>5. Kontakt</h2>
          <p>
            Förderkreis Arboretum Baumpark Ellerhoop-Thiensen e. V.<br />
            Aenne von Wurmb (1. Vorsitzende)<br />
            {AE.address}, {AE.zip}<br />
            Telefon {AE.phone}<br />
            {AE.vereinEmail}
          </p>
        </div>
      </section>
    </main>
  )
}
