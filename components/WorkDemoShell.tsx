'use client'

import Link from 'next/link'
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
      <Link
        href={workHref(locale)}
        className="fixed left-4 top-4 z-50 border-2 border-ink bg-signal px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_#111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
      >
        {copy.workBack}
      </Link>
      <iframe title={title} src={src} className="absolute inset-0 h-full w-full border-0 bg-paper" />
    </div>
  )
}
