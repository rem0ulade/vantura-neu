'use client'

import { usePathname } from 'next/navigation'
import { ClosedSite } from '@/components/ClosedSite'

// Keep the closure notice visible on old direct links as well.
export function SiteStatus({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()?.replace(/\/$/, '')
  const isLegalPage = pathname === '/impressum' || pathname === '/datenschutz'

  return isLegalPage ? children : <ClosedSite />
}
