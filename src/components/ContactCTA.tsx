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
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    hotelName: "",
    email: "",
    phone: "",
    department: "Tüm Departmanlar (Kombine Taşeronluk)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }
    setFormState("sent");
    setTimeout(() => {
      setFormState("idle");
      setFormData({
        name: "",
        hotelName: "",
        email: "",
        phone: "",
        department: "Tüm Departmanlar (Kombine Taşeronluk)",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="iletisim" className="relative py-14 sm:py-16 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-darkest overflow-hidden text-white">
      {/* Subtle mesh background */}
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
          
          {/* Left: Contact Info & Value Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-4"
          >
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-[0.16em] uppercase mb-3">
                {t.contact.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.18]">
                {t.contact.titlePart1}
                <span className="text-gradient-gold">{t.contact.titleGold}</span>
              </h2>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 flex-grow flex flex-col justify-center">
              
              {/* WhatsApp Card */}
              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Destek Hattı"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <MessageCircle size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">{t.contact.directContactLabel}</p>
                  <p className="text-white font-black text-sm sm:text-base group-hover:text-gold transition-colors">
                    {t.contact.phone}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">{t.contact.contactPerson}</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:iknovaofis@gmail.com"
                aria-label="Email"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">{t.contact.emailLabel}</p>
                  <p className="text-white font-bold text-xs sm:text-sm group-hover:text-gold transition-colors">
                    {t.contact.email}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">iknovaofis@gmail.com</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/novaofisss"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300 text-gold">
                  <InstagramIcon size={19} />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] font-bold uppercase tracking-wider">{t.contact.instagramLabel}</p>
                  <p className="text-white font-bold text-xs sm:text-sm group-hover:text-gold transition-colors">
                    {t.contact.instagram}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">Saha ve Operasyon Akışı</p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right: Working Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl p-6 sm:p-7 border border-white/15 shadow-xl relative h-full flex flex-col justify-between"
            >
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                  {t.contact.formTitle}
                </h3>
                <p className="text-white/50 text-xs">
                  {t.contact.formSubtitle}
                </p>
              </div>

              <div className="space-y-3">
                
                {/* Name & Hotel Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <User size={15} />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="hotel" className="sr-only">Hotel</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <Building2 size={15} />
                    </div>
                    <input
                      id="hotel"
                      type="text"
                      name="hotelName"
                      value={formData.hotelName}
                      onChange={handleChange}
                      placeholder={t.contact.hotelPlaceholder}
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <Phone size={15} />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.phonePlaceholder}
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <Mail size={15} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={language === "tr" ? "E-Posta Adresiniz (Opsiyonel)" : "Email Address (Optional)"}
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                {/* Department Select */}
                <div className="relative">
                  <label htmlFor="department" className="sr-only">Department</label>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                    <Layers size={15} />
                  </div>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-brand-dark border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-gold transition-all cursor-pointer"
                  >
                    <option value="Tüm Departmanlar (Kombine Hizmet)">{t.contact.deptOption1}</option>
                    <option value="Kat Hizmetleri (Housekeeping & Meydan)">{t.contact.deptOption2}</option>
                    <option value="Yiyecek & İçecek (Garson & Komi)">{t.contact.deptOption3}</option>
                    <option value="Bulaşıkhane (Steward Ekipleri)">{t.contact.deptOption4}</option>
                    <option value="Animasyon & Gösteri Sanatları">{t.contact.deptOption5}</option>
                    <option value="Etkinlik & Ziyafet (Banquet Ekibi)">{t.contact.deptOption6}</option>
                    <option value="İnşaat, Tadilat & Tesis Bakımı">{t.contact.deptOption7}</option>
                    <option value="Fabrika, Üretim Hattı & Depo Lojistiği">{t.contact.deptOption8}</option>
                  </select>
                </div>

                {/* Message Box */}
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <div className="absolute left-3 top-3 text-white/30">
                    <MessageSquare size={15} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.msgPlaceholder}
                    rows={2}
                    className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-white text-xs sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-extrabold text-xs sm:text-sm hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "idle" && (
                    <>
                      <Send size={15} />
                      {t.contact.submitIdle}
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      {t.contact.submitSending}
                    </>
                  )}
                  {formState === "sent" && (
                    <>
                      <CheckCircle2 size={15} className="text-emerald-700" />
                      {t.contact.submitSuccess}
                    </>
                  )}
                </button>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
