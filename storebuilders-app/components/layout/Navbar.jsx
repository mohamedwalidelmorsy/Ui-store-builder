'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #38C695 100%)' }}
          >
            SB
          </div>
          <span className="text-lg font-bold" style={{ color: '#1D3A63' }}>
            StoreBuilders
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors hover:text-[#38C695]"
              style={{ color: pathname === href ? '#38C695' : '#374151' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1D3A63]"
          >
            Sign in
          </Link>
          <Link
            href="/auth"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#38C695' }}
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-[#38C695] transition-colors hover:bg-gray-50 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-200 md:hidden ${
          mobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              style={{
                color: pathname === href ? '#38C695' : '#374151',
                backgroundColor: pathname === href ? 'rgba(56,198,149,0.08)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}

          <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-4">
            <Link
              href="/auth"
              className="rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Sign in
            </Link>
            <Link
              href="/auth"
              className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#38C695' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
