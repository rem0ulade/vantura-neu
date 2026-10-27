'use client'

import { BookingLink } from './BookingLink'

import { motion, useReducedMotion } from 'framer-motion'
import { HeroBackdrop } from './HeroBackdrop'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Hero({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section className="relative isolate overflow-hidden border-b-2 border-ink">
      <HeroBackdrop locale={locale} />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
        <motion.p {...fadeUp(0)} className="font-mono text-xs font-bold uppercase tracking-[0.22em]">
          {copy.heroBrand}
        </motion.p>
        <motion.h1
          {...fadeUp(0.08)}
          className="mt-5 max-w-[20ch] text-[clamp(2.6rem,8vw,5.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em]"
        >
          {copy.heroTitle}
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
          {copy.heroText}
        </motion.p>
        <motion.p {...fadeUp(0.2)} className="mt-8 max-w-lg font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
          {copy.heroNote}
        </motion.p>
        <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BookingLink
            placement="hero"
            className="inline-flex items-center justify-center border-2 border-ink bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {copy.heroCta}
          </BookingLink>
          <a
            href="#featured"
            className="inline-flex items-center justify-center border-2 border-ink bg-paper px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-ink hover:text-paper"
          >
            {copy.heroSecondary}
          </a>
        </motion.div>
        <p className="mt-5 text-sm leading-6 text-muted">{copy.bookingMeta}</p>
      </div>
    </section>
  )
}

