import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/lib/content'

export function Process() {
  return (
    <section id="ablauf" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Der Ablauf"
          title="Vom ersten Gespräch zum laufenden System."
          lead="Kein monatelanges Projekt ins Blaue. Wir arbeiten in klaren Etappen — mit Festpreis, frühen Ergebnissen und einem System, das am Ende Ihnen gehört."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="h-full">
              <div className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <div className="flex items-baseline justify-between">
                  <span className="tnum text-sm font-semibold text-accent">{step.number}</span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="hidden text-slate-300 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-[13px] font-medium text-muted">{step.duration}</p>
                <p className="mt-4 text-[15px] leading-7 text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
