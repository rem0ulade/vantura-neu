import type { Metadata } from 'next'
import { LocalizedLanding } from '@/components/LocalizedLanding'

export const metadata: Metadata = {
  title: 'Vantura Studios | Homepage Test',
  robots: { index: false, follow: false },
}

export default function TestHome() {
  return <LocalizedLanding locale="en" test />
}
