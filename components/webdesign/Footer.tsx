import Link from 'next/link'
import type { Locale } from '@/lib/webdesign-content'
import { t } from '@/lib/webdesign-content'

export function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale)

  return (
    <footer className="bg-ink py-10 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em]">Vantura Studios</p>
          <p className="mt-2 font-mono text-xs text-paper/55">{copy.footerTag}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs font-bold uppercase tracking-[0.12em]">
          <Link href="/impressum/" className="hover:text-signal">
            {copy.legal}
          </Link>
          <Link href="/datenschutz/" className="hover:text-signal">
            {copy.privacy}
          </Link>
          <a href={copy.contactHref} className="hover:text-signal">
            {copy.ctaButton}
          </a>
        </nav>
      </div>
    </footer>
  )
}
