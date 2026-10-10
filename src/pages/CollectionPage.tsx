import React, { useState, useMemo } from 'react';
import { Search, Eye, ShoppingBag, X, Check } from 'lucide-react';
import type { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/format';

interface CollectionPageProps {
  currency: string;
  onInspectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  currency,
  onInspectProduct,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Objects' },
    { id: 'timepieces', label: 'Horology' },
    { id: 'leather', label: 'Leather Goods' },
    { id: 'ceramics', label: 'Ceramics' },
    { id: 'sensory', label: 'Sensory' },
    { id: 'desk', label: 'Desk Objects' },
  ];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.origin.toLowerCase().includes(q) ||
        item.artisan.toLowerCase().includes(q) ||
        item.materials.some((m) => m.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 2000);
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="page-wrapper collection-page">
      {/* Header Banner */}
      <section className="catalog-header-section">
        <div className="container">
          <div className="catalog-header-text">
            <span className="editorial-tag">THE REPERTORY</span>
            <h1 className="catalog-main-title">Curated Collection</h1>
            <p className="catalog-main-desc">
              Functional lifestyle objects engineered without synthetic glues or superficial ornament. Built from titanium, Tuscan leather, and wood-fired clay.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Controls & Filters Bar */}
      <section className="catalog-controls-section">
        <div className="container">
          {/* Category Tabs */}
          <div className="category-tabs-bar" role="tablist" aria-label="Product Categories">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">[{count}]</span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Row */}
          <div className="search-sort-bar">
            {/* Search Input */}
            <div className="search-input-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by object, material, or workshop..."
                className="catalog-search-input"
                aria-label="Search objects"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="sort-box">
              <span className="sort-label">Arrange:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="catalog-sort-select"
                aria-label="Sort objects by"
              >
                <option value="featured">Curator's Selection</option>
                <option value="price-asc">Acquisition: Low to High</option>
                <option value="price-desc">Acquisition: High to Low</option>
                <option value="name">Nomenclature (A to Z)</option>
              </select>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="results-status-bar">
            <span className="results-count-text">
              Displaying <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} curated objects
            </span>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleResetFilters}
              >
                Reset Filter Parameters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="catalog-grid-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="catalog-empty-view">
              <span className="editorial-tag">NO COINCIDENT EDITIONS</span>
              <h2 className="empty-title">No objects match your current parameters</h2>
              <p className="empty-desc">
                Adjust your search terminology or select "All Objects" to view the complete repertoire.
              </p>
              <button
                type="button"
                className="action-btn-primary"
                onClick={handleResetFilters}
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="catalog-cards-grid">
              {filteredProducts.map((product) => {
                const isJustAdded = addedId === product.id;

                return (
                  <article key={product.id} className="catalog-card">
                    {/* Media Frame */}
                    <div className="catalog-card-media">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="catalog-card-img"
                        loading="lazy"
                      />
                      {product.tag && (
                        <span className="catalog-card-tag">{product.tag}</span>
                      )}
                      <div className="card-materials-overlay">
                        {product.materials.slice(0, 2).map((mat) => (
                          <span key={mat} className="card-mat-chip">
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Body */}
                    <div className="catalog-card-info">
                      <div className="card-header-meta">
                        <span className="card-category-label">{product.categoryLabel}</span>
                        <span className="card-provenance-label">{product.origin}</span>
                      </div>

                      <h2 className="card-title-text">{product.name}</h2>
                      <p className="card-subtitle-text">{product.subtitle}</p>

                      <div className="card-dimensions-row">
                        <span className="card-dim-text">{product.dimensions}</span>
                      </div>

                      <div className="card-price-bar">
                        <span className="card-price-amount">
                          {formatPrice(product.price, currency)}
                        </span>
                        <span className="card-workshop-name">
                          {product.artisan}
                        </span>
                      </div>

                      {/* Tactile Actions */}
                      <div className="card-actions-grid">
                        <button
                          type="button"
                          className="card-action-inspect"
                          onClick={() => onInspectProduct(product)}
                          aria-label={`Inspect ${product.name} technical specifications`}
                        >
                          <Eye size={15} />
                          <span>Inspect</span>
                        </button>

                        <button
                          type="button"
                          className={`card-action-acquire ${isJustAdded ? 'card-btn-success' : ''}`}
                          onClick={() => handleQuickAdd(product)}
                          aria-label={`Acquire ${product.name}`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check size={15} />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={15} />
                              <span>Acquire</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
