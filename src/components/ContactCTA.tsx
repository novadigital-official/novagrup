"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  MessageCircle,
  CheckCircle2,
  Loader2,
  MapPin,
  Layers,
  Briefcase,
  UserCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/LanguageContext";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactCTA() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"corporate" | "jobseeker">("corporate");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  // Corporate Form Data
  const [corpData, setCorpData] = useState({
    name: "",
    hotelName: "",
    phone: "",
    department: "Tüm Departmanlar (Kombine Taşeronluk)",
    message: "",
  });

  // Jobseeker Form Data (Exactly 4 clean fields: Name, Phone, Age & Location, Desired Role)
  const [jobData, setJobData] = useState({
    name: "",
    phone: "",
    ageLocation: "",
    desiredRole: "Kat Hizmetleri (Housekeeping & Meydan)",
  });

  const handleCorpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCorpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleJobChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setJobData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit Corporate Proposal Request (Saves to API + Direct WhatsApp Launch)
  const handleCorpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // 1. Save to internal API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "corporate", ...corpData }),
      });

      // 2. Format Live WhatsApp Message
      const waText = encodeURIComponent(
        `🏛️ *NOVA GRUP — KURUMSAL TEKLİF TALEBİ*\n\n` +
        `👤 *Yetkili:* ${corpData.name}\n` +
        `🏨 *İşletme / Otel:* ${corpData.hotelName}\n` +
        `📞 *İletişim Tel:* ${corpData.phone}\n` +
        `🏢 *Departman:* ${corpData.department}\n` +
        (corpData.message ? `📝 *Talep / Not:* ${corpData.message}\n` : "") +
        `\n_novaorganizasyon7.com.tr üzerinden iletildi._`
      );

      window.open(`https://wa.me/905054104800?text=${waText}`, "_blank");

      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setCorpData({
          name: "",
          hotelName: "",
          phone: "",
          department: "Tüm Departmanlar (Kombine Taşeronluk)",
          message: "",
        });
      }, 4000);
    } catch {
      setFormState("idle");
    }
  };

  // Submit Job Application (Saves to API + Direct WhatsApp Launch)
  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // 1. Save to internal API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "jobseeker", ...jobData }),
      });

      // 2. Format Live WhatsApp Message
      const waText = encodeURIComponent(
        `👤 *NOVA GRUP — PERSONEL İŞ BAŞVURUSU*\n\n` +
        `📋 *Ad Soyad:* ${jobData.name}\n` +
        `📞 *Telefon:* ${jobData.phone}\n` +
        `📍 *İkamet & Yaş:* ${jobData.ageLocation}\n` +
        `💼 *Çalışmak İstenen Alan:* ${jobData.desiredRole}\n` +
        `\n_novaorganizasyon7.com.tr iş başvuru masasından iletildi._`
      );

      window.open(`https://wa.me/905054104800?text=${waText}`, "_blank");

      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setJobData({
          name: "",
          phone: "",
          ageLocation: "",
          desiredRole: "Kat Hizmetleri (Housekeeping & Meydan)",
        });
      }, 4000);
    } catch {
      setFormState("idle");
    }
  };

  return (
    <section id="iletisim" className="relative py-14 sm:py-16 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-darkest overflow-hidden text-white">
      {/* Subtle background grid & glowing accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-[380px] h-[380px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[320px] h-[320px] bg-brand-light/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-4"
          >
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-[0.16em] uppercase mb-3">
                {language === "tr" ? "İletişim & Başvuru Masası" : "Inquiry & Application Desk"}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.18]">
                {language === "tr" ? "İşletmeniz İçin " : "Request a Proposal "}
                <span className="text-gradient-gold">
                  {language === "tr" ? "Canlı İletişim & Teklif" : "Direct Dispatch"}
                </span>
              </h2>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 flex-grow flex flex-col justify-center">
              
              {/* Saha Koordinasyon WhatsApp */}
              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saha Koordinasyon WhatsApp"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <MessageCircle size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {language === "tr" ? "Saha Koordinasyon WhatsApp" : "Field Coordination Desk"}
                  </p>
                  <p className="text-white font-black text-sm sm:text-base group-hover:text-gold transition-colors">
                    0505 410 48 00
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {language === "tr" ? "Hızlı Teklif & Canlı Mesajlaşma" : "Instant Proposal & WhatsApp Chat"}
                  </p>
                </div>
              </a>

              {/* Yönetici & B2B Anlaşma Hattı */}
              <a
                href="https://wa.me/905070871789"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yönetici & B2B Anlaşma Hattı"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <Phone size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {language === "tr" ? "Yönetici & B2B Hattı" : "Executive & B2B Desk"}
                  </p>
                  <p className="text-white font-black text-sm sm:text-base group-hover:text-gold transition-colors">
                    0507 087 17 89
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">Çelebi Asal — Operasyon Yönetimi</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:iknovaofis@gmail.com"
                aria-label="Email"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {language === "tr" ? "Kurumsal E-Posta" : "Corporate Email"}
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm group-hover:text-gold transition-colors">
                    iknovaofis@gmail.com
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">Resmi Teklif & Sözleşmeler</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/novaofisss"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <InstagramIcon size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">Instagram</p>
                  <p className="text-white font-bold text-xs sm:text-sm group-hover:text-gold transition-colors">
                    @novaofisss
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">Saha ve Operasyon Akışı</p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right: Interactive Dual-Tab Form (Corporate & Jobseeker) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl p-5 sm:p-7 border border-white/15 shadow-xl relative h-full flex flex-col justify-between">
              
              {/* Segmented Tab Switcher */}
              <div className="flex p-1 bg-black/40 rounded-xl border border-white/10 mb-5">
                <button
                  type="button"
                  onClick={() => { setActiveTab("corporate"); setFormState("idle"); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeTab === "corporate"
                      ? "bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper shadow-md shadow-gold/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Building2 size={15} />
                  <span>{language === "tr" ? "Kurumsal Teklif Al" : "Corporate Proposal"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab("jobseeker"); setFormState("idle"); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeTab === "jobseeker"
                      ? "bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper shadow-md shadow-gold/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <UserCheck size={15} />
                  <span>{language === "tr" ? "Personel İş Başvurusu" : "Job Application"}</span>
                </button>
              </div>

              {/* Header for Active Mode */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 flex items-center gap-2">
                  {activeTab === "corporate" ? (
                    <>
                      <Building2 size={18} className="text-gold" />
                      <span>{language === "tr" ? "Tesisiniz İçin Hızlı Fiyat Teklifi" : "Request an Operational Proposal"}</span>
                    </>
                  ) : (
                    <>
                      <Briefcase size={18} className="text-gold" />
                      <span>{language === "tr" ? "Personel İş Başvuru Formu" : "Staff Job Application Form"}</span>
                    </>
                  )}
                </h3>
                <p className="text-white/50 text-xs font-light">
                  {activeTab === "corporate"
                    ? (language === "tr"
                        ? "Bilgilerinizi iletin; teklif talebiniz anında WhatsApp operasyon masamıza düşsün."
                        : "Submit your details to receive an instant proposal directly via WhatsApp.")
                    : (language === "tr"
                        ? "4 basit adımda bilgilerinizi girin, ekiplerimiz 15 dakika içinde sizinle iletişime geçsin."
                        : "Enter your 4 details below; our recruitment dispatch will contact you within 15 minutes.")}
                </p>
              </div>

              {/* TAB 1: CORPORATE PROPOSAL FORM */}
              {activeTab === "corporate" && (
                <form onSubmit={handleCorpSubmit} className="space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    
                    {/* Name & Hotel Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <label htmlFor="corp-name" className="sr-only">Adınız Soyadınız</label>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                          <User size={15} />
                        </div>
                        <input
                          id="corp-name"
                          type="text"
                          name="name"
                          value={corpData.name}
                          onChange={handleCorpChange}
                          placeholder={language === "tr" ? "Adınız Soyadınız / Göreviniz" : "Your Name & Title"}
                          required
                          className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                        />
                      </div>

                      <div className="relative">
                        <label htmlFor="corp-hotel" className="sr-only">İşletme / Otel Adı</label>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                          <Building2 size={15} />
                        </div>
                        <input
                          id="corp-hotel"
                          type="text"
                          name="hotelName"
                          value={corpData.hotelName}
                          onChange={handleCorpChange}
                          placeholder={language === "tr" ? "İşletme / Otel / Firma Adı" : "Hotel / Facility Name"}
                          required
                          className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <label htmlFor="corp-phone" className="sr-only">Telefon Numaranız</label>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                        <Phone size={15} />
                      </div>
                      <input
                        id="corp-phone"
                        type="tel"
                        name="phone"
                        value={corpData.phone}
                        onChange={handleCorpChange}
                        placeholder={language === "tr" ? "Telefon Numaranız (05XX...)" : "Phone Number (+90...)"}
                        required
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* Department Select */}
                    <div className="relative">
                      <label htmlFor="corp-department" className="sr-only">Departman</label>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                        <Layers size={15} />
                      </div>
                      <select
                        id="corp-department"
                        name="department"
                        value={corpData.department}
                        onChange={handleCorpChange}
                        className="w-full pl-9 pr-3 py-2.5 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                      >
                        <option value="Tüm Departmanlar (Kombine Taşeronluk)">Tüm Departmanlar (Kombine Hizmet)</option>
                        <option value="Kat Hizmetleri (Housekeeping & Meydan)">Kat Hizmetleri (Housekeeping & Meydan)</option>
                        <option value="Yiyecek & İçecek (Garson & Komi)">Yiyecek & İçecek (Garson & Komi)</option>
                        <option value="Bulaşıkhane (Steward Ekipleri)">Bulaşıkhane (Steward Ekipleri)</option>
                        <option value="Animasyon & Gösteri Sanatları">Animasyon & Gösteri Sanatları</option>
                        <option value="İnşaat, Tadilat & Tesis Bakımı">İnşaat, Tadilat & Tesis Bakımı</option>
                        <option value="Fabrika, Üretim Hattı & Depo Lojistiği">Fabrika, Üretim Hattı & Depo Lojistiği</option>
                      </select>
                    </div>

                    {/* Optional Note */}
                    <div className="relative">
                      <label htmlFor="corp-message" className="sr-only">Not</label>
                      <div className="absolute left-3 top-3 text-white/30">
                        <MessageSquare size={15} />
                      </div>
                      <textarea
                        id="corp-message"
                        name="message"
                        value={corpData.message}
                        onChange={handleCorpChange}
                        placeholder={language === "tr" ? "Tahmini kişi sayısı veya belirtmek istediğiniz detaylar (Opsiyonel)..." : "Estimated team size or specific notes (Optional)..."}
                        rows={2}
                        className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={formState !== "idle"}
                    className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-extrabold text-xs sm:text-sm hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {formState === "idle" && (
                      <>
                        <Send size={15} />
                        <span>{language === "tr" ? "Teklif Talebini WhatsApp'a İlet" : "Send Proposal Request to WhatsApp"}</span>
                      </>
                    )}
                    {formState === "sending" && (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>{language === "tr" ? "İletiliyor..." : "Sending..."}</span>
                      </>
                    )}
                    {formState === "sent" && (
                      <>
                        <CheckCircle2 size={15} className="text-emerald-800" />
                        <span>{language === "tr" ? "Talebiniz Alındı & WhatsApp Açıldı!" : "Request Sent & WhatsApp Opened!"}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* TAB 2: JOB APPLICATION FORM (EXACTLY 4 CLEAN MINIMAL BOXES) */}
              {activeTab === "jobseeker" && (
                <form onSubmit={handleJobSubmit} className="space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    
                    {/* 1. Ad Soyad */}
                    <div className="relative">
                      <label htmlFor="job-name" className="sr-only">Adınız Soyadınız</label>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                        <User size={15} />
                      </div>
                      <input
                        id="job-name"
                        type="text"
                        name="name"
                        value={jobData.name}
                        onChange={handleJobChange}
                        placeholder={language === "tr" ? "1. Adınız Soyadınız" : "1. Full Name"}
                        required
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* 2. Telefon Numarası */}
                    <div className="relative">
                      <label htmlFor="job-phone" className="sr-only">Telefon Numaranız</label>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                        <Phone size={15} />
                      </div>
                      <input
                        id="job-phone"
                        type="tel"
                        name="phone"
                        value={jobData.phone}
                        onChange={handleJobChange}
                        placeholder={language === "tr" ? "2. Telefon Numaranız (05XX...)" : "2. Phone Number (05XX...)"}
                        required
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* 3. İkamet Yeri & Yaş */}
                    <div className="relative">
                      <label htmlFor="job-ageloc" className="sr-only">Nerede Oturuyorsunuz & Yaşınız</label>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                        <MapPin size={15} />
                      </div>
                      <input
                        id="job-ageloc"
                        type="text"
                        name="ageLocation"
                        value={jobData.ageLocation}
                        onChange={handleJobChange}
                        placeholder={language === "tr" ? "3. Nerede Oturuyorsunuz ve Yaşınız (Örn: Antalya Kepez — 24 Yaş)" : "3. Your Location & Age (e.g. Antalya Kepez — Age 24)"}
                        required
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* 4. Ne İş Yapmak İstiyorsunuz (Çalışmak İstenen Alan) */}
                    <div className="relative">
                      <label htmlFor="job-role" className="sr-only">Çalışmak İstediğiniz Alan / Meslek</label>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                        <Briefcase size={15} />
                      </div>
                      <select
                        id="job-role"
                        name="desiredRole"
                        value={jobData.desiredRole}
                        onChange={handleJobChange}
                        className="w-full pl-9 pr-3 py-2.5 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                      >
                        <option value="Kat Hizmetleri (Housekeeping & Meydan)">4. Kat Hizmetleri (Housekeeping, Maid, Meydancı)</option>
                        <option value="Restoran & Bar (Garson, Komi, Barmen)">4. Restoran Servis & Bar (Garson, Komi, Barmen)</option>
                        <option value="Bulaşıkhane (Steward & Mutfak Destek)">4. Mutfak Hijyeni & Bulaşıkhane (Steward)</option>
                        <option value="Animasyon & Sahne Gösterileri">4. Animasyon, Dans & Sahne Sanatları</option>
                        <option value="İnşaat, Boya, Alçı & Şantiye Temizliği">4. İnşaat, Boya, Alçı & Şantiye Temizliği</option>
                        <option value="Fabrika, Paketleme Hattı & Depo">4. Fabrika, Üretim Hattı & Depo Lojistiği</option>
                        <option value="Fark Etmez (En Uygun Açık Pozisyon)">4. Fark Etmez (En Uygun Açık Pozisyon)</option>
                      </select>
                    </div>

                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={formState !== "idle"}
                    className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-extrabold text-xs sm:text-sm hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {formState === "idle" && (
                      <>
                        <Send size={15} />
                        <span>{language === "tr" ? "İş Başvurusunu WhatsApp'a İlet" : "Submit Application via WhatsApp"}</span>
                      </>
                    )}
                    {formState === "sending" && (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>{language === "tr" ? "Başvuru İletiliyor..." : "Submitting..."}</span>
                      </>
                    )}
                    {formState === "sent" && (
                      <>
                        <CheckCircle2 size={15} className="text-emerald-800" />
                        <span>{language === "tr" ? "Başvurunuz Alındı & WhatsApp Açıldı!" : "Application Sent & WhatsApp Opened!"}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
