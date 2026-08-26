import type { Metadata } from 'next'
import { AE, exhibitors } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Lotosblütenfest 2026',
  description: '22. und 23. August 2026 im Arboretum Ellerhoop: Konzerte auf der Seebühne, Markt, Kinderprogramm und Lotosblüte.',
}

export default function LotosfestPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">22. & 23. August 2026 · 10–19 Uhr</p>
        <h1>Lotosblütenfest.</h1>
        <p>Blühende Lotospflanzen im See, Konzerte, Führungen, Aussteller, Kulinarik und Kinderprogramm.</p>
      </header>
      <section className="ae-section ae-prose">
        <div className="ae-wrap ae-grid-2">
          <div>
            <h2>Auf einen Blick</h2>
            <ul>
              <li>Erwachsene 10 €, ermäßigt 8 €, Kinder bis 16 frei, Mitglieder 5 €</li>
              <li>Keine Gruppenrabatte, kein Abendticket, kein Dauerkartenverkauf am Fest</li>
              <li>Kostenlose Parkplätze</li>
            </ul>
            <p>
              <a className="ae-cta" href={AE.shop} target="_blank" rel="noreferrer">Tickets im Vorverkauf</a>
            </p>
            <h2>Musik auf der Seebühne</h2>
            <p>Samstag 16 Uhr: Klavierkonzert mit Susanne von Laun (Wiener Klassik bis frühe Romantik).</p>
            <p>Sonntag: Harfe Birthe Meyer (15 und 17 Uhr) und Klavier Markus Schell (16 und 18 Uhr).</p>
            <h2>Geschichten & Wissen</h2>
            <p>Asiatische Märchen mit Annette Busch, beide Tage 14 Uhr, Treffpunkt gegenüber der Seebühne.</p>
            <p>Vortrag zur Lotosblüte mit Heiko Jessen, beide Tage 14 Uhr, Lotos-Terrasse.</p>
            <h2>Kinder</h2>
            <p>Ab 13:30 Uhr Basteln, Spiel und Bewegung – wetterabhängig, an beiden Tagen.</p>
          </div>
          <div>
            <img src="/arboretum/seerosen.jpg" alt="Blaue Seerosen" style={{ borderRadius: 8, marginBottom: 24 }} />
            <h2>Café & Genuss</h2>
            <p>Kuchen, Torten, Kaffee, Eis, Waffeln, Grill und Pommes. Im Innenhof Döner und orientalische Spezialitäten.</p>
            <h2>Besondere Aktionen</h2>
            <ul>
              <li>Rosenkinder – Batikkunst aus Sri Lanka mit Live-Vorführung</li>
              <li>Greenpeace – Natur- und Umweltschutz</li>
              <li>Aquarelle von Gudrun Seehofer gegen Spende für das Arboretum</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ae-section" style={{ background: 'var(--cream)' }}>
        <div className="ae-wrap">
          <h2 style={{ fontSize: 36, marginBottom: 8 }}>Markt & Ausstellende</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 20 }}>Kunsthandwerk, regionale Spezialitäten und Naturprodukte. Liste wird laufend ergänzt.</p>
          <div className="ae-grid-3">
            {exhibitors.map((name) => (
              <div key={name} className="ae-card"><div className="ae-card-body"><p style={{ margin: 0 }}>{name}</p></div></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
