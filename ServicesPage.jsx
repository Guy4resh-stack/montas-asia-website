import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { services } from '../data/services.js';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function ServicesPage() {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Services — Digital Marketing for Asian Markets | Montas"
        description="Landing pages, SEO, paid advertising, SMM, analytics and market research for businesses in Thailand and Southeast Asia. Every service built as part of a growth system."
      />

      {/* Breadcrumbs */}
      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner fade-up">
            <div className="section-label">What we do</div>
            <h1>Services</h1>
            <p className="detail-positioning">
              Each service is a functional piece of a growth system — not a standalone deliverable. We combine strategy, production and execution so every channel works together.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="detail-section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="services-index-grid">
            {services.map((s, i) => (
              <Link key={s.id} to={s.slug} className="service-index-card fade-up">
                <div className="sic-top">
                  <div className="service-icon">{s.icon}</div>
                  <span className="service-tag">{s.tag}</span>
                </div>
                <h2 className="sic-title">{s.title}</h2>
                <p className="sic-desc">{s.shortDesc}</p>
                <span className="sic-cta">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Ready to start</div>
            <h2>Not sure which service fits?</h2>
            <p>Tell us about your business and market. We'll recommend the right starting point and scope it clearly.</p>
            <div className="cta-buttons">
              <a href="mailto:hello@montas.co" className="hero-cta-primary">Discuss a project</a>
              <Link to="/" className="hero-cta-secondary">← Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
