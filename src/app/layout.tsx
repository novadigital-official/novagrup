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
  title: "NOVA GRUP | 5 Yıldızlı Otel Departman Yönetimi & Operasyon Çözümleri",
  description:
    "Antalya ve Akdeniz genelinde 5 yıldızlı oteller için kat hizmetleri, restoran servis, bulaşıkhane ve animasyon departmanlarında profesyonel operasyon ve kadro yönetimi.",
  icons: {
    icon: "/images/nova-emblem.jpg",
    apple: "/images/nova-emblem.jpg",
  },
  keywords: [
    "otel operasyon yönetimi",
    "housekeeping yönetimi",
    "kat hizmetleri personeli",
    "otel servis personeli",
    "otel steward kadrosu",
    "otel animasyon ekibi",
    "antalya otel personeli",
    "hotel operations antalya",
  ],
  authors: [{ name: "NOVA ORGANİZASYON", url: "https://novaorganizasyon7.com.tr" }],
  creator: "NOVA Turizm Organizasyon ve Danışmanlık Hizmetleri Ltd. Şti.",
  metadataBase: new URL("https://novaorganizasyon7.com.tr"),
  alternates: {
    canonical: "https://novaorganizasyon7.com.tr",
    languages: {
      "tr-TR": "https://novaorganizasyon7.com.tr",
      "en-US": "https://novaorganizasyon7.com.tr/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://novaorganizasyon7.com.tr",
    title: "NOVA ORGANİZASYON | Otel Operasyon & Departman Yönetimi",
    description:
      "Antalya 5 yıldızlı oteller için profesyonel departman yönetimi ve kesintisiz operasyon desteği.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-[#D4AF37] selection:text-[#2E0A11]`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
