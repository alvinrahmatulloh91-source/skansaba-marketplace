import { ProductServiceWithMajor } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: ProductServiceWithMajor
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="card-blud overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {product.galleryUrls && product.galleryUrls.length > 0 ? (
          <Image
            src={product.galleryUrls[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-[#0F2C59] to-[#1a3d7a]">
            <span className="text-white text-4xl font-bold opacity-20">
              {product.type === 'PRODUCT' ? '📦' : '🛠️'}
            </span>
          </div>
        )}
        
        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            product.type === 'PRODUCT' 
              ? 'bg-[#F8DE22] text-[#0F2C59]' 
              : 'bg-[#0F2C59] text-white'
          }`}>
            {product.type === 'PRODUCT' ? 'Produk' : 'Jasa'}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Major Label */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-[#0F2C59] bg-blue-50 px-2 py-1 rounded">
            {product.major.name}
          </span>
          {product.bludCode && (
            <span className="text-xs text-gray-500">
              Kode: {product.bludCode}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#0F2C59]">
              {formatPrice(product.price)}
            </span>
            {product.type === 'SERVICE' && (
              <span className="text-xs text-gray-500">/ layanan</span>
            )}
          </div>
          
          <Link 
            href={`/products/${product.id}`}
            className="btn-primary text-sm px-4 py-2"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  )
}
