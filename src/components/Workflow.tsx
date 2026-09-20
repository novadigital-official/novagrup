"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, UserCheck2, Bus, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const stepIcons = [ClipboardCheck, UserCheck2, Bus, ShieldCheck];

export default function Workflow() {
  const { t } = useLanguage();

  return (
    <section id="is-akisi" className="py-8 sm:py-10 bg-gradient-to-b from-brand-deeper via-brand-dark to-brand-deeper border-y border-gold/15 text-white relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-light/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <span className="inline-block px-3 py-0.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-[11px] font-bold tracking-[0.16em] uppercase mb-2">
            {t.workflow.badge}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
            {t.workflow.titlePart1}
            <span className="text-gradient-gold">{t.workflow.titleGold}</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            {t.workflow.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 relative">
          {t.workflow.steps.map((step, index) => {
            const Icon = stepIcons[index] || ClipboardCheck;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-gold/30 group-hover:text-gold/70 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 text-gold flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-gold group-hover:text-brand-deeper transition-all duration-300">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Step Title & Desc */}
                  <h3 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-xs leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-semibold text-gold/80">
                  <span>{t.workflow.stage} {index + 1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-sm shadow-gold/50" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
