import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CongressCatalogClient from "./CongressCatalogClient";

export const metadata: Metadata = {
  title: "2026 - 2027 Kongre, Fuar, Zirve ve Event Saha Operasyon Kataloğu | NOVA GLOBAL",
  description:
    "Antalya ANFAŞ Fuar Merkezi, Belek, Kundu ve Kemer kongre otelleri için profesyonel stand hostesi, kayıt-kabul, salon yönetimi ve VIP karşılama saha kadroları resmi birim fiyat tarifesi ve çözüm ortaklığı dokümanı.",
  keywords: [
    "antalya fuar hostesi",
    "anfaş fuar hostesi kiralama",
    "belek kongre hostesi",
    "antalya kongre kayıt kabul personeli",
    "fuar stand hostesi fiyatları 2026",
    "antalya event saha personeli",
    "kemer kongre karşılama hostesi",
    "nova global organizasyon",
  ],
  alternates: {
    canonical: "https://www.novaorganizasyon7.com.tr/kongre-fuar-etkinlik",
  },
  openGraph: {
    title: "2026 - 2027 Kongre, Fuar, Zirve ve Event Saha Operasyon Kataloğu | NOVA GLOBAL",
    description:
      "Antalya ANFAŞ ve 5 yıldızlı kongre otellerinde profesyonel stand hostesi, kayıt-kabul, salon ve VIP karşılama kadroları resmi birim fiyat tarifesi.",
    url: "https://www.novaorganizasyon7.com.tr/kongre-fuar-etkinlik",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/hotel-event.png",
        width: 1200,
        height: 630,
        alt: "NOVA GLOBAL Kongre ve Fuar Saha Operasyonları",
      },
    ],
  },
};

export default function CongressEventPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-warm pt-20 sm:pt-24 pb-16">
        <CongressCatalogClient />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
