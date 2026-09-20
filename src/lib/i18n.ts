export type Language = "tr" | "en";

export const content = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      departments: "Hizmetlerimiz",
      workflow: "Nasıl Çalışırız?",
      whyUs: "Neden NOVA?",
      advisory: "Operasyon Danışmanlığı",
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
        "Kat hizmetleri, servis, mutfak hijyeni, teknik bakım ve tesis destek operasyonlarında; tanımlı hizmet kapsamı, NOVA saha amirleri gözetimi ve götürü bedelli sözleşme modeliyle anahtar teslim hizmet sunuyoruz.",
      badge1: "Kendi SGK'lı Kadromuz",
      badge2: "Götürü Bedelli Hizmet Sözleşmesi",
      badge3: "Tanımlı Kapsam, Ölçülebilir Çıktı",
      primaryCta: "Hizmet Teklifi İsteyin",
      secondaryCta: "Hizmet Kapsamlarımızı İnceleyin",
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
      badge: "Operasyon Alanlarımız",
      titlePart1: "Tesisinizin İhtiyacına Göre ",
      titlePart2: "Yapılandırılmış Hizmet Paketleri",
      subtitle:
        "Her hizmet; tanımlı görev tanımı, performans kriterleri ve NOVA saha amirinin sorumluluğunda, götürü bedelli hizmet alım sözleşmesiyle yürütülür.",
      ctaCard: "Detaylı Bilgi & Danışmanlık",
      cardBadge: "Götürü Bedel",
      departments: [
        {
          tag: "Housekeeping",
          title: "Kat Hizmetleri & Housekeeping Operasyonu",
          description:
            "5 yıldızlı otel ve tatil köylerinde; kat temizliği, genel alan (meydan) hijyeni ve çamaşırhane süreçlerinin uluslararası standartlarda yürütülmesi.",
          features: [
            "Oda ve Kat Hijyen Standartları",
            "Meydan & Genel Alan Hijyen Planı",
            "Çamaşırhane Tasnif & Dağıtım Akışı",
            "NOVA Kat Şefi & Süpervizör Kontrolü",
          ],
        },
        {
          tag: "F&B Servis",
          title: "Restoran & Ziyafet Servis Operasyonu",
          description:
            "A la carte restoranlar, açık büfe salonları, banket ve kongre ziyafetlerinde standartlara uygun servis akışının sağlanması.",
          features: [
            "Masa Düzeni & Kuver Açım Yönetimi",
            "Banket, Kokteyl & Gala Desteği",
            "Bar Hazırlık & İçecek Sunum Standartları",
            "NOVA Servis Amiri Koordinasyonu",
          ],
        },
        {
          tag: "Mutfak Hijyeni",
          title: "Bulaşıkhane & Mutfak Sanitasyon Operasyonu",
          description:
            "Endüstriyel mutfaklarda bulaşık yıkama, kazan temizliği, zemin ve ekipman sanitasyonunun HACCP kurallarına uygun yürütülmesi.",
          features: [
            "Steward Operasyonu & Kimyasal Takibi",
            "Gece Derin Temizlik & Dezenfeksiyon",
            "Çöp Ayrıştırma & Atık Yönetimi",
            "NOVA Mutfak Hijyen Sorumlusu Denetimi",
          ],
        },
        {
          tag: "Sahne & Gösteri",
          title: "Animasyon & Sahne Gösterileri Koordinasyonu",
          description:
            "Tesis misafirlerine yönelik gündüz spor-aktivite programları, çocuk kulübü işletimi ve akşam profesyonel sahne şovlarının organizasyonu.",
          features: [
            "Sezonluk Eğlence Konsepti Planlama",
            "Dans, Akrobasi & Tematik Akşam Şovları",
            "Mini Club Pedagojik Aktivite Programı",
            "NOVA Etkinlik Koordinatörü Denetimi",
          ],
        },
        {
          tag: "İnşaat & Bakım",
          title: "İnşaat, Tadilat & Tesis Bakım Hizmetleri",
          description:
            "Sezon öncesi oda ve ortak alan yenilemeleri, boya-alçı uygulamaları, ince işçilik ve açılış öncesi derin temizlik taahhüdü.",
          features: [
            "Oda Yenileme, Alçıpan & Boya İşleri",
            "İnşaat / Tadilat Sonrası Teslim Temizliği",
            "Sezon Öncesi Genel Tesis Revizyonu",
            "İş Teslim Tutanağı & Metraj Hak Edişi",
          ],
        },
        {
          tag: "Depo & Lojistik",
          title: "Depo, Paketleme & Sevkiyat Operasyonları",
          description:
            "Lojistik merkezleri, antrepolar ve e-ticaret depolarında; ürün kabul, tasnif, paketleme, etiketleme ve sevkiyata hazırlık süreçlerinin üstlenilmesi.",
          features: [
            "Paletleme, Streçleme & Koli Hazırlığı",
            "Barkodlama, Etiketleme & Sipariş Eşleme",
            "Yükleme-Boşaltma & Sevk Alanı Düzeni",
            "NOVA Depo Operasyon Sorumlusu Gözetimi",
          ],
        },
        {
          tag: "Kongre & Fuar",
          title: "Kongre, Fuar & Etkinlik Saha Operasyonları",
          description:
            "ANFAŞ ve kongre otellerinde düzenlenen zirve, fuar, sempozyum ve kurumsal etkinliklerde saha lojistiği ve salon koordinasyonunun yürütülmesi.",
          features: [
            "Stand Alanı Yönlendirme & Karşılama",
            "Kayıt Masası, Akreditasyon & Yaka Kartı",
            "Kongre Salonları Teknik & Lojistik Takip",
            "NOVA Saha Süpervizörü Yönetiminde Tam Akış",
          ],
        },
        {
          tag: "B2B Satış",
          title: "B2B Satış Geliştirme & İletişim Operasyonu",
          description:
            "Kurumsal işletmeler için hedef pazar araştırması, ön teyitli ticari görüşme organizasyonu ve B2B müşteri iletişim süreçlerinin yürütülmesi.",
          features: [
            "Hedef Sektör & Karar Verici Haritalama",
            "KVKK Uyumlu Ticari İletişim & Filtreleme",
            "Canlı Toplantı & Randevu Takvimi",
            "Düzenli Veri & Dönüşüm Raporlaması",
          ],
        },
        {
          tag: "Teşvik & Hibe",
          title: "Devlet Destekleri & Teşvik Danışmanlığı",
          description:
            "İşletmenizin yararlanabileceği SGK prim teşvikleri, KOSGEB hibe programları ve Ticaret Bakanlığı desteklerinin tespiti ve başvuru takibi.",
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
        "Antalya ve Akdeniz genelindeki tesisinizi inceleyelim, 24 saat içinde kapsamı netleştirilmiş hizmet teklifimizi sunalım.",
      bannerBtn: "Hizmet Teklifi İsteyin",
    },
    whyUs: {
      badge: "Neden NOVA GLOBAL?",
      titlePart1: "Tesisiniz İçin Güvenli, Şeffaf ve ",
      titlePart2: "Götürü Bedelli Hizmet Ortaklığı.",
      subtitle:
        "İş gücü belirsizliğini, operasyonel aksamaları ve mevzuat risklerini geride bırakın. Tüm süreçler sözleşmeli ve denetimli ilerlesin.",
      visualTag: "Kurumsal Güvence",
      visualHeading: "Uluslararası Hizmet Seviyesi (SLA)",
      visualSub:
        "Housekeeping, servis, stewarding, tesis bakımı ve lojistikte NOVA saha amirleri gözetiminde kesintisiz operasyon.",
      visualBadge1Title: "Kendi SGK'lı Kadromuz",
      visualBadge1Sub: "Tam Yasal Sorumluluk",
      advantages: [
        {
          title: "Kendi SGK'lı Kadromuzla Çalışırız",
          description:
            "Sahanızda görev alan herkes NOVA GLOBAL bordrosundadır. SGK primleri, maaş ödemeleri, kıdem-ihbar ve tüm işçilik hakları şirketimiz sorumluluğundadır.",
        },
        {
          title: "Saha Amirlerimizle Birebir Takip",
          description:
            "Ekiplerimiz başıboş çalışmaz; her operasyonun başında NOVA'nın kadrolu saha amiri bulunur. Tesis yönetiminiz tek bir muhatapla iletişim kurar.",
        },
        {
          title: "Götürü Bedel, Sürprizsiz Fiyatlama",
          description:
            "Kişi/gün değil; oda, kuver, alan veya proje bazlı sabit hizmet bedeliyle faturalama yapılır. Bütçenizi dönemin başında net olarak bilirsiniz.",
        },
        {
          title: "Mevzuata Uyumlu Süreç Yönetimi",
          description:
            "4857 sayılı İş Kanunu ve 6331 sayılı İSG Kanunu gerekleri eksiksiz yerine getirilir. Alt işverenlik ve hizmet alımı süreçleri tam hukuki koruma altındadır.",
        },
        {
          title: "Esnek Kapsam Düzenlemesi",
          description:
            "Sezonluk doluluk dalgalanmalarına veya operasyonel ihtiyaç değişimlerine göre sözleşme kapsamı karşılıklı mutabakatla revize edilebilir.",
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
      advisory: "Operations Advisory",
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
      badge: "Operational Sectors",
      titlePart1: "Customized Service Packages ",
      titlePart2: "Tailored to Your Facility",
      subtitle:
        "Every service is executed under defined SLAs, strict performance benchmarks, and dedicated NOVA supervisors with transparent lump-sum contracts.",
      ctaCard: "Detailed Info & Inquiry",
      cardBadge: "Lump-Sum",
      departments: [
        {
          tag: "Housekeeping",
          title: "Housekeeping & Public Areas Operations",
          description:
            "5-star hotel standard room cleaning, public area care, and laundry flow management.",
          features: [
            "Defined Room Hygiene Standards",
            "Public Area Periodic Sanitation",
            "Laundry Sorting & Flow Management",
            "NOVA Floor Supervisor & Audits",
          ],
        },
        {
          tag: "F&B Service",
          title: "Restaurant & Banquet Service Operations",
          description:
            "Standard-compliant food & beverage service operations for resorts, main buffets, and private events.",
          features: [
            "Table Layout & Cover Flow",
            "Banquet, Cocktail & Gala Operations",
            "Bar Preparation & Drink Standards",
            "NOVA Service Supervisor Coordination",
          ],
        },
        {
          tag: "Kitchen Hygiene",
          title: "Stewarding & Kitchen Sanitation Operations",
          description:
            "Turnkey dishwashing, kitchen prep sanitation, and nightly deep-cleaning operations complying with HACCP.",
          features: [
            "Steward Operations & Chemical Controls",
            "Nightly Deep Clean & Sanitation",
            "Waste Separation & Flow Control",
            "NOVA Kitchen Hygiene Supervisor",
          ],
        },
        {
          tag: "Entertainment",
          title: "Animation & Stage Shows Operations",
          description:
            "Daytime sports and activities, kids club management, and high-energy evening stage performances.",
          features: [
            "Seasonal Entertainment Concept",
            "Dance, Acrobatics & Thematic Shows",
            "Mini Club Pedagogical Program",
            "NOVA Event Coordinator Management",
          ],
        },
        {
          tag: "Renovation & Care",
          title: "Construction, Renovation & Maintenance",
          description:
            "Pre-season hotel room overhaul, painting, post-construction deep cleaning and periodic maintenance.",
          features: [
            "Room Renovation, Drywall & Paint",
            "Post-Construction Turnkey Cleaning",
            "Pre-Season Facility Overhaul",
            "Delivery Protocol & Area-Based Settlement",
          ],
        },
        {
          tag: "Warehouse & Logistics",
          title: "Warehouse Packaging & Dispatch Operations",
          description:
            "Project-based operational support for warehouse sorting, palletizing, packaging, and logistics dispatch.",
          features: [
            "Palletizing, Wrapping & Packing",
            "Barcoding, Labeling & Order Matching",
            "Loading/Unloading & Dispatch Flow",
            "NOVA Warehouse Operations Supervisor",
          ],
        },
        {
          tag: "Congress & Events",
          title: "Congress, Expo & Event Field Operations",
          description:
            "Turnkey field coordination for stand management, registration desks, hall logistics, and VIP arrivals.",
          features: [
            "Stand Guidance & Guest Welcoming",
            "Registration & Accreditation Desks",
            "Hall Technical & Logistics Control",
            "Full Coordination Under NOVA Supervisor",
          ],
        },
        {
          tag: "B2B Sales",
          title: "B2B Sales Development & Direct Outreach",
          description:
            "Target market research, pre-qualified B2B sales meetings, and commercial outreach management.",
          features: [
            "Target Market & Decision-Maker Mapping",
            "KVKK-Compliant Outreach & Qualification",
            "Live Meeting Scheduling Calendar",
            "Regular Data & Conversion Reports",
          ],
        },
        {
          tag: "Grants & Subsidies",
          title: "Government Incentives & Subsidies Advisory",
          description:
            "Corporate advisory for social security employment subsidies, KOSGEB grants, and export trade programs.",
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
      badge: "Why NOVA GLOBAL?",
      titlePart1: "Reliable, Transparent & ",
      titlePart2: "Lump-Sum Service Partnership.",
      subtitle:
        "Leave labor unpredictability, operational friction, and compliance headaches behind. Everything runs under written contracts and active supervision.",
      visualTag: "Corporate Assurance",
      visualHeading: "International SLA Benchmark",
      visualSub:
        "Flawless operational execution across all departments managed directly by NOVA supervisors.",
      visualBadge1Title: "Directly Employed Payroll",
      visualBadge1Sub: "Full Legal & Financial Accountability",
      advantages: [
        {
          title: "Directly Employed Payroll Staff",
          description:
            "Everyone deployed at your facility is on NOVA GLOBAL's payroll. Social security, wages, and statutory severance rights are fully our responsibility.",
        },
        {
          title: "Dedicated On-Site Field Supervisors",
          description:
            "Crews never work unsupervised; each operation is spearheaded by an on-site NOVA supervisor. Your leadership communicates with a single accountable partner.",
        },
        {
          title: "Fixed Lump-Sum, Predictable Pricing",
          description:
            "Billing is based on rooms, covers, square meters, or projects—never daily man-rates. Your budget remains predictable from day one.",
        },
        {
          title: "Strict Legal & Labor Compliance",
          description:
            "All statutory requirements of Turkish Labor Law No. 4857 and OHS Law No. 6331 are strictly fulfilled, providing total legal safety.",
        },
        {
          title: "Flexible Scope & Peak Scalability",
          description:
            "Service scope and capacity can be adjusted smoothly based on seasonal occupancy fluctuations through mutual agreement.",
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
