'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Code2, Globe2, Sparkles } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    hint: 'Hover, focus or tap to explore',
    intro: 'One studio. Five ways to build what your business needs.',
    items: [
      ['Reporting & Dashboards','Turn data into clear decisions.',BarChart3,'/reporting/'],
      ['Websites','Focused websites that look sharp and perform.',Globe2,'/websites/'],
      ['Projects','Apps, tools, automations and MVPs.',Code2,'/projekt/'],
      ['Portfolio','Selected work and practical examples.',BriefcaseBusiness,'/rem0/portfolio/'],
      ['Grace','Meet the AI workspace built by Vantura.',Sparkles,'https://meet-grace.com/'],
    ],
  },
  de: {
    hint: 'Hover, Fokus oder Tippen zum Öffnen',
    intro: 'Ein Studio. Fünf Wege, das zu bauen, was dein Unternehmen braucht.',
    items: [
      ['Reporting & Dashboards','Daten in klare Entscheidungen übersetzen.',BarChart3,'/de/reporting/'],
      ['Websites','Fokussierte Websites, die stark aussehen und funktionieren.',Globe2,'/de/websites/'],
      ['Projekte','Apps, Tools, Automationen und MVPs.',Code2,'/de/projekt/'],
      ['Portfolio','Ausgewählte Arbeiten und praktische Beispiele.',BriefcaseBusiness,'/rem0/portfolio/'],
      ['Grace','Der von Vantura entwickelte AI Workspace.',Sparkles,'https://meet-grace.com/'],
    ],
  },
} as const

const positions = [
  'lg:-translate-y-[230px]',
  'lg:translate-x-[220px] lg:-translate-y-[72px]',
  'lg:translate-x-[136px] lg:translate-y-[190px]',
  'lg:-translate-x-[136px] lg:translate-y-[190px]',
  'lg:-translate-x-[220px] lg:-translate-y-[72px]',
]

export function LocalizedLanding({ locale }: { locale: 'en' | 'de' }) {
  const [open, setOpen] = useState(false)
  const t = copy[locale]

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_42%,rgba(37,99,235,0.08),transparent_34%),linear-gradient(to_bottom,#ffffff,#f8fafc)] text-ink">
      <LanguageRedirect locale={locale} />
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-end px-6 lg:px-8">
          <LanguageSwitch locale={locale} />
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-28 lg:px-8">
        <div className="mb-10 max-w-xl text-center lg:mb-5">
          <p className="text-sm font-medium text-muted">{t.intro}</p>
        </div>

        <div
          className="group relative flex w-full max-w-4xl flex-col items-center"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocusCapture={() => setOpen(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false)
          }}
        >
          <div className="relative order-2 mt-7 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:order-1 lg:mt-0 lg:h-[500px] lg:w-[500px] lg:grid-cols-1">
            {t.items.map(([title, description, Icon, href], index) => {
              const external = href.startsWith('http')
              return (
                <Link
                  key={title}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className={`relative rounded-2xl border border-line bg-white/95 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.13)] focus:outline-none focus:ring-2 focus:ring-accent/30 lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[205px] lg:-translate-x-1/2 lg:-translate-y-1/2 ${positions[index]} ${open ? 'lg:scale-100 lg:opacity-100' : 'lg:pointer-events-none lg:scale-75 lg:opacity-0'}`}
                  style={{ transitionDelay: open ? `${index * 45}ms` : '0ms' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-paper text-accent"><Icon size={19} /></span>
                    <ArrowUpRight size={17} className="text-muted" />
                  </div>
                  <h2 className="mt-5 text-base font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                </Link>
              )
            })}

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              className="order-first mx-auto flex h-44 w-44 flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.03] hover:shadow-[0_28px_90px_rgba(15,23,42,0.16)] focus:outline-none focus:ring-4 focus:ring-accent/10 lg:absolute lg:left-1/2 lg:top-1/2 lg:z-20 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              <span className="text-xl font-semibold tracking-[-0.03em]">Vantura</span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-muted">Studios</span>
              <span className={`mt-5 h-1.5 w-1.5 rounded-full bg-accent transition-all duration-500 ${open ? 'scale-[1.8] shadow-[0_0_0_8px_rgba(37,99,235,0.08)]' : ''}`} />
            </button>
          </div>

          <p className="order-1 text-xs font-medium uppercase tracking-[0.16em] text-muted lg:order-2 lg:-mt-3">{t.hint}</p>
        </div>
      </main>
    </div>
  )
}