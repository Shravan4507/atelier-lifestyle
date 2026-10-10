import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { CartItem } from '../types';
import { formatPrice } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: string;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onNavigateToCollection: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToCollection,
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const totalUsd = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleAcquire = () => {
    const randomRef = `AV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(randomRef);
    setCheckoutComplete(true);
  };

  const handleFinishAcquisition = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="drawer-overlay" role="dialog" aria-modal="true" aria-label="Shopping Bag">
      <div className="drawer-panel">
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="editorial-tag">ACQUISITION LEDGER</span>
            <h2 className="drawer-heading">Your Selected Objects</h2>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close bag drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        {checkoutComplete ? (
          <div className="drawer-checkout-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={42} strokeWidth={1.5} />
            </div>
            <span className="editorial-tag">ACQUISITION DISPATCH RECORDED</span>
            <h3 className="success-title">Order Confirmed: {orderRef}</h3>
            <p className="success-body">
              Your commission has been entered into the Zurich master artisan dispatch schedule. A numbered certificate of authenticity and custom linen packaging will accompany your parcel.
            </p>
            <div className="success-meta-box">
              <div className="meta-row">
                <span>Dispatch Origin</span>
                <strong>Zurich Central Vault</strong>
              </div>
              <div className="meta-row">
                <span>Courier Transit</span>
                <strong>Carbon-Neutral Express (3–5 Days)</strong>
              </div>
              <div className="meta-row">
                <span>Acquisition Value</span>
                <strong>{formatPrice(totalUsd, currency)}</strong>
              </div>
            </div>
            <button
              type="button"
              className="action-btn-primary full-width"
              onClick={handleFinishAcquisition}
            >
              <span>Return to Catalog</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="drawer-empty-state">
            <p className="empty-state-title">Your Acquisition Bag is Empty</p>
            <p className="empty-state-desc">
              Every edition in our collection is produced in disciplined quantities with no synthetic finishes.
            </p>
            <button
              type="button"
              className="action-btn-primary"
              onClick={() => {
                onClose();
                onNavigateToCollection();
              }}
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="drawer-items-list">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="drawer-item-card">
                  <div className="item-thumb-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="item-thumb-img"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-title-row">
                      <span className="item-category">{product.categoryLabel}</span>
                      <button
                        type="button"
                        className="item-remove-btn"
                        onClick={() => onRemoveItem(product.id)}
                        aria-label={`Remove ${product.name} from bag`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <h3 className="item-name">{product.name}</h3>
                    <span className="item-price">
                      {formatPrice(product.price, currency)} each
                    </span>

                    <div className="item-quantity-row">
                      <div className="quantity-stepper">
                        <button
                          type="button"
                          className="stepper-btn"
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="stepper-value">{quantity}</span>
                        <button
                          type="button"
                          className="stepper-btn"
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <span className="item-line-total">
                        Total: {formatPrice(product.price * quantity, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="drawer-footer">
              <div className="drawer-summary-row">
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">
                  {formatPrice(totalUsd, currency)}
                </span>
              </div>
              <div className="drawer-shipping-badge">
                <ShieldCheck size={16} />
                <span>Complimentary Express Courier & Certificate of Authenticity</span>
              </div>
              <button
                type="button"
                className="action-btn-primary full-width"
                onClick={handleAcquire}
              >
                <span>Acquire Selected Objects</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="drawer-clear-btn"
                onClick={onClearCart}
              >
                Reset Bag
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
