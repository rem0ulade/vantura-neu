import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vela Vermögen | Designstudie',
  description: 'Fiktive Vermögensberatungs-Website. Kein Finanzangebot. Konzeptentwurf von Vantura Studios.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <main style={{ margin: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/demos/vela-vermoegen.html"
        title="Vela Vermögen – Website-Konzept eines fiktiven Finanzdienstleisters"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </main>
  )
}
