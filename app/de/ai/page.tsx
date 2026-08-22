import type { Metadata } from 'next'
import { LocalizedAIPage } from '@/components/LocalizedAIPage'

export const metadata: Metadata = {
  title: 'AI Lab | Vantura Studios',
  description: 'Datenschutzorientierte KI-Systeme, Agenten, lokale LLMs, hybride Architekturen, Automation und AI Product Engineering.',
  alternates: { canonical: '/de/ai/', languages: { en: '/ai/', de: '/de/ai/' } },
}

export default function AIPageDE() {
  return <LocalizedAIPage locale="de" />
}
