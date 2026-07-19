'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/content'
import { CONTACT_HREF, SITE } from '@/lib/site'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-line bg-white/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="text-[17px] font-semibold tracking-tight">
          {SITE.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/websites"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Websites
          </a>
          <a
            href={CONTACT_HREF}
            className="rounded-full bg-ink px-4.5 py-2 text-sm font-medium text-white transition-all hover:bg-navy"
          >
            Erstgespräch
          </a>
        </div>

        <button
          className="-mr-2 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-line bg-white md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-paper"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/websites"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-paper"
              >
                Websites
              </a>
              <a
                href={CONTACT_HREF}
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-ink px-4 py-3 text-center text-[15px] font-medium text-white"
              >
                Kostenloses Erstgespräch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
