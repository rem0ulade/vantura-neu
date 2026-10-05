import Link from 'next/link'
import { WORK_ITEMS } from '@/lib/work'
import type { Locale } from '@/lib/webdesign-content'
import { homeHref, t, workHref } from '@/lib/webdesign-content'
import { LanguageToggle } from './LanguageToggle'

export function WorkIndex({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href={homeHref(locale)} className="text-sm font-bold uppercase tracking-[0.16em]">
            Vantura
          </Link>
          <LanguageToggle locale={locale} />
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">Work</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.05em] sm:text-7xl">
          {copy.workIndexTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">{copy.workIndexLead}</p>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {WORK_ITEMS.map((item, index) => (
            <Link
              key={item.slug}
              href={workHref(locale, item.slug)}
              className="group border-2 border-ink p-6 shadow-[4px_4px_0_#111] transition hover:bg-ink hover:text-paper hover:shadow-[4px_4px_0_#ff4d1a]"
            >
              <div className="flex justify-between gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                <span className="text-signal">{item.kind[locale]}</span>
                <span>0{index + 1}</span>
              </div>
              <h2 className="mt-6 text-3xl font-bold uppercase tracking-[-0.04em]">{item.title[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-muted group-hover:text-paper/70">{item.blurb[locale]}</p>
              <div className="mt-5 grid gap-3 border-t-2 border-ink/15 pt-4 text-xs leading-5 group-hover:border-paper/20 sm:grid-cols-2">
                <p>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-signal">
                    {copy.featuredChallenge}
                  </span>
                  <span className="mt-1 block text-muted group-hover:text-paper/70">{item.challenge[locale]}</span>
                </p>
                <p>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-signal">
                    {copy.featuredResult}
                  </span>
                  <span className="mt-1 block text-muted group-hover:text-paper/70">{item.result[locale]}</span>
                </p>
              </div>
              <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.14em]">{copy.workCta} →</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
