"use client";

import { motion } from "framer-motion";
import {
  Users2,
  ShieldCheck,
  Receipt,
  Scale,
  Sliders,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollToSection } from "@/lib/scroll";

const advantageIcons = [Users2, ShieldCheck, Receipt, Scale, Sliders];

export default function WhyUs() {
  const { t, language } = useLanguage();

  return (
    <section id="neden-nova" className="py-8 sm:py-10 bg-white border-b border-black/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <span className="inline-block px-3 py-0.5 rounded-full bg-brand-base/10 text-brand-base text-[11px] font-bold tracking-[0.16em] uppercase mb-2">
            {t.whyUs.badge}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-deeper tracking-tight leading-snug">
            {t.whyUs.titlePart1}
            <span className="text-gradient-burgundy">{t.whyUs.titlePart2}</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-black/60 font-normal leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* 5-Card Grid (1 Row on Desktop, 2 on Tablet, Stacks on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">
          {t.whyUs.advantages.map((adv, index) => {
            const Icon = advantageIcons[index] || Users2;

            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group bg-surface-warm/70 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-black/[0.06] hover:border-gold/50 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-base/10 text-brand-base group-hover:bg-gold/20 group-hover:text-gold-dark transition-colors flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <span className="text-[11px] font-black text-black/20 group-hover:text-gold transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[13px] sm:text-sm font-bold text-brand-deeper mb-1.5 leading-snug group-hover:text-brand-base transition-colors">
                    {adv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {adv.description}
                  </p>
                </div>

                {/* Bottom verified badge */}
                <div className="mt-3 pt-2 border-t border-black/[0.04] flex items-center gap-1.5 text-[10px] font-semibold text-brand-base/80">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  <span>{language === "tr" ? "Sözleşmeli Garanti" : "Contractual SLA"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact CTA Footer Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-brand-deeper via-brand-dark to-brand-deeper text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-gold/25"
        >
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <ShieldCheck size={18} className="text-gold flex-shrink-0 hidden sm:block" />
            <p className="text-xs text-white/85 font-light">
              <strong className="text-white font-bold">{language === "tr" ? "Sürpriz maliyet yok: " : "Zero unexpected fees: "}</strong>
              {language === "tr"
                ? "Tesisiniz için tanımlı kapsam ve götürü bedelle aynı gün yazılı hizmet teklifinizi hazırlayalım."
                : "Get a customized lump-sum service proposal with transparent SLAs prepared within 24 hours."}
            </p>
          </div>

          <a
            href="#iletisim"
            onClick={(e) => scrollToSection(e, "iletisim")}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-brand-deeper font-black text-xs hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>{language === "tr" ? "Hizmet Teklifi İsteyin" : "Request Proposal"}</span>
            <ArrowRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
