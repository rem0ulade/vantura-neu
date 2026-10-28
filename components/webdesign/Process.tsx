import type { Locale } from '@/lib/webdesign-content'
import { Reveal } from './Reveal'

export function Process({ locale }: { locale: Locale }) {
  const de = locale === 'de'
  const steps = de ? [
    { title: 'Kennenlernen.', text: '30 Minuten für deine Ideen. Danach erhältst du ein klares Angebot.' },
    { title: 'Gestalten & bauen.', text: 'Du siehst den Entwurf. Wir setzen dein Feedback und die Website um.' },
    { title: 'Online gehen.', text: 'Alles geprüft, veröffentlicht und an dich übergeben. Betreuung auf Wunsch.' },
  ] : [
    { title: 'Meet.', text: '30 minutes for your ideas. A clear proposal follows.' },
    { title: 'Design & build.', text: 'You review the design. We develop your website and incorporate your feedback.' },
    { title: 'Go live.', text: 'Checked, published and handed over. Optional care afterwards.' },
  ]
  return <section className="agency-process agency-section" aria-labelledby="process-heading"><div className="agency-container"><Reveal className="agency-section-heading"><p className="agency-kicker">04 / {de ? 'So einfach geht’s' : 'How it works'}</p><h2 id="process-heading">{de ? 'Von der Idee. Ins Web.' : 'From idea. To online.'}</h2></Reveal><ol className="agency-process-grid">{steps.map((step, index) => <li key={step.title}><Reveal delay={index * 0.08}><span className="agency-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></Reveal></li>)}</ol></div></section>
}
