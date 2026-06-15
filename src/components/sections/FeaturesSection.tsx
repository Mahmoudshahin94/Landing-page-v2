'use client';

import { motion } from 'framer-motion';
import { Snowflake, ChefHat, Scale, Truck, Leaf, Clock } from 'lucide-react';
import { stagger, fadeInUp } from '@/lib/animations';

const features = [
  {
    icon: Snowflake,
    title: 'Fresh, Never Frozen',
    description: 'Every meal is prepared the same morning it\'s delivered. We never freeze our food — because taste and nutrition matter.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
  },
  {
    icon: ChefHat,
    title: 'Chef-Crafted Recipes',
    description: 'Our team of professional chefs designs every recipe to be as delicious as it is nutritious. Real flavors, real ingredients.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Scale,
    title: 'Macro Balanced',
    description: 'Every meal is nutritionist-approved with perfectly balanced macros to match your health goals — whether you\'re gaining, maintaining, or losing.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Truck,
    title: 'Delivered in 24h',
    description: 'Streamlined deliveries that fit your schedule. Order today, receive tomorrow — always fresh, always on time.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
  },
  {
    icon: Leaf,
    title: 'Locally Sourced',
    description: 'We partner with local farms and suppliers to bring you the freshest seasonal produce while supporting our community.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    icon: Clock,
    title: 'Save 10+ Hours Weekly',
    description: 'No grocery shopping, no meal planning, no cooking, no cleaning. Reclaim your time and let us handle the kitchen work.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-100',
  },
];

export default function FeaturesSection() {
  return (
    <section id="meals" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">Why Choose Us</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Homemade Meals,{' '}
            <span className="gradient-text">Delivered Daily</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            We&apos;ve reimagined what healthy eating looks like for real people with real lives.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className={`card-food p-7 group`}
              >
                <div className={`w-12 h-12 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3">{feature.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
