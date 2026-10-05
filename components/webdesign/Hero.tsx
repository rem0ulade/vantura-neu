'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Locale } from '@/lib/webdesign-content'
import { t, workHref } from '@/lib/webdesign-content'

export function Hero({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const shift = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const fade = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.35])

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden border-b-2 border-ink">
      <motion.div style={{ y: shift, opacity: fade }} className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(242,239,232,.92)_0%,rgba(242,239,232,.55)_42%,rgba(255,77,26,.45)_100%)]" />
        <div className="absolute bottom-0 right-0 h-2/5 w-full bg-[repeating-linear-gradient(-45deg,#ff4d1a,#ff4d1a_10px,#111_10px,#111_20px)] opacity-90 sm:w-2/5" />
      </motion.div>

      <div className="mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 lg:px-8 lg:pb-24">
        <motion.p {...fadeUp(0)} className="font-mono text-xs font-bold uppercase tracking-[0.22em]">
          {copy.heroBrand}
        </motion.p>
        <motion.h1
          {...fadeUp(0.08)}
          className="mt-5 max-w-[12ch] text-[clamp(3.4rem,12vw,8.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.06em]"
        >
          {copy.heroTitle}
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg">
          {copy.heroText}
        </motion.p>
        <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={copy.contactHref}
            className="inline-flex items-center justify-center border-2 border-ink bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {copy.heroCta}
          </a>
          <a
            href={workHref(locale)}
            className="inline-flex items-center justify-center border-2 border-ink bg-paper px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-ink hover:text-paper"
          >
            {copy.heroSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
