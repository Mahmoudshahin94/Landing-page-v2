'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Truck, ChefHat, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { slideInLeft, slideInRight, stagger, fadeInUp } from '@/lib/animations';

const stats = [
  { icon: ChefHat, value: '50+', label: 'In-house chefs' },
  { icon: Truck, value: '24h', label: 'From kitchen to door' },
  { icon: ShieldCheck, value: '100%', label: 'Fresh guarantee' },
];

export default function ValueProposition() {
  return (
    <section id="how-it-works" className="section-padding bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Video/image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative h-[400px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80"
                alt="Our kitchen in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-18 h-18 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#10b981] ml-1" />
                </motion.div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Our Kitchen in Action</p>
                <p className="text-white/70 text-sm">See how we prepare your meals fresh daily</p>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-[#10b981]">LIVE PREP</span>
              </div>
              <p className="text-2xl font-bold text-[#111827]">3,240</p>
              <p className="text-xs text-[#6b7280]">meals prepped today</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <p className="text-eyebrow mb-4">From Our Kitchen</p>
            <h2 className="text-display-sm text-[#111827] mb-6">
              From Our Kitchen{' '}
              <span className="gradient-text">to Your Door</span>
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
              Healthy eating made effortless. Our team of professional chefs prepare every meal fresh each morning using locally sourced, seasonal ingredients — then deliver it straight to your door.
            </p>

            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div key={label} variants={fadeInUp} className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#d1fae5] rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <p className="text-xl font-bold text-[#111827]">{value}</p>
                  <p className="text-xs text-[#6b7280]">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <Button variant="primary" size="lg" href="#meals">
              Explore Our Menu
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
