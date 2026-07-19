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
  title: 'Ich baue dein Projekt | Vantura Studios',
  description:
    'Von der Idee bis zum fertigen Produkt: Apps, Web-Apps, interne Tools, Automationen und MVPs – konzipiert, entwickelt und veröffentlicht von Vantura Studios.',
}

const services = [
  {
    icon: Smartphone,
    title: 'Apps & Web-Apps',
    text: 'Produkte für Mobile und Web – responsiv, schnell und auf echte Nutzung ausgelegt.',
  },
  {
    icon: Blocks,
    title: 'MVPs & Prototypen',
    text: 'Eine Idee wird zu einer testbaren ersten Version, ohne monatelange Vorarbeit.',
  },
  {
    icon: Workflow,
    title: 'Automationen',
    text: 'Wiederkehrende Abläufe, Schnittstellen und KI-Workflows, die manuelle Arbeit reduzieren.',
  },
  {
    icon: Gauge,
    title: 'Interne Tools',
    text: 'Dashboards, Kalkulatoren, Portale und operative Werkzeuge, die exakt zum Prozess passen.',
  },
  {
    icon: LifeBuoy,
    title: 'Projekt-Rettung',
    text: 'Halbfertige, festgefahrene oder instabile Projekte analysieren, ordnen und fertigstellen.',
  },
  {
    icon: Bot,
    title: 'KI-Features',
    text: 'Sinnvolle KI-Funktionen, Agenten und lokale Modelle direkt in bestehende Produkte integrieren.',
  },
]

const steps = [
  ['01', 'Verstehen', 'Wir klären Ziel, Nutzer, Ausgangslage und was die erste gute Version wirklich können muss.'],
  ['02', 'Strukturieren', 'Du bekommst einen klaren Umfang, eine technische Richtung und priorisierte nächste Schritte.'],
  ['03', 'Bauen', 'Ich entwickle in kurzen Etappen und zeige früh sichtbare, nutzbare Ergebnisse.'],
  ['04', 'Veröffentlichen', 'Deployment, technische Einrichtung, Übergabe und eine saubere Grundlage für den Betrieb.'],
]

const principles = [
  'Direkter Kontakt mit dem Entwickler statt Agentur-Stille',
  'Frühe Prototypen statt monatelanger Konzeptphasen',
  'Klare Prioritäten und transparente Entscheidungen',
  'Bestehende Systeme werden genutzt, wenn das sinnvoller ist',
  'Datenschutz und lokale KI-Lösungen werden von Anfang an mitgedacht',
  'Nach dem Launch bleibt das Projekt verständlich und erweiterbar',
]

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="border-b border-line bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="text-[17px] font-semibold tracking-tight">
            Vantura Studios
          </Link>
          <div className="flex items-center gap-5">
            <a href="#leistungen" className="hidden text-sm font-medium text-muted hover:text-ink sm:block">
              Leistungen
            </a>
            <a href="#prozess" className="hidden text-sm font-medium text-muted hover:text-ink sm:block">
              Prozess
            </a>
            <a
              href="mailto:hello@vantura-studios.com?subject=Projektanfrage"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-navy"
            >
              Projekt anfragen
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="overflow-hidden border-b border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <Code2 size={14} /> Produktentwicklung mit Vantura
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">
                Du hast die Idee. Ich baue dein Projekt.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Apps, Web-Apps, interne Tools, Automationen und MVPs – von der ersten Struktur bis zum fertigen, nutzbaren Produkt.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@vantura-studios.com?subject=Projektidee besprechen"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Idee besprechen <ArrowRight size={17} />
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-stone-50"
                >
                  Was ich baue
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
                      <p className="text-xs text-white/50">01 · Produkt</p>
                      <p className="mt-1 font-semibold">MVP & Nutzerfluss</p>
                    </div>
                    <div className="ml-8 rounded-2xl bg-white p-4 text-ink">
                      <p className="text-xs text-muted">02 · Entwicklung</p>
                      <p className="mt-1 font-semibold">App, Backend & Integrationen</p>
                    </div>
                    <div className="ml-16 rounded-2xl bg-white/10 p-4">
                      <p className="text-xs text-white/50">03 · Launch</p>
                      <p className="mt-1 font-semibold">Deployment & Übergabe</p>
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
                    <p className="text-xs text-muted">Ziel</p>
                    <p className="font-semibold">Schnell etwas Nutzbares schaffen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Was ich für dich baue</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Nicht nur Websites. Echte digitale Produkte.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Vom kleinen internen Werkzeug bis zum vollständigen Softwareprodukt. Der Umfang richtet sich nach dem Problem – nicht nach einem starren Agenturpaket.
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

        <section id="prozess" className="border-y border-line bg-ink text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">So entsteht dein Projekt</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Klarer Prozess. Frühe Ergebnisse.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Du sollst nicht wochenlang auf eine Präsentation warten. Wir arbeiten auf eine funktionierende Version hin, die du sehen, testen und verbessern kannst.
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Zusammenarbeit</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">Technisch stark. Persönlich unkompliziert.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Du arbeitest direkt mit mir. Kein aufgeblähtes Projektteam, keine Weitergabe durch mehrere Ebenen und kein Fachjargon ohne Nutzen.
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
              <h3 className="font-semibold">Neue Idee</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Aus einer groben Idee wird ein klar umrissenes und testbares Produkt.</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white p-6">
              <Layers3 className="mb-5" />
              <h3 className="font-semibold">Bestehendes Projekt</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Bestehender Code wird geprüft, stabilisiert, erweitert oder gezielt neu aufgebaut.</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white p-6">
              <ShieldCheck className="mb-5" />
              <h3 className="font-semibold">Sensible Daten</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Datenschutzfreundliche Architektur und lokale KI sind bei Bedarf Teil der Lösung.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Bereit, etwas zu bauen?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Erzähl mir, was dein Projekt können soll.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Auch eine unfertige Idee reicht. Ich helfe dir, daraus einen realistischen ersten Umfang und einen klaren nächsten Schritt zu machen.
            </p>
            <a
              href="mailto:hello@vantura-studios.com?subject=Ich möchte ein Projekt bauen"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
            >
              Projekt starten <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
