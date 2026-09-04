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
  title: "NOVA ORGANİZASYON | 5 Yıldızlı Otel & Tesis Departman Yönetimi",
  description:
    "Türkiye genelinde 5 yıldızlı oteller ve sanayi tesisleri için kat hizmetleri, F&B servis, mutfak hijyeni ve fabrika operasyonlarında profesyonel kadro ve taşeronluk çözümleri.",
  icons: {
    icon: "/images/nova-emblem.jpg",
    apple: "/images/nova-emblem.jpg",
  },
  keywords: [
    "otel iş ilanları",
    "antalya otel personeli",
    "otel personel tedariği",
    "kat görevlisi iş başvurusu",
    "otel garson işi",
    "steward bulaşıkhane kadrosu",
    "otel departman yönetimi",
    "5 yıldızlı otel taşeronluğu",
    "sanayi fabrika iş gücü",
  ],
  authors: [{ name: "NOVA ORGANİZASYON", url: "https://www.novaorganizasyon7.com.tr" }],
  creator: "NOVA Turizm Organizasyon ve Danışmanlık Hizmetleri Ltd. Şti.",
  metadataBase: new URL("https://www.novaorganizasyon7.com.tr"),
  alternates: {
    canonical: "https://www.novaorganizasyon7.com.tr",
    languages: {
      "tr-TR": "https://www.novaorganizasyon7.com.tr",
      "en-US": "https://www.novaorganizasyon7.com.tr/?lang=en",
    },
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
    title: "NOVA ORGANİZASYON | Otel & Tesis Saha Operasyonları",
    description:
      "Türkiye genelinde 5 yıldızlı oteller, şantiyeler ve sanayi tesisleri için profesyonel departman taşeronluğu ve operasyon desteği.",
    siteName: "NOVA ORGANİZASYON",
    images: [
      {
        url: "/images/hotel-housekeeping.png",
        width: 1200,
        height: 630,
        alt: "NOVA ORGANİZASYON Otel Operasyon Yönetimi",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.novaorganizasyon7.com.tr/#organization",
      name: "NOVA ORGANİZASYON",
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
      name: "NOVA ORGANİZASYON",
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
