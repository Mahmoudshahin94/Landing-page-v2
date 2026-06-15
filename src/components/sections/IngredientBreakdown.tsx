'use client';

import { motion } from 'framer-motion';
import { Leaf, Fish, Egg, Wheat, Droplets, Apple, Flame, Salad } from 'lucide-react';
import { stagger, fadeInUp } from '@/lib/animations';

const ingredients = [
  { icon: Salad, name: 'Organic Greens', note: 'Kale, spinach, arugula', color: 'bg-green-50 text-green-600' },
  { icon: Fish, name: 'Wild-Caught Fish', note: 'Salmon, cod, tuna', color: 'bg-blue-50 text-blue-600' },
  { icon: Egg, name: 'Free-Range Eggs', note: 'Pasture-raised, hormone-free', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Wheat, name: 'Ancient Grains', note: 'Quinoa, farro, barley', color: 'bg-amber-50 text-amber-600' },
  { icon: Droplets, name: 'Cold-Pressed Oils', note: 'Olive, avocado, coconut', color: 'bg-orange-50 text-orange-600' },
  { icon: Apple, name: 'Seasonal Fruits', note: 'Locally sourced, never frozen', color: 'bg-red-50 text-red-500' },
  { icon: Flame, name: 'Artisan Spices', note: 'Herbs, blends, ferments', color: 'bg-purple-50 text-purple-600' },
  { icon: Leaf, name: 'Organic Proteins', note: 'Chicken, beef, legumes', color: 'bg-emerald-50 text-emerald-600' },
];

export default function IngredientBreakdown() {
  return (
    <section className="section-padding bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">What We Use</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Ingredients That{' '}
            <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            Every component of every meal is selected with intention — no fillers, no shortcuts, no compromise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {ingredients.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                variants={fadeInUp}
                className="card-food p-6 text-center group"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-semibold text-[#111827] text-sm mb-1">{item.name}</h4>
                <p className="text-xs text-[#6b7280]">{item.note}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-[#10b981]/10 to-[#059669]/10 rounded-3xl text-center border border-[#10b981]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg font-bold text-[#111827] mb-2">
            🌿 100% Natural. Zero Compromise.
          </p>
          <p className="text-[#6b7280]">
            No artificial preservatives, no hidden additives, no processed ingredients. Just real food the way nature intended.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
