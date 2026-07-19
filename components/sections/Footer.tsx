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
              Reporting, dashboards and automation for companies that want to understand their data.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
            <Link href="/projekt/" className="transition-colors hover:text-ink">
              Projects
            </Link>
            <Link href="/websites/" className="transition-colors hover:text-ink">
              Websites
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-line pt-6 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum/" className="transition-colors hover:text-ink">
              Legal Notice
            </Link>
            <Link href="/datenschutz/" className="transition-colors hover:text-ink">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
