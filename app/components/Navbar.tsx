'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '../context/CartContext'

const navLinks = [
  { href: '/',          label: 'Beranda' },
  { href: '/menu',      label: 'Menu' },
  { href: '/reservasi', label: 'Reservasi' },
  { href: '/kontak',    label: 'Kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { count, setIsOpen } = useCart()

  return (
    <nav style={{ backgroundColor: '#4A2535' }} className="sticky top-0 z-30 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
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

        <button
          onClick={() => setIsOpen(true)}
          className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#D4396B', color: '#fff' }}
        >
          🛒 Keranjang
          {count > 0 && (
            <span
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
              style={{ backgroundColor: '#F5D5B0', color: '#4A2535' }}
            >
              {count}
            </span>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex gap-4 px-6 pb-3">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-xs font-medium"
            style={{ color: pathname === href ? '#F5D5B0' : '#F08090' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
