import type { NextConfig } from 'next'

// Für GitHub Pages wird die Seite als statischer Export gebaut und unter
// /<repo-name> ausgeliefert. Der Pfad kommt aus der CI-Umgebung, damit
// lokale Entwicklung und ein späterer Umzug auf eine eigene Domain ohne
// Codeänderung funktionieren.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
