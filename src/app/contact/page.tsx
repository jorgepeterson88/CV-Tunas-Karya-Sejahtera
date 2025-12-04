'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, Users, Building, Truck } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "+6287855340730",
      href: "tel:+6287855340730"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@tunaskaryasejahtera.com",
      href: "mailto:info@tunaskaryasejahtera.com"
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat",
      href: "https://maps.google.com/?q=Jl.+Kalimantan+Blok+B6%2F74+Jatirasa+Jatiasih+Bekasi"
    }
  ];

  const officeHours = [
    { day: "Senin - Jumat", hours: "08:00 - 17:00" },
    { day: "Sabtu", hours: "08:00 - 15:00" },
    { day: "Minggu", hours: "Tutup" },
    { day: "Hari Libur", hours: "Tutup" }
  ];

  const services = [
    "Perdagangan Grosir Pupuk",
    "Produk Agrokimia",
    "Distribusi & Suplai",
    "Konsultasi Teknik & Sipil",
    "Lainnya"
  ];

  const quickContacts = [
    {
      title: "Sales & Marketing",
      person: "Bapak Ahmad Wijaya",
      phone: "+6287855340730",
      email: "sales@tunaskaryasejahtera.com",
      icon: Users
    },
    {
      title: "Customer Service",
      person: "Ibu Siti Nurhaliza",
      phone: "+6287855340731",
      email: "cs@tunaskaryasejahtera.com",
      icon: MessageSquare
    },
    {
      title: "Logistics & Distribution",
      person: "Bapak Budi Santoso",
      phone: "+6287855340732",
      email: "logistics@tunaskaryasejahtera.com",
      icon: Truck
    },
    {
      title: "Technical Support",
      person: "Bapak Ir. Hendra Kusuma",
      phone: "+6287855340733",
      email: "technical@tunaskaryasejahtera.com",
      icon: Building
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
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kami siap membantu kebutuhan pertanian dan perkebunan Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <info.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 text-center mb-2">{info.label}</h3>
                  <a 
                    href={info.href}
                    className="text-gray-600 text-center hover:text-blue-900 transition-colors block"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Silakan isi form di bawah ini dan tim kami akan segera menghubungi Anda.
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="text-green-600 mr-3" size={20} />
                  <span className="text-green-800">Pesan Anda telah berhasil dikirim!</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="text-red-600 mr-3" size={20} />
                  <span className="text-red-800">Terjadi kesalahan. Silakan coba lagi.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      No. Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="+62xxx-xxxx-xxxx"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Map & Office Hours */}
            <div className="space-y-8">
              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Lokasi Kami</h2>
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d107.00977731477077!3d-6.268529995463678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e0e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sJl.+Kalimantan+Blok+B6%2F74%2C+Jatirasa%2C+Kec.+Jatiasih%2C+Kota+Bekasi%2C+Jawa+Barat!5e0!3m2!1sid!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              
              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Jam Operasional</h3>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className={`font-semibold ${
                          schedule.hours === "Tutup" ? "text-red-600" : "text-green-600"
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Kontak Langsung</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hubungi tim kami yang sesuai dengan kebutuhan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 text-center mb-2">{contact.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{contact.person}</p>
                  <div className="space-y-2">
                    <a 
                      href={`tel:${contact.phone}`}
                      className="flex items-center justify-center text-sm text-gray-600 hover:text-blue-900 transition-colors"
                    >
                      <Phone size={14} className="mr-2" />
                      {contact.phone}
                    </a>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="flex items-center justify-center text-sm text-gray-600 hover:text-blue-900 transition-colors"
                    >
                      <Mail size={14} className="mr-2" />
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-lg text-gray-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "Apakah CV TUNAS KARYA SEJAHTERA melayani pembelian eceran?",
                answer: "Kami fokus pada perdagangan besar (grosir) untuk toko pertanian, distributor, koperasi tani, dan perusahaan perkebunan. Untuk pembelian eceran, silakan menghubungi toko pertanian terdekat yang menjadi mitra kami."
              },
              {
                question: "Bagaimana cara menjadi distributor resmi?",
                answer: "Anda dapat menghubungi tim Sales & Marketing kami melalui email sales@tunaskaryasejahtera.com atau telepon +6287855340730. Kami akan memproses aplikasi distributor Anda dan memberikan informasi lengkap mengenai syarat dan keuntungan menjadi mitra kami."
              },
              {
                question: "Apakah produk yang dijual sudah bersertifikasi?",
                answer: "Ya, semua produk kami telah memiliki sertifikasi resmi dari Badan Standardisasi Nasional (SNI), Kementerian Pertanian, dan sertifikasi halal dari MUI. Kami juga memiliki ISO 9001:2015 untuk sistem manajemen mutu."
              },
              {
                question: "Berapa lama waktu pengiriman?",
                answer: "Waktu pengiriman tergantung pada lokasi dan volume pesanan. Untuk area Jabodetabek, pengiriman biasanya 1-3 hari. Untuk luar pulau, waktu pengiriman 5-10 hari. Kami juga menyediakan layanan pengiriman darat, laut, dan udara sesuai kebutuhan."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
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