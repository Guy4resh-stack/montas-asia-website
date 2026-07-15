import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { getCaseStudy } from '../data/caseStudies.js';

/**
 * CaseStudyPage — reusable premium editorial case-study template.
 * Reads content from caseStudies.js by slug. This is the first of six
 * planned internal case pages (Supreme Yachts first). Structure is
 * data-driven so the same component powers every future case.
 */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.cs-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('cs-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function CaseStudyPage({ slug }) {
  const data = getCaseStudy(slug);
  const sourcesRef = useRef(null);
  useReveal();

  if (!data) {
    return (
      <main className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h1>Case study not found</h1>
        <Link to="/cases" className="hero-cta-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          Back to cases
        </Link>
      </main>
    );
  }

  const {
    seo, hero, heroProof, client, challenge, approach, brand,
    smm, pr, production, results, impact, sea, testimonial,
    services, sources, finalCta,
  } = data;

  const scrollToSources = (e) => {
    e.preventDefault();
    sourcesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const canonical = `https://montas-asia.vercel.app${seo.canonicalPath}`;

  return (
    <>
      <SEO title={seo.title} description={seo.description} />

      {/* Structured data: WebPage + BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        description: seo.description,
        url: canonical,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://montas-asia.vercel.app/' },
          { '@type': 'ListItem', position: 2, name: 'Cases', item: 'https://montas-asia.vercel.app/cases' },
          { '@type': 'ListItem', position: 3, name: 'Supreme Yachts', item: canonical },
        ],
      }) }} />

      <main className="cs-page">
        <article>

          {/* Breadcrumbs */}
          <div className="container" style={{ paddingTop: '6.5rem' }}>
            <Breadcrumbs crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Cases', href: '/cases' },
              { label: 'Supreme Yachts', href: '/cases/supreme-yachts' },
            ]} />
          </div>

          {/* Hero */}
          <section className="cs-hero container">
            <div className="cs-hero-text cs-reveal">
              <div className="cs-label">{hero.label}</div>
              <h1 className="cs-h1">{hero.h1}</h1>
              <p className="cs-hero-intro">{hero.intro}</p>
              <div className="cs-tags">
                {hero.serviceTags.map((t) => <span key={t} className="cs-tag">{t}</span>)}
              </div>
              <div className="cs-hero-cta">
                <Link to="/contact" className="hero-cta-primary">Discuss a similar project</Link>
                <a href="#sources" onClick={scrollToSources} className="hero-cta-secondary">View original case materials ↗</a>
              </div>
            </div>
            <div className="cs-hero-visual cs-reveal">
              <img src={hero.image} alt={hero.imageAlt} className="cs-hero-img" width="800" height="600" />
            </div>
          </section>

          {/* Hero proof strip */}
          <section className="container">
            <div className="cs-proof-strip cs-reveal">
              {heroProof.map((p) => (
                <div key={p.label} className="cs-proof">
                  <span className="cs-proof-value">{p.value}</span>
                  <span className="cs-proof-label">{p.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Client overview */}
          <section className="cs-section container">
            <div className="cs-two-col">
              <div className="cs-reveal">
                <div className="cs-label">{client.label}</div>
                <h2 className="cs-h2">{client.heading}</h2>
                {client.body.map((p, i) => <p key={i} className="cs-body">{p}</p>)}
              </div>
              <div className="cs-overview-panel cs-reveal">
                {client.overview.map((o) => (
                  <div key={o.term} className="cs-overview-row">
                    <span className="cs-overview-term">{o.term}</span>
                    <span className="cs-overview-value">{o.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">{challenge.label}</div>
              <h2 className="cs-h2">{challenge.heading}</h2>
              <p className="cs-body cs-body--wide">{challenge.intro}</p>
            </div>
            <div className="cs-card-grid cs-card-grid--4">
              {challenge.cards.map((c) => (
                <div key={c.title} className="cs-card cs-reveal">
                  <h3 className="cs-card-title">{c.title}</h3>
                  <p className="cs-card-text">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Approach — dark panel */}
          <section className="cs-dark">
            <div className="container">
              <div className="cs-reveal">
                <div className="cs-label cs-label--light">{approach.label}</div>
                <h2 className="cs-h2 cs-h2--light">{approach.heading}</h2>
                <p className="cs-body cs-body--wide cs-body--light">{approach.intro}</p>
              </div>
              <div className="cs-pillars">
                {approach.pillars.map((p) => (
                  <div key={p.n} className="cs-pillar cs-reveal">
                    <span className="cs-pillar-n">{p.n}</span>
                    <span className="cs-pillar-title">{p.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Brand */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <h2 className="cs-h2">{brand.heading}</h2>
              {brand.body.map((p, i) => <p key={i} className="cs-body cs-body--wide">{p}</p>)}
              <ul className="cs-deliverables">
                {brand.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </section>

          {/* SMM */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">{smm.label}</div>
              <h2 className="cs-h2">{smm.heading}</h2>
              {smm.body.map((p, i) => <p key={i} className="cs-body cs-body--wide">{p}</p>)}
            </div>
            <div className="cs-proof-strip cs-proof-strip--inline cs-reveal">
              {smm.proof.map((p) => (
                <div key={p.label} className="cs-proof">
                  <span className="cs-proof-value">{p.value}</span>
                  <span className="cs-proof-label">{p.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* PR */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">{pr.label}</div>
              <h2 className="cs-h2">{pr.heading}</h2>
              {pr.body.map((p, i) => <p key={i} className="cs-body cs-body--wide">{p}</p>)}
            </div>
            <div className="cs-proof-strip cs-proof-strip--inline cs-reveal">
              {pr.proof.map((p) => (
                <div key={p.label} className="cs-proof">
                  <span className="cs-proof-value">{p.value}</span>
                  <span className="cs-proof-label">{p.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Production + gallery */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">{production.label}</div>
              <h2 className="cs-h2">{production.heading}</h2>
              {production.body.map((p, i) => <p key={i} className="cs-body cs-body--wide">{p}</p>)}
              <ul className="cs-deliverables">
                {production.scope.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </section>
          <div className="cs-gallery">
            {production.gallery.map((g, i) => (
              <div key={i} className="cs-gallery-item cs-reveal">
                <img src={g.src} alt={g.alt} loading="lazy" className="cs-gallery-img" width="600" height="450" />
              </div>
            ))}
          </div>

          {/* Results */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">{results.label}</div>
              <h2 className="cs-h2">{results.heading}</h2>
            </div>
            <div className="cs-card-grid cs-card-grid--4">
              {results.main.map((r) => (
                <div key={r.value} className="cs-result-card cs-reveal">
                  <span className="cs-result-value">{r.value}</span>
                  <p className="cs-result-text">{r.text}</p>
                </div>
              ))}
            </div>
            <div className="cs-supporting cs-reveal">
              {results.supporting.map((s) => <span key={s} className="cs-support-chip">{s}</span>)}
            </div>
          </section>

          {/* Impact narrative — dark */}
          <section className="cs-dark">
            <div className="container cs-reveal">
              <h2 className="cs-h2 cs-h2--light cs-h2--center">{impact.heading}</h2>
              {impact.body.map((p, i) => <p key={i} className="cs-body cs-body--light cs-body--center">{p}</p>)}
            </div>
          </section>

          {/* SEA relevance */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">{sea.label}</div>
              <h2 className="cs-h2">{sea.heading}</h2>
              <p className="cs-body cs-body--wide">{sea.intro}</p>
            </div>
            <div className="cs-card-grid cs-card-grid--3">
              {sea.principles.map((p) => (
                <div key={p.title} className="cs-card cs-reveal">
                  <h3 className="cs-card-title">{p.title}</h3>
                  <p className="cs-card-text">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial (only if approved) */}
          {testimonial && (
            <section className="cs-section container">
              <blockquote className="cs-testimonial cs-reveal">
                <p>{testimonial.quote}</p>
                <cite>— {testimonial.attribution}</cite>
              </blockquote>
            </section>
          )}

          {/* Services used */}
          <section className="cs-section container">
            <div className="cs-reveal">
              <div className="cs-label">SERVICES USED</div>
              <div className="cs-services">
                {services.map((s) => (
                  s.to
                    ? <Link key={s.label} to={s.to} className="cs-service-chip cs-service-chip--link">{s.label}</Link>
                    : <span key={s.label} className="cs-service-chip">{s.label}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Original source materials */}
          <section id="sources" ref={sourcesRef} className="cs-section container">
            <div className="cs-reveal cs-sources">
              <h2 className="cs-sources-heading">Original Montas case materials</h2>
              <div className="cs-sources-links">
                {sources.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="cs-source-link">
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="cs-section container">
            <div className="cs-final-cta cs-reveal">
              <h2 className="cs-h2 cs-h2--center">{finalCta.heading}</h2>
              <p className="cs-body cs-body--center">{finalCta.body}</p>
              <div className="cs-final-buttons">
                <Link to="/contact" className="hero-cta-primary">Discuss your project</Link>
                <Link to="/services" className="hero-cta-secondary">Explore our services</Link>
              </div>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
