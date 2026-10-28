import { BookingLink } from './BookingLink'
import { Reveal } from './Reveal'
import type { Locale } from '@/lib/webdesign-content'

export function About({ locale }: { locale: Locale }) {
  const de = locale === 'de'
  return (
    <section id="studio" className="agency-about agency-section" aria-labelledby="about-heading"><div className="agency-container agency-about-grid">
      <Reveal className="agency-monogram"><span>JK<span className="agency-monogram-dot">.</span></span><p>Jonathan Kokalj<br />Design & Development</p></Reveal>
      <Reveal><p className="agency-kicker">05 / {de ? 'Das Studio' : 'The studio'}</p><h2 id="about-heading">{de ? <>Kein Weiterreichen.<br /><span>Direkt Jonathan.</span></> : <>No handoffs.<br /><span>Just Jonathan.</span></>}</h2><p className="agency-about-text">{de ? 'Ich bin Jonathan Kokalj. Von Rellingen bei Hamburg aus gestalte und entwickle ich Websites für Unternehmen – persönlich, mit kurzen Wegen und einem Blick fürs Detail.' : 'I’m Jonathan Kokalj. Based near Hamburg, I design and develop websites for businesses — personally, directly and with an eye for detail.'}</p><BookingLink placement="about" className="agency-text-link">{de ? 'Lernen wir uns kennen' : 'Let’s meet'} <span aria-hidden>↗</span></BookingLink></Reveal>
    </div></section>
  )
}
