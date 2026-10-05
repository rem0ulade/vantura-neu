import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function About({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <section id="about" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
            {copy.aboutEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            {copy.aboutTitle}
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base">{copy.aboutText}</p>
          <a
            href={copy.contactHref}
            className="mt-8 inline-flex border-2 border-ink bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {copy.aboutCta}
          </a>
        </div>
        <ul className="space-y-4">
          {copy.aboutPoints.map((point) => (
            <li
              key={point}
              className="border-2 border-ink px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.1em] shadow-[3px_3px_0_#111]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
