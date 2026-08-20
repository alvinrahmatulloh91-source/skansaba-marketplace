# SMKN 1 Bantul Marketplace & BLUD Portal

Platform e-commerce dan portal resmi Badan Layanan Umum Daerah (BLUD) untuk SMK Negeri 1 Bantul.

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router, TypeScript)
- **Styling**: Tailwind CSS, Shadcn UI
- **Icons**: Lucide React
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: NextAuth.js / Supabase Auth
- **State Management**: Zustand
- **Payment Gateway**: Midtrans / Xendit (Sandbox)

## 🎨 Design System

### Color Palette
- **Primary Navy Blue**: `#0F2C59` - Identitas sekolah & BLUD resmi
- **Secondary Amber Gold**: `#F8DE22` - Aksen tombol CTA & highlight TEFA
- **Accent Gold**: `#C9A063` - Elemen premium
- **Neutral Light**: `#F8F9FA` - Background
- **Neutral Charcoal**: `#1E293B` - Text

### Typography
- Primary: Inter
- Secondary: Plus Jakarta Sans

## 📁 Project Structure

```
smkn1-bantul-marketplace/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── (storefront)/      # Public store routes
│   │   ├── (dashboard)/       # Admin dashboard routes
│   │   └── api/               # API endpoints
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── storefront/        # Product cards, filters
│   │   ├── dashboard/         # Admin components
│   │   └── ui/                # Reusable UI components
│   ├── lib/                   # Utilities, Prisma client
│   ├── stores/                # Zustand stores
│   └── types/                 # TypeScript types
├── .env.example               # Environment variables template
└── package.json
```

## 🛠️ Setup & Installation

### 1. Clone Repository
```bash
git clone <repository-url>
cd smkn1-bantul-marketplace
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your credentials:
- DATABASE_URL (PostgreSQL connection string)
- NEXTAUTH_SECRET (generate with `openssl rand -base64 32`)
- Payment gateway keys (Midtrans/Xendit)

### 4. Database Setup
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations (after setting up database)
npx prisma migrate dev

# (Optional) Seed database
npx prisma db seed
```

### 5. Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

### Core Entities
- **User**: Super Admin BLUD, Admin Jurusan, Buyer
- **Major**: RPL, DKV, MPLB, AKL, PM
- **ProductService**: Products & Services per major
- **Order**: Customer orders with payment status
- **OrderItem**: Order line items
- **B2BPartnership**: Industry partnership proposals

## 🔐 User Roles

1. **SUPER_ADMIN_BLUD**
   - Rekapitulasi omzet total
   - Persetujuan kerja sama industri
   - Manajemen akun jurusan

2. **ADMIN_JURUSAN**
   - Input produk/jasa baru
   - Manajemen status pesanan
   - Unggah portofolio jurusan

3. **BUYER**
   - Browse katalog produk/jasa
   - Place orders
   - Track order status

## 🎯 Key Features

### Public Storefront
- Landing page dengan banner hero
- Filtering berdasarkan Jurusan & Tipe
- Katalog Tarif Resmi BLUD
- Portal Pengajuan Kerja Sama B2B
- Cart & Checkout dengan Payment Gateway

### Admin Dashboard
- Revenue analytics (Recharts)
- Order management
- Product/service CRUD
- Partnership approval workflow

## 📱 Responsive Design

- Mobile-first approach
- Sidebar dashboard untuk admin
- Sticky navigation bar untuk e-commerce
- Optimized for all screen sizes

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for SMKN 1 Bantul.

## 📞 Contact

SMK Negeri 1 Bantul
- Website: https://smkn1bantul.sch.id
- Email: blud@smkn1bantul.sch.id
- Address: Jl. Pramuka No. 77, Bantul, Yogyakarta

---

Built with ❤️ for SMKN 1 Bantul
