"use client";

import { motion } from "framer-motion";
import {
  Users2,
  ShieldCheck,
  Receipt,
  Scale,
  Sliders,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const advantageIcons = [Users2, ShieldCheck, Receipt, Scale, Sliders];

export default function WhyUs() {
  const { t } = useLanguage();

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
                className="group bg-surface-warm/70 hover:bg-white rounded-2xl p-4 border border-black/[0.06] hover:border-gold/50 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-3">
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
