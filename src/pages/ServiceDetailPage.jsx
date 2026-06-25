import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import RelatedLinks from '../components/RelatedLinks.jsx';
import { getServicesByIds } from '../data/services.js';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function ServiceDetailPage({ service }) {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, [service.id]);

  const related = getServicesByIds(service.relatedIds);

  return (
    <>
      <SEO
        title={`${service.title} for Asian Markets | Montas`}
        description={service.shortDesc}
      />

      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]} />
        </div>
      </div>

      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner fade-up">
            <div className="detail-tag">{service.tag}</div>
            <h1>{service.title}</h1>
            <p className="detail-positioning">{service.positioning}</p>
            <Link to="/contact" className="hero-cta-primary">Discuss this service</Link>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">What this service solves</div>
              <h2>The problem</h2>
            </div>
            <div className="detail-prose">
              <p>{service.problem}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="detail-section">
        <div className="container">
          <div className="section-label fade-up">What Montas does</div>
          <h2 className="fade-up" style={{ marginBottom: '2.5rem' }}>Our approach</h2>
          <div className="detail-cards-grid">
            {service.whatWeDo.map((item, i) => (
              <div key={i} className="detail-card fade-up">
                <div className="detail-card-label">{item.label}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="detail-section">
        <div className="container">
          <div className="detail-split-grid">
            <div className="fade-up">
              <div className="section-label">Best for</div>
              <h3 style={{ marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Who this fits</h3>
              <ul className="detail-list">
                {service.bestFor.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="fade-up">
              <div className="section-label">Deliverables</div>
              <h3 style={{ marginBottom: '1.2rem', color: 'var(--text-primary)' }}>What you receive</h3>
              <ul className="detail-list deliverables">
                {service.deliverables.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="detail-section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">How it connects</div>
              <h2>How this drives growth</h2>
            </div>
            <div className="detail-prose">
              <p>{service.growthConnection}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="detail-section">
        <div className="container">
          <RelatedLinks items={related} />
        </div>
      </section>

      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Ready to start</div>
            <h2>Discuss this service with us</h2>
            <p>Tell us about your business and market. We will come back with a clear recommendation and realistic scope.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
              <Link to="/services" className="hero-cta-secondary">All services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
