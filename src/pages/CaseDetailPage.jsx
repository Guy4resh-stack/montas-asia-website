import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import RelatedLinks from '../components/RelatedLinks.jsx';
import { getServicesByIds } from '../data/services.js';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function PlaceholderBlock({ label, children }) {
  return (
    <div className="case-placeholder-block fade-up">
      <div className="section-label">{label}</div>
      <div className="case-placeholder-content">{children}</div>
    </div>
  );
}

export default function CaseDetailPage({ caseData }) {
  useFadeUp();

  useEffect(() => { window.scrollTo(0, 0); }, [caseData.id]);

  const relatedServices = getServicesByIds(caseData.relatedServiceIds);

  return (
    <>
      <SEO
        title={`${caseData.title} | Montas Work`}
        description={`Case study placeholder: ${caseData.industry} — ${caseData.problem}`}
      />

      {/* Breadcrumbs */}
      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Work', href: '/#cases' },
            { label: caseData.title },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner fade-up">
            <div className="case-industry-label">{caseData.industry}</div>
            <h1>{caseData.title}</h1>
            <div className="case-status-badge">
              <span className="status-dot" />
              Case data to be added after client approval
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <div className="container">
        <div className="case-notice fade-up">
          This page is prepared as a case study template. Final numbers, visuals and client details will be added after approval.
        </div>
      </div>

      {/* Case sections */}
      <section className="detail-section">
        <div className="container">
          <div className="case-sections-grid">

            <PlaceholderBlock label="Client context">
              <p>{caseData.contextPlaceholder}</p>
            </PlaceholderBlock>

            <PlaceholderBlock label="Challenge">
              <p>{caseData.challengePlaceholder}</p>
            </PlaceholderBlock>

            <PlaceholderBlock label="What Montas did">
              <p>{caseData.whatWeDid}</p>
            </PlaceholderBlock>

            <PlaceholderBlock label="Channels used">
              <ul className="case-channels-list">
                {caseData.channelsPlaceholder.map((ch, i) => <li key={i}>{ch}</li>)}
              </ul>
            </PlaceholderBlock>

            <PlaceholderBlock label="Results">
              <div className="case-results-placeholder">
                <div className="results-placeholder-icon">◻</div>
                <p>Performance data, conversion numbers, cost-per-lead and growth metrics will be added after client sign-off.</p>
              </div>
            </PlaceholderBlock>

            <PlaceholderBlock label="Next steps">
              <div className="case-results-placeholder">
                <p>Ongoing optimisation plan and next-phase recommendations will be documented here after the case is finalised.</p>
              </div>
            </PlaceholderBlock>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Related services */}
      <section className="detail-section">
        <div className="container">
          <RelatedLinks items={relatedServices} label="Services used in this project" />
        </div>
      </section>

      {/* Back + CTA */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Work with Montas</div>
            <h2>Want results like this for your business?</h2>
            <p>We're building this system for businesses across Southeast Asia. Let's discuss what your market entry or growth needs look like.</p>
            <div className="cta-buttons">
              <a href="mailto:hello@montas.co" className="hero-cta-primary">Discuss a project</a>
              <Link to="/#cases" className="hero-cta-secondary">← Back to Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
