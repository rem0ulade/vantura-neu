import type { Metadata } from 'next'
import { WebdesignHome } from '@/components/webdesign/WebdesignHome'

export const metadata: Metadata = {
  title: { absolute: 'Webdesign for businesses | Vantura Studios' },
  description: 'Company websites, redesigns and landing pages. Design and development with Vantura Studios. Book a free 30-minute discovery call.',
  alternates: { canonical: '/en/', languages: { en: '/en/', de: '/', 'x-default': '/' } },
  openGraph: { locale: 'en_US', url: '/en/', title: 'Webdesign for businesses | Vantura Studios' },
}

export default function EnglishHome() {
  return <WebdesignHome locale="en" />
}

