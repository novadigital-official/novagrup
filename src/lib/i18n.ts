export type Language = "tr" | "en";

export const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      departments: "Hizmetlerimiz",
      workflow: "Nasıl Çalışırız?",
      whyUs: "Neden NOVA?",
      contact: "İletişim",
      phone: "0505 410 48 00",
      ctaButton: "Teklif Alın",
      mobileCta: "Teklif Alın",
    },
    hero: {
      badge: "Türkiye Geneli Kurumsal Operasyon & Kadro Yönetimi",
      headlinePart1: "Otel, İnşaat ve Sanayi Tesislerine ",
      headlineGold: "Uzman Saha Kadroları &",
      headlinePart2: "Kesintisiz Taşeronluk.",
      subheadline:
        "Kat hizmetleri, F&B servis, mutfak hijyeni, animasyon, şantiye tadilatı ve fabrika hat operasyonlarında; tecrübeli saha liderlerimiz, eğitimli kadrolarımız ve disiplinli denetim mekanizmamızla eksiksiz hizmet sunuyoruz.",
      badge1: "Saha Sorumluları ile Yönetim",
      badge2: "Hızlı ve Kesintisiz Sevkıyat",
      badge3: "Yasal Mevzuat & SGK Güvencesi",
      primaryCta: "Birlikte Çalışalım",
      secondaryCta: "Hizmet Alanlarımız",
      photo1Tag: "Housekeeping",
      photo1Title: "Kat Hizmetleri & Meydan",
      photo2Tag: "F&B Servis",
      photo2Title: "Restoran, Bar & Ziyafet",
      photo3Tag: "Fabrika & Sanayi",
      photo3Title: "Hat, Paketleme & Depo",
      photo4Tag: "İnşaat & Bakım",
      photo4Title: "Tesis & Oda Yenileme",
      housingBadge: "Eğitimli & Deneyimli Kadro",
    },
    stats: {
      stat1Value: "Takım Liderliği",
      stat1Label: "Deneyimli Saha Şefleri",
      stat1Sub: "Her vardiyanın başında NOVA sorumlusu",
      stat2Value: "Hızlı Sevkıyat",
      stat2Label: "Esnek Kadro Planlaması",
      stat2Sub: "Yoğunluk dönemlerinde anında takviye",
      stat3Value: "Eksiksiz Kadro",
      stat3Label: "Yıl Boyu Kesintisiz Hizmet",
      stat3Sub: "Yüksek sezonda sıfır eksik personel",
      stat4Value: "Türkiye Geneli",
      stat4Label: "Hızlı Sevk ve Koordinasyon",
      stat4Sub: "Otel, İnşaat ve Sanayi Tesisleri",
    },
    services: {
      badge: "Hizmet Alanlarımız",
      titlePart1: "İşletmeniz İçin ",
      titlePart2: "Uçtan Uca Saha Taşeronluğu",
      subtitle:
        "Otel, şantiye ve fabrika operasyonlarında kendi takım liderlerimiz ve deneyimli saha kadrolarımızla kesintisiz iş gücü sağlıyoruz.",
      ctaCard: "Detaylı Bilgi & Teklif",
      cardBadge: "Profesyonel Kadro",
      departments: [
        {
          tag: "Housekeeping",
          title: "Kat Hizmetleri ve Genel Alan Temizliği",
          description:
            "Oda temizliği, kat koridorları, çamaşırhane ve genel alanların 5 yıldızlı otel standartlarında eksiksiz yönetimi.",
          features: [
            "Deneyimli Kat Görevlileri (Maid)",
            "Meydancı & Genel Alan Personeli",
            "Çamaşırhane ve Keten Düzeni",
            "NOVA Şefleri ile Günlük Kalite Kontrol",
          ],
        },
        {
          tag: "F&B Servis",
          title: "Restoran Servis ve Bar Hizmetleri",
          description:
            "Ana restoran, alakart mekanlar ve barlarda güler yüzlü, dinamik ve misafir memnuniyeti odaklı servis ekipleri.",
          features: [
            "Garson, Komi ve Bar Personeli",
            "Açık Büfe ve Ziyafet (Banquet) Servisi",
            "Havuz ve Plaj Servis Ekipleri",
            "Kaptan & Şef Eşliğinde Vardiya Yönetimi",
          ],
        },
        {
          tag: "Mutfak Hijyeni",
          title: "Bulaşıkhane (Steward) ve Mutfak Destek",
          description:
            "Otel mutfaklarının arka planında hijyen standartlarını koruyan, hızlı ve düzenli bulaşıkhane ekipleri.",
          features: [
            "Bulaşıkhane (Steward) Personeli",
            "Mutfak Ön Hazırlık ve Temizlik",
            "Gece Vardiyası Ağır Hijyen Desteği",
            "Hızlı ve Kesintisiz Ekip Sevkıyatı",
          ],
        },
        {
          tag: "Sahne & Şov",
          title: "Animasyon ve Gösteri Ekipleri",
          description:
            "Misafirlerinize unutulmaz anlar yaşatacak gündüz aktiviteleri, çocuk kulübü ve akşam sahne şovları.",
          features: [
            "Gündüz ve Gece Animatörleri",
            "Dans, Akrobasi ve Sahne Gösterileri",
            "Mini Club ve Spor Aktiviteleri",
            "Sezon Boyu Canlı Etkinlik Desteği",
          ],
        },
        {
          tag: "İnşaat & Bakım",
          title: "İnşaat, Tadilat & Tesis Bakımı",
          description:
            "Otellerin ve ticari tesislerin sezon öncesi tadilat, boya, alçı, inşaat sonrası ince temizlik ve genel teknik bakım taşeronluğu.",
          features: [
            "Bina & Oda Tadilat / Yenileme",
            "İnşaat Sonrası Detaylı Temizlik",
            "Boya, Alçı & İnce İşçilik Ekipleri",
            "Periyodik Tesis & Teknik Bakım",
          ],
        },
        {
          tag: "Sanayi & Lojistik",
          title: "Fabrika, Üretim Hattı & Depo Desteği",
          description:
            "Üretim tesisleri, fabrikalar ve lojistik depolar için paketleme, montaj hattı, yükleme-boşaltma ve endüstriyel saha ekipleri.",
          features: [
            "Üretim & Montaj Hattı Destek Personeli",
            "Paketleme, Kolileme & Etiketleme",
            "Depo, Forklift & Yükleme / Boşaltma",
            "Endüstriyel Tesis & Saha Hijyen Ekipleri",
          ],
        },
      ],
    },
    workflow: {
      badge: "Operasyonel Süreç",
      titlePart1: "4 Aşamada Planlı ve ",
      titleGold: "Kesintisiz Süreç",
      subtitle:
        "Tesis yönetimlerini personel arayışı, oryantasyon ve vardiya organizasyonu yükünden kurtaran kurumsal operasyon modeli.",
      stage: "Aşama",
      steps: [
        {
          number: "01",
          title: "İhtiyaç Analizi & Planlama",
          description:
            "Tesisinizin departman bazlı personel ihtiyacı, vardiya düzeni ve saha gereksinimleri detaylandırılarak net operasyon planı çıkarılır.",
        },
        {
          number: "02",
          title: "Saha Şefi & Ekip Ataması",
          description:
            "Vardiyaların başına tecrübeli NOVA saha şefleri atanır. Günlük iş takibi, kılık-kıyafet ve disiplin doğrudan şeflerimizce yönetilir.",
        },
        {
          number: "03",
          title: "Vardiya & Görev Organizasyonu",
          description:
            "Personelin vardiya çizelgesi, görev dağılımı, kılık-kıyafet ve iş başı hazırlıkları NOVA saha şefleri tarafından organize edilir.",
        },
        {
          number: "04",
          title: "Düzenli Denetim & Kesintisiz İşleyiş",
          description:
            "Tüm yasal mevzuat ve SGK süreçleri eksiksiz yürütülür; yedek kadro havuzumuz sayesinde vardiyalarda sıfır aksama yaşanır.",
        },
      ],
      bannerTitle: "İşletmeniz İçin Hızlı Bir Saha Analizi Yapalım",
      bannerDesc:
        "Antalya ve çevresindeki tesisiniz için 24 saat içinde yerinde görüşüp en uygun operasyon teklifini sunalım.",
      bannerBtn: "Hemen Teklif Alın",
    },
    whyUs: {
      badge: "Kurumsal Standartlarımız",
      titlePart1: "Tesisinizde Sıfır İş Gücü Riski, ",
      titlePart2: "Tam Operasyonel Güvence.",
      subtitle:
        "Personel devir hızı, işe alım maliyetleri ve mevzuat karmaşasını geride bırakın. NOVA ile tüm departmanlarınız düzenli ve denetimli ilerlesin.",
      visualTag: "Kurumsal Güvence",
      visualHeading: "5 Yıldızlı Hizmet Standardı",
      visualSub: "Housekeeping, F&B, Steward, İnşaat ve Sanayi operasyonlarında titiz denetim.",
      visualBadge1Title: "Saha Liderliği",
      visualBadge1Sub: "Vardiya Başı Takip",
      advantages: [
        {
          title: "Saha Şefleri ile Birebir Takip",
          description:
            "Ekiplerimizin başında daima NOVA takım liderleri bulunur. İş dağılımı, kılık-kıyafet ve disiplin şeflerimiz tarafından kontrol edilir.",
        },
        {
          title: "Esnek Kadro & Hızlı Sevkıyat",
          description:
            "Tesisinizin sezonluk ve anlık yoğunluğuna göre esnek kadro planlaması yapılır; vardiyalarda personel açığı oluşmasına izin verilmez.",
        },
        {
          title: "%100 Yasal ve Düzenli Süreç",
          description:
            "Tüm süreçlerimiz mevzuata ve alt işverenlik kurallarına tam uyumlu yürütülür; idari riskler sıfıra indirilir.",
        },
        {
          title: "Net ve Şeffaf Hakediş",
          description:
            "Sürpriz maliyetler olmadan, mutabık kalınan net şartlar ve düzenli periyodik faturalama ile çalışırsınız.",
        },
      ],
    },
    contact: {
      badge: "Teklif & İletişim",
      titlePart1: "İşletmeniz İçin ",
      titleGold: "24 Saatte Fiyat Teklifi Alın",
      subtitle:
        "Tesisinizin ihtiyaç duyduğu departman ve kişi sayısını bize iletin, 24 saat içinde yerinde analiz yaparak teklifimizi sunalım.",
      directContactLabel: "WhatsApp Destek Hattı",
      phone: "0505 410 48 00",
      contactPerson: "Hızlı Teklif & Mesaj Masası",
      emailLabel: "Kurumsal E-Posta",
      email: "iknovaofis@gmail.com",
      instagramLabel: "Instagram",
      instagram: "@novaofisss",
      locationLabel: "Hizmet Bölgesi",
      locationMain: "Antalya Merkez / Türkiye",
      locationSub: "Belek, Kemer, Lara, Kundu, Manavgat, Side, Alanya",
      formTitle: "Hızlı Teklif Formu",
      formSubtitle:
        "Bilgilerinizi bırakın, operasyon ekibimiz en kısa sürede sizinle iletişime geçsin.",
      namePlaceholder: "Adınız Soyadınız / Göreviniz",
      hotelPlaceholder: "İşletme / Otel / Firma Adı",
      phonePlaceholder: "Telefon Numaranız (05XX...)",
      emailPlaceholder: "E-Posta Adresiniz",
      deptPlaceholder: "İhtiyaç Duyulan Alan / Departman",
      deptOption1: "Tüm Departmanlar (Kombine Hizmet)",
      deptOption2: "Kat Hizmetleri (Housekeeping & Meydan)",
      deptOption3: "Yiyecek & İçecek (Garson & Komi)",
      deptOption4: "Bulaşıkhane (Steward Ekipleri)",
      deptOption5: "Animasyon & Gösteri Sanatları",
      deptOption6: "Etkinlik & Ziyafet (Banquet Ekibi)",
      deptOption7: "İnşaat, Tadilat & Tesis Bakımı",
      deptOption8: "Fabrika, Üretim Hattı & Depo Lojistiği",
      msgPlaceholder: "Tahmini personel sayısı, çalışma dönemi veya belirtmek istediğiniz notlar...",
      submitIdle: "Teklif Talebini Gönder",
      submitSending: "Gönderiliyor...",
      submitSuccess: "Talebiniz Alındı! En kısa sürede sizinle iletişime geçeceğiz.",
    },
    footer: {
      description:
        "5 yıldızlı oteller, inşaat şantiyeleri ve sanayi tesisleri için kat hizmetleri, servis, bulaşıkhane, tadilat ve fabrika üretim desteğinde profesyonel taşeronluk.",
      col1Title: "Hizmetlerimiz",
      col1Link1: "Kat Hizmetleri & Housekeeping",
      col1Link2: "Restoran Servis & Garsonluk",
      col1Link3: "Bulaşıkhane (Steward) Hizmeti",
      col1Link4: "Animasyon & Gösteri Ekipleri",
      col1Link5: "İnşaat, Tadilat & Bakım",
      col1Link6: "Fabrika & Depo Operasyonları",
      col2Title: "Kurumsal",
      col2Link1: "Neden NOVA?",
      col2Link2: "Nasıl Çalışırız?",
      col2Link3: "Operasyon Standartlarımız",
      col2Link4: "Teklif Alın",
      col3Title: "İletişim",
      col3Link1: "Teklif Alın",
      col3Link2: "WhatsApp Hattı",
      col3Link3: "Tel: 0505 410 48 00",
      col3Link4: "iknovaofis@gmail.com",
      col3Link5: "Instagram: @novaofisss",
      copyright: "© 2026 NOVA Turizm Organizasyon ve Danışmanlık Hizmetleri Ltd. Şti. Tüm hakları saklıdır.",
      tagline: "Antalya Otel, İnşaat ve Sanayi Operasyon Çözümleri",
    },
    whatsapp: {
      tooltip: "WhatsApp'tan Hızlı İletişim",
      prefilledText: "Merhaba, tesis departman operasyonları ve personel desteği hakkında bilgi almak istiyorum.",
    },
  },
  en: {
    nav: {
      home: "Home",
      departments: "Services",
      workflow: "How It Works",
      whyUs: "Why NOVA?",
      contact: "Contact",
      phone: "+90 505 410 48 00",
      ctaButton: "Get a Proposal",
      mobileCta: "Get a Proposal",
    },
    hero: {
      badge: "Nationwide Operational Solutions & Workforce",
      headlinePart1: "Professional Staffing & ",
      headlineGold: "Seamless Subcontracting",
      headlinePart2: "For Resorts & Industry.",
      subheadline:
        "Dedicated workforce management across Housekeeping, F&B Service, Stewarding, Entertainment, Construction, and Factory logistics with dedicated on-site shift leadership and rigorous quality control.",
      badge1: "On-Site Shift Leadership",
      badge2: "Rapid Deployment & Fill Rate",
      badge3: "Full Legal & Labor Compliance",
      primaryCta: "Partner With Us",
      secondaryCta: "Our Services",
      photo1Tag: "Housekeeping",
      photo1Title: "Room & Public Area Care",
      photo2Tag: "F&B Service",
      photo2Title: "Waitstaff & Bartenders",
      photo3Tag: "Factory & Plant",
      photo3Title: "Line, Packing & Logistics",
      photo4Tag: "Renovation",
      photo4Title: "Facility & Suite Overhaul",
      housingBadge: "Dedicated & Vetted Staff",
    },
    stats: {
      stat1Value: "Team Leadership",
      stat1Label: "Experienced Shift Supervisors",
      stat1Sub: "NOVA team leader present on every shift",
      stat2Value: "Rapid Dispatch",
      stat2Label: "Flexible Capacity Planning",
      stat2Sub: "Zero staffing shortages during peaks",
      stat3Value: "Reliable Roster",
      stat3Label: "Year-Round Coverage",
      stat3Sub: "Trained personnel ready for deployment",
      stat4Value: "Nationwide Reach",
      stat4Label: "Rapid Dispatch & Mobilization",
      stat4Sub: "Hospitality, Construction & Industry",
    },
    services: {
      badge: "Operational Sectors",
      titlePart1: "End-to-End Solutions ",
      titlePart2: "Turnkey Field Subcontracting",
      subtitle:
        "We provide an experienced workforce, dedicated shift supervisors, and disciplined team coordination across hospitality, construction, and manufacturing facilities.",
      ctaCard: "Learn More & Get Quote",
      cardBadge: "Dedicated Staff",
      departments: [
        {
          tag: "Housekeeping",
          title: "Housekeeping & Public Area Cleaning",
          description:
            "Complete room cleaning, floor maintenance, laundry logistics, and public area sanitation up to 5-star hotel standards.",
          features: [
            "Experienced Room Attendants (Maids)",
            "Public Area Cleaners & Porters",
            "Laundry & Linen Flow Management",
            "Daily Inspections by NOVA Shift Leads",
          ],
        },
        {
          tag: "F&B Service",
          title: "Restaurant & Bar Staffing",
          description:
            "Guest-focused, courteous, and energetic waitstaff and commis waiters for main buffets, à la carte restaurants, and bars.",
          features: [
            "Waiters, Bartenders & Commis Waiters",
            "Buffet & Banquet Service Teams",
            "Pool & Beach Club Service Staff",
            "Shift Coordination under Team Leads",
          ],
        },
        {
          tag: "Kitchen Hygiene",
          title: "Stewarding & Kitchen Sanitation",
          description:
            "Fast, reliable dishwashing and kitchen support teams keeping back-of-house areas clean and compliant.",
          features: [
            "Kitchen Stewarding & Dishwashers",
            "Kitchen Prep & Sanitation Support",
            "Night Shift Deep Cleaning Crews",
            "Reliable and Rapid Staffing Response",
          ],
        },
        {
          tag: "Entertainment",
          title: "Animation & Stage Shows",
          description:
            "Energetic daytime activities, kids club coordinators, and evening stage entertainment that elevate guest satisfaction.",
          features: [
            "Day & Night Animation Coordinators",
            "Dance, Circus & Stage Show Performers",
            "Mini Club & Sports Activities",
            "Full Seasonal Entertainment Support",
          ],
        },
        {
          tag: "Renovation & Care",
          title: "Construction, Renovation & Maintenance",
          description:
            "Turnkey subcontracting for hotel pre-season renovations, finishing works, post-construction deep cleaning, and technical maintenance.",
          features: [
            "Facility & Room Renovation",
            "Post-Construction Deep Cleaning",
            "Painting, Drywall & Finishing Crews",
            "Routine Facility & Technical Care",
          ],
        },
        {
          tag: "Industry & Logistics",
          title: "Factory, Assembly Line & Warehouse Support",
          description:
            "Skilled workforce for manufacturing plants, production assembly lines, packaging, warehouse logistics, and industrial facility sanitation.",
          features: [
            "Production & Assembly Line Operators",
            "Packaging, Sorting & Labeling Teams",
            "Warehouse, Logistics & Material Handling",
            "Industrial Plant Deep Sanitation Crews",
          ],
        },
      ],
    },
    workflow: {
      badge: "Structured Workflow",
      titlePart1: "4 Structured Steps to ",
      titleGold: "Seamless Delivery",
      subtitle:
        "A streamlined operational framework that eliminates recruitment, onboarding, and shift coordination overhead for your management.",
      stage: "Step",
      steps: [
        {
          number: "01",
          title: "Needs Assessment & Planning",
          description:
            "We review your property's departmental staffing needs, shift schedules, and operational requirements to draft a precise execution plan.",
        },
        {
          number: "02",
          title: "Supervisor & Crew Assignment",
          description:
            "We assign seasoned NOVA supervisors to oversee daily shift duties, grooming standards, and performance on site.",
        },
        {
          number: "03",
          title: "Shift & Duty Organization",
          description:
            "Employee shift rosters, task allocations, grooming compliance, and daily work readiness are coordinated directly by NOVA supervisors.",
        },
        {
          number: "04",
          title: "Compliant & Uninterrupted Operations",
          description:
            "All legal and labor compliance is managed proactively, backed by our reserve roster for zero shift vacancies.",
        },
      ],
      bannerTitle: "Request an On-Site Operational Assessment",
      bannerDesc:
        "We evaluate your property across Antalya within 24 hours to present a tailored, transparent operations proposal.",
      bannerBtn: "Request a Proposal",
    },
    whyUs: {
      badge: "Corporate Standards",
      titlePart1: "Zero Operational Disruption, ",
      titlePart2: "Total Workforce Assurance.",
      subtitle:
        "Overcome turnover friction, hiring overhead, and compliance headaches. NOVA keeps your departments running smoothly every single day.",
      visualTag: "Corporate Assurance",
      visualHeading: "5-Star Industry Benchmark",
      visualSub: "Meticulous quality control across Housekeeping, F&B, Stewarding, Renovation, and Manufacturing.",
      visualBadge1Title: "On-Site Leads",
      visualBadge1Sub: "Shift Monitoring",
      advantages: [
        {
          title: "Dedicated On-Site Team Leaders",
          description:
            "Personnel are guided by NOVA supervisors who manage daily duties, grooming standards, and shift handovers.",
        },
        {
          title: "Flexible Capacity & Rapid Dispatch",
          description:
            "Workforce is scaled dynamically based on your property's operational peaks, backed by our reserve roster to prevent shift vacancies.",
        },
        {
          title: "Reliable & Fully Compliant",
          description:
            "All processes strictly comply with labor and safety regulations, shielding your enterprise from administrative burdens.",
        },
        {
          title: "Clear & Transparent Pricing",
          description:
            "Work with pre-agreed, predictable rates and regular billing without any unexpected cost surprises.",
        },
      ],
    },
    contact: {
      badge: "Inquiry & Proposal",
      titlePart1: "Request a Proposal ",
      titleGold: "Within 24 Hours",
      subtitle:
        "Share your property details and staffing requirements; our operations team will evaluate and present a tailored proposal promptly.",
      directContactLabel: "WhatsApp Support Desk",
      phone: "+90 505 410 48 00",
      contactPerson: "Instant Proposal & Chat Desk",
      emailLabel: "Corporate Email",
      email: "iknovaofis@gmail.com",
      instagramLabel: "Instagram",
      instagram: "@novaofisss",
      locationLabel: "Service Area",
      locationMain: "Antalya Central / Turkey",
      locationSub: "Belek, Kemer, Lara, Kundu, Manavgat, Side, Alanya",
      formTitle: "Quick Proposal Form",
      formSubtitle:
        "Leave your details below and our operations team will get in touch promptly.",
      namePlaceholder: "Your Name & Title",
      hotelPlaceholder: "Company / Hotel / Facility Name",
      phonePlaceholder: "Your Phone Number (+90...)",
      emailPlaceholder: "Your Corporate Email",
      deptPlaceholder: "Department / Operational Area",
      deptOption1: "All Departments (Combined Service)",
      deptOption2: "Housekeeping (Rooms & Public Areas)",
      deptOption3: "Food & Beverage (Waitstaff & Bussers)",
      deptOption4: "Stewarding & Kitchen Sanitation",
      deptOption5: "Animation & Performing Arts",
      deptOption6: "Events & Banquet Staffing",
      deptOption7: "Construction, Renovation & Maintenance",
      deptOption8: "Factory, Assembly Line & Warehouse Logistics",
      msgPlaceholder: "Estimated team size, season dates, or specific notes...",
      submitIdle: "Submit Request",
      submitSending: "Sending...",
      submitSuccess: "Received! We will contact you as soon as possible.",
    },
    footer: {
      description:
        "Professional operational subcontracting for 5-star resorts, construction projects, and industrial manufacturing plants in Antalya and across the Mediterranean.",
      col1Title: "Services",
      col1Link1: "Housekeeping & Public Areas",
      col1Link2: "Restaurant & Bar Staffing",
      col1Link3: "Stewarding & Kitchen Sanitation",
      col1Link4: "Animation & Entertainment",
      col1Link5: "Construction & Renovation",
      col1Link6: "Factory & Warehouse Operations",
      col2Title: "Corporate",
      col2Link1: "Why NOVA?",
      col2Link2: "How It Works",
      col2Link3: "Operational Standards",
      col2Link4: "Request a Proposal",
      col3Title: "Contact",
      col3Link1: "Get a Proposal",
      col3Link2: "WhatsApp Line",
      col3Link3: "Tel: +90 505 410 48 00",
      col3Link4: "iknovaofis@gmail.com",
      col3Link5: "Instagram: @novaofisss",
      copyright: "© 2026 NOVA Turizm Organizasyon ve Danışmanlık Hizmetleri Ltd. Şti. All rights reserved.",
      tagline: "Antalya Hospitality, Construction & Industrial Operations",
    },
    whatsapp: {
      tooltip: "Quick Chat on WhatsApp",
      prefilledText: "Hello, I would like to inquire about NOVA operational workforce solutions.",
    },
  },
};

