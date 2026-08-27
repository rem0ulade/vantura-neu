import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arclicht | Designstudie',
  description: 'Fiktive Media-Agency-Website. Konzeptentwurf von Vantura Studios.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <main style={{ margin: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/demos/arclicht.html"
        title="Arclicht – Website-Konzept einer fiktiven Mediaagentur"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </main>
  )
}
