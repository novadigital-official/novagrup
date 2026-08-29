import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, hotel, hotelName, phone, email, department, message } = body;
    const resolvedHotel = hotel || hotelName;

    // Validate required fields (email is optional)
    if (!name || !resolvedHotel || !phone) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    // Email validation (only if provided)
    if (email && email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Geçerli bir e-posta adresi girin.' },
          { status: 400 }
        );
      }
    }

    // For now, log the submission (in production, integrate with Resend/SendGrid/Nodemailer)
    console.log('📧 New contact form submission:', {
      name,
      hotel: resolvedHotel,
      phone,
      email,
      department,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'NOVA Form <noreply@novaorganizasyon7.com.tr>',
    //   to: 'iknovaofis@gmail.com',
    //   subject: `Yeni Teklif Talebi: ${hotel} — ${department}`,
    //   html: `<h2>Yeni Teklif Talebi</h2>...`,
    // });

    return NextResponse.json(
      { success: true, message: 'Form başarıyla gönderildi.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
