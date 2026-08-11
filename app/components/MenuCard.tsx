'use client'

import { useCart } from '../context/CartContext'

type Props = {
  id: number
  name: string
  price: number
  desc: string
  emoji: string
  category: string
}

function fmt(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export default function MenuCard({ id, name, price, desc, emoji, category }: Props) {
  const { addItem } = useCart()

  return (
    <div
      className="rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
      style={{ backgroundColor: '#fff', border: '1px solid #F08090' }}
    >
      <div
        className="w-10 md:w-12 h-10 md:h-12 rounded-full mb-3 md:mb-4 flex items-center justify-center text-lg md:text-xl flex-shrink-0"
        style={{ backgroundColor: '#F08090' }}
      >
        {emoji}
      </div>
      <span
        className="text-xs font-semibold uppercase tracking-wider mb-1"
        style={{ color: '#D4396B' }}
      >
        {category}
      </span>
      <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: '#4A2535' }}>{name}</h3>
      <p className="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed flex-1" style={{ color: '#7a5565' }}>{desc}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-sm md:text-base" style={{ color: '#D4396B' }}>{fmt(price)}</span>
        <button
          onClick={() => addItem({ id, name, price })}
          className="px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: '#4A2535', color: '#F5D5B0' }}
        >
          + Tambah
        </button>
      </div>
    </div>
  )
}
