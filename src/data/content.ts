import type { Boutique, FAQItem } from '../types';

export const BOUTIQUES: Boutique[] = [
  {
    city: 'Zurich',
    district: 'Lindenhof Quarter',
    address: 'Storchengasse 14, 8001 Zürich, Switzerland',
    hours: 'Mon – Sat: 10:00 – 18:30 · Sun: By Private Appointment',
    phone: '+41 44 211 48 90',
    email: 'zurich@ateliervahl.com',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    city: 'Tokyo',
    district: 'Ginza Six Annex',
    address: '6-10-1 Ginza, Chuo City, Tokyo 104-0061, Japan',
    hours: 'Tue – Sun: 11:00 – 19:30 · Mon: Closed',
    phone: '+81 3 5537 9820',
    email: 'tokyo@ateliervahl.com',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80'
  },
  {
    city: 'Copenhagen',
    district: 'Indre By',
    address: 'Kronprinsensgade 8, 1114 København, Denmark',
    hours: 'Mon – Fri: 10:00 – 18:00 · Sat: 11:00 – 16:00',
    phone: '+45 33 12 70 45',
    email: 'cph@ateliervahl.com',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1000&q=80'
  },
  {
    city: 'New York',
    district: 'SoHo Historic District',
    address: '94 Mercer Street, New York, NY 10012, USA',
    hours: 'Mon – Sat: 11:00 – 19:00 · Sun: 12:00 – 18:00',
    phone: '+1 212 941 7720',
    email: 'soho@ateliervahl.com',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1000&q=80'
  }
];

export const PRESS_ACCOLADES = [
  {
    quote: 'Atelier Vahl demonstrates that true luxury requires neither overt branding nor decoration—only absolute integrity of raw matter and purpose.',
    publication: 'Architectural Digest International',
    issue: 'The Design Biennial'
  },
  {
    quote: 'A masterclass in quiet discipline. Every object feels weightily permanent, like an archaeological relic created for tomorrow.',
    publication: 'Monocle Magazine',
    issue: 'Design & Craft Index'
  },
  {
    quote: 'In a world drunk on disposability, Vahl crafts daily ritual objects that age with sublime grace.',
    publication: 'Wallpaper* Editorial',
    issue: 'Annual Material Awards'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Ordering & Delivery',
    question: 'How are objects packed and dispatched worldwide?',
    answer: 'Every edition is wrapped in unbleached custom Belgian linen dust envelopes, accompanied by an embossed numbered certificate of provenance, and encased in recycled Scandinavian kraft outer cartons. We offer carbon-neutral express international courier transit.'
  },
  {
    category: 'Materials & Patina',
    question: 'Will the natural brass and vegetable leather alter over time?',
    answer: 'Yes, intentionally so. Our vegetable-tanned Tuscan leathers and lead-free milled brass are free from synthetic sealing lacquers. They actively record your daily touch, sunlight, and moisture, deepening into a rich, irreplaceable patina unique to your life.'
  },
  {
    category: 'Atelier Warranty',
    question: 'What is the Atelier Vahl Lifetime Craftsmanship Promise?',
    answer: 'We provide an unconditional lifetime repair guarantee against structural stitching, machining, and material defects. Should an object require care or refurbishment after years of rigorous use, our artisans in Zurich or Florence will service it at cost.'
  },
  {
    category: 'Private Appointments',
    question: 'Can I inspect objects in person prior to acquiring?',
    answer: 'Yes. Our boutiques in Zurich, Tokyo, Copenhagen, and New York host private 45-minute appointments with a dedicated atelier curator. Guests may inspect unreleased prototypes, select specific hide grains, and request bespoke monogramming.'
  }
];

export const STORY_TENETS = [
  {
    num: '01',
    title: 'Monolithic Restraint',
    description: 'We subtract until nothing remains that can be removed without compromising structural function. Form follows ritual, stripped of superficial decoration.'
  },
  {
    num: '02',
    title: 'Honest Materiality',
    description: 'Grade 5 titanium, Tuscan vachetta, Shigaraki clay, and optical crystal. Materials are left in their natural state to evolve alongside their custodian.'
  },
  {
    num: '03',
    title: 'Heirloom Longevity',
    description: 'We do not design for seasons or transient trends. Every object is engineered with serviceable mechanical fastenings, repairable by hand decades from now.'
  },
  {
    num: '04',
    title: 'Artisan Provenance',
    description: 'Each piece is traced to a single heritage workshop and craftsman. We celebrate the master makers of Switzerland, Germany, Japan, and Italy.'
  }
];

export const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'JPY', symbol: '¥', rate: 155 },
  { code: 'INR', symbol: '₹', rate: 84.5 }
];
