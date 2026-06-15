export interface Partner {
  id: string;
  name: string;
  description: string;
  category: string;
  initial: string;
}

export const partners: Partner[] = [
  {
    id: 'p1',
    name: 'GreenFarm Co',
    description: 'Certified organic produce sourced daily from local farms',
    category: 'Agriculture',
    initial: 'GF',
  },
  {
    id: 'p2',
    name: 'OceanChoice',
    description: 'Sustainably caught seafood, delivered fresh every morning',
    category: 'Seafood',
    initial: 'OC',
  },
  {
    id: 'p3',
    name: 'PureGrain Mills',
    description: 'Stone-ground whole grains and ancient grain varieties',
    category: 'Grains',
    initial: 'PG',
  },
  {
    id: 'p4',
    name: 'Happy Pastures',
    description: 'Free-range, antibiotic-free poultry and meats',
    category: 'Protein',
    initial: 'HP',
  },
  {
    id: 'p5',
    name: 'NutriLab',
    description: 'Nutritional analysis and meal optimization technology',
    category: 'Technology',
    initial: 'NL',
  },
  {
    id: 'p6',
    name: 'SpiceRoute',
    description: 'Premium spices, herbs and seasonings from global sources',
    category: 'Seasonings',
    initial: 'SR',
  },
  {
    id: 'p7',
    name: 'ColdChain Pro',
    description: 'Temperature-controlled logistics ensuring peak freshness',
    category: 'Logistics',
    initial: 'CP',
  },
  {
    id: 'p8',
    name: 'EcoPackage',
    description: '100% biodegradable and recyclable packaging solutions',
    category: 'Packaging',
    initial: 'EP',
  },
];
