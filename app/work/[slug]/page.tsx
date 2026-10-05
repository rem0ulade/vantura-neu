import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { WorkDemoShell } from '@/components/WorkDemoShell'
import { getWorkItem, getWorkSlugs } from '@/lib/work'

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getWorkItem(slug)
  if (!item) return {}
  return {
    title: item.title.en,
    description: item.blurb.en,
    robots: { index: false, follow: true },
  }
}

export default async function WorkDemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getWorkItem(slug)
  if (!item) notFound()

  return <WorkDemoShell locale="en" title={item.title.en} src={item.publicPath} />
}
