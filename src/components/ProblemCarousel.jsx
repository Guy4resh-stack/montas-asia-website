import { useState, useRef, useCallback } from 'react';

const SLIDES = [
  {
    problem: 'A website built for one market does not speak to buyers in another.',
    solution: 'Montas rebuilds the offer, page structure and messaging around local buyer behaviour, trust signals and market expectations.',
  },
  {
    problem: 'Landing pages generate clicks but not enquiries.',
    solution: 'Montas creates conversion-focused pages with clear CTAs, fast mobile loading, service proof, FAQs and simple enquiry paths.',
  },
  {
    problem: 'Ad budgets are spent without tracking or attribution.',
    solution: 'Montas connects campaigns, landing pages, analytics and CRM-ready intake before scaling media spend.',
  },
  {
    problem: 'Competitors already own local search before you enter the market.',
    solution: 'Montas prepares SEO-ready pages, local search assets, Google Business structure and search-intent mapping.',
  },
  {
    problem: 'Content looks active but does not support sales.',
    solution: 'Montas builds content systems tied to offer, audience, campaign goals and measurable next steps.',
  },
  {
    problem: 'Teams move fast, but the production process is slow.',
    solution: 'Montas uses AI-assisted production with human review to create landing pages, content drafts, campaign assets and reporting faster.',
  },
];

export default function ProblemCarousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const total = SLIDES.length;

  const goTo = useCallback((index) => {
    const next = ((index % total) + total) % total;
    setActive(next);
  }, [total]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(active - 1); }
  };

  return (
    <div
      className="problem-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Common market-entry problems and Montas solutions"
      onKeyDown={handleKeyDown}
    >
      {/* Progress path */}
      <div className="pc-progress" role="tablist" aria-label="Slide progress">
        <div className="pc-progress-line">
          <div
            className="pc-progress-fill"
            style={{ width: `${(active / (total - 1)) * 100}%` }}
          />
        </div>
        <div className="pc-progress-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to slide ${i + 1} of ${total}`}
              className={`pc-dot${i === active ? ' pc-dot--active' : ''}${i < active ? ' pc-dot--done' : ''}`}
              onClick={() => goTo(i)}
            >
              <span className="pc-dot-num">{String(i + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Slide track */}
      <div className="pc-viewport">
        <div
          ref={trackRef}
          className="pc-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="pc-slide"
              role="tabpanel"
              aria-hidden={i !== active}
            >
              <div className="pc-card pc-card--problem">
                <span className="pc-card-label">Problem</span>
                <p className="pc-card-text">{slide.problem}</p>
              </div>
              <div className="pc-connector" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 14 H22 M16 8 L22 14 L16 20"
                    stroke="var(--green-accent)" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="pc-card pc-card--solution">
                <span className="pc-card-label pc-card-label--solution">Montas solution</span>
                <p className="pc-card-text">{slide.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow controls */}
      <div className="pc-controls">
        <button
          className="pc-arrow"
          onClick={() => goTo(active - 1)}
          aria-label="Previous problem"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="pc-counter">
          <strong>{String(active + 1).padStart(2, '0')}</strong>
          <span className="pc-counter-sep">/</span>
          {String(total).padStart(2, '0')}
        </span>
        <button
          className="pc-arrow"
          onClick={() => goTo(active + 1)}
          aria-label="Next problem"
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
