'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Shield, Lock, Database, Eye, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Shield className="text-blue-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Perlindungan data pribadi Anda adalah prioritas utama kami
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
                  Di CV TUNAS KARYA SEJAHTERA, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                  sesuai dengan standar internasional GDPR (General Data Protection Regulation).
                </p>
              </div>

              {/* Data Collection */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Database className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Pengumpulan Data</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kami mengumpulkan data pribadi Anda untuk tujuan berikut:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Informasi identifikasi (nama, email, nomor telepon, alamat)</li>
                    <li>Informasi bisnis (nama perusahaan, jabatan, kebutuhan produk)</li>
                    <li>Data transaksi (riwayat pembelian, preferensi produk)</li>
                    <li>Informasi teknis (alamat IP, browser, perangkat yang digunakan)</li>
                    <li>Komunikasi (email, panggilan telepon, pesan)</li>
                  </ul>
                </div>
              </div>

              {/* Data Usage */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Penggunaan Data</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Data pribadi Anda digunakan untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Memproses dan menyelesaikan transaksi bisnis</li>
                    <li>Memberikan layanan pelanggan dan dukungan teknis</li>
                    <li>Mengirimkan informasi produk dan penawaran khusus</li>
                    <li>Meningkatkan kualitas layanan dan produk kami</li>
                    <li>Memenuhi kewajiban hukum dan peraturan</li>
                    <li>Analisis bisnis dan pengembangan strategi pemasaran</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Lock className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Perlindungan Data</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kami melindungi data pribadi Anda dengan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Enkripsi data selama transmisi dan penyimpanan</li>
                    <li>Akses terbatas hanya untuk authorized personnel</li>
                    <li>Firewall dan sistem keamanan berlapis</li>
                    <li>Backup data teratur dan recovery plan</li>
                    <li>Audit keamanan berkala</li>
                    <li>Pelatihan staf tentang perlindungan data</li>
                  </ul>
                </div>
              </div>

              {/* User Rights */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="text-blue-900" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Hak Anda</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Sesuai GDPR, Anda memiliki hak untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                    <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                    <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi</li>
                    <li><strong>Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                    <li><strong>Portabilitas:</strong> Memindahkan data ke layanan lain</li>
                    <li><strong>Penolakan:</strong> Menolak pemrosesan data tertentu</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <AlertCircle className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Cookies dan Tracking</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Website kami menggunakan cookies untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mengingat preferensi dan pengaturan Anda</li>
                    <li>Menganalisis traffic dan penggunaan website</li>
                    <li>Menyediakan konten yang dipersonalisasi</li>
                    <li>Meningkatkan keamanan website</li>
                  </ul>
                  <p>
                    Anda dapat mengontrol cookies melalui pengaturan browser Anda.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Hubungi Kami</h3>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin melaksanakan hak Anda, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@tunaskaryasejahtera.com</p>
                  <p><strong>Telepon:</strong> +6287855340730</p>
                  <p><strong>Alamat:</strong> Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat</p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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