"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.departments, href: "#hizmetler" },
    { label: language === "tr" ? "İş Arıyorum" : "Job Application", href: "#iletisim", tab: "jobseeker" as const },
    { label: language === "tr" ? "Personel Arıyorum" : "Request Staff", href: "#iletisim", tab: "corporate" as const },
    { label: t.nav.workflow, href: "#is-akisi" },
    { label: t.nav.contact, href: "#iletisim" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, tab?: "jobseeker" | "corporate") => {
    setIsMobileMenuOpen(false);
    if (tab) {
      window.dispatchEvent(new CustomEvent("set-contact-tab", { detail: tab }));
    }
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 70;
        const rect = targetEl.getBoundingClientRect();
        const scrollTarget = window.pageYOffset + rect.top - navHeight;
        window.scrollTo({
          top: scrollTarget,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-deeper/95 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-gold/15"
          : "bg-gradient-to-b from-brand-deeper/90 via-brand-deeper/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-3.5 group">
            <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-xl overflow-hidden shadow-lg shadow-black/50 border-2 border-gold/60 bg-white flex items-center justify-center group-hover:border-gold group-hover:shadow-gold/30 transition-all duration-300">
              <Image
                src="/images/nova-emblem.jpg"
                alt="NOVA Grup Logo"
                width={56}
                height={56}
                className="object-contain w-full h-full scale-135 group-hover:scale-145 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl sm:text-2xl tracking-wider leading-none">
                NOVA <span className="text-gold font-semibold text-sm">GRUP</span>
              </span>
              <span className="text-gold/90 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                {language === "tr" ? "Turizm • İnşaat • Sanayi" : "Hospitality • Construction • Industry"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href + (link.tab || "")}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.tab)}
                className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}

            {/* Language Switcher Toggle */}
            <div className="flex items-center ml-2 mr-2 p-1 rounded-xl bg-white/5 border border-white/15 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setLanguage("tr")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                  language === "tr"
                    ? "bg-gradient-to-r from-gold to-gold-light text-brand-deeper shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="Türkçe Dili Seçin"
              >
                <span>TR</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                  language === "en"
                    ? "bg-gradient-to-r from-gold to-gold-light text-brand-deeper shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                <Globe size={11} />
                <span>EN</span>
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Link
                href="#iletisim"
                onClick={(e) => handleNavClick(e, "#iletisim")}
                className="px-5 py-2.5 bg-gradient-to-r from-gold to-gold-light text-brand-deeper font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {t.nav.ctaButton}
              </Link>
            </div>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-white/10 border border-white/20">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  language === "tr" ? "bg-gold text-brand-deeper" : "text-white/80"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  language === "en" ? "bg-gold text-brand-deeper" : "text-white/80"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-deeper/98 backdrop-blur-2xl border-t border-gold/15 overflow-hidden"
          >
            <nav aria-label="Mobile navigation" className="px-4 py-5 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href + (link.tab || "")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.tab)}
                    className="flex items-center justify-between px-4 py-2.5 text-white/85 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronRight size={16} className="text-gold/60" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-3">
                <Link
                  href="#iletisim"
                  onClick={(e) => handleNavClick(e, "#iletisim")}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-brand-deeper font-bold rounded-lg shadow-lg text-sm cursor-pointer"
                >
                  {t.nav.mobileCta}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
