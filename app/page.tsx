'use client'

import Link from 'next/link'
import MenuCard from './components/MenuCard'
import { menuData } from './data/menu'

const featured = menuData.filter((_, i) => [0, 1, 2, 4, 11, 13].includes(i))

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F5D5B0' }}>

      {/* Hero */}
      <section
        className="flex items-center justify-center text-center py-16 md:py-32 px-4 md:px-6"
        style={{ background: 'linear-gradient(135deg, #4A2535 0%, #D4396B 100%)' }}
      >
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#F08090' }}>
            Fine Dining Experience
          </p>
          <h1
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}
          >
            Cita Rasa yang{' '}
            <span style={{ color: '#F08090' }}>Tak Terlupakan</span>
          </h1>
          <p className="text-sm md:text-base mb-6 md:mb-10" style={{ color: '#F5D5B0', opacity: 0.85 }}>
            Nikmati pengalaman kuliner terbaik dengan bahan-bahan segar pilihan dan sentuhan keahlian chef kami.
          </p>
          <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
            <Link
              href="/menu"
              className="px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg"
              style={{ backgroundColor: '#F5D5B0', color: '#4A2535' }}
            >
              Lihat Menu
            </Link>
            <Link
              href="/reservasi"
              className="px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base border-2 transition-all duration-200 hover:opacity-80 active:scale-95"
              style={{ borderColor: '#F5D5B0', color: '#F5D5B0' }}
            >
              Buat Reservasi
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 px-4 md:px-6" style={{ backgroundColor: '#D4396B' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
          {[['500+', 'Menu Tersedia'], ['10+', 'Tahun Pengalaman'], ['50K+', 'Pelanggan Puas']].map(([num, label]) => (
            <div key={label} className="py-2">
              <p className="text-3xl md:text-4xl font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>{num}</p>
              <p className="text-xs md:text-sm mt-1" style={{ color: '#F08090' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <p className="uppercase tracking-[0.2em] text-xs md:text-sm mb-1 md:mb-2" style={{ color: '#D4396B' }}>Pilihan Kami</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
              Menu Unggulan
            </h2>
            <div className="mx-auto mt-3 md:mt-4 h-1 w-16 rounded-full" style={{ backgroundColor: '#D4396B' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featured.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/menu"
              className="px-8 md:px-10 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base inline-block transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#D4396B', color: '#fff' }}
            >
              Lihat Semua Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Reservasi */}
      <section
        className="py-12 md:py-20 px-4 md:px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #4A2535 0%, #D4396B 100%)' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
          Siap Menikmati Makan Malam?
        </h2>
        <p className="text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto" style={{ color: '#F08090' }}>
          Reservasi meja Anda sekarang dan rasakan pengalaman kuliner yang tak terlupakan bersama kami.
        </p>
        <Link
          href="/reservasi"
          className="px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base inline-block transition-all duration-200 hover:opacity-90 active:scale-95 shadow-xl"
          style={{ backgroundColor: '#F5D5B0', color: '#4A2535' }}
        >
          Reservasi Sekarang
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 text-center" style={{ backgroundColor: '#4A2535' }}>
        <p className="text-xs md:text-sm" style={{ color: '#F08090' }}>
          © 2026 Resto. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
