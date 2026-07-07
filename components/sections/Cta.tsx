import { ArrowRight, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { CONTACT_HREF, SITE } from '@/lib/site'

export function Cta() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-white sm:px-16 lg:py-24">
            {/* Dezenter Glanz */}
            <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-20%,rgb(59_91_219/0.25),transparent)]" />

            <div className="relative">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Der nächste Schritt
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                Wie viel Zeit kostet Sie Ihr Reporting — ehrlich gerechnet?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
                In 30 Minuten klären wir, wo in Ihren Daten Zeit und Geld verloren gehen und
                was eine Lösung realistisch bringt. Kostenlos, unverbindlich — und wenn wir
                nicht der richtige Partner sind, sagen wir Ihnen das.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={CONTACT_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgb(255_255_255/0.35)]"
                >
                  Kostenloses Erstgespräch anfragen
                  <ArrowRight size={16} />
                </a>
              </div>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail size={15} />
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
