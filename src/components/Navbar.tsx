import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import type { PageId } from '../types';
import { CURRENCIES } from '../data/content';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  currency: string;
  onCurrencyChange: (code: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  currency,
  onCurrencyChange,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Curated' },
    { id: 'collection', label: 'Collection' },
    { id: 'story', label: 'The Atelier' },
    { id: 'concierge', label: 'Concierge' },
  ];

  return (
    <header className="site-header">
      {/* Editorial Announcement Strip */}
      <div className="announcement-strip">
        <div className="container announcement-content">
          <span className="announcement-text">
            Complimentary worldwide courier dispatch on all curated commissions · Zurich · Tokyo · Copenhagen · New York
          </span>
          <div className="currency-selector-wrapper">
            <span className="currency-label">Currency:</span>
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="currency-select"
              aria-label="Select currency"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Flagship Navigation Bar */}
      <nav className="main-navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Brand Monogram & Title */}
          <button
            type="button"
            className="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            aria-label="Atelier Vahl Home"
          >
            <span className="brand-title">ATELIER VAHL</span>
            <span className="brand-subtitle">FUNCTIONAL MONOLITHS · EDITION 2026</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  className={`nav-link-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  <span className="nav-link-text">{link.label}</span>
                  {isActive && <span className="nav-active-indicator" />}
                </button>
              );
            })}
          </div>

          {/* Right Header Utilities: Concierge quick action + Bag Drawer */}
          <div className="navbar-actions">
            <button
              type="button"
              className="concierge-quick-btn"
              onClick={() => handleNavClick('concierge')}
            >
              <span>Book Appointment</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              type="button"
              className="bag-toggle-btn"
              onClick={onOpenCart}
              aria-label={`Open shopping bag with ${cartCount} items`}
            >
              <ShoppingBag size={18} strokeWidth={1.75} />
              <span className="bag-label">Bag</span>
              <span className="bag-badge">{cartCount}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-panel">
            <div className="mobile-nav-header">
              <span className="brand-title">ATELIER VAHL</span>
              <button
                type="button"
                className="close-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-links-list">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </button>
                );
              })}
            </div>

            <div className="mobile-nav-footer">
              <div className="mobile-currency-row">
                <span className="text-muted">Display Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                  className="currency-select"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} ({c.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <p className="mobile-footer-note">
                Monolithic lifestyle objects engineered in Zurich, Florence, and Kyoto.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
