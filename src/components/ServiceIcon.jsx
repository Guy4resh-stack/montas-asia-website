/**
 * ServiceIcon — consistent stroke-based SVG icons, one per service.
 * 22×22 viewBox, single accent stroke colour, no fills except small dots.
 * Sized to sit inside the existing 42×42 .service-icon container.
 */

const STROKE = 'var(--green-accent)';

function IconBase({ children, label }) {
  return (
    <svg
      width="22" height="22" viewBox="0 0 22 22"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label={label}
    >
      {children}
    </svg>
  );
}

/* 1 — Landing pages & websites: browser window + CTA + direction arrow */
function LandingPagesIcon() {
  return (
    <IconBase label="Landing pages and websites">
      <rect x="2" y="3.5" width="18" height="14" rx="1.6" stroke={STROKE} strokeWidth="1.3" />
      <line x1="2" y1="7" x2="20" y2="7" stroke={STROKE} strokeWidth="1.3" />
      <circle cx="4.4" cy="5.25" r="0.6" fill={STROKE} />
      <rect x="4.5" y="9.5" width="7" height="2" rx="0.5" stroke={STROKE} strokeWidth="1.1" />
      <rect x="4.5" y="13" width="5" height="2.2" rx="0.6" fill={STROKE} opacity="0.18" stroke={STROKE} strokeWidth="1" />
      <path d="M14 12.5 L17 14.1 L14 15.7" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

/* 2 — SEO & local search: magnifying glass + map pin */
function SeoIcon() {
  return (
    <IconBase label="SEO and local search">
      <circle cx="9.2" cy="9.2" r="5.4" stroke={STROKE} strokeWidth="1.3" />
      <line x1="13.1" y1="13.1" x2="17.5" y2="17.5" stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="6.8" y1="9.2" x2="11.6" y2="9.2" stroke={STROKE} strokeWidth="1" opacity="0.55" />
      <line x1="6.8" y1="11.2" x2="10.4" y2="11.2" stroke={STROKE} strokeWidth="1" opacity="0.55" />
      <line x1="6.8" y1="7.2" x2="11.2" y2="7.2" stroke={STROKE} strokeWidth="1" opacity="0.55" />
    </IconBase>
  );
}

/* 3 — Paid advertising & lead generation: arrows converging into a node */
function PaidAdsIcon() {
  return (
    <IconBase label="Paid advertising and lead generation">
      <circle cx="16.2" cy="11" r="2.1" stroke={STROKE} strokeWidth="1.3" />
      <circle cx="16.2" cy="11" r="0.7" fill={STROKE} />
      <path d="M2.5 4 L13 10" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2.5 11 L13 11" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2.5 18 L13 12" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10.6 8.4 L13 10 L11.6 11.8" stroke={STROKE} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </IconBase>
  );
}

/* 4 — SMM & content systems: mini calendar / content grid */
function SmmIcon() {
  return (
    <IconBase label="SMM and content systems">
      <rect x="2.5" y="4" width="17" height="15" rx="1.6" stroke={STROKE} strokeWidth="1.3" />
      <line x1="2.5" y1="8" x2="19.5" y2="8" stroke={STROKE} strokeWidth="1.2" />
      <line x1="6.5" y1="2.3" x2="6.5" y2="5.5" stroke={STROKE} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="15.5" y1="2.3" x2="15.5" y2="5.5" stroke={STROKE} strokeWidth="1.3" strokeLinecap="round" />
      <rect x="5" y="10.5" width="3.4" height="3.4" rx="0.6" fill={STROKE} opacity="0.18" stroke={STROKE} strokeWidth="0.9" />
      <rect x="9.8" y="10.5" width="3.4" height="3.4" rx="0.6" stroke={STROKE} strokeWidth="0.9" />
      <rect x="14.6" y="10.5" width="3.4" height="3.4" rx="0.6" fill={STROKE} opacity="0.18" stroke={STROKE} strokeWidth="0.9" />
    </IconBase>
  );
}

/* 5 — Analytics & reporting: line chart in dashboard panel */
function AnalyticsIcon() {
  return (
    <IconBase label="Analytics and reporting">
      <rect x="2.5" y="3" width="17" height="16" rx="1.6" stroke={STROKE} strokeWidth="1.3" />
      <polyline points="5,14.5 8.3,10.8 11,12.6 14,7.8 17,9.6"
        stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="8.3" cy="10.8" r="0.9" fill={STROKE} />
      <circle cx="14" cy="7.8" r="0.9" fill={STROKE} />
      <line x1="5" y1="16.3" x2="17" y2="16.3" stroke={STROKE} strokeWidth="1" opacity="0.4" />
    </IconBase>
  );
}

/* 6 — Market research & competitor analysis: positioning / radar grid */
function MarketResearchIcon() {
  return (
    <IconBase label="Market research and competitor analysis">
      <circle cx="11" cy="11" r="7.6" stroke={STROKE} strokeWidth="1.1" opacity="0.5" />
      <circle cx="11" cy="11" r="4.6" stroke={STROKE} strokeWidth="1.1" opacity="0.7" />
      <line x1="11" y1="3.4" x2="11" y2="18.6" stroke={STROKE} strokeWidth="0.9" opacity="0.4" />
      <line x1="3.4" y1="11" x2="18.6" y2="11" stroke={STROKE} strokeWidth="0.9" opacity="0.4" />
      <circle cx="14.2" cy="7.6" r="1.3" stroke={STROKE} strokeWidth="1" />
      <circle cx="8" cy="14.2" r="1.3" stroke={STROKE} strokeWidth="1" />
      <circle cx="11" cy="11" r="1.6" fill={STROKE} />
    </IconBase>
  );
}

/* 7 — AI-assisted marketing production: workflow nodes with human review point */
function AiProductionIcon() {
  return (
    <IconBase label="AI-assisted marketing production">
      <circle cx="3.6" cy="11" r="1.8" stroke={STROKE} strokeWidth="1.2" />
      <rect x="8.6" y="6.6" width="5.4" height="5.4" rx="1.2" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="18.2" cy="11" r="1.8" stroke={STROKE} strokeWidth="1.2" />
      <line x1="5.4" y1="11" x2="8.6" y2="11" stroke={STROKE} strokeWidth="1.1" />
      <line x1="14" y1="9.6" x2="16.4" y2="10.5" stroke={STROKE} strokeWidth="1.1" />
      {/* human review check mark, offset above */}
      <path d="M9.6 16.4 L10.6 17.4 L13 14.6" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="11.3" y1="12" x2="11.3" y2="14" stroke={STROKE} strokeWidth="1" opacity="0.5" />
    </IconBase>
  );
}

const ICONS = {
  'landing-pages-websites':    LandingPagesIcon,
  'seo-local-search':          SeoIcon,
  'paid-advertising-lead-gen': PaidAdsIcon,
  'smm-content-systems':       SmmIcon,
  'analytics-reporting':       AnalyticsIcon,
  'market-research':           MarketResearchIcon,
  'ai-assisted-production':    AiProductionIcon,
};

export default function ServiceIcon({ serviceId }) {
  const Icon = ICONS[serviceId];
  if (!Icon) return null;
  return <Icon />;
}
