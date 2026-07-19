'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Code2, Globe2, Sparkles } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    hint: 'Hover or focus to explore',
    intro: 'One studio. Five ways to build what your business needs.',
    items: [
      ['Reporting & Dashboards', 'Turn data into clear decisions.', BarChart3, '/reporting/'],
      ['Websites', 'Focused websites that look sharp and perform.', Globe2, '/websites/'],
      ['Projects', 'Apps, tools, automations and MVPs.', Code2, '/projekt/'],
      ['Portfolio', 'Selected work and practical examples.', BriefcaseBusiness, '/rem0/portfolio/'],
      ['Grace', 'Meet the AI workspace built by Vantura.', Sparkles, 'https://meet-grace.com/'],
    ],
  },
  de: {
    hint: 'Hover oder Fokus zum Öffnen',
    intro: 'Ein Studio. Fünf Wege, das zu bauen, was dein Unternehmen braucht.',
    items: [
      ['Reporting & Dashboards', 'Daten in klare Entscheidungen übersetzen.', BarChart3, '/de/reporting/'],
      ['Websites', 'Fokussierte Websites, die stark aussehen und funktionieren.', Globe2, '/de/websites/'],
      ['Projekte', 'Apps, Tools, Automationen und MVPs.', Code2, '/de/projekt/'],
      ['Portfolio', 'Ausgewählte Arbeiten und praktische Beispiele.', BriefcaseBusiness, '/rem0/portfolio/'],
      ['Grace', 'Der von Vantura entwickelte AI Workspace.', Sparkles, 'https://meet-grace.com/'],
    ],
  },
} as const

const desktopPositions = [
  'left-[148px] top-0',
  'left-[368px] top-[158px]',
  'left-[284px] top-[330px]',
  'left-[10px] top-[330px]',
  'left-[-73px] top-[158px]',
]

export function LocalizedLanding({ locale }: { locale: 'en' | 'de' }) {
  const [open, setOpen] = useState(false)
  const t = copy[locale]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_42%,rgba(37,99,235,0.08),transparent_34%),linear-gradient(to_bottom,#ffffff,#f8fafc)] text-ink">
      <LanguageRedirect locale={locale} />
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-end px-5 lg:px-8">
          <LanguageSwitch locale={locale} />
        </div>
      </header>

      <main className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-5 pb-12 pt-28 lg:justify-center lg:px-8 lg:py-28">
        <div className="mb-8 max-w-xl text-center lg:mb-5">
          <p className="text-sm font-medium leading-6 text-muted">{t.intro}</p>
        </div>

        <section className="w-full max-w-md lg:hidden" aria-label="Vantura Studios services">
          <div className="mx-auto mb-7 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
            <span className="text-lg font-semibold tracking-[-0.03em]">Vantura</span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-muted">Studios</span>
            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {t.items.map(([title, description, Icon, href], index) => {
              const external = href.startsWith('http')
              return (
                <Link
                  key={title}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className={`flex min-h-36 flex-col rounded-2xl border border-line bg-white p-4 shadow-[0_12px_34px_rgba(15,23,42,0.07)] transition active:scale-[0.98] ${index === 4 ? 'col-span-2 min-h-28' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-paper text-accent"><Icon size={18} /></span>
                    <ArrowUpRight size={16} className="text-muted" />
                  </div>
                  <h2 className="mt-auto pt-5 text-[15px] font-semibold leading-5 tracking-tight">{title}</h2>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">{description}</p>
                </Link>
              )
            })}
          </div>
        </section>

        <div
          className="group relative hidden w-full max-w-4xl flex-col items-center lg:flex"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocusCapture={() => setOpen(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false)
          }}
        >
          <div className="relative h-[500px] w-[500px]">
            {t.items.map(([title, description, Icon, href], index) => {
              const external = href.startsWith('http')
              return (
                <div key={title} className={`absolute w-[205px] ${desktopPositions[index]}`}>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className={`block rounded-2xl border border-line bg-white/95 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/30 ${open ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0'}`}
                    style={{ transitionDelay: open ? `${index * 45}ms` : '0ms' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-paper text-accent"><Icon size={19} /></span>
                      <ArrowUpRight size={17} className="text-muted" />
                    </div>
                    <h2 className="mt-5 text-base font-semibold tracking-tight">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                  </Link>
                </div>
              )
            })}

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-accent/10"
            >
              <span className="text-xl font-semibold tracking-[-0.03em]">Vantura</span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-muted">Studios</span>
              <span className={`mt-5 h-1.5 w-1.5 rounded-full bg-accent transition-all duration-500 ${open ? 'scale-[1.8] shadow-[0_0_0_8px_rgba(37,99,235,0.08)]' : ''}`} />
            </button>
          </div>
          <p className="-mt-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">{t.hint}</p>
        </div>
      </main>
    </div>
  )
}
