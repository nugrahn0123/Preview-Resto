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
        className="fixed right-0 top-0 h-full w-full max-w-sm z-50 flex flex-col shadow-2xl"
        style={{ backgroundColor: '#F5D5B0' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ backgroundColor: '#4A2535' }}>
          <h2 className="text-lg font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
            🛒 Keranjang
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl leading-none hover:opacity-70"
            style={{ color: '#F08090' }}
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">🍽️</p>
              <p className="text-sm" style={{ color: '#7a5565' }}>Keranjang masih kosong</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ backgroundColor: '#fff', border: '1px solid #F08090' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate" style={{ color: '#4A2535' }}>{item.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#D4396B' }}>{fmt(item.price)}</p>
                </div>

                {/* Qty control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold hover:opacity-80"
                    style={{ backgroundColor: '#F08090', color: '#fff' }}
                  >
                    −
                  </button>
                  <span className="w-5 text-center text-sm font-semibold" style={{ color: '#4A2535' }}>
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold hover:opacity-80"
                    style={{ backgroundColor: '#D4396B', color: '#fff' }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-lg leading-none hover:opacity-70 ml-1"
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
          <div className="px-6 py-5 space-y-3" style={{ borderTop: '2px solid #F08090' }}>
            <div className="flex justify-between items-center">
              <span className="font-semibold" style={{ color: '#4A2535' }}>Total</span>
              <span className="text-xl font-bold" style={{ color: '#D4396B', fontFamily: 'Georgia, serif' }}>
                {fmt(total)}
              </span>
            </div>
            <button
              className="w-full py-3 rounded-full font-bold text-base transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: '#D4396B', color: '#fff' }}
              onClick={() => { alert('Pesanan Anda telah dikirim! Terima kasih 🎉'); clearCart(); setIsOpen(false) }}
            >
              Pesan Sekarang
            </button>
            <button
              className="w-full py-2 text-xs text-center hover:opacity-70"
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
