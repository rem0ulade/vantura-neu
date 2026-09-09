import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website-Portfolio | Vantura Studios',
  description:
    'Ausgewählte Websites und digitale Auftritte von Jonathan Kokalj – individuell gestaltet für Unternehmen, Produkte und neue Ideen.',
  alternates: { canonical: '/portfolio/websites/' },
}

const projects = [
  {
    number: '01',
    title: 'Grace',
    type: 'Produkt-Website',
    sector: 'Private AI Workspace',
    description:
      'Ein eigenständiger Markenauftritt für ein erklärungsbedürftiges Softwareprodukt – mit klarer Dramaturgie, prägnanter Typografie und einem direkten Weg von der Idee zum Produkt.',
    result: ['Marke und Produkt verständlich verbunden', 'Responsive Produktpräsentation', 'Mehrsprachiger Auftritt'],
    image: '/portfolio-websites/grace.webp',
    href: 'https://meet-grace.com/',
    logo: '/customer-logos/grace.svg',
    color: '#b8ff45',
    dark: true,
  },
  {
    number: '02',
    title: 'Fröhlich Nord',
    type: 'Unternehmenswebsite',
    sector: 'Gebäudeservice',
    description:
      'Eine bodenständige Website, die das breite Leistungsangebot schnell erfassbar macht und Vertrauen über Erfahrung, konkrete Leistungen und einen einfachen Anfrageweg aufbaut.',
    result: ['Leistungen klar gegliedert', 'Vertrauensaufbau mit Kennzahlen', 'Direkter Kontaktweg'],
    image: '/portfolio-websites/froehlich.webp',
    href: 'https://www.froehlich-nord.de/',
    logo: '/customer-logos/froehlich-nord.svg',
    color: '#3f8f4a',
    dark: false,
  },
  {
    number: '03',
    title: 'RGH Nord',
    type: 'Unternehmenswebsite',
    sector: 'Gebäudedienste',
    description:
      'Ein umfangreicher digitaler Auftritt für vielseitige Gebäudedienste. Viele unterschiedliche Angebote werden in einer verständlichen Struktur zusammengeführt und visuell greifbar gemacht.',
    result: ['Breites Angebot übersichtlich erklärt', 'Eigenständiger Markenauftritt', 'Optimiert für mobile Anfragen'],
    image: '/portfolio-websites/rgh.webp',
    href: 'https://rgh-nord.com/',
    logo: '/customer-logos/rgh-nord.svg',
    color: '#e6bf3b',
    dark: false,
  },
  {
    number: '04',
    title: 'Vantura Studios',
    type: 'Studio-Website',
    sector: 'Data · AI · Software · Design',
    description:
      'Die eigene Studio-Website übersetzt ein vielseitiges Angebot in vier klar erkennbare Räume. Ein reduziertes Interface, gezielte Bewegung und starke Typografie machen den Einstieg leicht.',
    result: ['Komplexes Angebot klar sortiert', 'Interaktives Nutzungserlebnis', 'Deutsch und Englisch'],
    image: '/portfolio-websites/vantura.webp',
    href: 'https://vantura-studios.com/de/',
    logo: '/brand/vantura-logo.png',
    color: '#5f98f5',
    dark: false,
  },
  {
    number: '05',
    title: 'Recruvia',
    type: 'B2B-Webkonzept',
    sector: 'Private AI Recruitment',
    description:
      'Ein vollständiger Webauftritt für eine anspruchsvolle B2B-Softwareidee. Die Seite verbindet ein seriöses Erscheinungsbild mit einer anschaulichen Produktoberfläche und klarer Nutzenkommunikation.',
    result: ['Komplexe Software einfach erklärt', 'Produktdemo als visueller Beweis', 'Vertrauensvolle B2B-Positionierung'],
    image: '/portfolio-websites/recruvia.webp',
    href: 'https://vantura-studios.com/recruvia/',
    logo: '/customer-logos/recruvia.svg',
    color: '#2459c4',
    dark: false,
  },
]

const principles = [
  {
    icon: MousePointer2,
    title: 'Sofort verständlich',
    text: 'Besucher erkennen schnell, was Sie anbieten und wie sie Sie erreichen.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Auf jedem Gerät',
    text: 'Die Website funktioniert vom Smartphone bis zum großen Bildschirm.',
  },
  {
    icon: Layers3,
    title: 'Passend zum Betrieb',
    text: 'Keine Schablone: Inhalt, Aufbau und Gestaltung folgen Ihrem Unternehmen.',
  },
  {
    icon: Code2,
    title: 'Sauber umgesetzt',
    text: 'Schnelle, zugängliche und technisch solide Seiten ohne unnötigen Ballast.',
  },
]

export default function WebsitePortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#101522] selection:bg-[#101522] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[.07] bg-[#f5f7fa]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/de/" className="text-[15px] font-semibold tracking-[-.035em]">
            Vantura Studios
          </Link>
          <div className="flex items-center gap-5">
            <a href="#projekte" className="hidden text-sm font-medium text-slate-500 transition hover:text-slate-950 sm:block">
              Projekte
            </a>
            <a
              href="mailto:jk@vantura-studios.com?subject=Unverbindliches%20Website-Gespr%C3%A4ch"
              className="inline-flex items-center gap-2 rounded-full bg-[#101522] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2459c4]"
            >
              Kontakt <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_83%_14%,rgba(85,136,255,.17),transparent_27%),radial-gradient(circle_at_7%_75%,rgba(184,255,69,.14),transparent_22%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,21,34,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,21,34,.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
          <div className="relative mx-auto max-w-[1344px]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-5 text-[11px] font-semibold uppercase tracking-[.22em]">
              <p className="text-[#2459c4]">Website-Portfolio</p>
              <p className="text-slate-400">Jonathan Kokalj · Vantura Studios</p>
            </div>

            <div className="grid gap-12 pt-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:pt-14">
              <div>
                <p className="mb-5 text-sm font-semibold text-slate-500">Individuelle Websites für Unternehmen und neue Ideen.</p>
                <h1 className="max-w-5xl text-[clamp(3.8rem,8.7vw,8.5rem)] font-semibold leading-[.87] tracking-[-.075em]">
                  Klar im Kopf.
                  <span className="block text-slate-300">Stark im Web.</span>
                </h1>
              </div>
              <div className="lg:pb-2">
                <p className="max-w-lg text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                  Ich entwickle Websites, die Leistungen verständlich machen, Vertrauen schaffen und Interessenten ohne Umwege zur Anfrage führen.
                </p>
                <a href="#projekte" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2459c4]">
                  Arbeiten ansehen <ArrowDown size={16} />
                </a>
              </div>
            </div>

            <div className="mt-14 grid overflow-hidden rounded-[28px] border border-white/80 bg-white/70 shadow-[0_28px_90px_rgba(28,41,75,.08)] backdrop-blur-sm sm:grid-cols-3">
              {[
                ['05', 'ausgewählte Projekte'],
                ['100 %', 'individuelle Gestaltung'],
                ['01', 'direkter Ansprechpartner'],
              ].map(([value, label]) => (
                <div key={label} className="border-b border-black/[.07] p-6 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-8">
                  <p className="text-3xl font-semibold tracking-[-.055em]">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projekte" className="bg-[#101522] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1344px]">
            <div className="grid gap-7 border-b border-white/10 pb-9 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#91b9ff]">Ausgewählte Websites</p>
              <div>
                <h2 className="text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Vom ersten Eindruck bis zur Anfrage.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
                  Unterschiedliche Branchen, Produkte und Ziele – jeweils mit einem eigenständigen Auftritt.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-8 lg:space-y-12">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[.045] lg:rounded-[38px]"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live ansehen`}
                      className="relative min-h-[340px] overflow-hidden bg-[#dfe5ed] sm:min-h-[460px] lg:min-h-[620px]"
                    >
                      <div
                        className="absolute inset-0 opacity-45"
                        style={{ background: `radial-gradient(circle at 50% 40%, ${project.color}, transparent 62%)` }}
                      />
                      <div className="absolute inset-x-5 bottom-0 top-8 overflow-hidden rounded-t-[18px] border border-black/10 bg-white shadow-[0_28px_80px_rgba(0,0,0,.24)] transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.015] sm:inset-x-10 sm:top-12 lg:inset-x-12 lg:top-16">
                        <div className="flex h-8 items-center gap-1.5 border-b border-black/[.07] bg-white px-3">
                          <span className="h-2 w-2 rounded-full bg-[#ff6b5f]" />
                          <span className="h-2 w-2 rounded-full bg-[#ffc94a]" />
                          <span className="h-2 w-2 rounded-full bg-[#42c76b]" />
                          <span className="ml-3 truncate text-[10px] text-slate-400">{project.href.replace('https://', '')}</span>
                        </div>
                        <div className="relative h-[calc(100%-2rem)]">
                          <Image
                            src={project.image}
                            alt={`Startseite von ${project.title}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </a>

                    <div className="flex min-h-[500px] flex-col justify-between p-7 sm:p-10 lg:min-h-[620px] lg:p-12">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-white/38">
                            {project.number} · {project.type}
                          </p>
                          <p className="mt-2 text-sm text-white/50">{project.sector}</p>
                        </div>
                        <div className={`flex h-14 w-28 items-center justify-center rounded-2xl p-3 ${project.dark ? 'bg-black' : 'bg-white'}`}>
                          <img src={project.logo} alt="" className="max-h-full max-w-full object-contain" />
                        </div>
                      </div>

                      <div className="mt-16 lg:mt-10">
                        <h3 className="text-5xl font-semibold tracking-[-.06em] sm:text-6xl">{project.title}</h3>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">{project.description}</p>
                        <ul className="mt-8 space-y-3">
                          {project.result.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-white/72">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[.06]">
                                <Check size={13} style={{ color: project.color }} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-9 inline-flex items-center gap-2 border-b border-white/25 pb-1.5 text-sm font-semibold transition hover:border-white"
                        >
                          Website live ansehen <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1344px]">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#2459c4]">Darauf kommt es an</p>
                <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl">
                  Nicht nur schön. Sondern nützlich.
                </h2>
              </div>
              <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
                {principles.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="min-h-[250px] border-b border-r border-black/10 p-6 sm:p-8">
                      <Icon size={22} className="text-[#2459c4]" />
                      <h3 className="mt-12 text-2xl font-semibold tracking-[-.04em]">{item.title}</h3>
                      <p className="mt-3 max-w-xs text-base leading-7 text-slate-500">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
          <div className="relative mx-auto max-w-[1344px] overflow-hidden rounded-[34px] bg-[#2459c4] px-7 py-12 text-white sm:p-12 lg:rounded-[44px] lg:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b8ff45]/20 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-100">Unverbindlich kennenlernen</p>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">
                  Wie könnte Ihre Website aussehen?
                </h2>
              </div>
              <div>
                <p className="max-w-md text-lg leading-8 text-blue-100">
                  Erzählen Sie mir kurz von Ihrem Betrieb. Gemeinsam klären wir, welche Inhalte Ihre neue Website wirklich braucht.
                </p>
                <a
                  href="mailto:jk@vantura-studios.com?subject=Unverbindliches%20Website-Gespr%C3%A4ch"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1748a8] transition hover:-translate-y-0.5"
                >
                  Gespräch anfragen <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-4 border-t border-black/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vantura Studios · Jonathan Kokalj</p>
          <div className="flex gap-5">
            <Link href="/impressum/" className="transition hover:text-slate-950">Impressum</Link>
            <Link href="/datenschutz/" className="transition hover:text-slate-950">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
