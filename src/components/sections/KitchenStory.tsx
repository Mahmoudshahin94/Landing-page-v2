'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { slideInLeft, slideInRight, stagger, fadeInUp } from '@/lib/animations';

const highlights = [
  'Prepared fresh every morning starting at 4 AM',
  '50+ professional chefs with culinary training',
  'Temperature-controlled kitchen certified by the FDA',
  'Zero cross-contamination protocols',
  'All meals packaged within 2 hours of cooking',
];

export default function KitchenStory() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">Behind the Scenes</p>
          <h2 className="text-display-sm text-[#111827]">
            Where The{' '}
            <span className="gradient-text">Magic Begins</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — Video/Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
                alt="Our kitchen in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/60 text-sm">Our Kitchen</p>
                <p className="text-white font-bold text-lg">Our Kitchen in Action</p>
              </div>
            </div>

            {/* Stats card */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10b981]">15+</p>
                <p className="text-xs text-[#6b7280]">Years of culinary</p>
                <p className="text-xs text-[#6b7280]">excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Kitchen in Action</h3>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              Our state-of-the-art facility is where passion meets precision. Every morning before dawn, our culinary team begins the work of preparing hundreds of fresh meals — each one made by hand with locally sourced ingredients.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              We believe that the difference between good and exceptional lies in the details. That&apos;s why our kitchens operate under strict quality protocols while maintaining the warmth and care of a home kitchen.
            </p>

            <motion.ul
              className="space-y-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#374151] text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
