import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "SMKN 1 Bantul - Marketplace & BLUD Portal",
  description: "Platform resmi produk dan jasa inovatif karya siswa SMK Negeri 1 Bantul. Mendukung program Teaching Factory (TEFA) dan Badan Layanan Umum Daerah (BLUD).",
  keywords: ["SMK Negeri 1 Bantul", "BLUD", "Marketplace", "TEFA", "Produk Siswa", "Jasa Profesional"],
  authors: [{ name: "SMKN 1 Bantul" }],
  openGraph: {
    title: "SMKN 1 Bantul - Marketplace & BLUD Portal",
    description: "Platform resmi produk dan jasa inovatif karya siswa SMK Negeri 1 Bantul.",
    url: "https://smkn1bantul.sch.id",
    siteName: "SMKN 1 Bantul Marketplace",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
