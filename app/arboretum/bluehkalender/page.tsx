import type { Metadata } from 'next'
import Link from 'next/link'
import { bloom } from '@/lib/arboretum'

export const metadata: Metadata = {
  title: 'Blühkalender',
  description: 'Von Kamelien im März bis zum Indian Summer im Oktober: der Blühkalender des Arboretum Ellerhoop.',
}

export default function BluehkalenderPage() {
  return (
    <main>
      <header className="ae-page-hero">
        <p className="ae-kicker">Jahr im Park</p>
        <h1>Kein Höhepunkt muss Zufall sein.</h1>
        <p>Von den ersten Frühblühern im März bis zum farbenfrohen Indian Summer im Oktober.</p>
      </header>
      <section className="ae-section">
        <div className="ae-wrap ae-narrow ae-prose">
          <p>
            Kamelien und Magnolien, Narzissenwiesen, Rosen im Juni, Lotos im Hochsommer: Der Kalender hilft, den richtigen Tag zu wählen.
          </p>
          <table className="ae-table">
            <thead><tr><th>Blüte</th><th>Zeit</th></tr></thead>
            <tbody>
              {bloom.map((row) => (
                <tr key={row.name}><td>{row.name}</td><td>{row.when}</td></tr>
              ))}
            </tbody>
          </table>
          <p><Link href="/arboretum/gaerten/">Themengärten ansehen</Link></p>
        </div>
      </section>
    </main>
  )
}
