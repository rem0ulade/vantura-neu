'use client'

type Locale = 'en' | 'de'

const copy = {
  en: { product: 'Business Hub Demo' },
  de: { product: 'Business-Hub-Demo' },
} as const

export function LocalizedReportingDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const demoSrc = `${basePath}/ops-hub-demo/index.html`

  return (
    <div className="h-dvh bg-[#f4f7fb]">
      <iframe
        title={t.product}
        src={demoSrc}
        className="h-full w-full border-0 bg-[#f4f7fb]"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  )
}
