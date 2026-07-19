'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Code2, Globe2, Sparkles } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    hint: 'Tap Vantura Studios to explore',
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
    hint: 'Tippe auf Vantura Studios zum Öffnen',
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
  'left-[103px] top-0 lg:left-[148px] lg:top-0',
  'right-0 top-[92px] lg:left-[368px] lg:right-auto lg:top-[158px]',
  'right-[16px] bottom-[18px] lg:left-[284px] lg:right-auto lg:bottom-auto lg:top-[330px]',
  'left-[16px] bottom-[18px] lg:left-[10px] lg:bottom-auto lg:top-[330px]',
  'left-0 top-[92px] lg:left-[-73px] lg:top-[158px]',
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

      <main className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 py-24 lg:px-8 lg:py-28">
        <div className="mb-6 max-w-xl text-center lg:mb-5">
          <p className="text-sm font-medium leading-6 text-muted">{t.intro}</p>
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
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted lg:order-2 lg:mb-0 lg:-mt-3">{t.hint}</p>

          <div className="relative h-[390px] w-[340px] max-w-full lg:order-1 lg:h-[500px] lg:w-[500px]">
            {t.items.map(([title, description, Icon, href], index) => {
              const external = href.startsWith('http')
              return (
                <div key={title} className={`absolute w-[124px] lg:w-[205px] ${positions[index]}`}>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className={`block rounded-2xl border border-line bg-white/95 p-3 shadow-[0_14px_40px_rgba(15,23,42,0.09)] backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/30 lg:p-5 lg:shadow-[0_18px_55px_rgba(15,23,42,0.08)] ${open ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0'}`}
                    style={{ transitionDelay: open ? `${index * 45}ms` : '0ms' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-paper text-accent lg:h-10 lg:w-10 lg:rounded-xl"><Icon size={17} /></span>
                      <ArrowUpRight size={15} className="text-muted" />
                    </div>
                    <h2 className="mt-3 text-[13px] font-semibold leading-4 tracking-tight lg:mt-5 lg:text-base lg:leading-normal">{title}</h2>
                    <p className="mt-2 hidden text-sm leading-6 text-muted lg:block">{description}</p>
                  </Link>
                </div>
              )
            })}

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-accent/10 lg:h-44 lg:w-44 lg:shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
            >
              <span className="text-lg font-semibold tracking-[-0.03em] lg:text-xl">Vantura</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-muted lg:text-[11px]">Studios</span>
              <span className={`mt-4 h-1.5 w-1.5 rounded-full bg-accent transition-all duration-500 lg:mt-5 ${open ? 'scale-[1.8] shadow-[0_0_0_8px_rgba(37,99,235,0.08)]' : ''}`} />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
