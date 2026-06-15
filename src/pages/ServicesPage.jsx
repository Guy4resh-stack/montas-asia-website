import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import HeroVisual from '../components/HeroVisual.jsx';
import { services } from '../data/services.js';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function ServicesPage() {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Digital Marketing Services for Asian Markets | Montas"
        description="Explore Montas services for businesses entering Southeast Asia: landing pages, SEO, local search, paid advertising, SMM, analytics and market research."
      />

      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
          ]} />
        </div>
      </div>

      {/* Two-column hero matching homepage style */}
      <section className="inner-hero">
        <div className="container">
          <div className="inner-hero-grid">
            <div className="fade-up">
              <div className="section-label">What we do</div>
              <h1>Digital marketing services for Asian markets</h1>
              <p className="hero-sub">
                Montas helps businesses entering Southeast Asia build practical growth systems: conversion-ready landing pages, local SEO, paid advertising, content and analytics — all structured to work together.
              </p>
              <div className="hero-ctas">
                <Link to="/contact" className="hero-cta-primary">Start a project</Link>
                <Link to="/process" className="hero-cta-secondary">How we work</Link>
              </div>
            </div>
            <div className="inner-hero-visual fade-up">
              <HeroVisual variant="services" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">All services</div>
            <p>Each service is a functional piece of a growth system — not a standalone deliverable.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link key={s.id} to={s.slug} className="service-card fade-up">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="service-tag">{s.tag}</span>
                <span className="card-learn-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How they connect */}
      <div className="divider" />
      <section className="section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">How it works</div>
              <h2>Services as a system</h2>
            </div>
            <div className="detail-prose">
              <p>Each service can be used independently, but they are designed to compound. A landing page converts better when traffic comes from a targeted paid campaign. A paid campaign spends less when the landing page is well-structured. Both perform better when analytics are in place to identify what is working and what is not.</p>
              <p style={{ marginTop: '1rem' }}>Not every business needs every service from the start. We scope each engagement based on where you actually are — whether that is a first landing page for a new market, or optimisation of an existing campaign that is not converting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Ready to start</div>
            <h2>Not sure which service fits?</h2>
            <p>Tell us about your business and market. We will recommend the right starting point and scope it clearly.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Discuss a project</Link>
              <Link to="/process" className="hero-cta-secondary">How we work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
