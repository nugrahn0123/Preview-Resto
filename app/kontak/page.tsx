'use client'

import { useState } from 'react'

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl outline-none text-sm"
  const inputStyle = { border: '2px solid #F08090', backgroundColor: '#fff', color: '#4A2535' }

  return (
    <main style={{ backgroundColor: '#F5D5B0', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="py-12 md:py-16 px-4 md:px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #4A2535 0%, #D4396B 100%)' }}
      >
        <p className="uppercase tracking-[0.2em] text-xs md:text-sm mb-1 md:mb-2" style={{ color: '#F08090' }}>
          Hubungi Kami
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
          Kontak
        </h1>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Info */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
            Temukan Kami
          </h2>
          {[
            { icon: '📍', label: 'Alamat', value: 'Jl. Kuliner No. 10, Jakarta Selatan, DKI Jakarta 12345' },
            { icon: '📞', label: 'Telepon', value: '+62 21 1234 5678' },
            { icon: '📧', label: 'Email', value: 'hello@resto.id' },
            { icon: '🕐', label: 'Jam Buka', value: 'Senin – Jumat: 11.00 – 22.00\nSabtu – Minggu: 10.00 – 23.00' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex gap-2 md:gap-4">
              <div
                className="w-9 md:w-11 h-9 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 text-base md:text-lg"
                style={{ backgroundColor: '#F08090' }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5 md:mb-1" style={{ color: '#D4396B' }}>{label}</p>
                <p className="text-xs md:text-sm whitespace-pre-line" style={{ color: '#4A2535' }}>{value}</p>
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="pt-2 md:pt-0">
            <p className="text-xs font-semibold uppercase tracking-wider mb-2 md:mb-3" style={{ color: '#D4396B' }}>Media Sosial</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[['📘', 'Facebook'], ['📸', 'Instagram'], ['🐦', 'Twitter']].map(([icon, name]) => (
                <button
                  key={name}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 transition-all hover:opacity-80 active:scale-95"
                  style={{ backgroundColor: '#4A2535', color: '#F5D5B0' }}
                >
                  {icon} <span className="hidden sm:inline">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="text-center py-12 md:py-16 rounded-lg md:rounded-2xl shadow-lg h-full flex flex-col items-center justify-center" style={{ backgroundColor: '#fff', border: '2px solid #D4396B' }}>
              <p className="text-4xl md:text-5xl mb-2 md:mb-3">✉️</p>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2" style={{ color: '#4A2535' }}>Pesan Terkirim!</h3>
              <p className="text-xs md:text-sm" style={{ color: '#7a5565' }}>Kami akan segera menghubungi Anda.</p>
              <button
                onClick={() => { setForm({ nama: '', email: '', pesan: '' }); setSent(false) }}
                className="mt-4 md:mt-6 px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#D4396B', color: '#fff' }}
              >
                Kirim Lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-lg md:rounded-2xl p-4 md:p-8 shadow-lg space-y-3 md:space-y-4" style={{ backgroundColor: '#fff', border: '1px solid #F08090' }}>
              <h2 className="text-lg md:text-xl font-bold" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
                Kirim Pesan
              </h2>
              <div className="space-y-1">
                <label htmlFor="nama" className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4396B' }}>Nama</label>
                <input id="nama" required name="nama" value={form.nama} onChange={handleChange}
                  placeholder="Nama Anda" className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4396B' }}>Email</label>
                <input id="email" required type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="email@contoh.com" className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label htmlFor="pesan" className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4396B' }}>Pesan</label>
                <textarea id="pesan" required name="pesan" value={form.pesan} onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={4}
                  className={`${inputClass} resize-none`} style={inputStyle}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all hover:opacity-90 active:scale-95 shadow-md"
                style={{ backgroundColor: '#D4396B', color: '#fff' }}
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-6 md:py-8 px-4 md:px-6 text-center" style={{ backgroundColor: '#4A2535' }}>
        <p className="text-xs md:text-sm" style={{ color: '#F08090' }}>© 2026 Resto. All rights reserved.</p>
      </footer>
    </main>
  )
}
