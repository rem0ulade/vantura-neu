import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { COST_ITEMS } from '@/lib/content'

export function Cost() {
  return (
    <section className="bg-ink py-24 text-white lg:py-32">
      <Container>
        <SectionHeading
          dark
          eyebrow="Der Schmerz"
          title="Schlechte Daten kosten Geld. Jeden Tag."
          lead="Nicht als Posten in der Buchhaltung — sondern versteckt in Arbeitszeit, in Fehlern und in Entscheidungen, die zu spät oder falsch getroffen werden."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {COST_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col bg-ink p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {item.title}
                </p>
                <p className="tnum mt-5 text-4xl font-semibold tracking-tight lg:text-5xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.statLabel}</p>
                <p className="mt-6 text-[15px] leading-7 text-slate-300">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-14">
          <p className="mx-auto max-w-3xl text-balance text-center text-2xl font-medium leading-snug tracking-tight text-white lg:text-3xl">
            Die Frage ist nicht, ob Sie sich bessere Daten leisten können.{' '}
            <span className="text-slate-400">
              Sondern wie lange Sie sich die schlechten noch leisten wollen.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
