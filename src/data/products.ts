import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'obj-01',
    name: 'Atelier Chrono 38',
    category: 'timepieces',
    categoryLabel: 'Horology',
    subtitle: 'Sandblasted Grade 5 Titanium & Horween Cordovan',
    price: 680,
    description: 'An architectural dual-register timepiece designed in Zurich and hand-assembled in Biel. Features a monolithic brushed titanium chassis, double-domed anti-reflective sapphire crystal, and an unadorned matte slate dial with hand-polished baton hands.',
    materials: ['Grade 5 Titanium', 'Horween Shell Cordovan', 'Sapphire Crystal (Anti-Reflective)'],
    dimensions: '38mm diameter · 8.4mm thickness · 20mm lug width',
    origin: 'Biel, Switzerland',
    artisan: 'Studio Vahl Horology Lab',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: true,
    tag: 'Flagship Edition',
    specs: {
      'Movement': 'Swiss Calibre Sellita SW210-1 (Manual Wind)',
      'Power Reserve': '42 Hours',
      'Water Resistance': '5 ATM / 50 Metres',
      'Strap': 'Hand-stitched Italian Shell Cordovan'
    }
  },
  {
    id: 'obj-02',
    name: 'Monolith Tote 01',
    category: 'leather',
    categoryLabel: 'Leather Goods',
    subtitle: 'Full-Grain Tuscan Vachetta Leather',
    price: 490,
    description: 'Crafted from a single unbroken hide of vegetable-tanned Tuscan vachetta leather. Free from superfluous hardware, featuring raw burnished edges, solid brass Chicago rivets, and a tailored internal pocket for a 16-inch workstation.',
    materials: ['Vegetable-Tanned Vachetta', 'Solid Milled Brass', 'Belgian Linen Lining'],
    dimensions: '42cm × 34cm × 14cm · 18L capacity',
    origin: 'Florence, Italy',
    artisan: 'Pelletteria Manetti',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: true,
    tag: 'Signature Piece',
    specs: {
      'Tannery': 'Consorzio Vera Pelle Italiana Conciata al Vegetale',
      'Compartments': 'Main chamber + padded 16" laptop sleeve',
      'Finish': 'Natural wax hand-buffed patina',
      'Weight': '920 grams'
    }
  },
  {
    id: 'obj-03',
    name: 'Kyoto Pour-Over Vessel',
    category: 'ceramics',
    categoryLabel: 'Ceramics',
    subtitle: 'Coarse Shigaraki Clay with Ash Glaze',
    price: 145,
    description: 'Formed on a traditional kick-wheel in Shigaraki, this stoneware pour-over carafe pairs an unglazed tactile tactile exterior with a warm, micro-speckled feldspathic interior glaze. Engineered to retain heat and oxygenate single-origin roasts.',
    materials: ['High-Iron Shigaraki Stoneware', 'Natural Wood Ash Glaze'],
    dimensions: '16cm height × 11cm diameter · 650ml volume',
    origin: 'Shiga Prefecture, Japan',
    artisan: 'Master Tanba Kiln',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: true,
    tag: 'Artisan Batch',
    specs: {
      'Firing Method': 'Anagama Wood Kiln (72-hour reduction)',
      'Thermal Tolerance': 'Up to 240°C',
      'Capacity': '2 to 3 Servings (650ml)',
      'Care': 'Gentle hand wash with mild soap'
    }
  },
  {
    id: 'obj-04',
    name: 'Hinoki & Smoked Vetiver Candle',
    category: 'sensory',
    categoryLabel: 'Sensory',
    subtitle: 'Organic Rapeseed Wax & Mouth-Blown Smoked Glass',
    price: 85,
    description: 'An olfactory composition evoking rain-drenched cypress shrines in the Kiso Valley. Top notes of Japanese cedar needles and cold bergamot ground into aged Haitian vetiver, charred birch bark, and frankincense resin.',
    materials: ['Swedish Rapeseed Wax', 'Unbleached Organic Cotton Wick', 'Mouth-Blown Borosilicate'],
    dimensions: '9cm height × 8cm diameter · 280g / 9.8 oz',
    origin: 'Grasse, France',
    artisan: 'Atelier Nez No. 4',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    tag: 'Scent Study',
    specs: {
      'Burn Duration': 'Approx. 65 hours',
      'Concentration': '14% pure fragrance essences',
      'Vessel': 'Reusable architectural tumbler',
      'Wax Base': '100% sustainable non-GMO botanical wax'
    }
  },
  {
    id: 'obj-05',
    name: 'Machined Brass Rollerball',
    category: 'desk',
    categoryLabel: 'Desk Objects',
    subtitle: 'Solid CZ121 Brass with Micro-Knurling',
    price: 120,
    description: 'Turned from a single solid rod of lead-free architectural brass on a 5-axis CNC lathe in Munich. Perfectly balanced at the centre of gravity for fatigue-free cursive prose. Develops a warm personal patina through daily skin contact.',
    materials: ['Architectural CZ121 Brass', 'Schmidt 5888 Ceramic Cartridge'],
    dimensions: '136mm length × 10.5mm diameter · 54 grams',
    origin: 'Munich, Germany',
    artisan: 'Werkstätte Schmidt Precision',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: true,
    tag: 'Precision Object',
    specs: {
      'Refill Standard': 'Standard G2 / Schmidt Euro Rollerball',
      'Mechanism': 'Threaded airtight cap with internal rubber O-ring',
      'Weight Distribution': '51% forward bias for effortless stroke',
      'Surface': 'Raw uncoated brushed brass'
    }
  },
  {
    id: 'obj-06',
    name: 'Folded Folio Sleeve',
    category: 'leather',
    categoryLabel: 'Leather Goods',
    subtitle: 'Waxed Saddle Leather & Merino Felt',
    price: 210,
    description: 'Constructed using origami folding techniques without glue. Lined with dense 3mm German merino wool felt to safeguard slim portable displays against micro-scratches and ambient temperature shifts.',
    materials: ['English Bridle Leather', '100% Virgin Merino Wool Felt', 'Waxed Linen Thread'],
    dimensions: '33cm × 24cm × 1.2cm (Suits 13" and 14" devices)',
    origin: 'Walsall, United Kingdom',
    artisan: 'The Tanner & Sadler Guild',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    specs: {
      'Felt Density': '0.36 g/cm³ archival protection',
      'Closure': 'Dual flush magnetic neodymium disc seals',
      'Stitching': 'Traditional two-needle hand saddle stitch'
    }
  },
  {
    id: 'obj-07',
    name: 'Cast Basalt Incense Burner',
    category: 'sensory',
    categoryLabel: 'Sensory',
    subtitle: 'Quarried Volcanic Basalt Stone',
    price: 110,
    description: 'Sculpted from dense volcanic basalt rock quarried along the Rhine rift valley. Its geometric fluting captures fallen ash silently while offering an architectural monolith for incense sticks, rope incense, and palo santo.',
    materials: ['Natural German Volcanic Basalt', 'Raw Brass Inset Disc'],
    dimensions: '18cm length × 4.5cm width × 3cm height · 680g',
    origin: 'Eifel, Germany',
    artisan: 'Steinmetz Werk',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    specs: {
      'Aperture': 'Universal 1.8mm & 3.2mm brass dual bore',
      'Finish': 'Fine diamond hand-honed matte',
      'Thermal': 'Heat-impervious natural volcanic rock'
    }
  },
  {
    id: 'obj-08',
    name: 'Anodized Desk Catchall',
    category: 'desk',
    categoryLabel: 'Desk Objects',
    subtitle: 'Aero-Grade 6061-T6 Aluminum in Raw Silver',
    price: 95,
    description: 'Sculpted from billet aerospace aluminium with continuous curved bevels. Designed to cradle daily carry items—keys, timepiece, signet rings, and currency—organizing everyday chaos into calm geometric clarity.',
    materials: ['6061-T6 Aluminum', 'Natural Cork Underlay'],
    dimensions: '24cm × 16cm × 1.8cm · 380 grams',
    origin: 'Nagoya, Japan',
    artisan: 'Aero Precision Works',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    specs: {
      'Coating': 'Type II Hard-Anodized 20 Micron Coating',
      'Base': 'Portuguese fine-grain acoustic cork pad',
      'Tolerance': 'Machined to ±0.02mm precision'
    }
  },
  {
    id: 'obj-09',
    name: 'Nomad Field Watch 36',
    category: 'timepieces',
    categoryLabel: 'Horology',
    subtitle: 'Brushed 316L Steel & Vegetable Leather Nato',
    price: 520,
    description: 'A discreet 36mm tool watch with high-contrast Bauhaus numerals, applied Swiss Super-LumiNova Old Radium markers, and a robust screw-down crown tested to 100 metres depth.',
    materials: ['316L Surgical Stainless Steel', 'Double Domed Sapphire', 'Tuscan Leather'],
    dimensions: '36mm diameter · 9.8mm thickness · 18mm lug',
    origin: 'Pforzheim, Germany',
    artisan: 'Chronos Manufaktur',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    specs: {
      'Calibre': 'Automatic Miyota 9039 (No-Date High-Beat)',
      'Vibrations': '28,800 bph / 4 Hz',
      'Lume': 'Grade A Super-LumiNova BGW9',
      'Glass': 'Inner AR coated box sapphire crystal'
    }
  },
  {
    id: 'obj-10',
    name: 'Terracotta Botanist Planter',
    category: 'ceramics',
    categoryLabel: 'Ceramics',
    subtitle: 'Fired Impruneta Terracotta with Drainage Saucer',
    price: 135,
    description: 'High-porosity Italian terracotta thrown by hand in the hills of Tuscany. The breathable unglazed clay regulates root respiration and humidity naturally while acquiring mineral salts and moss bloom over seasons.',
    materials: ['High-Silica Impruneta Terracotta'],
    dimensions: '22cm top diameter × 20cm height',
    origin: 'Impruneta, Italy',
    artisan: 'Fornace Masini 1932',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    specs: {
      'Frost Resistance': 'Tested down to -15°C',
      'Drainage': 'Integral internal saucer & centered port',
      'Texture': 'Hand-scraped coarse grog finish'
    }
  },
  {
    id: 'obj-11',
    name: 'Kanso Daily Cardholder',
    category: 'leather',
    categoryLabel: 'Leather Goods',
    subtitle: 'Whiskey Shell Cordovan & Waxed Edges',
    price: 130,
    description: 'Engineered with a central slip compartment and four angled exterior card slots. Only 4mm thin when loaded with 6 cards and folded banknotes, sliding unnoticeably into tailored jackets.',
    materials: ['Genuine Japanese Shell Cordovan', 'French Fil Au Chinois Linen'],
    dimensions: '10cm × 7.2cm × 0.4cm · 28 grams',
    origin: 'Kobe, Japan',
    artisan: 'Shinki Hikaku Atelier',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: true,
    tag: 'Daily Essential',
    specs: {
      'Capacity': '6 cards + folded bank notes',
      'Finish': 'Polished glass edge burnish',
      'Longevity': 'Generational heirloom grade'
    }
  },
  {
    id: 'obj-12',
    name: 'Architectural Paperweight Cube',
    category: 'desk',
    categoryLabel: 'Desk Objects',
    subtitle: 'Hand-Cut Optical Crystal & Ground Chamfers',
    price: 80,
    description: 'A pure geometric 60mm solid cube of K9 optical crystal. Ground and hand-buffed to micron tolerances, it bends light across working sketches and prevents delicate parchment from fluttering.',
    materials: ['Ultra-Clear K9 Optical Crystal'],
    dimensions: '60mm × 60mm × 60mm · 540 grams',
    origin: 'Jablonec nad Nisou, Czech Republic',
    artisan: 'Bohemia Crystal Guild',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    inStock: true,
    featured: false,
    specs: {
      'Refractive Index': '1.5168 Nd',
      'Purity': 'Zero inclusions, zero bubbles',
      'Engraving': 'Discreet laser atelier monogram on underside'
    }
  }
];
