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
    title: item.title.de,
    description: item.blurb.de,
    robots: { index: false, follow: true },
  }
}

export default async function DeWorkDemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getWorkItem(slug)
  if (!item) notFound()

  return <WorkDemoShell locale="de" title={item.title.de} src={item.publicPath} />
}
