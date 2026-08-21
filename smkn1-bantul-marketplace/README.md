# Marketplace BLUD - SMK Negeri 1 Bantul

Platform e-commerce dan portal Teaching Factory untuk SMK Negeri 1 Bantul.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS + Custom Components
- **Database**: PostgreSQL dengan Prisma ORM
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Fitur Utama

### Public Storefront
- Landing page dengan banner hero "Produk & Jasa Inovasi Karya Siswa"
- Filtering berdasarkan Jurusan (RPL, DKV, MPLB, AKL, PM) dan Tipe (Produk/Jasa)
- Katalog Tarif Resmi BLUD
- Portal Pengajuan Kerja Sama B2B
- Cart & Checkout (terintegrasi Payment Gateway)

### Admin Dashboard
- **Super Admin BLUD**: Rekapitulasi omzet, persetujuan kerja sama industri, manajemen akun jurusan
- **Admin Jurusan**: Input produk/jasa baru, manajemen status pesanan, unggah portofolio

## Setup & Installation

### Prerequisites
- Node.js 20+
- PostgreSQL database (Supabase recommended)
- npm atau yarn

### Langkah Instalasi

1. Clone repository dan install dependencies:
```bash
npm install
```

2. Copy file environment:
```bash
cp .env.example .env.local
```

3. Konfigurasi DATABASE_URL di `.env.local`:
```
DATABASE_URL="postgresql://user:password@host:5432/database_name"
```

4. Generate Prisma Client:
```bash
npm run prisma:generate
```

5. Jalankan migrasi database:
```bash
npm run prisma:migrate
```

6. Seed data awal (jurusan & produk):
```bash
npx prisma db seed
```

7. Jalankan development server:
```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## Database Schema

- **User**: id, name, email, passwordHash, role, majorId, createdAt
- **Major**: id, name, code, slug, description
- **ProductService**: id, majorId, title, description, price, type, bludCode, stock, imageUrls
- **Order**: id, customerName, customerEmail, totalAmount, paymentStatus, orderStatus
- **OrderItem**: id, orderId, productId, quantity, price
- **B2BPartnership**: id, companyName, contactPerson, email, proposalDetails, status

## Payment Gateway Integration

Untuk mengintegrasikan Midtrans/Xendit:

1. Install SDK:
```bash
npm install midtrans-client
```

2. Buat API route di `/api/payment/create` untuk generate payment token
3. Handle webhook di `/api/payment/notification` untuk update status pembayaran

## Color Palette

- **Primary Navy Blue**: `#0F2C59` - Identitas sekolah & BLUD resmi
- **Secondary Gold**: `#F8DE22` - Aksen tombol CTA & highlight TEFA
- **Accent Gold**: `#C9A063` - Elemen premium
- **Charcoal**: `#1E293B` - Teks utama
- **Light Gray**: `#F8F9FA` - Background

## License

SMK Negeri 1 Bantul - Unit Usaha BLUD
