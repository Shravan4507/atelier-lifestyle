export type PageId = 'home' | 'collection' | 'story' | 'concierge';

export type ProductCategory = 'all' | 'timepieces' | 'leather' | 'ceramics' | 'sensory' | 'desk';

export interface Product {
  id: string;
  name: string;
  category: 'timepieces' | 'leather' | 'ceramics' | 'sensory' | 'desk';
  categoryLabel: string;
  subtitle: string;
  price: number; // in USD base
  description: string;
  materials: string[];
  dimensions: string;
  origin: string;
  artisan: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
  tag?: string;
  specs: { [key: string]: string };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Boutique {
  city: string;
  district: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
