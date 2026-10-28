import type { Locale } from '@/lib/webdesign-content'
import { WEBSITE_PRICING } from '@/lib/webdesign-pricing'
import { BookingLink } from './BookingLink'
import { Reveal } from './Reveal'

const content = {
  de: [
    { lead: 'Dein professioneller Einstieg.', website: ['Onepager mit bis zu 5 Abschnitten · 1 Korrekturrunde', 'Kontaktformular & Klick-zum-Anrufen', 'Mobil optimiert & technische SEO-Basis', 'Rechtliche Seiten mit deinen Texten'], care: ['Hosting & SSL', 'Technische Pflege', 'Monatliche Backups'] },
    { lead: 'Mehr Raum für dein Unternehmen.', website: ['Bis zu 5 Inhaltsseiten · 2 Korrekturrunden', 'Leistungen, Über uns & Referenzgalerie', 'Erweitertes Anfrageformular', 'Basis-SEO & Google Search Console'], care: ['Hosting & SSL', 'Technische Pflege', 'Wöchentliche Backups'] },
    { lead: 'Ein Auftritt mit mehr Möglichkeiten.', website: ['Bis zu 8 Inhaltsseiten · 2 Korrekturrunden', 'Textüberarbeitung bis 1.500 Wörter & bis 10 Fotos', 'Englische Version mit gelieferten Übersetzungen', 'Karriere- oder zusätzliche Leistungsseiten'], care: ['Hosting & SSL, technische Pflege', 'Tägliche Backups', '30 Minuten Inhaltsänderungen / Monat'] },
  ],
  en: [
    { lead: 'Your professional starting point.', website: ['One page, up to 5 sections · 1 revision round', 'Contact form & click-to-call', 'Mobile layouts & technical SEO basics', 'Legal pages using your supplied texts'], care: ['Hosting & SSL', 'Technical maintenance', 'Monthly backups'] },
    { lead: 'More room for your business.', website: ['Up to 5 content pages · 2 revision rounds', 'Services, about page & project gallery', 'Extended inquiry form', 'Basic SEO & Google Search Console'], care: ['Hosting & SSL', 'Technical maintenance', 'Weekly backups'] },
    { lead: 'A website with more possibilities.', website: ['Up to 8 content pages · 2 revision rounds', 'Copy editing up to 1,500 words & 10 photos', 'English version with supplied translations', 'Careers or additional service pages'], care: ['Hosting & SSL, technical maintenance', 'Daily backups', '30 minutes of content changes / month'] },
  ],
}

export function Offers({ locale }: { locale: Locale }) {
  const de = locale === 'de'
  return (
    <section id="angebote" className="agency-offers agency-section" aria-labelledby="offers-heading">
      <div className="agency-container">
        <Reveal className="agency-section-heading"><p className="agency-kicker">03 / {de ? 'Pakete & Preise' : 'Packages & pricing'}</p><h2 id="offers-heading">{de ? <>Großer Auftritt.<br /><span>Klare Preise.</span></> : <>A bold presence.<br /><span>A clear price.</span></>}</h2><p>{de ? 'Drei Startpunkte. Dein verbindliches Angebot stimmen wir persönlich ab.' : 'Three starting points. Your fixed-price proposal is agreed personally.'}</p></Reveal>
        <div className="agency-package-grid">
          {WEBSITE_PRICING.map((item, index) => {
            const copy = content[locale][index]
            return (
              <Reveal key={item.id} delay={index * 0.08} className={`agency-package-wrap ${index === 1 ? 'agency-package-featured' : ''}`}>
                <article className="agency-package">
                  <div className="agency-package-top"><h3>{item.name}</h3><span>{index === 1 ? (de ? 'Empfehlung' : 'Recommended') : `0${index + 1}`}</span></div>
                  <p className="agency-package-lead">{copy.lead}</p>
                  <div className="agency-setup-price"><span>{de ? 'Einmalig ab' : 'One-time from'}</span><strong>{item.setup.toLocaleString(de ? 'de-DE' : 'en-GB')}<small> €</small></strong></div>
                  <ul className="agency-feature-list">{copy.website.map(point => <li key={point}><span aria-hidden>↗</span>{point}</li>)}</ul>
                  <div className="agency-care"><h4>{de ? 'Betreuung · optional' : 'Care · optional'}</h4><p><strong>{item.monthly} €</strong><span>{de ? ' / Monat' : ' / month'}</span></p><ul>{copy.care.map(point => <li key={point}>{point}</li>)}</ul></div>
                  <BookingLink placement={`package-${item.id}`} className={`agency-button ${index === 1 ? 'agency-button-orange' : 'agency-button-outline'}`}>{de ? 'Erstgespräch buchen' : 'Book a discovery call'} <span aria-hidden>↗</span></BookingLink>
                </article>
              </Reveal>
            )
          })}
        </div>
        <div className="agency-offer-notes"><p>{de ? 'Deine Website. Dein Hosting. Betreuung ist frei wählbar – auch eine reine Übergabe ist möglich.' : 'Your website. Your hosting. Care is optional — a standalone handover is welcome.'}</p><p>{de ? 'Alle Preise netto zzgl. gesetzlicher Umsatzsteuer.' : 'All prices exclude statutory VAT.'}</p></div>
        <details className="agency-terms"><summary>{de ? 'Leistungsumfang & Vertragsdetails' : 'Scope & agreement details'} <span aria-hidden>+</span></summary><p>{de ? 'Du lieferst Logo, Bilder und Grundtexte. Rechtliche Seiten zählen zusätzlich zu den Inhaltsseiten. Eine Korrekturrunde ist eine gebündelte Feedbackliste zum vereinbarten Entwurf. Shops, individuelle Software und neue Inhalte sind separate Leistungen. Seitenumfang, Funktionen und Übergabe vereinbaren wir im Angebot. Website-Erstellung: 50 % bei Beauftragung, 50 % beim Livegang. Nur bei gebuchter Betreuung: Start mit der Veröffentlichung, Mindestlaufzeit 12 Monate, danach monatlich kündbar. Basic und Standard enthalten technische Pflege; Inhaltsänderungen vereinbaren wir separat. Premium enthält 30 Minuten Inhaltsänderungen pro Monat. Weitere Änderungen: 85 € netto pro Stunde, nur nach Absprache. Domain-, E-Mail- und externe Lizenzkosten sowie Reaktionszeiten klären wir vorab. Domain und Inhalte gehören dir; bei Vertragsende erhältst du deine Daten.' : 'Page scope, functionality and handover are agreed in your proposal. Website setup: 50% on order and 50% at launch. Optional care starts at launch with a 12-month minimum term, followed by monthly cancellation. Basic and Standard cover technical maintenance; content changes are agreed separately. Premium includes 30 minutes of content changes per month. Additional changes: €85 per hour excluding VAT, agreed in advance. Domain, email and external licence costs and response times are clarified before work begins. You own your domain and content; your data is handed over when the agreement ends.'}</p></details>
      </div>
    </section>
  )
}
