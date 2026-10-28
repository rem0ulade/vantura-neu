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
    preview: { src: '/demos/bonsai-home/preview.svg', alt: { en: 'Bonsai Home website with a floating interactive product cards, serif headlines and a restrained monochrome design', de: 'Bonsai-Home-Website mit schwebenden Produktkarten, Serifenschrift und zurückhaltender Schwarz-Weiß-Gestaltung' } },
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
    slug: 'restaurant',
    preview: { src: '/demos/restaurant/preview.svg', alt: { en: 'Ciao Bella · Trattoria demo with menu, seasonal specials and table reservation', de: 'Italienische Restaurant-Demo Ciao Bella mit Speisekarte, saisonalen Angeboten und Tischreservierung' } },
    repo: 'vantura-neu',
    title: { en: 'Ciao Bella · Trattoria', de: 'Ciao Bella · Trattoria' },
    blurb: {
      en: 'An Italian restaurant concept in white and green, with food photography, a menu and a reservation preview.',
      de: 'Italienische Restaurant-Demo in Weiß und Grün – mit Speisekarte, Food-Fotografie und Reservierungsvorschau.',
    },
    challenge: {
      en: 'Help guests discover the food, find opening hours and plan their visit on any device.',
      de: 'Gästen die Küche vorstellen, Speisekarte und Öffnungszeiten zeigen und Reservierungen einfach machen.',
    },
    result: {
      en: 'A responsive restaurant demo with clear menu categories, current offers and an interactive reservation preview.',
      de: 'Eine responsive Restaurant-Demo mit übersichtlicher Speisekarte, aktuellen Aktionen und interaktiver Reservierungsvorschau.',
    },
    kind: { en: 'Restaurant website concept', de: 'Restaurant-Website · Konzept' },
    featured: true,
    publicPath: '/demos/restaurant/',
  },
  {
    slug: 'proud-together',
    repo: 'proud-together',
    preview: { src: '/demos/proud-together/preview.svg', alt: { en: 'Proud Together association website with a violet design and sculptural rings', de: 'Vereinswebsite Proud Together mit violetter Gestaltung und plastischen Ringformen' } },
    featured: true,
    title: { en: 'Proud Together', de: 'Proud Together' },
    blurb: {
      en: 'My association website with a clear mission, expressive design and ways to get involved.',
      de: 'Eigene Vereinswebsite mit klarer Mission, lebendiger Gestaltung und Raum für gemeinsames Engagement.',
    },
    challenge: {
      en: 'A young nonprofit needed to look serious without looking corporate.',
      de: 'Einem Verein in Gründung einen einladenden Auftritt für Mission, Projekte und Mitwirkende geben.',
    },
    result: {
      en: 'Bold colour, sculptural shapes and clear paths to projects, membership and collaboration.',
      de: 'Kräftige Farben, plastische Formen und klare Wege zu Projekten, Mitgliedschaft und Zusammenarbeit.',
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
    title: { en: 'Business Intelligence', de: 'Business Intelligence' },
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
  return [...WORK_ITEMS.map((item) => item.slug), 'grace', 'arslan-gartenloewe']
}

export function getWorkItem(slug: string): WorkItem | undefined {
  const resolvedSlug = slug === 'grace' ? 'restaurant' : slug === 'arslan-gartenloewe' ? 'proud-together' : slug
  return WORK_ITEMS.find((item) => item.slug === resolvedSlug)
}

export function getFeaturedWork(): WorkItem[] {
  return WORK_ITEMS.filter((item) => item.featured)
}

