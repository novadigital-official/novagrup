"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Faq() {
  const { t, language } = useLanguage();

  // Structured data is generated from the same items that are rendered below,
  // so the markup always matches the visible text.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: language === "tr" ? "tr-TR" : "en",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="sss" className="py-8 sm:py-10 bg-surface-warm/50 border-b border-black/[0.05]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6">
          <span className="inline-block px-3 py-0.5 rounded-full bg-brand-base/10 text-brand-base text-[11px] font-bold tracking-[0.16em] uppercase mb-2">
            {t.faq.badge}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-brand-deeper tracking-tight leading-snug">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-2">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-xl border border-black/[0.06] open:border-gold/50 px-4 py-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13px] sm:text-sm font-bold text-brand-deeper [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  size={16}
                  className="shrink-0 text-brand-base transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-black/65">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
