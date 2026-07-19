'use client'

import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Sparkles,
} from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    eyebrow: 'Vantura Studios',
    title: 'Ideas become systems, products and experiences.',
    intro:
      'From clear reporting to polished websites, custom software and an AI workspace — explore what Vantura can build with you.',
    explore: 'Explore the studio',
    footer: 'Built with clarity, speed and a strong sense for the actual business problem.',
    items: [
      {
        title: 'Reporting & Dashboards',
        label: 'Data systems',
        description: 'Turn scattered numbers into clear decisions, forecasts and automated reporting.',
        href: '/reporting/',
        icon: BarChart3,
        size: 'lg:col-span-7 lg:row-span-2',
        visual: 'dashboard',
      },
      {
        title: 'Projects',
        label: 'Custom software',
        description: 'Apps, internal tools, automations, MVPs and product rescue — from idea to launch.',
        href: '/projects/',
        icon: Code2,
        size: 'lg:col-span-5 lg:row-span-2',
        visual: 'project',
      },
      {
        title: 'Websites',
        label: 'Digital presence',
        description: 'Focused, modern websites designed to look sharp and turn attention into action.',
        href: '/websites/',
        icon: Globe2,
        size: 'lg:col-span-5',
        visual: 'website',
      },
      {
        title: 'Portfolio',
        label: 'Selected work',
        description: 'A closer look at concepts, interfaces and practical solutions built by Vantura.',
        href: '/rem0/portfolio/',
        icon: BriefcaseBusiness,
        size: 'lg:col-span-3',
        visual: 'portfolio',
      },
      {
        title: 'AI Workspace',
        label: 'Meet Grace',
        description: 'A workspace for orchestrating AI agents, tools and local models in one place.',
        href: 'https://meet-grace.com/',
        icon: Sparkles,
        size: 'lg:col-span-4',
        visual: 'ai',
      },
    ],
  },
  de: {
    eyebrow: 'Vantura Studios',
    title: 'Aus Ideen werden Systeme, Produkte und Erlebnisse.',
    intro:
      'Von klarem Reporting über starke Websites bis zu individueller Software und einem AI Workspace – entdecke, was Vantura mit dir bauen kann.',
    explore: 'Studio entdecken',
    footer: 'Gebaut mit Klarheit, Geschwindigkeit und einem starken Blick für das eigentliche Business-Problem.',
    items: [
      {
        title: 'Reporting & Dashboards',
        label: 'Datensysteme',
        description: 'Aus verteilten Zahlen werden klare Entscheidungen, Forecasts und automatisierte Reports.',
        href: '/de/reporting/',
        icon: BarChart3,
        size: 'lg:col-span-7 lg:row-span-2',
        visual: 'dashboard',
      },
      {
        title: 'Projekte',
        label: 'Individuelle Software',
        description: 'Apps, interne Tools, Automationen, MVPs und Projekt-Rettung – von der Idee bis zum Launch.',
        href: '/de/projects/',
        icon: Code2,
        size: 'lg:col-span-5 lg:row-span-2',
        visual: 'project',
      },
      {
        title: 'Websites',
        label: 'Digitaler Auftritt',
        description: 'Moderne Websites, die stark aussehen und Aufmerksamkeit in echte Anfragen verwandeln.',
        href: '/de/websites/',
        icon: Globe2,
        size: 'lg:col-span-5',
        visual: 'website',
      },
      {
        title: 'Portfolio',
        label: 'Ausgewählte Arbeiten',
        description: 'Konzepte, Interfaces und praktische Lösungen von Vantura im Detail.',
        href: '/rem0/portfolio/',
        icon: BriefcaseBusiness,
        size: 'lg:col-span-3',
        visual: 'portfolio',
      },
      {
        title: 'AI Workspace',
        label: 'Meet Grace',
        description: 'Ein Workspace, der AI Agents, Tools und lokale Modelle an einem Ort orchestriert.',
        href: 'https://meet-grace.com/',
        icon: Sparkles,
        size: 'lg:col-span-4',
        visual: 'ai',
      },
    ],
  },
} as const

function Visual({ type }: { type: string }) {
  if (type === 'dashboard') {
    return (
      <div className="absolute bottom-5 right-5 left-5 grid grid-cols-3 gap-2 opacity-90 sm:left-auto sm:w-[46%]">
        <div className="col-span-3 h-16 rounded-2xl border border-white/50 bg-white/75 p-3 shadow-sm backdrop-blur">
          <div className="h-2 w-16 rounded-full bg-slate-300" />
          <div className="mt-3 flex items-end gap-1.5">
            {[35, 52, 44, 68, 58, 82, 74].map((height) => <span key={height} className="w-full rounded-sm bg-blue-500/70" style={{ height }} />)}
          </div>
        </div>
        {[1, 2, 3].map((item) => <div key={item} className="h-14 rounded-xl border border-white/60 bg-white/70 shadow-sm" />)}
      </div>
    )
  }
  if (type === 'project') {
    return (
      <div className="absolute bottom-5 right-5 flex w-36 flex-col gap-2">
        {['Concept', 'Build', 'Launch'].map((step, index) => (
          <div key={step} className={`rounded-xl border p-3 text-xs font-medium shadow-sm ${index === 1 ? 'ml-4 border-slate-700 bg-slate-900 text-white' : 'border-white/70 bg-white/80'}`}>{step}</div>
        ))}
      </div>
    )
  }
  if (type === 'website') {
    return <div className="absolute bottom-4 right-4 h-24 w-32 rotate-2 rounded-xl border-4 border-white bg-gradient-to-br from-amber-100 via-white to-rose-100 shadow-xl"><div className="m-3 h-2 w-12 rounded bg-slate-800/70" /><div className="mx-3 mt-4 h-8 rounded-lg bg-slate-900" /></div>
  }
  if (type === 'portfolio') {
    return <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-1.5"><span className="h-10 w-10 rounded-lg bg-slate-900" /><span className="h-10 w-10 rounded-lg bg-blue-100" /><span className="h-10 w-10 rounded-lg bg-amber-100" /><span className="h-10 w-10 rounded-lg bg-white shadow" /></div>
  }
  return <div className="absolute bottom-5 right-5 grid h-20 w-20 place-items-center rounded-full border border-violet-200 bg-white/85 shadow-[0_0_50px_rgba(124,58,237,.25)]"><Sparkles className="text-violet-600" /></div>
}

export function LocalizedLanding({ locale }: { locale: 'en' | 'de' }) {
  const t = copy[locale]

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-ink">
      <LanguageRedirect locale={locale} />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,.13),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(124,58,237,.09),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,.08),transparent_32%)]" />

      <header className="relative z-30">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href={locale === 'de' ? '/de/' : '/'} className="text-base font-semibold tracking-[-.03em]">Vantura Studios</Link>
          <LanguageSwitch locale={locale} />
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
        <section className="grid items-end gap-10 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-600">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.96] tracking-[-.055em] sm:text-7xl lg:text-[88px]">{t.title}</h1>
          </div>
          <div className="pb-2">
            <p className="max-w-xl text-lg leading-8 text-muted">{t.intro}</p>
            <a href="#studio" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">{t.explore}<ArrowRight size={16} /></a>
          </div>
        </section>

        <section id="studio" className="mt-14 grid auto-rows-[230px] gap-4 lg:mt-20 lg:grid-cols-12 lg:auto-rows-[175px]">
          {t.items.map(({ title, label, description, href, icon: Icon, size, visual }) => {
            const external = href.startsWith('http')
            return (
              <Link
                key={title}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className={`group relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/75 p-6 shadow-[0_18px_60px_rgba(15,23,42,.07)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(15,23,42,.13)] sm:p-7 ${size}`}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/90 via-white/60 to-blue-50/50 opacity-90 transition duration-500 group-hover:scale-105" />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white bg-white/80 text-blue-600 shadow-sm"><Icon size={20} /></span>
                  <ArrowUpRight size={19} className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-900" />
                </div>
                <div className="relative z-10 mt-7 max-w-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-muted">{label}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-.035em] sm:text-3xl">{title}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{description}</p>
                </div>
                <Visual type={visual} />
              </Link>
            )
          })}
        </section>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-6 text-muted">{t.footer}</p>
      </main>
    </div>
  )
}
