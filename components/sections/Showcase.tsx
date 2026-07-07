import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ShowcaseDashboard } from '@/components/dashboard/ShowcaseDashboard'

const FACTS = [
  { title: 'Eine Quelle der Wahrheit', text: 'Alle Systeme fließen zusammen — jeder im Unternehmen sieht dieselben Zahlen.' },
  { title: 'Immer aktuell', text: 'Automatische Aktualisierung statt monatlicher Kopierarbeit.' },
  { title: 'Auf Entscheidungen gebaut', text: 'Jede Ansicht beantwortet eine konkrete Geschäftsfrage — nicht mehr, nicht weniger.' },
]

export function Showcase() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="So sieht das aus"
          title="Vom Zahlenfriedhof zum Cockpit."
          lead="So arbeitet ein Unternehmen, das seine Daten im Griff hat: eine Oberfläche, aktuelle Zahlen, klare Signale — statt zwanzig Tabs und drei Excel-Versionen."
        />

        <Reveal delay={0.1} className="mt-14">
          <ShowcaseDashboard />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.title} delay={i * 0.08}>
              <div className="border-t-2 border-ink pt-5">
                <h3 className="text-[16px] font-semibold tracking-tight">{fact.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{fact.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
