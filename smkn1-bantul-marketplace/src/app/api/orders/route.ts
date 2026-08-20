import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { buyerName, buyerEmail, buyerPhone, address, notes, items, total } = body

    if (!buyerName || !buyerEmail || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Data pesanan tidak lengkap' },
        { status: 400 }
      )
    }

    const order = await prisma.order.create({
      data: {
        buyerName,
        buyerEmail,
        buyerPhone: buyerPhone || null,
        totalAmount: total,
        paymentStatus: 'UNPAID',
        orderStatus: 'PENDING',
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.price,
            subtotal: item.price * item.quantity,
          })),
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

    return NextResponse.json({ 
      orderId: order.id,
      message: 'Order created successfully'
    })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Gagal membuat pesanan' },
      { status: 500 }
    )
  }
}
