import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ContactPageVisual from '../components/ContactPageVisual.jsx';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const MARKETS = [
  'Thailand',
  'Vietnam',
  'Cambodia',
  'Singapore',
  'Malaysia',
  'Indonesia',
  'Philippines',
  'Southeast Asia (multiple markets)',
  'Other',
];

const SERVICES = [
  'Landing pages & websites',
  'SEO & local search',
  'Paid advertising & lead generation',
  'SMM & content systems',
  'Analytics & reporting',
  'Market research & competitor analysis',
  'AI-assisted marketing production',
  'Not sure yet — need a recommendation',
];

const EMPTY = {
  name: '',
  email: '',
  company: '',
  market: '',
  service: '',
  description: '',
};

export default function ContactPage() {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Lock background scrolling and allow Escape to dismiss the success modal.
  useEffect(() => {
    if (!submitted) return undefined;
    const onKey = (ev) => { if (ev.key === 'Escape') setSubmitted(false); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [submitted]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your work email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.company.trim()) e.company = 'Please enter your company or project name.';
    if (!form.market) e.market = 'Please select a market.';
    if (!form.service) e.service = 'Please select a service of interest.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError('');

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const first = document.querySelector('.field-error');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok !== true) {
        throw new Error(data.message || 'The request could not be sent. Please try again.');
      }

      setSubmitted(true);
      setForm(EMPTY);
    } catch (error) {
      setSubmitError(error.message || 'The request could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Start a Project | Montas Asia"
        description="Tell us about your business and market. Montas helps businesses in Southeast Asia build landing pages, run paid campaigns, improve SEO and set up marketing analytics."
      />

      {/* Breadcrumbs */}
      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="inner-hero inner-hero--contact">
        <div className="container">
          <div className="inner-hero-grid">
            <div className="fade-up">
              <div className="section-label">Get in touch</div>
              <h1>Start a project</h1>
              <p className="hero-sub">
                Montas helps businesses entering Southeast Asia build conversion-ready landing pages, SEO-ready websites, paid advertising campaigns and analytics systems. Fill in the form and we will come back with a clear proposal.
              </p>
            </div>
            <div className="inner-hero-visual fade-up">
              <ContactPageVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact block */}
      <section className="detail-section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-col">
              <form className="contact-form fade-up" onSubmit={handleSubmit} noValidate>

                <div className="form-row">
                  <label className="form-label" htmlFor="name">Name <span className="form-required">*</span></label>
                  <input
                    className={`form-input${errors.name ? ' form-input--error' : ''}`}
                    id="name" name="name" type="text"
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="email">Work email <span className="form-required">*</span></label>
                  <input
                    className={`form-input${errors.email ? ' form-input--error' : ''}`}
                    id="email" name="email" type="email"
                    placeholder="you@company.com"
                    value={form.email} onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="company">Company / project name <span className="form-required">*</span></label>
                  <input
                    className={`form-input${errors.company ? ' form-input--error' : ''}`}
                    id="company" name="company" type="text"
                    placeholder="Company or project name"
                    value={form.company} onChange={handleChange}
                    autoComplete="organization"
                  />
                  {errors.company && <span className="field-error">{errors.company}</span>}
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="market">Market of interest <span className="form-required">*</span></label>
                  <select
                    className={`form-input form-select${errors.market ? ' form-input--error' : ''}`}
                    id="market" name="market"
                    value={form.market} onChange={handleChange}
                  >
                    <option value="">Select a market</option>
                    {MARKETS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  {errors.market && <span className="field-error">{errors.market}</span>}
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="service">Service of interest <span className="form-required">*</span></label>
                  <select
                    className={`form-input form-select${errors.service ? ' form-input--error' : ''}`}
                    id="service" name="service"
                    value={form.service} onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>

                <div className="form-row">
                  <label className="form-label" htmlFor="description">Short project description</label>
                  <textarea
                    className="form-input form-textarea"
                    id="description" name="description"
                    placeholder="Tell us about your business, your market and where you need help. A few sentences is enough."
                    rows={5}
                    value={form.description} onChange={handleChange}
                  />
                </div>

                {submitError && (
                  <p className="form-alert" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="hero-cta-primary form-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending request…' : 'Send project request'}
                </button>

              </form>
            </div>

            {/* Contact sidebar */}
            <div className="contact-sidebar fade-up">
              <div className="contact-sidebar-block">
                <div className="section-label">Direct contact</div>
                <ul className="contact-detail-list">
                  <li>
                    <span className="contact-detail-icon">✉</span>
                    <a href="mailto:hello@montas.co">hello@montas.co</a>
                  </li>
                  <li>
                    <span className="contact-detail-icon">◎</span>
                    <span>LINE — available on request</span>
                  </li>
                  <li>
                    <span className="contact-detail-icon">◈</span>
                    <span>WhatsApp — available on request</span>
                  </li>
                  <li>
                    <span className="contact-detail-icon">▣</span>
                    <span>Bangkok, Thailand</span>
                  </li>
                </ul>
              </div>

              <div className="contact-sidebar-block">
                <div className="section-label">What to expect</div>
                <ul className="contact-expect-list">
                  <li>We review your request within one business day</li>
                  <li>We come back with a clear scope, not a sales call</li>
                  <li>If there is a fit, we outline an approach and timeline</li>
                  <li>No obligation to proceed</li>
                </ul>
              </div>

              <div className="contact-sidebar-block">
                <div className="section-label">Not ready yet?</div>
                <p style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>Browse the services overview to understand what fits your stage.</p>
                <Link to="/services" className="hero-cta-secondary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
                  View all services →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success modal */}
      {submitted && (
        <div
          className="cf-modal-backdrop"
          role="presentation"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="cf-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cf-modal-title"
            onClick={(ev) => ev.stopPropagation()}
          >
            <button
              type="button"
              className="cf-modal-close"
              aria-label="Close"
              onClick={() => setSubmitted(false)}
            >
              &times;
            </button>

            <div className="cf-modal-icon" aria-hidden="true">&#10003;</div>

            <h2 id="cf-modal-title" className="cf-modal-title">Thank you for your request</h2>

            <p className="cf-modal-text">
              Your project request has reached the Montas team. We review every enquiry
              within one business day and will come back to you with a clear scope
              rather than a sales call.
            </p>

            <div className="cf-modal-actions">
              <button
                type="button"
                className="hero-cta-primary"
                onClick={() => setSubmitted(false)}
              >
                Close
              </button>
              <Link to="/cases" className="hero-cta-secondary">
                Browse our work
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
