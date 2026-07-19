import type { Metadata } from 'next'
import { LocalizedReporting } from '@/components/LocalizedReporting'

export const metadata: Metadata = {
  title: 'Reporting, Dashboards & Automatisierung | Vantura',
  description: 'Reporting, Dashboards, Forecasting und Automatisierung für Unternehmen, die ihr Geschäft schneller verstehen wollen.',
  alternates: { canonical: '/de/reporting/', languages: { en: '/reporting/', de: '/de/reporting/' } },
}

export default function GermanReportingPage() {
  return <LocalizedReporting locale="de" />
}