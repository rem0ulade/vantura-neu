import Link from 'next/link'
import { ArrowRight, Bot, BrainCircuit, CloudCog, Database, GitBranch, LockKeyhole, Server, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    badge: 'AI Projects · Strategy · Vantura AI Lab',
    title: 'AI that solves concrete business problems — from one project to a broader strategy.',
    lead: 'I support companies where AI creates practical value: dashboards and decision tools, internal applications, automations and AI workflows — or, when needed, with strategy, governance and ongoing AI ownership.',
    primary: 'Discuss an AI project',
    visualTitle: 'Start with a useful project. Build structure around it when it makes sense.',
    privateZone: 'Focused project',
    privateMain: 'Build & deliver',
    privateSub: 'Dashboards · tools · workflows',
    cloudZone: 'Ongoing support',
    cloudMain: 'Strategy & governance',
    cloudSub: 'Priorities · standards · enablement',
    approval: 'Critical actions',
    approvalValue: 'Human approval where needed',
    routing: 'Engagement model',
    capabilitiesEyebrow: 'From project to AI capability',
    capabilitiesTitle: 'A concrete solution when you need one — broader AI guidance when you need more.',
    capabilities: [
      ['AI projects & prototypes', 'Build focused solutions for a clear business problem — from AI workflows and agents to prototypes that can be tested quickly.'],
      ['Dashboards & internal tools', 'Create decision dashboards, reporting tools and internal applications that combine data, automation and AI where it adds value.'],
      ['AI strategy & governance', 'Prioritise use cases, choose tools and providers, and define practical standards for data, access and responsible use.'],
      ['Enablement & ongoing support', 'Support teams during rollout and, when useful, stay involved as an external AI Officer or long-term implementation partner.'],
    ],
    privacyEyebrow: 'Privacy-first AI',
    privacyTitle: 'Sensitive data does not have to leave controlled infrastructure.',
    privacyLead: 'Governance only works when it is reflected in the architecture. For German and European companies, I design for data sovereignty, provider independence and deliberate access control — not just policy documents.',
    privacyPoints: ['Local & self-hosted LLMs', 'On-premise / private infrastructure', 'Private RAG & controlled context', 'Role-based tool access', 'Human approval for critical actions', 'EU-hosted infrastructure where required'],
    hybridTitle: 'Local where privacy matters. Cloud where capability matters.',
    hybridLead: 'Hybrid routing lets each task use the right path instead of forcing one model onto every workload.',
    routes: [['Sensitive data', 'Local / private'], ['Complex reasoning', 'Frontier cloud'], ['High-volume tasks', 'Efficient model'], ['Critical actions', 'Human approval']],
    graceEyebrow: 'Engineering proof',
    graceTitle: 'Grace — proof that the recommendations come from building, not just advising.',
    graceLead: 'I build my own multi-model AI workspace with specialised agents, tools and local/cloud execution. Recommendations are grounded in what can actually be engineered, operated and maintained.',
    gracePoints: ['Multi-model architecture', 'Specialised agents', 'Tool-enabled workflows', 'Local + cloud model paths'],
    graceCta: 'Explore Grace',
    stackEyebrow: 'Technical depth',
    stackTitle: 'Strategy is stronger when the engineering is understood.',
    stack: [
      ['Models', 'OpenAI · Claude · Gemini · DeepSeek · Qwen · Llama'],
      ['Agents', 'Tool Calling · MCP · Multi-Agent · Structured Outputs'],
      ['Knowledge', 'RAG · Embeddings · Vector Search · Context Engineering'],
      ['Infrastructure', 'Local inference · Self-hosting · Docker · Hybrid setups'],
      ['Engineering', 'TypeScript · Python · React · Next.js · Supabase'],
    ],
    strategyEyebrow: 'AI strategy & ongoing ownership',
    strategyTitle: 'When individual projects turn into a broader AI agenda.',
    strategyLead: 'Not every company needs a full AI programme on day one. But once several teams, tools and use cases are involved, clear ownership becomes valuable. I can help turn those moving parts into a practical operating model — without separating strategy from implementation.',
    strategyPoints: [
      ['01', 'Use-case portfolio', 'Collect, assess and prioritise opportunities by business value, feasibility, data readiness and risk.'],
      ['02', 'Roadmap & priorities', 'Translate the strongest opportunities into a realistic sequence of pilots, production systems and organisational steps.'],
      ['03', 'Tool & provider decisions', 'Evaluate models, platforms and vendors against capability, privacy, integration effort, cost and long-term flexibility.'],
      ['04', 'Governance & standards', 'Define practical rules for approved tools, data handling, access, human approval, documentation and responsible use.'],
      ['05', 'Enablement & AI Officer support', 'Support teams, coordinate stakeholders and stay involved as an external AI Officer when ongoing ownership is useful.'],
    ],
    cta: 'Have one AI project in mind — or need help shaping the bigger picture?',
    ctaText: 'We can start with a concrete dashboard, workflow or internal tool — or look at your wider AI priorities and define the right next step together.',
    back: 'Back to studio',
  },
  de: {
    badge: 'KI-Projekte · Strategie · Vantura AI Lab',
    title: 'KI sinnvoll einsetzen — von einzelnen Projekten bis zur strategischen Begleitung.',
    lead: 'Ich unterstütze Unternehmen dort, wo KI konkret Nutzen schafft: bei Dashboards und Entscheidungstools, internen Anwendungen, Automationen und KI-Workflows — oder bei Bedarf mit Strategie, Governance und laufender KI-Begleitung.',
    primary: 'KI-Projekt besprechen',
    visualTitle: 'Mit einem sinnvollen Projekt starten. Struktur aufbauen, wenn sie gebraucht wird.',
    privateZone: 'Konkretes Projekt',
    privateMain: 'Bauen & umsetzen',
    privateSub: 'Dashboards · Tools · Workflows',
    cloudZone: 'Laufende Begleitung',
    cloudMain: 'Strategie & Governance',
    cloudSub: 'Prioritäten · Standards · Enablement',
    approval: 'Kritische Aktionen',
    approvalValue: 'Human Approval, wo nötig',
    routing: 'Zusammenarbeitsmodell',
    capabilitiesEyebrow: 'Vom Projekt zur KI-Kompetenz',
    capabilitiesTitle: 'Eine konkrete Lösung, wenn Sie eine brauchen — breitere KI-Begleitung, wenn mehr dahintersteht.',
    capabilities: [
      ['KI-Projekte & Prototypen', 'Fokussierte Lösungen für ein klares Business-Problem bauen — von KI-Workflows und Agenten bis zu schnell testbaren Prototypen.'],
      ['Dashboards & interne Tools', 'Entscheidungs-Dashboards, Reporting-Tools und interne Anwendungen entwickeln, die Daten, Automation und KI dort verbinden, wo es sinnvoll ist.'],
      ['KI-Strategie & Governance', 'Use Cases priorisieren, Tools und Anbieter bewerten und praktische Standards für Daten, Zugriffe und verantwortungsvollen Einsatz definieren.'],
      ['Enablement & laufende Begleitung', 'Teams bei der Einführung unterstützen und bei Bedarf als externer AI Officer oder langfristiger Umsetzungspartner begleiten.'],
    ],
    privacyEyebrow: 'Privacy-first AI',
    privacyTitle: 'Sensible Daten müssen kontrollierte Infrastruktur nicht verlassen.',
    privacyLead: 'Governance funktioniert nur, wenn sie sich in der Architektur wiederfindet. Für deutsche und europäische Unternehmen berücksichtige ich Datensouveränität, Anbieterunabhängigkeit und kontrollierte Zugriffe — nicht nur Richtliniendokumente.',
    privacyPoints: ['Lokale & self-hosted LLMs', 'On-Premise / private Infrastruktur', 'Private RAG & kontrollierter Kontext', 'Rollenbasierter Tool-Zugriff', 'Human Approval bei kritischen Aktionen', 'EU-gehostete Infrastruktur, wo erforderlich'],
    hybridTitle: 'Lokal, wo Datenschutz zählt. Cloud, wo Leistung zählt.',
    hybridLead: 'Hybrides Routing gibt jeder Aufgabe den passenden Modellpfad, statt jeden Workload durch denselben Anbieter zu schicken.',
    routes: [['Sensible Daten', 'Lokal / privat'], ['Komplexes Reasoning', 'Frontier Cloud'], ['Hohes Volumen', 'Effizientes Modell'], ['Kritische Aktionen', 'Human Approval']],
    graceEyebrow: 'Engineering-Beweis',
    graceTitle: 'Grace — der Beweis, dass die Beratung aus echter Umsetzung kommt.',
    graceLead: 'Ich entwickle selbst einen Multi-Model-AI-Workspace mit spezialisierten Agenten, Tools sowie lokaler und Cloud-Ausführung. Empfehlungen basieren damit auf dem, was sich technisch wirklich bauen, betreiben und warten lässt.',
    gracePoints: ['Multi-Model-Architektur', 'Spezialisierte Agenten', 'Tool-fähige Workflows', 'Lokale + Cloud-Modellpfade'],
    graceCta: 'Grace ansehen',
    stackEyebrow: 'Technische Tiefe',
    stackTitle: 'Strategie wird besser, wenn das Engineering verstanden wird.',
    stack: [
      ['Modelle', 'OpenAI · Claude · Gemini · DeepSeek · Qwen · Llama'],
      ['Agenten', 'Tool Calling · MCP · Multi-Agent · Structured Outputs'],
      ['Knowledge', 'RAG · Embeddings · Vector Search · Context Engineering'],
      ['Infrastruktur', 'Local Inference · Self-Hosting · Docker · Hybrid-Setups'],
      ['Engineering', 'TypeScript · Python · React · Next.js · Supabase'],
    ],
    strategyEyebrow: 'KI-Strategie & laufende Verantwortung',
    strategyTitle: 'Wenn aus einzelnen Projekten eine größere KI-Agenda wird.',
    strategyLead: 'Nicht jedes Unternehmen braucht vom ersten Tag an ein vollständiges KI-Programm. Sobald aber mehrere Teams, Tools und Use Cases zusammenkommen, wird klare Verantwortung wertvoll. Ich helfe dabei, daraus ein praktikables Operating Model zu machen — ohne Strategie und Umsetzung voneinander zu trennen.',
    strategyPoints: [
      ['01', 'Use-Case-Portfolio', 'Chancen sammeln, bewerten und nach Business-Nutzen, Machbarkeit, Datenreife und Risiko priorisieren.'],
      ['02', 'Roadmap & Prioritäten', 'Die stärksten Use Cases in eine realistische Reihenfolge aus Piloten, produktiven Systemen und organisatorischen Schritten übersetzen.'],
      ['03', 'Tool- & Anbieterauswahl', 'Modelle, Plattformen und Anbieter nach Leistung, Datenschutz, Integrationsaufwand, Kosten und langfristiger Flexibilität bewerten.'],
      ['04', 'Governance & Standards', 'Praktische Regeln für freigegebene Tools, Daten, Zugriffe, Human Approval, Dokumentation und verantwortungsvollen Einsatz definieren.'],
      ['05', 'Enablement & AI-Officer-Begleitung', 'Teams unterstützen, Stakeholder koordinieren und bei Bedarf als externer AI Officer laufende Verantwortung übernehmen.'],
    ],
    cta: 'Sie haben ein konkretes KI-Projekt — oder möchten das größere Bild strukturieren?',
    ctaText: 'Wir können mit einem Dashboard, Workflow oder internen Tool starten — oder gemeinsam Ihre KI-Prioritäten ordnen und den sinnvollsten nächsten Schritt festlegen.',
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

      <section className="border-t border-slate-200 bg-[#f6f8fb] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.strategyEyebrow}</p><h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{t.strategyTitle}</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{t.strategyLead}</p></div><div className="divide-y divide-slate-200 border-y border-slate-200">{t.strategyPoints.map(([number,title,description])=><div key={number} className="grid gap-3 py-6 sm:grid-cols-[64px_190px_1fr] sm:items-start"><span className="text-xs font-semibold tracking-[.18em] text-blue-600">{number}</span><h3 className="text-base font-semibold">{title}</h3><p className="text-sm leading-6 text-muted">{description}</p></div>)}</div></div></div></section>

      <section className="border-t border-slate-200 bg-slate-950 py-16 text-white lg:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-8"><div><h2 className="max-w-3xl text-3xl font-semibold tracking-[-.045em] sm:text-5xl">{t.cta}</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">{t.ctaText}</p><a href={contact} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">{t.primary}<ArrowRight size={16}/></a></div><Link href={`${prefix}/`} className="text-sm font-semibold text-white/45 transition hover:text-white">← {t.back}</Link></div></section>
    </main>
  </div>
}
