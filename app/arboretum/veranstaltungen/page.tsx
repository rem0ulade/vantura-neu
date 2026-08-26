import type { Metadata } from 'next'
import Link from 'next/link'
import { AE, events } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Veranstaltungen',
  description: 'Lotosblütenfest, Herbstfest, Führungen, Workshops und Gartenakademie im Arboretum Ellerhoop.',
}

export default function VeranstaltungenPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Feste, Führungen, Vorträge</p>
        <h1>Der Park als Bühne.</h1>
        <p>Tickets oft direkt im Shop – oder weitere Infos auf der jeweiligen Seite.</p>
      </header>
      <section className="ae-section">
        <div className="ae-wrap">
          {events.map((event) => (
            <article key={event.title} className="ae-event">
              <time>{event.date}</time>
              <div>
                <h3>{event.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{event.text}</p>
                {event.href ? <Link href={event.href}>Zur Veranstaltungsseite</Link> : null}
              </div>
            </article>
          ))}
          <div className="ae-actions" style={{ marginTop: 32 }}>
            <a className="ae-cta" href={AE.shop} target="_blank" rel="noreferrer">Tickets buchen</a>
            <Link className="ae-cta ae-cta-light" href="/arboretum/gartenakademie/">Gartenakademie</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
