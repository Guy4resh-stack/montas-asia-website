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
        title={`${caseData.title} | Case Study Template | Montas`}
        description={`Case study template: ${caseData.industry} — ${caseData.problem}`}
      />

      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Work', href: '/cases' },
            { label: caseData.title },
          ]} />
        </div>
      </div>

      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner fade-up">
            <div className="case-industry-label">{caseData.industry}</div>
            <h1>{caseData.title}</h1>
            <div className="case-status-badge">
              <span className="status-dot" />
              Case study template — data to be added after client approval
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="case-notice fade-up">
          This is a case study template prepared for a real project type. Final performance data, client name, visuals and confirmed results will be added once the client has approved publication. No metrics or outcomes have been invented.
        </div>
      </div>

      <section className="detail-section">
        <div className="container">
          <div className="case-sections-grid">

            <PlaceholderBlock label="Business context">
              <p>{caseData.contextPlaceholder}</p>
            </PlaceholderBlock>

            <PlaceholderBlock label="Challenge">
              <p>{caseData.challengePlaceholder}</p>
            </PlaceholderBlock>

            <PlaceholderBlock label="Example scope">
              <p>{caseData.whatWeDid}</p>
            </PlaceholderBlock>

            <PlaceholderBlock label="Channels and tools">
              <ul className="case-channels-list">
                {caseData.channelsPlaceholder.map((ch, i) => <li key={i}>{ch}</li>)}
              </ul>
            </PlaceholderBlock>

            <PlaceholderBlock label="Measurement framework">
              <div className="case-results-placeholder">
                <div className="results-placeholder-icon">◻</div>
                <p>Performance data, conversion figures, cost-per-lead and growth metrics will be added after client sign-off. No results have been invented or estimated.</p>
              </div>
            </PlaceholderBlock>

            <PlaceholderBlock label="Results to be added after approval">
              <div className="case-results-placeholder">
                <p>Confirmed outcomes, next-phase recommendations and client-approved commentary will be published here once finalised.</p>
              </div>
            </PlaceholderBlock>

          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="detail-section">
        <div className="container">
          <RelatedLinks items={relatedServices} label="Services relevant to this project type" />
        </div>
      </section>

      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Work with Montas</div>
            <h2>Working on a similar project?</h2>
            <p>Tell us about your business and market. We will come back with a realistic scope based on your situation.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
              <Link to="/cases" className="hero-cta-secondary">← All case templates</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
