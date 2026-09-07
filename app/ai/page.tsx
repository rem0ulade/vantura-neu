import type { Metadata } from 'next'
import { LocalizedAIPage } from '@/components/LocalizedAIPage'

export const metadata: Metadata = {
  title: 'AI Projects, AI Officer & Consulting | Vantura Studios',
  description: 'AI projects for companies: dashboards, internal tools, automations and AI workflows — with strategy, governance, enablement and external AI Officer support when needed.',
  alternates: { canonical: '/ai/', languages: { en: '/ai/', de: '/de/ai/' } },
}

export default function AIPage() {
  return <LocalizedAIPage locale="en" />
}
