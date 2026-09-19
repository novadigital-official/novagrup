"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Building2,
  Calendar,
  Phone,
  Mail,
  Printer,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  FileSpreadsheet,
  Award,
  Headphones,
  UserCheck,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PriceItem {
  id: string;
  title: string;
  qualification: string;
  price: number;
  priceFormatted: string;
  unit: string;
  badge?: string;
  popular?: boolean;
}

const pricingList: PriceItem[] = [
  {
    id: "stand_hostess",
    title: "Stand Host / Hostesi (Tanıtım & Karşılama)",
    qualification: "Prezentabl, Diksiyonu Düzgün, Türkçe Akıcı",
    price: 2750,
    priceFormatted: "2.750 TL",
    unit: "Günlük Paket",
    badge: "En Çok Tercih Edilen",
    popular: true,
  },
  {
    id: "bilingual_hostess",
    title: "Yabancı Dilli Fuar / Kongre Hostesi",
    qualification: "B2/C1 İngilizce, Almanca veya Rusça Akıcı",
    price: 3750,
    priceFormatted: "3.750 TL",
    unit: "Günlük Paket",
    badge: "Uluslararası Zirveler",
  },
  {
    id: "registration_staff",
    title: "Kayıt-Kabul & Sekretarya Görevlisi",
    qualification: "Hızlı Bilgisayar/Barkod Sistem Yetkinliği",
    price: 2500,
    priceFormatted: "2.500 TL",
    unit: "Günlük Paket",
  },
  {
    id: "runner_hall",
    title: "Salon & Kapı Kontrol Görevlisi (Runner)",
    qualification: "Dinamik, Koordinasyon & Telsiz Kabiliyeti",
    price: 2400,
    priceFormatted: "2.400 TL",
    unit: "Günlük Paket",
  },
  {
    id: "banquet_waiter",
    title: "Kongre Gala / Banket Servis Elemanı",
    qualification: "5 Yıldızlı Otel Standartlarında Deneyimli F&B",
    price: 2250,
    priceFormatted: "2.250 TL",
    unit: "Etkinlik / Vardiya",
  },
];

const servicePackages = [
  {
    title: "Stand Host / Hostesi",
    desc: "Fuar ve kongre standlarında ziyaretçi karşılama, broşür/katalog takdimi, firma tanıtımı, kartvizit toplama ve sıcak kurumsal iletişim.",
    icon: Users,
    tag: "Fuar & Stand",
  },
  {
    title: "Kayıt-Kabul ve Akreditasyon Personeli",
    desc: "Kongre sekretaryasında barkod/yaka kartı basımı, kayıt alma, kongre çantası ve dokümantasyon teslimi, eksiksiz akreditasyon yönetimi.",
    icon: UserCheck,
    tag: "Sekretarya & Desk",
  },
  {
    title: "Salon ve Kapı Görevlileri",
    desc: "Bilimsel oturum salonlarında kapı kontrolü, katılımcı yönlendirme, soru-cevap seanslarında telsiz mikrofon taşıma ve salon düzeni.",
    icon: Clock,
    tag: "Oturum & Salon",
  },
  {
    title: "VIP Transfer ve Karşılama Hostu",
    desc: "Antalya Havalimanı (AYT) karşılama, VIP konuşmacı transfer koordinasyonu, otel check-in ve danışma masası rehberliği.",
    icon: Award,
    tag: "Protokol & Havalimanı",
  },
  {
    title: "Runner ve Teknik Saha Destek",
    desc: "Kongre öncesi stand/afiş kurulumu, malzeme taşınması, simultane kulaklık dağıtım-toplama ve anlık lojistik ihtiyaçların karşılanması.",
    icon: Headphones,
    tag: "Lojistik & Runner",
  },
  {
    title: "Banket & Gala Destek Ekibi",
    desc: "Açılış kokteyli, gala yemeği ve coffee-break aralarında otel F&B yönetimiyle entegre çalışan profesyonel servis personeli (Garson & Komi).",
    icon: Sparkles,
    tag: "Gala & F&B",
  },
];

const guarantees = [
  {
    number: "01",
    title: "Kılık-Kıyafet Standardı",
    desc: "Tüm hostes ve karşılama personeli kurumunuzun talebine göre standart siyah şık ceket-etek/pantolon, beyaz gömlek ve kurumsal yaka kartı ile sahada yer alır.",
  },
  {
    number: "02",
    title: "Akdeniz Üniversitesi Eğitimli Havuz",
    desc: "Kadromuz Akdeniz Üniversitesi İletişim, Turizm ve Yabancı Diller Yüksekokulu öğrencilerinden mülakatla seçilmiş, diksiyonu düzgün ve prezentabl gençlerden oluşur.",
  },
  {
    number: "03",
    title: "Kurumsal Faturalandırma & Sıfır Risk",
    desc: "Faturalar tek satır 'Fuar Stand Yönetimi ve Saha Organizasyon Hizmet Bedeli' olarak kesilir. Tüm operasyonel koordinasyon ve yasal sorumluluk Nova Global tüzel kişiliğine aittir.",
  },
  {
    number: "04",
    title: "45 Dakika Yedek Personel Garantisi",
    desc: "Olası acil mazeret veya hastalık durumlarında en geç 45 dakika içinde aynı nitelikte yedek personel sahaya sevk edilir; iş akışı asla aksamaz.",
  },
];

export default function CongressCatalogClient() {
  // Calculator state
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    stand_hostess: 2,
    bilingual_hostess: 0,
    registration_staff: 1,
    runner_hall: 1,
    banquet_waiter: 0,
  });
  const [days, setDays] = useState(3);
  const [eventLocation, setEventLocation] = useState("ANFAŞ Fuar Merkezi");

  const totalPeople = Object.values(counts).reduce((a, b) => a + b, 0);

  const dailySubtotal = pricingList.reduce((acc, item) => {
    return acc + (counts[item.id] || 0) * item.price;
  }, 0);

  const totalSubtotal = dailySubtotal * days;
  const kdvAmount = totalSubtotal * 0.20;
  const grandTotal = totalSubtotal + kdvAmount;

  const handleCountChange = (id: string, delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const generateWhatsAppMessage = () => {
    const selectedSummary = pricingList
      .filter((item) => (counts[item.id] || 0) > 0)
      .map((item) => `• ${item.title}: ${counts[item.id]} Kişi (${item.priceFormatted})`)
      .join("\n");

    const message =
      `🏛️ *NOVA GLOBAL — 2026 KONGRE & EVENT TEKLİF TALEBİ*\n\n` +
      `📍 *Etkinlik Lokasyonu:* ${eventLocation}\n` +
      `📅 *Gün Sayısı:* ${days} Gün\n` +
      `👥 *Toplam Kadro:* ${totalPeople} Kişi\n` +
      (totalPeople >= 10 ? `⭐ *Nova Saha Süpervizörü:* ÜCRETSİZ DAHİL\n` : "") +
      `\n*Talep Edilen Ekipler:*\n${selectedSummary}\n\n` +
      `💰 *Tahmini Tutar:* ${totalSubtotal.toLocaleString("tr-TR")} TL + KDV\n` +
      `\n_Sayın Çelebi Asal, resmi kaşeli teklif formunu tarafımıza iletmenizi rica ederiz._`;

    return encodeURIComponent(message);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Official Corporation Header Bar */}
      <div className="bg-brand-deeper text-white rounded-2xl p-4 sm:p-6 border border-gold/30 shadow-xl print:shadow-none print:border-black print:text-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white p-1 flex-shrink-0 border border-gold">
              <Image
                src="/images/nova-emblem.jpg"
                alt="NOVA GLOBAL Logo"
                width={56}
                height={56}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gold uppercase block">
                Resmi Saha Operasyon Dokümanı
              </span>
              <h1 className="text-base sm:text-lg font-black text-white leading-tight">
                NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LTD. ŞTİ.
              </h1>
            </div>
          </div>

          {/* Quick Print & WhatsApp Bar */}
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all border border-white/20"
              title="Kataloğu Yazdır veya PDF Kaydet"
            >
              <Printer size={15} />
              <span>PDF / Yazdır</span>
            </button>
            <a
              href={`https://wa.me/905070871789?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-gold to-gold-light text-brand-deeper text-xs font-bold shadow-md hover:brightness-105 transition-all"
            >
              <MessageCircle size={15} />
              <span>0507 087 17 89</span>
            </a>
          </div>
        </div>

        {/* Corporate Legal Identifiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-[11px] text-white/80 font-mono print:text-black">
          <div className="bg-black/20 p-2 rounded-lg border border-white/5">
            <strong className="text-gold block">MERSİS NO:</strong>
            0632159982000001
          </div>
          <div className="bg-black/20 p-2 rounded-lg border border-white/5">
            <strong className="text-gold block">VERGİ DAİRESİ:</strong>
            Antalya Kurumlar V.D. | 632 159 9820
          </div>
          <div className="bg-black/20 p-2 rounded-lg border border-white/5">
            <strong className="text-gold block">LOKASYON:</strong>
            Kepez / ANTALYA
          </div>
          <div className="bg-black/20 p-2 rounded-lg border border-white/5">
            <strong className="text-gold block">İLETİŞİM & MASASI:</strong>
            0507 087 17 89 | iknovaofis@gmail.com
          </div>
        </div>
      </div>

      {/* Hero Letter & Introduction */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-base/10 text-brand-base text-xs font-bold tracking-widest uppercase mb-4">
            <Calendar size={13} />
            <span>2026 - 2027 SEZONU RESMİ KATALOĞU</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-deeper tracking-tight mb-4 leading-tight">
            KONGRE, FUAR, ZİRVE VE EVENT <br className="hidden sm:inline" />
            <span className="text-gradient-burgundy">SAHA OPERASYON KATALOĞU</span>
          </h2>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-warm border border-black/5 text-sm sm:text-base text-black/80 leading-relaxed space-y-3 font-normal">
            <p className="font-semibold text-brand-deeper">
              Sayın Acente, Otel Yönetimi ve Etkinlik Direktörlüğü;
            </p>
            <p>
              Antalya genelinde (<strong>ANFAŞ Fuar Merkezi</strong>, <strong>Belek</strong>, <strong>Kundu</strong> ve <strong>Kemer</strong> kongre otelleri) düzenlenecek olan ulusal ve uluslararası kongre, fuar, sempozyum, zirve ve kurumsal organizasyonlarınızda; prezentabl, yabancı dil yeterliliğine sahip, eğitimli ve saha süpervizörümüz koordinasyonunda görev yapan profesyonel etkinlik kadrolarımızla çözüm ortaklığı sunmaktayız.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: 6 Saha Hizmet Paketlerimiz */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-base">
            Bölüm 1
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-deeper">
            KONGRE VE FUAR SAHA HİZMET PAKETLERİMİZ
          </h3>
          <p className="text-sm text-black/60 mt-1">
            Uluslararası standartlarda eğitim almış ve saha amirlerimizce denetlenen profesyonel ekipler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicePackages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 text-brand-deeper flex items-center justify-center font-bold">
                      <Icon size={22} className="text-brand-base" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-warm text-black/70 text-[11px] font-bold border border-black/5">
                      {pkg.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-deeper mb-2">
                    {pkg.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: 2026 - 2027 SEZONU BİRİM FİYAT TARİFESİ */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-base">
            Bölüm 2
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-deeper">
            2026 - 2027 SEZONU KONGRE & EVENT BİRİM FİYAT TARİFESİ
          </h3>
          <p className="text-sm text-black/60 mt-1">
            Antalya geneli ANFAŞ ve Kongre Otelleri için geçerli resmi net birim fiyatlar.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-deeper text-white text-xs uppercase tracking-wider font-semibold">
                  <th className="py-4 px-5">Hizmet / Görev Tanımı</th>
                  <th className="py-4 px-5">Nitelik & Yabancı Dil</th>
                  <th className="py-4 px-5 text-right">Günlük Birim Fiyat</th>
                  <th className="py-4 px-5 text-center">Faturalandırma Şekli</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-sm text-black/85">
                {pricingList.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-surface-warm/70 transition-colors ${
                      row.popular ? "bg-gold/5 font-medium" : ""
                    }`}
                  >
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-brand-deeper">{row.title}</span>
                        {row.badge && (
                          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gold/20 text-brand-deeper border border-gold/40">
                            {row.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-5 text-xs text-black/70">
                      {row.qualification}
                    </td>
                    <td className="py-4 px-5 text-right font-black text-brand-base text-base whitespace-nowrap">
                      {row.priceFormatted}{" "}
                      <span className="text-[11px] font-normal text-black/50">+ KDV</span>
                    </td>
                    <td className="py-4 px-5 text-center">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-surface-warm text-black/70 text-xs font-semibold border border-black/5">
                        {row.unit}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Supervisor Special Row */}
                <tr className="bg-gradient-to-r from-brand-base/10 via-gold/15 to-brand-base/10 font-bold border-t-2 border-gold/40">
                  <td className="py-4 px-5 text-brand-deeper">
                    Nova Saha Operasyon Süpervizörü
                  </td>
                  <td className="py-4 px-5 text-xs text-brand-deeper">
                    Ekip Sevk-İdare, Denetim & Telsiz Koordinasyon
                  </td>
                  <td className="py-4 px-5 text-right text-emerald-700 text-base font-black">
                    ÜCRETSİZ*
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm">
                      10 Kişi ve Üzeri Gruplarda
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-surface-warm border-t border-black/5 text-xs text-black/70 flex items-center gap-2">
            <ShieldCheck size={16} className="text-gold flex-shrink-0" />
            <span>
              <strong>* Saha Amiri Güvencesi:</strong> 10 kişi ve üzeri organizasyonlarda ekibin sevk, idare, kılık-kıyafet ve denetiminden sorumlu tecrübeli Nova Saha Amiri ücretsiz olarak sahada görevlendirilir.
            </span>
          </div>
        </div>

        {/* Interactive Team & Budget Calculator */}
        <div className="bg-gradient-to-br from-[#121927] to-[#1e293b] text-white rounded-3xl p-6 sm:p-8 border border-gold/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                <FileSpreadsheet size={15} />
                İnteraktif Teklif & Kadro Planlayıcı
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                Etkinliğiniz İçin Anlık Kadro & Bütçe Hesaplayın
              </h4>
            </div>

            {/* Event Details Controls */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <Calendar size={14} className="text-gold" />
                <span>Gün Sayısı:</span>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={days}
                  onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 px-1.5 py-0.5 bg-black/40 rounded border border-white/20 text-center font-bold text-gold"
                />
              </div>

              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <MapPin size={14} className="text-gold" />
                <select
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
                >
                  <option value="ANFAŞ Fuar Merkezi" className="bg-[#121927]">ANFAŞ Fuar Merkezi</option>
                  <option value="Belek Kongre Otelleri" className="bg-[#121927]">Belek Kongre Otelleri</option>
                  <option value="Kundu Kongre Otelleri" className="bg-[#121927]">Kundu Kongre Otelleri</option>
                  <option value="Kemer Kongre Otelleri" className="bg-[#121927]">Kemer Kongre Otelleri</option>
                  <option value="Antalya Merkez" className="bg-[#121927]">Antalya Merkez</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingList.map((item) => {
              const count = counts[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3"
                >
                  <div>
                    <h5 className="text-xs font-bold text-white line-clamp-1">{item.title}</h5>
                    <p className="text-[11px] text-gold/90 font-semibold">{item.priceFormatted} + KDV / Gün</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCountChange(item.id, -1)}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-black text-sm text-gold">{count}</span>
                    <button
                      type="button"
                      onClick={() => handleCountChange(item.id, 1)}
                      className="w-7 h-7 rounded-lg bg-gold text-brand-deeper hover:bg-gold-bright font-bold flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Supervisor Status Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3">
              <div>
                <h5 className="text-xs font-bold text-white">Nova Saha Amiri / Süpervizör</h5>
                <p className="text-[11px] text-emerald-400 font-semibold">
                  {totalPeople >= 10 ? "Ücretsiz Dahil Edildi" : "10 Kişi Üzeri Ücretsiz"}
                </p>
              </div>
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                totalPeople >= 10 ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-white/10 text-white/50"
              }`}>
                {totalPeople >= 10 ? "1 Kişi (Ücretsiz)" : "Opsiyonel"}
              </span>
            </div>
          </div>

          {/* Calculator Bottom Bar */}
          <div className="p-5 rounded-2xl bg-black/40 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-white/60">
                Toplam {totalPeople} Kişilik Kadro • {days} Günlük Operasyon Tutarı:
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-gold">
                  {totalSubtotal.toLocaleString("tr-TR")} TL
                </span>
                <span className="text-xs text-white/60">+ %20 KDV ({grandTotal.toLocaleString("tr-TR")} TL Dahil)</span>
              </div>
            </div>

            <a
              href={`https://wa.me/905070871789?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-black text-sm shadow-xl shadow-gold/25 hover:brightness-105 transition-all"
            >
              <MessageCircle size={18} />
              <span>Bu Kadro İçin Kaşeli Teklif İste</span>
            </a>
          </div>
        </div>
      </div>

      {/* Section 3: KURUMSAL GÜVENCE, FATURALANDIRMA VE MEVZUAT ZIRHI */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-base">
            Bölüm 3
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-deeper">
            KURUMSAL GÜVENCE, FATURALANDIRMA VE MEVZUAT ZIRHI
          </h3>
          <p className="text-sm text-black/60 mt-1">
            İdari, operasyonel ve hukuki riskleri sıfırlayan kurumsal taahhütlerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guarantees.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:border-gold/40 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-base/10 text-brand-base font-black text-sm flex items-center justify-center flex-shrink-0">
                {item.number}
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-deeper mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Sign-Off Box (Official Proposal Representation) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-black/10 shadow-md">
        <div className="border-b border-black/10 pb-4 mb-6 text-center sm:text-left">
          <span className="text-[11px] font-bold tracking-widest text-gold-dark uppercase block">
            Resmi Mutabakat & İnceleme Protokolü
          </span>
          <h4 className="text-lg font-bold text-brand-deeper">
            Kurumsal Teklif ve Onay Beyannamesi
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Teklifi Sunan Taraf */}
          <div className="p-5 rounded-2xl bg-surface-warm border border-black/5 flex flex-col justify-between h-48">
            <div>
              <p className="text-xs font-bold text-brand-base uppercase tracking-wider mb-1">
                Teklifi Sunan Kurum:
              </p>
              <p className="text-xs font-bold text-brand-deeper leading-tight">
                NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ
              </p>
              <p className="text-[11px] text-black/60 mt-1 font-mono">
                MERSİS: 0632159982000001 | V.D: Antalya Kurumlar 632 159 9820
              </p>
            </div>
            <div className="pt-3 border-t border-black/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-brand-deeper">Çelebi Asal</p>
                <p className="text-[11px] text-black/50">Şirket Müdürü</p>
              </div>
              <div className="px-3 py-1 rounded border border-brand-base/30 text-brand-base text-[11px] font-bold uppercase tracking-wider bg-white">
                İmza & Kaşe
              </div>
            </div>
          </div>

          {/* Teklifi İnceleyen / Onaylayan Taraf */}
          <div className="p-5 rounded-2xl bg-surface-warm border border-black/5 flex flex-col justify-between h-48">
            <div>
              <p className="text-xs font-bold text-black/60 uppercase tracking-wider mb-1">
                Teklifi İnceleyen Kurum / Onay:
              </p>
              <p className="text-xs text-black/50 italic">
                Acente / Otel / Etkinlik Yönetim Direktörlüğü
              </p>
            </div>
            <div className="space-y-1 text-xs text-black/70">
              <p>Yetkili Adı Soyadı: _______________________________</p>
              <p>Tarih: ____ / ____ / 2026</p>
            </div>
            <div className="pt-3 border-t border-black/10 flex items-center justify-between">
              <span className="text-[11px] text-black/50">Onay & Kabul</span>
              <div className="px-3 py-1 rounded border border-black/20 text-black/50 text-[11px] uppercase tracking-wider bg-white">
                Kaşe / İmza
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Direct Contact CTA Footer Section */}
      <div className="bg-brand-deeper text-white rounded-3xl p-6 sm:p-10 border border-gold/30 text-center space-y-5">
        <span className="inline-block px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold tracking-widest uppercase border border-gold/30">
          Hızlı Saha Rezervasyonu & Bilgi Masası
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-white max-w-2xl mx-auto leading-tight">
          Etkinliğiniz İçin Kadronuzu Şimdiden Ayırtın, <br />
          <span className="text-gradient-gold">Saha Koordinasyonunu Bize Bırakın.</span>
        </h3>

        <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
          ANFAŞ fuarları ve Antalya kongre otellerindeki yoğun takvimde operasyonel ekibinizi güvenceye almak için 7/24 operasyon masamızla iletişime geçebilirsiniz.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/905070871789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-brand-deeper font-black text-sm shadow-lg hover:brightness-105 transition-all"
          >
            <MessageCircle size={18} />
            <span>WhatsApp ile İletişime Geçin (0507 087 17 89)</span>
          </a>

          <a
            href="tel:05070871789"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
          >
            <Phone size={18} />
            <span>0507 087 17 89'u Arayın</span>
          </a>

          <a
            href="mailto:iknovaofis@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
          >
            <Mail size={18} />
            <span>iknovaofis@gmail.com</span>
          </a>
        </div>
      </div>

    </div>
  );
}
