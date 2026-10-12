import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA GLOBAL | Antalya Otel Departman İşletimi, Kongre, Fuar & Etkinlik Saha Hizmetleri",
  description:
    "Antalya (Belek, Kundu, Kemer, Alanya) 5 yıldızlı otelleri için 4857 sayılı İş Kanunu kapsamında kurumsal alt işverenlik ve departman işletimi; ANFAŞ ve Türkiye genelinde kongre, fuar, konser etkinlik saha lojistiği ve dış kaynak (outsourcing) operasyonları.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  keywords: [
    "antalya otel departman işletimi",
    "4857 alt işverenlik antalya",
    "dış kaynak outsourcing saha operasyonları",
    "antalya kongre saha personeli",
    "anfaş fuar operasyon ekibi",
    "belek otel housekeeping işletimi",
    "kemer kundu restoran ziyafet servisi",
    "konser festival saha lojistiği antalya",
    "steward mutfak hijyeni operasyonu",
    "b2b satış geliştirme çağrı operasyonu",
    "devlet teşvikleri danışmanlığı antalya",
    "nova global",
  ],
  authors: [{ name: "NOVA GLOBAL", url: "https://www.novaorganizasyon7.com.tr" }],
  creator: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON VE DANIŞMANLIK LİMİTED ŞİRKETİ",
  metadataBase: new URL("https://www.novaorganizasyon7.com.tr"),
  alternates: {
    canonical: "https://www.novaorganizasyon7.com.tr",
  },
  verification: {
    google: "fR8NTGZT48RtZOrNp-z6DJl1H_eieUF7__6y7cIq4LU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.novaorganizasyon7.com.tr",
    title: "NOVA GLOBAL | Saha Koordinasyonu & Kurumsal Danışmanlık",
    description:
      "5 yıldızlı oteller, şantiyeler ve sanayi tesisleri için profesyonel departman işletim hizmeti, saha koordinasyonu, B2B satış geliştirme ve kurumsal danışmanlık.",
    siteName: "NOVA GLOBAL",
    images: [
      {
        url: "/images/hotel-housekeeping.png",
        width: 1200,
        height: 630,
        alt: "NOVA GLOBAL Departman İşletimi ve Danışmanlık",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA GLOBAL | Otel Departman İşletimi & Danışmanlık',
    description: '5 yıldızlı oteller ve sanayi tesisleri için profesyonel departman işletimi, saha koordinasyonu ve kurumsal danışmanlık hizmetleri.',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.novaorganizasyon7.com.tr/#organization",
      name: "NOVA ORGANİZASYON",
      legalName: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON VE DANIŞMANLIK LİMİTED ŞİRKETİ",
      url: "https://www.novaorganizasyon7.com.tr",
      logo: "https://www.novaorganizasyon7.com.tr/images/nova-emblem.jpg",
      telephone: "+905070871789",
      parentOrganization: {
        "@type": "Organization",
        "@id": "https://novadigital.com.tr/#organization",
        name: "NOVA GLOBAL",
        legalName: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON VE DANIŞMANLIK LİMİTED ŞİRKETİ",
        url: "https://novadigital.com.tr"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905070871789",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.novaorganizasyon7.com.tr/#website",
      url: "https://www.novaorganizasyon7.com.tr",
      name: "NOVA GLOBAL",
      publisher: {
        "@id": "https://www.novaorganizasyon7.com.tr/#organization",
      },
    },
    {
      "@type": "Service",
      name: "Kongre, Fuar ve Konser Saha Operasyonu",
      description: "Kongre otelleri, ANFAŞ Fuar Merkezi, konser ve festival alanlarında salon koordinasyonu, sahne kurulum desteği, akreditasyon yönetimi, VIP karşılama ve saha lojistiği. Antalya ve Türkiye genelinde profesyonel etkinlik saha ekibi.",
      provider: { "@id": "https://www.novaorganizasyon7.com.tr/#organization" },
      areaServed: ["Antalya", "İstanbul", "İzmir", "Türkiye"],
      serviceType: "Fuar, Kongre ve Konser Saha Koordinasyonu",
    },
    {
      "@type": "Service",
      name: "Animasyon, Sahne Şovları ve Konser Organizasyonu",
      description: "5 yıldızlı oteller ve tatil köyleri için gündüz spor animasyonu, mini club programları ve akşam profesyonel sahne gösterileri koordinasyonu. Dans, akrobasi, tematik şov ve konser organizasyonu.",
      provider: { "@id": "https://www.novaorganizasyon7.com.tr/#organization" },
      areaServed: ["Antalya", "Belek", "Kemer", "Alanya", "Kundu"],
      serviceType: "Otel Animasyon ve Sahne Organizasyonu",
    },
    {
      "@type": "Service",
      name: "Otel Kat Hizmetleri ve Housekeeping Departman İşletimi",
      description: "5 yıldızlı otel standartlarında oda hijyeni, kat ve genel alan bakımı, çamaşırhane yönetimi. NOVA saha amiri gözetiminde götürü bedelli anahtar teslim departman işletimi.",
      provider: { "@id": "https://www.novaorganizasyon7.com.tr/#organization" },
      areaServed: ["Antalya", "Belek", "Kemer", "Alanya", "Kundu"],
      serviceType: "Otel Housekeeping Departman İşletimi",
    },
    {
      "@type": "Service",
      name: "Restoran ve Ziyafet Servis Operasyonu",
      description: "Alakart restoranlar, açık büfe, banket, kokteyl ve gala etkinliklerinde servis akış yönetimi. Profesyonel F&B saha operasyonu.",
      provider: { "@id": "https://www.novaorganizasyon7.com.tr/#organization" },
      areaServed: ["Antalya", "Türkiye"],
      serviceType: "F&B Servis Departman Operasyonu",
    },
    {
      "@type": "Service",
      name: "B2B Satış Geliştirme ve Kurumsal İletişim Operasyonu",
      description: "Kurumsal işletmeler için hedef pazar araştırması, karar verici haritalama ve ön teyitli ticari randevu organizasyonu. KVKK uyumlu B2B satış geliştirme ve çağrı operasyonu.",
      provider: { "@id": "https://www.novaorganizasyon7.com.tr/#organization" },
      areaServed: ["Türkiye"],
      serviceType: "B2B Satış Geliştirme ve Çağrı Operasyonu",
    },
    {
      "@type": "Service",
      name: "Devlet Destekleri ve Teşvik Danışmanlığı",
      description: "SGK prim teşvikleri, KOSGEB hibe ve kredi başvuruları, Ticaret Bakanlığı ihracat destekleri ve fuar desteği dosya yönetimi. Resmi kurum süreçlerinin uçtan uca takibi.",
      provider: { "@id": "https://www.novaorganizasyon7.com.tr/#organization" },
      areaServed: ["Türkiye"],
      serviceType: "Devlet Teşvikleri ve Hibe Danışmanlığı",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "NOVA GLOBAL kongre ve fuar organizasyonlarında hangi hizmetleri sunuyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NOVA GLOBAL; kongre otelleri, ANFAŞ Fuar Merkezi ve etkinlik alanlarında salon koordinasyonu, karşılama, akreditasyon yönetimi, sahne kurulum desteği, VIP protokol ve saha lojistiği hizmetleri sunmaktadır. Tüm ekip kendi SGK'lı bordromuzda çalışmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "Konser ve festival etkinliklerinde saha personeli desteği veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. NOVA GLOBAL; konser, festival ve sahne etkinliklerinde saha koordinasyonu, yönlendirme ekibi, sahne destek personeli ve organizasyon lojistiği hizmetleri sağlamaktadır. Antalya ve Türkiye genelinde hizmet vermekteyiz.",
          },
        },
        {
          "@type": "Question",
          name: "Antalya'daki 5 yıldızlı otellere kat hizmetleri ve housekeeping departmanı işletimi yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. NOVA GLOBAL, Belek, Kemer, Kundu, Alanya ve Antalya merkezdeki 5 yıldızlı otellere götürü bedelli kat hizmetleri ve housekeeping departmanı işletimi sunmaktadır. Tüm personel NOVA bordrosunda SGK'lı olarak çalışmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "Devlet teşvikleri ve KOSGEB hibe başvurusu konusunda destek veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. NOVA GLOBAL; SGK istihdam teşvikleri analizi, KOSGEB hibe ve kredi başvuru yönetimi ile resmi kurum süreçlerinin uçtan uca takibini sağlamaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "NOVA GLOBAL ile nasıl iletişime geçebilirim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web sitemizdeki kurumsal teklif formunu doldurabilir, 0507 087 17 89 numaralı WhatsApp hattımızdan ulaşabilir veya iknovaofis@gmail.com adresine e-posta gönderebilirsiniz. Instagram: @novaofisss",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-[#D4AF37] selection:text-[#2E0A11]`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
