import type { Locale } from '@/lib/webdesign-content'
import { Reveal } from './Reveal'

export function Services({ locale }: { locale: Locale }) {
  const de = locale === 'de'
  const items = de ? [
    { title: 'Dein Auftritt.', text: 'Für Selbstständige, lokale Betriebe und kleine Teams: Dein Angebot wird verständlich und die Kontaktaufnahme einfach.', symbol: '↗' },
    { title: 'Dein Freiraum.', text: 'Ein Ansprechpartner für Gestaltung, Entwicklung und Veröffentlichung.', symbol: '✳' },
    { title: 'Dein Festpreis.', text: 'Du kennst den Umfang und die Kosten, bevor es losgeht.', symbol: '◎' },
  ] : [
    { title: 'Your identity.', text: 'Individual design that fits your business.', symbol: '↗' },
    { title: 'Your time back.', text: 'One contact for design, development and launch.', symbol: '✳' },
    { title: 'Your fixed price.', text: 'A clear scope and price before the work begins.', symbol: '◎' },
  ]
  return (
    <section id="leistungen" className="agency-benefits agency-section" aria-labelledby="benefits-heading">
      <div className="agency-container"><Reveal className="agency-section-heading"><p className="agency-kicker">02 / {de ? 'Das bekommst du' : 'What you get'}</p><h2 id="benefits-heading">{de ? <>Gutes Design.<br />Gutes Gefühl.</> : <>Good design.<br />Good feeling.</>}</h2></Reveal>
        <div className="agency-benefit-grid">{items.map((item, index) => <Reveal key={item.title} delay={index * 0.08} className="agency-benefit"><span className="agency-benefit-symbol" aria-hidden>{item.symbol}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
      </div>
    </section>
  )
}
