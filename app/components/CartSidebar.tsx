'use client'

import { useCart } from '../context/CartContext'

function fmt(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export default function CartSidebar() {
  const { items, removeItem, updateQty, clearCart, total, isOpen, setIsOpen } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(74,37,53,0.5)' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className="fixed right-0 top-0 h-full w-full max-w-xs md:max-w-sm z-50 flex flex-col shadow-2xl"
        style={{ backgroundColor: '#F5D5B0' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5" style={{ backgroundColor: '#4A2535' }}>
          <h2 className="text-lg font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
            🛒 Keranjang
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl leading-none hover:opacity-70 transition-opacity"
            style={{ color: '#F08090' }}
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-3 md:space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-3xl md:text-4xl mb-3">🍽️</p>
              <p className="text-xs md:text-sm" style={{ color: '#7a5565' }}>Keranjang masih kosong</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl"
                style={{ backgroundColor: '#fff', border: '1px solid #F08090' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-xs md:text-sm truncate" style={{ color: '#4A2535' }}>{item.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#D4396B' }}>{fmt(item.price)}</p>
                </div>

                {/* Qty control */}
                <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-6 md:w-7 h-6 md:h-7 rounded-full flex items-center justify-center text-xs md:text-sm font-bold hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: '#F08090', color: '#fff' }}
                  >
                    −
                  </button>
                  <span className="w-4 md:w-5 text-center text-xs md:text-sm font-semibold" style={{ color: '#4A2535' }}>
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-6 md:w-7 h-6 md:h-7 rounded-full flex items-center justify-center text-xs md:text-sm font-bold hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: '#D4396B', color: '#fff' }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-base leading-none hover:opacity-70 transition-opacity ml-1"
                  style={{ color: '#4A2535' }}
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-4 md:px-6 py-4 md:py-5 space-y-2 md:space-y-3" style={{ borderTop: '2px solid #F08090' }}>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm md:text-base" style={{ color: '#4A2535' }}>Total</span>
              <span className="text-lg md:text-xl font-bold" style={{ color: '#D4396B', fontFamily: 'Georgia, serif' }}>
                {fmt(total)}
              </span>
            </div>
            <button
              className="w-full py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all hover:opacity-90 active:scale-95 shadow-lg"
              style={{ backgroundColor: '#D4396B', color: '#fff' }}
              onClick={() => { alert('Pesanan Anda telah dikirim! Terima kasih 🎉'); clearCart(); setIsOpen(false) }}
            >
              Pesan Sekarang
            </button>
            <button
              className="w-full py-2 text-xs text-center hover:opacity-70 transition-opacity"
              style={{ color: '#7a5565' }}
              onClick={clearCart}
            >
              Kosongkan keranjang
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
