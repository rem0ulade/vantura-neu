import type { Metadata } from 'next'
import { WebdesignHome } from '@/components/webdesign/WebdesignHome'

export const metadata: Metadata = {
  title: 'Vantura Studios | Webdesign & Online Shops',
  description:
    'Webdesign, online shops and relaunches — Kinetic Brutal craft with motion and clear CTAs.',
  alternates: { canonical: '/', languages: { en: '/', de: '/de/' } },
}

export default function Home() {
  return <WebdesignHome locale="en" />
}
