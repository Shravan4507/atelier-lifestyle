import React, { useState } from 'react';
import type { PageId } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Newsletter & Brand Statement Grid */}
        <div className="footer-top-grid">
          <div className="footer-brand-column">
            <h2 className="footer-brand-title">ATELIER VAHL</h2>
            <p className="footer-brand-desc">
              Functional monolithic objects and daily accessories designed for contemplative life. Handcrafted across independent heritage workshops in Switzerland, Germany, Japan, and Italy.
            </p>
            <div className="footer-creed">
              <span className="editorial-tag">NO SYNTHETIC COATINGS · ZERO COMPROMISE</span>
            </div>
          </div>

          <div className="footer-newsletter-column">
            <span className="footer-column-heading">The Atelier Gazette</span>
            <p className="footer-newsletter-sub">
              Delivered four times annually. Rare batch releases, artisan studio profiles, and essays on monolithic design philosophy.
            </p>
            {subscribed ? (
              <div className="newsletter-success">
                <Check size={16} />
                <span>Your dispatch address has been recorded in our private ledger.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <span>Inscribe</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="footer-divider" />

        {/* Navigation & Boutiques Directory Columns */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <span className="footer-column-heading">Navigation</span>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-text-btn" onClick={() => handleLinkClick('home')}>
                  Curated Editions
                </button>
              </li>
              <li>
                <button type="button" className="footer-text-btn" onClick={() => handleLinkClick('collection')}>
                  Complete Collection
                </button>
              </li>
              <li>
                <button type="button" className="footer-text-btn" onClick={() => handleLinkClick('story')}>
                  The Atelier & Craft
                </button>
              </li>
              <li>
                <button type="button" className="footer-text-btn" onClick={() => handleLinkClick('concierge')}>
                  Concierge & Appointments
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-column-heading">Material Categories</span>
            <ul className="footer-links-list">
              <li><span className="footer-static-item">Titanium & Swiss Horology</span></li>
              <li><span className="footer-static-item">Tuscan Vegetable Vachetta</span></li>
              <li><span className="footer-static-item">Shigaraki Ash-Glazed Stoneware</span></li>
              <li><span className="footer-static-item">Milled Architectural CZ121 Brass</span></li>
              <li><span className="footer-static-item">K9 Ground Optical Crystal</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-column-heading">Global Boutiques</span>
            <ul className="footer-links-list">
              <li><span className="footer-static-item">Zürich — Storchengasse 14</span></li>
              <li><span className="footer-static-item">Tokyo — Ginza Six Annex</span></li>
              <li><span className="footer-static-item">Copenhagen — Kronprinsensgade 8</span></li>
              <li><span className="footer-static-item">New York — 94 Mercer St, SoHo</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-column-heading">Private Concierge</span>
            <p className="footer-contact-text">
              Direct Inquiries:<br />
              <strong className="footer-email-link">concierge@ateliervahl.com</strong>
            </p>
            <p className="footer-contact-text">
              Worldwide Telephony:<br />
              <strong>+41 44 211 48 90</strong>
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} ATELIER VAHL S.A. All rights reserved. Registered in Zurich, Switzerland.
          </p>
        </div>
      </div>
    </footer>
  );
};
