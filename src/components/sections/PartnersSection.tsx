'use client';

import { motion } from 'framer-motion';
import { partners } from '@/data/partners';
import { fadeInUp } from '@/lib/animations';

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="group relative flex-shrink-0 mx-4">
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#10b981]/30 transition-all duration-300 cursor-default">
        <div className="w-10 h-10 bg-[#10b981] rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {partner.initial}
        </div>
        <div>
          <p className="font-semibold text-[#111827] text-sm whitespace-nowrap">{partner.name}</p>
          <p className="text-xs text-[#6b7280]">{partner.category}</p>
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#111827] text-white text-xs rounded-xl px-3 py-2 w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 shadow-lg">
        {partner.description}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111827]" />
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const doubledPartners = [...partners, ...partners];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">Our Network</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Reputable Partners That{' '}
            <span className="gradient-text">We Trust</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            We work exclusively with certified, vetted partners who share our commitment to quality and sustainability.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — left to right */}
      <div className="overflow-hidden mb-5 marquee-wrapper">
        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {doubledPartners.map((partner, i) => (
            <PartnerCard key={`r1-${partner.id}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="overflow-hidden marquee-wrapper">
        <div className="flex marquee-track-reverse" style={{ width: 'max-content' }}>
          {[...doubledPartners].reverse().map((partner, i) => (
            <PartnerCard key={`r2-${partner.id}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
