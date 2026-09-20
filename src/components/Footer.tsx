"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/LanguageContext";
import { LegalModal, LegalModalType } from "./LegalModals";

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
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

export default function Footer() {
  const { language, t } = useLanguage();
  const [activeLegal, setActiveLegal] = useState<LegalModalType>(null);

  const footerLinks = [
    {
      title: t.footer.col1Title,
      links: [
        { label: t.footer.col1Link1, href: "#hizmetler" },
        { label: t.footer.col1Link2, href: "#hizmetler" },
        { label: t.footer.col1Link3, href: "#hizmetler" },
        { label: t.footer.col1Link4, href: "#hizmetler" },
        { label: t.footer.col1Link5, href: "#hizmetler" },
      ],
    },
    {
      title: t.footer.col2Title,
      links: [
        { label: t.footer.col2Link1, href: "#neden-nova" },
        { label: t.footer.col2Link2, href: "#is-akisi" },
        { label: t.footer.col2Link3, href: "#neden-nova" },
        { label: t.footer.col2Link4, href: "#neden-nova" },
        { label: t.footer.col2Link5, href: "#kadro-basvuru" },
      ],
    },
    {
      title: t.footer.col3Title,
      links: [
        { label: t.footer.col3Link1, href: "#iletisim" },
        { label: t.footer.col3Link2, href: "https://wa.me/905054104800" },
        { label: t.footer.col3Link3, href: "tel:05054104800" },
        { label: t.footer.col3Link4, href: `mailto:${siteConfig.contact.email}` },
        { label: t.footer.col3Link5, href: "https://instagram.com/novaofisss" },
      ],
    },
  ];

  return (
    <footer className="bg-brand-darkest text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="#hero" className="flex items-center gap-3.5 group">
              <div className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-2xl overflow-hidden shadow-xl shadow-black/50 border-2 border-gold/60 bg-white flex items-center justify-center group-hover:border-gold group-hover:shadow-gold/30 transition-all duration-300">
                <Image
                  src="/images/nova-emblem.jpg"
                  alt="NOVA Grup Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full scale-135 group-hover:scale-145 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl sm:text-2xl tracking-wider leading-none">
                  NOVA <span className="text-gold font-semibold text-sm">GLOBAL</span>
                </span>
                <span className="text-gold/90 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                  {language === "tr" ? "Turizm • İnşaat • Sanayi" : "Hospitality • Construction • Industry"}
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-light">
              {t.footer.description}
            </p>

            {/* Official Visible Künye Box */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-white/70 space-y-1.5 max-w-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="text-gold font-bold text-[10px] uppercase tracking-wider">
                  Resmi Şirket Künyesi
                </span>
                <span className="text-[10px] text-white/40">MERSİS: 0632159982000001</span>
              </div>
              <p className="text-white/90 font-medium text-[11px] leading-tight">
                NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON VE DANIŞMANLIK LİMİTED ŞİRKETİ
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[10px] text-white/60">
                <p><span className="text-white/40">V.D. & No:</span> Antalya Kurumlar — 632 159 9820</p>
                <p><span className="text-white/40">Şirket Müdürü:</span> Çelebi ASAL</p>
                <p className="sm:col-span-2"><span className="text-white/40">Ticaret Sicil:</span> Antalya Ticaret Sicili Md. (TTSG: 11164)</p>
                <p className="sm:col-span-2 text-[10px] text-white/50 leading-relaxed">
                  <span className="text-white/40">Tescilli Adres:</span> Kültür Mah. 3856 Sk. 1. Yeşil Yayla Apt. No:2 İç Kapı No:1 Kepez / Antalya
                </p>
              </div>
            </div>

            <div className="pt-1 space-y-1.5 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-gold flex-shrink-0" />
                <span>Kültür Mah. 3856 Sk. 1. Yeşil Yayla Apt. No:2 İç Kapı No:1 Kepez / Antalya</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={13} className="text-gold flex-shrink-0" />
                <a
                  href={siteConfig.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp: 0505 410 48 00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors">
                  iknovaofis@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon size={13} className="text-gold flex-shrink-0" />
                <a
                  href="https://instagram.com/novaofisss"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  @novaofisss
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-bold text-xs mb-3 tracking-wide text-gold">
                {group.title}
              </h4>
              <ul className="space-y-2 text-xs text-white/60">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Legal Compliance Bar */}
        <div className="py-3 border-t border-white/5 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[11px] text-white/50">
          <span className="text-gold font-semibold">Yasal Bilgilendirme:</span>
          <button
            onClick={() => setActiveLegal("kvkk")}
            className="hover:text-gold transition-colors underline cursor-pointer"
          >
            KVKK Aydınlatma Metni
          </button>
          <button
            onClick={() => setActiveLegal("gizlilik")}
            className="hover:text-gold transition-colors underline cursor-pointer"
          >
            Gizlilik ve Çerez Politikası
          </button>
          <button
            onClick={() => setActiveLegal("kullanim")}
            className="hover:text-gold transition-colors underline cursor-pointer"
          >
            Kullanım Şartları & 5651 Yasal Uyarı
          </button>
          <button
            onClick={() => setActiveLegal("kunye")}
            className="hover:text-gold transition-colors underline cursor-pointer"
          >
            Resmi Künye
          </button>
        </div>

        {/* Official Statutory Disclaimer Bar */}
        <div className="py-3.5 px-4 rounded-xl bg-white/[0.03] border border-gold/20 text-[11px] text-white/60 leading-relaxed my-3 text-center sm:text-left">
          <p>
            <strong className="text-gold font-semibold">Hukuki Bilgilendirme:</strong> NOVA GLOBAL, müşterilerine personel temini, işçi kiralama veya geçici işçi sağlama hizmeti sunmaz. Hizmetler; NOVA GLOBAL’in kendi iş organizasyonu, bordrolu çalışanları, saha sorumluları, gerekli ekipmanları ve tanımlı hizmet çıktılarıyla yürütülen bağımsız hizmet alım sözleşmeleri kapsamında sunulur. Her proje için hizmet kapsamı, çıktı ve kalite kriterleri, yönetim sorumlulukları, iş sağlığı ve güvenliği görevleri, raporlama düzeni ve ücretlendirme yöntemi yazılı olarak belirlenir. İlişkinin hukuki niteliği yalnızca sözleşme başlığına değil, fiili çalışma düzenine ve saha uygulamasına göre değerlendirilir. Doğru sözleşme tasarımı ve tutarlı fiili uygulama ile personel temini, muvazaa ve geçici iş ilişkisi risklerinin azaltılması hedeflenir.
          </p>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/40"
        >
          <p className="text-center sm:text-left">
            {t.footer.copyright}
          </p>
          <p className="text-white/30 text-[10px]">
            {t.footer.tagline}
          </p>
        </motion.div>
      </div>

      {/* Legal Modal Popup */}
      <LegalModal type={activeLegal} onClose={() => setActiveLegal(null)} />
    </footer>
  );
}
