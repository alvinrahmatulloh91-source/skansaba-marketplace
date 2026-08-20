'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Building2, Mail, Phone, User, FileText, Send, CheckCircle } from 'lucide-react'

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    proposalDetails: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          companyName: '',
          contactPerson: '',
          contactEmail: '',
          contactPhone: '',
          proposalDetails: '',
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0F2C59] via-[#1a3d7a] to-[#0F2C59] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Building2 className="h-4 w-4 text-[#F8DE22]" />
                <span className="text-sm font-medium">Kemitraan Bisnis B2B</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Mari Berkolaborasi untuk{' '}
                <span className="text-[#F8DE22]">Masa Depan</span>
              </h1>

              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                SMKN 1 Bantul membuka kesempatan kerja sama dengan industri dan dunia usaha. 
                Jadikan siswa kami bagian dari ekosistem bisnis Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-4">
                Mengapa Bermitra dengan Kami?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dapatkan akses ke talenta muda berbakat dan layanan berkualitas dengan harga kompetitif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4 p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Harga Kompetitif</h3>
                <p className="text-sm text-gray-600">
                  Tarif BLUD yang terjangkau dengan kualitas standar industri
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <User className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Talenta Muda</h3>
                <p className="text-sm text-gray-600">
                  Akses ke lulusan terampil siap kerja dari 5 kompetensi keahlian
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Legalitas Resmi</h3>
                <p className="text-sm text-gray-600">
                  Transaksi resmi di bawah pengelolaan BLUD sekolah dengan dokumen lengkap
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#0F2C59] mb-2">
                    Ajukan Proposal Kemitraan
                  </h2>
                  <p className="text-gray-600">
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 1-3 hari kerja
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Proposal Terkirim!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Terima kasih telah mengajukan proposal kemitraan. Tim BLUD kami akan meninjau dan menghubungi Anda segera.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Kirim Proposal Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                          Nama Perusahaan / Institusi *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                          placeholder="PT. Contoh Sejahtera"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="contactPerson" className="text-sm font-semibold text-gray-700">
                          Nama Kontak Person *
                        </label>
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                          placeholder="Budi Santoso"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contactEmail" className="text-sm font-semibold text-gray-700">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            id="contactEmail"
                            name="contactEmail"
                            value={formData.contactEmail}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                            placeholder="email@perusahaan.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="contactPhone" className="text-sm font-semibold text-gray-700">
                          Nomor Telepon / WhatsApp
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            id="contactPhone"
                            name="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                            placeholder="0812-3456-7890"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="proposalDetails" className="text-sm font-semibold text-gray-700">
                        Detail Proposal Kemitraan *
                      </label>
                      <textarea
                        id="proposalDetails"
                        name="proposalDetails"
                        value={formData.proposalDetails}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all resize-none"
                        placeholder="Jelaskan bentuk kemitraan yang diinginkan (misal: pembelian produk dalam jumlah besar, kerja sama pelatihan, magang siswa, dll)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Kirim Proposal Kemitraan</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Dengan mengirim formulir ini, Anda menyetujui bahwa data Anda akan digunakan untuk keperluan komunikasi kemitraan bisnis
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-[#0F2C59] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">Hubungi Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <Building2 className="h-8 w-8 text-[#F8DE22] mx-auto mb-2" />
                  <p className="text-sm">SMK Negeri 1 Bantul</p>
                  <p className="text-xs text-gray-300">Jl. Pramuka No. 77, Bantul, Yogyakarta</p>
                </div>
                <div className="space-y-2">
                  <Phone className="h-8 w-8 text-[#F8DE22] mx-auto mb-2" />
                  <p className="text-sm">Telepon</p>
                  <p className="text-xs text-gray-300">(0274) 123456</p>
                </div>
                <div className="space-y-2">
                  <Mail className="h-8 w-8 text-[#F8DE22] mx-auto mb-2" />
                  <p className="text-sm">Email</p>
                  <p className="text-xs text-gray-300">blud@smkn1bantul.sch.id</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
