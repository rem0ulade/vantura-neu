'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { WORK_ITEMS } from '@/lib/work'
import type { Locale } from '@/lib/webdesign-content'
import { t, workHref } from '@/lib/webdesign-content'

export function WorkGrid({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <section id="work" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.workEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.workTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">{copy.workLead}</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {WORK_ITEMS.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <Link
                href={workHref(locale, item.slug)}
                className="group flex h-full flex-col border-2 border-ink bg-paper p-6 shadow-[4px_4px_0_#111] transition hover:bg-ink hover:text-paper hover:shadow-[4px_4px_0_#ff4d1a]"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-signal group-hover:text-signal">
                    {item.kind[locale]}
                  </p>
                  <span className="font-mono text-[11px] font-bold">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-bold uppercase tracking-[-0.04em]">{item.title[locale]}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted group-hover:text-paper/70">
                  {item.blurb[locale]}
                </p>
                <p className="mt-4 line-clamp-2 text-xs leading-5 text-muted/90 group-hover:text-paper/60">
                  {item.result[locale]}
                </p>
                <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.14em]">
                  {copy.workCta} →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
