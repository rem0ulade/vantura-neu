import type { Metadata } from 'next'
import { LocalizedServicePage } from '@/components/LocalizedServicePage'

export const metadata: Metadata = {
  title: 'Websites | Vantura',
  description: 'Modern, mobile-first websites for small businesses and service providers.',
  alternates: { canonical: '/websites/', languages: { en: '/websites/', de: '/de/websites/' } },
}

export default function WebsitesPage() {
  return <LocalizedServicePage locale="en" type="websites" />
}
