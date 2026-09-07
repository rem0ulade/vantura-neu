import type { Metadata } from 'next'
import { LocalizedReportingDemo } from '@/components/LocalizedReportingDemo'

export const metadata: Metadata = {
  title: 'Interactive Business Hub Demo | Vantura',
  description: 'Live demo: business performance with management dashboard, customer accounts, contracts, account health and growth pipeline — fictional sample data.',
  alternates: { canonical: '/reporting/demo/', languages: { en: '/reporting/demo/', de: '/de/reporting/demo/' } },
}

export default function ReportingDemoPage() {
  return <LocalizedReportingDemo locale="en" />
}
