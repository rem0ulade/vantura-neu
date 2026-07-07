'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroDashboard } from '@/components/dashboard/HeroDashboard'
import { CONTACT_HREF, SITE } from '@/lib/site'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  })

  return (
    <section className="relative overflow-hidden">
      {/* Hintergrund: feines Raster, nach unten auslaufend */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_20%,transparent_85%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(52rem_28rem_at_70%_-10%,rgb(59_91_219/0.07),transparent)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-32 lg:pt-44">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-muted shadow-[0_1px_2px_rgb(11_18_32/0.04)] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Reporting · Dashboards · Automatisierung
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            Bessere Entscheidungen beginnen mit{' '}
            <span className="text-accent">besseren Daten</span>.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted"
          >
            {SITE.description}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={CONTACT_HREF}>
              Kostenloses Erstgespräch
              <ArrowRight size={16} />
            </Button>
            <Button href="#loesungen" variant="secondary">
              Lösungen ansehen
            </Button>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="mt-6 text-sm text-muted">
            30 Minuten · unverbindlich · eine ehrliche Einschätzung
          </motion.p>
        </div>

        <HeroDashboard />
      </div>
    </section>
  )
}
