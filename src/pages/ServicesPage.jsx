import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
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

      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner fade-up">
            <div className="section-label">What we do</div>
            <h1>Digital marketing services for Asian markets</h1>
            <p className="detail-positioning">
              Montas helps businesses entering Southeast Asia build practical growth systems: conversion-ready landing pages, local SEO, paid advertising, content and analytics — all structured to work together rather than as isolated deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Context strip */}
      <div className="container">
        <div className="services-context-strip fade-up">
          <div className="services-context-item">
            <span className="services-context-icon">◉</span>
            <span>Strategy and production by the same team</span>
          </div>
          <div className="services-context-item">
            <span className="services-context-icon">◎</span>
            <span>Built for mobile-first Southeast Asian markets</span>
          </div>
          <div className="services-context-item">
            <span className="services-context-icon">◈</span>
            <span>Every service scoped to your actual stage</span>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="detail-section">
        <div className="container">
          <div className="services-index-grid">
            {services.map((s) => (
              <Link key={s.id} to={s.slug} className="service-index-card fade-up">
                <div className="sic-top">
                  <div className="service-icon">{s.icon}</div>
                  <span className="service-tag">{s.tag}</span>
                </div>
                <h2 className="sic-title">{s.title}</h2>
                <p className="sic-desc">{s.shortDesc}</p>
                <span className="sic-cta">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How they connect */}
      <div className="divider" />
      <section className="detail-section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">How it works</div>
              <h2>Services as a system</h2>
            </div>
            <div className="detail-prose">
              <p>Each service above can be used independently, but they are designed to compound. A landing page converts better when traffic comes from a targeted paid campaign. A paid campaign spends less when the landing page is well-structured. Both perform better when analytics are in place to identify what is working and what is not.</p>
              <p style={{ marginTop: '1rem' }}>Not every business needs every service from the start. We scope each engagement based on where you actually are — whether that is a first landing page for a new market, or optimisation of an existing campaign that is not converting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Ready to start</div>
            <h2>Not sure which service fits?</h2>
            <p>Tell us about your business and market. We will recommend the right starting point and scope it clearly — no obligation to proceed.</p>
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
