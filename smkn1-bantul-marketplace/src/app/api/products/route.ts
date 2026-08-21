import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const major = searchParams.get('major')
    const type = searchParams.get('type')

    const where: any = { isActive: true }

    if (major) {
      where.majorId = major
    }

    if (type && ['PRODUCT', 'SERVICE'].includes(type)) {
      where.type = type
    }

    const products = await prisma.productService.findMany({
      where,
      include: {
        major: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data produk' },
      { status: 500 }
    )
  }
}
