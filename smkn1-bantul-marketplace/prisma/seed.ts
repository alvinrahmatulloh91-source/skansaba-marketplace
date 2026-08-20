import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database for SMKN 1 Bantul Marketplace...')

  const majors = await prisma.major.createMany({
    data: [
      {
        id: 'major-rpl',
        name: 'Rekayasa Perangkat Lunak',
        code: 'RPL',
        slug: 'rpl',
        description: 'Pengembangan aplikasi web, mobile, dan desktop dengan teknologi terkini',
      },
      {
        id: 'major-dkv',
        name: 'Desain Komunikasi Visual',
        code: 'DKV',
        slug: 'dkv',
        description: 'Desain grafis, branding, multimedia, dan konten kreatif digital',
      },
      {
        id: 'major-mplb',
        name: 'Manajemen Perkantoran & Layanan Bisnis',
        code: 'MPLB',
        slug: 'mplb',
        description: 'Administrasi perkantoran modern dan layanan bisnis profesional',
      },
      {
        id: 'major-akl',
        name: 'Akuntansi Keuangan Lembaga',
        code: 'AKL',
        slug: 'akl',
        description: 'Pengelolaan keuangan, akuntansi, dan layanan keuangan institusi',
      },
      {
        id: 'major-pm',
        name: 'Pemasaran',
        code: 'PM',
        slug: 'pm',
        description: 'Strategi pemasaran digital, retail, dan pengembangan bisnis',
      },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Majors seeded')

  const products = await prisma.productService.createMany({
    data: [
      // RPL Products & Services
      {
        id: 'prod-rpl-001',
        majorId: 'major-rpl',
        title: 'Jasa Pembuatan Website Profile UMKM',
        description: 'Website profil usaha profesional dengan desain responsif, CMS mudah digunakan, dan optimasi SEO dasar. Cocok untuk UMKM yang ingin go digital.',
        price: 1500000,
        type: 'SERVICE',
        bludCode: 'BLUD-RPL-001',
        stock: 0,
        galleryUrls: ['/images/products/rpl-website.jpg'],
        isActive: true,
      },
      {
        id: 'prod-rpl-002',
        majorId: 'major-rpl',
        title: 'Aplikasi Kasir (POS) Android Sederhana',
        description: 'Aplikasi point of sale berbasis Android dengan fitur manajemen produk, transaksi, laporan penjualan harian, dan export data.',
        price: 750000,
        type: 'PRODUCT',
        bludCode: 'BLUD-RPL-002',
        stock: 50,
        galleryUrls: ['/images/products/rpl-pos.jpg'],
        isActive: true,
      },
      {
        id: 'prod-rpl-003',
        majorId: 'major-rpl',
        title: 'UI/UX Design & Prototyping Mobile App',
        description: 'Jasa desain antarmuka dan pengalaman pengguna untuk aplikasi mobile. Termasuk wireframe, mockup high-fidelity, dan interactive prototype.',
        price: 500000,
        type: 'SERVICE',
        bludCode: 'BLUD-RPL-003',
        stock: 0,
        galleryUrls: ['/images/products/rpl-uiux.jpg'],
        isActive: true,
      },

      // DKV Products & Services
      {
        id: 'prod-dkv-001',
        majorId: 'major-dkv',
        title: 'Jasa Cetak Sublimasi Mug Custom & Pin',
        description: 'Cetak mug dan pin custom dengan teknik sublimasi berkualitas tinggi. Desain bisa disesuaikan dengan kebutuhan promosi atau merchandise.',
        price: 25000,
        type: 'PRODUCT',
        bludCode: 'BLUD-DKV-001',
        stock: 500,
        galleryUrls: ['/images/products/dkv-mug.jpg'],
        isActive: true,
      },
      {
        id: 'prod-dkv-002',
        majorId: 'major-dkv',
        title: 'Paket Desain Logo & Branding Kit UMKM',
        description: 'Paket lengkap branding untuk UMKM termasuk desain logo, kartu nama, kop surat, amplop, dan panduan penggunaan brand identity.',
        price: 350000,
        type: 'SERVICE',
        bludCode: 'BLUD-DKV-002',
        stock: 0,
        galleryUrls: ['/images/products/dkv-branding.jpg'],
        isActive: true,
      },
      {
        id: 'prod-dkv-003',
        majorId: 'major-dkv',
        title: 'Jasa Foto Katalog Produk & Editing',
        description: 'Sesi foto produk profesional untuk katalog e-commerce atau media sosial. Termasuk editing warna, background removal, dan retouching.',
        price: 300000,
        type: 'SERVICE',
        bludCode: 'BLUD-DKV-003',
        stock: 0,
        galleryUrls: ['/images/products/dkv-foto.jpg'],
        isActive: true,
      },

      // MPLB Products & Services
      {
        id: 'prod-mplb-001',
        majorId: 'major-mplb',
        title: 'Sewa Ruang Meeting / Mini Hall SMKN 1 Bantul',
        description: 'Ruang meeting atau mini hall berkapasitas 50-100 orang dengan fasilitas projector, sound system, WiFi, dan AC. Cocok untuk seminar, workshop, atau rapat.',
        price: 500000,
        type: 'SERVICE',
        bludCode: 'BLUD-MPLB-001',
        stock: 0,
        galleryUrls: ['/images/products/mplb-meeting.jpg'],
        isActive: true,
      },
      {
        id: 'prod-mplb-002',
        majorId: 'major-mplb',
        title: 'Jasa Event Organizer (EO) Seminar Sederhana',
        description: 'Layanan event organizer untuk seminar atau workshop skala kecil-menengah. Termasuk pendaftaran peserta, dokumentasi, konsumsi, dan protokol acara.',
        price: 2000000,
        type: 'SERVICE',
        bludCode: 'BLUD-MPLB-002',
        stock: 0,
        galleryUrls: ['/images/products/mplb-eo.jpg'],
        isActive: true,
      },
      {
        id: 'prod-mplb-003',
        majorId: 'major-mplb',
        title: 'Jasa Digitalisasi & Archiving Dokumen Fisik',
        description: 'Layanan scan dan digitalisasi dokumen fisik menjadi format digital. Dilengkapi dengan sistem pengarsipan terstruktur untuk kemudahan pencarian.',
        price: 2000,
        type: 'SERVICE',
        bludCode: 'BLUD-MPLB-003',
        stock: 0,
        galleryUrls: ['/images/products/mplb-scan.jpg'],
        isActive: true,
      },

      // AKL Products & Services
      {
        id: 'prod-akl-001',
        majorId: 'major-akl',
        title: 'Jasa Penyusunan Laporan Keuangan Bulanan UMKM',
        description: 'Penyusunan laporan keuangan lengkap termasuk neraca, laba rugi, arus kas, dan catatan atas laporan keuangan sesuai standar akuntansi.',
        price: 500000,
        type: 'SERVICE',
        bludCode: 'BLUD-AKL-001',
        stock: 0,
        galleryUrls: ['/images/products/akl-laporan.jpg'],
        isActive: true,
      },
      {
        id: 'prod-akl-002',
        majorId: 'major-akl',
        title: 'Jasa Pendampingan Pembukuan Kas & SPT Sederhana',
        description: 'Pendampingan pencatatan keuangan harian, pembukuan kas masuk-keluar, dan penyusunan SPT tahunan sederhana untuk UMKM.',
        price: 350000,
        type: 'SERVICE',
        bludCode: 'BLUD-AKL-002',
        stock: 0,
        galleryUrls: ['/images/products/akl-pembukuan.jpg'],
        isActive: true,
      },

      // PM Products & Services
      {
        id: 'prod-pm-001',
        majorId: 'major-pm',
        title: 'Merchandise Official SMKN 1 Bantul (Tote Bag & Tumbler)',
        description: 'Merchandise resmi sekolah dengan desain eksklusif. Tersedia tote bag kanvas premium dan tumbler stainless steel tahan panas/dingin.',
        price: 85000,
        type: 'PRODUCT',
        bludCode: 'BLUD-PM-001',
        stock: 200,
        galleryUrls: ['/images/products/pm-merchandise.jpg'],
        isActive: true,
      },
      {
        id: 'prod-pm-002',
        majorId: 'major-pm',
        title: 'Paket Catering Snack Box Teaching Factory',
        description: 'Snack box untuk acara sekolah, meeting, atau workshop. Menu bervariasi dengan bahan segar dan higienis. Minimal pemesanan 20 box.',
        price: 15000,
        type: 'PRODUCT',
        bludCode: 'BLUD-PM-002',
        stock: 500,
        galleryUrls: ['/images/products/pm-catering.jpg'],
        isActive: true,
      },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Products & Services seeded')

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@smkn1bantul.sch.id' },
    update: {},
    create: {
      email: 'admin@smkn1bantul.sch.id',
      name: 'Admin BLUD',
      password: '$2a$10$rQZ9vXJxK5z8hN9qY6LqxeGp8vF5nH7mK2wP4tR6sU8vW0xY2zA4B',
      role: 'SUPER_ADMIN_BLUD',
    },
  })

  console.log('✅ Admin user created')

  console.log('🎉 Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
