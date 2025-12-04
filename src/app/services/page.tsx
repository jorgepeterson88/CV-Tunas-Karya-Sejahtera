'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Sprout, FlaskConical, Shield, Truck, Users, Building2, CheckCircle, Star, Package, Leaf, Droplets, Zap, Factory, Warehouse, Store, TreePine, Bug, Microscope } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      category: 'fertilizer',
      icon: Sprout,
      title: "Perdagangan Grosir Pupuk",
      description: "Menyediakan berbagai jenis pupuk berkualitas tinggi untuk mendukung produktivitas pertanian Anda.",
      features: [
        "Pupuk Organik berkualitas premium",
        "Pupuk Anorganik dengan nutrisi lengkap",
        "Pupuk NPK, Urea, ZA, KCL, SP-36",
        "Formulasi khusus sesuai kebutuhan tanaman",
        "Kemasan berbagai ukuran (1kg - 50kg)"
      ],
      color: "green"
    },
    {
      id: 2,
      category: 'agrochemical',
      icon: FlaskConical,
      title: "Perdagangan Produk Agrokimia",
      description: "Supplier terpercaya untuk berbagai produk agrokimia berkualitas dengan harga kompetitif.",
      features: [
        "Pestisida lengkap (insektisida, fungisida, herbisida)",
        "Zat Pengatur Tumbuh (ZPT)",
        "Pupuk daun dan nutrisi tambahan",
        "Bahan kimia pengendali hama penyakit",
        "Produk aman dan bersertifikasi"
      ],
      color: "blue"
    },
    {
      id: 3,
      category: 'distribution',
      icon: Truck,
      title: "Distribusi & Suplai",
      description: "Jaringan distribusi luas dengan pengiriman tepat waktu ke seluruh Indonesia.",
      features: [
        "Jangkauan distribusi nasional",
        "Fleet pengiriman modern dan terawat",
        "Sistem tracking real-time",
        "Gudang strategis di berbagai lokasi",
        "Tim logistik profesional"
      ],
      color: "purple"
    },
    {
      id: 4,
      category: 'consultation',
      icon: Users,
      title: "Konsultasi Teknik & Sipil",
      description: "Layanan konsultasi profesional untuk perencanaan infrastruktur pertanian dan proyek perkebunan.",
      features: [
        "Perencanaan infrastruktur pertanian",
        "Desain sistem irigasi",
        "Perencanaan gudang dan fasilitas",
        "Konsultasi manajemen perkebunan",
        "Study kelayakan proyek"
      ],
      color: "orange"
    }
  ];

  const fertilizerTypes = [
    {
      name: "Pupuk Organik",
      icon: Leaf,
      description: "Pupuk alami dari bahan organik yang ramah lingkungan dan meningkatkan kesuburan tanah jangka panjang.",
      benefits: [
        "Memperbaiki struktur tanah",
        "Meningkatkan kapasitas tahan air",
        "Aman untuk lingkungan",
        "Hasil pertanian lebih sehat"
      ]
    },
    {
      name: "Pupuk Anorganik",
      icon: Zap,
      description: "Pupuk kimia dengan nutrisi lengkap yang cepat terserap tanaman untuk pertumbuhan optimal.",
      benefits: [
        "Nutrisi lengkap dan seimbang",
        "Cepat terserap tanaman",
        "Hasil cepat terlihat",
        "Dosis mudah diukur"
      ]
    },
    {
      name: "Pupuk NPK",
      icon: Droplets,
      description: "Pupuk lengkap dengan kandungan Nitrogen, Phosfat, dan Kalium untuk pertumbuhan tanaman seimbang.",
      benefits: [
        "Stimulasi pertumbuhan vegetatif",
        "Meningkatkan produksi bunga dan buah",
        "Memperkuat akar dan batang",
        "Cocok untuk semua jenis tanaman"
      ]
    },
    {
      name: "Pupuk Urea",
      icon: Microscope,
      description: "Sumber nitrogen tertinggi untuk pertumbuhan daun dan bagian hijau tanaman yang subur.",
      benefits: [
        "Kandungan nitrogen 46%",
        "Meningkatkan produktivitas",
        "Mudah larut dalam air",
        "Harga ekonomis"
      ]
    }
  ];

  const pesticideTypes = [
    {
      name: "Insektisida",
      icon: Bug,
      description: "Produk pengendali hama serangga yang efektif melindungi tanaman dari berbagai jenis hama.",
      types: [
        "Insektisida sistemik",
        "Insektisida kontak",
        "Insektisida lambung",
        "Insektisida biologis"
      ]
    },
    {
      name: "Fungisida",
      icon: Shield,
      description: "Produk pengendali penyakit jamur yang melindungi tanaman dari infeksi patogen.",
      types: [
        "Fungisida protektif",
        "Fungisida kuratif",
        "Fungisida sistemik",
        "Fungisida kontak"
      ]
    },
    {
      name: "Herbisida",
      icon: TreePine,
      description: "Produk pengendali gulma yang efektif membersihkan lahan dari tanaman pengganggu.",
      types: [
        "Herbisida selektif",
        "Herbisida non-selektif",
        "Herbisida pra-tumbuh",
        "Herbisida pasca-tumbuh"
      ]
    }
  ];

  const targetMarkets = [
    {
      name: "Toko Pertanian",
      icon: Store,
      description: "Suplier utama untuk toko-toko pertanian dengan harga grosir dan pengiriman reguler.",
      benefits: [
        "Harga grosir kompetitif",
        "Pengiriman tepat waktu",
        "Produk lengkap satu atap",
        "Program promo dan diskon"
      ]
    },
    {
      name: "Distributor Regional",
      icon: Warehouse,
      description: "Mitra distribusi untuk jangkauan area yang lebih luas dengan dukungan pemasaran.",
      benefits: [
        "Margin keuntungan menarik",
        "Dukungan marketing",
        "Sistem order yang mudah",
        "Training produk reguler"
      ]
    },
    {
      name: "Koperasi Tani",
      icon: Users,
      description: "Solusi khusus untuk kebutuhan kolektif petani dengan harga khusus koperasi.",
      benefits: [
        "Harga khusus koperasi",
        "Pembayaran fleksibel",
        "Program subsidi",
        "Pelatihan pertanian"
      ]
    },
    {
      name: "Perkebunan Besar",
      icon: Factory,
      description: "Supplier resmi untuk perusahaan perkebunan dengan kontrak jangka panjang.",
      benefits: [
        "Kontrak supply jangka panjang",
        "Kualitas terjamin",
        "Dedicated account manager",
        "Custom formulation"
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

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
              Layanan Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Solusi Lengkap untuk Kebutuhan Pertanian dan Perkebunan Anda
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-white sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              Semua Layanan
            </button>
            <button
              onClick={() => setActiveCategory('fertilizer')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'fertilizer'
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              Pupuk
            </button>
            <button
              onClick={() => setActiveCategory('agrochemical')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'agrochemical'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              Agrokimia
            </button>
            <button
              onClick={() => setActiveCategory('distribution')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'distribution'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              Distribusi
            </button>
            <button
              onClick={() => setActiveCategory('consultation')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'consultation'
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              Konsultasi
            </button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${
                      service.color === 'green' ? 'from-green-600 to-green-500' :
                      service.color === 'blue' ? 'from-blue-600 to-blue-500' :
                      service.color === 'purple' ? 'from-purple-600 to-purple-500' :
                      'from-orange-600 to-orange-500'
                    } rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 ml-4">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-900 mb-3">Fitur Layanan:</h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fertilizer Types */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Jenis Pupuk Unggulan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kualitas terbaik untuk hasil pertanian optimal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fertilizerTypes.map((fertilizer, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-lg mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <fertilizer.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 text-center mb-3">{fertilizer.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{fertilizer.description}</p>
                  <div className="space-y-2">
                    {fertilizer.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pesticide Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Produk Pestisida Lengkap</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perlindungan maksimal untuk tanaman Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pesticideTypes.map((pesticide, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <pesticide.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 text-center mb-3">{pesticide.name}</h3>
                  <p className="text-gray-600 text-center mb-6">{pesticide.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-900 text-center mb-3">Jenis Produk:</h4>
                    {pesticide.types.map((type, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Package className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Pasar Sasaran</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mitra bisnis untuk berbagai segmen industri pertanian
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarkets.map((market, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <market.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 text-center mb-3">{market.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{market.description}</p>
                  <div className="space-y-2">
                    {market.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami mitra terpercaya Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Kualitas Terjamin",
                description: "Semua produk melalui quality control ketat dan bersertifikasi resmi"
              },
              {
                icon: Truck,
                title: "Distribusi Cepat",
                description: "Jaringan logistik modern dengan pengiriman tepat waktu"
              },
              {
                icon: Users,
                title: "Layanan Profesional",
                description: "Tim ahli siap memberikan konsultasi dan dukungan teknis"
              },
              {
                icon: Building2,
                title: "Gudang Strategis",
                description: "Lokasi penyimpanan strategis untuk memastikan ketersediaan stok"
              },
              {
                icon: Package,
                title: "Produk Lengkap",
                description: "One-stop solution untuk semua kebutuhan pertanian"
              },
              {
                icon: Star,
                title: "Harga Kompetitif",
                description: "Harga grosir terbaik dengan kualitas premium"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 ml-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
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
            Siap Memulai Kerjasama?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan pertanian Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Hubungi Kami Sekarang
            </Link>
            <Link 
              href="/about"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 inline-block"
            >
              Pelajari Lebih Lanjut
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