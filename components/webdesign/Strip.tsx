import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Strip({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const items = [...copy.strip, ...copy.strip]

  return (
    <div className="overflow-hidden border-b-2 border-ink bg-ink py-3 text-paper">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 px-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em]">
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="whitespace-nowrap">
            {label} <span className="text-signal">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
