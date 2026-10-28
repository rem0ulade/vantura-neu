'use client'

import { BookingLink } from './BookingLink'
import { HeroBackdrop } from './HeroBackdrop'
import { t, type Locale } from '@/lib/webdesign-content'

export function Hero({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const de = locale === 'de'
  const lines = de ? ['Websites,', 'die Eindruck', 'machen.'] : ['Websites', 'with real', 'character.']

  return (
    <section className="agency-hero" aria-labelledby="hero-heading">
      <HeroBackdrop locale={locale} />
      <div className="agency-container agency-hero-grid">
        <div className="agency-hero-copy">
          <p className="agency-kicker">{de ? 'Vantura Studios · Deutschlandweit' : 'Vantura Studios · Throughout Germany'}</p>
          <h1 id="hero-heading" className="agency-display">
            {lines.map((line, index) => <span className="agency-title-mask" key={line}><span style={{ animationDelay: `${index * 100}ms` }}>{line}</span></span>)}
          </h1>
          <p className="agency-hero-lead">{de ? 'Webdesign für Selbstständige und kleine Unternehmen. Damit dein Angebot überzeugt – und der Weg zur Anfrage kurz bleibt.' : 'Web design for independent professionals and small businesses. A clear offer and a short path to getting in touch.'}</p>
          <div className="agency-actions">
            <BookingLink placement="hero" className="agency-button agency-button-orange">{de ? 'Erstgespräch buchen' : 'Book a discovery call'} <span aria-hidden>↗</span></BookingLink>
            <a className="agency-text-link" href="#featured">{de ? 'Arbeiten entdecken' : 'Explore the work'} <span aria-hidden>↓</span></a>
          </div>
          <p className="agency-micro">{de ? '30 Minuten. Kostenlos. Ganz unverbindlich.' : '30 minutes. Free. No obligation.'}</p>
        </div>

      </div>
      <div className="agency-container agency-hero-bottom"><span>{de ? 'Design & Entwicklung aus einer Hand' : 'Design & development in one place'}</span><a href="#featured">{de ? 'Runterscrollen. Eindruck gewinnen.' : 'Scroll down. Get a feel for it.'} <span aria-hidden>↓</span></a></div>
    </section>
  )
}
