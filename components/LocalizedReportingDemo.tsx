'use client'

import Link from 'next/link'

type Locale = 'en' | 'de'

const copy = {
  en: {
    product: 'Operations Hub Demo',
    back: 'Back to reporting',
    notice: 'Fictional sample data · login is shown on the next screen',
  },
  de: {
    product: 'Operations-Hub-Demo',
    back: 'Zurück zu Reporting',
    notice: 'Fiktive Beispieldaten · Login folgt im nächsten Bildschirm',
  },
} as const

export function LocalizedReportingDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const reportingHref = locale === 'de' ? '/de/reporting/' : '/reporting/'
  const languageHref = locale === 'de' ? '/reporting/demo/' : '/de/reporting/demo/'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const demoSrc = `${basePath}/ops-hub-demo/`

  return (
    <div className="flex h-dvh flex-col bg-[#07101f] text-white">
      <header className="shrink-0 border-b border-white/10 bg-[#091426]/95">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={reportingHref}
              className="inline-flex items-center text-xs font-medium text-white/55 hover:text-white"
            >
              ← {t.back}
            </Link>
            <p className="hidden truncate text-sm font-medium text-white/80 sm:block">{t.product}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="hidden text-[11px] text-white/40 lg:block">{t.notice}</p>
            <Link
              href={languageHref}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/65 hover:text-white"
            >
              {locale === 'de' ? 'EN' : 'DE'}
            </Link>
          </div>
        </div>
      </header>
      <iframe
        title={t.product}
        src={demoSrc}
        className="min-h-0 w-full flex-1 border-0 bg-[#0b1220]"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  )
}
