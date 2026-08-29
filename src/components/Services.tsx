"use client";

import { motion } from "framer-motion";
import { BedDouble, UtensilsCrossed, Sparkles, Hotel, Wrench, Factory, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const departmentImages = [
  "/images/hotel-housekeeping.png",
  "/images/hotel-waiter.png",
  "/images/hotel-steward.jpg",
  "/images/hotel-event.png",
  "/images/construction-renovation.jpg",
  "/images/factory-operations.jpg",
];

const departmentIcons = [BedDouble, UtensilsCrossed, Sparkles, Hotel, Wrench, Factory];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="hizmetler" className="py-14 sm:py-16 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-base/10 text-brand-base text-xs font-bold tracking-[0.16em] uppercase mb-2.5">
            {t.services.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-deeper tracking-tight">
            {t.services.titlePart1}
            <span className="text-gradient-burgundy">{t.services.titlePart2}</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-black/60 font-normal leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.departments.map((dept, index) => {
            const Icon = departmentIcons[index] || Hotel;
            const imageSrc = departmentImages[index] || "/images/hotel-housekeeping.png";

            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-gold/40 shadow-md hover:shadow-xl hover:shadow-brand-base/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={dept.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Tag & Icon */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-base/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-gold/30">
                        {dept.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gold text-brand-deeper flex items-center justify-center font-bold">
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-semibold tracking-wide text-white/90">
                          {t.services.cardBadge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-brand-deeper mb-2 group-hover:text-brand-base transition-colors leading-snug">
                      {dept.title}
                    </h3>
                    
                    <p className="text-black/65 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                      {dept.description}
                    </p>

                    {/* Bullet features */}
                    <div className="space-y-1.5 pt-2 border-t border-black/5">
                      {dept.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-black/75 font-medium">
                          <div className="w-4 h-4 rounded-full bg-brand-base/10 flex items-center justify-center flex-shrink-0 text-brand-base">
                            <Check size={11} className="stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-5 sm:px-6 pb-5 pt-1">
                  <Link
                    href="#iletisim"
                    aria-label={`${dept.title} - ${t.services.ctaCard}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-warm group-hover:bg-brand-base text-brand-deeper group-hover:text-white font-bold text-xs tracking-wide transition-all duration-300 border border-black/5 group-hover:border-transparent"
                  >
                    {t.services.ctaCard}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
