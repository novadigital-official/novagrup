"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, UserCheck2, Bus, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const stepIcons = [ClipboardCheck, UserCheck2, Bus, ShieldCheck];

export default function Workflow() {
  const { t } = useLanguage();

  return (
    <section id="is-akisi" className="py-16 sm:py-20 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-deeper border-y border-gold/15 text-white relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-light/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3.5 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-[0.16em] uppercase mb-3">
            {t.workflow.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {t.workflow.titlePart1}
            <span className="text-gradient-gold">{t.workflow.titleGold}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-light leading-relaxed">
            {t.workflow.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {t.workflow.steps.map((step, index) => {
            const Icon = stepIcons[index] || ClipboardCheck;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-gold/30 group-hover:text-gold/70 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 text-gold flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Step Title & Desc */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-xs leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-gold/80">
                  <span>{t.workflow.stage} {index + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-gold shadow-sm shadow-gold/50" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-5 sm:p-6 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-gold/30 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl"
        >
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              {t.workflow.bannerTitle}
            </h4>
            <p className="text-white/65 text-xs sm:text-sm font-light">
              {t.workflow.bannerDesc}
            </p>
          </div>
          <Link
            href="#iletisim"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-brand-deeper font-bold text-xs sm:text-sm hover:shadow-lg hover:shadow-gold/20 transition-all hover:-translate-y-0.5"
          >
            {t.workflow.bannerBtn}
            <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
