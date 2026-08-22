import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Bot, BrainCircuit, CloudCog, Cpu, Database, GitBranch, LockKeyhole, Network, Server, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { LanguageRedirect } from './LanguageRedirect'
import { LanguageSwitch } from './LanguageSwitch'

const copy = {
  en: {
    badge: 'Vantura AI Lab',
    title: 'AI systems that stay useful — and under control.',
    lead: 'Agents, LLM integrations and intelligent workflows with a strong focus on privacy, local models and hybrid architectures. Built for real products and business processes — not AI for its own sake.',
    primary: 'Discuss an AI project',
    principlesEyebrow: 'Applied AI',
    principlesTitle: 'From model access to a working system.',
    principlesLead: 'Calling an LLM is the easy part. The useful work starts when models need context, tools, memory, permissions, reliable workflows and clear boundaries around company data.',
    capabilities: [
      ['AI agents', 'Tool-enabled agents that can work through multi-step tasks, use external systems and hand decisions back to humans where appropriate.'],
      ['LLM integration', 'Cloud and local language models integrated into applications, internal tools and existing business workflows.'],
      ['Automation', 'AI connected with APIs, scheduled processes, communication channels and operational systems to remove repetitive work.'],
      ['Tool calling & MCP', 'Controlled access to external tools, data and services instead of limiting AI to conversation.'],
      ['Memory & RAG', 'Retrieval, embeddings, context engineering and persistent memory for systems that can work with relevant knowledge.'],
      ['Local & private AI', 'Self-hosted and local models for workloads where data sovereignty, provider independence or offline capability matters.'],
    ],
    privacyEyebrow: 'Privacy-first architecture',
    privacyTitle: 'Sensitive data does not automatically belong in an external model API.',
    privacyLead: 'For many German and European companies, the architecture around AI is as important as model quality. I design systems so that data flows, model access and tool permissions can be controlled deliberately.',
    privacyPoints: ['Local and self-hosted LLMs', 'On-premise or private infrastructure', 'Data minimisation and controlled context sharing', 'Role-based tool access and human approvals', 'Provider-independent architectures', 'Logging, traceability and auditable workflows', 'EU-hosted infrastructure where required', 'GDPR-aware system design without blanket compliance claims'],
    localEyebrow: 'Local AI',
    localTitle: 'Keep private workloads inside your own infrastructure.',
    localLead: 'Not every AI task needs a hyperscaler. Open-weight models can handle internal assistants, document workflows, retrieval, classification, automation and specialised agents on controlled infrastructure.',
    localBenefits: [['Data sovereignty', 'Company information can remain within infrastructure you control.'], ['Provider independence', 'Architectures can avoid locking the entire product to one model vendor.'], ['Cost control', 'High-volume workloads can be routed to efficient local or lower-cost models.'], ['Offline capability', 'Selected workflows can continue without depending on an external inference API.']],
    hybridEyebrow: 'Hybrid AI architecture',
    hybridTitle: 'Local where privacy matters. Cloud where capability matters.',
    hybridLead: 'A strong AI system does not have to choose one provider or one deployment model. Tasks can be routed according to sensitivity, reasoning requirements, latency and cost.',
    routes: [['Sensitive company data', 'Local / private model'], ['Complex reasoning', 'Frontier cloud model'], ['High-volume processing', 'Efficient model'], ['Internal knowledge', 'Private retrieval + controlled model'], ['Critical action', 'Human approval']],
    stackEyebrow: 'Working stack',
    stackTitle: 'Across models, orchestration and product engineering.',
    stack: [
      ['Models', 'OpenAI · Claude · Gemini · DeepSeek · Qwen · Llama · local LLMs'],
      ['Orchestration', 'AI agents · multi-agent systems · tool calling · MCP · structured outputs · model routing'],
      ['Knowledge', 'RAG · embeddings · vector search · semantic retrieval · long-term memory · context engineering'],
      ['Infrastructure', 'Local inference · self-hosting · Docker · private services · cloud APIs · hybrid setups'],
      ['Automation', 'Agent workflows · scheduled tasks · webhooks · APIs · human-in-the-loop systems'],
      ['Engineering', 'TypeScript · Python · React · Next.js · React Native · Expo · Supabase · CI/CD'],
    ],
    graceEyebrow: 'Built, not just explored',
    graceTitle: 'Grace — personal AI workspace & agent orchestration.',
    graceLead: 'Grace is my own AI product and a practical demonstration of how I approach applied AI: multiple models, specialised agents, tools and workflows combined inside one coherent product experience.',
    gracePoints: ['Multi-model architecture', 'Specialised AI agents', 'Tool-enabled workflows', 'Local and cloud model paths', 'Cross-platform product engineering'],
    graceCta: 'Explore Grace',
    approachEyebrow: 'How I work',
    approachTitle: 'AI + software + business context.',
    approachLead: 'My work sits between AI engineering, product development, data and operational processes. That makes it possible to go beyond a demo and build the surrounding system as well.',
    roles: [['AI engineering', 'Agents, LLM integrations, tools, memory and AI-enabled applications.'], ['Agentic systems', 'Multi-agent architecture, orchestration, tool use and controlled autonomy.'], ['AI automation', 'Connecting AI with existing APIs, processes and operational systems.'], ['AI product development', 'Turning AI capabilities into complete web, mobile and desktop products.'], ['AI prototyping', 'Testing new models and architectures quickly before committing to a larger build.'], ['Private AI', 'Local, self-hosted and hybrid architectures for privacy-sensitive use cases.']],
    cta: 'Have an AI problem worth solving?',
    back: 'Back to studio',
  },
  de: {
    badge: 'Vantura AI Lab',
    title: 'KI-Systeme, die nützlich bleiben — und kontrollierbar.',
    lead: 'Agenten, LLM-Integrationen und intelligente Workflows mit starkem Fokus auf Datenschutz, lokale Modelle und hybride Architekturen. Gebaut für echte Produkte und Geschäftsprozesse — nicht für KI als Selbstzweck.',
    primary: 'KI-Projekt besprechen',
    principlesEyebrow: 'Applied AI',
    principlesTitle: 'Vom Modellzugriff zum funktionierenden System.',
    principlesLead: 'Ein LLM aufzurufen ist der einfache Teil. Interessant wird es, wenn Modelle Kontext, Tools, Memory, Berechtigungen, belastbare Workflows und klare Grenzen für Unternehmensdaten brauchen.',
    capabilities: [
      ['KI-Agenten', 'Tool-fähige Agenten für mehrstufige Aufgaben, externe Systeme und gezielte Übergaben an Menschen, wenn Entscheidungen nicht autonom getroffen werden sollten.'],
      ['LLM-Integration', 'Cloud- und lokale Sprachmodelle integriert in Anwendungen, interne Tools und bestehende Geschäftsprozesse.'],
      ['Automation', 'KI verbunden mit APIs, geplanten Prozessen, Kommunikationskanälen und operativen Systemen, um wiederkehrende Arbeit zu reduzieren.'],
      ['Tool Calling & MCP', 'Kontrollierter Zugriff auf externe Tools, Daten und Services statt KI auf reine Konversation zu begrenzen.'],
      ['Memory & RAG', 'Retrieval, Embeddings, Context Engineering und persistentes Memory für Systeme, die mit relevantem Wissen arbeiten können.'],
      ['Lokale & private KI', 'Self-hosted und lokale Modelle für Workloads, bei denen Datensouveränität, Anbieterunabhängigkeit oder Offline-Fähigkeit wichtig sind.'],
    ],
    privacyEyebrow: 'Privacy-first Architektur',
    privacyTitle: 'Sensible Daten gehören nicht automatisch in eine externe Modell-API.',
    privacyLead: 'Für viele deutsche und europäische Unternehmen ist die Architektur rund um KI genauso wichtig wie die Modellqualität. Ich konzipiere Systeme so, dass Datenflüsse, Modellzugriffe und Tool-Berechtigungen bewusst kontrolliert werden können.',
    privacyPoints: ['Lokale und self-hosted LLMs', 'On-Premise oder private Infrastruktur', 'Datenminimierung und kontrolliertes Context Sharing', 'Rollenbasierter Tool-Zugriff und Human Approvals', 'Anbieterunabhängige Architekturen', 'Logging, Nachvollziehbarkeit und auditierbare Workflows', 'EU-gehostete Infrastruktur, wo erforderlich', 'DSGVO-bewusstes Systemdesign ohne pauschale Compliance-Versprechen'],
    localEyebrow: 'Local AI',
    localTitle: 'Private Workloads bleiben in der eigenen Infrastruktur.',
    localLead: 'Nicht jede KI-Aufgabe braucht einen Hyperscaler. Open-Weight-Modelle können interne Assistenten, Dokumenten-Workflows, Retrieval, Klassifikation, Automationen und spezialisierte Agenten auf kontrollierter Infrastruktur abbilden.',
    localBenefits: [['Datensouveränität', 'Unternehmensinformationen können innerhalb kontrollierter Infrastruktur bleiben.'], ['Anbieterunabhängigkeit', 'Die gesamte Anwendung muss nicht an einen einzigen Modellanbieter gekoppelt werden.'], ['Kostenkontrolle', 'Hohe Volumina lassen sich an effiziente lokale oder günstigere Modelle routen.'], ['Offline-Fähigkeit', 'Ausgewählte Workflows können ohne externe Inference-API funktionieren.']],
    hybridEyebrow: 'Hybride KI-Architektur',
    hybridTitle: 'Lokal, wo Datenschutz zählt. Cloud, wo maximale Fähigkeit zählt.',
    hybridLead: 'Ein starkes KI-System muss sich nicht für einen Anbieter oder ein Deployment-Modell entscheiden. Aufgaben können nach Sensitivität, Reasoning-Anforderung, Latenz und Kosten geroutet werden.',
    routes: [['Sensible Unternehmensdaten', 'Lokales / privates Modell'], ['Komplexes Reasoning', 'Frontier Cloud Model'], ['Hohes Verarbeitungsvolumen', 'Effizientes Modell'], ['Internes Wissen', 'Private Retrieval + kontrolliertes Modell'], ['Kritische Aktion', 'Human Approval']],
    stackEyebrow: 'Working stack',
    stackTitle: 'Von Modellen über Orchestrierung bis Product Engineering.',
    stack: [
      ['Modelle', 'OpenAI · Claude · Gemini · DeepSeek · Qwen · Llama · lokale LLMs'],
      ['Orchestrierung', 'KI-Agenten · Multi-Agent-Systeme · Tool Calling · MCP · Structured Outputs · Model Routing'],
      ['Knowledge', 'RAG · Embeddings · Vector Search · Semantic Retrieval · Long-Term Memory · Context Engineering'],
      ['Infrastruktur', 'Local Inference · Self-Hosting · Docker · private Services · Cloud APIs · Hybrid-Setups'],
      ['Automation', 'Agent Workflows · Scheduled Tasks · Webhooks · APIs · Human-in-the-loop Systeme'],
      ['Engineering', 'TypeScript · Python · React · Next.js · React Native · Expo · Supabase · CI/CD'],
    ],
    graceEyebrow: 'Gebaut, nicht nur ausprobiert',
    graceTitle: 'Grace — persönlicher AI Workspace & Agent Orchestration.',
    graceLead: 'Grace ist mein eigenes KI-Produkt und zeigt praktisch, wie ich Applied AI angehe: mehrere Modelle, spezialisierte Agenten, Tools und Workflows in einem konsistenten Produkterlebnis.',
    gracePoints: ['Multi-Model-Architektur', 'Spezialisierte KI-Agenten', 'Tool-fähige Workflows', 'Lokale und Cloud-Modellpfade', 'Cross-Platform Product Engineering'],
    graceCta: 'Grace ansehen',
    approachEyebrow: 'Arbeitsweise',
    approachTitle: 'KI + Software + Business-Kontext.',
    approachLead: 'Meine Arbeit liegt zwischen AI Engineering, Produktentwicklung, Daten und operativen Prozessen. Dadurch kann ich über einen Demo-Use-Case hinaus auch das umgebende System bauen.',
    roles: [['AI Engineering', 'Agenten, LLM-Integrationen, Tools, Memory und KI-gestützte Anwendungen.'], ['Agentic Systems', 'Multi-Agent-Architektur, Orchestrierung, Tool Use und kontrollierte Autonomie.'], ['AI Automation', 'KI mit bestehenden APIs, Prozessen und operativen Systemen verbinden.'], ['AI Product Development', 'KI-Fähigkeiten in komplette Web-, Mobile- und Desktop-Produkte überführen.'], ['AI Prototyping', 'Neue Modelle und Architekturen schnell testen, bevor größer investiert wird.'], ['Private AI', 'Lokale, self-hosted und hybride Architekturen für datenschutzsensible Einsatzfälle.']],
    cta: 'Ein KI-Problem, das sich zu lösen lohnt?',
    back: 'Zurück zum Studio',
  },
} as const

const capabilityIcons = [Bot, BrainCircuit, Workflow, Network, Database, Server]
const roleIcons = [BrainCircuit, GitBranch, Workflow, Sparkles, Cpu, LockKeyhole]

function RoutingVisual({ routes }: { routes: readonly (readonly [string, string])[] }) {
  return <div className="rounded-[34px] border border-white/10 bg-white/[.045] p-5 shadow-2xl backdrop-blur sm:p-7">
    <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-white/35">Routing layer</p><p className="mt-2 text-xl font-semibold">Privacy · Capability · Cost</p></div><GitBranch className="text-blue-300"/></div>
    <div className="mt-5 space-y-3">{routes.map(([from,to],index)=><div key={from} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3"><span className="text-sm text-white/65">{from}</span><ArrowRight size={14} className="text-white/25"/><span className={`rounded-xl px-3 py-2 text-right text-xs font-semibold ${index===0||index===3?'bg-emerald-400/10 text-emerald-200':'bg-blue-400/10 text-blue-200'}`}>{to}</span></div>)}</div>
  </div>
}

export function LocalizedAIPage({ locale }: { locale: 'en' | 'de' }) {
  const t = copy[locale]
  const prefix = locale === 'de' ? '/de' : ''
  const contact = `mailto:jk@vantura-studios.com?subject=${encodeURIComponent(locale === 'de' ? 'KI-Projektanfrage' : 'AI project enquiry')}`

  return <div className="min-h-screen bg-[#f6f8fb] text-ink"><LanguageRedirect locale={locale}/>
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f6f8fb]/90 backdrop-blur-xl"><nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"><Link href={`${prefix}/`} className="font-semibold tracking-[-.03em]">Vantura Studios</Link><div className="flex items-center gap-3"><LanguageSwitch locale={locale}/><a href={contact} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white sm:block">{t.primary}</a></div></nav></header>

    <main>
      <section className="relative overflow-hidden border-b border-slate-200"><div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(99,102,241,.18),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(14,165,233,.12),transparent_32%)]"/><div className="relative mx-auto grid min-h-[760px] max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8"><div><div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-blue-700"><BrainCircuit size={14}/>{t.badge}</div><h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[.91] tracking-[-.065em] sm:text-7xl lg:text-[84px]">{t.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{t.lead}</p><a href={contact} className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white">{t.primary}<ArrowRight size={17}/></a></div>
        <div className="relative min-h-[590px]"><div className="absolute inset-x-0 top-6 rounded-[40px] bg-slate-950 p-7 text-white shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-white/35">AI architecture</p><p className="mt-2 max-w-md text-2xl font-semibold">One system. Different trust boundaries.</p></div><ShieldCheck className="text-emerald-300"/></div><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-[26px] border border-emerald-300/15 bg-emerald-300/[.06] p-5"><Server className="text-emerald-300"/><p className="mt-16 text-sm font-semibold uppercase tracking-[.14em] text-emerald-200/60">Private zone</p><p className="mt-2 text-2xl font-semibold">Local models<br/>Private knowledge</p></div><div className="rounded-[26px] border border-blue-300/15 bg-blue-300/[.06] p-5"><CloudCog className="text-blue-300"/><p className="mt-16 text-sm font-semibold uppercase tracking-[.14em] text-blue-200/60">Capability zone</p><p className="mt-2 text-2xl font-semibold">Frontier models<br/>Controlled access</p></div></div><div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4"><div className="flex items-center gap-3"><LockKeyhole size={18} className="text-violet-300"/><span className="text-sm text-white/70">Policy & routing layer</span></div><span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/50">Human in the loop</span></div></div></div></div></section>

      <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><p className="pt-3 text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.principlesEyebrow}</p><div><h2 className="text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{t.principlesTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{t.principlesLead}</p></div></div><div className="mt-16 divide-y divide-slate-200 border-y border-slate-200">{t.capabilities.map(([title,description],index)=>{const Icon=capabilityIcons[index];return <article key={title} className="grid gap-5 py-7 md:grid-cols-[70px_1fr_1.2fr_auto] md:items-center"><span className="text-xs font-semibold text-black/35">0{index+1}</span><div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100"><Icon size={19}/></span><h3 className="text-xl font-semibold">{title}</h3></div><p className="leading-7 text-muted">{description}</p><ArrowUpRight className="hidden text-black/30 md:block"/></article>})}</div></div></section>

      <section className="bg-slate-950 py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-300">{t.privacyEyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-[.96] tracking-[-.055em] sm:text-6xl">{t.privacyTitle}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">{t.privacyLead}</p></div><div className="grid gap-3 sm:grid-cols-2">{t.privacyPoints.map((item,index)=><div key={item} className="flex min-h-28 items-start gap-4 rounded-[24px] border border-white/10 bg-white/[.045] p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-300/10 text-emerald-300"><ShieldCheck size={17}/></span><div><span className="text-[11px] font-semibold text-white/25">0{index+1}</span><p className="mt-1 text-sm font-medium leading-6 text-white/75">{item}</p></div></div>)}</div></div></div></section>

      <section className="bg-[#f6f8fb] py-24 lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-16 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.localEyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{t.localTitle}</h2><p className="mt-6 text-lg leading-8 text-muted">{t.localLead}</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{t.localBenefits.map(([title,description])=><div key={title} className="rounded-[24px] border border-slate-200 bg-white p-5"><Cpu size={20} className="text-blue-600"/><h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></div>)}</div></div><div className="lg:pt-24"><div className="rounded-[36px] bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,.10)]"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Private inference</p><p className="mt-2 text-2xl font-semibold">Controlled infrastructure</p></div><Server className="text-blue-600"/></div><div className="mt-8 rounded-[26px] bg-slate-950 p-5 text-white"><div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-white/20"/><span className="h-2.5 w-2.5 rounded-full bg-white/20"/><span className="h-2.5 w-2.5 rounded-full bg-white/20"/></div><div className="mt-7 space-y-3 font-mono text-xs"><p className="text-emerald-300">$ route --policy private</p><p className="text-white/45">model: local/qwen</p><p className="text-white/45">knowledge: internal/vector-store</p><p className="text-white/45">external_data: blocked</p><p className="text-white/45">tool_scope: approved-only</p><p className="text-blue-300">✓ workload stays in private zone</p></div></div></div></div></div></div></section>

      <section className="bg-slate-950 py-24 text-white lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">{t.hybridEyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-[.96] tracking-[-.055em] sm:text-6xl">{t.hybridTitle}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">{t.hybridLead}</p></div><RoutingVisual routes={t.routes}/></div></section>

      <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.stackEyebrow}</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{t.stackTitle}</h2><div className="mt-14 grid gap-px overflow-hidden rounded-[32px] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">{t.stack.map(([title,items],index)=><div key={title} className="min-h-56 bg-white p-7"><span className="text-xs font-semibold text-black/25">0{index+1}</span><h3 className="mt-9 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{items}</p></div>)}</div></div></section>

      <section className="overflow-hidden bg-gradient-to-br from-violet-700 via-fuchsia-700 to-blue-700 py-24 text-white lg:py-32"><div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-white/55">{t.graceEyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-[.96] tracking-[-.055em] sm:text-6xl">{t.graceTitle}</h2><p className="mt-6 text-lg leading-8 text-white/70">{t.graceLead}</p><a href="https://meet-grace.com" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">{t.graceCta}<ArrowUpRight size={16}/></a></div><div className="rounded-[36px] border border-white/15 bg-slate-950/35 p-6 shadow-2xl backdrop-blur"><div className="grid min-h-[410px] grid-cols-[105px_1fr] overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/70"><div className="border-r border-white/10 p-4"><div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10"><Sparkles size={17}/></div><div className="mt-9 space-y-4">{[1,2,3,4,5].map(i=><div key={i} className="h-2 rounded-full bg-white/10"/>)}</div></div><div className="p-6"><div className="flex items-center justify-between"><div><div className="h-3 w-28 rounded-full bg-white/25"/><div className="mt-2 h-2 w-20 rounded-full bg-white/10"/></div><span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">Agent ready</span></div><div className="mt-8 space-y-4"><div className="w-[78%] rounded-2xl border border-white/10 bg-white/[.06] p-5"><div className="h-2 w-3/4 rounded bg-white/25"/><div className="mt-3 h-2 w-1/2 rounded bg-white/10"/></div><div className="ml-auto w-[68%] rounded-2xl bg-violet-400/20 p-5"><div className="h-2 w-2/3 rounded bg-white/30"/></div></div><div className="mt-8 flex flex-wrap gap-2">{t.gracePoints.map(point=><span key={point} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-xs text-white/55">{point}</span>)}</div></div></div></div></div></section>

      <section className="bg-[#f6f8fb] py-24 lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><p className="pt-3 text-xs font-semibold uppercase tracking-[.2em] text-blue-600">{t.approachEyebrow}</p><div><h2 className="text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{t.approachTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{t.approachLead}</p></div></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{t.roles.map(([title,description],index)=>{const Icon=roleIcons[index];return <article key={title} className="rounded-[26px] border border-slate-200 bg-white p-6"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-blue-600"><Icon size={19}/></span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p></article>})}</div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col gap-8 rounded-[34px] bg-slate-950 p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-300">Vantura AI Lab</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.045em] sm:text-4xl">{t.cta}</h2></div><a href={contact} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">{t.primary}<ArrowRight size={16}/></a></div><Link href={`${prefix}/`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600">← {t.back}</Link></div></section>
    </main>
  </div>
}
