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

  const inputClass = "w-full px-4 py-3 rounded-xl outline-none text-sm"
  const inputStyle = { border: '2px solid #F08090', backgroundColor: '#fff', color: '#4A2535' }

  return (
    <main style={{ backgroundColor: '#F5D5B0', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #4A2535 0%, #D4396B 100%)' }}
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-2" style={{ color: '#F08090' }}>
          Hubungi Kami
        </p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
          Kontak
        </h1>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
            Temukan Kami
          </h2>
          {[
            { icon: '📍', label: 'Alamat', value: 'Jl. Kuliner No. 10, Jakarta Selatan, DKI Jakarta 12345' },
            { icon: '📞', label: 'Telepon', value: '+62 21 1234 5678' },
            { icon: '📧', label: 'Email', value: 'hello@resto.id' },
            { icon: '🕐', label: 'Jam Buka', value: 'Senin – Jumat: 11.00 – 22.00\nSabtu – Minggu: 10.00 – 23.00' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                style={{ backgroundColor: '#F08090' }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#D4396B' }}>{label}</p>
                <p className="text-sm whitespace-pre-line" style={{ color: '#4A2535' }}>{value}</p>
              </div>
            </div>
          ))}

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#D4396B' }}>Media Sosial</p>
            <div className="flex gap-3">
              {[['📘', 'Facebook'], ['📸', 'Instagram'], ['🐦', 'Twitter']].map(([icon, name]) => (
                <button
                  key={name}
                  className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1 transition-all hover:opacity-80"
                  style={{ backgroundColor: '#4A2535', color: '#F5D5B0' }}
                >
                  {icon} {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="text-center py-16 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center" style={{ backgroundColor: '#fff', border: '2px solid #D4396B' }}>
              <p className="text-4xl mb-3">✉️</p>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#4A2535' }}>Pesan Terkirim!</h3>
              <p className="text-sm" style={{ color: '#7a5565' }}>Kami akan segera menghubungi Anda.</p>
              <button
                onClick={() => { setForm({ nama: '', email: '', pesan: '' }); setSent(false) }}
                className="mt-6 px-6 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#D4396B', color: '#fff' }}
              >
                Kirim Lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 shadow-lg space-y-4" style={{ backgroundColor: '#fff', border: '1px solid #F08090' }}>
              <h2 className="text-xl font-bold" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
                Kirim Pesan
              </h2>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4396B' }}>Nama</label>
                <input required name="nama" value={form.nama} onChange={handleChange}
                  placeholder="Nama Anda" className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4396B' }}>Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="email@contoh.com" className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4396B' }}>Pesan</label>
                <textarea required name="pesan" value={form.pesan} onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5} className={`${inputClass} resize-none`} style={inputStyle}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-base transition-all hover:opacity-90 shadow-md"
                style={{ backgroundColor: '#D4396B', color: '#fff' }}
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ backgroundColor: '#4A2535' }}>
        <p className="text-sm" style={{ color: '#F08090' }}>© 2026 Resto. All rights reserved.</p>
      </footer>
    </main>
  )
}
