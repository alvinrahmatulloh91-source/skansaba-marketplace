import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, contactEmail, contactPhone, proposalDetails } = body

    if (!companyName || !contactPerson || !contactEmail || !proposalDetails) {
      return NextResponse.json(
        { error: 'Semua field wajib harus diisi' },
        { status: 400 }
      )
    }

    const partnership = await prisma.b2BPartnership.create({
      data: {
        companyName,
        contactPerson,
        contactEmail,
        contactPhone: contactPhone || null,
        proposalDetails,
        status: 'PENDING',
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Proposal kemitraan berhasil dikirim',
        data: partnership 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating partnership:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses proposal' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const partnerships = await prisma.b2BPartnership.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ data: partnerships })
  } catch (error) {
    console.error('Error fetching partnerships:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data kemitraan' },
      { status: 500 }
    )
  }
}
