import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const first = document.querySelector('.field-error');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // INTEGRATION POINT
    // To connect a real backend, replace this block with one of the following:
    //
    // Option A — Vercel serverless function:
    //   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    //
    // Option B — Email service (Resend, SendGrid, Mailgun):
    //   await fetch('https://api.resend.com/emails', { method: 'POST', ... })
    //
    // Option C — CRM webhook (HubSpot, Pipedrive, etc.):
    //   await fetch(process.env.VITE_CRM_WEBHOOK, { method: 'POST', body: JSON.stringify(form) })
    //
    // Option D — Zapier / Make webhook:
    //   await fetch(process.env.VITE_ZAPIER_HOOK, { method: 'POST', body: JSON.stringify(form) })
    //
    // No personal data is stored in this demo. The form state is held in React
    // memory only and is cleared on page reload.
    // ─────────────────────────────────────────────────────────────────────────

    setSubmitted(true);
    setForm(EMPTY);
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
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner fade-up">
            <div className="section-label">Get in touch</div>
            <h1>Start a project</h1>
            <p className="detail-positioning">
              Montas helps businesses entering Southeast Asia build conversion-ready landing pages, SEO-ready websites, paid advertising campaigns and analytics systems. Fill in the form and we will come back with a clear proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact block */}
      <section className="detail-section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-col">
              {submitted ? (
                <div className="form-success fade-up">
                  <div className="form-success-icon">✓</div>
                  <h3>Request received</h3>
                  <p>
                    This is a demo form prepared for CRM integration. In a production setup, this request would be routed to the CRM or email pipeline automatically.
                  </p>
                  <button
                    className="hero-cta-secondary"
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
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

                  <button type="submit" className="hero-cta-primary form-submit">
                    Send project request
                  </button>

                  <p className="form-note">
                    This demo form is prepared for future CRM or email integration. No data is stored or transmitted.
                  </p>

                </form>
              )}
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
    </>
  );
}
