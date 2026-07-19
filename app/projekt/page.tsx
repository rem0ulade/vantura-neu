import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Blocks,
  Bot,
  Check,
  Code2,
  Gauge,
  Layers3,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'I Build Your Project | Vantura Studios',
  description:
    'From the first idea to a finished product: apps, web apps, internal tools, automations and MVPs — designed, developed and launched by Vantura Studios.',
}

const services = [
  {
    icon: Smartphone,
    title: 'Apps & Web Apps',
    text: 'Products for mobile and web — responsive, fast and designed for real-world use.',
  },
  {
    icon: Blocks,
    title: 'MVPs & Prototypes',
    text: 'Turn an idea into a testable first version without months of preparation.',
  },
  {
    icon: Workflow,
    title: 'Automations',
    text: 'Recurring workflows, integrations and AI processes that reduce manual work.',
  },
  {
    icon: Gauge,
    title: 'Internal Tools',
    text: 'Dashboards, calculators, portals and operational tools built around your exact process.',
  },
  {
    icon: LifeBuoy,
    title: 'Project Rescue',
    text: 'Analyse, stabilise and finish incomplete, stalled or unreliable software projects.',
  },
  {
    icon: Bot,
    title: 'AI Features',
    text: 'Integrate useful AI features, agents and local models directly into existing products.',
  },
]

const steps = [
  ['01', 'Understand', 'We clarify the goal, users, current situation and what the first strong version truly needs.'],
  ['02', 'Structure', 'You receive a clear scope, technical direction and prioritised next steps.'],
  ['03', 'Build', 'I develop in short iterations and show visible, usable results early.'],
  ['04', 'Launch', 'Deployment, technical setup, handover and a clean foundation for ongoing operation.'],
]

const principles = [
  'Direct contact with the developer instead of agency silence',
  'Early prototypes instead of months of concept work',
  'Clear priorities and transparent decisions',
  'Existing systems are reused whenever that is the smarter option',
  'Privacy and local AI solutions are considered from the beginning',
  'After launch, the project remains understandable and extendable',
]

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white text-ink" lang="en">
      <header className="border-b border-line bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="text-[17px] font-semibold tracking-tight">
            Vantura Studios
          </Link>
          <div className="flex items-center gap-5">
            <a href="#services" className="hidden text-sm font-medium text-muted hover:text-ink sm:block">
              Services
            </a>
            <a href="#process" className="hidden text-sm font-medium text-muted hover:text-ink sm:block">
              Process
            </a>
            <a
              href="mailto:hello@vantura-studios.com?subject=Project enquiry"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-navy"
            >
              Start a project
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="overflow-hidden border-b border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <Code2 size={14} /> Product development with Vantura
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">
                You have the idea. I build the product.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Apps, web apps, internal tools, automations and MVPs — from the first structure to a finished, usable product.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@vantura-studios.com?subject=Discuss a project idea"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Discuss your idea <ArrowRight size={17} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-stone-50"
                >
                  What I build
                </a>
              </div>
            </div>

            <div className="relative min-h-[430px]">
              <div className="absolute inset-x-4 top-8 rounded-[32px] border border-white/80 bg-white p-4 shadow-2xl shadow-slate-300/50">
                <div className="rounded-[24px] bg-ink p-7 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    <span>Vantura Build System</span><span>Live</span>
                  </div>
                  <div className="mt-10 grid gap-3">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/50">01 · Product</p>
                      <p className="mt-1 font-semibold">MVP & user flow</p>
                    </div>
                    <div className="ml-8 rounded-2xl bg-white p-4 text-ink">
                      <p className="text-xs text-muted">02 · Development</p>
                      <p className="mt-1 font-semibold">App, backend & integrations</p>
                    </div>
                    <div className="ml-16 rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/50">03 · Launch</p>
                      <p className="mt-1 font-semibold">Deployment & handover</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 rounded-2xl border border-line bg-white px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-900">
                    <Check size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-muted">Goal</p>
                    <p className="font-semibold">Create something useful, quickly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">What I build for you</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Not just websites. Real digital products.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              From a small internal tool to a complete software product. The scope follows the problem — not a rigid agency package.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[26px] border border-line bg-white p-7 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-paper text-ink">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-line bg-ink text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">How your project is built</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Clear process. Early results.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  You should not wait weeks for a presentation. We work towards a functioning version you can see, test and improve.
                </p>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {steps.map(([number, title, text]) => (
                  <div key={number} className="grid gap-3 py-6 sm:grid-cols-[56px_150px_1fr] sm:items-start">
                    <p className="text-sm font-semibold text-white/35">{number}</p>
                    <p className="font-semibold">{title}</p>
                    <p className="leading-7 text-white/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Collaboration</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">Technically strong. Easy to work with.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                You work directly with me. No oversized project team, no hand-offs through multiple layers and no jargon without value.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="flex gap-3 rounded-2xl border border-line bg-paper p-5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-white">
                    <Check size={14} />
                  </span>
                  <p className="font-medium leading-6">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:grid-cols-3 lg:px-8">
            <div className="rounded-[24px] border border-line bg-white p-6">
              <Rocket className="mb-5" />
              <h3 className="font-semibold">New idea</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Turn a rough idea into a clearly scoped, testable product.</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white p-6">
              <Layers3 className="mb-5" />
              <h3 className="font-semibold">Existing project</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Review, stabilise, extend or selectively rebuild an existing codebase.</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white p-6">
              <ShieldCheck className="mb-5" />
              <h3 className="font-semibold">Sensitive data</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Privacy-friendly architecture and local AI can be part of the solution.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Ready to build something?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Tell me what your project should do.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              An unfinished idea is enough. I will help turn it into a realistic first scope and a clear next step.
            </p>
            <a
              href="mailto:hello@vantura-studios.com?subject=I want to build a project"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
            >
              Start your project <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
