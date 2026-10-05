export type WorkItem = {
  slug: string
  repo: string
  title: { en: string; de: string }
  blurb: { en: string; de: string }
  challenge: { en: string; de: string }
  result: { en: string; de: string }
  kind: { en: string; de: string }
  featured?: boolean
  /** Path under public/ — also iframe src with trailing slash */
  publicPath: string
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'bonsai-home',
    repo: 'bonsai-home',
    title: { en: 'Bonsai Home', de: 'Bonsai Home' },
    blurb: {
      en: 'A smart-home sales site that explains a complex offer in a clear, buyable story.',
      de: 'Smart-Home-Verkaufsseite, die ein komplexes Angebot klar und kaufbar erzählt.',
    },
    challenge: {
      en: 'Too many features, too little clarity — visitors bounced before the offer landed.',
      de: 'Zu viele Features, zu wenig Klarheit — Besucher sprangen ab, bevor das Angebot greifbar war.',
    },
    result: {
      en: 'Product narrative, structured pages and CTAs aimed at consultation requests.',
      de: 'Produktstory, klare Seitenstruktur und CTAs auf Beratungsanfragen ausgerichtet.',
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
      en: 'Product marketing for a multi-agent workspace — ambitious, still readable.',
      de: 'Product-Marketing für einen Multi-Agent-Workspace — ambitioniert, trotzdem lesbar.',
    },
    challenge: {
      en: 'A technical product needed a public face that non-engineers could trust.',
      de: 'Ein technisches Produkt brauchte eine öffentliche Seite, der auch Nicht-Entwickler vertrauen.',
    },
    result: {
      en: 'Positioning, sections and motion that carry the product story without drowning in jargon.',
      de: 'Positionierung, Sektionen und Motion, die die Produktstory tragen — ohne Jargon-Flut.',
    },
    kind: { en: 'Product site', de: 'Product Site' },
    featured: true,
    publicPath: '/demos/grace/',
  },
  {
    slug: 'arslan-gartenloewe',
    repo: 'arslan-gartenloewe',
    title: { en: 'Arslan Gartenlöwe', de: 'Arslan Gartenlöwe' },
    blurb: {
      en: 'Local garden business online — services, trust and a path to contact.',
      de: 'Gartenbetrieb online — Leistungen, Vertrauen und ein klarer Weg zur Anfrage.',
    },
    challenge: {
      en: 'Strong craft offline, almost no digital presence that matched the work.',
      de: 'Starkes Handwerk offline, digital kaum ein Auftritt, der zur Arbeit passte.',
    },
    result: {
      en: 'Service-led website with local credibility and a direct inquiry path.',
      de: 'Leistungsgeführte Website mit lokaler Glaubwürdigkeit und direkter Anfrage.',
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
      de: 'Ein junger Verein sollte ernst wirken — ohne steif oder korporat zu werden.',
    },
    result: {
      en: 'Warm identity system and pages for mission, events and membership.',
      de: 'Warme Identität und Seiten für Mission, Events und Mitgliedschaft.',
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
      de: 'Konzeptstudie für Layout-Rhythmus und visuelle Hierarchie.',
    },
    challenge: {
      en: 'Test how far typography and spacing alone can carry a brand feel.',
      de: 'Testen, wie weit Typografie und Spacing allein eine Markenwirkung tragen.',
    },
    result: {
      en: 'A sharp mockup used as a reference for editorial web layouts.',
      de: 'Ein scharfes Mockup als Referenz für redaktionelle Web-Layouts.',
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
      en: 'Multiple skills needed one clean public story — not a CV dump.',
      de: 'Mehrere Skills brauchten eine klare öffentliche Story — kein Lebenslauf-Dump.',
    },
    result: {
      en: 'Focused positioning, strong hierarchy and a single primary CTA.',
      de: 'Fokussierte Positionierung, klare Hierarchie und ein primärer CTA.',
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
