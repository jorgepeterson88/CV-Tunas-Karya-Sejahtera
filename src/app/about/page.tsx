'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Award, Users, Target, Shield, CheckCircle, Calendar, TrendingUp, Globe, Handshake, FileText, Building, Eye, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Integritas",
      description: "Kami berkomitmen untuk selalu jujur, transparan, dan bertanggung jawab dalam setiap bisnis yang kami jalankan."
    },
    {
      icon: Users,
      title: "Profesionalisme",
      description: "Tim kami terdiri dari para ahli berpengalaman yang siap memberikan solusi terbaik untuk kebutuhan pertanian Anda."
    },
    {
      icon: Target,
      title: "Kualitas Terjamin",
      description: "Semua produk kami melalui proses quality control ketat untuk memastikan kualitas terbaik."
    },
    {
      icon: Heart,
      title: "Kepedulian Lingkungan",
      description: "Kami mendukung praktik pertanian berkelanjutan yang ramah lingkungan."
    },
    {
      icon: Handshake,
      title: "Kemitraan",
      description: "Membangun hubungan jangka panjang yang saling menguntungkan dengan semua mitra bisnis."
    },
    {
      icon: TrendingUp,
      title: "Inovasi",
      description: "Terus mengembangkan produk dan layanan inovatif untuk mendukung kemajuan pertanian Indonesia."
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Berdiri",
      description: "CV TUNAS KARYA SEJAHTERA didirikan dengan fokus pada perdagangan pupuk dan produk agrokimia."
    },
    {
      year: "2016",
      title: "Ekspansi Distribusi",
      description: "Memperluas jaringan distribusi ke pulau Jawa dan Sumatera."
    },
    {
      year: "2018",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi ISO 9001:2015 untuk sistem manajemen mutu."
    },
    {
      year: "2020",
      title: "Digitalisasi",
      description: "Meluncurkan sistem manajemen inventory digital untuk meningkatkan efisiensi."
    },
    {
      year: "2022",
      title: "Ekspansi Produk",
      description: "Menambahkan lini produk pupuk organik dan pestisida ramah lingkungan."
    },
    {
      year: "2024",
      title: "Komitmen Berkelanjutan",
      description: "Berkomitmen penuh pada praktik pertanian berkelanjutan dan ramah lingkungan."
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Sistem Manajemen Mutu",
      issuer: "Sistem Sertifikasi Internasional",
      valid: "2020 - 2025"
    },
    {
      name: "SNI Produk Pupuk",
      description: "Standar Nasional Indonesia",
      issuer: "Badan Standardisasi Nasional",
      valid: "Berlaku Selamanya"
    },
    {
      name: "Sertifikat Distributor Resmi",
      description: "Distributor Tersertifikasi Produk Agrokimia",
      issuer: "Kementerian Pertanian RI",
      valid: "2019 - 2024"
    },
    {
      name: "Sertifikat Halal",
      description: "Produk Halal untuk Pertanian",
      issuer: "Majelis Ulama Indonesia",
      valid: "2021 - 2026"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tentang Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Mitra Terpercaya dalam Perdagangan Besar Pupuk dan Produk Agrokimia
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                CV TUNAS KARYA SEJAHTERA
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  CV TUNAS KARYA SEJAHTERA adalah perusahaan yang bergerak di bidang Perdagangan Besar 
                  Pupuk dan Produk Agrokimia yang telah berdiri sejak tahun 2014. Dengan pengalaman 
                  lebih dari 10 tahun, kami telah menjadi mitra terpercaya bagi ribuan petani, 
                  distributor, dan perusahaan perkebunan di seluruh Indonesia.
                </p>
                <p>
                  Perusahaan kami berfokus pada penyediaan berbagai jenis pupuk berkualitas tinggi 
                  serta bahan kimia pertanian untuk mendukung produktivitas sektor agrikultur. 
                  Kami mendistribusikan produk secara grosir kepada toko pertanian, distributor regional, 
                  koperasi tani, maupun langsung ke perusahaan perkebunan besar.
                </p>
                <p>
                  Dengan komitmen pada kualitas, integritas, dan kepuasan pelanggan, kami terus 
                  berinovasi untuk memberikan solusi terbaik bagi kemajuan pertanian Indonesia.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Globe className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Jangkauan Nasional</h4>
                    <p className="text-sm text-gray-600 mt-1">Seluruh Indonesia</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">500+ Klien</h4>
                    <p className="text-sm text-gray-600 mt-1">Puas bekerja sama</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Award className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Sertifikasi</h4>
                    <p className="text-sm text-gray-600 mt-1">ISO 9001:2015</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Gudang</h4>
                    <p className="text-sm text-gray-600 mt-1">Strategis & Modern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Visi & Misi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Panduan kami dalam setiap langkah untuk mencapai kesuksesan bersama
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-900">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi perusahaan terdepan dan terpercaya dalam perdagangan besar pupuk dan 
                produk agrokimia di Indonesia, yang mendukung ketahanan pangan nasional melalui 
                praktik pertanian berkelanjutan dan inovatif.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-600">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Misi</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Menyediakan produk pupuk dan agrokimia berkualitas tinggi dengan harga kompetitif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Membangun jaringan distribusi yang luas dan efisien di seluruh Indonesia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Memberikan layanan konsultasi teknis yang profesional kepada pelanggan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mendukung praktik pertanian berkelanjutan yang ramah lingkungan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Terus berinovasi dalam pengembangan produk dan layanan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                      <value.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 ml-3">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Perjalanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sejak 2014, kami terus berkembang dan berinovasi untuk mendukung pertanian Indonesia
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-900 to-blue-700"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-900">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-900 mr-2" />
                      <span className="text-lg font-bold text-blue-900">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Sertifikasi & Legalitas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bukti komitmen kami terhadap kualitas dan kepatuhan standar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg mx-auto mb-4 group-hover:shadow-md transition-all duration-300">
                    <FileText className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 text-center mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 text-center mb-2">{cert.description}</p>
                  <p className="text-xs text-gray-500 text-center mb-1">Diterbitkan oleh: {cert.issuer}</p>
                  <p className="text-xs text-green-600 text-center font-semibold">Berlaku: {cert.valid}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Ratusan Klien Puas Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rasakan layanan terbaik dan produk berkualitas dari CV TUNAS KARYA SEJAHTERA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Hubungi Kami Sekarang
            </Link>
            <Link 
              href="/services"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 inline-block"
            >
              Lihat Layanan Kami
            </Link>
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