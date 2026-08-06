import type { Metadata } from 'next'
import { LocalizedReportingDemo } from '@/components/LocalizedReportingDemo'

export const metadata: Metadata = {
  title: 'Interactive Operations Hub Demo | Vantura',
  description: 'Explore a fictional operations dashboard for performance, partner, contract and scorecard reporting.',
  alternates: { canonical: '/reporting/demo/', languages: { en: '/reporting/demo/', de: '/de/reporting/demo/' } },
}

export default function ReportingDemoPage() {
  return <LocalizedReportingDemo locale="en" />
}
