'use client'

import { useState } from 'react'
import MenuCard from '../components/MenuCard'
import { menuData, categories } from '../data/menu'

export default function MenuPage() {
  const [active, setActive] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = menuData.filter((item) => {
    const matchCat = active === 'Semua' || item.category === active
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main style={{ backgroundColor: '#F5D5B0', minHeight: '100vh' }}>
      {/* Page header */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #4A2535 0%, #D4396B 100%)' }}
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-2" style={{ color: '#F08090' }}>
          Pilih Favoritmu
        </p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
          Menu Kami
        </h1>
      </section>

      <section className="py-10 px-6 max-w-6xl mx-auto">
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base" style={{ color: '#D4396B' }}>🔍</span>
          <input
            type="text"
            placeholder="Cari menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full outline-none text-sm shadow-md"
            style={{
              border: '2px solid #F08090',
              backgroundColor: '#fff',
              color: '#4A2535',
            }}
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                active === cat
                  ? { backgroundColor: '#D4396B', color: '#fff' }
                  : { backgroundColor: '#fff', color: '#4A2535', border: '1px solid #F08090' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm mb-6 text-center" style={{ color: '#7a5565' }}>
          Menampilkan <strong style={{ color: '#D4396B' }}>{filtered.length}</strong> item
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🍽️</p>
            <p style={{ color: '#7a5565' }}>Menu tidak ditemukan.</p>
          </div>
        )}
      </section>

      <footer className="py-8 px-6 text-center" style={{ backgroundColor: '#4A2535' }}>
        <p className="text-sm" style={{ color: '#F08090' }}>© 2026 Resto. All rights reserved.</p>
      </footer>
    </main>
  )
}
