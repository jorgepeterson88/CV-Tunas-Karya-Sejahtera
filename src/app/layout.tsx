import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CV TUNAS KARYA SEJAHTERA - Perdagangan Besar Pupuk dan Produk Agrokimia",
  description: "Perusahaan terpercaya dalam perdagangan besar pupuk dan produk agrokimia. Menyediakan pupuk berkualitas, pestisida, dan layanan konsultasi untuk mendukung produktivitas pertanian Indonesia.",
  keywords: ["CV TUNAS KARYA SEJAHTERA", "pupuk", "agrokimia", "pestisida", "distributor pupuk", "pertanian", "perkebunan", "pupuk organik", "pupuk anorganik", "NPK", "Urea", "ZA", "KCL", "SP-36"],
  authors: [{ name: "CV TUNAS KARYA SEJAHTERA" }],
  creator: "CV TUNAS KARYA SEJAHTERA",
  publisher: "CV TUNAS KARYA SEJAHTERA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "CV TUNAS KARYA SEJAHTERA - Perdagangan Besar Pupuk dan Produk Agrokimia",
    description: "Perusahaan terpercaya dalam perdagangan besar pupuk dan produk agrokimia. Menyediakan pupuk berkualitas, pestisida, dan layanan konsultasi untuk mendukung produktivitas pertanian Indonesia.",
    url: "https://tunaskaryasejahtera.com",
    siteName: "CV TUNAS KARYA SEJAHTERA",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV TUNAS KARYA SEJAHTERA - Perdagangan Besar Pupuk dan Produk Agrokimia",
    description: "Perusahaan terpercaya dalam perdagangan besar pupuk dan produk agrokimia. Menyediakan pupuk berkualitas, pestisida, dan layanan konsultasi untuk mendukung produktivitas pertanian Indonesia.",
  },
  alternates: {
    canonical: "https://tunaskaryasejahtera.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
