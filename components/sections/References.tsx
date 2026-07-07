import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { REFERENCES } from '@/lib/content'

/**
 * Referenzen werden in lib/content.ts gepflegt (REFERENCES).
 * Solange keine Einträge existieren, rendert die Sektion nichts —
 * sobald der erste Eintrag hinzukommt, erscheint sie automatisch.
 */
export function References() {
  if (REFERENCES.length === 0) return null

  return (
    <section id="referenzen" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Referenzen"
          title="Unternehmen, die ihre Zahlen wieder im Griff haben."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.map((ref, i) => (
            <Reveal key={ref.company} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
                {ref.quote && (
                  <blockquote className="flex-1 text-[15px] leading-7 text-ink">
                    „{ref.quote}“
                  </blockquote>
                )}
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-semibold">{ref.person ?? ref.company}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {[ref.role, ref.company, ref.industry].filter(Boolean).join(' · ')}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
