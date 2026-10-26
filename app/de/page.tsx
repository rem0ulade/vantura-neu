import type { Metadata } from 'next'
import { WebdesignHome } from '@/components/webdesign/WebdesignHome'

export const metadata: Metadata = {
  title: { absolute: 'Webdesign für Unternehmen | Vantura Studios' },
  description:
    'Firmenwebsite erstellen lassen oder bestehende Website erneuern. Design und Umsetzung aus einer Hand. Jetzt kostenloses 30-Minuten-Erstgespräch buchen.',
  alternates: { canonical: '/', languages: { en: '/en/', de: '/', 'x-default': '/' } },
}

export default function DeHome() {
  return <WebdesignHome locale="de" />
}
