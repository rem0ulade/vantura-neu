import type { Metadata } from 'next'
import { LocalizedLanding } from '@/components/LocalizedLanding'

export const metadata: Metadata = {
  title: 'Vantura Studios | Daten, Websites & digitale Produkte',
  description: 'Entdecke Reporting und Dashboards, Websites, individuelle Projekte, ausgewählte Arbeiten und Grace von Vantura Studios.',
  alternates: { canonical: '/de/', languages: { en: '/', de: '/de/' } },
}

export default function GermanHome() {
  return <LocalizedLanding locale="de" />
}