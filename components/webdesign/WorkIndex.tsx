import Link from 'next/link'
import { WORK_ITEMS } from '@/lib/work'
import type { Locale } from '@/lib/webdesign-content'
import { homeHref, t, workHref } from '@/lib/webdesign-content'
import { LanguageToggle } from './LanguageToggle'
import { BookingLink } from './BookingLink'
import { Cta } from './Cta'
import { Footer } from './Footer'

export function WorkIndex({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <div lang={locale} className="min-h-screen bg-paper text-ink">
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-5 lg:px-8">
          <Link href={homeHref(locale)} className="text-sm font-bold uppercase tracking-[0.16em]">
            Vantura
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle locale={locale} />
            <BookingLink placement="portfolio" className="inline-flex min-h-11 shrink-0 items-center border-2 border-ink bg-signal px-2 py-3 font-mono text-[10px] font-bold uppercase sm:px-3 sm:text-xs">
              {copy.navCta}
            </BookingLink>
          </div>
        </div>
      </header>
      <main>
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Link href={`${homeHref(locale)}#featured`} className="mb-8 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
          {locale === 'de' ? '← Zur Startseite und den Beispielen' : '← Back to the homepage examples'}
        </Link>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-signal">{copy.featuredEyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,8vw,4.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] sm:text-7xl">
          {copy.workIndexTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">{copy.workIndexLead}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          {locale === 'de'
            ? 'Gefällt dir eine Richtung? Deine Website gestalte ich passend zu deinem Unternehmen. Im kostenlosen Erstgespräch klären wir Inhalte, Funktionen und den passenden Umfang. Hosting und Betreuung sind optional.'
            : 'Like a direction? I design your website around your business. On a free discovery call, we discuss content, functionality and scope. Hosting and care are optional.'}
        </p>
        <BookingLink placement="portfolio-intro" className="mt-7 inline-flex min-h-12 items-center justify-center border-2 border-ink bg-signal px-5 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.1em] shadow-[3px_3px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
          {copy.heroCta} →
        </BookingLink>
        <p className="mt-4 text-xs leading-6 text-muted">{copy.bookingMeta}</p>
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
      </div>
      <Cta locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}

