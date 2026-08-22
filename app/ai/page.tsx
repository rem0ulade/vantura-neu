import type { Metadata } from 'next'
import { LocalizedAIPage } from '@/components/LocalizedAIPage'

export const metadata: Metadata = {
  title: 'AI Lab | Vantura Studios',
  description: 'Privacy-first AI systems, agents, local LLMs, hybrid architectures, automation and AI product engineering.',
  alternates: { canonical: '/ai/', languages: { en: '/ai/', de: '/de/ai/' } },
}

export default function AIPage() {
  return <LocalizedAIPage locale="en" />
}
