'use client'

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Capabilities({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const indexProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3])

  return (
    <section ref={ref} className="relative border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="sticky top-16 flex min-h-[70vh] flex-col justify-center border-b-2 border-paper/20 px-5 py-16 lg:border-b-0 lg:border-r-2 lg:px-8 lg:py-24">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
            {copy.capabilitiesEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            {copy.capabilitiesTitle}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-paper/65">{copy.capabilitiesLead}</p>
          {!reduce && (
            <div className="motion-safe-only mt-10 overflow-hidden border-y-2 border-signal py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-signal">
              <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8">
                {[...copy.capabilities, ...copy.capabilities].map((item, i) => (
                  <span key={`${item.title}-${i}`}>{item.title} ✦</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-10 lg:px-8 lg:py-16">
          <div className="space-y-6 lg:min-h-[220vh]">
            {copy.capabilities.map((item, i) => (
              <CapabilityCard
                key={item.title}
                index={i}
                title={item.title}
                text={item.text}
                progress={indexProgress}
                reduce={!!reduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({
  index,
  title,
  text,
  progress,
  reduce,
}: {
  index: number
  title: string
  text: string
  progress: MotionValue<number>
  reduce: boolean
}) {
  const opacity = useTransform(progress, (v) => {
    if (reduce) return 1
    const d = Math.abs(v - index)
    return d < 0.55 ? 1 : 0.35
  })
  const scale = useTransform(progress, (v) => {
    if (reduce) return 1
    const d = Math.abs(v - index)
    return d < 0.55 ? 1 : 0.97
  })

  return (
    <motion.article
      style={{ opacity, scale }}
      className="sticky top-28 border-2 border-paper bg-paper p-7 text-ink shadow-[6px_6px_0_#ff4d1a] lg:top-32"
    >
      <p className="font-mono text-xs font-bold text-signal">0{index + 1}</p>
      <h3 className="mt-3 text-3xl font-bold uppercase tracking-[-0.04em]">{title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{text}</p>
      <div className="mt-8 grid h-28 grid-cols-4 gap-2 border-2 border-ink p-3">
        {Array.from({ length: 4 }).map((_, n) => (
          <div
            key={n}
            className={`border-2 border-ink ${n === index % 4 ? 'bg-signal' : 'bg-paper'} transition-colors`}
          />
        ))}
      </div>
    </motion.article>
  )
}
