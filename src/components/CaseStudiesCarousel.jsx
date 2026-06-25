import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CaseVisualMockup from './CaseVisualMockup.jsx';

/**
 * CaseStudiesCarousel — full-screen-style case presentation for the homepage
 * Work section. Reads from the shared cases.js data array (the same data
 * used by /cases and /cases/:slug) and presents it as one strong slide at a
 * time: case number, type label, title, description, task, solution, result
 * and a large illustrative visual, with arrow + dot navigation.
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
            <span className="wc-type-badge">{c.caseType}</span>
          </div>

          <h3 className="wc-title">{c.homeTitle}</h3>
          <p className="wc-description">{c.homeDescription}</p>

          <div className="wc-tsr">
            <div className="wc-tsr-row">
              <span className="wc-tsr-label">Task</span>
              <p className="wc-tsr-text">{c.taskStatement}</p>
            </div>
            <div className="wc-tsr-row">
              <span className="wc-tsr-label">Solution</span>
              <p className="wc-tsr-text">{c.solutionStatement}</p>
            </div>
            <div className="wc-tsr-row wc-tsr-row--result">
              <span className="wc-tsr-label">Concept outcome</span>
              <p className="wc-tsr-text">{c.conceptOutcome}</p>
            </div>
          </div>

          <Link to={c.slug} className="hero-cta-primary wc-cta">
            Explore concept →
          </Link>
        </div>

        {/* Visual column */}
        <div className="wc-visual-col">
          <CaseVisualMockup type={c.mockupType} />
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
