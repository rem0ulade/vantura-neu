'use client'

type Locale = 'en' | 'de'

const copy = {
  en: { product: 'Operations Hub Demo' },
  de: { product: 'Operations-Hub-Demo' },
} as const

export function LocalizedReportingDemo({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const demoSrc = `${basePath}/ops-hub-demo/index.html`

  return (
    <div className="h-dvh bg-[#1a2a42]">
      <iframe
        title={t.product}
        src={demoSrc}
        className="h-full w-full border-0 bg-[#1a2a42]"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  )
}
