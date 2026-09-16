export type Language = "tr" | "en";

export const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      departments: "Hizmetlerimiz",
      workflow: "Nasıl Çalışırız?",
      whyUs: "Neden NOVA?",
      contact: "İletişim & Danışmanlık",
      phone: "0505 410 48 00",
      ctaButton: "Danışmanlık Alın",
      mobileCta: "Danışmanlık Alın",
    },
    hero: {
      badge: "Antalya & Akdeniz Kurumsal Operasyon & Danışmanlık Çözümleri",
      headlinePart1: "Otel, Sanayi ve Kurumsal İşletmelere ",
      headlineGold: "Saha Koordinasyonu & ",
      headlinePart2: "Departman İşletim Hizmeti.",
      subheadline:
        "Kat hizmetleri, F&B servis, mutfak hijyeni, tesis bakımı, üretim hatları, B2B lead üretimi ve devlet teşvikleri danışmanlığında; tecrübeli saha koordinatörlerimiz ve uzman ekiplerimizle eksiksiz kurumsal hizmet sunuyoruz.",
      badge1: "Saha Koordinasyonu",
      badge2: "Planlı ve Kesintisiz Operasyon",
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
      housingBadge: "Eğitimli & Uzman Ekipler",
    },
    stats: {
      stat1Value: "Saha Koordinasyonu",
      stat1Label: "Uzman Takım Liderleri",
      stat1Sub: "Her vardiyanın başında NOVA koordinatörü",
      stat2Value: "Planlı Operasyon",
      stat2Label: "Esnek Kapasite Planlaması",
      stat2Sub: "Yoğunluk dönemlerinde planlı takviye",
      stat3Value: "Kesintisiz Hizmet",
      stat3Label: "Yıl Boyu Koordinasyon Güvencesi",
      stat3Sub: "Yüksek sezonda sıfır operasyonel aksama",
      stat4Value: "Antalya Geneli",
      stat4Label: "Hızlı Koordinasyon & Yönetim",
      stat4Sub: "Otel, Tesis ve Kurumsal İşletmeler",
    },
    services: {
      badge: "Hizmet Alanlarımız",
      titlePart1: "İşletmeniz İçin ",
      titlePart2: "Uçtan Uca Departman İşletim Hizmeti",
      subtitle:
        "Otel, tesis, fabrika operasyonlarında ve kurumsal büyüme süreçlerinde saha koordinatörlerimiz ve uzman danışman kadromuzla kesintisiz destek sağlıyoruz.",
      ctaCard: "Detaylı Bilgi & Danışmanlık",
      cardBadge: "Uzman Ekip",
      departments: [
        {
          tag: "Housekeeping",
          title: "Kat Hizmetleri ve Genel Alan Temizliği",
          description:
            "Oda temizliği, kat koridorları, çamaşırhane ve genel alanların 5 yıldızlı otel standartlarında eksiksiz işletimi.",
          features: [
            "Deneyimli Kat Görevlileri (Maid)",
            "Meydancı & Genel Alan Ekipleri",
            "Çamaşırhane ve Keten Düzeni",
            "NOVA Koordinatörleri ile Günlük Kalite Kontrol",
          ],
        },
        {
          tag: "F&B Servis",
          title: "Restoran Servis ve Bar Hizmetleri",
          description:
            "Ana restoran, alakart mekanlar ve barlarda misafir memnuniyeti odaklı profesyonel servis operasyonları.",
          features: [
            "Garson, Komi ve Bar Ekipleri",
            "Açık Büfe ve Ziyafet (Banquet) Servisi",
            "Havuz ve Plaj Servis Ekipleri",
            "Koordinatör Eşliğinde Vardiya Yönetimi",
          ],
        },
        {
          tag: "Mutfak Hijyeni",
          title: "Bulaşıkhane (Steward) ve Mutfak Destek",
          description:
            "Otel mutfaklarının arka planında hijyen standartlarını koruyan, hızlı ve düzenli operasyon ekipleri.",
          features: [
            "Bulaşıkhane (Steward) Ekipleri",
            "Mutfak Ön Hazırlık ve Temizlik",
            "Gece Vardiyası Ağır Hijyen Desteği",
            "Hızlı ve Planlı Ekip Koordinasyonu",
          ],
        },
        {
          tag: "Sahne & Şov",
          title: "Animasyon ve Gösteri Ekipleri",
          description:
            "Misafirlerinize unutulmaz anlar yaşatacak gündüz aktiviteleri, çocuk kulübü ve akşam sahne şovları koordinasyonu.",
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
            "Otellerin ve ticari tesislerin sezon öncesi tadilat, boya, alçı, inşaat sonrası ince temizlik ve periyodik teknik bakım işletimi.",
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
            "Üretim tesisleri, fabrikalar ve lojistik depolar için paketleme, montaj hattı, yükleme-boşaltma ve endüstriyel saha ekipleri koordinasyonu.",
          features: [
            "Üretim & Montaj Hattı Destek Ekipleri",
            "Paketleme, Kolileme & Etiketleme",
            "Depo, Forklift & Lojistik Destek",
            "Endüstriyel Tesis & Saha Hijyen Ekipleri",
          ],
        },
        {
          tag: "Lead & Çağrı Dağıtımı",
          title: "B2B Lead Üretimi & Çağrı Merkezi Çözüm Ortaklığı",
          description:
            "Finans, sigorta brokerliği, gayrimenkul ve özel sağlık klinikleri için dijital kanallardan doğrulanmış müşteri adayları (lead) üretimi ve partner çağrı merkezi ağımızla ön teyitli yönlendirme altyapısı.",
          features: [
            "KVKK Uyumlu Sıcak Müşteri (Lead) Kampanyaları",
            "Çağrı Merkezi Ön Filtreleme & Teyit Aşaması",
            "Lisanslı Kurumlara Canlı Çağrı & CRM Transferi",
            "Performans Odaklı (CPL & Rev-Share) Büyüme Modeli",
          ],
        },
        {
          tag: "Teşvik & Hibe",
          title: "Devlet Destekleri & Teşvik Danışmanlığı",
          description:
            "İşletmenizin SGK istihdam teşvikleri, KOSGEB İleri Girişimci & kapasite destekleri ve Ticaret Bakanlığı hibelerine tam uyumla erişim danışmanlığı.",
          features: [
            "KOSGEB İleri Girişimci & Kapasite Destekleri",
            "İŞKUR İstihdam & SGK Prim Teşvik Yönetimi",
            "Ticaret Bakanlığı Turizm & Hizmet Sektörü Destekleri",
            "Uçtan Uca Hibe Dosyası ve Resmi Süreç Takibi",
          ],
        },
      ],
    },
    workflow: {
      badge: "Operasyonel Süreç",
      titlePart1: "4 Aşamada Planlı ve ",
      titleGold: "Kesintisiz Süreç",
      subtitle:
        "Tesis yönetimlerini operasyonel koordinasyon ve vardiya planlaması yükünden kurtaran kurumsal hizmet modeli.",
      stage: "Aşama",
      steps: [
        {
          number: "01",
          title: "İhtiyaç Analizi & Planlama",
          description:
            "Tesisinizin departman bazlı operasyonel gereksinimleri ve vardiya düzeni detaylandırılarak net hizmet planı çıkarılır.",
        },
        {
          number: "02",
          title: "Saha Koordinatörü ve Ekip Planlaması",
          description:
            "Operasyonların başına tecrübeli NOVA saha koordinatörleri atanır. Günlük iş takibi, kılık-kıyafet ve disiplin doğrudan koordinatörlerimizce yürütülür.",
        },
        {
          number: "03",
          title: "Vardiya ve Görev Planlaması",
          description:
            "Ekiplerin vardiya çizelgesi, görev dağılımı, kılık-kıyafet ve iş başı hazırlıkları NOVA saha koordinatörleri tarafından planlanır.",
        },
        {
          number: "04",
          title: "Düzenli Denetim & Kesintisiz İşleyiş",
          description:
            "Tüm yasal mevzuat ve SGK süreçleri eksiksiz yürütülür; yedek uzman havuzumuz sayesinde operasyonlarda sıfır aksama yaşanır.",
        },
      ],
      bannerTitle: "İşletmeniz İçin Hızlı Bir Saha ve Operasyon Analizi Yapalım",
      bannerDesc:
        "Antalya ve çevresindeki tesisiniz için 24 saat içinde yerinde görüşüp en uygun danışmanlık teklifini sunalım.",
      bannerBtn: "Hemen Danışmanlık Teklifi Alın",
    },
    whyUs: {
      badge: "Kurumsal Standartlarımız",
      titlePart1: "Tesisinizde Sıfır Operasyonel Risk, ",
      titlePart2: "Tam Hizmet Güvencesi.",
      subtitle:
        "Operasyonel koordinasyon yükü ve mevzuat karmaşasını geride bırakın. NOVA ile tüm departmanlarınız düzenli ve denetimli ilerlesin.",
      visualTag: "Kurumsal Güvence",
      visualHeading: "5 Yıldızlı Hizmet Standardı",
      visualSub: "Housekeeping, F&B, Steward, İnşaat ve Sanayi operasyonlarında titiz denetim.",
      visualBadge1Title: "Saha Koordinasyonu",
      visualBadge1Sub: "Vardiya Başı Takip",
      advantages: [
        {
          title: "Saha Koordinatörleri ile Birebir Takip",
          description:
            "Ekiplerimizin başında daima NOVA takım koordinatörleri bulunur. İş dağılımı, kılık-kıyafet ve disiplin koordinatörlerimiz tarafından denetlenir.",
        },
        {
          title: "Esnek Kadro Planlaması ve Hızlı Operasyon",
          description:
            "Tesisinizin sezonluk ve anlık yoğunluğuna göre esnek planlama yapılır; operasyonlarda aksama oluşmasına izin verilmez.",
        },
        {
          title: "%100 Yasal ve Düzenli Süreç",
          description:
            "Tüm süreçlerimiz mevzuata tam uyumlu yürütülür; idari ve hukuki riskler sıfıra indirilir.",
        },
        {
          title: "Net ve Şeffaf Hizmet Bedeli",
          description:
            "Sürpriz maliyetler olmadan, mutabık kalınan net şartlar ve düzenli periyodik faturalama ile çalışırsınız.",
        },
      ],
    },
    contact: {
      badge: "Danışmanlık & İletişim",
      titlePart1: "İşletmeniz İçin ",
      titleGold: "24 Saatte Danışmanlık Teklifi Alın",
      subtitle:
        "Tesisinizin ihtiyaç duyduğu departman ve hizmet kapsamını bize iletin, 24 saat içinde yerinde analiz yaparak teklifimizi sunalım.",
      directContactLabel: "WhatsApp Danışma Hattı",
      phone: "0505 410 48 00",
      contactPerson: "Hızlı Danışmanlık & Mesaj Masası",
      emailLabel: "Kurumsal E-Posta",
      email: "iknovaofis@gmail.com",
      instagramLabel: "Instagram",
      instagram: "@novaofisss",
      locationLabel: "Hizmet Bölgesi",
      locationMain: "Antalya Merkez / Türkiye",
      locationSub: "Belek, Kemer, Lara, Kundu, Manavgat, Side, Alanya",
      formTitle: "Hızlı Danışmanlık Formu",
      formSubtitle:
        "Bilgilerinizi bırakın, danışmanlık ve operasyon ekibimiz en kısa sürede sizinle iletişime geçsin.",
      namePlaceholder: "Adınız Soyadınız / Göreviniz",
      hotelPlaceholder: "İşletme / Otel / Firma Adı",
      phonePlaceholder: "Telefon Numaranız (05XX...)",
      emailPlaceholder: "E-Posta Adresiniz",
      deptPlaceholder: "İhtiyaç Duyulan Alan / Departman",
      deptOption1: "Tüm Departmanlar (Kombine İşletim)",
      deptOption2: "Kat Hizmetleri (Housekeeping & Meydan)",
      deptOption3: "Yiyecek & İçecek (Garson & Komi)",
      deptOption4: "Bulaşıkhane (Steward Ekipleri)",
      deptOption5: "Animasyon & Gösteri Sanatları",
      deptOption6: "Etkinlik & Ziyafet (Banquet Ekibi)",
      deptOption7: "İnşaat, Tadilat & Tesis Bakımı",
      deptOption8: "Fabrika, Üretim Hattı & Depo Lojistiği",
      deptOption9: "B2B Lead Üretimi & Çağrı Merkezi Yönlendirme",
      deptOption10: "Devlet Destekleri & Teşvik Danışmanlığı",
      msgPlaceholder: "Tahmini hizmet kapsamı, departman büyüklüğü veya belirtmek istediğiniz notlar...",
      submitIdle: "Danışmanlık Talebini Gönder",
      submitSending: "Gönderiliyor...",
      submitSuccess: "Talebiniz Alındı! En kısa sürede sizinle iletişime geçeceğiz.",
    },
    footer: {
      description:
        "5 yıldızlı oteller, inşaat şantiyeleri ve sanayi tesisleri için kat hizmetleri, servis, bulaşıkhane, tadilat ve fabrika üretim desteğinde profesyonel departman işletim hizmeti; kurumsal firmalar için B2B lead üretimi ve devlet teşvikleri danışmanlığı.",
      col1Title: "Hizmetlerimiz",
      col1Link1: "Kat Hizmetleri & Housekeeping",
      col1Link2: "Restoran Servis & Bar",
      col1Link3: "Bulaşıkhane (Steward) Hizmeti",
      col1Link4: "Animasyon & Gösteri Ekipleri",
      col1Link5: "İnşaat, Tadilat & Bakım",
      col1Link6: "Fabrika & Depo Operasyonları",
      col1Link7: "B2B Lead & Çağrı Merkezi",
      col1Link8: "Devlet Teşvikleri Danışmanlığı",
      col2Title: "Kurumsal",
      col2Link1: "Neden NOVA?",
      col2Link2: "Nasıl Çalışırız?",
      col2Link3: "Operasyon Standartlarımız",
      col2Link4: "Danışmanlık Teklifi Al",
      col3Title: "İletişim",
      col3Link1: "Danışmanlık Al",
      col3Link2: "WhatsApp Danışma Hattı",
      col3Link3: "Tel: 0505 410 48 00",
      col3Link4: "iknovaofis@gmail.com",
      col3Link5: "Instagram: @novaofisss",
      copyright: "© 2026 NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ. Tüm hakları saklıdır.",
      tagline: "Antalya Otel, İnşaat, Sanayi ve B2B Danışmanlık Çözümleri",
    },
    whatsapp: {
      tooltip: "WhatsApp Danışma Hattı",
      prefilledText: "Merhaba, tesis departman işletim hizmetleri ve kurumsal danışmanlık hakkında bilgi almak istiyorum.",
    },
  },
  en: {
    nav: {
      home: "Home",
      departments: "Services",
      workflow: "How It Works",
      whyUs: "Why NOVA?",
      contact: "Contact & Advisory",
      phone: "+90 505 410 48 00",
      ctaButton: "Get Consultation",
      mobileCta: "Get Consultation",
    },
    hero: {
      badge: "Antalya & Mediterranean Operations & Advisory",
      headlinePart1: "Operations Coordination & ",
      headlineGold: "Department Management ",
      headlinePart2: "For Resorts & Industry.",
      subheadline:
        "Delivering comprehensive departmental management across Housekeeping, F&B Service, Stewarding, Renovation, Factory lines, B2B lead generation, and corporate incentives advisory with seasoned field coordinators.",
      badge1: "Field Coordination",
      badge2: "Seamless & Planned Operations",
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
      housingBadge: "Expert & Vetted Teams",
    },
    stats: {
      stat1Value: "Field Coordination",
      stat1Label: "Experienced Team Leaders",
      stat1Sub: "NOVA coordinator present on every shift",
      stat2Value: "Planned Operations",
      stat2Label: "Flexible Capacity Planning",
      stat2Sub: "Zero operational disruption during peaks",
      stat3Value: "Reliable Service",
      stat3Label: "Year-Round Coordination Guarantee",
      stat3Sub: "Trained teams ready for ongoing operations",
      stat4Value: "Antalya Wide",
      stat4Label: "Rapid Coordination & Management",
      stat4Sub: "Hospitality, Construction & Industry",
    },
    services: {
      badge: "Operational Sectors",
      titlePart1: "End-to-End Solutions ",
      titlePart2: "Turnkey Department Management",
      subtitle:
        "We provide dedicated field coordinators, disciplined team management, and strategic B2B growth consulting across hospitality, construction, and corporate sectors.",
      ctaCard: "Learn More & Advisory",
      cardBadge: "Expert Team",
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
            "Daily Inspections by NOVA Coordinators",
          ],
        },
        {
          tag: "F&B Service",
          title: "Restaurant & Bar Staffing",
          description:
            "Guest-focused, courteous, and energetic waitstaff and commis teams for main buffets, à la carte restaurants, and bars.",
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
            "Reliable and Planned Team Coordination",
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
            "Turnkey departmental management for hotel pre-season renovations, finishing works, post-construction deep cleaning, and technical maintenance.",
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
        {
          tag: "Lead & Call Center",
          title: "B2B Lead Generation & Call Center Routing",
          description:
            "High-intent digital lead generation and pre-qualification call center infrastructure for insurance brokers, financial institutions, and specialized clinics.",
          features: [
            "GDPR/KVKK-Compliant Inbound Lead Funnels",
            "Call Center Pre-Qualification & Verification",
            "Instant CRM & Live Call Transfer to Licensed Partners",
            "Performance & CPL-Driven Growth Model",
          ],
        },
        {
          tag: "Grants & Subsidies",
          title: "Government Incentives & Growth Advisory",
          description:
            "Comprehensive advisory for accessing government employment subsidies, KOSGEB advanced entrepreneur grants, and Ministry of Trade export programs.",
          features: [
            "KOSGEB Advanced Entrepreneurship Grants",
            "Labor Agency Employment Incentive Management",
            "Ministry of Trade Hospitality & Service Subsidies",
            "End-to-End Application & Compliance Oversight",
          ],
        },
      ],
    },
    workflow: {
      badge: "Structured Workflow",
      titlePart1: "4 Structured Steps to ",
      titleGold: "Seamless Delivery",
      subtitle:
        "A streamlined operational framework that eliminates recruitment friction and shift coordination overhead for your management.",
      stage: "Step",
      steps: [
        {
          number: "01",
          title: "Needs Assessment & Planning",
          description:
            "We review your property's departmental operational needs, shift schedules, and requirements to draft a precise execution plan.",
        },
        {
          number: "02",
          title: "Coordinator & Crew Assignment",
          description:
            "We assign seasoned NOVA coordinators to oversee daily shift duties, grooming standards, and performance on site.",
        },
        {
          number: "03",
          title: "Shift & Duty Organization",
          description:
            "Team shift rosters, task allocations, grooming compliance, and daily work readiness are coordinated directly by NOVA coordinators.",
        },
        {
          number: "04",
          title: "Compliant & Uninterrupted Operations",
          description:
            "All legal and labor compliance is managed proactively, backed by our reserve roster for zero operational vacancies.",
        },
      ],
      bannerTitle: "Request an On-Site Operational Assessment",
      bannerDesc:
        "We evaluate your property across Antalya within 24 hours to present a tailored, transparent advisory proposal.",
      bannerBtn: "Request a Proposal",
    },
    whyUs: {
      badge: "Corporate Standards",
      titlePart1: "Zero Operational Disruption, ",
      titlePart2: "Total Service Assurance.",
      subtitle:
        "Overcome operational coordination friction, hiring overhead, and compliance headaches. NOVA keeps your departments running smoothly every single day.",
      visualTag: "Corporate Assurance",
      visualHeading: "5-Star Industry Benchmark",
      visualSub: "Meticulous quality control across Housekeeping, F&B, Stewarding, Renovation, and Manufacturing.",
      visualBadge1Title: "Field Coordination",
      visualBadge1Sub: "Shift Monitoring",
      advantages: [
        {
          title: "Dedicated Field Coordinators",
          description:
            "Teams are guided by NOVA coordinators who manage daily duties, grooming standards, and shift handovers.",
        },
        {
          title: "Flexible Capacity & Planned Operations",
          description:
            "Operations are scaled dynamically based on your property's peaks, backed by our reserve roster to prevent shift vacancies.",
        },
        {
          title: "Reliable & Fully Compliant",
          description:
            "All processes strictly comply with labor and safety regulations, shielding your enterprise from administrative burdens.",
        },
        {
          title: "Clear & Transparent Pricing",
          description:
            "Work with pre-agreed, predictable service fees and regular billing without any unexpected cost surprises.",
        },
      ],
    },
    contact: {
      badge: "Advisory & Inquiry",
      titlePart1: "Request an Advisory Proposal ",
      titleGold: "Within 24 Hours",
      subtitle:
        "Share your property details and operational requirements; our management team will evaluate and present a tailored proposal promptly.",
      directContactLabel: "WhatsApp Advisory Line",
      phone: "+90 505 410 48 00",
      contactPerson: "Instant Advisory & Chat Desk",
      emailLabel: "Corporate Email",
      email: "iknovaofis@gmail.com",
      instagramLabel: "Instagram",
      instagram: "@novaofisss",
      locationLabel: "Service Area",
      locationMain: "Antalya Central / Turkey",
      locationSub: "Belek, Kemer, Lara, Kundu, Manavgat, Side, Alanya",
      formTitle: "Quick Advisory Form",
      formSubtitle:
        "Leave your details below and our operations and advisory team will get in touch promptly.",
      namePlaceholder: "Your Name & Title",
      hotelPlaceholder: "Company / Hotel / Facility Name",
      phonePlaceholder: "Your Phone Number (+90...)",
      emailPlaceholder: "Your Corporate Email",
      deptPlaceholder: "Department / Operational Area",
      deptOption1: "All Departments (Combined Management)",
      deptOption2: "Housekeeping (Rooms & Public Areas)",
      deptOption3: "Food & Beverage (Waitstaff & Bussers)",
      deptOption4: "Stewarding & Kitchen Sanitation",
      deptOption5: "Animation & Performing Arts",
      deptOption6: "Events & Banquet Staffing",
      deptOption7: "Construction, Renovation & Maintenance",
      deptOption8: "Factory, Assembly Line & Warehouse Logistics",
      deptOption9: "B2B Lead Generation & Call Center Routing",
      deptOption10: "Government Incentives & Subsidies Advisory",
      msgPlaceholder: "Estimated scope, department size, or specific notes...",
      submitIdle: "Submit Request",
      submitSending: "Sending...",
      submitSuccess: "Received! We will contact you as soon as possible.",
    },
    footer: {
      description:
        "Professional operational department management for 5-star resorts, construction projects, and industrial manufacturing plants in Antalya and across the Mediterranean; high-intent B2B lead generation and corporate subsidies advisory.",
      col1Title: "Services",
      col1Link1: "Housekeeping & Public Areas",
      col1Link2: "Restaurant & Bar Teams",
      col1Link3: "Stewarding & Kitchen Sanitation",
      col1Link4: "Animation & Entertainment",
      col1Link5: "Construction & Renovation",
      col1Link6: "Factory & Warehouse Operations",
      col1Link7: "B2B Lead & Call Center",
      col1Link8: "Government Incentives Advisory",
      col2Title: "Corporate",
      col2Link1: "Why NOVA?",
      col2Link2: "How It Works",
      col2Link3: "Operational Standards",
      col2Link4: "Request an Advisory Proposal",
      col3Title: "Contact",
      col3Link1: "Get Consultation",
      col3Link2: "WhatsApp Line",
      col3Link3: "Tel: +90 505 410 48 00",
      col3Link4: "iknovaofis@gmail.com",
      col3Link5: "Instagram: @novaofisss",
      copyright: "© 2026 NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ. All rights reserved.",
      tagline: "Antalya Hospitality, Construction, Industrial & B2B Advisory Solutions",
    },
    whatsapp: {
      tooltip: "Quick Chat on WhatsApp",
      prefilledText: "Hello, I would like to inquire about NOVA operational management and corporate advisory solutions.",
    },
  },
};
