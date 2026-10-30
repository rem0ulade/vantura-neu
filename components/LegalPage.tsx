import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function LegalPage({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <main className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} />
            Zurück zur Startseite
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight">{title}</h1>
          <div className="mt-10 space-y-4 text-[15px] leading-7 text-muted [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-ink [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink">
            {children}
          </div>
        </Container>
      </main>
      <footer className="flex flex-wrap justify-center gap-6 px-6 pb-8 text-sm text-muted">
        <Link href="/impressum/" className="underline underline-offset-4">Impressum</Link>
        <Link href="/datenschutz/" className="underline underline-offset-4">Datenschutz</Link>
      </footer>
    </>
  )
}
