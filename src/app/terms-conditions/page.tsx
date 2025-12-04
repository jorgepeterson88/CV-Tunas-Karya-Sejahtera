'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, FileText, Shield, AlertTriangle, Gavel, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsConditions() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-900">CV TUNAS KARYA</h1>
                  <p className="text-xs text-yellow-600 font-semibold">SEJAHTERA</p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About Us</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Services</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Portfolio</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Home</Link>
                <Link href="/#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About Us</Link>
                <Link href="/#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Services</Link>
                <Link href="/#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Portfolio</Link>
                <Link href="/#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-6">
              <Gavel className="text-blue-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Aturan penggunaan website dan layanan CV TUNAS KARYA SEJAHTERA
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di website CV TUNAS KARYA SEJAHTERA. Dengan mengakses dan menggunakan website ini, 
                  Anda setuju untuk mematuhi syarat dan ketentuan yang berlaku. Harap baca dengan seksama sebelum 
                  melanjutkan penggunaan layanan kami.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Penerimaan Syarat</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Dengan mengakses website ini, Anda menyatakan bahwa:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                    <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                    <li>Anda memiliki kapasitas hukum untuk mengikatkan diri dalam perjanjian</li>
                    <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
                  </ul>
                </div>
              </div>

              {/* Website Usage */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Penggunaan Website</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Anda diperbolehkan untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mengakses dan menelusuri konten website untuk tujuan informasi</li>
                    <li>Mengunduh materi untuk penggunaan pribadi dan non-komersial</li>
                    <li>Menghubungi kami untuk pertanyaan bisnis</li>
                    <li>Mengisi formulir kontak dengan informasi yang akurat</li>
                  </ul>
                  
                  <p className="mt-4">
                    Anda tidak diperbolehkan untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Menggunakan website untuk kegiatan ilegal atau tidak sah</li>
                    <li>Meng-copy, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                    <li>Mengirimkan virus, malware, atau kode berbahaya</li>
                    <li>Melakukan spam atau mengirimkan pesan yang tidak diinginkan</li>
                    <li>Mencoba mendapatkan akses tidak sah ke sistem kami</li>
                  </ul>
                </div>
              </div>

              {/* Products and Services */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Produk dan Layanan</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mengenai produk dan layanan kami:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Informasi produk disajikan seakurat mungkin namun dapat berubah tanpa pemberitahuan</li>
                    <li>Harga produk dapat berubah sewaktu-waktu sesuai kondisi pasar</li>
                    <li>Ketersediaan produk tergantung pada stok yang ada</li>
                    <li>Pemesanan produk memerlukan konfirmasi dari tim kami</li>
                    <li>Spesifikasi produk dapat disesuaikan dengan kebutuhan klien</li>
                  </ul>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Tanggung Jawab Pengguna</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Sebagai pengguna, Anda bertanggung jawab untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Memberikan informasi yang akurat dan terkini</li>
                    <li>Menjaga kerahasiaan informasi akun dan kata sandi</li>
                    <li>Memperbarui informasi pribadi secara berkala</li>
                    <li>Melaporkan penyalahgunaan atau aktivitas mencurigakan</li>
                    <li>Tidak membagikan informasi rahasia perusahaan</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Gavel className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Hak Kekayaan Intelektual</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Semua konten di website ini dilindungi oleh hak kekayaan intelektual:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Logo, desain, dan merek dagang adalah milik CV TUNAS KARYA SEJAHTERA</li>
                    <li>Konten teks, gambar, dan video dilindungi hak cipta</li>
                    <li>Penggunaan tanpa izin dapat dikenakan sanksi hukum</li>
                    <li>Referensi atau kutipan harus mencantumkan sumber</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Pembatasan Tanggung Jawab</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    CV TUNAS KARYA SEJAHTERA tidak bertanggung jawab atas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kerugian langsung atau tidak langsung dari penggunaan website</li>
                    <li>Keterlambatan atau gangguan layanan</li>
                    <li>Kehilangan data atau informasi</li>
                    <li>Konten dari pihak ketiga yang terhubung dengan website kami</li>
                    <li>Kesalahan teknis atau sistem yang tidak dapat diprediksi</li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Hukum yang Berlaku</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Syarat dan ketentuan ini diatur oleh:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hukum Republik Indonesia</li>
                    <li>Peraturan perundang-undangan yang berlaku di Indonesia</li>
                    <li>Sengketa akan diselesaikan melalui perundingan baik-baik</li>
                    <li>Jika tidak mencapai kesepakatan, diselesaikan melalui pengadilan yang berwenang</li>
                  </ul>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Perubahan Syarat & Ketentuan</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kami berhak untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Memperbarui syarat dan ketentuan sewaktu-waktu</li>
                    <li>Memberitahukan perubahan melalui website atau email</li>
                    <li>Perubahan berlaku efektif setelah diumumkan</li>
                    <li>Penggunaan lanjutan berarti setuju dengan perubahan</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Hubungi Kami</h3>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan kami, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@tunaskaryasejahtera.com</p>
                  <p><strong>Telepon:</strong> +6287855340730</p>
                  <p><strong>Alamat:</strong> Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat</p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Syarat & Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CV TUNAS KARYA</h3>
                  <p className="text-yellow-400 text-sm">SEJAHTERA</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan perdagangan besar pupuk dan produk agrokimia terpercaya di Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Layanan Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#services" className="hover:text-yellow-400 transition-colors">Perdagangan Pupuk</a></li>
                <li><a href="/#services" className="hover:text-yellow-400 transition-colors">Produk Agrokimia</a></li>
                <li><a href="/#services" className="hover:text-yellow-400 transition-colors">Distribusi & Suplai</a></li>
                <li><a href="/#services" className="hover:text-yellow-400 transition-colors">Konsultasi Teknik</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#about" className="hover:text-yellow-400 transition-colors">Tentang Kami</a></li>
                <li><a href="/#portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
                <li><a href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Kontak Kami</h4>
              <div className="space-y-3 text-gray-400">
                <p>Jl. Kalimantan Blok B6/74, Jatiasih, Bekasi</p>
                <p>+6287855340730</p>
                <p>info@tunaskaryasejahtera.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV TUNAS KARYA SEJAHTERA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}