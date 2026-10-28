import './agency.css'
import { ProjectInquiry } from './ProjectInquiry'
import { BookingLink } from './BookingLink'
import { Reveal } from './Reveal'
import type { Locale } from '@/lib/webdesign-content'
import { SITE } from '@/lib/site'
import { t } from '@/lib/webdesign-content'

export function Cta({ locale }: { locale: Locale }) {
  const de = locale === 'de'
  const copy = t(locale)
  return (
    <section id="termin" className="agency-closing agency-section" aria-labelledby="closing-heading"><div className="agency-container"><Reveal><p className="agency-kicker">{de ? 'Dein nächster Schritt' : 'Your next step'}</p><h2 id="closing-heading">{de ? <>Dein Auftritt.<br />Unser nächstes Projekt?</> : <>Your website.<br />Our next project?</>}</h2><div className="agency-actions"><BookingLink placement="closing" className="agency-button agency-button-dark">{de ? 'Kostenloses Erstgespräch' : 'Free discovery call'} <span aria-hidden>↗</span></BookingLink><a href={`mailto:${SITE.email}?subject=${encodeURIComponent(de ? 'Projektanfrage Website' : 'Website project inquiry')}&body=${encodeURIComponent(de ? 'Hallo Vantura-Team,\n\nMein Unternehmen / meine Website:\nWas ich brauche:\nBudgetrahmen:\nGewünschter Zeitraum:\n' : 'Hello Vantura team,\n\nMy business / website:\nWhat I need:\nBudget:\nPreferred timing:\n')}`} className="agency-text-link">{de ? 'Projekt per E-Mail anfragen' : 'Send a project inquiry'} <span aria-hidden>↗</span></a></div><p className="agency-micro">{de ? '30 Minuten · Kostenlos & unverbindlich · Google Meet' : '30 minutes · Free & no obligation · Google Meet'}</p><ProjectInquiry locale={locale} /></Reveal></div></section>
  )
}
