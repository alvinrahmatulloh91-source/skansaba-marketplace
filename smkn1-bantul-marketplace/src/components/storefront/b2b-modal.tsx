'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, User, Mail, Phone, FileText, Send } from 'lucide-react'
import Navbar from '@/components/layout/navbar'

interface B2BModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function B2BPartnershipModal({ isOpen, onClose }: B2BModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    proposalDetails: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/b2b-partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Proposal kemitraan berhasil dikirim! Tim kami akan menghubungi Anda.')
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          proposalDetails: '',
        })
        onClose()
      } else {
        alert('Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Error submitting partnership:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0F2C59] rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#F8DE22]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0F2C59]">Kemitraan B2B</h2>
                  <p className="text-sm text-gray-500">Ajukan proposal kerja sama industri</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    <Building2 className="w-4 h-4 inline mr-1" />
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent"
                    placeholder="PT. Contoh Sejahtera"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                    <User className="w-4 h-4 inline mr-1" />
                    Contact Person
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent"
                    placeholder="email@perusahaan.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent"
                    placeholder="0812-3456-7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="proposalDetails" className="block text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Detail Proposal
                </label>
                <textarea
                  id="proposalDetails"
                  name="proposalDetails"
                  required
                  value={formData.proposalDetails}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent resize-none"
                  placeholder="Jelaskan jenis kerja sama yang diinginkan, produk/jasa yang diminati, dan detail lainnya..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Kirim Proposal
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
