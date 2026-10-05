'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Services({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <section id="leistungen" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.servicesEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.servicesTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">{copy.servicesLead}</p>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {copy.services.map((item, index) => (
            <motion.article
              key={item.number}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={reduce ? undefined : { y: -6, boxShadow: '6px 6px 0 #ff4d1a' }}
              className="group border-2 border-ink bg-paper p-7 shadow-[4px_4px_0_#111] transition-colors hover:bg-ink hover:text-paper"
            >
              <p className="font-mono text-xs font-bold text-signal">{item.number}</p>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted group-hover:text-paper/70">{item.text}</p>
              <ul className="mt-5 space-y-2 border-t-2 border-ink/10 pt-4 group-hover:border-paper/20">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink/80 transition group-hover:translate-x-1 group-hover:text-signal"
                  >
                    ✦ {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
