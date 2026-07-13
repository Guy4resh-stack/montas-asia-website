import { useEffect, useRef, useState } from 'react';

/**
 * HomepageProcessTimeline — vertical scroll-reveal timeline for the
 * homepage "How we work" section. Replaces the old snake-path grid with
 * a compact two-column layout: a sticky intro on the left, and 7 steps
 * stacked vertically on the right that reveal as the user scrolls past
 * them. No scroll-jacking — this only observes scroll position to trigger
 * CSS transitions, it never overrides or locks native scrolling.
 */

const STEPS = [
  {
    n: '01',
    title: 'Brief and market context',
    text: 'Clarify the business model, audience, market, offer and channels before production starts.',
  },
  {
    n: '02',
    title: 'Offer and positioning',
    text: 'Turn business input into a clear value proposition, message hierarchy and conversion logic.',
  },
  {
    n: '03',
    title: 'Page and system structure',
    text: 'Define the landing page, website, funnel or content structure before design begins.',
  },
  {
    n: '04',
    title: 'Design and development',
    text: 'Build the digital asset with clean layout, mobile-first behaviour and measurable actions.',
  },
  {
    n: '05',
    title: 'Launch and analytics setup',
    text: 'Prepare tracking, events, UTM logic and CRM-ready intake before traffic starts.',
  },
  {
    n: '06',
    title: 'SEO, campaign and content iteration',
    text: 'Improve pages, campaigns and content based on search intent, traffic quality and user behaviour.',
  },
  {
    n: '07',
    title: 'Reporting and growth improvements',
    text: 'Turn results into clear next steps: what to keep, test and improve.',
  },
];

function useStepReveal(count) {
  const refs = useRef([]);
  const [visible, setVisible] = useState(() => new Array(count).fill(false));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            setActive(idx);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-10% 0px -35% 0px' }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { refs, visible, active };
}

export default function HomepageProcessTimeline() {
  const { refs, visible, active } = useStepReveal(STEPS.length);

  return (
    <div className="hpt-layout">
      <div className="hpt-intro">
        <div className="hpt-intro-sticky">
          <div className="section-label">How we work</div>
          <h2>Process</h2>
          <p>A connected, sequential workflow. Each stage leads directly into the next — no scope drift, no disconnected handoffs.</p>
        </div>
      </div>

      <div className="hpt-timeline" role="list" aria-label="Montas project process, seven connected stages">
        <span className="hpt-line" aria-hidden="true" />
        {STEPS.map((step, i) => (
          <div
            key={step.n}
            ref={(el) => (refs.current[i] = el)}
            data-idx={i}
            role="listitem"
            className={`hpt-step${visible[i] ? ' hpt-step--visible' : ''}${active === i ? ' hpt-step--active' : ''}`}
          >
            <span className="hpt-dot" aria-hidden="true" />
            <div className="hpt-card">
              <span className="hpt-num">{step.n}</span>
              <h3 className="hpt-title">{step.title}</h3>
              <p className="hpt-text">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
