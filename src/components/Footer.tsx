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
        
        {/* Main Footer Grid */}
        <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          
          {/* Brand & Contacts Col */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="#hero" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md border border-gold/40 bg-white flex items-center justify-center group-hover:border-gold transition-all duration-300">
                <Image
                  src="/images/nova-emblem.jpg"
                  alt="NOVA Grup Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full scale-135"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg tracking-wider leading-none">
                  NOVA <span className="text-gold font-semibold text-xs">GLOBAL</span>
                </span>
                <span className="text-gold/80 text-[10px] font-bold tracking-[0.18em] uppercase mt-0.5">
                  {language === "tr" ? "Turizm • İnşaat • Sanayi" : "Hospitality • Construction • Industry"}
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-light">
              {language === "tr"
                ? "5 yıldızlı otel ve kurumsal tesisler için tanımlı kapsamda departman işletimi ve götürü bedelli hizmet ortaklığı."
                : "Defined-scope department management and lump-sum service contracting for 5-star hotels and enterprise facilities."}
            </p>

            {/* Quick Contact Links */}
            <div className="space-y-2 text-xs text-white/60 pt-1">
              <div className="flex items-center gap-2.5">
                <MessageCircle size={14} className="text-gold flex-shrink-0" />
                <a
                  href={siteConfig.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors font-medium text-white/80"
                >
                  0505 410 48 00
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors font-medium text-white/80">
                  iknovaofis@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon size={14} className="text-gold flex-shrink-0" />
                <a
                  href="https://instagram.com/novaofisss"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-gold transition-colors font-medium text-white/80"
                >
                  @novaofisss
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-gold font-bold text-[11px] mb-3 tracking-wider uppercase">
                {group.title}
              </h4>
              <ul className="space-y-2 text-xs text-white/55">
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

        {/* Legal Compliance & Disclaimer Bar */}
        <div className="py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5">
            <button
              onClick={() => setActiveLegal("kvkk")}
              className="hover:text-gold transition-colors underline cursor-pointer"
            >
              KVKK
            </button>
            <button
              onClick={() => setActiveLegal("gizlilik")}
              className="hover:text-gold transition-colors underline cursor-pointer"
            >
              Gizlilik & Çerez
            </button>
            <button
              onClick={() => setActiveLegal("kullanim")}
              className="hover:text-gold transition-colors underline cursor-pointer"
            >
              Kullanım Şartları
            </button>
            <button
              onClick={() => setActiveLegal("kunye")}
              className="hover:text-gold transition-colors underline cursor-pointer"
            >
              Resmi Şirket Künyesi
            </button>
          </div>

          <p className="text-[10px] text-white/40 text-center sm:text-right max-w-md">
            {language === "tr"
              ? "NOVA GLOBAL, özel istihdam bürosu değildir; müşterilerine personel temini yapmaz. Hizmetler, kendi bordrolu ekipleriyle bağımsız hizmet alım sözleşmesi kapsamında sunulur."
              : "NOVA GLOBAL is not a private employment agency and does not supply temporary staffing. Services are delivered under independent service contracts."}
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="py-3.5 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[11px] text-white/35">
          <p>{t.footer.copyright}</p>
          <p className="text-[10px] text-white/25">{t.footer.tagline}</p>
        </div>
      </div>

      {/* Legal Modal Popup */}
      <LegalModal type={activeLegal} onClose={() => setActiveLegal(null)} />
    </footer>
  );
}
