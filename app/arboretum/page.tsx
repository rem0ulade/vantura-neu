import type { Metadata } from 'next'
import Link from 'next/link'
import { AE, events } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: `${AE.name} – ${AE.claim}`,
  description: AE.description,
}

export default function ArboretumHome() {
  return (
    <main>
      <section className="ae-hero">
        <img className="ae-hero-img" src="/arboretum/hero-lotos.jpg" alt="Erste Lotosblüte im Arboretum Ellerhoop" />
        <div className="ae-hero-shade" />
        <div className="ae-hero-copy">
          <p className="ae-kicker">Norddeutsche Gartenschau · Ellerhoop-Thiensen</p>
          <h1>Willkommen im schönsten Garten im Norden.</h1>
          <p className="ae-lead">
            17,3 Hektar Themengärten, Deutschlands größte Strauch-Pfingstrosen-Sammlung und ein Park, der sich von März bis Oktober neu erfindet.
          </p>
          <div className="ae-actions">
            <Link className="ae-cta ae-cta-light" href="/arboretum/besucherinfos/">Besuch planen</Link>
            <Link className="ae-cta" href="/arboretum/gaerten/" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.45)', color: 'white' }}>Themengärten</Link>
          </div>
          <div className="ae-facts">
            <span>Hauptsaison täglich 10–19 Uhr</span>
            <span>Café im Münsterhof</span>
            <span>Kostenlose Parkplätze</span>
          </div>
        </div>
      </section>

      <section className="ae-section" style={{ background: 'var(--cream)' }}>
        <div className="ae-wrap ae-grid-2">
          <div>
            <p className="ae-kicker" style={{ color: 'var(--gold)' }}>Jetzt im Park</p>
            <h2 style={{ fontSize: 'clamp(36px,5vw,58px)' }}>August: Monat der Lotosblüte.</h2>
          </div>
          <div className="ae-copy">
            <p>
              Eingebettet im historischen Ortsteil Thiensen, bietet das Arboretum eine Vielfalt an Themengärten und ein Blüherlebnis über die Jahreszeiten: von den ersten Frühblühern im März bis zum Indian Summer im Oktober.
            </p>
            <p>
              Entdecken Sie die Strauch-Pfingstrosen, spazieren Sie durch den Bauerngarten mit seiner Stockrosen-Pracht und lassen Sie sich von der Lotosblüte auf dem Parksee fesseln.
            </p>
            <p className="ae-notice">
              Das Arboretum ist zur Hauptsaison täglich von 10 bis 19 Uhr geöffnet. Das Café folgt diesen Zeiten und schließt eine Stunde früher.
            </p>
          </div>
        </div>
      </section>

      <section className="ae-section">
        <div className="ae-wrap">
          <p className="ae-kicker" style={{ color: 'var(--lotus)' }}>Themengärten</p>
          <h2 style={{ fontSize: 'clamp(36px,5vw,58px)', maxWidth: '14ch', marginBottom: 28 }}>Sechs Orte, ein Park.</h2>
          <div className="ae-grid-3">
            {[
              ['/arboretum/peonies.jpg', 'Strauch-Pfingstrosen', 'Die größte Sammlung ihrer Art in Deutschland – 245 Sorten und alle Wildarten.'],
              ['/arboretum/bauerngarten.jpg', 'Bauerngarten', 'Ein Blütenmeer von Frühjahr bis Herbst, geprägt von Stockrosen über 2,50 m Höhe.'],
              ['/arboretum/lotosbluete.jpg', 'Lotossee', 'Nirgendwo in Deutschland blüht die Indische Lotosblume in so ausgedehnter Freilandkultur.'],
              ['/arboretum/wasserwald.jpg', 'Wasserwald', 'Mississippi-Überflutungswald mit seltenen Wasser-Tupelobäumen – ein Forschungsprojekt.'],
              ['/arboretum/narzissen.jpg', 'Wiesenlandschaften', '600.000 Dichter-Narzissen, Iris, Orchideen und der Wiesenpark als Refugium.'],
              ['/arboretum/sherman.jpg', 'General Sherman', 'Die weltweit einzige 1:1-Nachbildung des voluminösesten Baums der Erde.'],
            ].map(([src, title, text]) => (
              <Link key={title} href="/arboretum/gaerten/" className="ae-card">
                <img src={src} alt={title} />
                <div className="ae-card-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ae-split">
        <img className="ae-photo" src="/arboretum/muensterhof.jpg" alt="Historischer Münsterhof im Arboretum" />
        <div className="ae-panel">
          <p className="ae-kicker">Besuch</p>
          <h2 style={{ fontSize: 'clamp(34px,4vw,52px)', margin: '8px 0 18px' }}>Ein Tag zwischen Baumpark und Café.</h2>
          <p>
            Der Garten ist von Mitte Januar bis Ende November geöffnet. In der Hauptsaison – Mitte März bis Ende Oktober – von 10 bis 19 Uhr. Kinder bis 16 Jahre haben freien Eintritt.
          </p>
          <p>
            Im Dielen-Café im Münsterhof gibt es Kuchen, Torten, Kaffeespezialitäten, Eis und herzhafte Kleinigkeiten. Hunde sind an kurzer Leine willkommen.
          </p>
          <div className="ae-actions">
            <Link className="ae-cta ae-cta-light" href="/arboretum/besucherinfos/">Alle Besucherinfos</Link>
          </div>
        </div>
      </section>

      <section className="ae-section">
        <div className="ae-wrap">
          <p className="ae-kicker" style={{ color: 'var(--lotus)' }}>Kalender</p>
          <h2 style={{ fontSize: 'clamp(36px,5vw,52px)', marginBottom: 8 }}>Veranstaltungen 2026</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 640, marginBottom: 12 }}>
            Feste, Führungen, Vorträge und Workshops – Tickets oft direkt im Shop.
          </p>
          <img src="/arboretum/herbstfest.jpg" alt="Herbstfest im Arboretum" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 8, margin: '12px 0 8px' }} />
          {events.slice(0, 4).map((event) => (
            <article key={event.title} className="ae-event">
              <time>{event.date}</time>
              <div>
                <h3>{event.title}</h3>
                <p style={{ color: 'var(--muted)', margin: 0 }}>{event.text}</p>
              </div>
            </article>
          ))}
          <div className="ae-actions" style={{ marginTop: 28 }}>
            <Link className="ae-cta" href="/arboretum/veranstaltungen/">Zum Veranstaltungskalender</Link>
          </div>
        </div>
      </section>

      <section className="ae-quote ae-section">
        <blockquote>Ein Ort der Ruhe und Schönheit – und ein ständig wechselndes Naturtheater.</blockquote>
        <span style={{ letterSpacing: '.16em', textTransform: 'uppercase', fontSize: 12, fontWeight: 700 }}>Arboretum Ellerhoop</span>
      </section>

      <section className="ae-section" style={{ background: 'var(--cream)' }}>
        <div className="ae-wrap ae-grid-2" style={{ alignItems: 'center' }}>
          <div>
            <p className="ae-kicker" style={{ color: 'var(--gold)' }}>Förderkreis</p>
            <h2 style={{ fontSize: 'clamp(34px,4vw,52px)' }}>Der Park lebt von Eintritt, Ehrenamt und Mitgliedschaft.</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: 17 }}>
              Der gemeinnützige Förderkreis betreibt das Arboretum seit 1996. Rund 750 Mitglieder, Gärtner:innen, Café-Team und viele Ehrenamtliche halten 17 Hektar Gartenkunst offen.
            </p>
            <div className="ae-actions">
              <Link className="ae-cta" href="/arboretum/verein/">Mitglied werden</Link>
              <Link className="ae-cta ae-cta-light" href="/arboretum/spenden/">Spenden</Link>
            </div>
          </div>
          <img src="/arboretum/blauer-weg.jpg" alt="Blauer Weg im Arboretum" style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 8 }} />
        </div>
      </section>
    </main>
  )
}
