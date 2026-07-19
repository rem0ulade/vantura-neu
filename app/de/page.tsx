import type { Metadata } from 'next'
import { LocalizedHome } from '@/components/LocalizedHome'

export const metadata: Metadata = {
  title: 'Reporting, Dashboards & Automatisierung | Vantura',
  description: 'Reporting, Dashboards, Forecasting und Automatisierung für Unternehmen, die ihr Geschäft schneller verstehen wollen.',
  alternates: { canonical: '/de/', languages: { en: '/', de: '/de/' } },
}

export default function GermanHome() {
  return <LocalizedHome locale="de" />
}
