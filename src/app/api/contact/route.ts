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

    if (type === 'jobseeker') {
      const { ageLocation, desiredRole } = body;
      console.log('👤 Yeni Personel İş Başvurusu:', {
        type: 'JOB_APPLICATION',
        name,
        phone,
        ageLocation: ageLocation || 'Belirtilmedi',
        desiredRole: desiredRole || 'Genel Başvuru',
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { success: true, message: 'İş başvurunuz başarıyla alındı.' },
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
