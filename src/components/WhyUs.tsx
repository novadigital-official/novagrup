"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users2,
  Receipt,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const advantageIcons = [Users2, Zap, ShieldCheck, Receipt];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="neden-nova" className="py-14 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Authentic Operation Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/20 border border-black/10 aspect-[4/4.5] sm:aspect-[3/3.5]">
              <Image
                src="/images/hotel-housekeeping.png"
                alt="NOVA Housekeeping"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/90 via-brand-deeper/30 to-transparent" />

              {/* Inside Card Content */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-brand-deeper text-[11px] font-bold uppercase tracking-wider shadow-md">
                    <ShieldCheck size={13} />
                    {t.whyUs.visualTag}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-white">
                    <p className="text-gold font-bold text-sm leading-none mb-1.5">
                      {t.whyUs.visualHeading}
                    </p>
                    <p className="text-white/80 text-[11px] leading-snug font-light">
                      {t.whyUs.visualSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-brand-deeper to-brand-dark border border-gold/40 text-white rounded-xl p-2.5 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold" />
                <div>
                  <p className="text-white text-[11px] font-bold">{t.whyUs.visualBadge1Title}</p>
                  <p className="text-gold/80 text-[9px] font-medium">{t.whyUs.visualBadge1Sub}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Core Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-base/10 text-brand-base text-xs font-bold tracking-[0.16em] uppercase mb-2.5">
              {t.whyUs.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-deeper tracking-tight leading-[1.15] mb-3">
              {t.whyUs.titlePart1}
              <span className="text-gradient-burgundy">{t.whyUs.titlePart2}</span>
            </h2>
            <p className="text-black/60 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {t.whyUs.subtitle}
            </p>

            {/* Advantage Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.whyUs.advantages.map((adv, index) => {
                const Icon = advantageIcons[index] || Users2;

                return (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="p-4 rounded-xl bg-surface-warm border border-black/5 hover:border-gold/40 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-base/10 text-brand-base flex items-center justify-center mb-2.5">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-brand-deeper mb-1 leading-snug">
                      {adv.title}
                    </h4>
                    <p className="text-black/60 text-xs leading-relaxed font-normal">
                      {adv.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
