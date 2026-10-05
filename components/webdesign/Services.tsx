import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Services({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <section id="leistungen" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.servicesEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.servicesTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">{copy.servicesLead}</p>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.services.map((item) => (
            <article key={item.number} className="border-2 border-ink p-7">
              <p className="font-mono text-xs font-bold text-signal">{item.number}</p>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              <ul className="mt-5 space-y-2 border-t-2 border-ink/10 pt-4">
                {item.points.map((point) => (
                  <li key={point} className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink/80">
                    ✦ {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
