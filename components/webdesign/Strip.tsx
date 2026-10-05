'use client'

import { useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Strip({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()
  const items = [...copy.strip, ...copy.strip]

  return (
    <section className="overflow-hidden border-b-2 border-ink bg-ink py-4 text-paper">
      <div
        className={`flex w-max gap-10 font-mono text-xs font-bold uppercase tracking-[0.18em] text-signal ${
          reduce ? '' : 'animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]'
        }`}
      >
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-10 whitespace-nowrap">
            {item}
            <span className="text-paper/30" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
