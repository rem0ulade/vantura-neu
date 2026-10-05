'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function About({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <section id="studio" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
            {copy.aboutEyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            {copy.aboutTitle}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">{copy.aboutText}</p>
          <motion.a
            href={copy.contactHref}
            whileHover={reduce ? undefined : { x: 2, y: 2, boxShadow: '0px 0px 0 #111' }}
            className="mt-8 inline-flex border-2 border-ink bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-[4px_4px_0_#111]"
          >
            {copy.aboutCta}
          </motion.a>
        </div>
        <ul className="space-y-3">
          {copy.aboutPoints.map((point, index) => (
            <motion.li
              key={point}
              initial={reduce ? false : { opacity: 0, x: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={reduce ? undefined : { x: 6, backgroundColor: '#111', color: '#f2efe8' }}
              className="border-2 border-ink bg-paper px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.1em] transition"
            >
              <span className="mr-3 text-signal">0{index + 1}</span>
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
