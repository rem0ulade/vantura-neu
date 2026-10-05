import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Faq({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <section id="faq" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">{copy.faqEyebrow}</p>
        <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.faqTitle}
        </h2>
        <dl className="mt-14 space-y-6">
          {copy.faq.map((item) => (
            <div key={item.q} className="border-2 border-ink p-5">
              <dt className="text-lg font-bold uppercase tracking-[-0.03em]">{item.q}</dt>
              <dd className="mt-3 text-sm leading-6 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
