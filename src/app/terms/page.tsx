'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, Users, Package, Gavel, CheckCircle, Info, X } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'acceptance',
      title: 'Penerimaan Syarat',
      icon: CheckCircle,
      content: [
        'Dengan mengakses dan menggunakan website CV TUNAS KARYA SEJAHTERA ("Website"), Anda menyetujui dan terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui syarat dan ketentuan ini, jangan menggunakan Website ini.',
        'CV TUNAS KARYA SEJAHTERA berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan efektif segera setelah diposting di Website ini. Penggunaan Anda yang berkelanjutan constitutes penerimaan Anda terhadap perubahan tersebut.'
      ]
    },
    {
      id: 'services',
      title: 'Deskripsi Layanan',
      icon: Package,
      content: [
        'CV TUNAS KARYA SEJAHTERA menyediakan informasi tentang produk dan layanan kami meliputi:',
        '• Perdagangan besar pupuk dan produk agrokimia',
        '• Distribusi dan suplai untuk sektor pertanian & perkebunan',
        '• Konsultasi teknik & sipil untuk proyek infrastruktur',
        '• Informasi produk dan harga',
        '• Form kontak untuk pertanyaan dan permintaan',
        '• Informasi perusahaan dan portofolio proyek',
        'Kami berhak untuk mengubah, menangguhkan, atau menghentikan layanan kami kapan saja dengan atau tanpa pemberitahuan sebelumnya.'
      ]
    },
    {
      id: 'user-obligations',
      title: 'Kewajiban Pengguna',
      icon: Users,
      content: [
        'Sebagai pengguna Website, Anda setuju untuk:',
        '• Memberikan informasi yang akurat, lengkap, dan terkini saat menggunakan form kontak',
        '• Tidak menggunakan Website untuk tujuan ilegal atau tidak sah',
        '• Tidak mengirimkan materi yang melanggar hak kekayaan intelektual pihak ketiga',
        '• Tidak mencoba merusak atau mengganggu operasi Website',
        '• Tidak menggunakan robot, spider, atau alat otomatis lainnya untuk mengakses Website',
        '• Menghormati hak dan privasi pengguna lain',
        'Pelanggaran terhadap kewajiban ini dapat mengakibatkan penangguhan atau penghentian akses Anda ke Website.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Hak Kekayaan Intelektual',
      icon: Shield,
      content: [
        'Semua konten, materi, dan fitur yang tersedia di Website ini, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, klip audio, dan perangkat lunak, adalah milik CV TUNAS KARYA SEJAHTERA atau pemberi lisensinya dan dilindungi oleh hukum hak kekayaan intelektual.',
        'Anda tidak diperbolehkan:',
        '• Mendistribusikan ulang, menjual, atau melisensikan konten Website',
        '• Menggunakan konten Website untuk tujuan komersial tanpa izin tertulis',
        '• Menyalin, mereproduksi, atau mendistribusikan konten Website',
        '• Membuat karya turunan dari konten Website'
      ]
    },
    {
      id: 'disclaimer',
      title: 'Penafian (Disclaimer)',
      icon: AlertTriangle,
      content: [
        'Informasi yang disediakan di Website ini adalah untuk tujuan informasi umum saja. Kami berusaha untuk memastikan keakuratan informasi, namun tidak membuat jaminan apapun mengenai kelengkapan, keakuratan, reliabilitas, atau ketersediaan informasi.',
        'Website ini mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung jawab atas konten, praktik privasi, atau kebijakan website pihak ketiga.',
        'Penggunaan informasi dari Website ini sepenuhnya merupakan risiko Anda sendiri. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan Website ini.'
      ]
    },
    {
      id: 'limitation-of-liability',
      title: 'Pembatasan Tanggung Jawab',
      icon: Gavel,
      content: [
        'Sejauh diizinkan oleh hukum, CV TUNAS KARYA SEJAHTERA tidak bertanggung jawab atas:',
        '• Kerugian langsung, tidak langsung, insidental, atau konsekuensial apa pun yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan Website',
        '• Kerugian yang disebabkan oleh virus atau komponen berbahaya lainnya',
        '• Kesalahan, kelalaian, atau ketidakkonsistenan dalam informasi yang disediakan',
        '• Gangguan atau kegagalan teknis dalam operasi Website',
        'Tanggung jawab maksimum kami kepada Anda untuk semua klaim yang timbul dari penggunaan Website tidak akan melebihi jumlah yang Anda bayarkan kepada kami, jika ada.'
      ]
    }
  ];

  const prohibitedActivities = [
    'Mengirimkan spam, email tidak diminta, atau materi promosi',
    'Mengunggah atau mendistribusikan malware, virus, atau kode berbahaya lainnya',
    'Mencoba mendapatkan akses tidak sah ke sistem atau data kami',
    'Menggunakan Website untuk mengumpulkan informasi tentang pengguna lain',
    'Melakukan kegiatan yang melanggar hukum atau peraturan yang berlaku',
    'Mengganggu atau mengganggu pengalaman pengguna lain',
    'Mencoba meniru identitas orang lain atau entitas'
  ];

  const userRights = [
    {
      title: 'Hak Akses',
      description: 'Anda berhak mengakses Website kami dan menggunakan layanan yang tersedia sesuai dengan syarat dan ketentuan ini.'
    },
    {
      title: 'Hak Informasi',
      description: 'Anda berhak mendapatkan informasi yang akurat dan terkini tentang produk dan layanan kami.'
    },
    {
      title: 'Hak Privasi',
      description: 'Data pribadi Anda akan dilindungi sesuai dengan Kebijakan Privasi kami.'
    },
    {
      title: 'Hukum Perlindungan Konsumen',
      description: 'Hak Anda sebagai konsumen dilindungi oleh hukum yang berlaku.'
    }
  ];

  const legalInfo = [
    {
      label: 'Nama Perusahaan',
      value: 'CV TUNAS KARYA SEJAHTERA'
    },
    {
      label: 'Bidang Usaha',
      value: 'Perdagangan Besar Pupuk dan Produk Agrokimia'
    },
    {
      label: 'Alamat',
      value: 'Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat'
    },
    {
      label: 'Email',
      value: 'info@tunaskaryasejahtera.com'
    },
    {
      label: 'Telepon',
      value: '+6287855340730'
    },
    {
      label: 'Website',
      value: 'www.tunaskaryasejahtera.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">CV TUNAS KARYA</h1>
                <p className="text-xs text-yellow-600 font-semibold">SEJAHTERA</p>
              </div>
            </Link>

            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mx-auto mb-6">
              <FileText className="text-blue-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Aturan penggunaan website dan hak kewajiban pengguna
            </p>
            <p className="text-lg text-blue-200 mt-4 max-w-2xl mx-auto">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-blue-900">
            <div className="flex items-center mb-4">
              <Info className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">Penting Dibaca</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Syarat dan Ketentuan ini merupakan perjanjian hukum antara Anda dan CV TUNAS KARYA SEJAHTERA. 
              Harap baca dengan seksama sebelum menggunakan website kami. Dengan menggunakan website ini, 
              Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan yang berlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white sticky top-0 z-30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Daftar Isi</h2>
          <div className="flex flex-wrap gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-900 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <section.icon size={16} />
                <span className="font-medium">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">{section.title}</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Prohibited Activities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Aktivitas yang Dilarang</h2>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border border-red-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                Pengguna dilarang keras untuk melakukan aktivitas berikut saat menggunakan Website kami:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Hak Pengguna</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">{right.title}</h3>
                  <p className="text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Informasi Perusahaan</h2>
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalInfo.map((info, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2 text-yellow-400">{info.label}</h4>
                    <p className="text-blue-100">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Hukum yang Berlaku</h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau sehubungan dengan Syarat dan Ketentuan ini akan diselesaikan 
                melalui negosiasi yang baik secara terlebih dahulu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika sengketa tidak dapat diselesaikan melalui negosiasi, para pihak sepakat untuk menyelesaikannya 
                melalui pengadilan yang berwenang di Kota Bekasi, Jawa Barat.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Hubungi Kami</h2>
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <p className="text-blue-100 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-blue-100">legal@tunaskaryasejahtera.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Telepon</h4>
                  <p className="text-blue-100">+6287855340730</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Alamat</h4>
                  <p className="text-blue-100 text-sm">
                    Jl. Kalimantan Blok B6/74, Kel. Jatirasa, 
                    Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Jam Operasional</h4>
                  <p className="text-blue-100">Senin - Jumat: 08:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Update Notice */}
          <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
            <div className="flex items-start">
              <AlertTriangle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Pembaruan Syarat dan Ketentuan</h4>
                <p className="text-yellow-700 text-sm">
                  Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan efektif segera 
                  setelah diposting di website ini. Penggunaan Anda yang berkelanjutan constitutes penerimaan 
                  Anda terhadap perubahan tersebut. Kami merekomendasikan untuk secara berkala meninjau 
                  Syarat dan Ketentuan ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}