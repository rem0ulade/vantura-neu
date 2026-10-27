'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/lib/webdesign-content'

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (nextLocale: Locale) => {
    const cleanPath = pathname.replace(/^\/(de|en)(?=\/|$)/, '') || '/'
    const nextPath = cleanPath === '/'
      ? (nextLocale === 'de' ? '/' : '/en/')
      : (nextLocale === 'de' ? `/de${cleanPath}` : cleanPath)
    router.push(`${nextPath}${window.location.search}${window.location.hash}`)
  }

  return (
    <div className="inline-flex border-2 border-ink bg-paper p-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`px-2.5 py-1.5 transition ${locale === 'en' ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/10'}`}
        aria-label={locale === 'de' ? 'Auf Englisch wechseln' : 'Switch to English'}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('de')}
        className={`px-2.5 py-1.5 transition ${locale === 'de' ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/10'}`}
        aria-label={locale === 'de' ? 'Auf Deutsch wechseln' : 'Switch to German'}
        aria-pressed={locale === 'de'}
      >
        DE
      </button>
    </div>
  )
}

