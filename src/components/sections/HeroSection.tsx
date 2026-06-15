'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Star, Users, Package } from 'lucide-react';
import Button from '@/components/ui/Button';
import { stagger, heroText } from '@/lib/animations';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    alt: 'Fresh healthy salad bowl',
    className: 'absolute top-0 right-4 w-52 h-64 md:w-60 md:h-72',
    delay: 0.2,
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    alt: 'Meal prep containers',
    className: 'absolute top-32 left-0 w-44 h-56 md:w-52 md:h-64',
    delay: 0.35,
    float: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    alt: 'Grilled protein meal',
    className: 'absolute bottom-0 right-10 w-48 h-52 md:w-56 md:h-60',
    delay: 0.5,
  },
];

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy customers' },
  { icon: Star, value: '4.9/5', label: 'Average rating' },
  { icon: Package, value: '500+', label: 'Meals delivered daily' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f0fdf4] to-white pt-[72px]">
      {/* Background blob */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#10b981]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <motion.div variants={heroText} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[#d1fae5] text-[#059669] text-sm font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Fresh meals, delivered daily
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={heroText} custom={1} className="mb-3">
              <p className="text-eyebrow mb-2">It&apos;s a Lifestyle</p>
              <h1 className="text-display text-[#111827]">
                EAT local,{' '}
                <span className="block">EAT healthy,</span>
                <span className="block gradient-text">EAT Fresh.</span>
              </h1>
            </motion.div>

            {/* Body */}
            <motion.p
              variants={heroText}
              custom={2}
              className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-xl"
            >
              Meal prepping has become popular with health enthusiasts and busy professionals alike. Let us do the work — you just eat.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroText} custom={3} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="#meals">
                Order Now <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
              <Button variant="outline" size="lg" href="#goals">
                See Our Plans
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={heroText}
              custom={4}
              className="flex flex-wrap gap-6"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#10b981]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#111827] leading-none">{value}</p>
                    <p className="text-xs text-[#6b7280]">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image collage */}
          <div className="relative h-[420px] md:h-[520px] lg:h-[580px] hidden sm:block">
            {/* Decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-dashed border-[#10b981]/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#10b981]/8 rounded-full" />

            {heroImages.map((img) => (
              <motion.div
                key={img.src}
                className={`${img.className} rounded-3xl overflow-hidden shadow-2xl`}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: img.float ? [0, -12, 0] : 0,
                }}
                transition={
                  img.float
                    ? {
                        opacity: { delay: img.delay, duration: 0.6 },
                        scale: { delay: img.delay, duration: 0.6 },
                        y: { delay: img.delay + 0.6, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                      }
                    : { delay: img.delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                }
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={img.delay < 0.3}
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            ))}

            {/* Floating badge */}
            <motion.div
              className="absolute bottom-20 left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-[#d1fae5] rounded-xl flex items-center justify-center">
                <span className="text-xl">🥗</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#111827]">Chef-crafted</p>
                <p className="text-xs text-[#6b7280]">500+ recipes</p>
              </div>
            </motion.div>

            {/* Rating badge */}
            <motion.div
              className="absolute top-12 left-8 bg-white rounded-2xl shadow-xl px-4 py-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#111827]">4.9 / 5 stars</p>
              <p className="text-xs text-[#6b7280]">2,400+ reviews</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-[#6b7280] uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-[#10b981] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
