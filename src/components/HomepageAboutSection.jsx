import { Link } from 'react-router-dom';
import TeamCarousel from './TeamCarousel.jsx';

/**
 * HomepageAboutSection — About Montas, homepage section.
 * Text-only intro (no imagery), followed by a "Who we are" subsection
 * (sub-label + sub-heading + team portrait carousel) inside the same
 * section — not a separate top-level section. Uses isolated .has-*
 * class names — nothing here affects /about page styles.
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

      {/* "Who we are" — subsection of About Montas, not a separate section */}
      <div className="has-subsection">
        <div className="has-subheader fade-up">
          <div className="section-label">Who we are</div>
          <h3>A studio built on clarity, execution and local market logic</h3>
        </div>
        <div className="has-main">
          <div className="has-carousel-col fade-up">
            <TeamCarousel />
          </div>
          <div className="has-copy fade-up">
            <p>Montas is a practical marketing studio for companies that need clear digital systems, not just isolated creative assets. The studio combines strategy, page structure, content, paid media, SEO, analytics and production to help businesses enter or grow in Southeast Asian markets.</p>
            <p>We do not try to cover every discipline for every type of client. Strategy, production and execution are handled by the same team — there are no layers of account management between the client and the people doing the work.</p>
          </div>
        </div>
      </div>

      {/* Compact value cards — closes out the whole About Montas block */}
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
