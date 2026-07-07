import './globals.css'

export const metadata = {
  title: 'Vantura | Reporting, Data & Automation',
  description: 'Reporting-, Dashboard- und Automatisierungslösungen für Unternehmen.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
