import { CONTACT_HREF } from '@/lib/site'

export type Locale = 'en' | 'de'

export const webdesignCopy = {
  en: {
    navWork: 'Work',
    navServices: 'Services',
    navCta: 'Start a project',
    heroBrand: 'VANTURA',
    heroTitle: 'Websites that sell.',
    heroText: 'Webdesign · Shops · Relaunch — built so visitors act.',
    heroCta: 'Project inquiry',
    heroSecondary: 'See work',
    servicesEyebrow: 'Services',
    servicesTitle: 'What we build.',
    services: [
      {
        number: '01',
        title: 'Websites',
        text: 'Landing pages and company sites with one job: make the next step obvious.',
      },
      {
        number: '02',
        title: 'Online shops',
        text: 'Product stories, carts and checkout flows that feel clear on every screen.',
      },
      {
        number: '03',
        title: 'Relaunch',
        text: 'Replace tired templates with a sharper brand presence and faster pages.',
      },
    ],
    capabilitiesEyebrow: 'Craft',
    capabilitiesTitle: 'What a website can do.',
    capabilitiesLead: 'Scroll — this page is the proof.',
    capabilities: [
      { title: 'Layout that leads', text: 'Hierarchy first. Eyes know where to go before they read.' },
      { title: 'Type with force', text: 'Oversized display, tight tracking, zero filler copy.' },
      { title: 'Hover that reacts', text: 'Interfaces feel alive without getting in the way.' },
      { title: 'Shop-ready UI', text: 'Product grids, CTAs and trust blocks built for conversion.' },
    ],
    workEyebrow: 'Work',
    workTitle: 'Proof on this domain.',
    workLead: 'Open any project without leaving vantura-studios.com.',
    workCta: 'Open demo',
    workIndexTitle: 'Selected work',
    workIndexLead: 'In-site demos. Stay here — no github.io detour.',
    workBack: '← Vantura Work',
    processEyebrow: 'Process',
    processTitle: 'Four steps. Clear result.',
    process: [
      { number: '01', title: 'Brief', text: 'Goals, audience, offer — we cut to what matters.' },
      { number: '02', title: 'Design', text: 'Direction, pages and motion before heavy build.' },
      { number: '03', title: 'Build', text: 'Fast, responsive, production-ready front end.' },
      { number: '04', title: 'Launch', text: 'Handover, tweaks and a site you can grow.' },
    ],
    ctaTitle: 'Ready for a site that sells?',
    ctaText: 'Tell me about the project. Direct reply — no sales ladder.',
    ctaButton: 'Email the studio',
    footerTag: 'Webdesign · Shops · Relaunch',
    legal: 'Legal notice',
    privacy: 'Privacy',
    contactHref: CONTACT_HREF,
  },
  de: {
    navWork: 'Work',
    navServices: 'Leistungen',
    navCta: 'Projekt anfragen',
    heroBrand: 'VANTURA',
    heroTitle: 'Websites, die verkaufen.',
    heroText: 'Webdesign · Shops · Relaunch — gebaut, damit Besucher handeln.',
    heroCta: 'Projekt anfragen',
    heroSecondary: 'Arbeiten ansehen',
    servicesEyebrow: 'Leistungen',
    servicesTitle: 'Was wir bauen.',
    services: [
      {
        number: '01',
        title: 'Websites',
        text: 'Landingpages und Firmenauftritte mit einem Job: den nächsten Schritt klar machen.',
      },
      {
        number: '02',
        title: 'Online-Shops',
        text: 'Produktstory, Warenkorb und Checkout — klar auf jedem Screen.',
      },
      {
        number: '03',
        title: 'Relaunch',
        text: 'Alte Templates ersetzen durch schärfere Marke und schnellere Seiten.',
      },
    ],
    capabilitiesEyebrow: 'Craft',
    capabilitiesTitle: 'Was eine Website kann.',
    capabilitiesLead: 'Scrollen — diese Seite ist der Beweis.',
    capabilities: [
      { title: 'Layout, das führt', text: 'Hierarchie zuerst. Der Blick weiß, wohin — vor dem Lesen.' },
      { title: 'Typo mit Kraft', text: 'Große Display-Schrift, enges Tracking, kein Fülltext.' },
      { title: 'Hover, der reagiert', text: 'Interfaces wirken lebendig, ohne zu stören.' },
      { title: 'Shop-UI', text: 'Produktgrids, CTAs und Trust-Blöcke für Conversion.' },
    ],
    workEyebrow: 'Work',
    workTitle: 'Beweis auf dieser Domain.',
    workLead: 'Jedes Projekt öffnet sich auf vantura-studios.com — ohne Absprung.',
    workCta: 'Demo öffnen',
    workIndexTitle: 'Ausgewählte Arbeiten',
    workIndexLead: 'In-Site-Demos. Bleib hier — kein Umweg über github.io.',
    workBack: '← Vantura Work',
    processEyebrow: 'Ablauf',
    processTitle: 'Vier Schritte. Klares Ergebnis.',
    process: [
      { number: '01', title: 'Briefing', text: 'Ziele, Zielgruppe, Angebot — wir schneiden aufs Wesentliche.' },
      { number: '02', title: 'Design', text: 'Richtung, Seiten und Motion vor dem schweren Build.' },
      { number: '03', title: 'Umsetzung', text: 'Schnell, responsive, produktionsreif.' },
      { number: '04', title: 'Launch', text: 'Übergabe, Feinschliff und eine Seite, die wachsen kann.' },
    ],
    ctaTitle: 'Bereit für eine Website, die verkauft?',
    ctaText: 'Erzähl kurz vom Projekt. Direkte Antwort — keine Verkaufsleiter.',
    ctaButton: 'Studio mailen',
    footerTag: 'Webdesign · Shops · Relaunch',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    contactHref: CONTACT_HREF,
  },
} as const

export function t(locale: Locale) {
  return webdesignCopy[locale]
}

export function workHref(locale: Locale, slug?: string) {
  const base = locale === 'de' ? '/de/work' : '/work'
  return slug ? `${base}/${slug}/` : `${base}/`
}

export function homeHref(locale: Locale) {
  return locale === 'de' ? '/de/' : '/'
}
