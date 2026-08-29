"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Home, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: t.stats.stat1Value,
      label: t.stats.stat1Label,
      subtext: t.stats.stat1Sub,
    },
    {
      icon: Home,
      value: t.stats.stat2Value,
      label: t.stats.stat2Label,
      subtext: t.stats.stat2Sub,
    },
    {
      icon: ShieldCheck,
      value: t.stats.stat3Value,
      label: t.stats.stat3Label,
      subtext: t.stats.stat3Sub,
    },
    {
      icon: Clock,
      value: t.stats.stat4Value,
      label: t.stats.stat4Label,
      subtext: t.stats.stat4Sub,
    },
  ];

  return (
    <section className="relative -mt-6 z-20 bg-surface-warm pt-2 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-brand-deeper via-brand-dark to-brand-deeper rounded-2xl p-1 shadow-xl shadow-black/20 border border-gold/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex items-center gap-3 p-3.5 lg:p-4 ${
                  index < stats.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-white/10"
                    : ""
                } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <stat.icon size={18} className="text-gold" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-gold font-bold text-xs sm:text-sm tracking-wide">
                    {stat.value}
                  </p>
                  <p className="text-white font-medium text-[11px] leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-white/45 text-[10px] mt-0.5 leading-snug">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
