"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  UtensilsCrossed,
  Sparkles,
  Award,
  Wrench,
  Factory,
  Headphones,
  Users,
  Landmark,
  Hotel,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollToSection } from "@/lib/scroll";

const departmentImages = [
  "/images/hotel-housekeeping.png",
  "/images/hotel-waiter.png",
  "/images/hotel-steward.jpg",
  "/images/hotel-animation-show.jpg",
  "/images/construction-renovation.jpg",
  "/images/factory-operations.jpg",
  "/images/call-center-lead.jpg",
  "/images/hotel-event.png",
  "/images/grant-incentive-consulting.jpg",
];

const departmentIcons = [
  BedDouble,
  UtensilsCrossed,
  Sparkles,
  Award,
  Wrench,
  Factory,
  Headphones,
  Users,
  Landmark,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="hizmetler" className="py-8 sm:py-10 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <span className="inline-block px-3 py-0.5 rounded-full bg-brand-base/10 text-brand-base text-[11px] font-bold tracking-[0.16em] uppercase mb-2">
            {t.services.badge}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-deeper tracking-tight leading-snug">
            {t.services.titlePart1}
            <span className="text-gradient-burgundy">{t.services.titlePart2}</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-black/60 font-normal leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.services.departments.map((dept, index) => {
            const Icon = departmentIcons[index] || Hotel;
            const imageSrc = departmentImages[index] || "/images/hotel-housekeeping.png";

            return (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group bg-white rounded-2xl p-3 border border-black/[0.06] hover:border-gold/40 shadow-[0_3px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative h-32 sm:h-36 w-full rounded-xl overflow-hidden mb-2.5 bg-black/5">
                    <Image
                      src={imageSrc}
                      alt={dept.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    
                    {/* Top Tag & Floating Icon */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[9px] font-bold tracking-wider uppercase border border-white/15 shadow-sm">
                        {dept.tag}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/95 backdrop-blur-md text-brand-deeper flex items-center justify-center shadow-md">
                        <Icon size={13} className="text-brand-base" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="px-1.5 pb-1">
                    <h3 className="text-sm sm:text-[15px] font-bold text-brand-deeper group-hover:text-brand-base transition-colors leading-snug tracking-tight">
                      {dept.title}
                    </h3>
                    
                    <p className="text-black/60 text-xs leading-relaxed mt-1 font-normal line-clamp-2">
                      {dept.description}
                    </p>
                  </div>
                </div>

                {/* Compact Footer Button */}
                <div className="px-1.5 pt-2">
                  <a
                    href="#iletisim"
                    onClick={(e) => scrollToSection(e, "iletisim")}
                    aria-label={`${dept.title} - ${t.services.ctaCard}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 bg-surface-warm hover:bg-brand-base text-brand-deeper hover:text-white border border-black/5 hover:border-transparent cursor-pointer"
                  >
                    <span>{t.services.ctaCard}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
