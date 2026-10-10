# ATELIER VAHL

A flagship, responsive lifestyle and lifestyle-accessories website crafted with **React + Vite + TypeScript**.

## Design Philosophy & Directives

- **Zero Hover Effects**: In accordance with project specifications, hover animations and `:hover` pseudo-classes have been removed across all styles. Tactile micro-interactions are provided via `:active` press states and explicit indicators.
- **Zero Box Shadows**: Pure architectural depth achieved through delicate 1px hairline borders (`#e3e0d8`), geometric layout contrast, and surface hierarchy with no `box-shadow` properties.
- **Strict 4-Page Architecture**:
  1. **Curated (Home)**: Flagship manifesto, craft provenance bar, curated triad, and editorial lookbook.
  2. **Collection**: Real-time category filtering (Horology, Leather Goods, Ceramics, Sensory, Desk Objects), search, sorting, and currency selection.
  3. **The Atelier**: Craft narrative, the 4 foundational pillars, and raw materials provenance matrix.
  4. **Concierge**: Interactive salon appointment booking system with confirmation vouchers, global boutique directories, and FAQ accordions.
- **Hidden Scrollbars**: Global cross-browser scrollbar hiding (`scrollbar-width: none`, `-ms-overflow-style: none`, `::-webkit-scrollbar { display: none }`) while scrolling remains smooth and unrestricted.
- **Multi-Currency Support**: Real-time currency conversions across USD (`$`), EUR (`€`), GBP (`£`), JPY (`¥`), and INR (`₹`).
- **Interactive Bag & Modal**: Complete client-side acquisition bag drawer and technical specification modal.

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Production build
npm run build
```

## Vercel Deployment

This repository includes [`vercel.json`](./vercel.json) with SPA route rewrite configuration to ensure clean fallback routing to `/index.html`.
