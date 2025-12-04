import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, service } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Mohon lengkapi semua field yang wajib diisi' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Create email content using ZAI
    const emailContent = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Anda adalah asisten profesional yang membantu membuat email konfirmasi untuk CV TUNAS KARYA SEJAHTERA. 
          Buat email konfirmasi yang profesional dan ramah dalam Bahasa Indonesia. 
          Format email harus memiliki:
          1. Subject yang jelas
          2. Salam pembuka yang sopan
          3. Ucapan terima kasih
          4. Ringkasan informasi kontak
          5. Informasi follow-up
          6. Salam penutup
          
          Informasi perusahaan:
          - Nama: CV TUNAS KARYA SEJAHTERA
          - Bidang: Perdagangan Besar Pupuk dan Produk Agrokimia
          - Telepon: +6287855340730
          - Email: info@tunaskaryasejahtera.com
          - Alamat: Jl. Kalimantan Blok B6/74, Kel. Jatirasa, Kec. Jatiasih, Kota Bekasi, Provinsi Jawa Barat`
        },
        {
          role: 'user',
          content: `Buat email konfirmasi untuk pesan yang masuk dengan detail berikut:
          
          Nama: ${name}
          Email: ${email}
          Telepon: ${phone}
          Perusahaan: ${company || 'Tidak disebutkan'}
          Layanan: ${service || 'Tidak disebutkan'}
          Subjek: ${subject}
          Pesan: ${message}
          
          Buat email yang akan dikirim ke pelanggan sebagai konfirmasi bahwa pesan mereka telah diterima dan akan segera diproses.`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    // Get the generated email content
    const generatedEmail = emailContent.choices[0]?.message?.content;

    if (!generatedEmail) {
      throw new Error('Failed to generate email content');
    }

    // Here you would typically:
    // 1. Save the contact form data to a database
    // 2. Send email to the company
    // 3. Send confirmation email to the customer
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.',
      confirmationEmail: generatedEmail
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}