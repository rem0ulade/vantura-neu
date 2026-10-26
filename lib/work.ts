export type WorkItem = {
  slug: string
  repo: string
  title: { en: string; de: string }
  blurb: { en: string; de: string }
  challenge: { en: string; de: string }
  result: { en: string; de: string }
  kind: { en: string; de: string }
  featured?: boolean
  preview?: { src: string; alt: { en: string; de: string } }
  /** Path under public/, also iframe src with trailing slash */
  publicPath: string
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'bonsai-home',
    preview: { src: '/demos/bonsai-home/assets/bonsai-home-hero.png', alt: { en: 'Smart-home product image used on the Bonsai Home website', de: 'Smart-Home-Produktmotiv aus der Website von Bonsai Home' } },
    repo: 'bonsai-home',
    title: { en: 'Bonsai Home', de: 'Bonsai Home' },
    blurb: {
      en: 'A smart-home sales site that explains a complex offer clearly, so visitors can see why to buy.',
      de: 'Smart-Home-Verkaufsseite, die ein komplexes Angebot klar und nachvollziehbar erklärt.',
    },
    challenge: {
      en: 'Explain a smart-home offer with many features in a clear, approachable way.',
      de: 'Ein Smart-Home-Angebot mit vielen Funktionen verständlich und übersichtlich erklären.',
    },
    result: {
      en: 'A clear product story, structured pages and buttons for consultation inquiries.',
      de: 'Eine klare Produktgeschichte, gut gegliederte Seiten und Buttons für Beratungsanfragen.',
    },
    kind: { en: 'Sales website', de: 'Verkaufsseite' },
    featured: true,
    publicPath: '/demos/bonsai-home/',
  },
  {
    slug: 'grace',
    preview: { src: '/portfolio-websites/grace.webp', alt: { en: 'Website preview of my Grace software project', de: 'Website-Vorschau meines Softwareprojekts Grace' } },
    repo: 'grace_webpage_v1',
    title: { en: 'Grace', de: 'Grace' },
    blurb: {
      en: 'A website for my own software product, explaining its features and showing how it works.',
      de: 'Website für mein eigenes Softwareprodukt: Funktionen verständlich erklären und das Produkt zeigen.',
    },
    challenge: {
      en: 'A technical product needed a public face that non-engineers could trust.',
      de: 'Ein technisches Produkt brauchte einen öffentlichen Auftritt, dem auch Nicht-Techniker vertrauen.',
    },
    result: {
      en: 'A clear offer, structured pages and visual examples of the product.',
      de: 'Eine klare Angebotsbeschreibung, strukturierte Seiten und anschauliche Einblicke in das Produkt.',
    },
    kind: { en: 'Personal software project', de: 'Eigenes Softwareprojekt' },
    featured: true,
    publicPath: '/demos/grace/',
  },
  {
    slug: 'arslan-gartenloewe',
    preview: { src: '/demos/arslan-gartenloewe/og.png', alt: { en: 'Brand and garden imagery from the Arslan Gartenlöwe project', de: 'Marken- und Gartenmotiv aus dem Projekt Arslan Gartenlöwe' } },
    repo: 'arslan-gartenloewe',
    title: { en: 'Arslan Gartenlöwe', de: 'Arslan Gartenlöwe' },
    blurb: {
      en: 'A local garden business online: services, credibility and an easy way to get in touch.',
      de: 'Gartenbetrieb online: Leistungen, Vertrauen und ein klarer Weg zur Anfrage.',
    },
    challenge: {
      en: 'Present gardening services and regional contact details in one accessible website.',
      de: 'Gartenleistungen und regionale Kontaktmöglichkeiten in einer übersichtlichen Website bündeln.',
    },
    result: {
      en: 'A website built around the services, with local credibility and a direct way to inquire.',
      de: 'Eine Website rund um die Leistungen, mit regionaler Glaubwürdigkeit und direktem Anfrageweg.',
    },
    kind: { en: 'Local business website', de: 'Website für einen lokalen Betrieb' },
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
    kind: { en: 'My own website', de: 'Eigene Website' },
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
