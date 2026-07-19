import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ExternalLink, Globe2, LayoutTemplate, Rocket, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Websites | Vantura Studios',
  description:
    'Moderne Websites für kleine Unternehmen, Gastronomie und lokale Dienstleister – klar, mobil optimiert und schnell veröffentlicht.',
}

const cases = [
  {
    title: 'Trattoria da Matteo',
    category: 'Gastronomie · Redesign-Konzept',
    description:
      'Ein warmer, hochwertiger Webauftritt, der Atmosphäre, Speisekarte und Reservierung direkt in den Mittelpunkt stellt.',
    accent: 'from-amber-100 via-orange-50 to-stone-100',
    surface: 'bg-stone-950',
    badge: 'Restaurant',
  },
  {
    title: 'Bonsai Home',
    category: 'Interior · Marken- und Shopkonzept',
    description:
      'Ruhige Bildsprache, klare Produktführung und ein reduziertes Design für eine moderne Interior-Marke.',
    accent: 'from-emerald-100 via-stone-50 to-lime-100',
    surface: 'bg-emerald-950',
    badge: 'Interior',
  },
  {
    title: 'Brühl Friseur',
    category: 'Lokaler Dienstleister · Website-Konzept',
    description:
      'Ein zugänglicher, mobiler Auftritt mit Leistungen, Team, Öffnungszeiten und einer klaren Terminaktion.',
    accent: 'from-rose-100 via-pink-50 to-orange-50',
    surface: 'bg-rose-950',
    badge: 'Beauty',
  },
  {
    title: 'Stockhausen',
    category: 'Unternehmenswebsite · Konzept',
    description:
      'Strukturierte Leistungsdarstellung, seriöse Positionierung und klare Kontaktwege für ein erklärungsbedürftiges Angebot.',
    accent: 'from-sky-100 via-slate-50 to-indigo-100',
    surface: 'bg-slate-950',
    badge: 'Business',
  },
]

const benefits = [
  'Individuelles Design statt austauschbarer Baukasten-Optik',
  'Optimiert für Smartphone, Tablet und Desktop',
  'Klare Struktur, verständliche Texte und starke Handlungsaufforderungen',
  'Technische Einrichtung, Veröffentlichung und saubere Übergabe',
]

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="border-b border-line bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="text-[17px] font-semibold tracking-tight">
            Vantura Studios
          </Link>
          <div className="flex items-center gap-5">
            <a href="#arbeiten" className="hidden text-sm font-medium text-muted hover:text-ink sm:block">
              Arbeiten
            </a>
            <a href="#paket" className="hidden text-sm font-medium text-muted hover:text-ink sm:block">
              Angebot
            </a>
            <a
              href="mailto:hello@vantura-studios.com?subject=Website-Anfrage"
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-navy"
            >
              Projekt anfragen
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="overflow-hidden border-b border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                <Globe2 size={14} /> Vantura Website Studio
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
                Websites, die nicht nur gut aussehen.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Moderne Websites für kleine Unternehmen, Gastronomie und lokale Dienstleister – klar positioniert,
                mobil optimiert und bereit, aus Besuchern echte Anfragen zu machen.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@vantura-studios.com?subject=Website-Anfrage"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy"
                >
                  Website besprechen <ArrowRight size={17} />
                </a>
                <a
                  href="#arbeiten"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-stone-50"
                >
                  Arbeiten ansehen
                </a>
              </div>
            </div>

            <div className="relative min-h-[430px]">
              <div className="absolute left-0 top-12 w-[82%] rotate-[-5deg] rounded-[28px] border border-white/70 bg-white p-3 shadow-2xl shadow-slate-300/60">
                <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-emerald-100 via-white to-stone-100 p-7">
                  <div className="mb-16 flex items-center justify-between text-xs font-semibold text-emerald-950">
                    <span>BONSAI HOME</span><span>COLLECTION</span>
                  </div>
                  <p className="max-w-xs text-4xl font-semibold tracking-tight text-emerald-950">Calm spaces. Better living.</p>
                  <div className="mt-10 h-32 rounded-2xl bg-emerald-950/90" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[76%] rotate-[5deg] rounded-[28px] border border-white/70 bg-white p-3 shadow-2xl shadow-slate-300/60">
                <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-amber-100 via-orange-50 to-stone-100 p-7">
                  <div className="mb-12 flex items-center justify-between text-xs font-semibold text-stone-950">
                    <span>DA MATTEO</span><span>PRENOTA</span>
                  </div>
                  <p className="max-w-xs text-4xl font-semibold tracking-tight text-stone-950">Ein Abend wie in Italien.</p>
                  <div className="mt-9 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-xl bg-stone-950" />
                    <div className="h-20 rounded-xl bg-orange-900" />
                    <div className="h-20 rounded-xl bg-amber-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="arbeiten" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Ausgewählte Arbeiten</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Vier Richtungen. Ein Anspruch.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Die gezeigten Arbeiten sind eigene Konzepte und Redesigns. Sie zeigen, wie unterschiedlich Marken auftreten können,
              ohne dass Klarheit, Nutzbarkeit und eine starke mobile Darstellung verloren gehen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[28px] border border-line bg-white shadow-sm">
                <div className={`bg-gradient-to-br ${item.accent} p-6 sm:p-8`}>
                  <div className="rounded-[22px] border border-white/80 bg-white p-3 shadow-xl shadow-slate-300/30">
                    <div className={`min-h-64 rounded-[16px] ${item.surface} p-6 text-white`}>
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        <span>{item.title}</span><span>{item.badge}</span>
                      </div>
                      <div className="mt-14 max-w-sm">
                        <div className="h-2 w-20 rounded-full bg-white/30" />
                        <div className="mt-4 h-9 w-4/5 rounded-lg bg-white/90" />
                        <div className="mt-3 h-9 w-3/5 rounded-lg bg-white/60" />
                      </div>
                      <div className="mt-12 grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-xl bg-white/10" />
                        <div className="h-16 rounded-xl bg-white/15" />
                        <div className="h-16 rounded-xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{item.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Was enthalten ist</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">Von der ersten Idee bis zur fertigen Website.</h2>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-white"><Check size={14} /></span>
                  <p className="font-medium leading-6">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="paket" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Klarer Einstieg</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">Der Website-Sprint.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Ein kompakter Prozess für Unternehmen, die keine monatelange Agenturproduktion brauchen, sondern schnell einen professionellen Auftritt wollen.
              </p>
            </div>
            <div className="rounded-[30px] bg-ink p-8 text-white sm:p-10">
              <div className="grid gap-8 sm:grid-cols-3">
                <div><LayoutTemplate className="mb-4" /><p className="font-semibold">Konzept & Design</p><p className="mt-2 text-sm leading-6 text-white/65">Struktur, Texte und Look passend zum Unternehmen.</p></div>
                <div><Smartphone className="mb-4" /><p className="font-semibold">Mobile First</p><p className="mt-2 text-sm leading-6 text-white/65">Sauber nutzbar auf Smartphone, Tablet und Desktop.</p></div>
                <div><Rocket className="mb-4" /><p className="font-semibold">Veröffentlichung</p><p className="mt-2 text-sm leading-6 text-white/65">Technische Einrichtung, Domain und Übergabe inklusive.</p></div>
              </div>
              <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm text-white/60">Individuelles Angebot nach kurzem Erstgespräch</p>
                  <p className="mt-1 text-2xl font-semibold">Klein starten. Professionell auftreten.</p>
                </div>
                <a
                  href="mailto:hello@vantura-studios.com?subject=Website-Sprint"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink"
                >
                  Anfrage senden <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Deine Website muss nicht perfekt starten. Sie muss endlich starten.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Schick einfach den aktuellen Stand, ein paar Stichpunkte oder nur die Adresse der bestehenden Website. Daraus entsteht ein klarer nächster Schritt.
            </p>
            <a
              href="mailto:hello@vantura-studios.com?subject=Website-Projekt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white"
            >
              Projekt anfragen <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Vantura Studios</p>
          <Link href="/" className="font-medium text-ink">Zurück zu Reporting & Dashboards</Link>
        </div>
      </footer>
    </div>
  )
}
