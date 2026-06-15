'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, Package } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import { stagger, fadeInUp } from '@/lib/animations';

const badges = [
  { icon: Users, target: 10000, suffix: '+', label: 'Happy Customers' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Package, target: 500, suffix: '+', label: 'Daily Meals' },
];

export default function CTASection() {
  return (
    <section className="section-padding bg-[#10b981] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-4">
            Ready to start?
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Are you ready to{' '}
            <span className="relative inline-block">
              EAT<span className="text-[#111827]">Fresh</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-white/40 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              />
            </span>?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-xl mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Customize your plan, or let us choose for you. Your first week delivered free.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#10b981] font-bold text-lg px-10 py-4 rounded-full hover:bg-[#f0fdf4] transition-colors shadow-xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#goals"
              className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white/25 transition-colors border border-white/30"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              See Our Plans
            </motion.a>
          </motion.div>

          {/* Social proof badges */}
          <motion.div
            variants={stagger}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {badges.map(({ icon: Icon, target, value, suffix, label }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-5 py-3"
              >
                <Icon className="w-5 h-5 text-white" />
                <div className="text-left">
                  <p className="text-white font-bold text-lg leading-none">
                    {target ? (
                      <CountUp target={target} suffix={suffix ?? ''} />
                    ) : (
                      value
                    )}
                  </p>
                  <p className="text-white/70 text-xs">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
