import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customerName, customerEmail, customerPhone, items } = body

    if (!customerName || !customerEmail || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Data pesanan tidak lengkap' },
        { status: 400 }
      )
    }

    let totalAmount = 0
    const orderItemsData = []

    for (const item of items) {
      const product = await prisma.productService.findUnique({
        where: { id: item.productId },
      })

      if (!product || !product.isActive) {
        return NextResponse.json(
          { error: `Produk ${item.productId} tidak tersedia` },
          { status: 400 }
        )
      }

      const price = Number(product.price)
      const quantity = item.quantity || 1
      totalAmount += price * quantity

      orderItemsData.push({
        productId: item.productId,
        quantity,
        price,
      })
    }

    const order = await prisma.order.create({
      data: {
        customerName,
        customerEmail,
        customerPhone: customerPhone || null,
        totalAmount,
        paymentStatus: 'UNPAID',
        orderStatus: 'PENDING',
        items: {
          create: orderItemsData,
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat membuat pesanan' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data pesanan' },
      { status: 500 }
    )
  }
}
