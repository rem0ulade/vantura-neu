import type { Metadata } from 'next'
import { LocalizedAIPage } from '@/components/LocalizedAIPage'

export const metadata: Metadata = {
  title: 'Externer AI Officer & KI-Beratung | Vantura Studios',
  description: 'Externe KI-Verantwortung für Unternehmen: KI-Strategie, Use-Case-Portfolio, Governance, Enablement und technische Umsetzung – ergänzt um Agenten, lokale LLMs und datenschutzorientierte Architekturen.',
  alternates: { canonical: '/de/ai/', languages: { en: '/ai/', de: '/de/ai/' } },
}

export default function AIPageDE() {
  return <LocalizedAIPage locale="de" />
}
