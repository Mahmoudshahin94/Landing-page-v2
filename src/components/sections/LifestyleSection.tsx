'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { stagger, fadeInUp } from '@/lib/animations';

const lifestyles = [
  {
    id: 'professional',
    title: 'Professional',
    tagline: 'Fuel Your Hustle',
    description: 'Power through your busiest days with brain-boosting meals designed for peak cognitive performance.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    alt: 'Professional eating healthy meal',
    accent: '#10b981',
    badge: '⚡ High Energy',
  },
  {
    id: 'athlete',
    title: 'Athlete',
    tagline: 'Enhance Your Performance',
    description: 'Optimized macros for training, recovery, and competition. Built by nutritionists who understand sport.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    alt: 'Athlete training performance',
    accent: '#f59e0b',
    badge: '🏆 Performance',
  },
  {
    id: 'family',
    title: 'Family',
    tagline: 'Nourish Who Matters Most',
    description: 'Balanced, kid-friendly meals the whole family will love. No more cooking two separate dinners.',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80',
    alt: 'Family healthy meal together',
    accent: '#6366f1',
    badge: '👨‍👩‍👧 Family',
  },
];

export default function LifestyleSection() {
  return (
    <section className="section-padding bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">For Every Lifestyle</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Meals Built Around{' '}
            <span className="gradient-text">Your Life</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            Whether you&apos;re a busy professional, a dedicated athlete, or a parent — we have a plan that fits.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {lifestyles.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              whileHover="hover"
            >
              {/* Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  variants={{ hover: { scale: 1.07 } }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#111827] px-3 py-1.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-semibold mb-1" style={{ color: item.accent }}>
                    {item.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <motion.p
                    className="text-white/75 text-sm leading-relaxed overflow-hidden"
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0, height: 0 }}
                    style={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-2 mt-3 text-white font-semibold text-sm"
                    variants={{ hover: { x: 0, opacity: 1 } }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    View Meals <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
