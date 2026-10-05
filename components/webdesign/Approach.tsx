'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Approach({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <section className="border-b-2 border-ink bg-ink py-20 text-paper lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.approachEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.approachTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-paper/65 sm:text-base">{copy.approachLead}</p>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {copy.approach.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={reduce ? undefined : { y: -6, borderColor: '#ff4d1a' }}
              className="border-2 border-paper/30 bg-ink p-7 transition"
            >
              <p className="font-mono text-xs font-bold text-signal">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-paper/70">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
