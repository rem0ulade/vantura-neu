'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Cta({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-signal py-20 lg:py-28">
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-10 top-0 h-full w-1/3 bg-[repeating-linear-gradient(-45deg,#111,#111_8px,transparent_8px,transparent_16px)] opacity-20"
          animate={{ x: [0, -24, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] text-ink sm:text-6xl"
        >
          {copy.ctaTitle}
        </motion.h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-ink/80">{copy.ctaText}</p>
        <motion.a
          href={copy.contactHref}
          whileHover={reduce ? undefined : { x: 3, y: 3, boxShadow: '0px 0px 0 #f2efe8' }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="mt-10 inline-flex border-2 border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-paper shadow-[4px_4px_0_#f2efe8]"
        >
          {copy.ctaButton}
        </motion.a>
        <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
          {copy.ctaMeta}
        </p>
      </div>
    </section>
  )
}
