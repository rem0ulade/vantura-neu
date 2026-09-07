import type { Metadata } from 'next'
import { LocalizedLanding } from '@/components/LocalizedLanding'

export const metadata: Metadata = {
  title: 'Vantura Studios | Daten, KI, Software & Design',
  description: 'Reporting, externe KI-Verantwortung, KI-Systeme, Softwareprodukte und digitales Design — Strategie und Umsetzung aus einem inhabergeführten Studio.',
  alternates: { canonical: '/de/', languages: { en: '/', de: '/de/' } },
}

export default function GermanHome() {
  return <LocalizedLanding locale="de" />
}