'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQ_ITEMS } from '@/lib/content'
import { cn } from '@/lib/cn'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Häufige Fragen — ehrliche Antworten."
            lead="Wenn Ihre Frage fehlt: Das Erstgespräch ist genau dafür da."
          />

          <div className="divide-y divide-line rounded-2xl border border-line bg-white px-6 sm:px-8">
            {FAQ_ITEMS.map((item, i) => {
              const open = openIndex === i
              return (
                <div key={item.question}>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="text-[16px] font-semibold tracking-tight sm:text-[17px]">
                      {item.question}
                    </span>
                    <Plus
                      size={18}
                      className={cn(
                        'shrink-0 text-muted transition-transform duration-300',
                        open && 'rotate-45'
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[15px] leading-7 text-muted">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
