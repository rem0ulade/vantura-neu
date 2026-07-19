import type { Metadata } from 'next'
import { LocalizedReporting } from '@/components/LocalizedReporting'

export const metadata: Metadata = {
  title: 'Reporting, Dashboards & Automation | Vantura',
  description: 'Reporting, dashboards, forecasting and automation for companies that want to understand their business faster.',
  alternates: { canonical: '/reporting/', languages: { en: '/reporting/', de: '/de/reporting/' } },
}

export default function ReportingPage() {
  return <LocalizedReporting locale="en" />
}