import React from 'react';
import { ArrowRight, Eye, Shield, Compass, Hammer, Clock } from 'lucide-react';
import type { Product, PageId } from '../types';
import { PRODUCTS } from '../data/products';
import { PRESS_ACCOLADES } from '../data/content';
import { formatPrice } from '../utils/format';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  currency: string;
  onInspectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  currency,
  onInspectProduct,
  onAddToCart,
}) => {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="page-wrapper home-page">
      {/* Editorial Hero Monolith */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="editorial-tag">COLLECTION ÉDITION 2026</span>
              <span className="editorial-tag dark">ZURICH · FLORENCE · SHIGARAKI</span>
            </div>

            <h1 className="hero-main-title">
              Monolithic Objects for the Contemplative Life
            </h1>

            <p className="hero-lead-text">
              We design daily accessories stripped of ornament—crafted from Grade 5 titanium, unbroken Tuscan vachetta leather, and wood-fired Shigaraki stoneware. Built without synthetic coatings to age with irreplaceable dignity.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="action-btn-primary"
                onClick={() => onNavigate('collection')}
              >
                <span>Explore Collection</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="action-btn-secondary"
                onClick={() => onNavigate('story')}
              >
                <span>The Atelier Manifesto</span>
              </button>
            </div>
          </div>

          <div className="hero-visual-frame">
            <div className="hero-image-box">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=85"
                alt="Minimalist architectural lifestyle accessories layout"
                className="hero-main-img"
              />
              <div className="hero-image-caption">
                <span className="caption-tag">STUDY NO. 08</span>
                <span className="caption-text">Daily Rituals of Form, Shadow & Stone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Provenance Bar */}
      <section className="provenance-strip">
        <div className="container provenance-grid">
          <div className="provenance-card">
            <Hammer size={20} strokeWidth={1.5} />
            <h3 className="prov-title">Artisan Provenance</h3>
            <p className="prov-desc">Every piece is hand-fashioned in heritage European & Japanese master workshops.</p>
          </div>
          <div className="provenance-card">
            <Compass size={20} strokeWidth={1.5} />
            <h3 className="prov-title">Honest Materiality</h3>
            <p className="prov-desc">Grade 5 titanium, raw milled brass, and vegetable vachetta. Zero synthetic lacquers.</p>
          </div>
          <div className="provenance-card">
            <Shield size={20} strokeWidth={1.5} />
            <h3 className="prov-title">Lifetime Covenant</h3>
            <p className="prov-desc">Engineered for serviceability with permanent at-cost refurbishment guarantees.</p>
          </div>
          <div className="provenance-card">
            <Clock size={20} strokeWidth={1.5} />
            <h3 className="prov-title">Numbered Editions</h3>
            <p className="prov-desc">Strictly limited annual batches. Delivered with certificates of authenticity.</p>
          </div>
        </div>
      </section>

      {/* Curated Triad Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="editorial-tag">CURATED TRIAD</span>
              <h2 className="section-title">Essential Daily Companions</h2>
            </div>
            <button
              type="button"
              className="view-all-link-btn"
              onClick={() => onNavigate('collection')}
            >
              <span>View All 12 Objects</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="featured-product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-img"
                  />
                  {product.tag && (
                    <span className="product-badge-overlay">{product.tag}</span>
                  )}
                </div>

                <div className="product-card-body">
                  <div className="product-card-meta">
                    <span className="product-category-text">{product.categoryLabel}</span>
                    <span className="product-origin-text">{product.origin}</span>
                  </div>

                  <h3 className="product-title-text">{product.name}</h3>
                  <p className="product-subtitle-text">{product.subtitle}</p>

                  <div className="product-price-row">
                    <span className="product-price-val">
                      {formatPrice(product.price, currency)}
                    </span>
                    <span className="product-stock-tag">Limited Edition</span>
                  </div>

                  <div className="product-actions-group">
                    <button
                      type="button"
                      className="card-inspect-btn"
                      onClick={() => onInspectProduct(product)}
                      aria-label={`Inspect ${product.name}`}
                    >
                      <Eye size={15} />
                      <span>Inspect Specs</span>
                    </button>

                    <button
                      type="button"
                      className="card-add-btn"
                      onClick={() => onAddToCart(product)}
                      aria-label={`Add ${product.name} to bag`}
                    >
                      <span>Acquire</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Manifesto Split Block */}
      <section className="manifesto-section">
        <div className="container manifesto-grid">
          <div className="manifesto-text-col">
            <span className="editorial-tag">THE MANIFESTO</span>
            <h2 className="manifesto-heading">
              "We do not design for the season. We design for the century."
            </h2>
            <div className="manifesto-paragraphs">
              <p>
                In an era dominated by calculated obsolescence and transient trends, Atelier Vahl operates on the radical premise of durability. We believe that the objects accompanying our daily waking hours should become calmer and more beautiful with each passing decade.
              </p>
              <p>
                Our leather absorbs oil from fingertips, darkening into personal burnished maps. Our raw architectural brass acquires an atmospheric oxidation. Our titanium housings shrug off impact without distortion.
              </p>
            </div>
            <div className="manifesto-quote-signature">
              <span className="signature-name">— Henrik Vahl</span>
              <span className="signature-title">Founder & Chief Architect, Zurich</span>
            </div>
          </div>

          <div className="manifesto-media-col">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
              alt="Artisan workspace with stone, brass, and ceramic tools"
              className="manifesto-img"
            />
            <div className="manifesto-stat-bar">
              <div className="stat-unit">
                <span className="stat-num">0%</span>
                <span className="stat-label">Synthetic Finishes</span>
              </div>
              <div className="stat-unit">
                <span className="stat-num">100%</span>
                <span className="stat-label">Artisan Traced</span>
              </div>
              <div className="stat-unit">
                <span className="stat-num">∞</span>
                <span className="stat-label">Repair Promise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Lookbook Section: Rituals of Daily Carry */}
      <section className="lookbook-section">
        <div className="container">
          <div className="section-header-center">
            <span className="editorial-tag">LOOKBOOK EDITION 2026</span>
            <h2 className="section-title">Rituals of Daily Carry</h2>
            <p className="section-desc">
              Captured in contemplative light across spaces in Kyoto, Zurich, and Milan.
            </p>
          </div>

          <div className="lookbook-gallery-grid">
            <div className="lookbook-tile large">
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
                alt="Tuscan Vachetta Tote resting on stone steps"
                className="lookbook-tile-img"
              />
              <div className="lookbook-tile-info">
                <span className="tile-number">01 / TRANSIT</span>
                <span className="tile-title">Monolith Vachetta Tote</span>
              </div>
            </div>

            <div className="lookbook-tile">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                alt="Titanium Chrono on slate surface"
                className="lookbook-tile-img"
              />
              <div className="lookbook-tile-info">
                <span className="tile-number">02 / MEASURE</span>
                <span className="tile-title">Atelier Chrono 38</span>
              </div>
            </div>

            <div className="lookbook-tile">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Shigaraki stoneware pour-over brewing coffee"
                className="lookbook-tile-img"
              />
              <div className="lookbook-tile-info">
                <span className="tile-number">03 / AWAKENING</span>
                <span className="tile-title">Kyoto Pour-Over Vessel</span>
              </div>
            </div>

            <div className="lookbook-tile wide">
              <img
                src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80"
                alt="Machined brass rollerball resting on linen desk journal"
                className="lookbook-tile-img"
              />
              <div className="lookbook-tile-info">
                <span className="tile-number">04 / DISCIPLINE</span>
                <span className="tile-title">Machined Brass Rollerball & Archival Journal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Acclaim & Press Section */}
      <section className="press-section">
        <div className="container">
          <div className="press-header">
            <span className="editorial-tag">CRITICAL RECOGNITION</span>
            <h2 className="section-title">Words from the Design Guild</h2>
          </div>

          <div className="press-cards-grid">
            {PRESS_ACCOLADES.map((item, idx) => (
              <div key={idx} className="press-card">
                <p className="press-quote">“{item.quote}”</p>
                <div className="press-meta">
                  <span className="press-publication">{item.publication}</span>
                  <span className="press-issue">{item.issue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Editorial Callout */}
      <section className="home-footer-cta">
        <div className="container cta-container">
          <div className="cta-box">
            <span className="editorial-tag">PRIVATE COMMISSIONS</span>
            <h2 className="cta-title">Acquire an Edition or Schedule a Private Inspection</h2>
            <p className="cta-desc">
              Experience the weight and tactile temperature of raw titanium, Tuscan leather, and wood-fired ceramics at our Zurich or Tokyo ateliers.
            </p>
            <div className="cta-buttons-row">
              <button
                type="button"
                className="action-btn-primary"
                onClick={() => onNavigate('collection')}
              >
                <span>Browse Full Catalog</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="action-btn-secondary"
                onClick={() => onNavigate('concierge')}
              >
                <span>Book Concierge Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
