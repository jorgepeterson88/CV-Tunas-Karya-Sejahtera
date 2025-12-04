'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Award, Users, TrendingUp, Shield, Sprout, Building2, Truck, Leaf, Beaker, Package, Wrench, Home, FileText, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check visibility for scroll animations
      const sections = ['about', 'services', 'portfolio', 'contact'];
      const newVisibility: { [key: string]: boolean } = {};
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          newVisibility[section] = isVisible;
        }
      });
      
      setIsVisible(prev => ({ ...prev, ...newVisibility }));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">CV TUNAS KARYA</h1>
                <p className="text-xs text-yellow-600 font-semibold">SEJAHTERA</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Kami
              </button>
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
                <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Portfolio</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/5 rounded-full blur-lg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              CV TUNAS KARYA
              <span className="block text-yellow-400">SEJAHTERA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Perdagangan Besar Pupuk dan Produk Agrokimia Terpercaya
            </p>
            
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
              Mendukung produktivitas sektor agrikultur dengan menyediakan pupuk berkualitas 
              dan bahan kimia pertanian untuk rantai pasok yang aman, efisien, dan berskala besar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-yellow-400 hover:to-yellow-500"
              >
                Hubungi Kami
                <ChevronRight className="inline-block ml-2" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Layanan Kami
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll</span>
            <ChevronRight className="rotate-90" size={24} />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Klien Puas", value: "500+" },
              { icon: Sprout, label: "Produk Agrokimia", value: "100+" },
              { icon: Truck, label: "Pengiriman", value: "50K/Tahun" },
              { icon: Award, label: "Pengalaman", value: "10+ Tahun" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className={`py-20 bg-white transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Mengapa Memilih
                <span className="text-yellow-600"> CV TUNAS KARYA SEJAHTERA?</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Perusahaan kami bergerak di bidang Perdagangan Besar Pupuk dan Produk Agrokimia, 
                  menyediakan berbagai jenis pupuk berkualitas serta bahan kimia pertanian untuk 
                  mendukung produktivitas sektor agrikultur.
                </p>
                <p>
                  Kami mendistribusikan produk secara grosir kepada toko pertanian, distributor regional, 
                  koperasi tani, maupun langsung ke perusahaan perkebunan besar dengan standar layanan 
                  profesional dan jaminan kualitas produk.
                </p>
                <p>
                  Dengan fokus pada rantai pasok pertanian yang aman, efisien, dan berskala besar, 
                  kami berkomitmen menjadi mitra terpercaya dalam memenuhi kebutuhan nutrisi dan 
                  perlindungan tanaman Anda.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Shield, title: "Berkualitas Terjamin", desc: "Produk bersertifikasi dan standar internasional" },
                  { icon: TrendingUp, title: "Harga Kompetitif", desc: "Solusi terbaik untuk kebutuhan pertanian Anda" },
                  { icon: Truck, title: "Distribusi Luas", desc: "Jangkauan pengiriman ke seluruh Indonesia" },
                  { icon: Users, title: "Layanan Profesional", desc: "Tim ahli siap membantu kebutuhan Anda" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                      <feature.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Sprout className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Pupuk Organik</h4>
                    <p className="text-sm text-gray-600 mt-1">Ramah lingkungan</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Pupuk Anorganik</h4>
                    <p className="text-sm text-gray-600 mt-1">Nutrisi lengkap</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Pestisida</h4>
                    <p className="text-sm text-gray-600 mt-1">Perlindungan maksimal</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Truck className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900">Distribusi</h4>
                    <p className="text-sm text-gray-600 mt-1">Tepat waktu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan pertanian dan agroindustri dengan produk berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Perdagangan Pupuk */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Sprout className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Perdagangan Pupuk</h3>
                  <p className="text-gray-600">Kualitas terjamin untuk hasil maksimal</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Pupuk Organik</h4>
                    <p className="text-gray-600 text-sm">Ramah lingkungan, meningkatkan kesuburan tanah secara alami</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Pupuk Anorganik</h4>
                    <p className="text-gray-600 text-sm">Nutrisi lengkap untuk pertumbuhan tanaman optimal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Pupuk NPK, Urea, ZA, KCL, SP-36</h4>
                    <p className="text-gray-600 text-sm">Berbagai formula untuk kebutuhan spesifik tanaman</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Produk Agrokimia */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Beaker className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Produk Agrokimia</h3>
                  <p className="text-gray-600">Perlindungan tanaman terpercaya</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Pestisida</h4>
                    <p className="text-gray-600 text-sm">Insektisida, fungisida, herbisida lengkap</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">ZPT (Zat Pengatur Tumbuh)</h4>
                    <p className="text-gray-600 text-sm">Meningkatkan pertumbuhan dan hasil panen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Bahan Kimia Pertanian</h4>
                    <p className="text-gray-600 text-sm">Pengendalian hama dan penyakit tanaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Distribusi & Suplai</h4>
              <p className="text-gray-600 text-sm">
                Jaringan distribusi luas untuk toko pertanian, distributor regional, koperasi tani, dan perkebunan besar
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Konsultasi Teknik</h4>
              <p className="text-gray-600 text-sm">
                Konsultasi profesional untuk penggunaan pupuk dan produk agrokimia yang optimal
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Konstruksi & Sipil</h4>
              <p className="text-gray-600 text-sm">
                Perencanaan dan pengembangan infrastruktur pertanian dan perkebunan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 bg-white transition-all duration-1000 ${isVisible.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Project Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyek-proyek berhasil yang telah kami kerjakan untuk berbagai klien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Distribusi Pupuk untuk Perkebunan Kelapa Sawit",
                category: "Agroindustri",
                description: "Suplai rutin pupuk NPK dan organik untuk 5,000 hektar perkebunan kelapa sawit di Sumatera",
                image: "🌴"
              },
              {
                title: "Pengembangan Gudang Distribusi",
                category: "Infrastruktur",
                description: "Konstruksi gudang modern seluas 2,000 m2 untuk penyimpanan produk agrokimia",
                image: "🏭"
              },
              {
                title: "Program Subsidi Pupuk Pemerintah",
                category: "Kerjasama",
                description: "Mitra resmi program subsidi pupuk untuk 10,000 petani di Jawa Barat",
                image: "🤝"
              },
              {
                title: "Sistem Distribusi Modern",
                category: "Logistik",
                description: "Implementasi sistem distribusi terintegrasi untuk 50 toko pertanian",
                image: "🚚"
              },
              {
                title: "Konsultasi Pertanian Organik",
                category: "Konsultasi",
                description: "Program konversi pertanian konvensional ke organik untuk 3 koperasi",
                image: "🌱"
              },
              {
                title: "Pengembangan Housing Project",
                category: "Properti",
                description: "Perencanaan infrastruktur untuk perumahan karyawan perkebunan",
                image: "🏘️"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
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
            Siap Meningkatkan Produktivitas Pertanian Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik 
            untuk kebutuhan pupuk dan produk agrokimia Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="inline-block mr-2" size={20} />
              Hubungi Kami Sekarang
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Lihat Layanan Lengkap
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim kami siap membantu kebutuhan pertanian dan agroindustri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                    placeholder="Konsultasi Produk"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                      <p className="text-gray-600">+6287855340730</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">info@tunaskaryasejahtera.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Jam Operasional</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat:</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu:</span>
                    <span className="font-semibold">08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu:</span>
                    <span className="font-semibold">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <h3 className="text-xl font-bold mb-2">Lokasi Kami</h3>
                <p className="text-blue-100">Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat</p>
              </div>
              <div className="relative h-96 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d107.01257141477172!3d-6.321248695393636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991dd5c7b6c7f%3A0x1234567890abcdef!2sCV%20TUNAS%20KARYA%20SEJAHTERA!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
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
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Phone size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <MapPin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Layanan Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Perdagangan Pupuk</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Produk Agrokimia</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Distribusi & Suplai</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Konsultasi Teknik</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Konstruksi & Sipil</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
                <li><a href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Kontak Kami</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span className="text-sm">Jl. Kalimantan Blok B6/74, Jatiasih, Bekasi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+6287855340730</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@tunaskaryasejahtera.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 CV TUNAS KARYA SEJAHTERA. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-conditions" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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