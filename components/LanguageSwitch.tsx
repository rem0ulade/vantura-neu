'use client'

import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitch({ locale }: { locale: 'en' | 'de' }) {
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (nextLocale: 'en' | 'de') => {
    localStorage.setItem('vantura-locale', nextLocale)
    const cleanPath = pathname.replace(/^\/de(?=\/|$)/, '') || '/'
    router.push(nextLocale === 'de' ? `/de${cleanPath === '/' ? '' : cleanPath}` : cleanPath)
  }

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white p-1 text-xs font-semibold">
      <button type="button" onClick={() => changeLanguage('en')} className={`rounded-full px-2.5 py-1.5 transition ${locale === 'en' ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`} aria-label="Switch to English">EN</button>
      <button type="button" onClick={() => changeLanguage('de')} className={`rounded-full px-2.5 py-1.5 transition ${locale === 'de' ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`} aria-label="Auf Deutsch wechseln">DE</button>
    </div>
  )
}
