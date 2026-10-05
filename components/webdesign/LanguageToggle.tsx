'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/lib/webdesign-content'

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (nextLocale: Locale) => {
    localStorage.setItem('vantura-locale', nextLocale)
    const cleanPath = pathname.replace(/^\/de(?=\/|$)/, '') || '/'
    router.push(nextLocale === 'de' ? `/de${cleanPath === '/' ? '/' : cleanPath}` : cleanPath)
  }

  return (
    <div className="inline-flex border-2 border-ink bg-paper p-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`px-2.5 py-1.5 transition ${locale === 'en' ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/10'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('de')}
        className={`px-2.5 py-1.5 transition ${locale === 'de' ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/10'}`}
        aria-label="Auf Deutsch wechseln"
      >
        DE
      </button>
    </div>
  )
}
