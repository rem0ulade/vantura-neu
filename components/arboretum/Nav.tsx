'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AE } from '@/lib/arboretum'

const links = [
  ['Start', '/arboretum/'],
  ['Besuchen', '/arboretum/besucherinfos/'],
  ['Gärten', '/arboretum/gaerten/'],
  ['Veranstaltungen', '/arboretum/veranstaltungen/'],
  ['Verein', '/arboretum/verein/'],
] as const

export function ArboretumNav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="ae-nav">
      <Link className="ae-brand" href="/arboretum/" onClick={() => setOpen(false)}>
        <img src="/arboretum/logo.png" alt="" />
        <span>Arboretum Ellerhoop</span>
      </Link>
      <button className="ae-menu-btn" type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {open ? 'Schließen' : 'Menü'}
      </button>
      <nav className={`ae-nav-links${open ? ' open' : ''}`} aria-label="Hauptnavigation">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a className="ae-cta" href={AE.shop} target="_blank" rel="noreferrer">
          Tickets
        </a>
      </nav>
    </header>
  )
}
