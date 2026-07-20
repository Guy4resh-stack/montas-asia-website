import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CasesPageHeroVisual from '../components/CasesPageHeroVisual.jsx';
import CaseVisualMockup from '../components/CaseVisualMockup.jsx';
import { cases } from '../data/cases.js';

// Only published client work appears on this page.
const realCases = cases.filter((c) => c.caseType === 'Real case');

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
              <div className="section-label">Selected work</div>
              <h1>Client cases and results</h1>
              <p className="hero-sub">
                Real projects across marketing, branding, web development and product work — with the task, the approach and the reported outcome for each engagement.
              </p>
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
            </div>
            <div className="inner-hero-visual fade-up">
              <CasesPageHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Case archive — sequential full-width sections, not a carousel */}
      <section className="detail-section case-archive">
        <div className="container">
          {realCases.map((c, i) => (
            <article key={c.id} className="case-archive-item fade-up">

              <div className="case-archive-num">{String(i + 1).padStart(2, '0')}</div>

              <div className="case-archive-visual">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.imageAlt || c.homeTitle}
                    className={`case-archive-img${c.imageContain ? ' case-archive-img--contain' : ''}`}
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                ) : (
                  <CaseVisualMockup type={c.mockupType} />
                )}
              </div>

              <div className="case-archive-body">
                <div className="case-archive-meta">
                  <span className="wc-type-badge">{c.caseType}</span>
                </div>

                <h2 className="case-archive-title">{c.homeTitle}</h2>
                <p className="case-archive-desc">{c.homeDescription}</p>

                <div className="case-archive-tsr">
                  <div className="case-archive-tsr-col">
                    <span className="wc-tsr-label">Task</span>
                    <p className="wc-tsr-text">{c.homeTask || c.taskStatement}</p>
                  </div>
                  <div className="case-archive-tsr-col">
                    <span className="wc-tsr-label">Solution</span>
                    <p className="wc-tsr-text">{c.homeSolution || c.solutionStatement}</p>
                  </div>
                  <div className="case-archive-tsr-col">
                    <span className="wc-tsr-label" style={{ color: 'var(--green-accent)' }}>Outcome</span>
                    <p className="wc-tsr-text">{c.homeOutcome || c.conceptOutcome}</p>
                  </div>
                </div>

                <Link to={c.slug} className="hero-cta-secondary">
                  View case study →
                </Link>
              </div>

            </article>
          ))}
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
