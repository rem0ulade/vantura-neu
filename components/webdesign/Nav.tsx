'use client'

import Link from 'next/link'
import { LanguageToggle } from './LanguageToggle'
import type { Locale } from '@/lib/webdesign-content'
import { homeHref, t, workHref } from '@/lib/webdesign-content'

export function Nav({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href={homeHref(locale)} className="text-sm font-bold uppercase tracking-[0.16em]">
          Vantura
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            href={workHref(locale)}
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink sm:inline"
          >
            {copy.navWork}
          </Link>
          <a
            href="#leistungen"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink md:inline"
          >
            {copy.navServices}
          </a>
          <a
            href="#about"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink lg:inline"
          >
            {copy.navAbout}
          </a>
          <LanguageToggle locale={locale} />
          <a
            href={copy.contactHref}
            className="border-2 border-ink bg-signal px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-[3px_3px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {copy.navCta}
          </a>
        </nav>
      </div>
    </header>
  )
}
