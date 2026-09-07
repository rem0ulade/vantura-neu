import type { Metadata } from 'next'
import { LocalizedReportingDemo } from '@/components/LocalizedReportingDemo'

export const metadata: Metadata = {
  title: 'Interaktive Business-Hub-Demo | Vantura',
  description: 'Live-Demo: Business Performance mit Management-Dashboard, Kunden-Accounts, Verträgen, Account Health und Growth-Pipeline — fiktive Beispieldaten.',
  alternates: { canonical: '/de/reporting/demo/', languages: { en: '/reporting/demo/', de: '/de/reporting/demo/' } },
}

export default function GermanReportingDemoPage() {
  return <LocalizedReportingDemo locale="de" />
}
