import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import HeroVisual from '../components/HeroVisual.jsx';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function AboutPage() {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="About Montas | Marketing Studio for Asian Markets"
        description="Montas is a practical marketing studio helping businesses in Thailand and Southeast Asia build digital presence, generate leads and grow through clear, measurable systems."
      />

      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]} />
        </div>
      </div>

      <section className="inner-hero">
        <div className="container">
          <div className="inner-hero-grid">
            <div className="fade-up">
              <div className="section-label">About Montas</div>
              <h1>A marketing studio built for Asian-market growth</h1>
              <p className="hero-sub">
                Montas combines strategy, creative production, digital marketing and practical execution — focused on what actually moves revenue for businesses in Southeast Asia.
              </p>
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
            </div>
            <div className="inner-hero-visual fade-up">
              <HeroVisual variant="about" />
            </div>
          </div>
        </div>
      </section>

      {/* What we are */}
      <section className="detail-section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">What we are</div>
              <h2>A studio, not a full-service agency</h2>
            </div>
            <div className="detail-prose">
              <p>Montas is a marketing studio. That distinction matters. We do not try to cover every discipline for every type of client. We focus on a specific problem: helping businesses build a functional digital presence in Southeast Asian markets that generates enquiries, supports growth and can be measured.</p>
              <p style={{ marginTop: '1.2rem' }}>The work is practical. Every project starts with understanding the business model, the local competitive landscape and the specific conversion problem. Strategy, production and execution are handled by the same team — there are no layers of account management between the client and the people doing the work.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* What we do */}
      <section className="detail-section">
        <div className="container">
          <div className="section-label fade-up">What we do</div>
          <h2 className="fade-up" style={{ marginBottom: '2.5rem' }}>The work</h2>
          <div className="detail-cards-grid">
            {[
              { label: 'Landing pages & websites', desc: 'Conversion-focused builds designed for mobile-first, trust-sensitive Asian markets. Fast to load, clear in message, built around a single business goal.' },
              { label: 'SEO & local search', desc: 'Technical SEO, on-page structure, Google Business optimisation and local visibility in Thai and English. Getting found before your competitors do.' },
              { label: 'Paid advertising', desc: 'Google Ads, Meta and LINE campaigns with proper tracking and attribution. Every spend connected to a measurable outcome.' },
              { label: 'SMM & content systems', desc: 'Sustainable social media presence for Instagram, Facebook and LINE. Built to maintain consistency, not just produce occasional spikes.' },
              { label: 'Analytics & reporting', desc: 'GA4, Tag Manager and clear dashboards so you know where leads come from, what converts and what needs fixing.' },
              { label: 'Market research', desc: 'Competitor digital audit, search intent mapping and positioning analysis before spending on campaigns.' },
              { label: 'AI-assisted production', desc: 'Faster content, copy, translations and ad creative testing using AI tools integrated into the production workflow.' },
            ].map((item, i) => (
              <div key={i} className="detail-card fade-up">
                <div className="detail-card-label">{item.label}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }} className="fade-up">
            <Link to="/services" className="hero-cta-secondary">See all services →</Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How we work */}
      <section className="detail-section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">How we work</div>
              <h2>The approach</h2>
            </div>
            <div className="detail-prose">
              <p>Every engagement starts with a clear brief. We do not begin design or production until we understand the offer, the target audience and the specific action we are trying to drive. This reduces wasted work and keeps the scope realistic.</p>
              <p style={{ marginTop: '1.2rem' }}>We work fast. Speed matters in market entry situations where a competitor may already have months of SEO lead time. But we do not cut corners on the things that determine whether a page converts: message clarity, mobile performance and trust signals.</p>
              <p style={{ marginTop: '1.2rem' }}>After launch, the work continues. Campaigns are reviewed regularly, pages are tested, and reporting is structured so that each month of data informs the next decision.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Why Southeast Asia */}
      <section className="detail-section">
        <div className="container">
          <div className="section-label fade-up">Why this region</div>
          <h2 className="fade-up" style={{ marginBottom: '2rem' }}>Southeast Asia requires a different approach</h2>
          <div className="about-pillars fade-up" style={{ maxWidth: '680px' }}>
            {[
              { title: 'Mobile-first users', desc: 'Most web traffic in Thailand and neighbouring markets arrives on mobile. Desktop-first design is a structural disadvantage.' },
              { title: 'Platform diversity', desc: 'LINE, Facebook, Google Maps and TikTok serve different roles in the local buyer journey. A single-channel approach leaves most of the audience unreached.' },
              { title: 'Trust-sensitive buying', desc: 'Buyers in the region research extensively before making contact. Social proof, clear pricing and detailed content are not optional — they are the deciding factors.' },
              { title: 'Local SEO competition', desc: 'In categories like real estate, wellness and education, competitors have years of established search presence. Entering with a weak digital footprint means starting at a disadvantage.' },
            ].map(p => (
              <div key={p.title} className="pillar">
                <div className="pillar-title">{p.title}</div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Work with us</div>
            <h2>Ready to discuss a project?</h2>
            <p>Tell us about your business and market. We will come back with a realistic assessment and clear next steps.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
              <Link to="/process" className="hero-cta-secondary">See how we work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
