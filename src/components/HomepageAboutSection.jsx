import { Link } from 'react-router-dom';

/**
 * HomepageAboutSection — compact About Montas preview for the homepage.
 * Uses isolated .has-* class names — nothing here affects /about page styles.
 *
 * TO REPLACE IMAGE PLACEHOLDERS WITH REAL PHOTOS:
 * Find any <div className="has-img-placeholder"> and replace with:
 *   <img src="/images/your-photo.jpg" alt="description" className="has-img-real" />
 * The .has-img-slot wrapper and .has-img-label below can remain unchanged.
 */

const IMAGE_SLOTS = [
  { label: 'Team photo',      slot: 'team'    },
  { label: 'Project session', slot: 'project' },
  { label: 'Client workshop', slot: 'studio'  },
];

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

function ImgSlot({ label, slot }) {
  return (
    <div className="has-img-slot fade-up" data-slot={slot}>
      {/* Replace the div below with <img src="..." alt="..." className="has-img-real" /> */}
      <div className="has-img-placeholder" aria-hidden="true">
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
          <rect x="1" y="1" width="26" height="22" rx="3" stroke="#1478A8" strokeWidth="1.3" opacity="0.45"/>
          <circle cx="8" cy="8" r="2.5" stroke="#1478A8" strokeWidth="1.2" opacity="0.55"/>
          <path d="M3 19 L9 13 L13.5 17 L17.5 12 L25 19"
            stroke="#1478A8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
        </svg>
      </div>
      <span className="has-img-label">{label}</span>
    </div>
  );
}

export default function HomepageAboutSection() {
  return (
    <div className="has-wrap">

      {/* Heading row */}
      <div className="has-header fade-up">
        <div className="section-label">About Montas</div>
        <h2>Strategy, production and execution — under one roof</h2>
      </div>

      {/* Two-column: copy left, image placeholders right */}
      <div className="has-main">
        <div className="has-copy fade-up">
          <p>Montas helps businesses turn unclear market-entry plans into websites, campaigns and content systems that are clear, measurable and built for Southeast Asian buyer behaviour.</p>
          <p>Strategy, creative production, SEO, paid media and analytics — handled by the same team, without disconnected handoffs.</p>
          <Link to="/about" className="has-about-link">Learn more about Montas →</Link>
        </div>
        <div className="has-images">
          {IMAGE_SLOTS.map((s) => <ImgSlot key={s.slot} label={s.label} slot={s.slot} />)}
        </div>
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
