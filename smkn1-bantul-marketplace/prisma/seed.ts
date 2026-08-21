import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Majors
  const majors = await Promise.all([
    prisma.major.upsert({
      where: { slug: 'rpl' },
      update: {},
      create: {
        name: 'Rekayasa Perangkat Lunak',
        code: 'RPL',
        slug: 'rpl',
        description: 'Pengembangan aplikasi web, mobile, dan desktop',
      },
    }),
    prisma.major.upsert({
      where: { slug: 'dkv' },
      update: {},
      create: {
        name: 'Desain Komunikasi Visual',
        code: 'DKV',
        slug: 'dkv',
        description: 'Desain grafis, fotografi, dan multimedia',
      },
    }),
    prisma.major.upsert({
      where: { slug: 'mplb' },
      update: {},
      create: {
        name: 'Manajemen Perkantoran & Layanan Bisnis',
        code: 'MPLB',
        slug: 'mplb',
        description: 'Administrasi perkantoran dan layanan bisnis',
      },
    }),
    prisma.major.upsert({
      where: { slug: 'akl' },
      update: {},
      create: {
        name: 'Akuntansi & Keuangan Lembaga',
        code: 'AKL',
        slug: 'akl',
        description: 'Akuntansi dan pelaporan keuangan',
      },
    }),
    prisma.major.upsert({
      where: { slug: 'pm' },
      update: {},
      create: {
        name: 'Pemasaran',
        code: 'PM',
        slug: 'pm',
        description: 'Strategi pemasaran dan penjualan produk',
      },
    }),
  ])

  const [rpl, dkv, mplb, akl, pm] = majors

  // Create Products & Services
  const products = await Promise.all([
    // RPL Products
    prisma.productService.create({
      data: {
        majorId: rpl.id,
        title: 'Jasa Pembuatan Website Profile UMKM',
        description: 'Website profesional untuk UMKM dengan desain modern dan responsive',
        price: 1500000,
        type: 'SERVICE',
        bludCode: 'BLUD-RPL-001',
        stock: 0,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: rpl.id,
        title: 'Aplikasi Kasir (POS) Android Sederhana',
        description: 'Aplikasi kasir berbasis Android untuk usaha kecil dan menengah',
        price: 750000,
        type: 'PRODUCT',
        bludCode: 'BLUD-RPL-002',
        stock: 50,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: rpl.id,
        title: 'UI/UX Design & Prototyping Mobile App',
        description: 'Desain antarmuka dan pengalaman pengguna untuk aplikasi mobile',
        price: 500000,
        type: 'SERVICE',
        bludCode: 'BLUD-RPL-003',
        stock: 0,
        imageUrls: [],
      },
    }),
    // DKV Products
    prisma.productService.create({
      data: {
        majorId: dkv.id,
        title: 'Jasa Cetak Sublimasi Mug Custom & Pin',
        description: 'Cetak mug dan pin custom dengan desain sesuai keinginan',
        price: 25000,
        type: 'PRODUCT',
        bludCode: 'BLUD-DKV-001',
        stock: 500,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: dkv.id,
        title: 'Paket Desain Logo & Branding Kit UMKM',
        description: 'Paket lengkap desain logo dan branding untuk UMKM',
        price: 350000,
        type: 'SERVICE',
        bludCode: 'BLUD-DKV-002',
        stock: 0,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: dkv.id,
        title: 'Jasa Foto Katalog Produk & Editing',
        description: 'Fotografi produk profesional dengan editing berkualitas',
        price: 300000,
        type: 'SERVICE',
        bludCode: 'BLUD-DKV-003',
        stock: 0,
        imageUrls: [],
      },
    }),
    // MPLB Products
    prisma.productService.create({
      data: {
        majorId: mplb.id,
        title: 'Sewa Ruang Meeting / Mini Hall SMKN 1 Bantul',
        description: 'Ruang meeting kapasitas 50 orang dengan fasilitas lengkap',
        price: 500000,
        type: 'SERVICE',
        bludCode: 'BLUD-MPLB-001',
        stock: 0,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: mplb.id,
        title: 'Jasa Event Organizer (EO) Seminar Sederhana',
        description: 'Layanan EO untuk seminar dan acara sederhana',
        price: 2000000,
        type: 'SERVICE',
        bludCode: 'BLUD-MPLB-002',
        stock: 0,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: mplb.id,
        title: 'Jasa Digitalisasi & Archiving Dokumen Fisik',
        description: 'Konversi dokumen fisik ke format digital dengan sistem arsip terorganisir',
        price: 2000,
        type: 'SERVICE',
        bludCode: 'BLUD-MPLB-003',
        stock: 0,
        imageUrls: [],
      },
    }),
    // AKL Products
    prisma.productService.create({
      data: {
        majorId: akl.id,
        title: 'Jasa Penyusunan Laporan Keuangan Bulanan UMKM',
        description: 'Laporan keuangan lengkap untuk kebutuhan bisnis Anda',
        price: 500000,
        type: 'SERVICE',
        bludCode: 'BLUD-AKL-001',
        stock: 0,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: akl.id,
        title: 'Jasa Pendampingan Pembukuan Kas & SPT Sederhana',
        description: 'Pendampingan pembukuan dan pelaporan pajak sederhana',
        price: 350000,
        type: 'SERVICE',
        bludCode: 'BLUD-AKL-002',
        stock: 0,
        imageUrls: [],
      },
    }),
    // PM Products
    prisma.productService.create({
      data: {
        majorId: pm.id,
        title: 'Merchandise Official SMKN 1 Bantul (Tote Bag & Tumbler)',
        description: 'Tote bag dan tumbler official dengan logo sekolah',
        price: 85000,
        type: 'PRODUCT',
        bludCode: 'BLUD-PM-001',
        stock: 100,
        imageUrls: [],
      },
    }),
    prisma.productService.create({
      data: {
        majorId: pm.id,
        title: 'Paket Catering Snack Box Teaching Factory',
        description: 'Snack box higienis dan lezat untuk berbagai acara',
        price: 15000,
        type: 'PRODUCT',
        bludCode: 'BLUD-PM-002',
        stock: 200,
        imageUrls: [],
      },
    }),
  ])

  console.log(`Seeded ${majors.length} majors and ${products.length} products/services`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
