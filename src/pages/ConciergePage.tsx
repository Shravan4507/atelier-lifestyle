import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import type { PageId } from '../types';
import { BOUTIQUES, FAQS } from '../data/content';

interface ConciergePageProps {
  onNavigate: (page: PageId) => void;
}

export const ConciergePage: React.FC<ConciergePageProps> = ({ onNavigate }) => {
  const [selectedBoutique, setSelectedBoutique] = useState('Zurich — Storchengasse 14');
  const [serviceType, setServiceType] = useState('Private Studio Fitting & Object Inspection');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<{
    code: string;
    name: string;
    boutique: string;
    service: string;
    date: string;
  } | null>(null);

  // FAQ accordion state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const generatedCode = `AV-CONCIERGE-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedBooking({
      code: generatedCode,
      name,
      boutique: selectedBoutique,
      service: serviceType,
      date: date || 'Within 5 Business Days',
    });
  };

  const handleSelectBoutiqueInForm = (boutiqueCity: string, boutiqueAddress: string) => {
    setSelectedBoutique(`${boutiqueCity} — ${boutiqueAddress}`);
    const formElement = document.getElementById('appointment-booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="page-wrapper concierge-page">
      {/* Header Banner */}
      <section className="concierge-header-section">
        <div className="container">
          <div className="concierge-header-text">
            <span className="editorial-tag">THE PRIVATE DESK</span>
            <h1 className="concierge-main-title">Private Consultations & Global Boutiques</h1>
            <p className="concierge-main-desc">
              Schedule a one-on-one session with our master curators in Zurich, Tokyo, Copenhagen, or New York. Inspect raw hides, bespoke monogramming, and unreleased prototypes in calm seclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Booking Section */}
      <section className="concierge-booking-section" id="appointment-booking-form">
        <div className="container booking-grid">
          {/* Left Column: Form or Confirmation Voucher */}
          <div className="booking-form-col">
            <div className="booking-card">
              <span className="editorial-tag">PRIVATE APPOINTMENT REQUEST</span>

              {submittedBooking ? (
                <div className="booking-confirmation-view">
                  <div className="confirmation-icon-wrap">
                    <CheckCircle2 size={44} strokeWidth={1.5} />
                  </div>
                  <h2 className="confirm-title">Consultation Reserved</h2>
                  <p className="confirm-lead">
                    Thank you, <strong>{submittedBooking.name}</strong>. Your private session has been scheduled with the senior curator.
                  </p>

                  <div className="confirm-voucher">
                    <div className="voucher-row">
                      <span className="voucher-label">Voucher Reference</span>
                      <strong className="voucher-val">{submittedBooking.code}</strong>
                    </div>
                    <div className="voucher-row">
                      <span className="voucher-label">Boutique Location</span>
                      <span className="voucher-val">{submittedBooking.boutique}</span>
                    </div>
                    <div className="voucher-row">
                      <span className="voucher-label">Consultation Focus</span>
                      <span className="voucher-val">{submittedBooking.service}</span>
                    </div>
                    <div className="voucher-row">
                      <span className="voucher-label">Scheduled Target Date</span>
                      <span className="voucher-val">{submittedBooking.date}</span>
                    </div>
                  </div>

                  <p className="confirm-instructions">
                    An encrypted invitation dossier has been dispatched to <em>{email}</em>. Our concierge will contact you by telephone 24 hours prior to welcome your arrival.
                  </p>

                  <div className="confirm-action-row">
                    <button
                      type="button"
                      className="action-btn-primary full-width"
                      onClick={() => {
                        setSubmittedBooking(null);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setDate('');
                        setNotes('');
                      }}
                    >
                      <span>Schedule Another Session</span>
                    </button>
                    <button
                      type="button"
                      className="action-btn-secondary full-width"
                      onClick={() => onNavigate('collection')}
                    >
                      <span>Return to Collection</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="concierge-form">
                  <h2 className="form-legend">Reserve Your Private Session</h2>
                  <p className="form-subtext">
                    Complimentary 45-minute private viewing with tailored single-origin refreshments.
                  </p>

                  <div className="form-row-dual">
                    <div className="form-field">
                      <label htmlFor="client-name" className="field-label">Full Name *</label>
                      <input
                        id="client-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Henrik Lindqvist"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="client-email" className="field-label">Email Address *</label>
                      <input
                        id="client-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. h.lindqvist@domain.ch"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-dual">
                    <div className="form-field">
                      <label htmlFor="client-phone" className="field-label">Contact Telephone</label>
                      <input
                        id="client-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+41 79 000 00 00"
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="booking-date" className="field-label">Preferred Date</label>
                      <input
                        id="booking-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="boutique-select" className="field-label">Selected Atelier / Boutique</label>
                    <select
                      id="boutique-select"
                      value={selectedBoutique}
                      onChange={(e) => setSelectedBoutique(e.target.value)}
                      className="form-select"
                    >
                      <option value="Zurich — Storchengasse 14">Zurich — Storchengasse 14, Lindenhof</option>
                      <option value="Tokyo — Ginza Six Annex">Tokyo — 6-10-1 Ginza, Chuo City</option>
                      <option value="Copenhagen — Kronprinsensgade 8">Copenhagen — Kronprinsensgade 8, Indre By</option>
                      <option value="New York — 94 Mercer Street">New York — 94 Mercer St, SoHo</option>
                      <option value="Virtual Atelier — High-Def Video Stream">Virtual Atelier — Global Curated Video Stream</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="service-select" className="field-label">Focus of Consultation</label>
                    <select
                      id="service-select"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="form-select"
                    >
                      <option value="Private Studio Fitting & Object Inspection">Private Studio Fitting & Object Inspection</option>
                      <option value="Bespoke Tuscan Leather Monogramming & Selection">Bespoke Tuscan Leather Monogramming & Hide Grain Selection</option>
                      <option value="Mechanical Horology Fitting & Strap Tailoring">Mechanical Horology Fitting & Strap Tailoring</option>
                      <option value="Ceramic Vessel & Architectural Object Commission">Ceramic Vessel & Architectural Object Commission</option>
                      <option value="Lifetime Restoration & Conditioning Assessment">Lifetime Restoration & Conditioning Assessment</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="notes" className="field-label">Personal Requests or Specific Edits</label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Please note any specific models, wrist measurements, or dietary preferences for your appointment..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="action-btn-primary full-width">
                    <span>Confirm Consultation Request</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Protocols & Direct Lines */}
          <div className="booking-info-col">
            <div className="protocol-card">
              <span className="editorial-tag">ATELIER PROTOCOLS</span>
              <h3 className="protocol-title">Private Viewing Etiquette</h3>
              <ul className="protocol-list">
                <li>
                  <strong>Exclusive Space:</strong> During your 45-minute booking, the viewing salon is reserved exclusively for your party.
                </li>
                <li>
                  <strong>Tactile Inspection:</strong> Guests are encouraged to handle raw hides, titanium prototypes, and unglazed ceramic ware without white gloves to appreciate true weight and balance.
                </li>
                <li>
                  <strong>Bespoke Embossing:</strong> On-site foil and blind debossing of custom initials available same-day on all leather acquisitions.
                </li>
              </ul>
            </div>

            <div className="concierge-direct-card">
              <span className="editorial-tag">DIRECT LINES</span>
              <h3 className="direct-title">Global Curator Desk</h3>
              <p className="direct-desc">
                For urgent inquiries regarding pending shipments, bespoke commissions, or press loan requests:
              </p>
              <div className="direct-contact-item">
                <Mail size={16} />
                <span>concierge@ateliervahl.com</span>
              </div>
              <div className="direct-contact-item">
                <Phone size={16} />
                <span>+41 44 211 48 90 (Zurich HQ)</span>
              </div>
              <div className="direct-contact-item">
                <Clock size={16} />
                <span>Monday – Saturday: 09:00 – 19:00 CET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Boutiques Grid */}
      <section className="boutiques-directory-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="editorial-tag">FLAGSHIP ADDRESSES</span>
              <h2 className="section-title">Physical Sanctuaries</h2>
            </div>
            <p className="boutiques-header-note">
              Designed as serene spaces of travertine stone, oiled smoked oak, and natural acoustic calm.
            </p>
          </div>

          <div className="boutiques-cards-grid">
            {BOUTIQUES.map((b) => (
              <article key={b.city} className="boutique-card">
                <div className="boutique-media-frame">
                  <img
                    src={b.image}
                    alt={`${b.city} Atelier boutique space`}
                    className="boutique-img"
                  />
                  <span className="boutique-city-badge">{b.city}</span>
                </div>

                <div className="boutique-card-body">
                  <div className="boutique-header-row">
                    <h3 className="boutique-district">{b.district}</h3>
                  </div>

                  <p className="boutique-address">
                    <MapPin size={15} />
                    <span>{b.address}</span>
                  </p>

                  <p className="boutique-hours">
                    <Clock size={15} />
                    <span>{b.hours}</span>
                  </p>

                  <div className="boutique-contact-row">
                    <span className="contact-small">{b.phone}</span>
                    <span className="contact-small">{b.email}</span>
                  </div>

                  <button
                    type="button"
                    className="boutique-select-btn"
                    onClick={() => handleSelectBoutiqueInForm(b.city, b.address)}
                    aria-label={`Schedule appointment in ${b.city}`}
                  >
                    <span>Schedule Appointment Here</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Answered Questions Accordion */}
      <section className="faq-section">
        <div className="container faq-container">
          <div className="faq-header-box">
            <span className="editorial-tag">CURATOR INQUIRIES</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-lead-text">
              Everything you need to know about our unadorned materials, patina evolution, global dispatch, and lifetime repair covenant.
            </p>
          </div>

          <div className="faq-accordion-list">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaqIndex === index;
              return (
                <div key={index} className={`faq-item-card ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon-indicator">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel">
                      <span className="faq-category-pill">{faq.category}</span>
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
