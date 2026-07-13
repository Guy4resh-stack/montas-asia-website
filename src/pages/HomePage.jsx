import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import GrowthSystemVisual from '../components/GrowthSystemVisual.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import ProblemCarousel from '../components/ProblemCarousel.jsx';
import CaseStudiesCarousel from '../components/CaseStudiesCarousel.jsx';
import HomepageProcessTimeline from '../components/HomepageProcessTimeline.jsx';
import HomepageAboutSection from '../components/HomepageAboutSection.jsx';
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
          <HomepageProcessTimeline />
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <HomepageAboutSection />
        </div>
      </section>

      <div className="divider" />

      {/* WHY ASIA */}
      <section id="why-asia" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">Why Southeast Asia</div>
            <h2>Growth depends on local digital behaviour</h2>
            <p>Southeast Asia is mobile-first, platform-fragmented and trust-sensitive. Growth requires pages, campaigns and content built for how buyers actually search, compare and enquire.</p>
          </div>
          <div className="why-grid">
            {[
              { n: '01', title: 'Mobile-first by default',  text: 'Slow or unclear mobile pages lose enquiries before the offer is understood.' },
              { n: '02', title: 'Search is local',          text: 'Buyers compare services through Google, maps, reviews and localised search intent.' },
              { n: '03', title: 'Trust signals matter',     text: 'Clear proof, FAQs, location context and simple contact paths reduce hesitation.' },
              { n: '04', title: 'Channels are fragmented',  text: 'Paid media, SEO, content and analytics need to work as one system.' },
            ].map(w => (
              <div key={w.title} className="why-card fade-up">
                <span className="why-card-num">{w.n}</span>
                <h3 className="why-card-title">{w.title}</h3>
                <p className="why-card-text">{w.text}</p>
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
