export type Role = 'SUPER_ADMIN_BLUD' | 'ADMIN_JURUSAN' | 'BUYER'

export type ProductType = 'PRODUCT' | 'SERVICE'

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED'

export type PaymentStatus = 'UNPAID' | 'PAID' | 'FAILED' | 'REFUNDED'

export type PartnershipStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS'

export interface Major {
  id: string
  name: string
  code: string
  slug: string
  description?: string | null
}

export interface ProductService {
  id: string
  majorId: string
  title: string
  description?: string | null
  price: number | string
  type: ProductType
  bludCode: string
  stock: number
  imageUrls: string[]
  isActive: boolean
  major?: Major
}

export interface CartItem {
  product: ProductService
  quantity: number
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  customerPhone?: string | null
  totalAmount: number | string
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  createdAt: Date
}

export interface B2BPartnership {
  id: string
  companyName: string
  contactPerson: string
  email: string
  phone?: string | null
  proposalDetails: string
  status: PartnershipStatus
  createdAt: Date
}

export const MAJORS: Omit<Major, 'id'>[] = [
  { name: 'Rekayasa Perangkat Lunak', code: 'RPL', slug: 'rpl', description: 'Pengembangan aplikasi web, mobile, dan desktop' },
  { name: 'Desain Komunikasi Visual', code: 'DKV', slug: 'dkv', description: 'Desain grafis, fotografi, dan multimedia' },
  { name: 'Manajemen Perkantoran & Layanan Bisnis', code: 'MPLB', slug: 'mplb', description: 'Administrasi perkantoran dan layanan bisnis' },
  { name: 'Akuntansi & Keuangan Lembaga', code: 'AKL', slug: 'akl', description: 'Akuntansi dan pelaporan keuangan' },
  { name: 'Pemasaran', code: 'PM', slug: 'pm', description: 'Strategi pemasaran dan penjualan produk' },
]
