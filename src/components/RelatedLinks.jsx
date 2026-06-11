import { Link } from 'react-router-dom';

export default function RelatedLinks({ items, label = 'Related services' }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="related-links">
      <div className="section-label">{label}</div>
      <div className="related-grid">
        {items.map((item) => (
          <Link key={item.id} to={item.slug} className="related-card">
            <span className="related-icon">{item.icon}</span>
            <span className="related-title">{item.title}</span>
            <span className="related-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
