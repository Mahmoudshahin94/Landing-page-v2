'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { goalPlans, GoalPlan } from '@/data/meals';
import CountUp from '@/components/ui/CountUp';
import { tabContent, stagger, fadeInUp } from '@/lib/animations';

function MacroBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#6b7280] w-14 shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      <span className="text-xs font-semibold text-[#111827] w-8">{value}%</span>
    </div>
  );
}

function MealCard({ meal, index }: { meal: GoalPlan['meals'][0]; index: number }) {
  const proteinPct = Math.round((meal.protein * 4 / meal.kcal) * 100);
  const carbsPct = Math.round((meal.carbs * 4 / meal.kcal) * 100);
  const fatPct = Math.round((meal.fat * 9 / meal.kcal) * 100);

  return (
    <motion.div
      className="card-food overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="relative h-40 shrink-0">
        <Image src={meal.imageUrl} alt={meal.name} fill className="object-cover" />
        <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
          {meal.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-white/90 backdrop-blur-sm text-[#059669] px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full capitalize">
          {meal.mealType}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h4 className="font-bold text-[#111827] text-sm">{meal.name}</h4>
          <p className="text-xs text-[#6b7280] mt-0.5">{meal.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#111827]">{meal.kcal} <span className="text-sm font-normal text-[#6b7280]">kcal</span></span>
          <span className="text-xs text-[#6b7280]">{meal.protein}g protein</span>
        </div>
        <div className="space-y-1.5">
          <MacroBar label="Protein" value={proteinPct} color="#10b981" />
          <MacroBar label="Carbs" value={carbsPct} color="#f59e0b" />
          <MacroBar label="Fat" value={fatPct} color="#6366f1" />
        </div>
      </div>
    </motion.div>
  );
}

function GoalContent({ plan }: { plan: GoalPlan }) {
  return (
    <div>
      {/* Kcal display */}
      <div className="flex items-center gap-8 mb-8 p-6 bg-[#f9fafb] rounded-2xl">
        <div className="text-center">
          <p className="text-xs text-[#6b7280] mb-1 uppercase tracking-wide">Current</p>
          <p className="text-3xl font-bold text-[#6b7280]">
            <CountUp key={`current-${plan.goal}`} target={plan.currentKcal} suffix=" kcal" />
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-2 rounded-full"
              style={{ backgroundColor: plan.color }}
              initial={{ width: '50%' }}
              animate={{
                width: `${(plan.idealKcal / 3500) * 100}%`,
              }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#6b7280] mb-1 uppercase tracking-wide">Ideal</p>
          <p className="text-3xl font-bold" style={{ color: plan.color }}>
            <CountUp key={`ideal-${plan.goal}`} target={plan.idealKcal} suffix=" kcal" />
          </p>
        </div>
      </div>

      {/* Meals grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {plan.meals.map((meal, i) => (
          <MealCard key={meal.id} meal={meal} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function GoalsSection() {
  const [activeGoal, setActiveGoal] = useState<GoalPlan['goal']>('maintain');
  const activePlan = goalPlans.find(p => p.goal === activeGoal)!;

  return (
    <section id="goals" className="section-padding bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-eyebrow mb-4">Personalized Plans</p>
          <h2 className="text-display-sm text-[#111827] mb-4">
            Whatever Your{' '}
            <span className="gradient-text">Goal</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            Tell us what you&apos;re working toward. We&apos;ll build a meal plan around your body, goals, and lifestyle.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative flex gap-1 bg-white border border-gray-200 rounded-full p-1.5 shadow-md">
            {goalPlans.map((plan) => (
              <button
                key={plan.goal}
                onClick={() => setActiveGoal(plan.goal)}
                className="relative px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-200 z-10 cursor-pointer"
                style={{
                  color: activeGoal === plan.goal ? '#ffffff' : '#6b7280',
                }}
              >
                {activeGoal === plan.goal && (
                  <motion.div
                    layoutId="goal-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: plan.color }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{plan.label}</span>
                <span className="relative z-10 block text-xs font-normal opacity-80">{plan.tagline}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal}
            variants={tabContent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <GoalContent plan={activePlan} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
