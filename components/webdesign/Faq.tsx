'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Faq({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">
          {copy.faqEyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">
          {copy.faqTitle}
        </h2>
        <div className="mt-12 divide-y-2 divide-ink border-y-2 border-ink">
          {copy.faq.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:bg-ink hover:px-3 hover:text-paper"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold uppercase tracking-[-0.03em] sm:text-xl">{item.q}</span>
                  <motion.span
                    animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                    className="grid h-8 w-8 shrink-0 place-items-center border-2 border-current font-mono text-lg font-bold"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 text-sm leading-7 text-muted sm:text-base">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
