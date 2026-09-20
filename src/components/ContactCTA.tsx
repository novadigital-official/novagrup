"use client";

import { useState } from "react";
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
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  // Corporate Form Data
  const [corpData, setCorpData] = useState({
    name: "",
    hotelName: "",
    phone: "",
    department: "Tüm Operasyon Alanları (Entegre Tesis İşletimi)",
    message: "",
  });

  const handleCorpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCorpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        `🏛️ *NOVA GLOBAL — KURUMSAL OPERASYON VE HİZMET TALEBİ*\n\n` +
        `👤 *Yetkili:* ${corpData.name}\n` +
        `🏨 *İşletme / Otel / Tesis:* ${corpData.hotelName}\n` +
        `📞 *İletişim Tel:* ${corpData.phone}\n` +
        `🏢 *Talep Edilen Hizmet Alanı:* ${corpData.department}\n` +
        (corpData.message ? `📝 *Talep / Operasyon Notu:* ${corpData.message}\n` : "") +
        `\n_novaorganizasyon7.com.tr kurumsal operasyon masası üzerinden iletildi._`
      );

      window.open(`https://wa.me/905054104800?text=${waText}`, "_blank");

      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setCorpData({
          name: "",
          hotelName: "",
          phone: "",
          department: "Tüm Operasyon Alanları (Entegre Tesis İşletimi)",
          message: "",
        });
      }, 4000);
    } catch {
      setFormState("idle");
    }
  };

  return (
    <section id="iletisim" className="scroll-mt-20 relative py-8 sm:py-10 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-darkest overflow-hidden text-white">
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
                <Clock size={12} className="text-gold" />
                {language === "tr" ? "Hızlı İletişim & Teklif" : "Direct Advisory & Proposal"}
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                {language === "tr" ? (
                  <>
                    Tesisiniz İçin <span className="text-gradient-gold">Hemen Teklif Alın</span>
                  </>
                ) : (
                  <>
                    Request an <span className="text-gradient-gold">Operations Proposal</span>
                  </>
                )}
              </h2>

              <p className="mt-2 text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                {language === "tr"
                  ? "Antalya ve çevre bölgelerdeki 5 yıldızlı oteller, ticari tesisler ve kongre merkezleri için anahtar teslim departman işletimi ve operasyonel danışmanlık hizmeti sunuyoruz. Detayları iletin, aynı gün içinde yerinde analiz yaparak hizmet teklifimizi hazırlayalım."
                  : "We deliver turnkey facility department management and operations advisory for 5-star resorts, commercial facilities, and congress venues across Antalya. Submit your scope to receive a tailored service proposal within 24 hours."}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
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
                    {language === "tr" ? "Saha Koordinasyon & Danışma WhatsApp" : "Field Coordination & Advisory"}
                  </p>
                  <p className="text-white font-black text-sm sm:text-base group-hover:text-gold transition-colors">
                    0505 410 48 00
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {language === "tr" ? "Hızlı Danışmanlık & Canlı Mesajlaşma" : "Instant Advisory & WhatsApp Chat"}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
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
                  <p className="text-white font-black text-sm sm:text-base group-hover:text-gold transition-colors">
                    iknovaofis@gmail.com
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {language === "tr" ? "Resmi Hizmet Teklifleri & Sözleşmeler" : "Official Service Proposals & Contracts"}
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <InstagramIcon size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">
                    {language === "tr" ? "Sosyal Medya" : "Social Media"}
                  </p>
                  <p className="text-white font-black text-sm sm:text-base group-hover:text-gold transition-colors">
                    @novaofisss
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {language === "tr" ? "Saha ve Operasyon Güncellemeleri" : "Field & Operations Updates"}
                  </p>
                </div>
              </a>
            </div>

            {/* Micro Badge */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 flex items-center gap-2.5">
              <ShieldCheck size={16} className="text-gold flex-shrink-0" />
              <span>
                {language === "tr"
                  ? "Tüm operasyonlarımız NOVA saha koordinatörleri gözetiminde, sözleşmeli ve garantili sunulur."
                  : "All operations are coordinated under dedicated NOVA supervisors under strict contractual quality standards."}
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Pure B2B Operations Proposal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl p-5 sm:p-7 border border-white/15 shadow-xl relative h-full flex flex-col justify-between">
              
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 flex items-center gap-2">
                  <Building2 size={18} className="text-gold" />
                  <span>{language === "tr" ? "Tesisiniz İçin Hızlı Operasyon & Hizmet Teklifi" : "Request an Operations & Service Proposal"}</span>
                </h3>
                <p className="text-white/50 text-xs font-light">
                  {language === "tr"
                    ? "Tesisinizin ihtiyaç duyduğu operasyon alanlarını iletin; teklifiniz anında WhatsApp operasyon masamıza düşsün."
                    : "Submit your facility's operational requirements to receive a tailored proposal directly via WhatsApp."}
                </p>
              </div>

              {/* B2B CORPORATE PROPOSAL FORM */}
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
                    <label htmlFor="corp-department" className="sr-only">Hizmet Alanı</label>
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
                      <option value="Tüm Operasyon Alanları (Entegre Tesis İşletimi)">Tüm Operasyon Alanları (Entegre Tesis İşletimi)</option>
                      <option value="Kat Hizmetleri & Housekeeping Operasyonu">Kat Hizmetleri & Housekeeping Operasyonu</option>
                      <option value="Restoran & Ziyafet Servis Operasyonu">Restoran & Ziyafet Servis Operasyonu</option>
                      <option value="Bulaşıkhane & Mutfak Sanitasyon Operasyonu">Bulaşıkhane & Mutfak Sanitasyon Operasyonu</option>
                      <option value="Animasyon & Sahne Gösterileri Operasyonu">Animasyon & Sahne Gösterileri Operasyonu</option>
                      <option value="İnşaat, Tadilat & Tesis Bakımı">İnşaat, Tadilat & Tesis Bakımı</option>
                      <option value="Depo İçi Paketleme ve Sevkiyat Projeleri">Depo İçi Paketleme ve Sevkiyat Projeleri</option>
                      <option value="Kongre, Fuar & Etkinlik Saha Operasyonları">Kongre, Fuar & Etkinlik Saha Operasyonları</option>
                      <option value="B2B Lead Üretimi & Çağrı Operasyonu">B2B Lead Üretimi & Çağrı Operasyonu</option>
                      <option value="Devlet Destekleri & Teşvik Danışmanlığı">Devlet Destekleri & Teşvik Danışmanlığı</option>
                    </select>
                  </div>

                  {/* Optional Note */}
                  <div className="relative">
                    <label htmlFor="corp-message" className="sr-only">Operasyon Notu</label>
                    <div className="absolute left-3 top-3 text-white/30">
                      <MessageSquare size={15} />
                    </div>
                    <textarea
                      id="corp-message"
                      name="message"
                      value={corpData.message}
                      onChange={handleCorpChange}
                      placeholder={language === "tr" ? "Tahmini hizmet kapsamı, departman büyüklüğü veya belirtmek istediğiniz detaylar (Opsiyonel)..." : "Estimated scope, department size, or specific notes (Optional)..."}
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
                      <span>{language === "tr" ? "Hizmet Talebini WhatsApp'a İlet" : "Send Proposal Request via WhatsApp"}</span>
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

              {/* Legal Disclaimer Shield Box */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-white/60 leading-relaxed">
                <p>
                  <strong className="text-gold font-semibold">Hukuki Güvence & Bilgilendirme:</strong> NOVA GLOBAL bir özel istihdam bürosu değildir; personel temini, işçi kiralama veya geçici iş ilişkisi hizmeti vermez. Tüm hizmetler, NOVA GLOBAL&apos;in kendi SGK&apos;lı personeliyle, tanımlı hizmet kapsamı ve götürü bedel üzerinden hizmet alım sözleşmesi çerçevesinde sunulur.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
