import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { JurusanFilter } from '@/components/storefront/jurusan-filter'
import { ProductCard } from '@/components/storefront/product-card'
import { prisma } from '@/lib/prisma'
import { ProductServiceWithMajor } from '@/types'

interface ProductsPageProps {
  searchParams: Promise<{ major?: string; type?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const selectedMajor = params.major
  const selectedType = params.type as 'PRODUCT' | 'SERVICE' | undefined

  let products: any[] = []

  try {
    const whereClause: any = { isActive: true }
    
    if (selectedMajor) {
      whereClause.major = { slug: selectedMajor }
    }
    
    if (selectedType) {
      whereClause.type = selectedType
    }

    products = await prisma.productService.findMany({
      where: whereClause,
      include: {
        major: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#0F2C59] via-[#1a3d7a] to-[#0F2C59] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Katalog Produk & Jasa
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Temukan produk dan jasa berkualitas dari siswa SMK Negeri 1 Bantul
              </p>
              
              {/* Quick Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
                <a
                  href="/products"
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    !selectedType
                      ? 'bg-[#F8DE22] text-[#0F2C59]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Semua
                </a>
                <a
                  href="/products?type=PRODUCT"
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === 'PRODUCT'
                      ? 'bg-[#F8DE22] text-[#0F2C59]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  📦 Produk
                </a>
                <a
                  href="/products?type=SERVICE"
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === 'SERVICE'
                      ? 'bg-[#F8DE22] text-[#0F2C59]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  🛠️ Jasa
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <JurusanFilter selectedMajor={selectedMajor} />
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            {products.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Belum ada produk ditemukan
                </h3>
                <p className="text-gray-600">
                  Coba ubah filter atau hubungi admin jurusan untuk menambahkan produk
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Results Info */}
            <div className="mt-8 text-center text-sm text-gray-600">
              Menampilkan {products.length} {products.length === 1 ? 'produk/jasa' : 'produk/jasa'}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
