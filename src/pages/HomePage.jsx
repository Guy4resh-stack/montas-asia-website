import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import GrowthSystemVisual from '../components/GrowthSystemVisual.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import ProblemCarousel from '../components/ProblemCarousel.jsx';
import CaseStudiesCarousel from '../components/CaseStudiesCarousel.jsx';
import ProcessFlow from '../components/ProcessFlow.jsx';
import { services } from '../data/services.js';
import { cases } from '../data/cases.js';

function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  useFadeUp();

  return (
    <>
      <SEO
        title="Montas — Digital Marketing Studio for Asian Markets"
        description="Montas helps businesses entering Southeast Asia build conversion-ready websites, run paid campaigns, improve SEO and turn vague marketing goals into measurable growth systems."
      />

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1 className="hero-headline">
                Growth systems for<br /><em>Asian markets</em>
              </h1>
              <p className="hero-sub">
                Montas helps businesses entering Southeast Asia build conversion-ready websites, run paid campaigns, set up SEO-ready structures and measure results with systems that work.
              </p>
              <div className="hero-ctas">
                <Link to="/contact" className="hero-cta-primary">Start a project</Link>
                <Link to="/services" className="hero-cta-secondary">View services</Link>
              </div>
              <div className="hero-credibility">
                Landing pages · SEO · Paid media · Analytics · Market entry support
              </div>
            </div>
            <div className="hero-visual">
              <GrowthSystemVisual />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">The problem</div>
            <h2>Most market entries start with the wrong digital foundation</h2>
            <p>Businesses entering Southeast Asia often build for the wrong audience. Montas turns each of these problems into a clear digital growth system.</p>
          </div>
          <div className="fade-up">
            <ProblemCarousel />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">What we do</div>
            <h2>Services</h2>
            <p>Each service is designed as a functional piece of a growth system — not a standalone deliverable.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <Link key={s.id} to={s.slug} className="service-card">
                <div className="service-icon"><ServiceIcon serviceId={s.id} /></div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="service-tag">{s.tag}</span>
                <span className="card-learn-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CASES */}
      <section id="cases" className="section">
        <div className="container">
          <div className="cases-intro fade-up">
            <div className="section-head">
              <div className="section-label">Case studies</div>
              <h2>Work</h2>
              <p>A look at how Montas approaches real project types across Southeast Asia. Cases below are concept and sample work prepared to demonstrate the approach — clearly labelled, with no invented results.</p>
            </div>
          </div>
          <CaseStudiesCarousel cases={cases} />
        </div>
      </section>

      <div className="divider" />

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">How we work</div>
            <h2>Process</h2>
            <p>A connected, sequential workflow. Each stage leads directly into the next — no scope drift, no disconnected handoffs.</p>
          </div>
          <ProcessFlow />
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text fade-up">
              <div className="section-label">About Montas</div>
              <h2>Strategy, production and execution — under one roof</h2>
              <p style={{ marginTop: '1.5rem' }}>Montas is a marketing studio, not a full-service agency trying to do everything. We focus on what moves revenue for businesses in Southeast Asian markets: clear digital presence, functional lead generation, and campaigns that improve over time.</p>
              <p>We combine strategic thinking with hands-on production. That means one team handles the brief, the build and the results — no account managers playing telephone between client and a junior team you never meet.</p>
              <p>Our work is grounded in the reality of how people search, decide and contact businesses in Thailand and the surrounding region: mobile-first, platform-driven, trust-sensitive. We build for that reality, not a Western default.</p>
            </div>
            <div className="about-pillars fade-up">
              {[
                { title: 'Strategy first', desc: 'Every project starts with understanding your business model, competitive landscape and customer journey — before any design begins.' },
                { title: 'Production speed', desc: 'Fast delivery without cutting corners. We use AI tools, proven frameworks and clear scopes to reduce time without reducing quality.' },
                { title: 'Measurable output', desc: 'Landing pages, campaigns and content are judged by what they produce: leads, conversions, rankings, bookings. Not aesthetics alone.' },
                { title: 'Regional knowledge', desc: 'We understand Thai and Southeast Asian digital platforms, buyer behaviour, seasonal patterns and how local audiences search and decide.' },
              ].map(p => (
                <div key={p.title} className="pillar">
                  <div className="pillar-title">{p.title}</div>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHY ASIA */}
      <section id="why-asia" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">Why now</div>
            <h2>Why Southeast Asia demands a different approach</h2>
            <p>Southeast Asia is not behind digitally — it simply follows different digital behaviours, platforms and trust signals. The tools and buyer journeys don't map onto Western defaults.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: '◉', title: 'Mobile-first, always', desc: 'Over 80% of web traffic in Thailand comes from mobile. A slow or poorly structured mobile page doesn\'t just underperform — it doesn\'t compete at all.' },
              { icon: '◎', title: 'Platforms beyond Google', desc: 'LINE, Facebook, TikTok and Google Maps are the real discovery channels for local businesses. Presence without the right platform mix is invisible presence.' },
              { icon: '◈', title: 'Trust before contact', desc: 'Thai and regional buyers research extensively before reaching out. Reviews, social proof, clear pricing and detailed service pages are the difference between inquiry and bounce.' },
              { icon: '▣', title: 'Competitive local markets', desc: 'In categories like real estate, wellness and education, the local SEO competition is already sophisticated. Entering with a weak digital footprint means starting at a structural disadvantage.' },
            ].map(w => (
              <div key={w.title} className="why-card fade-up">
                <span className="why-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section id="cta" className="section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Let's work together</div>
            <h2>Ready to build something that works?</h2>
            <p>Tell us about your business, your market and where you're stuck. We'll respond with a clear proposal — no sales call required to get started.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Discuss a project</Link>
              <Link to="/services" className="hero-cta-secondary">See what we offer</Link>
            </div>
            <div className="cta-contact">
              Email: <a href="mailto:hello@montas.co">hello@montas.co</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
