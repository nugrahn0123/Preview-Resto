'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

const navLinks = [
  { href: '/',          label: 'Beranda' },
  { href: '/menu',      label: 'Menu' },
  { href: '/reservasi', label: 'Reservasi' },
  { href: '/kontak',    label: 'Kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { count, setIsOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: '#4A2535' }} className="sticky top-0 z-30 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
          RESTO
        </Link>

        <div className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: pathname === href ? '#F5D5B0' : '#F08090' }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="relative px-3 md:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#D4396B', color: '#fff' }}
          >
            <span className="hidden md:inline">🛒 Keranjang</span>
            <span className="md:hidden">🛒</span>
            {count > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
                style={{ backgroundColor: '#F5D5B0', color: '#4A2535' }}
              >
                {count}
              </span>
            )}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all hover:opacity-80"
            style={{ color: '#F5D5B0' }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile nav - dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-opacity-20" style={{ borderTopColor: '#F08090' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname === href ? '#F5D5B0' : '#F08090',
                backgroundColor: pathname === href ? 'rgba(212, 57, 107, 0.2)' : 'transparent'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
