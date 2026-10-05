import type { Metadata } from 'next'
import { WebdesignHome } from '@/components/webdesign/WebdesignHome'

export const metadata: Metadata = {
  title: 'Vantura Studios | Webdesign & Online-Shops',
  description:
    'Webdesign, Online-Shops und Relaunches — mit Craft, Motion und klarem Call-to-Action.',
  alternates: { canonical: '/de/', languages: { en: '/', de: '/de/' } },
}

export default function DeHome() {
  return <WebdesignHome locale="de" />
}
