'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { meals } from '@/data/meals';
import { fadeInUp } from '@/lib/animations';

const featured = meals.slice(0, 5);

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(0);

  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length);
  const next = () => setCurrent((c) => (c + 1) % featured.length);

  const meal = featured[current];

  return (
    <section id="showcase" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">Our Menu</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Designed for Your Taste,{' '}
            <span className="gradient-text">Built for Your Day</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            Swipe through our most popular meals — each crafted with purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative">
            <motion.div
              key={current}
              className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={(_, info) => { dragStartX.current = info.point.x; }}
              onDragEnd={(_, info) => {
                const diff = info.point.x - dragStartX.current;
                if (diff < -50) next();
                if (diff > 50) prev();
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={meal.imageUrl}
                alt={meal.name}
                fill
                className="object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Tags */}
              <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
                {meal.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-[#10b981] text-white px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                  <span className="text-white/70 text-xs ml-1">4.9</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{meal.name}</h3>
                <p className="text-white/70 text-sm">{meal.description}</p>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous meal"
            >
              <ChevronLeft className="w-5 h-5 text-[#111827]" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Next meal"
            >
              <ChevronRight className="w-5 h-5 text-[#111827]" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[#10b981]' : 'w-2 bg-gray-300'}`}
                  aria-label={`Go to meal ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Details panel */}
          <motion.div
            key={`detail-${current}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-2">{meal.name}</h3>
            <p className="text-[#6b7280] mb-6">{meal.description}</p>

            {/* Macros */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Calories', value: `${meal.kcal}`, unit: 'kcal', color: 'bg-amber-50 text-amber-600' },
                { label: 'Protein', value: `${meal.protein}g`, unit: '', color: 'bg-emerald-50 text-emerald-600' },
                { label: 'Carbs', value: `${meal.carbs}g`, unit: '', color: 'bg-blue-50 text-blue-600' },
              ].map(({ label, value, color }) => (
                <div key={label} className={`${color} rounded-2xl p-4 text-center`}>
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs font-medium mt-1 opacity-80">{label}</p>
                </div>
              ))}
            </div>

            {/* Ingredients preview */}
            <div>
              <p className="text-sm font-semibold text-[#111827] mb-3">Key Highlights</p>
              <div className="flex flex-wrap gap-2">
                {['Locally sourced', 'Fresh daily', 'No preservatives', 'Chef-crafted'].map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-[#6b7280] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-2xl font-bold text-[#111827]">From $12.99</span>
              <button className="flex-1 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-full transition-colors">
                Add to Plan
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
