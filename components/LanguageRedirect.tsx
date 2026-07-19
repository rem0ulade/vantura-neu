'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageRedirect({ locale }: { locale: 'en' | 'de' }) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem('vantura-locale') as 'en' | 'de' | null
    const detected: 'en' | 'de' = navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
    const preferred = saved ?? detected
    if (!saved) localStorage.setItem('vantura-locale', preferred)

    if (preferred === locale) return

    const cleanPath = pathname.replace(/^\/de(?=\/|$)/, '') || '/'
    router.replace(preferred === 'de' ? `/de${cleanPath === '/' ? '' : cleanPath}` : cleanPath)
  }, [locale, pathname, router])

  return null
}
