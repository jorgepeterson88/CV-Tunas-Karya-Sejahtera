'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Building, Sprout, Truck, Factory, Store, Filter, Search, ChevronRight, ExternalLink, Award, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Suplai Pupuk NPK untuk Perkebunan Kelapa Sawit",
      category: "fertilizer",
      client: "PT. Agro Makmur Sejahtera",
      location: "Riau, Sumatera",
      date: "2023",
      duration: "12 bulan",
      value: "Rp 15 Miliar",
      description: "Proyek suplai pupuk NPK komposisi khusus untuk 5.000 hektar perkebunan kelapa sawit dengan hasil produktivitas meningkat 25%.",
      image: "/api/placeholder/600/400",
      features: [
        "Pupuk NPK 15-15-15 khusus kelapa sawit",
        "Aplikasi teknis dan monitoring berkala",
        "Training petani aplikasi pupuk",
        "Hasil: peningkatan produktivitas 25%"
      ],
      status: "completed",
      technologies: ["NPK Khusus", "Monitoring Digital", "Training Petani"]
    },
    {
      id: 2,
      title: "Distribusi Pestisida untuk Koperasi Tani Jawa Tengah",
      category: "pesticide",
      client: "Koperasi Tani Makmur Bersama",
      location: "Jawa Tengah",
      date: "2023",
      duration: "8 bulan",
      value: "Rp 8 Miliar",
      description: "Program distribusi pestisida lengkap untuk 200 kelompok tani dengan total area 10.000 hektar pertanian padi dan sayuran.",
      image: "/api/placeholder/600/400",
      features: [
        "Insektisida, fungisida, herbisida lengkap",
        "Distribusi ke 200 kelompok tani",
        "Demo aplikasi dan pelatihan",
        "Hasil: penurunan serangan hama 60%"
      ],
      status: "completed",
      technologies: ["Integrated Pest Management", "Distribution Network", "Farmer Training"]
    },
    {
      id: 3,
      title: "Konsultasi Infrastruktur untuk Pabrik Pengolahan Pupuk",
      category: "consultation",
      client: "PT. Pupuk Nusantara",
      location: "Surabaya, Jawa Timur",
      date: "2024",
      duration: "6 bulan",
      value: "Rp 5 Miliar",
      description: "Perencanaan dan desain infrastruktur pabrik pengolahan pupuk organik kapasitas 50.000 ton per tahun.",
      image: "/api/placeholder/600/400",
      features: [
        "Master plan pabrik pengolahan",
        "Design sistem produksi",
        "Perencanaan logistik",
        "Study kelayakan proyek"
      ],
      status: "ongoing",
      technologies: ["Factory Design", "Production System", "Logistics Planning"]
    },
    {
      id: 4,
      title: "Program Suplai Pupuk Organik untuk Pertanian Berkelanjutan",
      category: "fertilizer",
      client: "Kementerian Pertanian RI",
      location: "Berbagai lokasi di Indonesia",
      date: "2023-2024",
      duration: "18 bulan",
      value: "Rp 25 Miliar",
      description: "Program nasional suplai pupuk organik untuk mendukung pertanian berkelanjutan di 15 provinsi.",
      image: "/api/placeholder/600/400",
      features: [
        "Suplai 100.000 ton pupuk organik",
        "15 provinsi, 50 kabupaten",
        "Sosialisasi dan pelatihan",
        "Monitoring dan evaluasi"
      ],
      status: "ongoing",
      technologies: ["Organic Fertilizer", "National Program", "Sustainability"]
    },
    {
      id: 5,
      title: "Sistem Distribusi Modern untuk 500 Toko Pertanian",
      category: "distribution",
      client: "Asosiasi Pengusaha Toko Pertanian Indonesia",
      location: "Seluruh Indonesia",
      date: "2023",
      duration: "12 bulan",
      value: "Rp 12 Miliar",
      description: "Implementasi sistem distribusi modern dengan teknologi tracking untuk 500 toko pertanian anggota asosiasi.",
      image: "/api/placeholder/600/400",
      features: [
        "Sistem tracking real-time",
        "500 toko pertanian",
        "Aplikasi order mobile",
        "Efisiensi biaya 30%"
      ],
      status: "completed",
      technologies: ["Digital Tracking", "Mobile App", "Logistics System"]
    },
    {
      id: 6,
      title: "Proyek Housing Development dengan Fasilitas Pertanian",
      category: "consultation",
      client: "PT. Griya Taman Asri",
      location: "Tangerang, Banten",
      date: "2024",
      duration: "24 bulan",
      value: "Rp 18 Miliar",
      description: "Perencanaan dan konsultasi proyek perumahan dengan fasilitas pertanian urban dan kebun sayur komunal.",
      image: "/api/placeholder/600/400",
      features: [
        "Master plan perumahan 10 ha",
        "Fasilitas pertanian urban",
        "Kebun komunal 2 ha",
        "Sistem irigasi modern"
      ],
      status: "ongoing",
      technologies: ["Urban Farming", "Housing Development", "Irrigation System"]
    },
    {
      id: 7,
      title: "Suplai ZPT untuk Perkebunan Teh Jawa Barat",
      category: "agrochemical",
      client: "PT. Perkebunan Nusantara VIII",
      location: "Jawa Barat",
      date: "2023",
      duration: "6 bulan",
      value: "Rp 6 Miliar",
      description: "Suplai Zat Pengatur Tumbuh (ZPT) khusus untuk perkebunan teh seluas 3.000 hektar.",
      image: "/api/placeholder/600/400",
      features: [
        "ZPT khusus tanaman teh",
        "3.000 hektar perkebunan",
        "Aplikasi teknis berkala",
        "Hasil: kualitas daun teh meningkat"
      ],
      status: "completed",
      technologies: ["Plant Growth Regulator", "Tea Plantation", "Quality Improvement"]
    },
    {
      id: 8,
      title: "Program Pengembangan Distributor Regional Kalimantan",
      category: "distribution",
      client: "15 Distributor Regional",
      location: "Kalimantan",
      date: "2023-2024",
      duration: "18 bulan",
      value: "Rp 10 Miliar",
      description: "Program pengembangan jaringan distributor regional di seluruh Kalimantan dengan dukungan pemasaran dan training.",
      image: "/api/placeholder/600/400",
      features: [
        "15 distributor regional",
        "5 provinsi di Kalimantan",
        "Program marketing support",
        "Training produk dan manajemen"
      ],
      status: "ongoing",
      technologies: ["Distribution Network", "Marketing Support", "Training Program"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Proyek', icon: Building },
    { id: 'fertilizer', name: 'Pupuk', icon: Sprout },
    { id: 'pesticide', name: 'Pestisida', icon: Award },
    { id: 'agrochemical', name: 'Agrokimia', icon: Factory },
    { id: 'distribution', name: 'Distribusi', icon: Truck },
    { id: 'consultation', name: 'Konsultasi', icon: Users }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: "Total Proyek", value: "150+", icon: Building },
    { label: "Klien Puas", value: "95%", icon: Users },
    { label: "Nilai Proyek", value: "Rp 500M+", icon: DollarSign },
    { label: "Tingkat Keberhasilan", value: "98%", icon: TrendingUp }
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
              Portfolio Proyek
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Bukudari Keberhasilan dan Pengalaman Kami dalam Berbagai Proyek Pertanian
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon size={18} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status === 'completed' ? 'Selesai' : 'Berjalan'}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold line-clamp-2">{project.title}</h3>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500 font-medium">{project.client}</span>
                      <span className="text-sm text-blue-900 font-semibold">{project.value}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                      <span>Lihat Detail</span>
                      <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Tidak Ada Proyek Ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tertarik Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mari diskusikan proyek Anda dan dapatkan solusi terbaik untuk kebutuhan pertanian Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Mulai Konsultasi
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}