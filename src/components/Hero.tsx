"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users2 } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center hero-mesh pt-28 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-1/4 left-1/5 w-[380px] h-[380px] rounded-full bg-gold/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute bottom-1/4 right-1/5 w-[320px] h-[320px] rounded-full bg-brand-light/25 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] mb-4 tracking-tight break-words"
            >
              {t.hero.headlinePart1}
              <span className="text-gradient-gold">{t.hero.headlineGold}</span>
              <br />
              <span className="text-white/95">{t.hero.headlinePart2}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs sm:text-base text-white/70 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 font-light break-words"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Key Value Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                <Users2 size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs text-white/90 font-medium break-words">{t.hero.badge1}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                <Zap size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs text-white/90 font-medium break-words">{t.hero.badge2}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                <ShieldCheck size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs text-white/90 font-medium break-words">{t.hero.badge3}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Operational Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Showcase Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-2 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl border border-white/15 shadow-xl shadow-black/40">
                
                {/* Photo 1: Housekeeping Maid */}
                <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden group">
                  <Image
                    src="/images/hotel-housekeeping.png"
                    alt="NOVA Housekeeping"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/90 via-brand-deeper/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-gold text-brand-deeper text-[9px] font-bold uppercase tracking-wider mb-0.5">
                      {t.hero.photo1Tag}
                    </span>
                    <p className="text-white text-[11px] font-semibold leading-tight">{t.hero.photo1Title}</p>
                  </div>
                </div>

                {/* Photo 2: F&B Waiter */}
                <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden group">
                  <Image
                    src="/images/hotel-waiter.png"
                    alt="NOVA F&B Service"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/90 via-brand-deeper/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-gold text-brand-deeper text-[9px] font-bold uppercase tracking-wider mb-0.5">
                      {t.hero.photo2Tag}
                    </span>
                    <p className="text-white text-[11px] font-semibold leading-tight">{t.hero.photo2Title}</p>
                  </div>
                </div>

                {/* Photo 3: Factory & Industrial Production */}
                <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden group">
                  <Image
                    src="/images/factory-operations.jpg"
                    alt="NOVA Factory Operations"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/90 via-brand-deeper/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-gold text-brand-deeper text-[9px] font-bold uppercase tracking-wider mb-0.5">
                      {t.hero.photo3Tag}
                    </span>
                    <p className="text-white text-[11px] font-semibold leading-tight">{t.hero.photo3Title}</p>
                  </div>
                </div>

                {/* Photo 4: Construction & Renovation */}
                <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden group">
                  <Image
                    src="/images/construction-renovation.jpg"
                    alt="NOVA Construction & Renovation"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deeper/90 via-brand-deeper/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-gold text-brand-deeper text-[9px] font-bold uppercase tracking-wider mb-0.5">
                      {t.hero.photo4Tag}
                    </span>
                    <p className="text-white text-[11px] font-semibold leading-tight">{t.hero.photo4Title}</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-surface-warm to-transparent" />
    </section>
  );
}
