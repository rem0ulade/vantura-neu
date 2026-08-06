import type { Metadata } from 'next'
import { LocalizedReportingDemo } from '@/components/LocalizedReportingDemo'

export const metadata: Metadata = {
  title: 'Interaktive Operations-Hub-Demo | Vantura',
  description: 'Eine fiktive Operations-Demo für Performance-, Partner-, Vertrags- und Scorecard-Reporting.',
  alternates: { canonical: '/de/reporting/demo/', languages: { en: '/reporting/demo/', de: '/de/reporting/demo/' } },
}

export default function GermanReportingDemoPage() {
  return <LocalizedReportingDemo locale="de" />
}
