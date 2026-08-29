"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserCheck, Building2, Send, CheckCircle2, Phone, Briefcase, Users, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ApplicationHub() {
  const [activeTab, setActiveTab] = useState<"jobSeeker" | "corporate">("jobSeeker");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#is-ariyorum") {
        setActiveTab("jobSeeker");
      } else if (hash === "#personel-ariyorum") {
        setActiveTab("corporate");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Job Seeker Form State
  const [jobName, setJobName] = useState("");
  const [jobPhone, setJobPhone] = useState("");
  const [jobPosition, setJobPosition] = useState("Garson / Servis Elemanı");
  const [jobExperience, setJobExperience] = useState("Var (1 Yıl+)");
  const [jobLodging, setJobLodging] = useState("Evet (Lojman İstiyorum)");

  // Corporate Form State
  const [corpName, setCorpName] = useState("");
  const [corpCompany, setCorpCompany] = useState("");
  const [corpPhone, setCorpPhone] = useState("");
  const [corpDepartment, setCorpDepartment] = useState("Kat Hizmetleri (Meydancı & Kat Görevlisi)");
  const [corpCount, setCorpCount] = useState("3 - 5 Personel");
  const [corpDate, setCorpDate] = useState("Acil (24-48 Saat)");

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobName || !jobPhone) {
      alert("Lütfen adınızı ve telefon numaranızı giriniz.");
      return;
    }

    const message = `*📋 NOVA ORGANİZASYON - İŞ BAŞVURU FORMU*\n\n` +
      `👤 *Aday Adı Soyadı:* ${jobName}\n` +
      `📱 *Telefon:* ${jobPhone}\n` +
      `💼 *Başvurulan Departman:* ${jobPosition}\n` +
      `⭐ *Deneyim Durumu:* ${jobExperience}\n` +
      `🏠 *Lojman Talebi:* ${jobLodging}\n\n` +
      `_Antalya otel ve tesislerinde çalışmak üzere başvurumu iletiyorum._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.contact.phoneRaw}?text=${encoded}`, "_blank");
  };

  const handleCorpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!corpName || !corpCompany || !corpPhone) {
      alert("Lütfen tüm zorunlu alanları doldurunuz.");
      return;
    }

    const message = `*🏨 NOVA ORGANİZASYON - KURUMSAL PERSONEL TALEBİ*\n\n` +
      `🏢 *Tesis / İşletme Adı:* ${corpCompany}\n` +
      `👤 *Yetkili Adı:* ${corpName}\n` +
      `📱 *İletişim Telefonu:* ${corpPhone}\n` +
      `🎯 *Talep Edilen Departman:* ${corpDepartment}\n` +
      `👥 *İhtiyaç Duyulan Kadro:* ${corpCount}\n` +
      `⏱️ *İhtiyaç Zamanı:* ${corpDate}\n\n` +
      `_Tesisimiz için birim fiyatlandırma ve operasyonel şartlar hakkında teklif rica ederiz._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.contact.phoneRaw}?text=${encoded}`, "_blank");
  };

  return (
    <section id="basvuru" className="py-20 relative bg-gradient-to-b from-brand-darkest via-brand-deeper to-brand-darkest overflow-hidden">
      {/* Target Anchors for Direct Navbar Routing */}
      <div id="is-ariyorum" className="absolute -top-24 pointer-events-none" />
      <div id="personel-ariyorum" className="absolute -top-24 pointer-events-none" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            İş mi Arıyorsunuz, <span className="text-gradient-gold">Personel mi?</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
            Antalya 5 yıldızlı otelleri, tatil köyleri ve sanayi tesisleri için 30 saniyede doğrudan WhatsApp koordinasyon masasına bağlanın.
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div className="flex justify-center mb-8 px-2">
          <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("jobSeeker")}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "jobSeeker"
                  ? "bg-gradient-to-r from-gold via-amber-400 to-yellow-500 text-black shadow-lg shadow-gold/20 scale-[1.01]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <UserCheck className="w-4 h-4 flex-shrink-0" />
              <span>İş Arıyorum</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("corporate")}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "corporate"
                  ? "bg-gradient-to-r from-gold via-amber-400 to-yellow-500 text-black shadow-lg shadow-gold/20 scale-[1.01]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Building2 className="w-4 h-4 flex-shrink-0" />
              <span>Personel Arıyorum</span>
            </button>
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-10 rounded-3xl bg-brand-deeper/80 border border-gold/30 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {activeTab === "jobSeeker" ? (
            /* JOB SEEKER FORM */
            <form onSubmit={handleJobSubmit} className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Antalya Otellerinde Hemen İşe Başlayın
                  </h3>
                  <p className="text-xs text-slate-400 font-light">
                    Lojman, servis, SGK ve dolgun yevmiye/maaş imkanıyla 24 saatte işe yerleşim.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={jobName}
                    onChange={(e) => setJobName(e.target.value)}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Telefon Numaranız (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={jobPhone}
                    onChange={(e) => setJobPhone(e.target.value)}
                    placeholder="Örn: 0505 000 00 00"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Çalışmak İstediğiniz Departman
                  </label>
                  <select
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2E0A11] border border-white/15 text-white text-xs focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Garson / Servis Elemanı">Garson / Komi / Servis</option>
                    <option value="Kat Görevlisi (Maid / Housekeeping)">Kat Görevlisi (Housekeeping)</option>
                    <option value="Meydancı (Genel Alan Temizlik)">Meydancı (Genel Alan)</option>
                    <option value="Steward (Bulaşıkhane & Mutfak)">Steward (Bulaşıkhane & Mutfak)</option>
                    <option value="Aşçı / Mutfak Destek">Aşçı Yardımcısı / Mutfak</option>
                    <option value="Fabrika & Sanayi Personeli">Fabrika / Depo Personeli</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Lojman (Konaklama) İhtiyacı
                  </label>
                  <select
                    value={jobLodging}
                    onChange={(e) => setJobLodging(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2E0A11] border border-white/15 text-white text-xs focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Evet (Lojman İstiyorum)">Evet, Lojman ve Servis İstiyorum</option>
                    <option value="Hayır (Kendi Evim Var / Servis Yeterli)">Hayır, Kendi Evim Var</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>WhatsApp ile Başvurumu Hemen İlet (30 Saniye)</span>
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  🔒 Başvurunuz doğrudan İK koordinasyon masamıza şifreli olarak iletilir.
                </p>
              </div>
            </form>
          ) : (
            /* CORPORATE STAFFING REQUEST FORM */
            <form onSubmit={handleCorpSubmit} className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Tesisiniz İçin Acil veya Sezonluk Personel Tedariği
                  </h3>
                  <p className="text-xs text-slate-400 font-light">
                    Resmi bordrolu, SGK güvenceli ve tecrübeli departman ekipleri 24-48 saatte sahada.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Otel / İşletme / Fabrika Adı *
                  </label>
                  <input
                    type="text"
                    required
                    value={corpCompany}
                    onChange={(e) => setCorpCompany(e.target.value)}
                    placeholder="Örn: Rixos Belek / Maxx Royal"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Yetkili Adı Soyadı & Unvan *
                  </label>
                  <input
                    type="text"
                    required
                    value={corpName}
                    onChange={(e) => setCorpName(e.target.value)}
                    placeholder="Örn: Mehmet Bey (İK Müdürü)"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    İletişim Numarası (Telefon / WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={corpPhone}
                    onChange={(e) => setCorpPhone(e.target.value)}
                    placeholder="Örn: 0242 000 00 00 / 0505 000 00 00"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    İhtiyaç Duyulan Departman
                  </label>
                  <select
                    value={corpDepartment}
                    onChange={(e) => setCorpDepartment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2E0A11] border border-white/15 text-white text-xs focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Kat Hizmetleri (Meydancı & Kat Görevlisi)">Kat Hizmetleri (Meydancı & Kat Görevlisi)</option>
                    <option value="Servis & Bar (Garson, Komi & Runner)">Servis & Bar (Garson, Komi)</option>
                    <option value="Bulaşıkhane & Mutfak (Steward)">Bulaşıkhane (Steward) & Mutfak</option>
                    <option value="Genel Operasyon (Komple Departman)">Komple Departman Yönetimi</option>
                    <option value="Sanayi & Fabrika İş Gücü">Fabrika & Depo Saha İş Gücü</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Talep Edilen Personel Sayısı
                  </label>
                  <select
                    value={corpCount}
                    onChange={(e) => setCorpCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2E0A11] border border-white/15 text-white text-xs focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="1 - 3 Personel">1 - 3 Personel</option>
                    <option value="4 - 8 Personel">4 - 8 Personel</option>
                    <option value="10 - 20 Personel">10 - 20 Personel</option>
                    <option value="25+ Personel (Büyük Proje)">25+ Personel (Büyük Proje)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    İhtiyaç Zamanı
                  </label>
                  <select
                    value={corpDate}
                    onChange={(e) => setCorpDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2E0A11] border border-white/15 text-white text-xs focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Acil (24-48 Saat İçinde)">Acil (24-48 Saat İçinde)</option>
                    <option value="Bu Hafta İçinde">Bu Hafta İçinde</option>
                    <option value="Önümüzdeki Ay / Sezonluk">Önümüzdeki Ay / Sezonluk</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold via-amber-400 to-yellow-500 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-gold/20 hover:brightness-110 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Resmi Teklif ve Personel Talebini WhatsApp'tan İlet</span>
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  💼 Kurumsal talebiniz anında Operasyon Müdürümüzün masasına düşer ve 15 dakikada dönüş yapılır.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
