'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sprout, Award, Heart, Shield, Zap } from 'lucide-react';
import { slideInLeft, slideInRight } from '@/lib/animations';

const promises = [
  {
    number: '01',
    icon: Sprout,
    title: 'Locally Sourced',
    description: 'Over 80% of our ingredients come from farms within 100 miles. We support local agriculture and reduce our environmental footprint.',
  },
  {
    number: '02',
    icon: Award,
    title: 'Organic When Possible',
    description: 'We prioritize certified organic produce and proteins. When organic isn\'t available, we verify all suppliers meet our strict standards.',
  },
  {
    number: '03',
    icon: Heart,
    title: 'No Preservatives',
    description: 'Our food is real food. No artificial preservatives, no added colors, no mystery additives. What you see on the label is what you eat.',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Chef Prepared',
    description: 'Every recipe is developed by our head nutritionist and executed by our professional kitchen team — not factory-produced.',
  },
  {
    number: '05',
    icon: Zap,
    title: 'Nutritionist Approved',
    description: 'Our in-house registered dietitian reviews every meal for optimal macro balance, micronutrient coverage, and caloric accuracy.',
  },
];

export default function QualitySection() {
  return (
    <section className="section-padding bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <p className="text-eyebrow text-[#10b981] mb-4">Our Promise</p>
            <h2 className="text-display-sm text-white mb-6">
              Fresh &{' '}
              <span className="text-[#10b981]">High Quality</span>{' '}
              Ingredients
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Quality isn&apos;t a checkbox — it&apos;s a philosophy. We make uncompromising commitments at every step of our supply chain so you can trust what&apos;s on your plate.
            </p>

            <div className="space-y-8">
              {promises.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.number}
                    className="flex items-start gap-5"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 flex items-center gap-3">
                      <span className="text-[#10b981] font-bold text-sm">{item.number}</span>
                      <div className="w-10 h-10 bg-[#10b981]/15 rounded-xl flex items-center justify-center border border-[#10b981]/30">
                        <Icon className="w-5 h-5 text-[#10b981]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Image with overlay cards */}
          <motion.div
            className="relative lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className="relative h-[550px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                alt="Fresh ingredients and meal prep"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-white font-bold text-2xl">99%</p>
              <p className="text-white/70 text-xs">Natural ingredients</p>
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <p className="text-white font-bold text-2xl">0</p>
              <p className="text-white/70 text-xs">Artificial additives</p>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#10b981] rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <p className="text-white font-bold text-2xl">A+</p>
              <p className="text-white/80 text-xs">Health rating</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
