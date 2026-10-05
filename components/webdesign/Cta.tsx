'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Cta({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <section className="border-b-2 border-ink bg-signal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] text-ink sm:text-6xl"
        >
          {copy.ctaTitle}
        </motion.h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-ink/80">{copy.ctaText}</p>
        <a
          href={copy.contactHref}
          className="mt-10 inline-flex border-2 border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-paper shadow-[4px_4px_0_#f2efe8] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          {copy.ctaButton}
        </a>
      </div>
    </section>
  )
}
