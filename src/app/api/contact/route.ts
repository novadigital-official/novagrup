import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type = 'corporate', name, phone } = body;

    // Validate base required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Lütfen ad soyad ve telefon numaranızı girin.' },
        { status: 400 }
      );
    }



    // Internal Candidate Application
    if (type === 'candidate') {
      const { district, department, availability, notes } = body;
      console.log('👷 Yeni NOVA Bünyesi Kadro / İş Başvurusu:', {
        type: 'INTERNAL_CANDIDATE_APPLICATION',
        name,
        phone,
        district: district || 'Belirtilmedi',
        department: department || 'Genel Başvuru',
        availability: availability || 'Hemen',
        notes: notes || '',
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Kadro başvurunuz başarıyla alındı. İK birimimiz en kısa sürede sizinle iletişime geçecektir.',
        },
        { status: 200 }
      );
    }

    // Corporate Proposal Request
    const { hotel, hotelName, email, department, message } = body;
    const resolvedHotel = hotel || hotelName || 'Belirtilmedi';

    console.log('🏛️ Yeni Kurumsal Teklif Talebi:', {
      type: 'CORPORATE_PROPOSAL',
      name,
      hotel: resolvedHotel,
      phone,
      email: email || 'Belirtilmedi',
      department: department || 'Tüm Departmanlar',
      message: message || '',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Teklif talebiniz başarıyla alındı.' },
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
