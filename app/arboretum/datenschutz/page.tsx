import type { Metadata } from 'next'
import { AE } from '@/lib/arboretum'

export const metadata: Metadata = { title: 'Datenschutz' }

export default function DatenschutzPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Rechtliches</p>
        <h1>Datenschutzerklärung</h1>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <p>Personenbezogene Daten sind Angaben über persönliche oder sachliche Verhältnisse einer bestimmbaren Person – etwa Name, Anschrift, E-Mail, Telefon oder IP-Adresse. Anonyme Daten fallen nicht darunter.</p>
          <h2>Aufruf dieser Website</h2>
          <p>Server können Uhrzeit, Browsertyp, Betriebssystem, Referrer und IP-Adresse speichern – nur zur technischen Administration, ohne Weitergabe an Dritte.</p>
          <h2>Ihre Angaben</h2>
          <p>Wenn Sie uns schreiben, werden die Daten vertraulich und nur zur Bearbeitung Ihrer Anfrage verwendet.</p>
          <h2>Cookies</h2>
          <p>Diese Konzeptseite setzt keine Tracking-Cookies. Sie können Cookies im Browser generell beschränken.</p>
          <h2>Sicherheit</h2>
          <p>Wir schützen Daten vor Verlust und unberechtigtem Zugriff. Eine 100-prozentige Sicherheit, besonders bei E-Mail, gibt es nicht.</p>
          <h2>Externe Links & Karten</h2>
          <p>Links zu Shop, HVV, Instagram, Facebook oder Karten führen zu Dritten mit eigenen Datenschutzregeln.</p>
          <h2>Ihre Rechte</h2>
          <p>Auskunft, Berichtigung, Sperrung oder Löschung: Aenne von Wurmb, Telefon {AE.phone}, E-Mail {AE.email}.</p>
        </div>
      </section>
    </main>
  )
}
