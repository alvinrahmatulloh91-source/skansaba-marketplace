import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { prisma } from '@/lib/prisma'
import { FileText, CheckCircle, Building2 } from 'lucide-react'

export default async function TariffPage() {
  let products = await prisma.productService.findMany({
    where: { isActive: true },
    include: {
      major: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: [
      { major: { name: 'asc' } },
      { price: 'asc' },
    ],
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const groupByMajor = (products: any[]) => {
    return products.reduce((acc, product) => {
      const majorCode = product.major.name
      if (!acc[majorCode]) {
        acc[majorCode] = {
          name: product.major.name,
          code: product.bludCode?.split('-')[1] || 'N/A',
          products: [],
        }
      }
      acc[majorCode].products.push(product)
      return acc
    }, {} as Record<string, { name: string; code: string; products: any[] }>)
  }

  const groupedProducts = groupByMajor(products)

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0F2C59] via-[#1a3d7a] to-[#0F2C59] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <FileText className="h-4 w-4 text-[#F8DE22]" />
                <span className="text-sm font-medium">Katalog Tarif Resmi BLUD</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Daftar Tarif Produk & Jasa
              </h1>

              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Tarif resmi yang ditetapkan oleh Badan Layanan Umum Daerah (BLUD) 
                SMK Negeri 1 Bantul. Harga transparan dan kompetitif.
              </p>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Informasi Tarif BLUD
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Semua harga sudah termasuk pajak dan biaya layanan</li>
                    <li>• Pembayaran dapat dilakukan melalui transfer bank atau payment gateway</li>
                    <li>• Untuk pemesanan dalam jumlah besar, hubungi kami untuk penawaran khusus</li>
                    <li>• Tarif dapat berubah sesuai kebijakan sekolah dan dinas terkait</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tariff Sections by Major */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {Object.entries(groupedProducts as Record<string, { name: string; code: string; products: any[] }>).map(([code, major]) => (
              <div key={code} className="mb-12 last:mb-0">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="h-6 w-6 text-[#0F2C59]" />
                  <h2 className="text-2xl font-bold text-[#0F2C59]">
                    {major.name} ({major.code})
                  </h2>
                </div>

                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-[#0F2C59] text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Kode BLUD</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Nama Produk / Jasa</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Tipe</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold">Deskripsi</th>
                          <th className="px-6 py-4 text-right text-sm font-semibold">Tarif</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {major.products.map((product: any, index: number) => (
                          <tr 
                            key={product.id}
                            className={`hover:bg-gray-50 transition-colors ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                            }`}
                          >
                            <td className="px-6 py-4 text-sm font-mono text-gray-600">
                              {product.bludCode || '-'}
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                              {product.title}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                                product.type === 'PRODUCT'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {product.type === 'PRODUCT' ? 'Produk' : 'Jasa'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
                              {product.description || '-'}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="text-lg font-bold text-[#0F2C59]">
                                {formatPrice(Number(product.price))}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}

            {products.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Belum ada tarif yang tersedia
                </h3>
                <p className="text-gray-600">
                  Hubungi admin untuk informasi lebih lanjut
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#0F2C59] to-[#1a3d7a] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Butuh Penawaran Khusus?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Untuk pemesanan dalam jumlah besar atau kerja sama jangka panjang, 
              kami menyediakan penawaran khusus dengan harga yang lebih kompetitif.
            </p>
            <a 
              href="/partnerships" 
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>Ajukan Proposal Kemitraan</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
