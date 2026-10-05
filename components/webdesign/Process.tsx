import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Process({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <section className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.processEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.processTitle}
        </h2>
        <ol className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.process.map((step) => (
            <li key={step.number} className="border-2 border-ink p-6">
              <p className="font-mono text-xs font-bold text-signal">{step.number}</p>
              <h3 className="mt-4 text-xl font-bold uppercase tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-signal">
                {step.duration}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
