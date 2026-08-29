"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  const encodedText = encodeURIComponent(t.whatsapp.prefilledText);

  return (
    <a
      href={`${siteConfig.social.whatsappUrl}?text=${encodedText}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Animated pulse halo */}
        <div className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        {/* Main WhatsApp Action Button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 transition-all duration-300 animate-float border-2 border-white/20">
          <MessageCircle size={28} className="text-white" fill="white" />
        </div>

        {/* Hover Tooltip */}
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-brand-deeper border border-gold/30 rounded-xl text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
          {t.whatsapp.tooltip}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-brand-deeper rotate-45 border-r border-t border-gold/30" />
        </div>
      </div>
    </a>
  );
}
