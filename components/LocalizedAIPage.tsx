import Link from 'next/link'
import { ArrowRight, Bot, BrainCircuit, CloudCog, Database, GitBranch, LockKeyhole, Server, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    badge: 'Vantura AI Lab',
    title: 'AI systems that stay useful — and under control.',
    lead: 'Agents, local models and hybrid AI architectures for real products and business workflows — with privacy built into the system design.',
    primary: 'Discuss an AI project',
    visualTitle: 'One system. Different trust boundaries.',
    privateZone: 'Private zone',
    privateMain: 'Local models',
    privateSub: 'Private knowledge',
    cloudZone: 'Capability zone',
    cloudMain: 'Frontier models',
    cloudSub: 'Controlled access',
    approval: 'Critical actions',
    approvalValue: 'Human approval',
    routing: 'Policy & routing',
    capabilitiesEyebrow: 'Applied AI',
    capabilitiesTitle: 'The parts I work with.',
    capabilities: [
      ['AI agents', 'Tool-enabled agents for multi-step workflows and controlled autonomy.'],
      ['LLM integration', 'Cloud and local models inside products, tools and business processes.'],
      ['Automation & MCP', 'APIs, tools, scheduled workflows and connected systems.'],
      ['Memory & RAG', 'Retrieval, embeddings, context engineering and persistent memory.'],
    ],
    privacyEyebrow: 'Privacy-first AI',
    privacyTitle: 'Sensitive data does not have to leave controlled infrastructure.',
    privacyLead: 'For German and European companies, model quality is only one part of the architecture. I also design for data sovereignty, provider independence and deliberate access control.',
    privacyPoints: ['Local & self-hosted LLMs', 'On-premise / private infrastructure', 'Private RAG & controlled context', 'Role-based tool access', 'Human approval for critical actions', 'EU-hosted infrastructure where required'],
    hybridTitle: 'Local where privacy matters. Cloud where capability matters.',
    hybridLead: 'Hybrid routing lets each task use the right path instead of forcing one model onto every workload.',
    routes: [['Sensitive data', 'Local / private'], ['Complex reasoning', 'Frontier cloud'], ['High-volume tasks', 'Efficient model'], ['Critical actions', 'Human approval']],
    graceEyebrow: 'Built in practice',
    graceTitle: 'Grace — my AI workspace & agent platform.',
    graceLead: 'My own product for working with multiple models, specialised agents, tools and local/cloud execution in one coherent system.',
    gracePoints: ['Multi-model architecture', 'Specialised agents', 'Tool-enabled workflows', 'Local + cloud model paths'],
    graceCta: 'Explore Grace',
    stackEyebrow: 'Working stack',
    stackTitle: 'Models, orchestration and engineering.',
    stack: [
      ['Models', 'OpenAI · Claude · Gemini · DeepSeek · Qwen · Llama'],
      ['Agents', 'Tool Calling · MCP · Multi-Agent · Structured Outputs'],
      ['Knowledge', 'RAG · Embeddings · Vector Search · Context Engineering'],
      ['Infrastructure', 'Local inference · Self-hosting · Docker · Hybrid setups'],
      ['Engineering', 'TypeScript · Python · React · Next.js · Supabase'],
    ],
    cta: 'Have an AI problem worth solving?',
    back: 'Back to studio',
  },
  de: {
    badge: 'Vantura AI Lab',
    title: 'KI-Systeme, die nützlich bleiben — und kontrollierbar.',
    lead: 'Agenten, lokale Modelle und hybride KI-Architekturen für echte Produkte und Geschäftsprozesse — mit Datenschutz als Teil des Systemdesigns.',
    primary: 'KI-Projekt besprechen',
    visualTitle: 'Ein System. Unterschiedliche Vertrauenszonen.',
    privateZone: 'Private Zone',
    privateMain: 'Lokale Modelle',
    privateSub: 'Privates Wissen',
    cloudZone: 'Capability Zone',
    cloudMain: 'Frontier-Modelle',
    cloudSub: 'Kontrollierter Zugriff',
    approval: 'Kritische Aktionen',
    approvalValue: 'Freigabe durch Menschen',
    routing: 'Regeln & Routing',
    capabilitiesEyebrow: 'Applied AI',
    capabilitiesTitle: 'Womit ich arbeite.',
    capabilities: [
      ['KI-Agenten', 'Tool-fähige Agenten für mehrstufige Workflows und kontrollierte Autonomie.'],
      ['LLM-Integration', 'Cloud- und lokale Modelle in Produkten, Tools und Geschäftsprozessen.'],
      ['Automation & MCP', 'APIs, Tools, geplante Workflows und verbundene Systeme.'],
      ['Memory & RAG', 'Retrieval, Embeddings, Context Engineering und persistentes Memory.'],
    ],
    privacyEyebrow: 'Privacy-first AI',
    privacyTitle: 'Sensible Daten müssen kontrollierte Infrastruktur nicht verlassen.',
    privacyLead: 'Für deutsche und europäische Unternehmen ist Modellqualität nur ein Teil der Architektur. Ich berücksichtige ebenso Datensouveränität, Anbieterunabhängigkeit und kontrollierte Zugriffe.',
    privacyPoints: ['Lokale & self-hosted LLMs', 'On-Premise / private Infrastruktur', 'Private RAG & kontrollierter Kontext', 'Rollenbasierter Tool-Zugriff', 'Human Approval bei kritischen Aktionen', 'EU-gehostete Infrastruktur, wo erforderlich'],
    hybridTitle: 'Lokal, wo Datenschutz zählt. Cloud, wo Leistung zählt.',
    hybridLead: 'Hybrides Routing gibt jeder Aufgabe den passenden Modellpfad, statt jeden Workload durch denselben Anbieter zu schicken.',
    routes: [['Sensible Daten', 'Lokal / privat'], ['Komplexes Reasoning', 'Frontier Cloud'], ['Hohes Volumen', 'Effizientes Modell'], ['Kritische Aktionen', 'Human Approval']],
    graceEyebrow: 'In der Praxis gebaut',
    graceTitle: 'Grace — mein AI Workspace & Agent-System.',
    graceLead: 'Mein eigenes Produkt für mehrere Modelle, spezialisierte Agenten, Tools sowie lokale und Cloud-Ausführung in einem zusammenhängenden System.',
    gracePoints: ['Multi-Model-Architektur', 'Spezialisierte Agenten', 'Tool-fähige Workflows', 'Lokale + Cloud-Modellpfade'],
    graceCta: 'Grace ansehen',
    stackEyebrow: 'Working stack',
    stackTitle: 'Modelle, Orchestrierung und Engineering.',
    stack: [
      ['Modelle', 'OpenAI · Claude · Gemini · DeepSeek · Qwen · Llama'],
      ['Agenten', 'Tool Calling · MCP · Multi-Agent · Structured Outputs'],
      ['Knowledge', 'RAG · Embeddings · Vector Search · Context Engineering'],
      ['Infrastruktur', 'Local Inference · Self-Hosting · Docker · Hybrid-Setups'],
      ['Engineering', 'TypeScript · Python · React · Next.js · Supabase'],
    ],
    cta: 'Ein KI-Problem, das sich zu lösen lohnt?',
    back: 'Zurück zum Studio',
  },
} as const

const capabilityIcons = [Bot, BrainCircuit, Workflow, Database]

function HeroVisual({ t }: { t: typeof copy.en | typeof copy.de }) {
  return <div className="rounded-[30px] bg-slate-950 p-5 text-white shadow-2xl sm:p-7 lg:rounded-[38px] lg:p-8">
    <div className="flex items-start justify-between gap-4">
      <h2 className="max-w-md text-2xl font-semibold leading-tight tracking-[-.04em] sm:text-3xl lg:text-4xl">{t.visualTitle}</h2>
      <GitBranch className="mt-1 shrink-0 text-blue-300"/>
    </div>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8">
      <div className="rounded-[24px] border border-emerald-300/20 bg-emerald-300/[.06] p-5 sm:p-6">
        <Server className="text-emerald-300" size={21}/>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[.18em] text-emerald-200/60">{t.privateZone}</p>
        <p className="mt-2 text-xl font-semibold sm:text-2xl">{t.privateMain}</p>
        <p className="mt-1 text-sm text-white/55">{t.privateSub}</p>
      </div>
      <div className="rounded-[24px] border border-blue-300/20 bg-blue-300/[.05] p-5 sm:p-6">
        <CloudCog className="text-blue-300" size={21}/>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[.18em] text-blue-200/60">{t.cloudZone}</p>
        <p className="mt-2 text-xl font-semibold sm:text-2xl">{t.cloudMain}</p>
        <p className="mt-1 text-sm text-white/55">{t.cloudSub}</p>
      </div>
    </div>
    <div className="mt-3 flex flex-col gap-3 rounded-[22px] border border-white/10 bg-white/[.04] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div><p className="text-xs text-white/40">{t.routing}</p><p className="mt-1 text-sm font-semibold">Privacy · Capability · Cost</p></div>
      <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold"><ShieldCheck size={15}/>{t.approvalValue}</div>
    </div>
  </div>
}

function RoutingVisual({ routes }: { routes: readonly (readonly [string, string])[] }) {
  return <div className="rounded-[30px] border border-white/10 bg-white/[.045] p-5 sm:p-7">
    <div className="space-y-3">{routes.map(([from,to],index)=><div key={from} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-2xl border border-white/10 bg-white/[.04] px-3 py-3 sm:gap-3 sm:px-4"><span className="text-xs text-white/60 sm:text-sm">{from}</span><ArrowRight size={13} className="text-white/25"/><span className={`rounded-xl px-2 py-2 text-right text-[11px] font-semibold sm:px-3 sm:text-xs ${index===0?'bg-emerald-400/10 text-emerald-200':'bg-blue-400/10 text-blue-200'}`}>{to}</span></div>)}</div>
  </div>
}

export function LocalizedAIPage({ locale }: { locale: 'en' | 'de' }) {
  const t = copy[locale]
  const prefix = locale === 'de' ? '/de' : ''
  const contact = `mailto:jk@vantura-studios.com?subject=${encodeURIComponent(locale === 'de' ? 'KI-Projektanfrage' : 'AI project enquiry')}`

  return <div className="min-h-screen bg-[#f6f8fb] text-ink"><LanguageRedirect locale={locale}/>
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f6f8fb]/90 backdrop-blur-xl"><nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"><Link href={`${prefix}/`} className="font-semibold tracking-[-.03em]">Vantura Studios</Link><div className="flex items-center gap-3"><LanguageSwitch locale={locale}/><a href={contact} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white sm:block">{t.primary}</a></div></nav></header>

    <main>
      <section className="relative border-b border-slate-200"><div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(99,102,241,.18),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(14,165,233,.12),transparent_32%)]"/><div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-18 lg:min-h-[700px] lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-14 lg:px-8 lg:py-20"><div><div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-blue-700"><BrainCircuit size={14}/>{t.badge}</div><h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[.91] tracking-[-.065em] sm:text-7xl lg:text-[82px]">{t.title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{t.lead}</p><a href={contact} className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white">{t.primary}<ArrowRight size={17}/></a></div><HeroVisual t={t}/></div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.capabilitiesEyebrow}</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-6xl">{t.capabilitiesTitle}</h2><div className="mt-12 grid gap-4 md:grid-cols-2">{t.capabilities.map(([title,description],index)=>{const Icon=capabilityIcons[index];return <article key={title} className="rounded-[26px] border border-slate-200 bg-[#f8fafc] p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm"><Icon size={19}/></span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted">{description}</p></article>})}</div></div></section>

      <section className="bg-slate-950 py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-300">{t.privacyEyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{t.privacyTitle}</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">{t.privacyLead}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{t.privacyPoints.map(point=><div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm text-white/75"><LockKeyhole size={15} className="shrink-0 text-emerald-300"/>{point}</div>)}</div></div><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Hybrid AI</p><h3 className="mt-4 text-3xl font-semibold tracking-[-.04em]">{t.hybridTitle}</h3><p className="mt-4 text-sm leading-6 text-white/55">{t.hybridLead}</p><div className="mt-7"><RoutingVisual routes={t.routes}/></div></div></div></div></section>

      <section className="bg-[#f6f8fb] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-8 overflow-hidden rounded-[34px] bg-gradient-to-br from-violet-700 via-fuchsia-600 to-blue-600 p-7 text-white shadow-2xl sm:p-10 lg:grid-cols-[1.05fr_.95fr] lg:p-12"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-white/60">{t.graceEyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.05em] sm:text-5xl">{t.graceTitle}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{t.graceLead}</p><a href="https://meet-grace.com" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">{t.graceCta}<ArrowRight size={16}/></a></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{t.gracePoints.map(point=><div key={point} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm font-medium"><Sparkles size={16} className="shrink-0"/>{point}</div>)}</div></div></div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.stackEyebrow}</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-6xl">{t.stackTitle}</h2><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{t.stack.map(([label,value])=><div key={label} className="grid gap-2 py-5 sm:grid-cols-[170px_1fr] sm:items-center"><p className="text-sm font-semibold">{label}</p><p className="text-sm leading-6 text-muted">{value}</p></div>)}</div></div></section>

      <section className="border-t border-slate-200 bg-[#f6f8fb] py-16"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-8"><div><h2 className="max-w-2xl text-3xl font-semibold tracking-[-.045em] sm:text-5xl">{t.cta}</h2><a href={contact} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">{t.primary}<ArrowRight size={16}/></a></div><Link href={`${prefix}/`} className="text-sm font-semibold text-slate-500">← {t.back}</Link></div></section>
    </main>
  </div>
}
