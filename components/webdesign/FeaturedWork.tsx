'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { getFeaturedWork } from '@/lib/work'
import type { Locale } from '@/lib/webdesign-content'
import { t, workHref } from '@/lib/webdesign-content'

export function FeaturedWork({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const items = getFeaturedWork()
  const reduce = useReducedMotion()

  return (
    <section id="featured" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.featuredEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.featuredTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">{copy.featuredLead}</p>

        <div className="mt-14 space-y-6">
          {items.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={reduce ? undefined : { y: -4, boxShadow: '8px 8px 0 #ff4d1a' }}
              className="group relative grid gap-6 overflow-hidden border-2 border-ink bg-paper p-6 shadow-[4px_4px_0_#111] lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:p-8"
            >
              <motion.div
                aria-hidden
                className="absolute inset-y-0 left-0 w-1.5 origin-top bg-signal"
                initial={reduce ? undefined : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              />
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-signal">
                  {item.kind[locale]}
                </p>
                <h3 className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] transition group-hover:translate-x-1 sm:text-4xl">
                  {item.title[locale]}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.blurb[locale]}</p>
                <Link
                  href={workHref(locale, item.slug)}
                  className="mt-8 inline-flex border-2 border-ink bg-signal px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-[3px_3px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                >
                  {copy.featuredCta} →
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="border-2 border-ink bg-paper p-4 transition group-hover:border-signal">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-signal">
                    {copy.featuredChallenge}
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.challenge[locale]}</p>
                </div>
                <div className="border-2 border-ink bg-ink p-4 text-paper transition group-hover:bg-signal group-hover:text-ink">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-signal group-hover:text-ink">
                    {copy.featuredResult}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-paper/85 group-hover:text-ink/85">{item.result[locale]}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
