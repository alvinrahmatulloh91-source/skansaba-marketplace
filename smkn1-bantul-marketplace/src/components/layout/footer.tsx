import Link from 'next/link'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0F2C59] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-[#F8DE22]" />
              <div>
                <h3 className="text-lg font-bold">SMKN 1 BANTUL</h3>
                <p className="text-xs text-gray-300">Marketplace & BLUD Portal</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Platform resmi untuk produk dan jasa inovatif karya siswa SMK Negeri 1 Bantul. 
              Mendukung program Teaching Factory (TEFA) dan Badan Layanan Umum Daerah (BLUD).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F8DE22]">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#F8DE22] transition-colors">
                  Produk & Jasa
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-[#F8DE22] transition-colors">
                  Kemitraan B2B
                </Link>
              </li>
              <li>
                <Link href="/tariff" className="text-gray-300 hover:text-[#F8DE22] transition-colors">
                  Tarif BLUD
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#F8DE22] transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Jurusan */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F8DE22]">Kompetensi Keahlian</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">RPL - Rekayasa Perangkat Lunak</li>
              <li className="text-gray-300">DKV - Desain Komunikasi Visual</li>
              <li className="text-gray-300">MPLB - Manajemen Perkantoran</li>
              <li className="text-gray-300">AKL - Akuntansi Keuangan</li>
              <li className="text-gray-300">PM - Pemasaran</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F8DE22]">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F8DE22] flex-shrink-0 mt-0.5" />
                <span>Jl. Pramuka No. 77, Bantul, Yogyakarta</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F8DE22] flex-shrink-0" />
                <span>(0274) 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F8DE22] flex-shrink-0" />
                <span>blud@smkn1bantul.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SMKN 1 Bantul. All rights reserved. | BLUD Official Portal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
