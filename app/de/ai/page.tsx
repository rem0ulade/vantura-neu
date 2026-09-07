import type { Metadata } from 'next'
import { LocalizedAIPage } from '@/components/LocalizedAIPage'

export const metadata: Metadata = {
  title: 'KI-Projekte & externer AI Officer | Vantura Studios',
  description: 'KI-Projekte für Unternehmen: Dashboards, interne Tools, Automationen und KI-Workflows – ergänzt um Strategie, Governance, Enablement und externe AI-Officer-Begleitung bei Bedarf.',
  alternates: { canonical: '/de/ai/', languages: { en: '/ai/', de: '/de/ai/' } },
}

export default function AIPageDE() {
  return <LocalizedAIPage locale="de" />
}
