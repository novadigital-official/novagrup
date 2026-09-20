"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Building2,
  Phone,
  User,
  MessageSquare,
  MessageCircle,
  Mail,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Layers,
  Briefcase,
  Users,
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
  const [activeTab, setActiveTab] = useState<"corporate" | "candidate">("corporate");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  // Corporate Form Data
  const [corpData, setCorpData] = useState({
    name: "",
    hotelName: "",
    phone: "",
    department: "Tüm Operasyon Alanları (Entegre Tesis İşletimi)",
    message: "",
    corpKvkkConsent: true,
    corpWhatsAppConsent: true,
  });

  // Candidate Form Data
  const [candidateData, setCandidateData] = useState({
    name: "",
    phone: "",
    district: "Kepez / Antalya",
    department: "Kat Hizmetleri & Housekeeping Ekipleri",
    availability: "Hemen Başlayabilirim",
    notes: "",
    candKvkkConsent: true,
    candWhatsAppConsent: true,
  });

  // URL Hash Listener for smooth direct jumps
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#kadro-basvuru" || hash === "#kariyer") {
        setActiveTab("candidate");
      } else if (hash === "#iletisim" || hash === "#teklif") {
        setActiveTab("corporate");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleCorpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setCorpData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setCorpData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCandidateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setCandidateData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setCandidateData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit Corporate Proposal Request
  const handleCorpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!corpData.corpKvkkConsent) {
      alert(language === "tr" ? "Lütfen KVKK Aydınlatma Metni'ni onaylayın." : "Please agree to the privacy statement.");
      return;
    }
    setFormState("sending");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "corporate", ...corpData }),
      });

      if (corpData.corpWhatsAppConsent) {
        const waText = encodeURIComponent(
          `🏛️ *NOVA GLOBAL — KURUMSAL OPERASYON VE HİZMET TALEBİ*\n\n` +
          `👤 *Yetkili:* ${corpData.name}\n` +
          `🏨 *İşletme / Otel / Tesis:* ${corpData.hotelName}\n` +
          `📞 *İletişim Tel:* ${corpData.phone}\n` +
          `🏢 *Talep Edilen Hizmet Alanı:* ${corpData.department}\n` +
          (corpData.message ? `📝 *Talep / Operasyon Notu:* ${corpData.message}\n` : "") +
          `\n_novaorganizasyon7.com.tr kurumsal operasyon masası üzerinden iletildi._`
        );
        window.open(`https://wa.me/905054104800?text=${waText}`, "_blank");
      }

      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setCorpData({
          name: "",
          hotelName: "",
          phone: "",
          department: "Tüm Operasyon Alanları (Entegre Tesis İşletimi)",
          message: "",
          corpKvkkConsent: true,
          corpWhatsAppConsent: true,
        });
      }, 4000);
    } catch {
      setFormState("idle");
    }
  };

  // Submit Candidate Application
  const handleCandidateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateData.candKvkkConsent) {
      alert(language === "tr" ? "Lütfen Çalışan Adayı KVKK Aydınlatma Metni'ni onaylayın." : "Please agree to the candidate privacy statement.");
      return;
    }
    setFormState("sending");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "candidate", ...candidateData }),
      });

      if (candidateData.candWhatsAppConsent) {
        const waText = encodeURIComponent(
          `👷 *NOVA GLOBAL — KADRO İSTİHDAM VE İŞ BAŞVURUSU*\n\n` +
          `👤 *Aday Adı Soyadı:* ${candidateData.name}\n` +
          `📞 *İletişim Tel:* ${candidateData.phone}\n` +
          `📍 *İkamet İlçesi:* ${candidateData.district}\n` +
          `🏢 *Çalışmak İstenen Alan:* ${candidateData.department}\n` +
          `⏱️ *İşe Başlama Durumu:* ${candidateData.availability}\n` +
          (candidateData.notes ? `📝 *Deneyim / Not:* ${candidateData.notes}\n` : "") +
          `\n_NOVA GLOBAL kendi bünyesinde SGK'lı istihdam değerlendirmesi için iletilmiştir._`
        );
        window.open(`https://wa.me/905054104800?text=${waText}`, "_blank");
      }

      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setCandidateData({
          name: "",
          phone: "",
          district: "Kepez / Antalya",
          department: "Kat Hizmetleri & Housekeeping Ekipleri",
          availability: "Hemen Başlayabilirim",
          notes: "",
          candKvkkConsent: true,
          candWhatsAppConsent: true,
        });
      }, 4000);
    } catch {
      setFormState("idle");
    }
  };

  return (
    <section id="iletisim" className="scroll-mt-20 relative py-8 sm:py-10 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-darkest overflow-hidden text-white">
      {/* Anchor for Candidate jump */}
      <div id="kadro-basvuru" className="absolute -top-20" />

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Fast Info & Direct Contact Channels (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gold/10 text-gold border border-gold/30 mb-2">
                {activeTab === "corporate" ? (
                  <>
                    <Clock size={12} className="text-gold" />
                    <span>{language === "tr" ? "Hızlı İletişim & Teklif" : "Direct Advisory & Proposal"}</span>
                  </>
                ) : (
                  <>
                    <Users size={12} className="text-gold" />
                    <span>{language === "tr" ? "Kariyer & İşe Alım" : "Careers & Hiring"}</span>
                  </>
                )}
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                {activeTab === "corporate" ? (
                  language === "tr" ? (
                    <>
                      Tesisiniz İçin <span className="text-gradient-gold">Hemen Teklif Alın</span>
                    </>
                  ) : (
                    <>
                      Request an <span className="text-gradient-gold">Operations Proposal</span>
                    </>
                  )
                ) : (
                  language === "tr" ? (
                    <>
                      Kendi SGK&apos;lı <span className="text-gradient-gold">Kadromuza Katılın</span>
                    </>
                  ) : (
                    <>
                      Join Our <span className="text-gradient-gold">Direct Payroll Team</span>
                    </>
                  )
                )}
              </h2>

              <p className="mt-2 text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                {activeTab === "corporate" ? (
                  language === "tr"
                    ? "Antalya genelindeki otel ve kurumsal tesisler için anahtar teslim departman işletimi sunuyoruz. Detayları iletin, en geç 24 saat içinde teklifimizi hazırlayalım."
                    : "Turnkey department management and facility operations across Antalya. Submit your scope to receive a tailored proposal within 24 hours."
                ) : (
                  language === "tr"
                    ? "Antalya genelindeki otel operasyonlarımızda, NOVA GLOBAL bordrosunda tam SGK, servis ve yemek olanaklarıyla görev alacak çalışma arkadaşları arıyoruz."
                    : "Join our dedicated operational teams across Antalya, directly employed under NOVA GLOBAL payroll with full statutory benefits."
                )}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-2.5">
              {/* WhatsApp Card */}
              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saha Koordinasyon WhatsApp"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {activeTab === "corporate"
                      ? (language === "tr" ? "Saha Koordinasyon WhatsApp" : "Field Coordination WhatsApp")
                      : (language === "tr" ? "İK & Başvuru Danışma" : "HR & Recruitment WhatsApp")}
                  </p>
                  <p className="text-white font-black text-sm group-hover:text-gold transition-colors">
                    0505 410 48 00
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {activeTab === "corporate"
                      ? (language === "tr" ? "Kurumsal E-Posta" : "Corporate Email")
                      : (language === "tr" ? "İnsan Kaynakları" : "HR Email")}
                  </p>
                  <p className="text-white font-black text-sm group-hover:text-gold transition-colors">
                    iknovaofis@gmail.com
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <InstagramIcon size={18} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {language === "tr" ? "Sosyal Medya" : "Social Media"}
                  </p>
                  <p className="text-white font-black text-sm group-hover:text-gold transition-colors">
                    @novaofisss
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Dual Tab Segmented Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl p-4 sm:p-6 border border-white/15 shadow-xl relative h-full flex flex-col justify-between">
              
              {/* Apple-style Segmented Tab Switcher */}
              <div className="flex p-1 mb-3.5 rounded-xl bg-black/40 border border-white/15">
                <button
                  type="button"
                  onClick={() => setActiveTab("corporate")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "corporate"
                      ? "bg-gradient-to-r from-gold to-gold-light text-brand-deeper shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {language === "tr" ? "Kurumsal Hizmet Teklifi (B2B)" : "Corporate Proposal (B2B)"}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("candidate")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "candidate"
                      ? "bg-gradient-to-r from-gold to-gold-light text-brand-deeper shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {language === "tr" ? "Kadromuza Katılın (İş)" : "Join Our Payroll"}
                </button>
              </div>

              {/* TAB 1: B2B CORPORATE PROPOSAL FORM */}
              {activeTab === "corporate" && (
                <div className="flex-grow flex flex-col justify-between">
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 flex items-center gap-2">
                      <Building2 size={17} className="text-gold" />
                      <span>{language === "tr" ? "Tesisiniz İçin Hızlı Operasyon & Hizmet Teklifi" : "Request an Operations & Service Proposal"}</span>
                    </h3>
                    <p className="text-white/50 text-xs font-light">
                      {language === "tr"
                        ? "Tesisinizin ihtiyaç duyduğu operasyon alanlarını iletin; teklifiniz anında WhatsApp operasyon masamıza düşsün."
                        : "Submit your facility's operational requirements to receive a tailored proposal directly via WhatsApp."}
                    </p>
                  </div>

                  <form onSubmit={handleCorpSubmit} className="space-y-2.5 flex-grow flex flex-col justify-between">
                    <div className="space-y-2.5">
                      {/* Name & Hotel Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="relative">
                          <label htmlFor="corp-name" className="sr-only">Adınız Soyadınız</label>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                            <User size={14} />
                          </div>
                          <input
                            id="corp-name"
                            type="text"
                            name="name"
                            value={corpData.name}
                            onChange={handleCorpChange}
                            placeholder={language === "tr" ? "Adınız Soyadınız / Göreviniz" : "Your Name & Title"}
                            required
                            className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                          />
                        </div>

                        <div className="relative">
                          <label htmlFor="corp-hotel" className="sr-only">İşletme / Otel Adı</label>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                            <Building2 size={14} />
                          </div>
                          <input
                            id="corp-hotel"
                            type="text"
                            name="hotelName"
                            value={corpData.hotelName}
                            onChange={handleCorpChange}
                            placeholder={language === "tr" ? "İşletme / Otel / Firma Adı" : "Hotel / Facility Name"}
                            required
                            className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="relative">
                        <label htmlFor="corp-phone" className="sr-only">Telefon Numaranız</label>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                          <Phone size={14} />
                        </div>
                        <input
                          id="corp-phone"
                          type="tel"
                          name="phone"
                          value={corpData.phone}
                          onChange={handleCorpChange}
                          placeholder={language === "tr" ? "Telefon Numaranız (05XX...)" : "Phone Number (+90...)"}
                          required
                          className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                        />
                      </div>

                      {/* Department Select */}
                      <div className="relative">
                        <label htmlFor="corp-department" className="sr-only">Hizmet Alanı</label>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                          <Layers size={14} />
                        </div>
                        <select
                          id="corp-department"
                          name="department"
                          value={corpData.department}
                          onChange={handleCorpChange}
                          className="w-full pl-9 pr-3 py-2 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                        >
                          <option value="Tüm Operasyon Alanları (Entegre Tesis İşletimi)">Tüm Operasyon Alanları (Entegre Tesis İşletimi)</option>
                          <option value="Kat Hizmetleri & Housekeeping Operasyonu">Kat Hizmetleri & Housekeeping Operasyonu</option>
                          <option value="Restoran & Ziyafet Servis Operasyonu">Restoran & Ziyafet Servis Operasyonu</option>
                          <option value="Bulaşıkhane & Mutfak Sanitasyon Operasyonu">Bulaşıkhane & Mutfak Sanitasyon Operasyonu</option>
                          <option value="Animasyon & Sahne Gösterileri Koordinasyonu">Animasyon & Sahne Gösterileri Koordinasyonu</option>
                          <option value="İnşaat, Tadilat & Tesis Bakım Hizmetleri">İnşaat, Tadilat & Tesis Bakım Hizmetleri</option>
                          <option value="Depo, Paketleme & Sevkiyat Operasyonları">Depo, Paketleme & Sevkiyat Operasyonları</option>
                          <option value="Kongre, Fuar & Etkinlik Saha Operasyonları">Kongre, Fuar & Etkinlik Saha Operasyonları</option>
                          <option value="B2B Satış Geliştirme & İletişim Operasyonu">B2B Satış Geliştirme & İletişim Operasyonu</option>
                          <option value="Devlet Destekleri & Teşvik Danışmanlığı">Devlet Destekleri & Teşvik Danışmanlığı</option>
                        </select>
                      </div>

                      {/* Optional Note */}
                      <div className="relative">
                        <label htmlFor="corp-message" className="sr-only">Operasyon Notu</label>
                        <div className="absolute left-3 top-2.5 text-white/30">
                          <MessageSquare size={14} />
                        </div>
                        <textarea
                          id="corp-message"
                          name="message"
                          value={corpData.message}
                          onChange={handleCorpChange}
                          placeholder={language === "tr" ? "Tahmini kapsam (Oda sayısı, kuver, metraj veya operasyon notunuz - Opsiyonel)..." : "Estimated scope, department size, or specific notes (Optional)..."}
                          rows={2}
                          className="w-full pl-9 pr-3 py-1.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all resize-none"
                        />
                      </div>
                      {/* 1. KVKK Aydınlatma Onayı (Zorunlu) */}
                      <label className="flex items-start gap-2 text-[10px] text-white/70 cursor-pointer pt-0.5">
                        <input
                          type="checkbox"
                          name="corpKvkkConsent"
                          checked={corpData.corpKvkkConsent}
                          onChange={handleCorpChange}
                          className="mt-0.5 accent-gold cursor-pointer"
                        />
                        <span>
                          {language === "tr" ? (
                            <>
                              <strong className="text-white">KVKK Aydınlatma Metni’ni</strong> okudum. Kurumsal iletişim bilgilerimin hizmet keşfi, teklif hazırlanması ve tarafıma geri dönüş yapılması amacıyla işlenebileceği konusunda bilgilendirildim.
                            </>
                          ) : (
                            <>
                              I acknowledge the <strong className="text-white">Privacy Notice</strong> for proposal preparation and corporate follow-up.
                            </>
                          )}
                        </span>
                      </label>

                      {/* 2. WhatsApp Aktarım Onayı (Açık Rıza) */}
                      <label className="flex items-start gap-2 text-[10px] text-white/60 cursor-pointer">
                        <input
                          type="checkbox"
                          name="corpWhatsAppConsent"
                          checked={corpData.corpWhatsAppConsent}
                          onChange={handleCorpChange}
                          className="mt-0.5 accent-gold cursor-pointer"
                        />
                        <span>
                          {language === "tr"
                            ? "Hizmet talebimin ve bu kapsamda paylaştığım iletişim bilgilerimin hızlı teklif ve iletişim amacıyla WhatsApp operasyon masasına aktarılmasını kabul ediyorum."
                            : "I consent to transferring my request details to the WhatsApp operations desk for direct communications."}
                        </span>
                      </label>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={formState !== "idle"}
                      className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-extrabold text-xs sm:text-sm hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {formState === "idle" && (
                        <>
                          <Send size={14} />
                          <span>{language === "tr" ? "Hizmet Talebini WhatsApp'a İlet" : "Send Proposal Request via WhatsApp"}</span>
                        </>
                      )}
                      {formState === "sending" && (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>{language === "tr" ? "İletiliyor..." : "Sending..."}</span>
                        </>
                      )}
                      {formState === "sent" && (
                        <>
                          <CheckCircle2 size={14} className="text-emerald-800" />
                          <span>{language === "tr" ? "Talebiniz Alındı & WhatsApp Açıldı!" : "Request Sent & WhatsApp Opened!"}</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Corporate Legal Notice */}
                  <p className="mt-2 text-center text-[10px] text-white/45 leading-relaxed">
                    {language === "tr"
                      ? "NOVA GLOBAL iş/personel temin bürosu değildir. Hizmetler, kendi bordrolu ekiplerimiz ve saha amirlerimizle götürü bedelli hizmet alım sözleşmesiyle yürütülür."
                      : "NOVA GLOBAL is not a staffing agency. Services are delivered under lump-sum service contracts with our own payroll staff and field supervisors."}
                  </p>
                </div>
              )}

              {/* TAB 2: CANDIDATE / JOB APPLICATION FORM */}
              {activeTab === "candidate" && (
                <div className="flex-grow flex flex-col justify-between">
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 flex items-center gap-2">
                      <Briefcase size={17} className="text-gold" />
                      <span>{language === "tr" ? "NOVA Kadrosuna Katılın (İş Başvurusu)" : "Join NOVA Direct Payroll"}</span>
                    </h3>
                    <p className="text-white/50 text-xs font-light">
                      {language === "tr"
                        ? "Antalya genelinde yürüttüğümüz tesis operasyonlarımızda NOVA GLOBAL bordrosunda görev alacak çalışma arkadaşları arıyoruz."
                        : "Apply to join NOVA GLOBAL's direct operational payroll across Antalya resorts and facilities."}
                    </p>
                  </div>

                  <form onSubmit={handleCandidateSubmit} className="space-y-2.5 flex-grow flex flex-col justify-between">
                    <div className="space-y-2.5">
                      {/* Name & Phone Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="relative">
                          <label htmlFor="cand-name" className="sr-only">Adınız Soyadınız</label>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                            <User size={14} />
                          </div>
                          <input
                            id="cand-name"
                            type="text"
                            name="name"
                            value={candidateData.name}
                            onChange={handleCandidateChange}
                            placeholder={language === "tr" ? "Adınız Soyadınız" : "Full Name"}
                            required
                            className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                          />
                        </div>

                        <div className="relative">
                          <label htmlFor="cand-phone" className="sr-only">Telefon Numaranız</label>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                            <Phone size={14} />
                          </div>
                          <input
                            id="cand-phone"
                            type="tel"
                            name="phone"
                            value={candidateData.phone}
                            onChange={handleCandidateChange}
                            placeholder={language === "tr" ? "Telefon Numaranız (05XX...)" : "Phone Number (+90...)"}
                            required
                            className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                          />
                        </div>
                      </div>

                      {/* District & Availability Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="relative">
                          <label htmlFor="cand-district" className="sr-only">İkamet İlçesi</label>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                            <MapPin size={14} />
                          </div>
                          <select
                            id="cand-district"
                            name="district"
                            value={candidateData.district}
                            onChange={handleCandidateChange}
                            className="w-full pl-9 pr-3 py-2 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                          >
                            <option value="Kepez / Antalya">Kepez / Antalya</option>
                            <option value="Muratpaşa / Antalya">Muratpaşa / Antalya</option>
                            <option value="Konyaaltı / Antalya">Konyaaltı / Antalya</option>
                            <option value="Serik / Belek">Serik / Belek</option>
                            <option value="Manavgat / Side">Manavgat / Side</option>
                            <option value="Kemer / Göynük">Kemer / Göynük</option>
                            <option value="Alanya">Alanya</option>
                            <option value="Diğer (Antalya Dışı / Taşınabilir)">Diğer (Taşınabilir / Lojman)</option>
                          </select>
                        </div>

                        <div className="relative">
                          <label htmlFor="cand-avail" className="sr-only">İşe Başlama Durumu</label>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                            <Clock size={14} />
                          </div>
                          <select
                            id="cand-avail"
                            name="availability"
                            value={candidateData.availability}
                            onChange={handleCandidateChange}
                            className="w-full pl-9 pr-3 py-2 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                          >
                            <option value="Hemen Başlayabilirim">Hemen Başlayabilirim</option>
                            <option value="3-5 Gün İçinde">3-5 Gün İçinde</option>
                            <option value="15 Gün İçinde">15 Gün İçinde</option>
                            <option value="Sezon Başında">Sezon Başında</option>
                          </select>
                        </div>
                      </div>

                      {/* Desired Department */}
                      <div className="relative">
                        <label htmlFor="cand-dept" className="sr-only">Görev Almak İstediğiniz Departman</label>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                          <Briefcase size={14} />
                        </div>
                        <select
                          id="cand-dept"
                          name="department"
                          value={candidateData.department}
                          onChange={handleCandidateChange}
                          className="w-full pl-9 pr-3 py-2 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                        >
                          <option value="Kat Hizmetleri & Housekeeping Ekipleri">Kat Hizmetleri & Housekeeping Operasyonu</option>
                          <option value="Restoran Servis & Ziyafet Ekipleri">Restoran & Ziyafet Servis Operasyonu</option>
                          <option value="Bulaşıkhane & Mutfak Sanitasyon Ekipleri">Bulaşıkhane & Mutfak Sanitasyon Operasyonu</option>
                          <option value="Animasyon, Sahne & Gösteri Ekipleri">Animasyon & Sahne Gösterileri Koordinasyonu</option>
                          <option value="Tesis Tadilat, Boya & Bakım Ekipleri">İnşaat, Tadilat & Tesis Bakım Hizmetleri</option>
                          <option value="Depo İçi Paketleme & Sevkiyat Ekipleri">Depo, Paketleme & Sevkiyat Operasyonları</option>
                          <option value="Genel Başvuru (Açık Pozisyonlar)">Genel Başvuru (En Uygun Açık Pozisyon)</option>
                        </select>
                      </div>

                      {/* Optional Notes */}
                      <div className="relative">
                        <label htmlFor="cand-notes" className="sr-only">Deneyim / Not</label>
                        <div className="absolute left-3 top-2.5 text-white/30">
                          <MessageSquare size={14} />
                        </div>
                        <textarea
                          id="cand-notes"
                          name="notes"
                          value={candidateData.notes}
                          onChange={handleCandidateChange}
                          placeholder={language === "tr" ? "Daha önceki deneyimleriniz, hijyen belgesi vb. belirtmek istediğiniz notlar (Opsiyonel)..." : "Previous work experience or notes (Optional)..."}
                          rows={2}
                          className="w-full pl-9 pr-3 py-1.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all resize-none"
                        />
                      </div>

                      {/* 1. KVKK Çalışan Adayı Aydınlatma Onayı (Zorunlu) */}
                      <label className="flex items-start gap-2 text-[10px] text-white/70 cursor-pointer pt-0.5">
                        <input
                          type="checkbox"
                          name="candKvkkConsent"
                          checked={candidateData.candKvkkConsent}
                          onChange={handleCandidateChange}
                          className="mt-0.5 accent-gold cursor-pointer"
                        />
                        <span>
                          {language === "tr" ? (
                            <>
                              <strong className="text-white">KVKK Çalışan Adayı Aydınlatma Metni’ni</strong> okudum. Başvuru ve iletişim bilgilerimin NOVA bünyesinde istihdam değerlendirmesi amacıyla işlenmesi konusunda bilgilendirildim.
                            </>
                          ) : (
                            <>
                              I acknowledge the <strong className="text-white">Candidate Privacy Notice</strong> for employment evaluation purposes.
                            </>
                          )}
                        </span>
                      </label>

                      {/* 2. WhatsApp Aktarım Onayı (Açık Rıza) */}
                      <label className="flex items-start gap-2 text-[10px] text-white/60 cursor-pointer">
                        <input
                          type="checkbox"
                          name="candWhatsAppConsent"
                          checked={candidateData.candWhatsAppConsent}
                          onChange={handleCandidateChange}
                          className="mt-0.5 accent-gold cursor-pointer"
                        />
                        <span>
                          {language === "tr"
                            ? "Başvuru özetimin ve iletişim bilgilerimin hızlı İK değerlendirmesi amacıyla WhatsApp hattına aktarılmasını kabul ediyorum."
                            : "I consent to the transmission of my application details to the WhatsApp recruitment channel."}
                        </span>
                      </label>
                    </div>

                    {/* Submit Candidate CTA */}
                    <button
                      type="submit"
                      disabled={formState !== "idle"}
                      className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-extrabold text-xs sm:text-sm hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {formState === "idle" && (
                        <>
                          <Send size={14} />
                          <span>{language === "tr" ? "Kadro Başvurusunu WhatsApp'a İlet" : "Submit Application via WhatsApp"}</span>
                        </>
                      )}
                      {formState === "sending" && (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>{language === "tr" ? "Başvuru İletiliyor..." : "Submitting..."}</span>
                        </>
                      )}
                      {formState === "sent" && (
                        <>
                          <CheckCircle2 size={14} className="text-emerald-800" />
                          <span>{language === "tr" ? "Başvurunuz Alındı & WhatsApp Açıldı!" : "Application Sent & WhatsApp Opened!"}</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* STATUTORY MANDATORY DISCLAIMER BOX (VERBATIM) */}
                  <div className="mt-3 p-2.5 rounded-xl bg-white/[0.03] border border-gold/25 text-[10px] sm:text-[11px] text-white/70 leading-relaxed">
                    <p>
                      <strong className="text-gold font-semibold">Yasal Bilgilendirme:</strong> NOVA GLOBAL bir özel istihdam bürosu değildir. Başvurular yalnızca NOVA GLOBAL&apos;in kendi kadrosunda istihdam edilmek üzere değerlendirilir; üçüncü kişi veya kuruluşlara personel yerleştirme, iş bulma aracılığı ya da geçici iş ilişkisi hizmeti verilmez. NOVA GLOBAL, iş arayanlardan hiçbir aşamada ücret, komisyon veya herhangi bir menfaat talep etmez.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
