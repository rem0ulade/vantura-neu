import Link from 'next/link'
import { NAV_LINKS } from '@/lib/content'
import { SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="text-[17px] font-semibold tracking-tight">{SITE.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
              Reporting, Dashboards und Automatisierung für Unternehmen, die ihre Daten
              verstehen wollen.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-line pt-6 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum/" className="transition-colors hover:text-ink">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="transition-colors hover:text-ink">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
