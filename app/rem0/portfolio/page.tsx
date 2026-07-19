import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  Smartphone,
  Workflow,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rem0 | App & Software Developer',
  description:
    'Experienced German app and software developer building mobile apps, web products, AI integrations and automations.',
}

const capabilities = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    text: 'Cross-platform products with React Native and Expo, from early MVP to production release.',
  },
  {
    icon: Globe2,
    title: 'Web Products',
    text: 'Fast, responsive applications and websites built with React, Next.js and modern APIs.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integrations',
    text: 'AI assistants, agents, model orchestration, tool calling and intelligent workflows.',
  },
  {
    icon: Workflow,
    title: 'Data & Automation',
    text: 'Dashboards, business tools, API integrations and automated operational processes.',
  },
]

const projects = [
  {
    title: 'Grace',
    label: 'Flagship Product',
    description:
      'A multi-platform AI workspace connecting models, tools and specialist agents in structured workflows. Built around orchestration, privacy, local and cloud models, and collaborative execution.',
    tags: ['React Native', 'Desktop', 'AI Agents', 'LLM APIs', 'Tool Calling'],
    featured: true,
  },
  {
    title: 'Enough',
    label: 'Mobile Product',
    description:
      'A consumer-focused mobile application designed and developed as a complete product experience, including architecture, polished UI flows and backend integration.',
    tags: ['React Native', 'Expo', 'Supabase', 'Product Design'],
  },
  {
    title: 'HotnCold',
    label: 'App & Platform',
    description:
      'A mobile product with supporting web presence, backend services and iterative feature development, covering the path from concept to usable software.',
    tags: ['Mobile App', 'APIs', 'Supabase', 'Web'],
  },
  {
    title: 'Reporting & Decision Tools',
    label: 'Business Software',
    description:
      'Custom dashboards, calculation tools and management applications that turn complex datasets into clear operational decisions and repeatable workflows.',
    tags: ['Power BI', 'Excel', 'Data Integration', 'Business Logic'],
  },
  {
    title: 'Websites & One-Pagers',
    label: 'Web Development',
    description:
      'Modern, conversion-focused websites for local businesses, products and service companies, designed, built and deployed as complete ready-to-use solutions.',
    tags: ['Next.js', 'Responsive Design', 'Deployment', 'SEO'],
  },
]

export default function Rem0PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#070711] text-[#f4f4ff]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070711]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/rem0/portfolio" className="text-xl font-black tracking-[-0.04em]">
            rem<span className="text-[#ff8b54]">0</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-white/60">
            <a href="#work" className="hidden hover:text-white sm:block">Work</a>
            <a href="#skills" className="hidden hover:text-white sm:block">Skills</a>
            <a
              href="mailto:jk@vantura-studios.com?subject=Project%20inquiry%20for%20Rem0"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="overflow-hidden border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">
                <MapPin size={14} /> German App & Software Developer
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                I build digital products that <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">actually ship.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
                Experienced developer focused on mobile apps, modern web products, AI integrations and workflow automation. Available for freelance projects, technical partnerships and long-term product collaboration.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#070711]">
                  View selected work <ArrowRight size={17} />
                </a>
                <a href="mailto:jk@vantura-studios.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  Start a conversation <Mail size={16} />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" />
                Open to selected remote projects and long-term collaborations
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 shadow-2xl shadow-black/30">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-sky-400 via-violet-400 to-orange-400 text-2xl font-black">R0</div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">Rem0</h2>
              <p className="mt-3 leading-7 text-white/60">
                Independent app and software developer based near Hamburg, Germany. I combine product thinking with hands-on implementation and stay involved beyond the first release.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ['Mobile & Web', 'Product development'],
                  ['AI & Automation', 'Practical integrations'],
                  ['Germany', 'CET / CEST'],
                  ['Long-term', 'Reliable collaboration'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-xs text-white/45">{text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">What I do</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From rough idea to working product.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/55">
            I help founders, teams and businesses turn ideas into reliable software, including planning, architecture, implementation, deployment and continuous improvement.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6">
                <Icon className="text-sky-400" size={24} />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Products, platforms and prototypes.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/55">
              Some client work cannot be shown publicly due to confidentiality. The projects below represent the type and scope of products I build.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7 ${project.featured ? 'md:col-span-2' : ''}`}
                >
                  <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-200">
                    {project.label}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-3xl leading-7 text-white/55">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">How I work</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Fast execution without losing the bigger picture.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              [Code2, '01', 'Understand', 'Clarify the real problem, users, priorities and constraints before unnecessary complexity enters the project.'],
              [Rocket, '02', 'Build & Validate', 'Create a usable version quickly, test the core assumptions and improve based on real feedback.'],
              [Layers3, '03', 'Stay & Improve', 'Support the product beyond launch with maintenance, new features and long-term technical ownership.'],
            ].map(([Icon, number, title, text]) => {
              const StepIcon = Icon as typeof Code2
              return (
                <article key={String(number)} className="border-t border-white/15 pt-6">
                  <StepIcon size={22} className="text-sky-400" />
                  <p className="mt-5 text-sm font-semibold text-sky-400">{String(number)}</p>
                  <h3 className="mt-2 text-xl font-semibold">{String(title)}</h3>
                  <p className="mt-3 leading-7 text-white/50">{String(text)}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="rounded-[30px] border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-violet-400/10 to-orange-400/10 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Have an app, product or idea in mind?</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">
                  Small initial budgets are not automatically a deal-breaker when the project, people and long-term potential make sense.
                </p>
              </div>
              <a href="mailto:jk@vantura-studios.com?subject=Project%20inquiry%20for%20Rem0" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#070711]">
                Email me <Mail size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/40 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row">
          <span>© 2026 Rem0 · A Vantura Studios portfolio</span>
          <div className="flex gap-5">
            <a href="https://github.com/rem0ulade" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Github size={15} /> GitHub
            </a>
            <Link href="/" className="hover:text-white">Vantura Studios</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
