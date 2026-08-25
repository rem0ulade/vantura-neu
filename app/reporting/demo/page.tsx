import type { Metadata } from 'next'
import { LocalizedReportingDemo } from '@/components/LocalizedReportingDemo'

export const metadata: Metadata = {
  title: 'Interactive Operations Hub Demo | Vantura',
  description: 'Live demo: partner intelligence with dashboard, contracts and scorecard — fictional sample data.',
  alternates: { canonical: '/reporting/demo/', languages: { en: '/reporting/demo/', de: '/de/reporting/demo/' } },
}

export default function ReportingDemoPage() {
  return <LocalizedReportingDemo locale="en" />
}
