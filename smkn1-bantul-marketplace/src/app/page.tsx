import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { JurusanFilter } from '@/components/storefront/jurusan-filter'
import Link from 'next/link'
import { ArrowRight, Shield, Award, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0F2C59] via-[#1a3d7a] to-[#0F2C59] text-white py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#F8DE22] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A063] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="h-4 w-4 text-[#F8DE22]" />
                <span className="text-sm font-medium">Official BLUD SMKN 1 Bantul</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Produk & Jasa Inovasi{' '}
                <span className="text-[#F8DE22]">Karya Siswa</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Platform resmi marketplace SMK Negeri 1 Bantul. Dukung kreativitas dan 
                kewirausahaan siswa melalui program Teaching Factory (TEFA) dan BLUD.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link 
                  href="/products" 
                  className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
                >
                  Lihat Katalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/partnerships" 
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-lg font-semibold w-full sm:w-auto border border-white/20"
                >
                  Kemitraan B2B
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Terpercaya</h3>
                <p className="text-sm text-gray-600">Resmi di bawah pengelolaan BLUD sekolah</p>
              </div>
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">5 Jurusan</h3>
                <p className="text-sm text-gray-600">Beragam produk dan jasa berkualitas</p>
              </div>
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Profesional</h3>
                <p className="text-sm text-gray-600">Dibimbing oleh guru ahli industri</p>
              </div>
              <div className="text-center space-y-4 p-6">
                <div className="w-16 h-16 bg-[#0F2C59]/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-[#0F2C59]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Garansi</h3>
                <p className="text-sm text-gray-600">Jaminan kualitas untuk setiap layanan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Jurusan Filter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-4">
                Pilih Kompetensi Keahlian
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Setiap jurusan menawarkan produk dan jasa unggulan dengan standar industri
              </p>
            </div>
            <JurusanFilter />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0F2C59] to-[#1a3d7a] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Berkolaborasi?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk kerja sama bisnis, pemesanan dalam jumlah besar, 
              atau konsultasi proyek khusus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-secondary w-full sm:w-auto"
              >
                Hubungi Kami
              </Link>
              <Link 
                href="/tariff" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg font-semibold w-full sm:w-auto border border-white/20"
              >
                Lihat Tarif BLUD
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
