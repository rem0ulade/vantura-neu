import type { Metadata } from 'next'
import { LocalizedAIPage } from '@/components/LocalizedAIPage'

export const metadata: Metadata = {
  title: 'External AI Officer & AI Consulting | Vantura Studios',
  description: 'External AI leadership for companies: AI strategy, use-case portfolio, governance, enablement and hands-on implementation, backed by agents, local LLMs and privacy-first architectures.',
  alternates: { canonical: '/ai/', languages: { en: '/ai/', de: '/de/ai/' } },
}

export default function AIPage() {
  return <LocalizedAIPage locale="en" />
}
