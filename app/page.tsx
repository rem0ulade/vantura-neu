import type { Metadata } from 'next'
import { LocalizedHome } from '@/components/LocalizedHome'

export const metadata: Metadata = {
  title: 'Reporting, Dashboards & Automation | Vantura',
  description: 'Reporting, dashboards, forecasting and automation for companies that want to understand their business faster.',
  alternates: { canonical: '/', languages: { en: '/', de: '/de/' } },
}

export default function Home() {
  return <LocalizedHome locale="en" />
}
