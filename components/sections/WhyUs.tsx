import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EXPERIENCE_ANCHORS } from '@/lib/content'
import { SITE } from '@/lib/site'

export function WhyUs() {
  return (
    <section id="warum-wir" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Warum wir"
              title={`Warum es ${SITE.name} gibt.`}
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-[17px] leading-8 text-muted">
                <p>
                  Jahrelang dieselbe Beobachtung — im Mediakonzern, im Investment-Umfeld,
                  in Projekten mit Mittelständlern:{' '}
                  <span className="font-medium text-ink">
                    Entscheidungen scheitern selten am Verstand. Sie scheitern an den Daten,
                    die auf dem Tisch liegen.
                  </span>
                </p>
                <p>
                  Kluge Teams verbrachten ihre Wochen damit, Zahlen zusammenzukopieren, statt
                  mit ihnen zu arbeiten. Budgets wurden auf Basis veralteter Tabellen
                  verschoben. Forecasts entstanden im Bauchgefühl, weil die Datenlage keine
                  bessere Grundlage hergab.
                </p>
                <p>
                  {SITE.name} ist die Konsequenz daraus: Reporting-, Forecasting- und
                  BI-Erfahrung aus dem Konzernumfeld, kombiniert mit solider
                  Softwareentwicklung — verfügbar für Unternehmen, die keine eigene
                  Datenabteilung haben. Und auch keine brauchen sollten.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {EXPERIENCE_ANCHORS.map((anchor, i) => (
              <Reveal key={anchor.title} delay={0.1 + i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-navy">
                    <anchor.icon size={19} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold tracking-tight">
                    {anchor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{anchor.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
