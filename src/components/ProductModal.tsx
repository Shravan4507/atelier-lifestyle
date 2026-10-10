import React, { useState } from 'react';
import { X, Check, ShoppingBag, Shield, Hammer } from 'lucide-react';
import type { Product } from '../types';
import { formatPrice } from '../utils/format';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  currency: string;
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  currency,
  onAddToCart,
  onOpenCart,
}) => {
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2400);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="product-modal-container">
        {/* Dedicated Top Navigation Bar (Prevents any overlap with title/ID) */}
        <div className="modal-top-bar">
          <div className="modal-top-meta">
            <span className="editorial-tag">{product.categoryLabel}</span>
            <span className="modal-id-mono">{product.id.toUpperCase()}</span>
          </div>
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Close specification sheet"
          >
            <span className="modal-close-text">Close</span>
            <X size={16} />
          </button>
        </div>

        <div className="modal-grid">
          {/* Visual Column */}
          <div className="modal-media-col">
            <div className="modal-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="modal-product-img"
              />
              {product.tag && (
                <span className="modal-floating-tag">{product.tag}</span>
              )}
            </div>
            <div className="modal-artisan-strip">
              <Hammer size={16} />
              <span>Workshop: <strong>{product.artisan}</strong> ({product.origin})</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="modal-details-col">

            <h2 className="modal-product-title">{product.name}</h2>
            <p className="modal-product-subtitle">{product.subtitle}</p>

            <div className="modal-price-bar">
              <span className="modal-price-amount">
                {formatPrice(product.price, currency)}
              </span>
              <span className="modal-stock-status">
                {product.inStock ? '● Limited Batch Available' : '○ Commission On Demand'}
              </span>
            </div>

            <p className="modal-description">{product.description}</p>

            {/* Material Badges */}
            <div className="modal-materials-section">
              <span className="modal-section-title">Raw Matter Matrix:</span>
              <div className="materials-pills-wrap">
                {product.materials.map((m) => (
                  <span key={m} className="material-pill">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="modal-specs-section">
              <span className="modal-section-title">Technical Specifications:</span>
              <div className="specs-table">
                <div className="specs-row">
                  <span className="spec-label">Dimensions</span>
                  <span className="spec-value">{product.dimensions}</span>
                </div>
                <div className="specs-row">
                  <span className="spec-label">Provenance</span>
                  <span className="spec-value">{product.origin}</span>
                </div>
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="specs-row">
                    <span className="spec-label">{key}</span>
                    <span className="spec-value">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="modal-action-bar">
              <button
                type="button"
                className={`action-btn-primary ${added ? 'btn-success-state' : ''}`}
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    <span>Commission Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Acquire Edition ({formatPrice(product.price, currency)})</span>
                  </>
                )}
              </button>

              {added && (
                <button
                  type="button"
                  className="action-btn-secondary"
                  onClick={() => {
                    onClose();
                    onOpenCart();
                  }}
                >
                  View Bag
                </button>
              )}
            </div>

            <div className="modal-guarantee-note">
              <Shield size={15} />
              <span>Includes Lifetime Artisan Covenant · Unbleached Linen Encasement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
