export type MealGoal = 'muscle' | 'maintain' | 'lose';

export interface Meal {
  id: string;
  name: string;
  description: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  imageUrl: string;
  goal: MealGoal;
  tags: string[];
  mealType: 'breakfast' | 'lunch' | 'dinner';
}

export interface GoalPlan {
  goal: MealGoal;
  label: string;
  tagline: string;
  currentKcal: number;
  idealKcal: number;
  color: string;
  meals: Meal[];
}

export const meals: Meal[] = [
  // Muscle gain
  {
    id: 'm1',
    name: 'Power Protein Bowl',
    description: 'Grilled chicken, brown rice, avocado & roasted vegetables',
    kcal: 720,
    protein: 52,
    carbs: 68,
    fat: 22,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    goal: 'muscle',
    tags: ['High Protein', 'Complex Carbs'],
    mealType: 'lunch',
  },
  {
    id: 'm2',
    name: 'Steak & Sweet Potato',
    description: 'Lean sirloin steak, mashed sweet potato, broccoli florets',
    kcal: 680,
    protein: 58,
    carbs: 45,
    fat: 18,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    goal: 'muscle',
    tags: ['Iron Rich', 'High Protein'],
    mealType: 'dinner',
  },
  {
    id: 'm3',
    name: 'Egg White Omelette',
    description: 'Six egg whites, spinach, mushrooms, low-fat cheese',
    kcal: 380,
    protein: 42,
    carbs: 12,
    fat: 10,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    goal: 'muscle',
    tags: ['Lean', 'High Protein'],
    mealType: 'breakfast',
  },
  // Maintain
  {
    id: 'mn1',
    name: 'Mediterranean Salad',
    description: 'Quinoa, cucumber, cherry tomatoes, feta & lemon dressing',
    kcal: 520,
    protein: 28,
    carbs: 52,
    fat: 20,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    goal: 'maintain',
    tags: ['Balanced', 'Fresh'],
    mealType: 'lunch',
  },
  {
    id: 'mn2',
    name: 'Salmon & Greens',
    description: 'Baked Atlantic salmon, asparagus, wild rice, lemon herb sauce',
    kcal: 560,
    protein: 38,
    carbs: 42,
    fat: 18,
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    goal: 'maintain',
    tags: ['Omega-3', 'Balanced'],
    mealType: 'dinner',
  },
  {
    id: 'mn3',
    name: 'Greek Yogurt Parfait',
    description: 'Greek yogurt, granola, mixed berries, honey drizzle',
    kcal: 340,
    protein: 22,
    carbs: 46,
    fat: 8,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    goal: 'maintain',
    tags: ['Probiotic', 'Natural'],
    mealType: 'breakfast',
  },
  // Lose weight
  {
    id: 'l1',
    name: 'Zucchini Noodle Bowl',
    description: 'Spiralized zucchini, grilled shrimp, pesto, cherry tomatoes',
    kcal: 320,
    protein: 32,
    carbs: 18,
    fat: 12,
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80',
    goal: 'lose',
    tags: ['Low Carb', 'Light'],
    mealType: 'dinner',
  },
  {
    id: 'l2',
    name: 'Detox Green Bowl',
    description: 'Kale, spinach, cucumber, edamame, ginger miso dressing',
    kcal: 280,
    protein: 18,
    carbs: 28,
    fat: 8,
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    goal: 'lose',
    tags: ['Detox', 'Low Cal'],
    mealType: 'lunch',
  },
];

export const goalPlans: GoalPlan[] = [
  {
    goal: 'muscle',
    label: 'Gain Muscle',
    tagline: 'Enhance Performance',
    currentKcal: 2200,
    idealKcal: 2800,
    color: '#f59e0b',
    meals: meals.filter(m => m.goal === 'muscle'),
  },
  {
    goal: 'maintain',
    label: 'Maintain',
    tagline: 'Healthy Habits',
    currentKcal: 2000,
    idealKcal: 2000,
    color: '#10b981',
    meals: meals.filter(m => m.goal === 'maintain'),
  },
  {
    goal: 'lose',
    label: 'Lose Weight',
    tagline: 'Clean Eating',
    currentKcal: 2200,
    idealKcal: 1600,
    color: '#6366f1',
    meals: meals.filter(m => m.goal === 'lose'),
  },
];
