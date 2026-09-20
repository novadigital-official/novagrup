export type Language = "tr" | "en";

export const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      departments: "Hizmetlerimiz",
      workflow: "Nasıl Çalışırız?",
      whyUs: "Neden NOVA?",
      advisory: "Kadroya Katıl",
      contact: "İletişim",
      phone: "0505 410 48 00",
      ctaButton: "Teklif Alın",
      mobileCta: "Teklif Alın",
    },
    hero: {
      badge: "Antalya & Akdeniz Bölgesi Kurumsal Operasyon Çözümleri",
      headlinePart1: "Otel, Tesis ve Kurumsal İşletmeler İçin ",
      headlineGold: "Departman İşletim ve ",
      headlinePart2: "Hizmet Alım Çözümleri.",
      subheadline:
        "Antalya genelindeki otel ve kurumsal tesislerde; NOVA saha amirleri gözetiminde, tanımlı kapsam ve götürü bedelli anahtar teslim operasyonel çözümler.",
      badge1: "Kendi SGK'lı Kadromuz",
      badge2: "Götürü Bedelli Sözleşme",
      badge3: "Saha Amiri Koordinasyonu",
      primaryCta: "Hizmet Teklifi İsteyin",
      secondaryCta: "Hizmetlerimizi İnceleyin",
      photo1Tag: "Housekeeping",
      photo1Title: "Kat Hizmetleri & Meydan",
      photo2Tag: "F&B Servis",
      photo2Title: "Restoran & Ziyafet Servisi",
      photo3Tag: "Depo & Lojistik",
      photo3Title: "Depo, Paketleme & Sevkiyat",
      photo4Tag: "İnşaat & Bakım",
      photo4Title: "Tesis Bakım & Yenileme",
      housingBadge: "NOVA Saha Amirleri Gözetiminde",
    },
    stats: {
      stat1Value: "Saha Koordinasyonu",
      stat1Label: "Saha Amirleri Yönetiminde",
      stat1Sub: "Tüm ekiplerin başında NOVA saha amiri",
      stat2Value: "Götürü Bedel",
      stat2Label: "Sürprizsiz Sabit Fiyatlama",
      stat2Sub: "Oda, kuver veya metraj bazlı net bütçe",
      stat3Value: "Kendi Kadromuz",
      stat3Label: "Doğrudan SGK Bordrolu",
      stat3Sub: "Tüm yasal ve işçilik sorumluluğu NOVA'da",
      stat4Value: "7/24 Kesintisiz",
      stat4Label: "Hızlı Koordinasyon & Yönetim",
      stat4Sub: "Antalya genelinde operasyonel süreklilik",
    },
    services: {
      badge: "Hizmetlerimiz",
      titlePart1: "Tesisiniz İçin ",
      titlePart2: "Tanımlı Hizmet Çözümleri",
      subtitle:
        "NOVA saha amirleri yönetiminde, götürü bedelli anahtar teslim hizmet modelleri.",
      ctaCard: "Teklif Alın",
      cardBadge: "Götürü Bedel",
      departments: [
        {
          tag: "Housekeeping",
          title: "Kat Hizmetleri & Housekeeping",
          description:
            "5 yıldızlı otel standartlarında oda hijyeni, kat ve genel alan bakımı ile çamaşırhane yönetimi.",
          features: [
            "Oda ve Kat Hijyen Standartları",
            "Meydan & Genel Alan Hijyen Planı",
            "Çamaşırhane Tasnif & Dağıtım Akışı",
            "NOVA Kat Şefi & Süpervizör Kontrolü",
          ],
        },
        {
          tag: "F&B Servis",
          title: "Restoran & Ziyafet Servisi",
          description:
            "A la carte restoranlar, açık büfe, banket ve gala etkinliklerinde servis akış yönetimi.",
          features: [
            "Masa Düzeni & Kuver Açım Yönetimi",
            "Banket, Kokteyl & Gala Desteği",
            "Bar Hazırlık & İçecek Sunum Standartları",
            "NOVA Servis Amiri Koordinasyonu",
          ],
        },
        {
          tag: "Mutfak Hijyeni",
          title: "Mutfak Hijyeni & Steward",
          description:
            "HACCP kurallarına uygun endüstriyel mutfak sanitasyonu, bulaşıkhane ve atık yönetimi.",
          features: [
            "Steward Operasyonu & Kimyasal Takibi",
            "Gece Derin Temizlik & Dezenfeksiyon",
            "Çöp Ayrıştırma & Atık Yönetimi",
            "NOVA Mutfak Hijyen Sorumlusu Denetimi",
          ],
        },
        {
          tag: "Sahne & Gösteri",
          title: "Animasyon & Sahne Şovları",
          description:
            "Gündüz spor aktiviteleri, çocuk kulübü ve akşam profesyonel sahne gösterileri organizasyonu.",
          features: [
            "Sezonluk Eğlence Konsepti Planlama",
            "Dans, Akrobasi & Tematik Akşam Şovları",
            "Mini Club Pedagojik Aktivite Programı",
            "NOVA Etkinlik Koordinatörü Denetimi",
          ],
        },
        {
          tag: "İnşaat & Bakım",
          title: "Tesis Bakım, Tadilat & Onarım",
          description:
            "Sezon öncesi oda yenilemeleri, boya-alçı uygulamaları ve teslim öncesi detaylı temizlik.",
          features: [
            "Oda Yenileme, Alçıpan & Boya İşleri",
            "İnşaat / Tadilat Sonrası Teslim Temizliği",
            "Sezon Öncesi Genel Tesis Revizyonu",
            "İş Teslim Tutanağı & Metraj Hak Edişi",
          ],
        },
        {
          tag: "Depo & Lojistik",
          title: "Depo, Paketleme & Sevkiyat",
          description:
            "Ürün kabul, tasnif, barkodlama, paketleme ve sevkiyata hazırlık süreçlerinin yönetimi.",
          features: [
            "Paletleme, Streçleme & Koli Hazırlığı",
            "Barkodlama, Etiketleme & Sipariş Eşleme",
            "Yükleme-Boşaltma & Sevk Alanı Düzeni",
            "NOVA Depo Operasyon Sorumlusu Gözetimi",
          ],
        },
        {
          tag: "Kongre & Fuar",
          title: "Kongre, Fuar & Etkinlik",
          description:
            "Kongre otelleri ve fuarlarda salon koordinasyonu, karşılama, akreditasyon ve saha lojistiği.",
          features: [
            "Stand Alanı Yönlendirme & Karşılama",
            "Kayıt Masası, Akreditasyon & Yaka Kartı",
            "Kongre Salonları Teknik & Lojistik Takip",
            "NOVA Saha Süpervizörü Yönetiminde Tam Akış",
          ],
        },
        {
          tag: "B2B Satış",
          title: "B2B Satış Geliştirme",
          description:
            "Kurumsal işletmeler için hedef pazar araştırması ve ön teyitli ticari randevu organizasyonu.",
          features: [
            "Hedef Sektör & Karar Verici Haritalama",
            "KVKK Uyumlu Ticari İletişim & Filtreleme",
            "Canlı Toplantı & Randevu Takvimi",
            "Düzenli Veri & Dönüşüm Raporlaması",
          ],
        },
        {
          tag: "Teşvik & Hibe",
          title: "Devlet Destekleri & Teşvik",
          description:
            "SGK prim teşvikleri, KOSGEB ve Ticaret Bakanlığı hibe başvuru ve takip süreçleri.",
          features: [
            "SGK İstihdam Teşvikleri Analizi & Takibi",
            "KOSGEB Hibe & Kredi Başvuru Yönetimi",
            "Hizmet İhracatı & Fuar Desteği Dosyası",
            "Resmi Kurum Süreçlerinin Uçtan Uca Takibi",
          ],
        },
      ],
    },
    workflow: {
      badge: "Nasıl Çalışırız?",
      titlePart1: "4 Adımda Tanımlı ve ",
      titleGold: "Şeffaf Operasyonel Süreç",
      subtitle:
        "Tesis yönetimlerinin operasyon planlama ve koordinasyon yükünü devralan kurumsal hizmet alım modeli.",
      stage: "Adım",
      steps: [
        {
          number: "01",
          title: "Keşif & Kapsam Belirleme",
          description:
            "Tesisinizi yerinde inceler; oda sayısı, kuver kapasitesi, alan büyüklüğü ve operasyon periyodunu dikkate alarak hizmet şartnamesini hazırlarız.",
        },
        {
          number: "02",
          title: "Hizmet Sözleşmesi & SLA Mutabakatı",
          description:
            "Götürü bedel, kalite kriterleri, günlük denetim standartları ve teslim parametrelerini içeren resmi hizmet alım sözleşmesi imzalanır.",
        },
        {
          number: "03",
          title: "NOVA Saha Ekipleri & Amiriyle Başlangıç",
          description:
            "Tüm yasal yükümlülükleri (SGK, İSG, sağlık raporları) NOVA GLOBAL tarafından karşılanan eğitimli ekiplerimiz, NOVA saha amiri yönetiminde göreve başlar.",
        },
        {
          number: "04",
          title: "Günlük Denetim & Düzenli Raporlama",
          description:
            "Saha amirimiz her gün operasyon uygunluk raporunu tesis yönetimine sunar. Hizmet bedeli; teslim edilen çıktılar üzerinden mutabakatla faturalandırılır.",
        },
      ],
      bannerTitle: "Tesisiniz İçin Yerinde Saha Keşfi ve Operasyon Analizi İsteyin",
      bannerDesc:
        "Antalya ve Akdeniz genelindeki tesisinizi inceleyelim, en geç 24 saat içinde kapsamı netleştirilmiş yazılı hizmet teklifimizi sunalım.",
      bannerBtn: "Hizmet Teklifi İsteyin",
    },
    whyUs: {
      badge: "Neden NOVA?",
      titlePart1: "Tesisiniz İçin Güvenli, Şeffaf ve ",
      titlePart2: "Götürü Bedelli Hizmet Ortaklığı",
      subtitle:
        "İş gücü belirsizliği ve mevzuat riskini geride bırakın; sözleşmeli, amir denetimli kurumsal çözüm.",
      visualTag: "Kurumsal Güvence",
      visualHeading: "Sözleşmeye Bağlı Hizmet Seviyesi (SLA)",
      visualSub:
        "Tüm departmanlarda NOVA saha amirleri gözetiminde kesintisiz operasyon.",
      visualBadge1Title: "Kendi SGK'lı Kadromuz",
      visualBadge1Sub: "İşverenlik Sorumluluğu NOVA'da",
      advantages: [
        {
          title: "Kendi SGK'lı Kadromuz",
          description:
            "Sahanızdaki tüm ekipler NOVA GLOBAL bordroludur. SGK primleri, maaş ve tüm işçilik hakları şirketimiz sorumluluğundadır.",
        },
        {
          title: "Saha Amirleriyle Birebir Takip",
          description:
            "Her operasyonun başında kadrolu saha amirimiz yer alır. Tesis yönetiminiz sahada tek bir profesyonel muhatapla iletişim kurar.",
        },
        {
          title: "Götürü Bedel, Sürprizsiz Fiyat",
          description:
            "Kişi/gün değil; oda, kuver veya m² çıktısı bazlı sabit götürü bedelle faturalandırılır. Bütçeniz dönemin başında nettir.",
        },
        {
          title: "Mevzuata Uyumlu Süreç Yönetimi",
          description:
            "4857 sayılı İş Kanunu ve 6331 sayılı İSG mevzuatına uygun, yazılı sözleşmelerle yapılandırılmış bağımsız hizmet alım modeli.",
        },
        {
          title: "Esnek Kapsam ve Sezonluk Ölçek",
          description:
            "Sezonluk doluluk değişimlerine ve operasyonel ihtiyaçlara göre sözleşme kapsamı karşılıklı mutabakatla hızla uyarlanabilir.",
        },
      ],
    },
    contact: {
      badge: "Hizmet Teklifi",
      titlePart1: "Tesisiniz İçin ",
      titleGold: "Hizmet Teklifi İsteyin",
      subtitle:
        "Operasyon kapsamınızı ve tesis bilgilerinizi iletin; saha keşfi sonrası en geç 24 saat içinde yazılı hizmet teklifimizi sunalım.",
      directContactLabel: "Saha Koordinasyon WhatsApp",
      phone: "0505 410 48 00",
      contactPerson: "Hızlı Teklif & Mesaj Masası",
      emailLabel: "Kurumsal E-Posta",
      email: "iknovaofis@gmail.com",
      instagramLabel: "Sosyal Medya",
      instagram: "@novaofisss",
      locationLabel: "Hizmet Bölgesi",
      locationMain: "Antalya Merkez / Türkiye",
      locationSub: "Belek, Kemer, Lara, Kundu, Manavgat, Side, Alanya",
      formTitle: "Tesisiniz İçin Hızlı Operasyon & Hizmet Teklifi",
      formSubtitle:
        "Tesisinizin ihtiyaç duyduğu operasyon alanlarını iletin; teklifiniz anında WhatsApp operasyon masamıza düşsün.",
      namePlaceholder: "Adınız Soyadınız / Göreviniz",
      hotelPlaceholder: "İşletme / Otel / Firma Adı",
      phonePlaceholder: "Telefon Numaranız (05XX...)",
      emailPlaceholder: "Kurumsal E-Posta Adresiniz",
      deptPlaceholder: "İhtiyaç Duyulan Hizmet Alanı",
      deptOption1: "Tüm Operasyon Alanları (Entegre Tesis İşletimi)",
      deptOption2: "Kat Hizmetleri & Housekeeping Operasyonu",
      deptOption3: "Restoran & Ziyafet Servis Operasyonu",
      deptOption4: "Bulaşıkhane & Mutfak Sanitasyon Operasyonu",
      deptOption5: "Animasyon & Sahne Gösterileri Koordinasyonu",
      deptOption6: "İnşaat, Tadilat & Tesis Bakım Hizmetleri",
      deptOption7: "Depo, Paketleme & Sevkiyat Operasyonları",
      deptOption8: "Kongre, Fuar & Etkinlik Saha Operasyonları",
      deptOption9: "B2B Satış Geliştirme & İletişim Operasyonu",
      deptOption10: "Devlet Destekleri & Teşvik Danışmanlığı",
      msgPlaceholder: "Tahmini hizmet kapsamı (Oda sayısı, kuver, m², hacim veya operasyon notunuz)...",
      submitIdle: "Hizmet Talebini WhatsApp'a İlet",
      submitSending: "İletiliyor...",
      submitSuccess: "Talebiniz Alındı & WhatsApp Açıldı!",
    },
    footer: {
      description:
        "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON VE DANIŞMANLIK LİMİTED ŞİRKETİ, 4857 sayılı İş Kanunu çerçevesinde tesis, bina ve işletmelere tanımlı kapsamda ve götürü bedel karşılığı anahtar teslim departman işletimi ve hizmet alım çözümleri sunan bir hizmet taahhüt firmasıdır.",
      col1Title: "Hizmetlerimiz",
      col1Link1: "Kat Hizmetleri & Housekeeping",
      col1Link2: "Restoran & Ziyafet Servisi",
      col1Link3: "Bulaşıkhane & Sanitasyon",
      col1Link4: "Animasyon & Gösteri Operasyonu",
      col1Link5: "İnşaat, Tadilat & Bakım",
      col1Link6: "Depo, Paketleme & Sevkiyat",
      col1Link7: "Kongre & Fuar Operasyonları",
      col1Link8: "B2B Satış & Çağrı Operasyonu",
      col1Link9: "Devlet Teşvikleri Danışmanlığı",
      col2Title: "Kurumsal",
      col2Link1: "Neden NOVA GLOBAL?",
      col2Link2: "Nasıl Çalışırız?",
      col2Link3: "SLA & Hizmet Standartları",
      col2Link4: "Hizmet Teklifi Al",
      col2Link5: "Kadromuza Katılın (Kariyer)",
      col3Title: "İletişim",
      col3Link1: "Yazılı Hizmet Teklifi",
      col3Link2: "WhatsApp Danışma Masası",
      col3Link3: "Tel: 0505 410 48 00",
      col3Link4: "iknovaofis@gmail.com",
      col3Link5: "Instagram: @novaofisss",
      copyright: "© 2026 NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON VE DANIŞMANLIK LİMİTED ŞİRKETİ. Tüm hakları saklıdır.",
      tagline: "Antalya & Akdeniz Tesis Departman İşletimi & Hizmet Alım Çözümleri",
    },
    whatsapp: {
      tooltip: "WhatsApp Danışma Hattı",
      prefilledText: "Merhaba, tesis departman işletim ve hizmet alım çözümleri hakkında bilgi ve teklif almak istiyorum.",
    },
  },
  en: {
    nav: {
      home: "Home",
      departments: "Services",
      workflow: "How It Works",
      whyUs: "Why NOVA?",
      advisory: "Join Our Team",
      contact: "Contact",
      phone: "+90 505 410 48 00",
      ctaButton: "Get Proposal",
      mobileCta: "Get Proposal",
    },
    hero: {
      badge: "Antalya & Mediterranean Turnkey Operations & Advisory",
      headlinePart1: "Turnkey Department Operations & ",
      headlineGold: "Outsource Solutions ",
      headlinePart2: "For Hotels & Facilities.",
      subheadline:
        "Delivering turnkey departmental management across housekeeping, F&B service, stewarding, facility maintenance, and warehouse logistics under fixed-scope lump-sum contracts with dedicated NOVA field supervisors.",
      badge1: "Directly Employed Payroll",
      badge2: "Lump-Sum Service Contracts",
      badge3: "SLA Standards & Daily Audits",
      primaryCta: "Request Service Proposal",
      secondaryCta: "Explore Services",
      photo1Tag: "Housekeeping",
      photo1Title: "Housekeeping & Public Areas",
      photo2Tag: "F&B Service",
      photo2Title: "Restaurant & Banquet Service",
      photo3Tag: "Warehouse & Logistics",
      photo3Title: "Warehouse Packing & Dispatch",
      photo4Tag: "Renovation & Care",
      photo4Title: "Facility Care & Overhaul",
      housingBadge: "Under NOVA Field Supervision",
    },
    stats: {
      stat1Value: "Field Coordination",
      stat1Label: "Led by On-Site Supervisors",
      stat1Sub: "NOVA supervisor active on every operation",
      stat2Value: "Lump-Sum Pricing",
      stat2Label: "Transparent Fixed Budget",
      stat2Sub: "Billing by room, cover, or sqm metrics",
      stat3Value: "Own Payroll Staff",
      stat3Label: "Direct Employment & SGK",
      stat3Sub: "Full labor & legal liability borne by NOVA",
      stat4Value: "24/7 Continuity",
      stat4Label: "Rapid Response & Management",
      stat4Sub: "Operational continuity across Antalya",
    },
    services: {
      badge: "Services",
      titlePart1: "Defined Service Solutions ",
      titlePart2: "For Your Facility",
      subtitle:
        "Turnkey lump-sum operational solutions managed directly by NOVA field supervisors.",
      ctaCard: "Request Quote",
      cardBadge: "Lump-Sum",
      departments: [
        {
          tag: "Housekeeping",
          title: "Housekeeping & Public Areas",
          description:
            "5-star hotel standard room hygiene, public area sanitation, and laundry flow management.",
          features: [
            "Defined Room Hygiene Standards",
            "Public Area Periodic Sanitation",
            "Laundry Sorting & Flow Management",
            "NOVA Floor Supervisor & Audits",
          ],
        },
        {
          tag: "F&B Service",
          title: "Restaurant & Banquet Service",
          description:
            "Standard-compliant service flow for a la carte dining, open buffets, and private events.",
          features: [
            "Table Layout & Cover Flow",
            "Banquet, Cocktail & Gala Operations",
            "Bar Preparation & Drink Standards",
            "NOVA Service Supervisor Coordination",
          ],
        },
        {
          tag: "Kitchen Hygiene",
          title: "Stewarding & Kitchen Sanitation",
          description:
            "Turnkey dishwashing, kitchen prep sanitation, and HACCP-compliant nightly deep cleaning.",
          features: [
            "Steward Operations & Chemical Controls",
            "Nightly Deep Clean & Sanitation",
            "Waste Separation & Flow Control",
            "NOVA Kitchen Hygiene Supervisor",
          ],
        },
        {
          tag: "Entertainment",
          title: "Animation & Stage Shows",
          description:
            "Daytime sports, kids club programs, and high-energy evening stage performances.",
          features: [
            "Seasonal Entertainment Concept",
            "Dance, Acrobatics & Thematic Shows",
            "Mini Club Pedagogical Program",
            "NOVA Event Coordinator Management",
          ],
        },
        {
          tag: "Renovation & Care",
          title: "Facility Care & Renovation",
          description:
            "Pre-season room overhauls, painting, repairs, and post-renovation deep cleaning.",
          features: [
            "Room Renovation, Drywall & Paint",
            "Post-Construction Turnkey Cleaning",
            "Pre-Season Facility Overhaul",
            "Delivery Protocol & Area-Based Settlement",
          ],
        },
        {
          tag: "Warehouse & Logistics",
          title: "Warehouse & Packaging Logistics",
          description:
            "Product receiving, sorting, barcoding, palletizing, and shipping logistics management.",
          features: [
            "Palletizing, Wrapping & Packing",
            "Barcoding, Labeling & Order Matching",
            "Loading/Unloading & Dispatch Flow",
            "NOVA Warehouse Operations Supervisor",
          ],
        },
        {
          tag: "Congress & Events",
          title: "Congress & Event Operations",
          description:
            "Turnkey field coordination for registration desks, hall logistics, and event flow.",
          features: [
            "Stand Guidance & Guest Welcoming",
            "Registration & Accreditation Desks",
            "Hall Technical & Logistics Control",
            "Full Coordination Under NOVA Supervisor",
          ],
        },
        {
          tag: "B2B Sales",
          title: "B2B Sales Development",
          description:
            "Target market research and pre-qualified commercial meeting scheduling.",
          features: [
            "Target Market & Decision-Maker Mapping",
            "KVKK-Compliant Outreach & Qualification",
            "Live Meeting Scheduling Calendar",
            "Regular Data & Conversion Reports",
          ],
        },
        {
          tag: "Grants & Subsidies",
          title: "Government Incentives Advisory",
          description:
            "Expert tracking for social security employment subsidies and ministerial grant programs.",
          features: [
            "Labor Subsidy Analysis & Tracking",
            "KOSGEB Grant Application Management",
            "Service Export & Trade Fair Filing",
            "End-to-End Institutional Follow-up",
          ],
        },
      ],
    },
    workflow: {
      badge: "How We Work",
      titlePart1: "4 Structured Steps to ",
      titleGold: "Turnkey Operational Delivery",
      subtitle:
        "A corporate outsourcing model that eliminates management overhead and ensures seamless operational execution.",
      stage: "Step",
      steps: [
        {
          number: "01",
          title: "Discovery & Scope Definition",
          description:
            "We inspect your facility on-site, assessing room counts, covers, area size, and seasonal periods to draft a clear service specification.",
        },
        {
          number: "02",
          title: "Service Contract & SLA Agreement",
          description:
            "A written lump-sum service contract is signed, detailing quality benchmarks, daily inspection standards, and delivery metrics.",
        },
        {
          number: "03",
          title: "Deployment Under NOVA Field Supervisor",
          description:
            "Trained crews—with all labor liabilities, social security, and health records fully borne by NOVA—commence work under our dedicated supervisor.",
        },
        {
          number: "04",
          title: "Daily Audit & Performance Reporting",
          description:
            "Our field supervisor presents daily compliance reports to property management. Invoicing is settled transparently based on verified outputs.",
        },
      ],
      bannerTitle: "Request an On-Site Operational Assessment for Your Facility",
      bannerDesc:
        "We evaluate your property across Antalya within 24 hours to present a transparent, customized service proposal.",
      bannerBtn: "Request a Proposal",
    },
    whyUs: {
      badge: "Why NOVA?",
      titlePart1: "Reliable, Transparent & ",
      titlePart2: "Lump-Sum Service Partnership",
      subtitle:
        "Eliminate labor friction and legal liabilities through contractual, supervisor-led outsourcing.",
      visualTag: "Corporate SLA",
      visualHeading: "Contractual Service Level (SLA)",
      visualSub:
        "Flawless operations overseen directly by on-site NOVA field supervisors.",
      visualBadge1Title: "Own Payroll Staff",
      visualBadge1Sub: "Employer Liabilities on NOVA",
      advantages: [
        {
          title: "Directly Employed Payroll Staff",
          description:
            "All personnel are on NOVA GLOBAL payroll. Social security, wages, and severance rights are fully our liability.",
        },
        {
          title: "Dedicated On-Site Field Supervisors",
          description:
            "Operations are led on-site by our field supervisor. Your management coordinates with a single accountable partner.",
        },
        {
          title: "Fixed Lump-Sum, Predictable Pricing",
          description:
            "Invoicing by defined deliverables—such as rooms, covers, or square meters—never unpredictable daily man-rates.",
        },
        {
          title: "Strict Labor & OHS Compliance",
          description:
            "Processes are structured under written contracts complying with Turkish Labor Law No. 4857 and OHS regulations.",
        },
        {
          title: "Flexible Scope & Peak Scalability",
          description:
            "Contract scope adapts smoothly to seasonal occupancy fluctuations through rapid mutual agreement.",
        },
      ],
    },
    contact: {
      badge: "Service Proposal",
      titlePart1: "Request a Turnkey ",
      titleGold: "Service Proposal",
      subtitle:
        "Submit your facility requirements; we conduct on-site discovery and deliver a written service proposal within 24 hours.",
      directContactLabel: "Operations WhatsApp Desk",
      phone: "+90 505 410 48 00",
      contactPerson: "Instant Proposal & Advisory Desk",
      emailLabel: "Corporate Email",
      email: "iknovaofis@gmail.com",
      instagramLabel: "Social Media",
      instagram: "@novaofisss",
      locationLabel: "Service Area",
      locationMain: "Antalya Central / Turkey",
      locationSub: "Belek, Kemer, Lara, Kundu, Manavgat, Side, Alanya",
      formTitle: "Turnkey Operations & Service Proposal Request",
      formSubtitle:
        "Submit your facility operational scope to receive a tailored proposal directly via WhatsApp.",
      namePlaceholder: "Your Full Name & Title",
      hotelPlaceholder: "Facility / Hotel / Enterprise Name",
      phonePlaceholder: "Phone Number (+90...)",
      emailPlaceholder: "Corporate Email Address",
      deptPlaceholder: "Required Service Sector",
      deptOption1: "All Operational Areas (Turnkey Management)",
      deptOption2: "Housekeeping & Public Areas Operations",
      deptOption3: "Restaurant & Banquet Service Operations",
      deptOption4: "Stewarding & Kitchen Sanitation Operations",
      deptOption5: "Animation & Stage Shows Operations",
      deptOption6: "Construction, Renovation & Maintenance",
      deptOption7: "Warehouse Packaging & Dispatch Operations",
      deptOption8: "Congress, Expo & Event Field Operations",
      deptOption9: "B2B Sales Development & Direct Outreach",
      deptOption10: "Government Incentives & Subsidies Advisory",
      msgPlaceholder: "Estimated scope (number of rooms, covers, sqm, volume or notes)...",
      submitIdle: "Send Request via WhatsApp",
      submitSending: "Sending...",
      submitSuccess: "Request Sent & WhatsApp Opened!",
    },
    footer: {
      description:
        "NOVA GLOBAL is a premier corporate facility management and service contracting company providing turnkey department operations and defined-scope outsourcing solutions across Antalya and the Mediterranean under Turkish Labor Law No. 4857.",
      col1Title: "Services",
      col1Link1: "Housekeeping & Public Areas",
      col1Link2: "Restaurant & Banquet Operations",
      col1Link3: "Stewarding & Kitchen Sanitation",
      col1Link4: "Animation & Stage Shows",
      col1Link5: "Construction & Renovation",
      col1Link6: "Warehouse Packaging & Dispatch",
      col1Link7: "Congress & Expo Field Operations",
      col1Link8: "B2B Direct Sales Operations",
      col1Link9: "Government Incentives Advisory",
      col2Title: "Corporate",
      col2Link1: "Why NOVA GLOBAL?",
      col2Link2: "How It Works",
      col2Link3: "SLA & Standards",
      col2Link4: "Request Proposal",
      col2Link5: "Join Our Team (Careers)",
      col3Title: "Contact",
      col3Link1: "Service Proposal",
      col3Link2: "WhatsApp Desk",
      col3Link3: "Tel: +90 505 410 48 00",
      col3Link4: "iknovaofis@gmail.com",
      col3Link5: "Instagram: @novaofisss",
      copyright: "© 2026 NOVA GLOBAL LIMITED. All rights reserved.",
      tagline: "Antalya & Mediterranean Facility Operations & Outsource Contracting",
    },
    whatsapp: {
      tooltip: "Quick Chat on WhatsApp",
      prefilledText: "Hello, I would like to inquire about NOVA turnkey department management and service contracting.",
    },
  },
};
