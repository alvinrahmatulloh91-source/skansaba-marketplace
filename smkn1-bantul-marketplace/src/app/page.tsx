'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Award, Users, TrendingUp } from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import JurusanFilter from '@/components/storefront/jurusan-filter'
import ProductCard from '@/components/storefront/product-card'
import B2BPartnershipModal from '@/components/storefront/b2b-modal'
import { MAJORS, ProductService } from '@/types'

const SAMPLE_PRODUCTS: ProductService[] = [
  {
    id: '1',
    majorId: 'rpl',
    title: 'Jasa Pembuatan Website Profile UMKM',
    description: 'Website profesional untuk UMKM dengan desain modern dan responsive',
    price: 1500000,
    type: 'SERVICE',
    bludCode: 'BLUD-RPL-001',
    stock: 0,
    imageUrls: [],
    isActive: true,
    major: { id: 'rpl', name: 'Rekayasa Perangkat Lunak', code: 'RPL', slug: 'rpl' },
  },
  {
    id: '2',
    majorId: 'rpl',
    title: 'Aplikasi Kasir (POS) Android Sederhana',
    description: 'Aplikasi kasir berbasis Android untuk usaha kecil dan menengah',
    price: 750000,
    type: 'PRODUCT',
    bludCode: 'BLUD-RPL-002',
    stock: 50,
    imageUrls: [],
    isActive: true,
    major: { id: 'rpl', name: 'Rekayasa Perangkat Lunak', code: 'RPL', slug: 'rpl' },
  },
  {
    id: '3',
    majorId: 'dkv',
    title: 'Jasa Cetak Sublimasi Mug Custom & Pin',
    description: 'Cetak mug dan pin custom dengan desain sesuai keinginan',
    price: 25000,
    type: 'PRODUCT',
    bludCode: 'BLUD-DKV-001',
    stock: 500,
    imageUrls: [],
    isActive: true,
    major: { id: 'dkv', name: 'Desain Komunikasi Visual', code: 'DKV', slug: 'dkv' },
  },
  {
    id: '4',
    majorId: 'dkv',
    title: 'Paket Desain Logo & Branding Kit UMKM',
    description: 'Paket lengkap desain logo dan branding untuk UMKM',
    price: 350000,
    type: 'SERVICE',
    bludCode: 'BLUD-DKV-002',
    stock: 0,
    imageUrls: [],
    isActive: true,
    major: { id: 'dkv', name: 'Desain Komunikasi Visual', code: 'DKV', slug: 'dkv' },
  },
  {
    id: '5',
    majorId: 'mplb',
    title: 'Sewa Ruang Meeting / Mini Hall',
    description: 'Ruang meeting kapasitas 50 orang dengan fasilitas lengkap',
    price: 500000,
    type: 'SERVICE',
    bludCode: 'BLUD-MPLB-001',
    stock: 0,
    imageUrls: [],
    isActive: true,
    major: { id: 'mplb', name: 'Manajemen Perkantoran', code: 'MPLB', slug: 'mplb' },
  },
  {
    id: '6',
    majorId: 'akl',
    title: 'Jasa Penyusunan Laporan Keuangan Bulanan UMKM',
    description: 'Laporan keuangan lengkap untuk kebutuhan bisnis Anda',
    price: 500000,
    type: 'SERVICE',
    bludCode: 'BLUD-AKL-001',
    stock: 0,
    imageUrls: [],
    isActive: true,
    major: { id: 'akl', name: 'Akuntansi & Keuangan', code: 'AKL', slug: 'akl' },
  },
  {
    id: '7',
    majorId: 'pm',
    title: 'Merchandise Official SMKN 1 Bantul',
    description: 'Tote bag dan tumbler official dengan logo sekolah',
    price: 85000,
    type: 'PRODUCT',
    bludCode: 'BLUD-PM-001',
    stock: 100,
    imageUrls: [],
    isActive: true,
    major: { id: 'pm', name: 'Pemasaran', code: 'PM', slug: 'pm' },
  },
  {
    id: '8',
    majorId: 'pm',
    title: 'Paket Catering Snack Box Teaching Factory',
    description: 'Snack box higienis dan lezat untuk berbagai acara',
    price: 15000,
    type: 'PRODUCT',
    bludCode: 'BLUD-PM-002',
    stock: 200,
    imageUrls: [],
    isActive: true,
    major: { id: 'pm', name: 'Pemasaran', code: 'PM', slug: 'pm' },
  },
]

export default function HomePage() {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [b2bModalOpen, setB2bModalOpen] = useState(false)

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    if (selectedMajor && selectedMajor !== 'all' && product.major?.slug !== selectedMajor) {
      return false
    }
    if (selectedType && product.type !== selectedType) {
      return false
    }
    return true
  })

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-[#0F2C59] via-[#1a3d7a] to-[#0F2C59] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F8DE22] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A063] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#F8DE22]/20 text-[#F8DE22] rounded-full text-sm font-semibold mb-6 border border-[#F8DE22]/30">
              Unit Usaha Resmi BLUD SMK Negeri 1 Bantul
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Produk & Jasa Inovatif{' '}
              <span className="text-[#F8DE22]">Karya Siswa</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dukung Teaching Factory SMKN 1 Bantul dengan membeli produk dan jasa berkualitas 
              dari siswa berprestasi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#produk" 
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Belanja Sekarang
              </a>
              <button 
                onClick={() => setB2bModalOpen(true)}
                className="px-6 py-3 border-2 border-[#F8DE22] text-[#F8DE22] rounded-lg font-semibold hover:bg-[#F8DE22]/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Kemitraan B2B
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: 'Produk Berkualitas', value: '100+' },
              { icon: Users, label: 'Siswa Terlibat', value: '500+' },
              { icon: TrendingUp, label: 'Jurusan', value: '5' },
              { icon: ShoppingCart, label: 'Transaksi', value: '1000+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <stat.icon className="w-8 h-8 text-[#F8DE22] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#0F2C59]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="produk" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2C59] mb-4">
              Katalog Produk & Jasa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai produk dan jasa yang dihasilkan oleh siswa-siswi 
              SMKN 1 Bantul dari 5 jurusan unggulan.
            </p>
          </div>

          <JurusanFilter 
            onFilterChange={setSelectedMajor}
            onTypeFilterChange={setSelectedType}
          />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada produk yang sesuai dengan filter.</p>
            </div>
          )}
        </div>
      </section>

      <section id="jurusan" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2C59] mb-4">
              Jurusan Unggulan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lima jurusan dengan Teaching Factory terbaik yang menghasilkan produk 
              dan jasa berkualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MAJORS.map((major, index) => (
              <motion.div
                key={major.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedMajor(major.slug)
                  document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0F2C59] to-[#1a3d7a] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-[#F8DE22] font-bold text-xl">{major.code}</span>
                </div>
                <h3 className="font-bold text-[#0F2C59] text-center mb-2">{major.name}</h3>
                <p className="text-sm text-gray-600 text-center">{major.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="b2b" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F2C59] to-[#1a3d7a] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mitra Bisnis? Ajukan Kerja Sama
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Kami terbuka untuk kerja sama B2B dengan perusahaan dan institusi. 
              Dapatkan produk dan jasa berkualitas dengan harga kompetitif.
            </p>
            <button 
              onClick={() => setB2bModalOpen(true)}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Ajukan Proposal Sekarang
            </button>
          </div>
        </div>
      </section>

      <B2BPartnershipModal isOpen={b2bModalOpen} onClose={() => setB2bModalOpen(false)} />
    </div>
  )
}
