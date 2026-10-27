import type { Locale } from '@/lib/webdesign-content'
import { BookingLink } from './BookingLink'

const packages = [
  {
    name: 'Basic', setup: '690', monthly: '59',
    de: {
      lead: 'Ein professioneller Einstieg mit den wichtigsten Informationen und direktem Kontakt.',
      website: ['Leistungsübersicht mit deinen Fotos', 'Kontaktformular und Klick-zum-Anrufen', 'Für Smartphone, Tablet und Desktop optimiert', 'Technische SEO-Basis', 'Impressum und Datenschutz mit deinen Rechtstexten'],
      care: ['Hosting, SSL und Domain-Verwaltung', 'Updates und monatliche Backups', '30 Minuten Änderungen pro Monat', 'Reaktion innerhalb von 3 Werktagen'],
    },
    en: {
      lead: 'A professional starting point with the essential information and an easy way to get in touch.',
      website: ['Service overview with your photos', 'Contact form and click-to-call', 'Responsive phone, tablet and desktop layouts', 'Technical SEO foundations', 'Legal pages using the texts you provide'],
      care: ['Hosting, SSL and domain management', 'Updates and monthly backups', '30 minutes of changes per month', 'Response within 3 working days'],
    },
  },
  {
    name: 'Standard', setup: '1.290', monthly: '89',
    de: {
      lead: 'Mehr Raum für dein Unternehmen, überzeugende Referenzen und passende Anfragen.',
      website: ['Alles aus Basic, zusätzlich:', 'Erweitertes Anfrageformular mit Datei-Upload', 'Referenz- oder Bildergalerie', 'Eine Seite zu Ausstattung oder Arbeitsweise', 'Über-uns-Seite mit Team und Unternehmen', 'Google-Unternehmensprofil einrichten', 'Bis zu 3 E-Mail-Postfächer einrichten', 'Basis-SEO und Google Search Console'],
      care: ['Alles aus Basic, mit:', 'Wöchentlichen Backups', '1 Stunde Änderungen pro Monat', 'Reaktion innerhalb von 2 Werktagen'],
    },
    en: {
      lead: 'More room for your business, convincing references and relevant inquiries.',
      website: ['Everything in Basic, plus:', 'Extended inquiry form with file upload', 'Project or photo gallery', 'A page about your equipment or process', 'About page introducing your business and team', 'Google Business Profile setup', 'Setup of up to 3 email mailboxes', 'Basic SEO and Google Search Console'],
      care: ['Everything in Basic, with:', 'Weekly backups', '1 hour of changes per month', 'Response within 2 working days'],
    },
  },
  {
    name: 'Premium', setup: '2.290', monthly: '129',
    de: {
      lead: 'Ein umfangreicher Auftritt mit zusätzlichen Inhalten und laufender Pflege.',
      website: ['Alles aus Standard, zusätzlich:', 'Karriereseite mit Stellenanzeigen', 'Zusätzliche Seiten für Zielgruppen oder Leistungen', 'Texterstellung und Bearbeitung deiner Fotos', 'Seite zu Qualität und Zertifikaten', 'Englische Sprachversion'],
      care: ['Alles aus Standard, mit:', 'Pflege des Google-Unternehmensprofils', 'Vierteljährlichem Bericht zu Besuchern, Anfragen und Suchplatzierungen', 'Täglichen Backups', '2 Stunden Änderungen pro Monat', 'Reaktion am nächsten Werktag'],
    },
    en: {
      lead: 'A fuller website with additional content and ongoing care.',
      website: ['Everything in Standard, plus:', 'Careers page with job listings', 'Additional pages for audiences or services', 'Copywriting and editing of your supplied photos', 'Quality and certifications page', 'English language version'],
      care: ['Everything in Standard, with:', 'Google Business Profile maintenance', 'Quarterly report on visitors, inquiries and search positions', 'Daily backups', '2 hours of changes per month', 'Response on the next working day'],
    },
  },
] as const

export function Offers({ locale }: { locale: Locale }) {
  const de = locale === 'de'

  return (
    <section id="angebote" aria-labelledby="angebote-title" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">{de ? 'Pakete & Betreuung' : 'Packages & care'}</p>
        <h2 id="angebote-title" className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">{de ? 'Deine Website. Passend zu deinem Bedarf.' : 'Your website. Built around your needs.'}</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">{de ? 'Drei Pakete zur Orientierung: Du zahlst einmal für die Erstellung und anschließend monatlich für Betrieb und Betreuung. Den genauen Seitenumfang stimmen wir vorab ab und halten ihn im Festpreisangebot fest.' : 'Three packages to help you plan: a one-time website setup, followed by monthly hosting and care. We agree the exact scope and number of pages before you receive your fixed-price proposal.'}</p>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((item) => {
            const copy = item[locale]
            return (
              <article key={item.name} className="flex min-w-0 flex-col border-2 border-ink bg-paper shadow-[4px_4px_0_#111]">
                <div className={`border-b-2 border-ink px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] ${item.name === 'Standard' ? 'bg-signal' : 'bg-ink text-paper'}`}>
                  {item.name === 'Standard' ? (de ? 'Empfehlung · Standard' : 'Recommended · Standard') : item.name}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-3xl font-bold uppercase tracking-[-0.04em]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted lg:min-h-24">{copy.lead}</p>
                  <div className="mt-6 border-y-2 border-ink py-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em]">{de ? 'Erstellung & Veröffentlichung · einmalig ab' : 'Website setup & launch · one-time from'}</p>
                    <p className="mt-2 text-4xl font-bold tracking-[-0.05em]">{de ? item.setup : item.setup.replace('.', ',')} €</p>
                    <p className="mt-4 text-xl font-bold">{item.monthly} € <span className="text-sm font-normal text-muted">{de ? '/ Monat Betreuung' : '/ month care'}</span></p>
                    <p className="mt-2 text-xs leading-5 text-muted">{de ? 'Alle Preise netto zzgl. gesetzlicher Umsatzsteuer.' : 'All prices exclude statutory VAT.'}</p>
                  </div>
                  <h4 className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.12em]">Website</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6">{copy.website.map((point) => <li key={point} className="flex gap-2"><span aria-hidden className="text-signal">✦</span><span>{point}</span></li>)}</ul>
                  <h4 className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.12em]">{de ? 'Laufende Betreuung' : 'Ongoing care'}</h4>
                  <ul className="mb-8 mt-3 space-y-2 text-sm leading-6">{copy.care.map((point) => <li key={point} className="flex gap-2"><span aria-hidden className="text-signal">✦</span><span>{point}</span></li>)}</ul>
                  <BookingLink placement={`package-${item.name.toLowerCase()}`} className="mt-auto inline-flex min-h-12 items-center justify-center border-2 border-ink bg-signal px-4 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.1em] shadow-[3px_3px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">{de ? 'Jetzt Erstgespräch buchen' : 'Book a discovery call'} →</BookingLink>
                </div>
              </article>
            )
          })}
        </div>
        <div className="mt-8 grid gap-6 border-2 border-ink p-6 md:grid-cols-2">
          <div><h3 className="text-lg font-bold">{de ? 'Das gilt für alle Pakete' : 'Included in every agreement'}</h3><p className="mt-3 text-sm leading-7 text-muted">{de ? 'Die Betreuung startet mit der Veröffentlichung. Mindestlaufzeit: 12 Monate, danach monatlich kündbar. Zusätzliche Änderungen außerhalb des enthaltenen Zeitbudgets: 85 € netto pro Stunde, nur nach Absprache. Die einmalige Erstellung zahlst du zu 50 % bei Beauftragung und zu 50 % beim Livegang. Domain und Inhalte gehören dir; bei Kündigung erhältst du alle Daten.' : 'Care starts at launch with a minimum term of 12 months, then cancellation is possible monthly. Additional changes beyond the included time: €85 per hour excluding VAT, agreed in advance. Website setup is paid 50% on order and 50% at launch. Your domain and content belong to you; all data is handed over if you cancel.'}</p></div>
          <div><h3 className="text-lg font-bold">{de ? 'Auf Wunsch ergänzen' : 'Optional additions'}</h3><p className="mt-3 text-sm leading-7 text-muted">{de ? 'Logo und Corporate Design, Visitenkarten und Briefpapier, eine LinkedIn-Unternehmensseite oder die Einrichtung von Google Ads. Preise und Umfang vereinbaren wir separat. Kosten für Anzeigen, externe Lizenzen und E-Mail-Tarife werden bei Bedarf gesondert ausgewiesen.' : 'Logo and brand design, business cards and stationery, a LinkedIn company page or Google Ads setup. Scope and prices are agreed separately. Advertising spend, external licences and email plans are listed separately when needed.'}</p></div>
        </div>
      </div>
    </section>
  )
}
