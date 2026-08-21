import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, email, phone, proposalDetails } = body

    if (!companyName || !contactPerson || !email || !proposalDetails) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    const partnership = await prisma.b2BPartnership.create({
      data: {
        companyName,
        contactPerson,
        email,
        phone: phone || null,
        proposalDetails,
        status: 'PENDING',
      },
    })

    return NextResponse.json(partnership, { status: 201 })
  } catch (error) {
    console.error('Error creating B2B partnership:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim proposal' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const partnerships = await prisma.b2BPartnership.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(partnerships)
  } catch (error) {
    console.error('Error fetching B2B partnerships:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    )
  }
}
