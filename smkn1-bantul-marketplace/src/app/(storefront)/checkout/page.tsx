'use client'

import { useState } from 'react'
import { useCartStore } from '@/stores/cart-store'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { useRouter } from 'next/navigation'
import { CreditCard, User, Mail, Phone, MapPin } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const orderData = {
      buyerName: formData.get('buyerName') as string,
      buyerEmail: formData.get('buyerEmail') as string,
      buyerPhone: formData.get('buyerPhone') as string,
      address: formData.get('address') as string,
      notes: formData.get('notes') as string,
      items: items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotal(),
    }

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      })

      if (response.ok) {
        const result = await response.json()
        clearCart()
        router.push(`/orders/${result.orderId}/success`)
      } else {
        alert('Terjadi kesalahan saat membuat pesanan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
              <p className="text-gray-600">Lengkapi data pemesanan Anda</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Customer Information */}
                  <div className="card-blud p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <User className="h-5 w-5 mr-2 text-[#0F2C59]" />
                      Informasi Pelanggan
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="buyerName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                          placeholder="Sesuai KTP/Identitas"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              name="buyerEmail"
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                              placeholder="email@contoh.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nomor Telepon *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              name="buyerPhone"
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all"
                              placeholder="08xx-xxxx-xxxx"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alamat Lengkap *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <textarea
                            name="address"
                            required
                            rows={3}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all resize-none"
                            placeholder="Jalan, Nomor Rumah, Kelurahan, Kecamatan, Kota..."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Catatan Pesanan (Opsional)
                        </label>
                        <textarea
                          name="notes"
                          rows={2}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition-all resize-none"
                          placeholder="Instruksi khusus atau catatan tambahan..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="card-blud p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-[#0F2C59]" />
                      Metode Pembayaran
                    </h2>
                    
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border-2 border-[#0F2C59] bg-[#0F2C59]/5 rounded-lg cursor-pointer transition-all">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="transfer"
                          defaultChecked
                          className="h-4 w-4 text-[#0F2C59]"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-semibold text-gray-900">Transfer Bank</p>
                          <p className="text-sm text-gray-600">BCA, Mandiri, BRI, BNI</p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-all">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="qris"
                          className="h-4 w-4 text-[#0F2C59]"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-semibold text-gray-900">QRIS / E-Wallet</p>
                          <p className="text-sm text-gray-600">GoPay, OVO, Dana, ShopeePay</p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-all">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="virtual_account"
                          className="h-4 w-4 text-[#0F2C59]"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-semibold text-gray-900">Virtual Account</p>
                          <p className="text-sm text-gray-600">Pembayaran via ATM/Internet Banking</p>
                        </div>
                      </label>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                      🔒 Pembayaran diproses aman melalui Midtrans
                    </p>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="card-blud p-6 sticky top-24">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
                    
                    {/* Items List */}
                    <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.productId} className="flex justify-between text-sm">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 line-clamp-1">{item.title}</p>
                            <p className="text-xs text-gray-500">
                              {item.quantity}x {formatPrice(item.price)}
                            </p>
                          </div>
                          <span className="font-semibold text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>{formatPrice(getTotal())}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Biaya Layanan</span>
                        <span>{formatPrice(0)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Pajak (0%)</span>
                        <span>{formatPrice(0)}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                        <span>Total Pembayaran</span>
                        <span className="text-[#0F2C59]">{formatPrice(getTotal())}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Memproses...' : `Bayar ${formatPrice(getTotal())}`}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Dengan melanjutkan, Anda menyetujui syarat & ketentuan BLUD SMKN 1 Bantul
                    </p>

                    {/* Security Info */}
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>SSL Encrypted Transaction</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Payment Gateway Terpercaya</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
