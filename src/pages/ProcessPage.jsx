import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ProcessPageVisual from '../components/ProcessPageVisual.jsx';

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

const STEPS = [
  {
    n: '01',
    title: 'Brief and market context',
    desc: 'Every project starts with understanding the business — not the design brief. We need to know the offer, the target audience, the local competitive landscape, and what success looks like in measurable terms. For businesses entering a new market, this includes a review of how buyers in that market search, decide and make contact.',
    links: [
      { label: 'Market research & competitor analysis', to: '/services/market-research' },
    ],
  },
  {
    n: '02',
    title: 'Offer and positioning',
    desc: 'Before any page is designed, the offer needs to be clear. What is being sold, to whom, at what price point, and why should a buyer in Thailand or Southeast Asia choose this over available alternatives? This step often surfaces gaps between how a business describes itself and what local buyers actually respond to.',
    links: [],
  },
  {
    n: '03',
    title: 'Landing page and website structure',
    desc: 'With the offer and audience defined, we structure the page or site. This means deciding the message hierarchy — what appears first, what proof elements are needed, what the call to action is and where it appears. We wireframe before we design so that copy and structure decisions are made deliberately, not as a by-product of visual choices.',
    links: [
      { label: 'Landing pages & websites', to: '/services/landing-pages-websites' },
    ],
  },
  {
    n: '04',
    title: 'Design and development',
    desc: 'The build follows the structure. We work fast — most landing pages and small sites are delivered within two to three weeks of scope confirmation. Mobile performance is treated as a primary requirement, not a post-launch consideration. Every build includes basic SEO structure: clean HTML, meta titles, descriptions and image optimisation.',
    links: [
      { label: 'SEO-ready setup & local search', to: '/services/seo-local-search' },
    ],
  },
  {
    n: '05',
    title: 'Launch and analytics setup',
    desc: 'Before traffic starts, tracking needs to be in place. This means GA4, Google Tag Manager, Meta Pixel (where relevant), LINE Tag (where relevant) and conversion event tracking for every key action: form submissions, phone clicks, LINE button clicks, WhatsApp contacts and booking completions. Without this, the first weeks of traffic produce no usable data.',
    links: [
      { label: 'Analytics & reporting', to: '/services/analytics-reporting' },
    ],
  },
  {
    n: '06',
    title: 'SEO, campaign and content iteration',
    desc: 'After launch, the work shifts to driving traffic and improving conversion. For organic search, this means building out supporting content, fixing technical issues as they are identified and monitoring rankings. For paid campaigns, this means weekly spend reviews, creative refreshes and audience refinement. For social, this means a consistent content calendar reviewed monthly.',
    links: [
      { label: 'Paid advertising & lead generation', to: '/services/paid-advertising-lead-gen' },
      { label: 'SMM & content systems', to: '/services/smm-content-systems' },
    ],
  },
  {
    n: '07',
    title: 'Reporting and growth improvements',
    desc: 'Monthly reporting connects the data to decisions. We present a plain-language summary of what happened, what it cost, what it produced and what should change. Over time, this creates a feedback loop: each month of data makes the next month\'s decisions more accurate. This is how campaigns improve, pages get tested and budgets shift toward what works.',
    links: [
      { label: 'Analytics & reporting', to: '/services/analytics-reporting' },
    ],
  },
];

export default function ProcessPage() {
  useFadeUp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="How Montas Builds Digital Growth Systems | Montas"
        description="A clear, structured process for building digital marketing systems in Southeast Asian markets. From brief and research through to reporting and monthly optimisation."
      />

      <div className="detail-breadcrumb-bar">
        <div className="container">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Process' },
          ]} />
        </div>
      </div>

      <section className="inner-hero">
        <div className="container">
          <div className="inner-hero-grid">
            <div className="fade-up">
              <div className="section-label">How we work</div>
              <h1>Process</h1>
              <p className="hero-sub">
                Structured from day one. Clear deliverables at each stage. No scope drift, no ambiguous handoffs.
              </p>
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
            </div>
            <div className="inner-hero-visual fade-up">
              <ProcessPageVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="detail-section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="process-detail-list">
            {STEPS.map((step, i) => (
              <div key={step.n} className="process-detail-item fade-up">
                <div className="process-detail-num">{step.n}</div>
                <div className="process-detail-body">
                  <h2 className="process-detail-title">{step.title}</h2>
                  <p className="process-detail-desc">{step.desc}</p>
                  {step.links.length > 0 && (
                    <div className="process-detail-links">
                      {step.links.map(l => (
                        <Link key={l.to} to={l.to} className="process-detail-link">
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* What this means for you */}
      <section className="detail-section">
        <div className="container">
          <div className="detail-two-col fade-up">
            <div>
              <div className="section-label">In practice</div>
              <h2>What this means for your business</h2>
            </div>
            <div className="detail-prose">
              <p>Most small and medium businesses entering Southeast Asian markets do not have months to experiment. The process above is designed to compress the time between "we need a digital presence" and "we are generating enquiries" — while leaving a proper data foundation in place so that the first round of results informs the second.</p>
              <p style={{ marginTop: '1.2rem' }}>The process is also designed to be transparent. At each stage, there is a clear deliverable and a clear next step. There are no ambiguous phases where work is happening but you cannot see it.</p>
              <p style={{ marginTop: '1.2rem' }}>Not every project requires all seven steps from the start. Some businesses already have a working website and need only campaigns and analytics. Others are building from zero. We scope each engagement based on where the business actually is, not a fixed package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-glow" />
          <div className="cta-inner fade-up">
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Get started</div>
            <h2>Ready to begin?</h2>
            <p>Tell us where you are and what you need. We will come back with a clear scope based on your actual situation.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="hero-cta-primary">Start a project</Link>
              <Link to="/services" className="hero-cta-secondary">View services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
