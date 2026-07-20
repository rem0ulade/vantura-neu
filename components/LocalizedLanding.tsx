'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Code2, Palette, Sparkles } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    eyebrow: 'Vantura Studios',
    title: 'Enter the studio.',
    intro: 'Five spaces for turning business problems into clear systems, useful products and strong digital experiences.',
    open: 'Open space',
    items: [
      { word: 'Data', title: 'Reporting & Dashboards', label: 'Analytics Lab', description: 'Reporting systems, forecasts and dashboards that turn scattered information into decisions.', href: '/reporting/', icon: BarChart3, visual: 'data' },
      { word: 'Software', title: 'Projects', label: 'Product Studio', description: 'Apps, internal tools, automations and MVPs — designed, built and launched around the real problem.', href: '/projects/', icon: Code2, visual: 'software' },
      { word: 'Design', title: 'Creative Design', label: 'Design Studio', description: 'Web design, campaign creatives, ads, banners and visual systems for a clear and coherent brand presence.', href: '/design/', icon: Palette, visual: 'design' },
      { word: 'AI', title: 'AI Workspace', label: 'Meet Grace', description: 'A workspace for orchestrating AI agents, tools and local models in one place.', href: 'https://meet-grace.com/', icon: Sparkles, visual: 'ai' },
      { word: 'Portfolio', title: 'Selected work', label: 'Portfolio', description: 'Concepts, interfaces and practical solutions built across data, software, AI and design.', href: '/rem0/portfolio/', icon: BriefcaseBusiness, visual: 'work' },
    ],
  },
  de: {
    eyebrow: 'Vantura Studios',
    title: 'Betritt das Studio.',
    intro: 'Fünf Räume, in denen aus Business-Problemen klare Systeme, nützliche Produkte und starke digitale Erlebnisse werden.',
    open: 'Raum öffnen',
    items: [
      { word: 'Data', title: 'Reporting & Dashboards', label: 'Analytics Lab', description: 'Reporting-Systeme, Forecasts und Dashboards, die verteilte Informationen in Entscheidungen übersetzen.', href: '/de/reporting/', icon: BarChart3, visual: 'data' },
      { word: 'Software', title: 'Projekte', label: 'Product Studio', description: 'Apps, interne Tools, Automationen und MVPs — geplant, gebaut und veröffentlicht rund um das echte Problem.', href: '/de/projects/', icon: Code2, visual: 'software' },
      { word: 'Design', title: 'Creative Design', label: 'Design Studio', description: 'Webdesign, Kampagnenmotive, Ads, Banner und visuelle Systeme für einen klaren, konsistenten Markenauftritt.', href: '/de/design/', icon: Palette, visual: 'design' },
      { word: 'AI', title: 'AI Workspace', label: 'Meet Grace', description: 'Ein Workspace, der AI Agents, Tools und lokale Modelle an einem Ort orchestriert.', href: 'https://meet-grace.com/', icon: Sparkles, visual: 'ai' },
      { word: 'Portfolio', title: 'Ausgewählte Arbeiten', label: 'Portfolio', description: 'Konzepte, Interfaces und praktische Lösungen aus Daten, Software, AI und Design.', href: '/rem0/portfolio/', icon: BriefcaseBusiness, visual: 'work' },
    ],
  },
} as const

function Preview({ type }: { type: string }) {
  if (type === 'data') return <div className="grid h-full grid-cols-6 items-end gap-3 p-8">{[42,66,54,82,70,94].map((height,index)=><div key={index} className="rounded-t-2xl bg-blue-500/75 shadow-[0_12px_30px_rgba(59,130,246,.18)] transition-all duration-700" style={{height:`${height}%`}} />)}</div>
  if (type === 'ai') return <div className="relative h-full"><div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-violet-200 bg-white shadow-[0_0_80px_rgba(124,58,237,.25)]"><Sparkles className="text-violet-600" size={34}/></div>{[[20,24],[76,20],[18,75],[78,72]].map(([left,top],index)=><span key={index} className="absolute h-4 w-4 rounded-full bg-violet-300 shadow-[0_0_24px_rgba(124,58,237,.55)]" style={{left:`${left}%`,top:`${top}%`}} />)}</div>
  if (type === 'software') return <div className="flex h-full items-center justify-center p-8"><div className="w-full max-w-sm space-y-3">{['Concept','Build','Launch'].map((step,index)=><div key={step} className={`rounded-2xl border p-5 text-sm font-medium shadow-sm transition-all duration-500 ${index===1?'translate-x-5 border-slate-800 bg-slate-950 text-white':'border-white/80 bg-white/85'}`}>{step}<span className="float-right text-xs opacity-50">0{index+1}</span></div>)}</div></div>
  if (type === 'design') return <div className="grid h-full grid-cols-2 gap-4 p-8"><div className="rounded-[28px] bg-gradient-to-br from-fuchsia-400 to-violet-600"/><div className="rounded-[28px] bg-white shadow-xl"/><div className="col-span-2 rounded-[28px] bg-amber-300"/></div>
  return <div className="grid h-full grid-cols-2 gap-4 p-8"><div className="rounded-[28px] bg-slate-950"/><div className="rounded-[28px] bg-blue-100"/><div className="rounded-[28px] bg-amber-100"/><div className="rounded-[28px] border border-white bg-white shadow-xl"/></div>
}

export function LocalizedLanding({ locale }: { locale: 'en' | 'de' }) {
  const t = copy[locale]
  const [active, setActive] = useState(0)
  const selected = t.items[active]
  const SelectedIcon = selected.icon
  const external = selected.href.startsWith('http')

  return <div className="min-h-screen overflow-hidden bg-[#f7f9fc] text-ink">
    <LanguageRedirect locale={locale}/>
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,.09),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,.08),transparent_34%)]"/>
    <header className="relative z-30"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href={locale==='de'?'/de/':'/'} className="text-base font-semibold tracking-[-.03em]">Vantura Studios</Link><LanguageSwitch locale={locale}/></div></header>

    <main className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-6 lg:px-8 lg:pb-20 lg:pt-10">
      <section className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-600">{t.eyebrow}</p><h1 className="mt-4 text-[48px] font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl lg:text-[92px]">{t.title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{t.intro}</p></section>

      <section className="mt-12 hidden min-h-[560px] grid-cols-[.8fr_1.2fr] gap-12 lg:grid">
        <nav className="flex flex-col justify-center border-y border-slate-200/80 py-5" aria-label="Studio spaces">
          {t.items.map((item,index)=><button key={item.word} type="button" onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)} className={`group flex items-center justify-between border-b border-slate-200/70 py-5 text-left transition first:border-t ${active===index?'text-slate-950':'text-slate-400 hover:text-slate-700'}`}><span className={`text-5xl font-semibold tracking-[-.055em] transition duration-500 xl:text-6xl ${active===index?'translate-x-3':'group-hover:translate-x-2'}`}>{item.word}</span><span className={`text-xs font-semibold uppercase tracking-[.18em] transition ${active===index?'opacity-100':'opacity-0 group-hover:opacity-60'}`}>0{index+1}</span></button>)}
        </nav>

        <Link href={selected.href} target={external?'_blank':undefined} rel={external?'noreferrer':undefined} className="group relative isolate overflow-hidden rounded-[38px] border border-white/80 bg-white/75 shadow-[0_30px_100px_rgba(15,23,42,.12)] backdrop-blur-xl">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white/75 to-blue-50/60"/>
          <div className="grid h-full grid-rows-[1fr_auto]">
            <div className="relative min-h-[360px] overflow-hidden"><Preview type={selected.visual}/></div>
            <div className="border-t border-white/80 bg-white/75 p-8 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-6"><div><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl border border-white bg-white text-blue-600 shadow-sm"><SelectedIcon size={20}/></span><p className="text-xs font-semibold uppercase tracking-[.18em] text-muted">{selected.label}</p></div><h2 className="mt-5 text-4xl font-semibold tracking-[-.045em]">{selected.title}</h2><p className="mt-3 max-w-xl text-base leading-7 text-muted">{selected.description}</p></div><ArrowUpRight className="mt-2 text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-950"/></div>
              <p className="mt-7 text-sm font-semibold">{t.open} <span aria-hidden="true">→</span></p>
            </div>
          </div>
        </Link>
      </section>

      <section className="mt-10 space-y-4 lg:hidden" aria-label="Studio spaces">
        {t.items.map((item,index)=>{const Icon=item.icon;const isExternal=item.href.startsWith('http');return <Link key={item.word} href={item.href} target={isExternal?'_blank':undefined} rel={isExternal?'noreferrer':undefined} className="group block overflow-hidden rounded-[28px] border border-white/80 bg-white/80 shadow-[0_16px_48px_rgba(15,23,42,.08)] backdrop-blur-xl active:scale-[.99]"><div className="p-5"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl border border-white bg-white text-blue-600 shadow-sm"><Icon size={19}/></span><span className="text-xs font-semibold text-slate-300">0{index+1}</span></div><p className="mt-6 text-[11px] font-semibold uppercase tracking-[.18em] text-muted">{item.label}</p><h2 className="mt-1 text-[34px] font-semibold tracking-[-.05em]">{item.word}</h2><p className="mt-2 text-sm leading-6 text-muted">{item.description}</p><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-sm font-semibold">{item.title}</span><ArrowUpRight size={18} className="text-slate-400"/></div></div></Link>})}
      </section>
    </main>
  </div>
}
