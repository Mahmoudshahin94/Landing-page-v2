'use client';

import { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { fadeInUp } from '@/lib/animations';

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 mx-4 card-food p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>

      {/* Quote icon */}
      <Quote className="w-6 h-6 text-[#10b981] opacity-40" />

      {/* Text */}
      <p className="text-[#374151] text-sm leading-relaxed flex-1">&ldquo;{testimonial.quote}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-[#111827] text-sm">{testimonial.author}</p>
          <p className="text-xs text-[#6b7280]">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const controls = useAnimationControls();
  const tripled = [...testimonials, ...testimonials, ...testimonials];

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () => {
    controls.start({
      x: ['0%', '-33.33%'],
      transition: { duration: 35, ease: 'linear', repeat: Infinity },
    });
  };

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
          <p className="text-eyebrow mb-4">What They Say</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Real People,{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            Thousands of customers have transformed their relationship with food. Here&apos;s what they have to say.
          </p>
        </motion.div>
      </div>

      {/* Carousel — full bleed */}
      <div
        className="overflow-hidden"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="flex py-4"
          animate={{
            x: ['0%', '-33.33%'],
          }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
          onAnimationComplete={() => {}}
        >
          {tripled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '500+', label: 'Daily Meals Delivered' },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-3xl font-bold text-[#10b981] mb-1">{value}</p>
              <p className="text-sm text-[#6b7280]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
