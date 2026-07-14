import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CaseVisualMockup from './CaseVisualMockup.jsx';

/**
 * CaseStudiesCarousel — full-screen-style case presentation for the homepage
 * Work section. Reads from the shared cases.js data array (the same data
 * used by /cases and /cases/:slug) and presents it as one strong slide at a
 * time: case number, type label, title, description, task, solution, result
 * and a large illustrative visual, with arrow + dot navigation.
 *
 * Supports two visual modes per case:
 *   - image field set → renders a real <img> asset (e.g. Supreme Yachts)
 *   - mockupType field set → renders the CSS/SVG CaseVisualMockup
 *
 * Supports two CTA modes:
 *   - externalUrl field set → opens in a new tab with rel="noopener noreferrer"
 *   - otherwise → internal <Link> to c.slug
 */
export default function CaseStudiesCarousel({ cases }) {
  const [active, setActive] = useState(0);
  const total = cases.length;

  const goTo = useCallback((index) => {
    setActive(((index % total) + total) % total);
  }, [total]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(active - 1); }
  };

  const c = cases[active];

  // CTA label: "View real case" for real cases, "Explore concept" for concepts
  const ctaLabel = c.caseType === 'Real case' ? 'View real case →' : 'Explore concept →';

  return (
    <div
      className="wc-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Case study showcase"
      onKeyDown={handleKeyDown}
    >
      <div className="wc-slide">

        {/* Text column */}
        <div className="wc-text-col">
          <div className="wc-meta-row">
            <span className="wc-number">{String(active + 1).padStart(2, '0')}</span>
            <span className={`wc-type-badge${c.caseType === 'Real case' ? ' wc-type-badge--real' : ''}`}>
              {c.caseType}
            </span>
            {c.category && (
              <span className="wc-category">{c.category}</span>
            )}
          </div>

          <h3 className="wc-title">{c.homeTitle}</h3>
          <p className="wc-description">{c.homeDescription}</p>

          <div className="wc-tsr">
            <div className="wc-tsr-card">
              <span className="wc-tsr-card-label">Task</span>
              <p className="wc-tsr-card-text">{c.homeTask}</p>
            </div>
            <div className="wc-tsr-card">
              <span className="wc-tsr-card-label">Solution</span>
              <p className="wc-tsr-card-text">{c.homeSolution}</p>
            </div>
            <div className="wc-tsr-card wc-tsr-card--outcome">
              <span className="wc-tsr-card-label wc-tsr-card-label--outcome">Result</span>
              <p className="wc-tsr-card-text">{c.homeOutcome}</p>
            </div>
          </div>

          {/* Supporting metric chips — only for cases with confirmed figures */}
          {c.metrics && c.metrics.length > 0 && (
            <div className="wc-metrics">
              {c.metrics.map((m) => (
                <div key={m.label} className="wc-metric-chip">
                  <span className="wc-metric-value">{m.value}</span>
                  <span className="wc-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA: external link for real cases, internal Link for concepts */}
          {c.externalUrl ? (
            <a
              href={c.externalUrl}
              className="hero-cta-primary wc-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link to={c.slug} className="hero-cta-primary wc-cta">
              {ctaLabel}
            </Link>
          )}
        </div>

        {/* Visual column: real image or CSS mockup */}
        <div className="wc-visual-col">
          {c.image ? (
            <div className="wc-real-image-wrap">
              <img
                src={c.image}
                alt={c.imageAlt || c.homeTitle}
                className="wc-real-image"
              />
            </div>
          ) : (
            <CaseVisualMockup type={c.mockupType} />
          )}
        </div>

      </div>

      {/* Controls */}
      <div className="wc-controls">
        <button
          className="wc-arrow"
          onClick={() => goTo(active - 1)}
          aria-label="Previous case"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="wc-dots" role="tablist" aria-label="Case slides">
          {cases.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to case ${i + 1} of ${total}`}
              className={`wc-dot${i === active ? ' wc-dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <span className="wc-counter">
          <strong>{String(active + 1).padStart(2, '0')}</strong>
          <span className="wc-counter-sep">/</span>
          {String(total).padStart(2, '0')}
        </span>

        <button
          className="wc-arrow"
          onClick={() => goTo(active + 1)}
          aria-label="Next case"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
