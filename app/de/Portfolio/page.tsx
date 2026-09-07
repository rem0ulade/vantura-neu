import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react'
import PortfolioShowcaseEffects from '../../test/Portfolio/PortfolioShowcaseEffects'

export const metadata: Metadata = {
  title: 'Jonathan Kokalj | Portfolio · Vantura Studios',
  description: 'Ausgewählte Software-, Daten-, KI- und Produktprojekte von Jonathan Kokalj — Gründer von Vantura Studios.',
  alternates: { canonical: '/Portfolio/', languages: { en: '/Portfolio/', de: '/de/Portfolio/' } },
}

const proof = [
  { title: 'Enterprise-Erfahrung', text: 'Interne Software-, Reporting-, Kalkulations- und Entscheidungssysteme, entwickelt rund um reale Geschäftsprozesse.' },
  { title: 'Produktverantwortung', text: 'Von Konzept und Architektur über Umsetzung und Launch bis zu Iteration und laufender technischer Verantwortung.' },
  { title: 'Business + Engineering', text: 'Geschäftsprozesse, Daten, Produktdenken und hands-on Softwareentwicklung in einem Profil.' },
]

const projects = [
  {
    index: '01', label: 'Flagship-Produkt', title: 'Grace', subtitle: 'Persönlicher KI-Workspace & Agent-Orchestrierung',
    description: 'Ein plattformübergreifendes KI-Produkt, das Modelle, spezialisierte Agenten, Tools und Workflows in einem konsistenten Workspace koordiniert — mit lokaler und Cloud-Ausführung als zentralen Architekturprinzipien.',
    tags: ['AI Agents', 'React Native', 'Desktop', 'Tool Calling', 'Local LLMs'], href: 'https://meet-grace.com', icon: Bot,
    tone: 'bg-[#111318] text-white',
  },
  {
    index: '02', label: 'Enterprise / NDA', title: 'Entscheidung Systems', subtitle: 'Reporting-, Forecasting- & Kalkulationstools',
    description: 'Geschäftskritische interne Systeme für ein großes deutsches Medienunternehmen. Kundendaten, Oberflächen und Implementierungsdetails bleiben vertraulich; Verantwortungsbereiche und technischer Umfang können dennoch besprochen werden.',
    tags: ['Data', 'Business Logic', 'Reporting', 'Forecasting', 'Internal Tools'], href: 'https://vantura-studios.com/de/reporting/demo/', icon: BarChart3,
    tone: 'bg-[#eef4ff] text-slate-950',
  },
  {
    index: '03', label: 'Kundenprojekte', title: 'Digital Business Builds', subtitle: 'Websites, Tools & vernetzte Workflows',
    description: 'Ausgewählte Arbeiten für kleinere Unternehmen und operative Teams — von vertrauensbildenden Websites und Reporting-Konzepten bis zu vernetzten Tools für Vertrieb, Operations und tägliche Entscheidungen.',
    tags: ['Next.js', 'Web', 'Reporting', 'Automation', 'Product Design'], icon: Layers3,
    logos: [
      { src: '/customer-logos/weischer-cinema.svg', alt: 'Weischer' },
      { src: '/customer-logos/recruvia.svg', alt: 'Recruvia' },
      { src: '/customer-logos/froehlich-nord.svg', alt: 'Fröhlich-Nord' },
      { src: '/customer-logos/rgh-nord.svg', alt: 'RGH Nord' },
    ],
    tone: 'bg-[#fff7ed] text-slate-950',
  },
]

const enterpriseCapabilities = [
  'Management-Reporting & Dashboards', 'Forecasting & Abweichungsanalysen', 'Individuelle Kalkulationslogik', 'KPI- & Benchmark-Systeme',
  'Datenintegration & Transformationation', 'Interne Business-Anwendungen', 'Stakeholder-getriebene Iteration', 'Workflow-Automation',
]

const flow = [
  { number: '01', label: 'Quellen', icon: Database },
  { number: '02', label: 'Transformation', icon: Network },
  { number: '03', label: 'Business-Logik', icon: Code2 },
  { number: '04', label: 'Entscheidung', icon: BarChart3 },
]

const demos = [
  { title: 'Executive Reporting', body: 'Ein Management-Dashboard, das fragmentierte operative Daten in eine fokussierte Sicht auf Performance, Forecast, Abweichungen und Prioritäten übersetzt.', icon: BarChart3 },
  { title: 'Client Intelligence', body: 'Ein Scorecard-System für Account Health, Wachstumssignale, Priorisierung und Next-Best-Actions mit vollständig synthetischen Demodaten.', icon: Database },
  { title: 'Pricing Engine', body: 'Ein konfigurierbares Kalkulationsprodukt, das zeigt, wie komplexe Regeln, Benchmarks, Inputs und Business-Logik in eine klare Oberfläche übersetzt werden können.', icon: Braces },
]

const agentFlow = [
  { number: '01', label: 'Trigger', icon: Sparkles },
  { number: '02', label: 'Agent', icon: Bot },
  { number: '03', label: 'Tools', icon: Workflow },
  { number: '04', label: 'Freigabe', icon: LockKeyhole },
]

const lab = [
  { title: 'AI Agents', text: 'Spezialisierte Agenten, die planen, Tools aufrufen und mehrstufige Aufgaben mit klar definiertem Abschluss erledigen.' },
  { title: 'Agentic Workflows', text: 'Mehrere Agenten, koordiniert um einen Geschäftsprozess statt nur um ein einzelnes Chatfenster.' },
  { title: 'Tool Calling & MCP', text: 'APIs, Dateien, Browser und interne Systeme als Tools, die ein Agent tatsächlich nutzen kann.' },
  { title: 'Automation', text: 'n8n, geplante Jobs und ereignisgesteuerte Abläufe, die manuelle Übergaben ersetzen.' },
  { title: 'Local & Hybrid LLMs', text: 'Private Daten bleiben lokal. Frontier-Modelle nur dort, wo ihr Einsatz den Zugriff rechtfertigt.' },
  { title: 'Human Approval', text: 'Kritische Aktionen warten auf Freigabe. Das System bereitet die Arbeit vor; ein Mensch bestätigt den entscheidenden Schritt.' },
]

const labMarquee = ['AI Agents','Agentic Workflows','Automation','Tool Calling','MCP','Local LLMs','OpenAI','Claude','n8n','RAG','Hybrid Routing','Human Approval']

const skills = ['AI Agents','Agentic Workflows','Tool Calling','MCP','OpenAI','Claude','Local LLMs','n8n','RAG','Python','TypeScript','React Native','Expo','React','Next.js','Supabase','REST APIs','GraphQL','Docker','CI/CD','Power BI','Tableau','Excel','Salesforce','Datenintegration','Produktstrategie','Projektmanagement']

export default function PortfolioDEPage() {
  const marquee = [...labMarquee, ...labMarquee]

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-950 selection:bg-blue-600 selection:text-white">
      <PortfolioShowcaseEffects />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#f7f9fc]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/de/" className="text-sm font-semibold tracking-[-.03em] sm:text-base">Vantura Studios <span className="font-normal text-slate-400">/ Jonathan Kokalj</span></Link>
          <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[.14em] text-slate-500">
            <a href="#work" className="hidden transition hover:text-slate-950 sm:block">Arbeiten</a>
            <a href="#enterprise" className="hidden transition hover:text-slate-950 md:block">Enterprise</a>
            <a href="#lab" className="hidden transition hover:text-slate-950 lg:block">Lab</a>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-[10px] font-semibold tracking-normal"><Link href="/Portfolio/" className="rounded-full px-2.5 py-1.5 text-slate-500 transition hover:text-slate-950">EN</Link><Link href="/de/Portfolio/" className="rounded-full bg-slate-950 px-2.5 py-1.5 text-white">DE</Link></div><a href="https://github.com/rem0ulade" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-slate-950"><Github size={15}/> GitHub</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="portfolio-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(59,130,246,.15),transparent_28%),radial-gradient(circle_at_14%_75%,rgba(124,58,237,.09),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div data-reveal className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[.24em] text-blue-600">Vantura Studios / Portfolio</p>
              <p className="text-xs font-medium uppercase tracking-[.16em] text-slate-400">Software · Daten · KI · Produkt</p>
            </div>
            <div className="grid gap-10 pt-12 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
              <h1 data-reveal className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[.82] tracking-[-.075em]">Ich baue<span className="block text-slate-300">nützliche Systeme.</span></h1>
              <div data-reveal className="lg:pb-3">
                <p className="max-w-md text-xl leading-8 text-slate-600">Softwareentwickler und Gründer von Vantura Studios. Ich übersetze reale Business-Probleme in Produkte, interne Tools, Datensysteme und KI-Workflows.</p>
                <a href="mailto:jk@vantura-studios.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600">Projekt besprechen <ArrowUpRight size={16}/></a>
              </div>
            </div>
            <div className="mt-16 grid border-y border-slate-200 md:grid-cols-3">
              {proof.map((item) => <article key={item.title} data-reveal className="border-b border-slate-200 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><p className="text-sm font-semibold">{item.title}</p><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="work" className="bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="grid gap-8 border-b border-slate-200 pb-9 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-600">Ausgewählte Arbeiten</p>
              <div><h2 className="text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Substanz statt Logo-Wand.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">Öffentliche Produkte, wo es möglich ist, transparente NDA-Cases, wo es nötig ist, und gezielte Demos, wenn die technische Umsetzung wichtiger ist als ein Kundenname.</p></div>
            </div>
            <div className="mt-10 space-y-7">
              {projects.map((project) => {
                const Icon = project.icon
                const card = <div data-tilt className={`showcase-tilt relative overflow-hidden rounded-[34px] border border-black/5 ${project.tone} p-7 sm:p-10 lg:p-12`}>
                  <div className="relative z-10 grid min-h-[430px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
                    <div className="flex flex-col justify-between"><div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.18em] opacity-55">{project.index} / {project.label}</span><Icon size={25} className="opacity-45"/></div><div><p className="text-sm font-medium opacity-55">{project.subtitle}</p><h3 className="mt-3 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">{project.title}</h3></div></div>
                    <div className="flex flex-col justify-end"><p className="max-w-2xl text-xl leading-8 opacity-75 sm:text-2xl sm:leading-9">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag)=><span key={tag} className="rounded-full border border-current/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.1em] opacity-60">{tag}</span>)}</div>{project.logos && <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{project.logos.map((logo)=><div key={logo.src} className="flex h-20 items-center justify-center rounded-2xl border border-current/10 bg-white/75 p-4"><img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" /></div>)}</div>}{project.href && <div className="mt-9 inline-flex items-center gap-2 text-sm font-semibold">Produkt öffnen <ArrowUpRight size={16}/></div>}</div>
                  </div><div className="scan-line pointer-events-none absolute bottom-14 left-0 h-px w-full opacity-50"/>
                </div>
                return project.href ? <a key={project.title} data-reveal href={project.href} target="_blank" rel="noreferrer" className="block">{card}</a> : <div key={project.title} data-reveal>{card}</div>
              })}
            </div>
          </div>
        </section>

        <section id="enterprise" className="bg-[#0b0d12] px-5 py-20 text-white lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div><div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-blue-300"><LockKeyhole size={14}/> Vertrauliche Enterprise-Projekte</div><p className="mt-6 max-w-sm text-sm leading-7 text-white/45">Screenshots, Daten und Implementierungsdetails werden bewusst nicht veröffentlicht. Der Wert der Arbeit lässt sich trotzdem beschreiben, ohne vertrauliche Informationen offenzulegen.</p></div>
              <div><h2 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">Echte Business-Software gehört nicht immer in eine öffentliche Galerie.</h2><p className="mt-8 max-w-3xl text-xl leading-9 text-white/60">Ich habe interne Reporting-, Forecasting-, Kalkulations- und Entscheidungsunterstützungssysteme für ein großes deutsches Medienunternehmen entwickelt. Die Projekte verbinden komplexe Business-Logik, operative Daten und iterative Stakeholder-Anforderungen.</p></div>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {enterpriseCapabilities.map((item)=><div key={item} data-reveal className="bg-[#0b0d12] p-6"><div className="flex items-start gap-3"><Check size={17} className="mt-0.5 shrink-0 text-blue-300"/><p className="text-sm leading-6 text-white/70">{item}</p></div></div>)}
            </div>
            <div data-reveal className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-white/[.035] p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Wie ich an solche Systeme herangehe</p><h3 className="mt-4 text-4xl font-semibold tracking-[-.045em]">Daten → Logik → Entscheidung</h3><p className="mt-4 max-w-md leading-7 text-white/45">Die Oberfläche ist nur die letzte Schicht. Die eigentliche Arbeit besteht darin, Prozesse, Regeln und unvollkommene Daten in ein System zu übersetzen, das zuverlässig genug für den täglichen Einsatz ist.</p></div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-7 sm:p-10"><div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"/><div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">{flow.map((item)=>{const Icon=item.icon;return <div key={item.number} className="flow-node rounded-2xl border border-white/10 bg-[#11151d] p-4 text-center shadow-2xl"><Icon size={19} className="mx-auto text-blue-300"/><p className="mt-4 text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">{item.number}</p><p className="mt-1 text-xs font-medium text-white/75">{item.label}</p></div>})}</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="flex flex-col justify-between gap-7 border-b border-slate-200 pb-9 lg:flex-row lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-600">Nächste Beweisebene</p><h2 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Live-Demos.</h2></div><p className="max-w-xl text-lg leading-8 text-slate-500">Synthetische Daten, echte Interaktion. Diese Demo-Cases zeigen, welche Systeme ich bauen kann, ohne vertrauliches Kundenmaterial offenzulegen.</p></div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {demos.map((demo)=>{const Icon=demo.icon;return <article key={demo.title} data-reveal data-tilt className="showcase-tilt relative min-h-[410px] overflow-hidden rounded-[30px] border border-white bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,.07)]"><div className="flex h-full flex-col justify-between"><div className="flex items-start justify-between"><span className="text-[11px] font-semibold uppercase tracking-[.16em] text-blue-600">Interaktives Demo-Konzept</span><Icon size={22} className="text-slate-300"/></div><div><h3 className="text-4xl font-semibold tracking-[-.045em]">{demo.title}</h3><p className="mt-4 leading-7 text-slate-500">{demo.body}</p><div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300">Geplante Demo <ArrowDownRight size={16}/></div></div></div></article>})}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-blue-600 py-7 text-white"><div className="portfolio-marquee text-[clamp(2.5rem,6vw,5.8rem)] font-semibold uppercase leading-none tracking-[-.06em]">{marquee.map((skill,index)=><span key={`${skill}-${index}`} className="mx-5 whitespace-nowrap">{skill} <span className="text-white/30">✦</span></span>)}</div></section>

        <section id="lab" className="bg-[#111318] px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-300">KI · Agenten · Automation</p>
                <h2 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Agenten, die arbeiten. Automationen, die bleiben.</h2>
              </div>
              <p className="max-w-2xl text-xl leading-9 text-white/55">Diesen Bereich treibe ich besonders stark voran: agentische Systeme rund um reale Abläufe — Tool-Calling-Agenten, lokale und Cloud-Modelle sowie Automationen, die manuelle Übergaben ersetzen, statt nur daneben zu existieren.</p>
            </div>
            <div data-reveal className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-white/[.035] p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">Wie der Agent arbeitet</p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-[-.045em]">Trigger → Agent → Tools → Freigabe</h3>
                  <p className="mt-4 max-w-md leading-7 text-white/45">Das Chatfenster ist nicht das Produkt. Das Produkt ist ein kontrollierter Ablauf: Etwas passiert, ein Agent entscheidet, Tools führen aus und ein Mensch behält den kritischen Schritt in der Hand.</p>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-7 sm:p-10">
                  <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"/>
                  <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {agentFlow.map((item) => {
                      const Icon = item.icon
                      return <div key={item.number} className="flow-node rounded-2xl border border-white/10 bg-[#11151d] p-4 text-center shadow-2xl"><Icon size={19} className="mx-auto text-blue-300"/><p className="mt-4 text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">{item.number}</p><p className="mt-1 text-xs font-medium text-white/75">{item.label}</p></div>
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {lab.map((item, index) => (
                <div key={item.title} data-reveal className="group min-h-[230px] border-b border-r border-white/10 p-6 transition hover:bg-white/[.04]">
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-white/25">0{index + 1}</span>
                    <Sparkles size={16} className="text-blue-300 opacity-0 transition group-hover:opacity-100"/>
                  </div>
                  <p className="mt-10 text-2xl font-medium tracking-[-.03em] text-white/90">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/45">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.65fr_1.35fr]"><div data-reveal><p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-600">Arsenal</p><h2 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Breite als Prinzip.</h2><p className="mt-6 max-w-md leading-7 text-slate-500">Die wertvolle Kombination ist nicht ein einzelnes Framework. Es geht darum, aus einem unklaren Prozess Agenten, Automationen, Daten und eine Oberfläche zu machen, die Menschen tatsächlich nutzen.</p></div><div className="grid grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-3">{skills.map((skill)=><div key={skill} data-reveal className="border-b border-r border-slate-200 px-4 py-5 text-sm font-medium text-slate-600 transition hover:bg-[#f7f9fc] hover:text-blue-600 sm:px-5">{skill}</div>)}</div></div>
        </section>

        <section className="bg-[#f7f9fc] px-5 py-24 lg:px-8 lg:py-36">
          <div data-reveal className="mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-blue-600 p-8 text-white sm:p-12 lg:p-16"><div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-100">Ein sinnvolles Problem zu lösen?</p><h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-7xl">Machen wir daraus einen Agenten, eine Automation oder ein System, das Menschen tatsächlich nutzen.</h2></div><div className="lg:text-right"><a href="mailto:jk@vantura-studios.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5"><Mail size={16}/> jk@vantura-studios.com</a><p className="mt-5 text-sm leading-6 text-blue-100">Vantura Studios · AI Agents · Automation · Data</p></div></div></div>
        </section>
      </main>
    </div>
  )
}
