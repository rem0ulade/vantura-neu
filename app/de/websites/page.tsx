import type { Metadata } from 'next'
import { LocalizedServicePage } from '@/components/LocalizedServicePage'

export const metadata: Metadata = {
  title: 'Webdesign | Vantura Studios',
  description: 'Responsives Webdesign, Landingpages und vollständige Website-Umsetzung für kleine Unternehmen und Dienstleister.',
  alternates: { canonical: '/de/websites/', languages: { en: '/websites/', de: '/de/websites/' } },
}

export default function GermanWebsitesPage() {
  return <LocalizedServicePage locale="de" type="websites" />
}
