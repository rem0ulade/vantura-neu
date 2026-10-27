'use client'

import Link from 'next/link'
import { BookingLink } from './webdesign/BookingLink'
import type { Locale } from '@/lib/webdesign-content'
import { t, workHref } from '@/lib/webdesign-content'

export function WorkDemoShell({
  locale,
  title,
  src,
}: {
  locale: Locale
  title: string
  src: string
}) {
  const copy = t(locale)

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-ink">
      <div className="absolute inset-x-0 top-0 z-50 flex h-16 items-center justify-between gap-3 border-b-2 border-ink bg-paper px-3 sm:px-4">
        <Link
          href={workHref(locale)}
          className="inline-flex min-h-11 items-center border-2 border-ink bg-signal px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink shadow-[3px_3px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          {copy.workBack}
        </Link>
        <BookingLink placement="project-demo" className="inline-flex min-h-11 shrink-0 items-center border-2 border-ink bg-signal px-3 py-2 font-mono text-[10px] font-bold uppercase text-ink shadow-[3px_3px_0_#111]">
          {copy.navCta}
        </BookingLink>
      </div>
      <iframe
        title={title}
        src={src}
        className="absolute inset-x-0 bottom-0 top-16 h-[calc(100dvh-4rem)] w-full border-0 bg-paper"
      />
    </div>
  )
}

