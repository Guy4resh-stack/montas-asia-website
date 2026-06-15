import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import HeroVisual from '../components/HeroVisual.jsx';
import { cases } from '../data/cases.js';

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

export default function CasesPage() {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Case Study Templates for Asian-Market Projects | Montas"
        description="Case study templates for real estate, wellness, tourism, B2B, education and legal services projects in Thailand and Southeast Asia. Data to be added after client approval."
      />

      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Cases' },
          ]} />
        </div>
      </div>

      <section className="inner-hero">
        <div className="container">
          <div className="inner-hero-grid">
            <div className="fade-up">
              <div className="section-label">Case study templates</div>
              <h1>Case study templates</h1>
              <p className="hero-sub">
                Each page below is a structured template prepared for a real project type across Southeast Asian markets. Final data, confirmed results and client details will be published only after explicit client approval.
              </p>
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
            </div>
            <div className="inner-hero-visual fade-up">
              <HeroVisual variant="cases" />
            </div>
          </div>
        </div>
      </section>

      {/* Prominent notice */}
      <div className="container">
        <div className="case-notice fade-up">
          <strong style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif' }}>About these pages:</strong> No metrics, client names or results have been invented. These are structural templates that document the type of work, the challenge and the planned approach for each project category. Real data replaces the placeholders once each client approves publication.
        </div>
      </div>

      {/* Cases grid */}
      <section className="detail-section">
        <div className="container">
          <div className="cases-overview-grid">
            {cases.map(c => (
              <Link key={c.id} to={c.slug} className="case-overview-card fade-up">
                <div className="case-overview-header">
                  <div className="case-industry">{c.industry}</div>
                  <div className="case-template-badge">Template</div>
                </div>
                <h2 className="case-overview-title">{c.title}</h2>
                <div className="case-overview-row">
                  <div className="case-row-label">Example challenge</div>
                  <div className="case-row-val">{c.problem}</div>
                </div>
                <div className="case-overview-row">
                  <div className="case-row-label">Planned approach</div>
                  <div className="case-row-val">{c.whatWeDid}</div>
                </div>
                <div className="case-result">
                  ⬡ Results — <span className="case-placeholder">to be confirmed after client approval</span>
                </div>
                <span className="card-learn-more">View case template →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Work with Montas</div>
            <h2>Working on a similar project?</h2>
            <p>Tell us about your business and market. We will come back with a realistic scope based on your actual situation.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
              <Link to="/services" className="hero-cta-secondary">View services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
