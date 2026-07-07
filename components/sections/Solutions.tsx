import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SOLUTIONS } from '@/lib/content'

export function Solutions() {
  return (
    <section id="loesungen" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Die Lösung"
          title="Wir bauen keine Software. Wir bauen Klarheit."
          lead="Jede Lösung beginnt mit einem konkreten Problem aus Ihrem Alltag — nicht mit einem Tool. Software ist nur das Werkzeug, mit dem wir es lösen."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 2) * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft lg:p-10">
                <p className="text-[15px] font-medium italic leading-6 text-muted">
                  {solution.problem}
                </p>

                <div className="mt-6 flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                    <solution.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">
                    {solution.title}
                  </h3>
                </div>

                <p className="mt-4 text-[15px] leading-7 text-muted">{solution.text}</p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[15px] leading-6">
                      <Check size={16} className="mt-1 shrink-0 text-accent" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
