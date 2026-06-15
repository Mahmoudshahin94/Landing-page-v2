export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: "I've lost 18 lbs in 3 months without feeling deprived once. The meals are genuinely delicious and I love knowing exactly what I'm eating.",
    author: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'TechCorp',
    avatarUrl: 'https://i.pravatar.cc/80?img=1',
    rating: 5,
  },
  {
    id: 't2',
    quote: "As a competitive athlete, nutrition is everything. EatFresh has transformed how I fuel my training — my performance metrics have never been better.",
    author: 'Marcus Johnson',
    role: 'Professional Triathlete',
    company: 'Team Elite',
    avatarUrl: 'https://i.pravatar.cc/80?img=3',
    rating: 5,
  },
  {
    id: 't3',
    quote: "With two kids and a demanding job, I had zero time to meal prep. Now I have healthy, home-cooked quality food every single day. Total game changer.",
    author: 'Emily Rodriguez',
    role: 'Pediatric Nurse',
    company: 'City Hospital',
    avatarUrl: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
  },
  {
    id: 't4',
    quote: "The variety is incredible. I've been a customer for 8 months and I'm still discovering new favorites. The ingredient quality is absolutely top-notch.",
    author: 'David Chen',
    role: 'Software Engineer',
    company: 'Startups Inc',
    avatarUrl: 'https://i.pravatar.cc/80?img=7',
    rating: 5,
  },
  {
    id: 't5',
    quote: "My doctor recommended cutting processed food. I switched to EatFresh and my cholesterol dropped 40 points in 6 weeks. My family is obsessed too.",
    author: 'Patricia Williams',
    role: 'High School Teacher',
    company: 'Lincoln Academy',
    avatarUrl: 'https://i.pravatar.cc/80?img=9',
    rating: 5,
  },
  {
    id: 't6',
    quote: "The muscle-gain plan is exactly what I needed. High protein, perfectly portioned, and actually tastes amazing. I recommend it to everyone at the gym.",
    author: 'Jason Park',
    role: 'Personal Trainer',
    company: 'FitLife Studio',
    avatarUrl: 'https://i.pravatar.cc/80?img=12',
    rating: 5,
  },
  {
    id: 't7',
    quote: "Delivery is always on time, packaging is eco-friendly, and the food stays fresh. You can taste the difference between this and regular delivery services.",
    author: 'Olivia Thompson',
    role: 'Yoga Instructor',
    company: 'Zen Wellness',
    avatarUrl: 'https://i.pravatar.cc/80?img=16',
    rating: 5,
  },
  {
    id: 't8',
    quote: "I was skeptical at first but after the first week I was completely converted. Real ingredients, real flavors — this is what healthy eating should taste like.",
    author: 'Michael Torres',
    role: 'Executive Chef',
    company: 'Le Maison',
    avatarUrl: 'https://i.pravatar.cc/80?img=20',
    rating: 5,
  },
];
