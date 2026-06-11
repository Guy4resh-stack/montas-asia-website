import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { services } from '../data/services.js';
import { cases } from '../data/cases.js';

function CityCanvas() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initDots();
    }

    function initDots() {
      dotsRef.current = [];
      const cols = Math.floor(canvas.width / 22);
      const rows = Math.floor(canvas.height / 22);
      const cx = canvas.width / 2, cy = canvas.height / 2;
      const maxD = Math.sqrt(cx * cx + cy * cy);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const dx = (i / cols - 0.5) * canvas.width;
          const dy = (j / rows - 0.5) * canvas.height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          dotsRef.current.push({
            x: i * 22 + 11, y: j * 22 + 11,
            brightness: Math.max(0.02, 0.35 - (dist / maxD) * 0.3),
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.008 + Math.random() * 0.012,
            size: 0.8 + Math.random() * 1.2,
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach(d => {
        d.pulse += d.pulseSpeed;
        const f = d.brightness + Math.sin(d.pulse) * 0.08;
        const a = Math.max(0, Math.min(1, f));
        ctx.fillStyle = f > 0.28 ? `rgba(127,186,154,${a})` : `rgba(74,154,102,${a * 0.7})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      });
      frameRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  useFadeUp();

  // Drag-to-scroll cases
  const scrollRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 });
  const onMouseDown = e => { drag.current = { down: true, startX: e.pageX - scrollRef.current.offsetLeft, scrollLeft: scrollRef.current.scrollLeft }; };
  const onMouseUp = () => { drag.current.down = false; };
  const onMouseMove = e => {
    if (!drag.current.down) return;
    e.preventDefault();
    scrollRef.current.scrollLeft = drag.current.scrollLeft - (e.pageX - scrollRef.current.offsetLeft - drag.current.startX) * 1.5;
  };

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
              <div className="hero-eyebrow">Digital Marketing Studio</div>
              <h1 className="hero-headline">
                Growth systems for<br /><em>Asian markets</em>
              </h1>
              <p className="hero-sub">
                We help businesses entering Southeast Asia build conversion-ready websites, run paid campaigns, and turn unclear marketing plans into measurable systems that work.
              </p>
              <div className="hero-ctas">
                <a href="#cta" className="hero-cta-primary">Start a project</a>
                <a href="#services" className="hero-cta-secondary">View services</a>
              </div>
              <div className="hero-credibility">
                Landing pages · SEO · Paid media · Analytics · Market entry support
              </div>
            </div>
            <div className="hero-visual">
              <CityCanvas />
              <div className="hero-badge">
                <div className="hero-badge-label">Markets served</div>
                <div className="hero-badge-value">TH · SG · MY · ID · PH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section">
        <div className="container">
          <div className="problem-grid">
            <div className="fade-up">
              <div className="section-label">The problem</div>
              <h2>Most market entries start with the wrong digital foundation</h2>
              <ul className="problem-list">
                <li>Websites built for home markets that don't speak to local buyers</li>
                <li>Landing pages that generate clicks but not inquiries</li>
                <li>Ad budgets spent without proper tracking or attribution</li>
                <li>No local SEO presence when the competition already owns the search results</li>
                <li>Content that looks complete but doesn't convert mobile-first audiences</li>
                <li>No system to iterate: campaigns run, performance is unclear, nothing improves</li>
              </ul>
            </div>
            <div className="fade-up">
              <div className="problem-highlight">
                <p>Southeast Asia is not a single market. Thailand has different buyer behavior than Singapore or the Philippines. What works in London or New York rarely works unchanged in Bangkok. The fix isn't just translation — it's a ground-up rethink of your digital presence.</p>
              </div>
              <div className="problem-highlight" style={{ marginTop: '1rem', borderLeftColor: 'var(--green-accent)' }}>
                <p>Montas exists to close the gap between business ambition and local digital reality — fast, clearly, without wasted budget.</p>
              </div>
            </div>
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

      <div className="divider" />

      {/* CASES */}
      <section id="cases" className="section">
        <div className="container">
          <div className="cases-intro fade-up">
            <div className="section-head">
              <div className="section-label">Case studies</div>
              <h2>Work</h2>
              <p>Real projects in progress. Case data will be added as client approvals are confirmed.</p>
            </div>
          </div>
        </div>
        <div className="cases-outer">
          <div
            className="cases-scroll-wrapper"
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
          >
            <div className="cases-track">
              {cases.map(c => (
                <Link key={c.id} to={c.slug} className="case-card fade-up">
                  <div className="case-industry">{c.industry}</div>
                  <h3>{c.title}</h3>
                  <div className="case-body">
                    <div>
                      <div className="case-row-label">Problem</div>
                      <div className="case-row-val">{c.problem}</div>
                    </div>
                    <div>
                      <div className="case-row-label">What Montas did</div>
                      <div className="case-row-val">{c.whatWeDid}</div>
                    </div>
                  </div>
                  <div className="case-result">
                    ⬡ Result — <span className="case-placeholder">to be added after client approval</span>
                  </div>
                  <span className="card-learn-more" style={{ marginTop: '0.8rem' }}>View case template →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <div className="section-label">How we work</div>
            <h2>Process</h2>
            <p>Structured from day one. Clear deliverables at each stage. No scope drift.</p>
          </div>
          <div className="process-grid">
            {[
              { n: '01', title: 'Brief & business analysis', desc: 'We understand your market, offer, audience and goals before touching anything creative.' },
              { n: '02', title: 'Offer & page structure', desc: 'Wireframe the messaging flow: what you say, in what order, with what proof, to which audience.' },
              { n: '03', title: 'Design & development', desc: 'Fast, clean build. No unnecessary complexity. Every element earns its place.' },
              { n: '04', title: 'Launch & analytics setup', desc: 'GA4, Tag Manager, CRM, pixel tracking — everything live before traffic starts.' },
              { n: '05', title: 'SEO & campaign optimisation', desc: 'Paid campaigns and organic structure tuned based on actual data, not assumptions.' },
              { n: '06', title: 'Iteration & growth', desc: 'Monthly reviews, A/B tests, new content and campaign iterations. The system keeps improving.' },
            ].map(step => (
              <div key={step.n} className="process-step fade-up">
                <div className="process-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
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
            <p>The region is not underdigitalised — it's differently digitalised. The tools, platforms and behaviors don't match Western defaults.</p>
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
              <a href="mailto:hello@montas.co" className="hero-cta-primary">Discuss a project</a>
              <a href="#services" className="hero-cta-secondary">See what we offer</a>
            </div>
            <div className="cta-contact">
              Email: <a href="mailto:hello@montas.co">hello@montas.co</a>
              &nbsp;·&nbsp;LINE: <span>[add LINE ID]</span>
              &nbsp;·&nbsp;WhatsApp: <span>[add number]</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
