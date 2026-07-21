import { Link } from 'react-router-dom';

/**
 * HomepageAboutSection — compact About Montas preview for the homepage.
 * Text-only intro (no imagery) — it leads straight into WhoWeAreSection's
 * team carousel right below it. Uses isolated .has-* class names —
 * nothing here affects /about page styles.
 */

const VALUES = [
  {
    title: 'Clarity first',
    text:  'Offer, audience and market logic before production.',
  },
  {
    title: 'Built for enquiries',
    text:  'Pages and campaigns structured around real user actions.',
  },
  {
    title: 'Local market awareness',
    text:  'Messaging and channels adapted to Southeast Asian buyer behaviour.',
  },
  {
    title: 'Measured execution',
    text:  'Tracking and reporting built into the system from the start.',
  },
];

export default function HomepageAboutSection() {
  return (
    <div className="has-wrap">

      {/* Heading row */}
      <div className="has-header fade-up">
        <div className="section-label">About Montas</div>
        <h2>Strategy, production and execution — under one roof</h2>
      </div>

      {/* Text-only intro — no imagery, flows straight into Who We Are below */}
      <div className="has-copy has-copy--intro fade-up">
        <p>Montas helps businesses turn unclear market-entry plans into websites, campaigns and content systems that are clear, measurable and built for Southeast Asian buyer behaviour.</p>
        <p>Strategy, creative production, SEO, paid media and analytics — handled by the same team, without disconnected handoffs.</p>
        <Link to="/about" className="has-about-link">Learn more about Montas →</Link>
      </div>

      {/* Compact value cards */}
      <div className="has-values">
        {VALUES.map((v) => (
          <div key={v.title} className="has-value-card fade-up">
            <span className="has-value-dot" aria-hidden="true" />
            <div className="has-value-title">{v.title}</div>
            <p className="has-value-text">{v.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
