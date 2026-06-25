/**
 * ProcessFlow — connected, sequential process visualisation for the homepage
 * Process section. Desktop: a 3-column serpentine ("snake path") layout with
 * directional connector arrows between steps. Mobile: a vertical timeline
 * with a continuous connector line.
 */

const STEPS = [
  {
    n: '01',
    title: 'Brief and market context',
    text: 'We clarify the business model, audience, market, offer and channels before designing any page or campaign.',
  },
  {
    n: '02',
    title: 'Offer and positioning',
    text: 'We turn the business input into a clear value proposition, message hierarchy and conversion logic.',
  },
  {
    n: '03',
    title: 'Page and system structure',
    text: 'We define the landing page, website, funnel or content structure before production starts.',
  },
  {
    n: '04',
    title: 'Design and development',
    text: 'We build the digital asset with clean layout, mobile-first behaviour, clear CTAs and measurable actions.',
  },
  {
    n: '05',
    title: 'Launch and analytics setup',
    text: 'We prepare tracking, events, UTM logic and CRM-ready intake so performance can be measured.',
  },
  {
    n: '06',
    title: 'SEO, campaign and content iteration',
    text: 'We improve pages, campaigns and content based on search intent, traffic quality and user behaviour.',
  },
  {
    n: '07',
    title: 'Reporting and growth improvements',
    text: 'We turn results into clear next steps: what to keep, what to test and what to improve.',
  },
];

/* Grid placement for the desktop serpentine, expressed on a 5-track grid
   where odd tracks (1,3,5) hold content and even tracks (2,4) hold the
   connector arrows between them. Row 1 flows left→right (1,2,3), drops
   down through the right-hand gap row to row 3 which flows right→left
   (4,5,6), then drops down through the left-hand gap row to row 5 (step 7). */
const GRID_POSITION = {
  '01': { row: 1, col: 1 },
  '02': { row: 1, col: 3 },
  '03': { row: 1, col: 5 },
  '04': { row: 3, col: 5 },
  '05': { row: 3, col: 3 },
  '06': { row: 3, col: 1 },
  '07': { row: 5, col: 1 },
};

/* Horizontal connectors sit in the gap column between two same-row cards.
   Vertical connectors sit in the gap row between two same-column cards. */
const H_CONNECTORS = [
  { row: 1, col: 2, direction: 'right' },
  { row: 1, col: 4, direction: 'right' },
  { row: 3, col: 2, direction: 'left' },
  { row: 3, col: 4, direction: 'left' },
];

const V_CONNECTORS = [
  { row: 2, col: 5 },
  { row: 4, col: 1 },
];

function HArrow({ direction }) {
  return (
    <svg className="pf-h-arrow" width="40" height="16" viewBox="0 0 40 16" fill="none" aria-hidden="true">
      {direction === 'right' ? (
        <path d="M2 8 H32 M26 2 L33 8 L26 14" stroke="var(--green-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M38 8 H8 M14 2 L7 8 L14 14" stroke="var(--green-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function VTurnArrow() {
  return (
    <svg className="pf-v-arrow" width="16" height="48" viewBox="0 0 16 48" fill="none" aria-hidden="true">
      <path d="M8 2 V38 M2 32 L8 39 L14 32" stroke="var(--green-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProcessFlow() {
  return (
    <div className="process-flow">

      {/* Desktop: serpentine connected grid */}
      <div className="pf-grid" role="list" aria-label="Montas project process, seven connected stages">
        {STEPS.map((step) => {
          const pos = GRID_POSITION[step.n];
          return (
            <div
              key={step.n}
              role="listitem"
              className="pf-card fade-up"
              style={{ gridRow: pos.row, gridColumn: pos.col }}
            >
              <div className="pf-card-num">{step.n}</div>
              <h3 className="pf-card-title">{step.title}</h3>
              <p className="pf-card-text">{step.text}</p>
            </div>
          );
        })}

        {H_CONNECTORS.map((c, i) => (
          <div
            key={`h-${i}`}
            className="pf-h-connector"
            aria-hidden="true"
            style={{ gridRow: c.row, gridColumn: c.col }}
          >
            <HArrow direction={c.direction} />
          </div>
        ))}

        {V_CONNECTORS.map((c, i) => (
          <div
            key={`v-${i}`}
            className="pf-v-connector"
            aria-hidden="true"
            style={{ gridRow: c.row, gridColumn: c.col }}
          >
            <VTurnArrow />
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="pf-timeline" role="list" aria-label="Montas project process, seven connected stages">
        {STEPS.map((step, i) => (
          <div key={step.n} role="listitem" className="pf-timeline-item fade-up">
            <div className="pf-timeline-marker">
              <span className="pf-timeline-num">{step.n}</span>
              {i < STEPS.length - 1 && <span className="pf-timeline-line" aria-hidden="true" />}
            </div>
            <div className="pf-timeline-body">
              <h3 className="pf-card-title">{step.title}</h3>
              <p className="pf-card-text">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
