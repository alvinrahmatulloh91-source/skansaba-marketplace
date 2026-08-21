import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Marketplace BLUD - SMK Negeri 1 Bantul',
  description: 'Unit Usaha Resmi BLUD SMK Negeri 1 Bantul. Produk dan jasa inovatif karya siswa dari berbagai jurusan.',
  keywords: ['BLUD', 'SMK Negeri 1 Bantul', 'Teaching Factory', 'TEFA', 'Produk Siswa', 'Jasa Siswa'],
  authors: [{ name: 'SMK Negeri 1 Bantul' }],
  openGraph: {
    title: 'Marketplace BLUD - SMK Negeri 1 Bantul',
    description: 'Unit Usaha Resmi BLUD SMK Negeri 1 Bantul',
    url: 'https://smkn1bantul.sch.id/',
    siteName: 'SMK Negeri 1 Bantul',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marketplace BLUD SMKN 1 Bantul',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-[#0F2C59] text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-14 text-sm">
                <a 
                  href="https://smkn1bantul.sch.id/" 
                  className="hover:text-[#F8DE22] transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Unit Usaha Resmi BLUD SMK Negeri 1 Bantul</span>
                </a>
                <nav className="hidden md:flex items-center gap-6">
                  <a href="https://smkn1bantul.sch.id/" className="hover:text-[#F8DE22] transition-colors">Portal Sekolah</a>
                  <a href="#produk" className="hover:text-[#F8DE22] transition-colors">Produk & Jasa</a>
                  <a href="#b2b" className="hover:text-[#F8DE22] transition-colors">Kemitraan B2B</a>
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-[#0F2C59] text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-[#F8DE22]">SMK Negeri 1 Bantul</h3>
                  <p className="text-gray-300 mb-4 max-w-md">
                    Unit Usaha BLUD yang menghasilkan produk dan jasa berkualitas dari Teaching Factory 
                    untuk mendukung kemandirian dan keterampilan siswa.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="https://smkn1bantul.sch.id/" className="text-gray-300 hover:text-[#F8DE22] transition-colors">
                      smkn1bantul.sch.id
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-[#F8DE22]">Jurusan</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#rpl" className="hover:text-white transition-colors">RPL</a></li>
                    <li><a href="#dkv" className="hover:text-white transition-colors">DKV</a></li>
                    <li><a href="#mplb" className="hover:text-white transition-colors">MPLB</a></li>
                    <li><a href="#akl" className="hover:text-white transition-colors">AKL</a></li>
                    <li><a href="#pm" className="hover:text-white transition-colors">Pemasaran</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-[#F8DE22]">Kontak</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Jl. Pramuka No. 1, Bantul</li>
                    <li>info@smkn1bantul.sch.id</li>
                    <li>(0274) 123456</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} SMK Negeri 1 Bantul. Unit Usaha BLUD.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
