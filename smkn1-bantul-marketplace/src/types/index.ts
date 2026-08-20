import { type Role, type ProductType, type OrderStatus, type PaymentStatus, type PartnershipStatus } from '@prisma/client'

export interface UserWithRole {
  id: string
  name: string
  email: string
  role: Role
  majorId?: string | null
}

export interface MajorWithProducts {
  id: string
  name: string
  slug: string
  description?: string | null
  _count?: {
    products: number
  }
}

export interface ProductServiceWithMajor {
  id: string
  title: string
  description?: string | null
  price: number
  type: ProductType
  galleryUrls: string[]
  bludCode?: string | null
  isActive: boolean
  major: {
    id: string
    name: string
    slug: string
  }
}

export interface OrderWithItems {
  id: string
  buyerName: string
  buyerEmail: string
  buyerPhone?: string | null
  totalAmount: number
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  items: Array<{
    id: string
    quantity: number
    unitPrice: number
    subtotal: number
    product: {
      id: string
      title: string
      type: ProductType
    }
  }>
  createdAt: Date
}

export interface B2BPartnershipData {
  id: string
  companyName: string
  contactPerson: string
  contactEmail: string
  contactPhone?: string | null
  proposalDetails: string
  status: PartnershipStatus
  notes?: string | null
  createdAt: Date
}
