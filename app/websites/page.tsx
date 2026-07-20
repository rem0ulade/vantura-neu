import type { Metadata } from 'next'
import { LocalizedServicePage } from '@/components/LocalizedServicePage'

export const metadata: Metadata = {
  title: 'Web Design | Vantura Studios',
  description: 'Responsive web design, landing pages and complete website implementation for small businesses and service providers.',
  alternates: { canonical: '/websites/', languages: { en: '/websites/', de: '/de/websites/' } },
}

export default function WebsitesPage() {
  return <LocalizedServicePage locale="en" type="websites" />
}
