'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

type Locale = 'en' | 'de'
type View = 'overview' | 'partners' | 'contracts' | 'scorecard'

const MONTHLY_INDEX = [88, 91, 94, 92, 101, 106, 112]

const PARTNERS = [
  { name: 'Atlas Systems', segment: 'Technology', contribution: 118, pacing: 104, score: 91 },
  { name: 'Northstar Group', segment: 'Services', contribution: 104, pacing: 97, score: 86 },
  { name: 'Cedar Works', segment: 'Production', contribution: 96, pacing: 93, score: 82 },
  { name: 'Meridian Labs', segment: 'Innovation', contribution: 89, pacing: 101, score: 88 },
  { name: 'Harbor Collective', segment: 'Distribution', contribution: 76, pacing: 86, score: 74 },
] as const

const CONTRACTS = [
  { id: 'CNT-1042', partner: 'Atlas Systems', type: 'Framework agreement', status: 'Active', renewal: 'Q4 2026' },
  { id: 'CNT-1078', partner: 'Northstar Group', type: 'Service agreement', status: 'Review', renewal: 'Q3 2026' },
  { id: 'CNT-1104', partner: 'Cedar Works', type: 'Performance agreement', status: 'Active', renewal: 'Q1 2027' },
  { id: 'CNT-1121', partner: 'Meridian Labs', type: 'Pilot agreement', status: 'Draft', renewal: 'Q4 2026' },
] as const

const copy = {
  en: {
    product: 'Vantura Operations Hub', subtitle: 'Business Performance', demo: 'Interactive demo', back: 'Back to reporting',
    notice: 'Fictional sample data · no real company or financial data',
    nav: { overview: 'Overview', partners: 'Partners', contracts: 'Contracts', scorecard: 'Scorecard' },
    title: { overview: 'Management overview', partners: 'Partner performance', contracts: 'Contract overview', scorecard: 'Partner scorecard' },
    lead: { overview: 'A single view of performance, plans, contracts and partner quality.', partners: 'Compare contribution, pacing and quality across business partners.', contracts: 'Track contract status and upcoming decisions without scattered files.', scorecard: 'Evaluate operational partners using transparent, comparable criteria.' },
    kpis: [['Performance index','112','+8 vs. plan'],['Plan fulfilment','96.4%','Current period'],['Active contracts','14','2 require review'],['Average score','84 / 100','Stable quality']],
    development: 'Performance development', developmentSub: 'Synthetic index · baseline 100', mix: 'Partner contribution', mixSub: 'Index values, not currency',
    partner: 'Partner', segment: 'Segment', contribution: 'Contribution index', pacing: 'Pacing', score: 'Score', status: 'Status', contract: 'Contract', renewal: 'Next review', type: 'Type',
    active: 'Active', review: 'Review', draft: 'Draft', scoreHint: 'Scores combine delivery quality, reliability, documentation and collaboration.',
  },
  de: {
    product: 'Vantura Operations Hub', subtitle: 'Business Performance', demo: 'Interaktive Demo', back: 'Zurück zu Reporting',
    notice: 'Fiktive Beispieldaten · keine realen Unternehmens- oder Finanzdaten',
    nav: { overview: 'Übersicht', partners: 'Partner', contracts: 'Verträge', scorecard: 'Scorecard' },
    title: { overview: 'Management-Übersicht', partners: 'Partner-Performance', contracts: 'Vertragsübersicht', scorecard: 'Partner-Scorecard' },
    lead: { overview: 'Performance, Planung, Verträge und Partnerqualität in einer gemeinsamen Ansicht.', partners: 'Beitrag, Pacing und Qualität verschiedener Geschäftspartner vergleichen.', contracts: 'Vertragsstatus und anstehende Entscheidungen ohne verteilte Dateien steuern.', scorecard: 'Operative Partner anhand transparenter und vergleichbarer Kriterien bewerten.' },
    kpis: [['Performance-Index','112','+8 ggü. Plan'],['Planerfüllung','96,4 %','Aktuelle Periode'],['Aktive Verträge','14','2 benötigen Prüfung'],['Ø Partner-Score','84 / 100','Stabile Qualität']],
    development: 'Performance-Entwicklung', developmentSub: 'Synthetischer Index · Basis 100', mix: 'Partnerbeitrag', mixSub: 'Indexwerte, keine Währungsbeträge',
    partner: 'Partner', segment: 'Segment', contribution: 'Beitragsindex', pacing: 'Pacing', score: 'Score', status: 'Status', contract: 'Vertrag', renewal: 'Nächste Prüfung', type: 'Typ',
    active: 'Aktiv', review: 'Prüfung', draft: 'Entwurf', scoreHint: 'Die Scores kombinieren Lieferqualität, Zuverlässigkeit, Dokumentation und Zusammenarbeit.',
  },
} as const

const icons = { overview: LayoutDashboard, partners: Building2, contracts: FileText, scorecard: ClipboardCheck }

function Status({ value, locale }: { value: string; locale: Locale }) {
  const t = copy[locale]
  const label = value === 'Active' ? t.active : value === 'Review' ? t.review : t.draft
  const style = value === 'Active' ? 'bg-emerald-400/10 text-emerald-300' : value === 'Review' ? 'bg-amber-400/10 text-amber-300' : 'bg-blue-400/10 text-blue-300'
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${style}`}>{label}</span>
}

export function LocalizedReportingDemo({ locale }: { locale: Locale }) {
  const [view, setView] = useState<View>('overview')
  const t = copy[locale]
  const reportingHref = locale === 'de' ? '/de/reporting/' : '/reporting/'
  const languageHref = locale === 'de' ? '/reporting/demo/' : '/de/reporting/demo/'

  return <div className="min-h-screen bg-[#07101f] text-white">
    <header className="border-b border-white/10 bg-[#091426]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500 text-sm font-bold">VO</div><div className="min-w-0"><p className="truncate font-semibold tracking-[-.02em]">{t.product}</p><p className="text-xs text-white/45">{t.subtitle}</p></div></div>
        <div className="flex items-center gap-2"><span className="hidden rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200 sm:block">{t.demo}</span><Link href={languageHref} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/65 hover:text-white">{locale === 'de' ? 'EN' : 'DE'}</Link></div>
      </div>
    </header>

    <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-white/10 bg-[#091426] px-4 py-4 lg:min-h-[calc(100vh-73px)] lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
        <Link href={reportingHref} className="mb-5 hidden items-center gap-2 text-xs font-medium text-white/45 hover:text-white lg:flex"><ArrowLeft size={14}/>{t.back}</Link>
        <nav className="flex gap-2 overflow-x-auto lg:flex-col">{(Object.keys(t.nav) as View[]).map(key=>{const Icon=icons[key];return <button key={key} onClick={()=>setView(key)} className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition lg:w-full ${view===key?'bg-blue-500 text-white shadow-[0_12px_30px_rgba(59,130,246,.22)]':'text-white/55 hover:bg-white/5 hover:text-white'}`}><Icon size={17}/>{t.nav[key]}</button>})}</nav>
        <div className="mt-6 hidden rounded-xl border border-white/10 bg-white/[.03] p-4 lg:block"><ShieldCheck size={18} className="text-blue-300"/><p className="mt-3 text-xs leading-5 text-white/45">{t.notice}</p></div>
      </aside>

      <main className="min-w-0 px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <Link href={reportingHref} className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/45 hover:text-white lg:hidden"><ArrowLeft size={14}/>{t.back}</Link>
        <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-300">{t.demo}</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{t.title[view]}</h1><p className="mt-3 max-w-3xl leading-7 text-white/50">{t.lead[view]}</p></div>

        {view === 'overview' && <div className="mt-8 space-y-5">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{t.kpis.map(([label,value,detail],index)=>{const Icon=[TrendingUp,Gauge,FileText,CheckCircle2][index];return <article key={label} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="flex items-center justify-between"><p className="text-sm text-white/50">{label}</p><Icon size={17} className="text-blue-300"/></div><p className="mt-5 text-3xl font-semibold tracking-[-.04em] tnum">{value}</p><p className="mt-2 text-xs text-white/35">{detail}</p></article>})}</div>
          <div className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
            <article className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6"><h2 className="font-semibold">{t.development}</h2><p className="mt-1 text-xs text-white/35">{t.developmentSub}</p><div className="mt-8 flex h-64 items-end gap-3 sm:gap-5">{MONTHLY_INDEX.map((value,index)=><div key={index} className="flex flex-1 flex-col items-center gap-2"><span className="text-[10px] text-white/35 tnum">{value}</span><div className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-300" style={{height:`${value/1.25}%`}}/><span className="text-[10px] text-white/35">{['Jan','Feb','Mar','Apr','May','Jun','Jul'][index]}</span></div>)}</div></article>
            <article className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-6"><h2 className="font-semibold">{t.mix}</h2><p className="mt-1 text-xs text-white/35">{t.mixSub}</p><div className="mt-7 space-y-5">{PARTNERS.slice(0,4).map(partner=><div key={partner.name}><div className="mb-2 flex justify-between gap-4 text-xs"><span className="truncate text-white/65">{partner.name}</span><span className="tnum text-white/40">{partner.contribution}</span></div><div className="h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-blue-400" style={{width:`${Math.min(partner.contribution/1.25,100)}%`}}/></div></div>)}</div></article>
          </div>
        </div>}

        {view === 'partners' && <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="border-b border-white/10 text-xs uppercase tracking-[.12em] text-white/35"><tr><th className="px-5 py-4">{t.partner}</th><th className="px-5 py-4">{t.segment}</th><th className="px-5 py-4">{t.contribution}</th><th className="px-5 py-4">{t.pacing}</th><th className="px-5 py-4">{t.score}</th></tr></thead><tbody className="divide-y divide-white/5">{PARTNERS.map(partner=><tr key={partner.name} className="hover:bg-white/[.025]"><td className="px-5 py-4 font-medium">{partner.name}</td><td className="px-5 py-4 text-white/45">{partner.segment}</td><td className="px-5 py-4 tnum">{partner.contribution}</td><td className="px-5 py-4 tnum">{partner.pacing} %</td><td className="px-5 py-4"><span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-200">{partner.score}</span></td></tr>)}</tbody></table></div></div>}

        {view === 'contracts' && <div className="mt-8 grid gap-4 md:grid-cols-2">{CONTRACTS.map(contract=><article key={contract.id} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-mono text-white/35">{contract.id}</p><h2 className="mt-2 text-lg font-semibold">{contract.partner}</h2></div><Status value={contract.status} locale={locale}/></div><dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-sm"><div><dt className="text-xs text-white/35">{t.type}</dt><dd className="mt-1 text-white/70">{contract.type}</dd></div><div><dt className="text-xs text-white/35">{t.renewal}</dt><dd className="mt-1 text-white/70">{contract.renewal}</dd></div></dl></article>)}</div>}

        {view === 'scorecard' && <div className="mt-8"><div className="rounded-2xl border border-blue-400/15 bg-blue-400/[.06] p-4 text-sm leading-6 text-blue-100/70">{t.scoreHint}</div><div className="mt-4 grid gap-4 md:grid-cols-2">{PARTNERS.map(partner=><article key={partner.name} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="flex items-center justify-between gap-4"><div><p className="text-xs text-white/35">{partner.segment}</p><h2 className="mt-1 font-semibold">{partner.name}</h2></div><div className="grid h-12 w-12 place-items-center rounded-full border border-blue-300/20 bg-blue-400/10 font-semibold text-blue-200 tnum">{partner.score}</div></div><div className="mt-5 grid grid-cols-3 gap-2">{[['Quality',partner.score],['Pacing',partner.pacing],['Delivery',Math.min(partner.score+4,99)]].map(([label,value])=><div key={String(label)} className="rounded-xl bg-white/[.035] p-3"><p className="text-[10px] uppercase tracking-wider text-white/30">{label}</p><p className="mt-2 text-sm font-semibold tnum">{value}</p></div>)}</div></article>)}</div></div>}
      </main>
    </div>
  </div>
}
