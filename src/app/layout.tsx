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
  title: "NOVA GLOBAL | Otel Departman İşletimi, Saha Koordinasyonu & Danışmanlık",
  description:
    "5 yıldızlı oteller ve sanayi tesisleri için kat hizmetleri, F&B servis, mutfak hijyeni ve fabrika hatlarında profesyonel departman işletim hizmeti; kurumsal firmalara B2B lead üretimi ve devlet teşvikleri danışmanlığı.",
  icons: {
    icon: "/images/nova-emblem.jpg",
    apple: "/images/nova-emblem.jpg",
  },
  keywords: [
    "otel departman yönetimi",
    "departman işletim hizmeti",
    "kat hizmetleri operasyonu",
    "restoran servis koordinasyonu",
    "steward mutfak hijyeni",
    "tesis ve fabrika saha operasyonları",
    "b2b lead üretimi",
    "çağrı merkezi yönlendirme",
    "devlet teşvikleri danışmanlığı",
    "kosgeb hibe danışmanlığı",
    "nova global",
  ],
  authors: [{ name: "NOVA GLOBAL", url: "https://www.novaorganizasyon7.com.tr" }],
  creator: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
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
      "5 yıldızlı oteller, şantiyeler ve sanayi tesisleri için profesyonel departman işletim hizmeti, saha koordinasyonu, B2B lead dağıtımı ve kurumsal danışmanlık.",
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
      name: "NOVA GLOBAL",
      legalName: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
      url: "https://www.novaorganizasyon7.com.tr",
      logo: "https://www.novaorganizasyon7.com.tr/images/nova-emblem.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-505-410-48-00",
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
