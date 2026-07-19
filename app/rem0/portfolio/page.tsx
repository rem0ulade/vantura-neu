import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Github, Mail, MapPin } from 'lucide-react'
import PortfolioEffects from './PortfolioEffects'

export const metadata: Metadata = {
  title: 'Jonathan Kokalj | App & Software Developer',
  description:
    'Jonathan Kokalj builds mobile apps, web products, AI integrations, automations and data tools for founders, teams and businesses.',
}

const projects = [
  {
    number: '01',
    title: 'Grace',
    type: 'AI Workspace & Agent Orchestration',
    description:
      'A multi-platform AI workspace connecting models, tools and specialist agents in structured workflows. Built around privacy, local and cloud models, tool calling and collaborative execution.',
    highlight:
      'A complex product architecture designed to coordinate multiple specialised agents, tools and model providers inside one coherent workspace.',
    tags: ['React Native', 'Desktop', 'AI Agents', 'LLM APIs', 'Tool Calling'],
    accent: 'from-violet-500/30 via-fuchsia-500/10 to-transparent',
    href: 'https://meet-grace.com',
  },
  {
    number: '02',
    title: 'Mobile Products',
    type: 'Consumer Apps & MVPs',
    description:
      'Mobile products ranging from focused early-stage MVPs to more complete applications with authentication, backend services, polished user flows and deployment pipelines.',
    highlight:
      'Experience moving products from rough concept to testable release, then iterating based on real requirements and user feedback.',
    tags: ['React Native', 'Expo', 'Supabase', 'APIs', 'Product Design'],
    accent: 'from-sky-500/30 via-cyan-500/10 to-transparent',
  },
  {
    number: '03',
    title: 'Web Platforms',
    type: 'Web Apps, Portals & One-Pagers',
    description:
      'Responsive websites, internal tools, product pages and web applications for smaller businesses, founders and operational teams.',
    highlight:
      'Projects span fast one-page launches, custom interfaces and connected web products with real business logic behind them.',
    tags: ['Next.js', 'React', 'Responsive UI', 'SEO', 'Deployment'],
    accent: 'from-orange-500/30 via-amber-500/10 to-transparent',
  },
  {
    number: '04',
    title: 'Reporting & Decision Systems',
    type: 'Business Software & Data Products',
    description:
      'Custom dashboards, calculation tools, reporting systems and management applications that turn complex datasets into clear operational decisions.',
    highlight:
      'Delivered across smaller workflow improvements and larger, business-critical reporting and calculation initiatives.',
    tags: ['Power BI', 'Excel', 'Data Integration', 'Business Logic', 'Automation'],
    accent: 'from-emerald-500/30 via-teal-500/10 to-transparent',
  },
  {
    number: '05',
    title: 'AI & Automation Projects',
    type: 'Integrations, Agents & Workflows',
    description:
      'AI-assisted workflows, model integrations, API-connected automations and internal tools that reduce manual work and connect fragmented processes.',
    highlight:
      'Built for both narrow operational use cases and broader product concepts where AI becomes part of the actual workflow.',
    tags: ['OpenAI', 'Claude', 'n8n', 'Make', 'REST APIs', 'Local Models'],
    accent: 'from-lime-500/25 via-green-500/10 to-transparent',
  },
]

const skills = [
  'React Native', 'Expo / EAS', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Supabase',
  'Python', 'REST APIs', 'GraphQL', 'OpenAI', 'Claude', 'Local LLMs', 'AI Agents', 'n8n',
  'Make', 'Docker', 'CI/CD', 'Power BI', 'Tableau', 'Excel', 'Salesforce', 'Jira',
  'Product Strategy', 'Project Management', 'Data Integration',
]

const projectRange = [
  ['Early-stage products', 'From first concept and technical direction to a usable MVP that can be tested, shown and improved.'],
  ['Small business solutions', 'Focused websites, automations and tools that solve a clear problem without unnecessary complexity.'],
  ['Internal business systems', 'Reporting, calculation and workflow tools designed around real processes, stakeholders and data.'],
  ['Longer product builds', 'Applications and platforms that require architecture, iteration, integrations and continued technical ownership.'],
]

export default function JonathanPortfolioPage() {
  const marqueeSkills = [...skills.slice(0, 9), ...skills.slice(0, 9)]

  return (
    <div className="portfolio-page min-h-screen bg-[#050505] text-white selection:bg-lime-300 selection:text-black">
      <PortfolioEffects />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/rem0/portfolio" className="text-sm font-semibold uppercase tracking-[0.18em]">
            Jonathan Kokalj
          </Link>
          <div className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.14em] text-white/55">
            <a href="#work" className="hidden transition hover:text-white sm:block">Work</a>
            <a href="#approach" className="hidden transition hover:text-white sm:block">Approach</a>
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
            <div data-reveal className="mb-8 flex flex-col justify-between gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,.8)]" /> Available for selected projects
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/45">
                <MapPin size={14} /> Germany · Remote worldwide
              </div>
            </div>

            <h1 data-reveal style={{ '--reveal-delay': '100ms' } as React.CSSProperties} className="max-w-[1250px] text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              Products
              <span className="block text-white/25">Systems</span>
              <span className="block">That Ship</span>
            </h1>

            <div data-reveal style={{ '--reveal-delay': '220ms' } as React.CSSProperties} className="mt-10 grid gap-8 border-t border-white/15 pt-7 lg:grid-cols-[1fr_1.1fr]">
              <p className="max-w-sm text-sm uppercase leading-6 tracking-[0.12em] text-white/40">
                Mobile apps · Web platforms · AI agents · Automations · Data tools
              </p>
              <p className="max-w-2xl text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
                I have worked across both small, focused builds and larger, more complex digital products — from rapid MVPs and one-page launches to connected applications, AI workflows and business-critical tools.
              </p>
            </div>
          </div>
        </section>

        <section id="approach" className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div data-reveal className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Project experience</p>
              <p className="mt-5 text-sm uppercase leading-6 tracking-[0.12em] text-white/35">Small launches · Complex systems · Long-term builds</p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Different project sizes. The same focus on useful, dependable delivery.
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-lg leading-8 text-white/60">
                  Some projects need a fast, pragmatic release. Others require careful architecture, multiple integrations, complex data and ongoing development. I am comfortable working at both ends of that spectrum.
                </p>
                <p className="text-lg leading-8 text-white/60">
                  I can join at idea stage, take over an unfinished product, build a focused solution from scratch or stay involved as a long-term technical partner after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Selected project areas</p>
                <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.055em] sm:text-7xl lg:text-8xl">Built to ship.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/45">
                A large part of my client and business work is confidential. The areas below show the range, scale and technical depth of the products I have worked on.
              </p>
            </div>

            <div>
              {projects.map((project, index) => (
                <article
                  key={project.number}
                  data-reveal
                  style={{ '--reveal-delay': `${Math.min(index * 80, 240)}ms` } as React.CSSProperties}
                  className="group grid gap-8 border-b border-white/15 py-12 lg:grid-cols-[130px_.8fr_1.2fr] lg:py-16"
                >
                  <div className="text-sm font-semibold text-white/25">{project.number}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">{project.type}</p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer" className="transition hover:text-lime-300">
                          {project.title}
                        </a>
                      ) : project.title}
                    </h3>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-white/55">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div data-tilt data-cursor-target className={`project-tilt relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${project.accent} p-7 sm:p-9`}>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="absolute right-6 top-6 z-10 text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/60">
                        <ArrowUpRight size={30} />
                      </a>
                    ) : (
                      <div className="absolute right-6 top-6 text-white/20">
                        <ArrowUpRight size={30} />
                      </div>
                    )}
                    <p className="relative z-[1] max-w-2xl text-xl leading-8 text-white/80">{project.description}</p>
                    <div className="relative z-[1] mt-10 border-t border-white/15 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">Project experience</p>
                      <p className="mt-3 max-w-xl leading-7 text-white/60">{project.highlight}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[.7fr_1.3fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Range of work</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">From focused one-off builds to larger products with continued ownership.</h2>
            </div>
            <div className="grid md:grid-cols-2">
              {projectRange.map(([title, text], index) => (
                <article key={title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties} className="border-b border-white/15 py-8 md:border-r md:px-8 md:first:pl-0">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="arsenal" className="overflow-hidden border-y border-white/10 bg-lime-300 py-7 text-black">
          <div className="marquee-track text-[clamp(2.4rem,6vw,5.5rem)] font-black uppercase leading-none tracking-[-0.055em]">
            {marqueeSkills.map((skill, index) => (
              <span key={`${skill}-${index}`} className="mx-5 inline-block whitespace-nowrap">
                {skill} <span className="text-black/25">✦</span>
              </span>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">My arsenal</p>
              <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.055em] sm:text-7xl">Tools for complete delivery.</h2>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <div key={skill} data-reveal style={{ '--reveal-delay': `${Math.min(index * 35, 280)}ms` } as React.CSSProperties} className="border-b border-r border-white/15 p-5 text-sm font-medium uppercase tracking-[0.08em] text-white/65 transition hover:bg-white/[0.04] hover:text-lime-300 sm:p-6">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
          <div data-reveal className="mx-auto max-w-[1400px] overflow-hidden rounded-[34px] bg-lime-300 px-6 py-12 text-black sm:px-10 lg:px-14 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Have a project in mind?</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(3.4rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              Let&apos;s build something useful.
            </h2>
            <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/20 pt-7 lg:flex-row lg:items-end">
              <p className="max-w-2xl text-lg leading-8 text-black/65">
                Whether it is a small first release or a more ambitious product, I care about clear scope, fast progress and software that remains useful after launch.
              </p>
              <a href="mailto:jk@vantura-studios.com?subject=Project%20inquiry%20for%20Jonathan%20Kokalj" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:translate-x-1">
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
