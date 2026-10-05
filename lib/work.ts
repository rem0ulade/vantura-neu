export type WorkItem = {
  slug: string
  repo: string
  title: { en: string; de: string }
  blurb: { en: string; de: string }
  kind: { en: string; de: string }
  /** Path under public/ — also iframe src with trailing slash */
  publicPath: string
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'bonsai-home',
    repo: 'bonsai-home',
    title: { en: 'Bonsai Home', de: 'Bonsai Home' },
    blurb: {
      en: 'Smart-home sales site with product clarity and conversion focus.',
      de: 'Smart-Home-Verkaufsseite mit klarer Produktstruktur und Conversion-Fokus.',
    },
    kind: { en: 'Sales site', de: 'Verkaufsseite' },
    publicPath: '/work/bonsai-home/',
  },
  {
    slug: 'proud-together',
    repo: 'proud-together',
    title: { en: 'Proud Together', de: 'Proud Together' },
    blurb: {
      en: 'Nonprofit association website — calm structure, strong identity.',
      de: 'Vereinswebsite — ruhige Struktur, starke Identität.',
    },
    kind: { en: 'Association', de: 'Verein' },
    publicPath: '/work/proud-together/',
  },
  {
    slug: 'arslan-gartenloewe',
    repo: 'arslan-gartenloewe',
    title: { en: 'Arslan Gartenlöwe', de: 'Arslan Gartenlöwe' },
    blurb: {
      en: 'Local business presence with service-led storytelling.',
      de: 'Lokaler Business-Auftritt mit servicegeführtem Storytelling.',
    },
    kind: { en: 'Local business', de: 'Lokalgeschäft' },
    publicPath: '/work/arslan-gartenloewe/',
  },
  {
    slug: 'onebyone',
    repo: 'onebyone-mockup',
    title: { en: 'One by One', de: 'One by One' },
    blurb: {
      en: 'Concept mockup exploring layout rhythm and visual hierarchy.',
      de: 'Konzept-Mockup für Layout-Rhythmus und visuelle Hierarchie.',
    },
    kind: { en: 'Concept', de: 'Konzept' },
    publicPath: '/work/onebyone/',
  },
  {
    slug: 'grace',
    repo: 'grace_webpage_v1',
    title: { en: 'Grace', de: 'Grace' },
    blurb: {
      en: 'Product marketing site for a multi-agent workspace.',
      de: 'Product-Marketing-Site für einen Multi-Agent-Workspace.',
    },
    kind: { en: 'Product site', de: 'Product Site' },
    publicPath: '/work/grace/',
  },
  {
    slug: 'jonathan',
    repo: 'website-jonathan',
    title: { en: 'Jonathan Kokalj', de: 'Jonathan Kokalj' },
    blurb: {
      en: 'Personal brand site — clear offer, direct CTA.',
      de: 'Persönliche Markenseite — klares Angebot, direkter CTA.',
    },
    kind: { en: 'Personal brand', de: 'Persönliche Marke' },
    publicPath: '/work/jonathan/',
  },
]

export function getWorkSlugs(): string[] {
  return WORK_ITEMS.map((item) => item.slug)
}

export function getWorkItem(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((item) => item.slug === slug)
}
