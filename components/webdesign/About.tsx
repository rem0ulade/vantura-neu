import { BookingLink } from './BookingLink'
import { Reveal } from './Reveal'
import type { Locale } from '@/lib/webdesign-content'

export function About({ locale }: { locale: Locale }) {
  const de = locale === 'de'
  return <section id="studio" className="agency-about agency-section" aria-labelledby="about-heading">
    <div className="agency-container agency-about-grid">
      <Reveal className="agency-studio-mark"><span className="agency-kicker">HAMBURG · DIGITAL STUDIO</span><strong>VANTURA<span>STUDIOS<span className="agency-monogram-dot">.</span></span></strong><div className="agency-studio-disc" aria-hidden>✳</div><span className="agency-kicker">STRATEGIE / DESIGN / DEVELOPMENT</span></Reveal>
      <Reveal><p className="agency-kicker">05 / {de ? 'Das Studio' : 'The studio'}</p>
        <h2 id="about-heading">{de ? <>Deine Idee.<br /><span>Unser Zusammenspiel.</span></> : <>Your idea.<br /><span>Our shared focus.</span></>}</h2>
        <p className="agency-about-text">{de ? 'Wir sind Vantura Studios. Wir verbinden klare Strategie, eigenständiges Design und saubere Entwicklung zu Websites, die dein Unternehmen verständlich machen.' : 'We are Vantura Studios. We bring clear strategy, distinctive design and thoughtful development together to make your business easy to understand.'}</p>
        <p className="agency-about-text">{de ? 'Unser Fokus: Selbstständige, Dienstleister und kleine Unternehmen. Als Team begleiten wir dich vom ersten Austausch bis zur Übergabe – mit kurzen Abstimmungen, einem klaren Plan und einem festen Kontakt.' : 'Our focus: independent professionals, service businesses and small companies. Our team guides you from the first conversation to handover, with a clear plan and a dedicated contact.'}</p>
        <BookingLink placement="about" className="agency-text-link">{de ? 'Lerne das Studio kennen' : 'Meet the studio'} <span aria-hidden>↗</span></BookingLink>
      </Reveal>
    </div></section>
}
