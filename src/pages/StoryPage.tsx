import React from 'react';
import { ArrowRight, Hammer, Shield } from 'lucide-react';
import type { PageId } from '../types';
import { STORY_TENETS } from '../data/content';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  const materials = [
    {
      name: 'Grade 5 Titanium (Ti-6Al-4V)',
      provenance: 'Biel, Switzerland',
      characteristics: 'Exceptional strength-to-weight ratio, skin-temperature neutrality, impervious to saltwater corrosion, sandblasted raw satin surface.'
    },
    {
      name: 'Full-Grain Tuscan Vachetta',
      provenance: 'Santa Croce sull\'Arno, Italy',
      characteristics: 'Tanned slowly over 60 days using mimosa and chestnut tree tannins. Zero chromium salts or synthetic plastic polyurethane topcoats.'
    },
    {
      name: 'Shigaraki High-Iron Stoneware',
      provenance: 'Shiga Prefecture, Japan',
      characteristics: 'Coarse granitic clay fired in traditional wood anagama kilns for 72 continuous hours, producing organic ash glaze deposits.'
    },
    {
      name: 'Architectural CZ121 Lead-Free Brass',
      provenance: 'Bavaria, Germany',
      characteristics: '5-axis CNC turned from solid monolithic rods. Untreated raw surface that deepens into a warm amber oxide through fingertip oils.'
    },
    {
      name: 'Ultra-Clear K9 Optical Crystal',
      provenance: 'Bohemia, Czech Republic',
      characteristics: 'Hand-cut and lapidary-polished to sub-micron flatness. 100% void of gas bubbles, casting architectural prismatic caustics across work surfaces.'
    }
  ];

  const workshops = [
    {
      name: 'Horology Studio Biel',
      city: 'Biel / Bienne, Switzerland',
      focus: 'High-precision titanium watch cases, hand-assembled mechanical calibres, and double-domed sapphire crystal fitment.',
      artisan: 'Master Horologist Lukas Weber'
    },
    {
      name: 'Pelletteria Manetti',
      city: 'Florence, Italy',
      focus: 'Traditional two-needle saddle stitching, raw bevel edge-burnishing with natural beeswax, and structural origami folding.',
      artisan: 'Maestro Matteo Manetti'
    },
    {
      name: 'Tanba Kiln Cooperative',
      city: 'Shiga, Japan',
      focus: 'Manual kick-wheel throwing of mineral-rich regional stoneware and multi-day wood-fueled kiln reduction firing.',
      artisan: 'Ceramicist Kenjiro Soga'
    }
  ];

  return (
    <div className="page-wrapper story-page">
      {/* Editorial Header */}
      <section className="story-hero-section">
        <div className="container">
          <div className="story-hero-text">
            <span className="editorial-tag">THE PHILOSOPHY OF SUBTRACTION</span>
            <h1 className="story-main-title">The Archaeology of Tomorrow</h1>
            <p className="story-main-lead">
              Atelier Vahl was founded on a singular conviction: that the tools and objects we carry daily should be built to survive centuries, gaining character and quiet dignity with every touch.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Split Block */}
      <section className="story-narrative-section">
        <div className="container story-narrative-grid">
          <div className="story-text-column">
            <h2 className="narrative-heading">
              Why We Refuse the Ephemeral
            </h2>
            <p>
              Contemporary industry is designed around rapid iteration and planned disposal. Electronics fail within three years; synthetic leathers peel within months; plastic pens end in landfills after mere weeks of writing.
            </p>
            <p>
              Atelier Vahl deliberately opposes this velocity. Every object we create begins by asking what can be removed without sacrificing structural utility. We do not use glued composite boards, plastic seam reinforcements, or temporary decorative plating.
            </p>
            <p>
              Instead, we look toward artifacts unearthed from ancient architectural excavations—stone mortars, forged iron blades, oiled leather folios—objects whose honest materiality has outlasted empires. That is the standard we set for every edition.
            </p>
          </div>

          <div className="story-image-column">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
              alt="Artisan workspace showcasing raw leather and stone elements"
              className="story-manifesto-img"
            />
            <div className="story-image-quote">
              <span className="quote-text">“Form is the inevitable consequence of disciplined material honesty.”</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Tenets Grid */}
      <section className="tenets-section">
        <div className="container">
          <div className="tenets-header">
            <span className="editorial-tag">FOUNDATIONAL PILLARS</span>
            <h2 className="section-title">The Four Tenets of Atelier Vahl</h2>
          </div>

          <div className="tenets-cards-grid">
            {STORY_TENETS.map((tenet) => (
              <div key={tenet.num} className="tenet-card">
                <span className="tenet-number">{tenet.num}</span>
                <h3 className="tenet-title">{tenet.title}</h3>
                <p className="tenet-description">{tenet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raw Matter Matrix */}
      <section className="materials-matrix-section">
        <div className="container">
          <div className="matrix-header">
            <span className="editorial-tag">PROVENANCE & INTEGRITY</span>
            <h2 className="section-title">The Raw Matter Matrix</h2>
            <p className="matrix-desc">
              Every substance touched by an Atelier Vahl artisan must possess verifiable natural origin and enduring mechanical longevity.
            </p>
          </div>

          <div className="materials-table-wrapper">
            <div className="materials-table">
              <div className="mat-table-header">
                <span className="col-name">Raw Material</span>
                <span className="col-origin">Geographic Provenance</span>
                <span className="col-desc">Structural Characteristics</span>
              </div>
              {materials.map((m, idx) => (
                <div key={idx} className="mat-table-row">
                  <span className="col-name font-medium">{m.name}</span>
                  <span className="col-origin editorial-mono">{m.provenance}</span>
                  <span className="col-desc">{m.characteristics}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Workshops Spotlight */}
      <section className="workshops-section">
        <div className="container">
          <div className="workshops-header">
            <span className="editorial-tag">INDEPENDENT GUILDS</span>
            <h2 className="section-title">Master Workshop Guilds</h2>
          </div>

          <div className="workshops-grid">
            {workshops.map((w, idx) => (
              <div key={idx} className="workshop-card">
                <div className="workshop-card-header">
                  <span className="workshop-loc">{w.city}</span>
                  <Hammer size={18} />
                </div>
                <h3 className="workshop-name">{w.name}</h3>
                <p className="workshop-focus">{w.focus}</p>
                <div className="workshop-master">
                  <span className="master-label">Led By:</span>
                  <span className="master-name">{w.artisan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Repair Covenant */}
      <section className="repair-covenant-section">
        <div className="container">
          <div className="covenant-card">
            <Shield size={36} strokeWidth={1.5} />
            <h2 className="covenant-title">The Lifetime Craft Covenant</h2>
            <p className="covenant-text">
              If an Atelier Vahl object ever experiences stitch wear, leather dryness, or mechanical friction after years of rigorous daily use, do not discard it. Simply ship it to our Zurich workshop or bring it to any global boutique. Our master artisans will condition, re-stitch, and polish it at cost for the remainder of your life.
            </p>
            <div className="covenant-actions">
              <button
                type="button"
                className="action-btn-primary"
                onClick={() => onNavigate('collection')}
              >
                <span>Inspect Current Editions</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="action-btn-secondary"
                onClick={() => onNavigate('concierge')}
              >
                <span>Book Boutique Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
