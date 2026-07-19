import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Github, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jonathan Kokalj | App & Software Developer',
  description:
    'Jonathan Kokalj is an experienced German app and software developer building mobile apps, web products, AI integrations and automations.',
}

const projects = [
  {
    number: '01',
    title: 'Grace',
    type: 'AI Workspace & Agent Orchestration',
    description:
      'A multi-platform AI workspace connecting models, tools and specialist agents in structured workflows. Built around privacy, local and cloud models, tool calling and collaborative execution.',
    highlight:
      'A product architecture designed to coordinate multiple specialised AI agents instead of treating every task as a single chat.',
    tags: ['React Native', 'Desktop', 'AI Agents', 'LLM APIs', 'Tool Calling'],
    accent: 'from-violet-500/30 via-fuchsia-500/10 to-transparent',
  },
  {
    number: '02',
    title: 'Enough',
    type: 'Consumer Mobile Product',
    description:
      'A complete mobile product covering application architecture, polished UI flows, backend integration and iterative product development.',
    highlight:
      'Designed as a real product experience rather than a collection of disconnected screens.',
    tags: ['React Native', 'Expo', 'Supabase', 'Product Design'],
    accent: 'from-sky-500/30 via-cyan-500/10 to-transparent',
  },
  {
    number: '03',
    title: 'HotnCold',
    type: 'App & Supporting Platform',
    description:
      'A mobile application with supporting web presence, backend services and continuous feature development from concept to usable software.',
    highlight:
      'End-to-end ownership across mobile, backend and product iteration.',
    tags: ['Mobile App', 'APIs', 'Supabase', 'Web'],
    accent: 'from-orange-500/30 via-amber-500/10 to-transparent',
  },
  {
    number: '04',
    title: 'Reporting & Decision Tools',
    type: 'Business Software',
    description:
      'Custom dashboards, calculation tools and management applications that turn complex datasets into clear operational decisions.',
    highlight:
      'Business logic, reporting and data integration translated into software people can actually use.',
    tags: ['Power BI', 'Excel', 'Data Integration', 'Business Logic'],
    accent: 'from-emerald-500/30 via-teal-500/10 to-transparent',
  },
]

const skills = [
  'React Native', 'Expo / EAS', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Supabase',
  'Python', 'REST APIs', 'GraphQL', 'OpenAI', 'Claude', 'Local LLMs', 'AI Agents', 'n8n',
  'Make', 'Docker', 'CI/CD', 'Power BI', 'Tableau', 'Excel', 'Salesforce', 'Jira',
  'Product Strategy', 'Project Management', 'Data Integration',
]

const experience = [
  ['Present', 'Freelance App & Software Developer', 'Vantura Studios', 'Apps, websites, AI products, software solutions, technical consulting and product delivery.'],
  ['2026', 'Senior Manager Strategic Investment', 'Weischer.Cinema GmbH', 'Commercial strategy, controlling, market analysis, budgets and KPI implementation.'],
  ['Before', 'Senior Deal & Inventory Manager', 'Publicis Media GmbH', 'Budget and contract management, pricing analysis, negotiations and process optimisation.'],
  ['Earlier', 'Client Campaign Manager', 'RMS Radio Marketing Services', 'Campaign management, client work and Salesforce implementation leadership.'],
]

const certificates = [
  'Financial Analysis',
  'International Business Management',
  'Economics for Business Leaders',
  'Excel for Investment Professionals',
  'Strategic Negotiations',
]

export default function JonathanPortfolioPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-lime-300 selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/rem0/portfolio" className="text-sm font-semibold uppercase tracking-[0.18em]">
            Jonathan Kokalj
          </Link>
          <div className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.14em] text-white/55">
            <a href="#work" className="hidden transition hover:text-white sm:block">Work</a>
            <a href="#about" className="hidden transition hover:text-white sm:block">About</a>
            <a href="#arsenal" className="hidden transition hover:text-white md:block">Arsenal</a>
            <a href="https://github.com/rem0ulade" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
              <Github size={15} /> GitHub
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(132,204,22,.13),transparent_28%),radial-gradient(circle_at_15%_70%,rgba(59,130,246,.12),transparent_28%)]" />
          <div className="relative mx-auto w-full max-w-[1400px]">
            <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,.8)]" /> Available for selected projects
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/45">
                <MapPin size={14} /> Germany · Remote worldwide
              </div>
            </div>

            <h1 className="max-w-[1250px] text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              Full-Stack
              <span className="block text-white/25">Product</span>
              <span className="block">Developer</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-white/15 pt-7 lg:grid-cols-[1fr_1.1fr]">
              <p className="max-w-sm text-sm uppercase leading-6 tracking-[0.12em] text-white/40">
                Mobile apps · Web products · AI agents · Automations · Data tools
              </p>
              <p className="max-w-2xl text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
                I turn complex ideas into useful software — combining product thinking, technical execution and more than ten years of digital-industry experience.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Core experience</p>
              <p className="mt-5 text-sm uppercase leading-6 tracking-[0.12em] text-white/35">Developer · Consultant · Product thinker</p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                I blend code, business logic and product judgment to build software that solves real problems.
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-lg leading-8 text-white/60">
                  My background spans app development, analytics, commercial strategy, negotiation and project leadership. That helps me understand not only how to build a product, but why it should exist and how it creates value.
                </p>
                <p className="text-lg leading-8 text-white/60">
                  I am comfortable joining at idea stage, rescuing unfinished builds, creating MVPs quickly or staying involved as a long-term technical partner after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Selected work</p>
                <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.055em] sm:text-7xl lg:text-8xl">Built to ship.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/45">
                Some client work remains confidential. These projects represent the products, systems and technical challenges I work on.
              </p>
            </div>

            <div>
              {projects.map((project) => (
                <article key={project.number} className="group grid gap-8 border-b border-white/15 py-12 lg:grid-cols-[130px_.8fr_1.2fr] lg:py-16">
                  <div className="text-sm font-semibold text-white/25">{project.number}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">{project.type}</p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{project.title}</h3>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-white/55">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${project.accent} p-7 sm:p-9`}>
                    <div className="absolute right-6 top-6 text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/60">
                      <ArrowUpRight size={30} />
                    </div>
                    <p className="max-w-2xl text-xl leading-8 text-white/80">{project.description}</p>
                    <div className="mt-10 border-t border-white/15 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">Key highlight</p>
                      <p className="mt-3 max-w-xl leading-7 text-white/60">{project.highlight}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="arsenal" className="overflow-hidden border-y border-white/10 bg-lime-300 py-7 text-black">
          <div className="whitespace-nowrap text-[clamp(2.4rem,6vw,5.5rem)] font-black uppercase leading-none tracking-[-0.055em]">
            {skills.slice(0, 9).map((skill) => <span key={skill} className="mx-5 inline-block">{skill} <span className="text-black/25">✦</span></span>)}
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">My arsenal</p>
              <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.055em] sm:text-7xl">Tools for complete delivery.</h2>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="border-b border-r border-white/15 p-5 text-sm font-medium uppercase tracking-[0.08em] text-white/65 sm:p-6">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[.7fr_1.3fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Experience</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Technical delivery backed by commercial and strategic experience.</h2>
            </div>
            <div>
              {experience.map(([year, role, company, text]) => (
                <article key={`${role}-${company}`} className="grid gap-4 border-b border-white/15 py-8 md:grid-cols-[120px_.9fr_1.1fr]">
                  <p className="text-sm text-white/30">{year}</p>
                  <div>
                    <h3 className="text-xl font-semibold">{role}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.12em] text-lime-300">{company}</p>
                  </div>
                  <p className="leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Certificates</p>
              <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.055em] sm:text-7xl">Always learning.</h2>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {certificates.map((certificate, index) => (
                <div key={certificate} className="flex items-center justify-between gap-5 py-5">
                  <span className="text-lg text-white/75">{certificate}</span>
                  <span className="text-xs uppercase tracking-[0.14em] text-white/25">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[34px] bg-lime-300 px-6 py-12 text-black sm:px-10 lg:px-14 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Have a project in mind?</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(3.4rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              Let&apos;s build something useful.
            </h2>
            <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/20 pt-7 lg:flex-row lg:items-end">
              <p className="max-w-2xl text-lg leading-8 text-black/65">
                Small initial budgets are not automatically a deal-breaker when the product, people and long-term potential make sense.
              </p>
              <a href="mailto:jk@vantura-studios.com?subject=Project%20inquiry%20for%20Jonathan%20Kokalj" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em]">
                Start a conversation <Mail size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-xs uppercase tracking-[0.14em] text-white/35 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <span>© 2026 Jonathan Kokalj · Vantura Studios</span>
          <div className="flex gap-5">
            <a href="https://github.com/rem0ulade" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <Link href="/" className="hover:text-white">Vantura Studios</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
