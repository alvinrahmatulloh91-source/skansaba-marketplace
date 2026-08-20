import Link from 'next/link'
import { ShoppingCart, Menu, User, Building2 } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0F2C59] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-[#F8DE22]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">SMKN 1 BANTUL</span>
              <span className="text-xs text-gray-300">Marketplace & BLUD Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-[#F8DE22] transition-colors">
              Beranda
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-[#F8DE22] transition-colors">
              Produk & Jasa
            </Link>
            <Link href="/partnerships" className="text-sm font-medium hover:text-[#F8DE22] transition-colors">
              Kemitraan B2B
            </Link>
            <Link href="/tariff" className="text-sm font-medium hover:text-[#F8DE22] transition-colors">
              Tarif BLUD
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#F8DE22] text-[#0F2C59] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link href="/login" className="hidden md:flex items-center space-x-2 px-4 py-2 bg-[#F8DE22] text-[#0F2C59] rounded-lg font-semibold hover:bg-[#f0d61b] transition-colors">
              <User className="h-4 w-4" />
              <span>Masuk</span>
            </Link>

            <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
