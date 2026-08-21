'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/stores/cart-store'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="bg-white shadow-md sticky top-14 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0F2C59] rounded-lg flex items-center justify-center">
              <span className="text-[#F8DE22] font-bold text-lg">BLUD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-[#0F2C59] text-lg">Marketplace BLUD</h1>
              <p className="text-xs text-gray-500">SMK Negeri 1 Bantul</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#produk" className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors">
              Produk & Jasa
            </Link>
            <Link href="#jurusan" className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors">
              Jurusan
            </Link>
            <Link href="#b2b" className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors">
              Kemitraan B2B
            </Link>
            <Link href="#tentang" className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors">
              Tentang
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-700 hover:text-[#0F2C59] transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F8DE22] text-[#0F2C59] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <Link href="/login" className="hidden sm:block btn-primary">
              Login
            </Link>

            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                href="#produk" 
                className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produk & Jasa
              </Link>
              <Link 
                href="#jurusan" 
                className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jurusan
              </Link>
              <Link 
                href="#b2b" 
                className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kemitraan B2B
              </Link>
              <Link 
                href="#tentang" 
                className="text-gray-700 hover:text-[#0F2C59] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="/login" 
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
