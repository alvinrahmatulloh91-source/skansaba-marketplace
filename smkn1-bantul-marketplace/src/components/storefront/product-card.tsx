import { ProductService } from '@/types'
import { formatCurrency } from '@/lib/utils'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'

interface ProductCardProps {
  product: ProductService
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card-blud group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {product.imageUrls && product.imageUrls.length > 0 ? (
          <Image
            src={product.imageUrls[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-6xl font-bold opacity-20">
              {product.type === 'PRODUCT' ? '📦' : '🛠️'}
            </span>
          </div>
        )}
        
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`badge-blud ${product.type === 'PRODUCT' ? 'badge-product' : 'badge-service'}`}>
            {product.type === 'PRODUCT' ? 'Produk' : 'Jasa'}
          </span>
          <span className={`badge-blud badge-${product.major?.slug || 'default'}`}>
            {product.major?.code || 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 flex-grow">
            {product.title}
          </h3>
        </div>
        
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-[#F8DE22] text-[#F8DE22]" />
          <Star className="w-4 h-4 fill-[#F8DE22] text-[#F8DE22]" />
          <Star className="w-4 h-4 fill-[#F8DE22] text-[#F8DE22]" />
          <Star className="w-4 h-4 fill-[#F8DE22] text-[#F8DE22]" />
          <Star className="w-4 h-4 fill-[#F8DE22] text-[#F8DE22]" />
          <span className="text-xs text-gray-500 ml-1">(4.9)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Kode BLUD</p>
            <p className="text-xs font-mono text-[#0F2C59]">{product.bludCode}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-[#0F2C59]">
              {formatCurrency(product.price)}
            </p>
            {product.type === 'PRODUCT' && product.stock > 0 && (
              <p className="text-xs text-green-600">Stok: {product.stock}</p>
            )}
            {product.type === 'SERVICE' && (
              <p className="text-xs text-blue-600">Tersedia</p>
            )}
          </div>
        </div>
        
        <button 
          className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          aria-label={`Tambahkan ${product.title} ke keranjang`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Tambah ke Keranjang</span>
        </button>
      </div>
    </div>
  )
}
