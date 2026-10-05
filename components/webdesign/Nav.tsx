'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { LanguageToggle } from './LanguageToggle'
import type { Locale } from '@/lib/webdesign-content'
import { homeHref, t, workHref } from '@/lib/webdesign-content'

export function Nav({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link
          href={homeHref(locale)}
          className="group relative text-sm font-bold uppercase tracking-[0.16em]"
        >
          Vantura
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            href={workHref(locale)}
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition hover:text-signal sm:inline"
          >
            {copy.navWork}
          </Link>
          <a
            href="#leistungen"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition hover:text-signal md:inline"
          >
            {copy.navServices}
          </a>
          <a
            href="#studio"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition hover:text-signal lg:inline"
          >
            {copy.navAbout}
          </a>
          <LanguageToggle locale={locale} />
          <motion.a
            href={copy.contactHref}
            whileHover={reduce ? undefined : { x: 2, y: 2, boxShadow: '0px 0px 0 #111' }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="border-2 border-ink bg-signal px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-[3px_3px_0_#111]"
          >
            {copy.navCta}
          </motion.a>
        </nav>
      </div>
    </header>
  )
}
