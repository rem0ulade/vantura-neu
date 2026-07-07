import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PAIN_POINTS } from '@/lib/content'

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Das Problem"
          title="Ihre Daten sind da. Nur die Antworten fehlen."
          lead="Die meisten Unternehmen haben kein Datenproblem — sie haben ein Zugangsproblem. Die Zahlen existieren, aber sie liegen verstreut, veraltet und in Formaten, mit denen niemand entscheiden kann."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-navy transition-colors group-hover:bg-ink group-hover:text-white">
                  <pain.icon size={19} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{pain.title}</h3>
                <p className="mt-2.5 text-[15px] leading-7 text-muted">{pain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-muted">
            Wenn Sie sich in mindestens einem Punkt wiedererkennen:{' '}
            <span className="font-medium text-ink">
              Sie sind nicht allein — und es gibt einen besseren Weg.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
