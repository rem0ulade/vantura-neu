import type { Metadata } from 'next'
import Link from 'next/link'
import { AE, hours, prices } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Besucherinfos',
  description: 'Öffnungszeiten, Eintrittspreise, Anfahrt, Parkordnung, Barrierefreiheit und Café im Arboretum Ellerhoop.',
}

export default function BesucherinfosPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Praktisches</p>
        <h1>Alles für Ihren Besuch.</h1>
        <p>Öffnungszeiten, Preise, Anfahrt, Parkordnung, Führungen und Barrierefreiheit – klar und vollständig.</p>
      </header>

      <section className="ae-section">
        <div className="ae-wrap ae-grid-2">
          <div>
            <h2 id="oeffnungszeiten" style={{ fontSize: 42 }}>Öffnungszeiten</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
              Mitte Januar bis Ende November. Hauptsaison Mitte März bis Ende Oktober. Bei Sturmwarnung bitte die Startseite prüfen. Gruppenanmeldung ist nicht Pflicht, hilft aber Café und Kasse.
            </p>
          </div>
          <table className="ae-table">
            <thead><tr><th>Zeitraum</th><th>Garten</th></tr></thead>
            <tbody>
              {hours.map((row) => (
                <tr key={row.when}>
                  <td>{row.when}<span className="ae-note">Café: {row.cafe}</span></td>
                  <td><strong>{row.garden}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="ae-section" style={{ background: 'var(--cream)' }}>
        <div className="ae-wrap">
          <h2 id="eintrittspreise" style={{ fontSize: 42, marginBottom: 12 }}>Eintrittspreise</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 720, marginBottom: 24 }}>
            Unterhalt kommt aus Eintritt, Spenden, Mitgliedsbeiträgen, Ehrenamt und einem begrenzten Zuschuss des Kreises Pinneberg – anders als voll finanzierte Stadtparks.
          </p>
          <table className="ae-table">
            <tbody>
              {prices.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}{row.note ? <span className="ae-note">{row.note}</span> : null}</td>
                  <td><strong>{row.value}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 20 }}>
            <a className="ae-cta" href={AE.shop} target="_blank" rel="noreferrer">Tickets & Gutscheine</a>
          </p>
        </div>
      </section>

      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-grid-2">
          <div>
            <h2 id="anfahrt">Anfahrt</h2>
            <p><strong>{AE.name}</strong><br />{AE.address}<br />{AE.zip}</p>
            <h3>Auto</h3>
            <p>A23, Ausfahrt Tornesch, Richtung Barmstedt, nach ca. 300 m den Hinweisen folgen. Kostenlose Parkplätze am Eingang.</p>
            <h3>Fahrrad</h3>
            <p>Ein gutes Tourenziel. Fahrradständer sind ausreichend vorhanden.</p>
            <h3>ÖPNV</h3>
            <p>
              Aus Hamburg mit RB 61 oder S3 nach Pinneberg, dann Bus 185 (Bf. Elmshorn) oder X95 (Airport–Elmshorn). Aus Elmshorn Bus 185 Richtung S Halstenbek oder X95 Richtung Airport. Haltestelle <strong>Ellerhoop, Arboretum</strong>, dann ca. 700 m zu Fuß.
            </p>
            <p><a href={AE.hvv} target="_blank" rel="noreferrer">Fahrplan HVV</a></p>
          </div>
          <div>
            <h2 id="gartenplan">Gartenplan</h2>
            <p>Der Übersichtsplan zeigt Wege, Themengärten, Café und Spielbereiche.</p>
            <a href={AE.parkplan} target="_blank" rel="noreferrer">
              <img src="/arboretum/parkplan.png" alt="Parkplan Arboretum Ellerhoop" style={{ border: '1px solid var(--line)', background: 'white' }} />
            </a>
            <p><a href={AE.parkplan} target="_blank" rel="noreferrer">Parkplan als PDF</a></p>
            <h3 id="baumkataster">Baumkataster</h3>
            <p>Die runden Nummernplaketten gehören zu einer Liste mit über 400 Bäumen. Fehlt ein Etikett, finden Sie den Namen in der Liste.</p>
            <p>
              <a href={AE.baumkataster} target="_blank" rel="noreferrer">Baumkataster (PDF)</a>
              {' · '}
              <a href={AE.baumbestandsplan} target="_blank" rel="noreferrer">Baumbestandsplan (PDF)</a>
            </p>
          </div>
        </div>
      </section>

      <section className="ae-section" style={{ background: 'var(--cream)' }}>
        <div className="ae-wrap ae-grid-3">
          <article className="ae-card"><div className="ae-card-body">
            <h3>Barrierefreiheit</h3>
            <p>Hauptwege rollstuhlgerecht. Rollatoren, Rollstühle und E-Scooter (nur mit Erfahrung) nach E-Mail-Reservierung unter der Woche. Café barrierefrei. WC neben dem Café und saisonal am NDR-Garten.</p>
          </div></article>
          <article className="ae-card"><div className="ae-card-body">
            <h3>Kinder</h3>
            <p>Steg und Guckkästen am Lotos-See, Rätselkabinett, schulbiologische Abteilung, Bernsteingarten, Outdoor-Filme, große Wiese und Barfußparcours. Kinderführungen ab 17 Kindern 4 €, sonst 65 € pauschal.</p>
          </div></article>
          <article className="ae-card"><div className="ae-card-body">
            <h3>Führungen</h3>
            <p>Während der Öffnungszeiten, Themen nach Vereinbarung. Bis 12 Personen 60 € pauschal, darüber 5 € pro Person zusätzlich zum Eintritt. Themenführungen 15 € inkl. Eintritt. Max. 30 Personen.</p>
          </div></article>
        </div>
      </section>

      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-narrow">
          <h2>Parkordnung</h2>
          <p>Das Arboretum ist eine Einrichtung des Kreises Pinneberg: Sammlung, Bildung, Naherholung, Sichtungsgarten und Forschung.</p>
          <ul>
            <li>Anweisungen des gärtnerischen Personals beachten.</li>
            <li>Fahrräder und Fahrzeuge nur auf vorgesehenen Stellplätzen.</li>
            <li>Pflanzen und Pflanzenteile – auch Früchte und Samen – nicht beschädigen, pflücken oder mitnehmen.</li>
            <li>Staudenflächen und Blumenwiesen nicht betreten.</li>
            <li>Hunde an kurzer Leine, Hinterlassenschaften entfernen – auch im Wiesenpark.</li>
            <li>Kein offenes Feuer, kein Grillen. Kleine Picknicks ja; mitgebrachte Speisen im Café und auf der Terrasse nein.</li>
            <li>Betreten auf eigene Gefahr, besonders bei Schnee, Glätte und Sturm.</li>
          </ul>
            <h3>Café, Gruppen & Gärtnerei</h3>
            <img src="/arboretum/gaertnerei.jpg" alt="Staudengärtnerei am Arboretum" style={{ borderRadius: 8, margin: '12px 0' }} />
          <p>Gruppenangebote (Imbiss, Kaffeetafel, Frühstück ab 20 Personen) per E-Mail an das Büro. Toiletten im Münsterhof inkl. wickelgerechtem und barrierefreiem WC; in der Saison Komposttoiletten am NDR-Garten.</p>
          <p>Die Staudengärtnerei Heiko Müller verkauft auf dem Hof – Öffnungszeiten nur über <a href={AE.gaertnerei} target="_blank" rel="noreferrer">gaertnerei-am-arboretum.de</a>.</p>
          <p>Büro: Montag bis Freitag 8–12 Uhr. Wochenende unbesetzt. <Link href="/arboretum/kontakt/">Kontakt</Link></p>
        </div>
      </section>
    </main>
  )
}
