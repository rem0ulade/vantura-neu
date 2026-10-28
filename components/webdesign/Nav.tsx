'use client'

import { BookingLink } from './BookingLink'

import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { LanguageToggle } from './LanguageToggle'
import type { Locale } from '@/lib/webdesign-content'
import { homeHref, t } from '@/lib/webdesign-content'

export function Nav({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const reduce = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 lg:px-8">
        <Link
          href={homeHref(locale)}
          className="group relative text-sm font-bold uppercase tracking-[0.16em]"
        >
          Vantura
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
        </Link>
        <nav aria-label={locale === 'de' ? 'Hauptnavigation' : 'Main navigation'} className="flex items-center gap-2 sm:gap-5">
          <a href="#angebote" className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink transition hover:text-signal md:inline">
            {locale === 'de' ? 'Pakete & Preise' : 'Packages & prices'}
          </a>
          <Link
            href="#featured"
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
          <a href="#projektanfrage" className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink md:inline">{locale === 'de' ? 'Projekt anfragen' : 'Project inquiry'}</a>
          <LanguageToggle locale={locale} />
          <BookingLink
            placement="navigation"
            whileHover={reduce ? undefined : { x: 2, y: 2, boxShadow: '0px 0px 0 #111' }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="border-2 border-ink bg-signal px-2.5 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-[3px_3px_0_#111]"
          >
            {copy.navCta}
          </BookingLink>
        </nav>
      </div>
      <nav aria-label={locale === 'de' ? 'Seitenbereiche' : 'Page sections'} className="flex gap-5 overflow-x-auto border-t border-ink/15 px-4 md:hidden">
        {[{ href: '#projektanfrage', label: locale === 'de' ? 'Anfragen' : 'Inquire' }, { href: '#featured', label: copy.navWork }, { href: '#angebote', label: locale === 'de' ? 'Pakete' : 'Packages' }, { href: '#leistungen', label: copy.navServices }, { href: '#studio', label: copy.navAbout }].map((item) => (
          <a key={item.href} href={item.href} className="inline-flex min-h-11 shrink-0 items-center font-mono text-[10px] font-bold uppercase tracking-[0.08em] hover:text-signal">{item.label}</a>
        ))}
      </nav>
    </header>
  )
}

