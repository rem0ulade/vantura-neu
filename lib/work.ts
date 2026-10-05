export type WorkItem = {
  slug: string
  repo: string
  title: { en: string; de: string }
  blurb: { en: string; de: string }
  challenge: { en: string; de: string }
  result: { en: string; de: string }
  kind: { en: string; de: string }
  featured?: boolean
  /** Path under public/, also iframe src with trailing slash */
  publicPath: string
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'bonsai-home',
    repo: 'bonsai-home',
    title: { en: 'Bonsai Home', de: 'Bonsai Home' },
    blurb: {
      en: 'A smart-home sales site that explains a complex offer clearly, so visitors can see why to buy.',
      de: 'Smart-Home-Verkaufsseite, die ein komplexes Angebot klar und nachvollziehbar erklärt.',
    },
    challenge: {
      en: 'Too many features, too little clarity. Visitors left before the offer landed.',
      de: 'Zu viele Features, zu wenig Klarheit. Besucher sprangen ab, bevor das Angebot ankam.',
    },
    result: {
      en: 'A clear product story, structured pages and calls to action that lead to consultation requests.',
      de: 'Eine klare Produktgeschichte, gut gegliederte Seiten und Buttons, die zur Beratungsanfrage führen.',
    },
    kind: { en: 'Sales website', de: 'Verkaufsseite' },
    featured: true,
    publicPath: '/demos/bonsai-home/',
  },
  {
    slug: 'grace',
    repo: 'grace_webpage_v1',
    title: { en: 'Grace', de: 'Grace' },
    blurb: {
      en: 'Product marketing for a multi-agent workspace: ambitious, but still easy to read.',
      de: 'Produktmarketing für einen Multi-Agent-Workspace: ambitioniert, aber gut lesbar.',
    },
    challenge: {
      en: 'A technical product needed a public face that non-engineers could trust.',
      de: 'Ein technisches Produkt brauchte einen öffentlichen Auftritt, dem auch Nicht-Techniker vertrauen.',
    },
    result: {
      en: 'Positioning, page sections and animation that tell the product story without drowning in jargon.',
      de: 'Positionierung, Abschnitte und Animationen, die das Produkt erklären, ohne in Fachjargon zu versinken.',
    },
    kind: { en: 'Product site', de: 'Produktseite' },
    featured: true,
    publicPath: '/demos/grace/',
  },
  {
    slug: 'arslan-gartenloewe',
    repo: 'arslan-gartenloewe',
    title: { en: 'Arslan Gartenlöwe', de: 'Arslan Gartenlöwe' },
    blurb: {
      en: 'A local garden business online: services, credibility and an easy way to get in touch.',
      de: 'Gartenbetrieb online: Leistungen, Vertrauen und ein klarer Weg zur Anfrage.',
    },
    challenge: {
      en: 'Strong craft offline, almost no digital presence that matched the work.',
      de: 'Starkes Handwerk offline, aber online nichts, was zur Qualität der Arbeit passte.',
    },
    result: {
      en: 'A website built around the services, with local credibility and a direct way to inquire.',
      de: 'Eine Website rund um die Leistungen, mit regionaler Glaubwürdigkeit und direktem Anfrageweg.',
    },
    kind: { en: 'Local business', de: 'Lokalgeschäft' },
    featured: true,
    publicPath: '/demos/arslan-gartenloewe/',
  },
  {
    slug: 'proud-together',
    repo: 'proud-together',
    title: { en: 'Proud Together', de: 'Proud Together' },
    blurb: {
      en: 'Association website with calm structure and a clear identity.',
      de: 'Vereinswebsite mit ruhiger Struktur und klarer Identität.',
    },
    challenge: {
      en: 'A young nonprofit needed to look serious without looking corporate.',
      de: 'Ein junger Verein sollte seriös wirken, ohne nach Konzern auszusehen.',
    },
    result: {
      en: 'A warm identity and pages for mission, events and membership.',
      de: 'Ein warmes Erscheinungsbild und Seiten für Ziele, Veranstaltungen und Mitgliedschaft.',
    },
    kind: { en: 'Nonprofit', de: 'Verein' },
    publicPath: '/demos/proud-together/',
  },
  {
    slug: 'onebyone',
    repo: 'onebyone-mockup',
    title: { en: 'One by One', de: 'One by One' },
    blurb: {
      en: 'Concept exploration for layout rhythm and visual hierarchy.',
      de: 'Konzeptstudie zu Layout-Rhythmus und visueller Gewichtung.',
    },
    challenge: {
      en: 'Test how far type and spacing alone can carry a brand.',
      de: 'Wie weit tragen Schrift und Abstände allein eine Marke?',
    },
    result: {
      en: 'A clean mockup, used as a reference for editorial web layouts.',
      de: 'Ein klarer Entwurf als Referenz für redaktionelle Layouts.',
    },
    kind: { en: 'Concept', de: 'Konzept' },
    publicPath: '/demos/onebyone/',
  },
  {
    slug: 'jonathan',
    repo: 'website-jonathan',
    title: { en: 'Jonathan Kokalj', de: 'Jonathan Kokalj' },
    blurb: {
      en: 'Personal brand site with a clear offer and direct contact.',
      de: 'Persönliche Markenseite mit klarem Angebot und direktem Kontakt.',
    },
    challenge: {
      en: 'Several skills needed one clear story, not a CV dump.',
      de: 'Mehrere Fähigkeiten brauchten eine klare Geschichte statt einer Lebenslauf-Liste.',
    },
    result: {
      en: 'Focused positioning, clear hierarchy and one main call to action.',
      de: 'Klare Positionierung, klare Gliederung und ein zentraler Button zur Kontaktaufnahme.',
    },
    kind: { en: 'Personal brand', de: 'Persönliche Marke' },
    publicPath: '/demos/jonathan/',
  },
]

export function getWorkSlugs(): string[] {
  return WORK_ITEMS.map((item) => item.slug)
}

export function getWorkItem(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((item) => item.slug === slug)
}

export function getFeaturedWork(): WorkItem[] {
  return WORK_ITEMS.filter((item) => item.featured)
}
