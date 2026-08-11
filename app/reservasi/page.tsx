'use client'

import { useState } from 'react'

type FormData = {
  nama: string
  email: string
  telepon: string
  tanggal: string
  waktu: string
  tamu: string
  catatan: string
}

const initialForm: FormData = {
  nama: '', email: '', telepon: '', tanggal: '', waktu: '19:00', tamu: '2', catatan: ''
}

export default function ReservasiPage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl outline-none text-sm"
  const inputStyle = { border: '2px solid #F08090', backgroundColor: '#fff', color: '#4A2535' }
  const labelStyle = { color: '#4A2535', fontWeight: 600, fontSize: '0.85rem' }

  return (
    <main style={{ backgroundColor: '#F5D5B0', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #4A2535 0%, #D4396B 100%)' }}
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-2" style={{ color: '#F08090' }}>
          Pesan Meja Anda
        </p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#F5D5B0', fontFamily: 'Georgia, serif' }}>
          Reservasi
        </h1>
      </section>

      <section className="py-12 px-6 max-w-2xl mx-auto">
        {submitted ? (
          <div className="text-center py-16 rounded-2xl shadow-lg" style={{ backgroundColor: '#fff', border: '2px solid #D4396B' }}>
            <p className="text-5xl mb-4">🎉</p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
              Reservasi Berhasil!
            </h2>
            <p className="text-sm mb-1" style={{ color: '#7a5565' }}>
              Terima kasih, <strong style={{ color: '#D4396B' }}>{form.nama}</strong>!
            </p>
            <p className="text-sm mb-6" style={{ color: '#7a5565' }}>
              Meja untuk <strong>{form.tamu} tamu</strong> telah kami siapkan pada{' '}
              <strong>{form.tanggal}</strong> pukul <strong>{form.waktu}</strong>.
            </p>
            <p className="text-xs mb-6" style={{ color: '#7a5565' }}>
              Konfirmasi dikirim ke: <strong style={{ color: '#D4396B' }}>{form.email}</strong>
            </p>
            <button
              onClick={() => { setForm(initialForm); setSubmitted(false) }}
              className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: '#D4396B', color: '#fff' }}
            >
              Buat Reservasi Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl p-8 shadow-lg space-y-5" style={{ backgroundColor: '#fff', border: '1px solid #F08090' }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#4A2535', fontFamily: 'Georgia, serif' }}>
              Detail Reservasi
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="nama" style={labelStyle}>Nama Lengkap *</label>
                <input id="nama" required name="nama" value={form.nama} onChange={handleChange}
                  placeholder="John Doe" className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input id="email" required type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="email@contoh.com" className={inputClass} style={inputStyle} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="telepon" style={labelStyle}>Nomor Telepon *</label>
                <input id="telepon" required name="telepon" value={form.telepon} onChange={handleChange}
                  placeholder="08xxxxxxxxxx" className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label htmlFor="tamu" style={labelStyle}>Jumlah Tamu *</label>
                <select id="tamu" required name="tamu" value={form.tamu} onChange={handleChange}
                  className={inputClass} style={inputStyle}>
                  {['1','2','3','4','5','6','7','8','9','10'].map((n) => (
                    <option key={n} value={n}>{n} orang</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="tanggal" style={labelStyle}>Tanggal *</label>
                <input id="tanggal" required type="date" name="tanggal" value={form.tanggal} onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass} style={inputStyle} />
              </div>
              <div className="space-y-1">
                <label htmlFor="waktu" style={labelStyle}>Waktu *</label>
                <select id="waktu" required name="waktu" value={form.waktu} onChange={handleChange}
                  className={inputClass} style={inputStyle}>
                  {['11:00','12:00','13:00','14:00','17:00','18:00','19:00','20:00','21:00'].map((t) => (
                    <option key={t} value={t}>{t} WIB</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="catatan" style={labelStyle}>Catatan Khusus</label>
              <textarea id="catatan" name="catatan" value={form.catatan} onChange={handleChange}
                placeholder="Alergi makanan, permintaan khusus, dll..."
                rows={3}
                className={`${inputClass} resize-none`} style={inputStyle}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full font-bold text-base transition-all hover:opacity-90 shadow-md mt-2"
              style={{ backgroundColor: '#D4396B', color: '#fff' }}
            >
              Konfirmasi Reservasi
            </button>
          </form>
        )}
      </section>

      <footer className="py-8 px-6 text-center" style={{ backgroundColor: '#4A2535' }}>
        <p className="text-sm" style={{ color: '#F08090' }}>© 2026 Resto. All rights reserved.</p>
      </footer>
    </main>
  )
}
