/**
 * ServiceHeroVisual — light, blue/cyan service-specific hero graphics for
 * individual service detail pages. Pure SVG + CSS animation, no
 * dependencies. Each variant keeps the original concept from the service
 * brief (browser window, search cards, funnel, calendar, dashboard,
 * positioning grid, AI pipeline) restyled into the white/blue palette.
 */

const C = {
  bg: '#FFFFFF',
  border: 'rgba(20,120,168,0.2)',
  borderHi: 'rgba(20,120,168,0.36)',
  accent: '#1478A8',
  accentLight: '#2FA0D6',
  text: '#0E1620',
  textSec: '#51606E',
  textDim: '#8B98A3',
  gold: '#8A7148',
  fillTint: 'rgba(20,120,168,0.06)',
};

function Grid({ w, h, id }) {
  return (
    <>
      <defs>
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(20,120,168,0.08)" />
        </pattern>
      </defs>
      <rect width={w} height={h} fill={`url(#${id})`} className="shv-shimmer" />
    </>
  );
}

function Tag({ x, y, text, accent = false }) {
  const w = text.length * 6 + 16;
  return (
    <g>
      <rect x={x} y={y - 11} width={w} height={18} rx="4"
        fill={accent ? 'rgba(20,120,168,0.08)' : '#FFFFFF'}
        stroke={accent ? C.borderHi : C.border} strokeWidth="0.8" />
      <text x={x + 8} y={y + 1}
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill={accent ? C.accent : C.textDim} letterSpacing="0.1em">
        {text.toUpperCase()}
      </text>
    </g>
  );
}

/* 1 — Landing pages: browser window + wireframe + animated dots through the funnel */
function LandingPagesVisual() {
  const W = 460, H = 360;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="Landing pages service diagram">
      <Grid w={W} h={H} id="lp-grid" />
      <rect x="40" y="30" width="380" height="260" rx="12" fill={C.bg} stroke={C.borderHi} strokeWidth="1.2" />
      <rect x="40" y="30" width="380" height="30" rx="12" fill={C.fillTint} />
      <circle cx="60" cy="45" r="4" fill={C.borderHi} opacity="0.5" />
      <circle cx="74" cy="45" r="4" fill={C.borderHi} opacity="0.35" />
      <circle cx="88" cy="45" r="4" fill={C.borderHi} opacity="0.25" />

      <rect x="64" y="86" width="200" height="14" rx="3" fill="rgba(14,22,32,0.14)" />
      <rect x="64" y="108" width="150" height="9" rx="2" fill="rgba(14,22,32,0.06)" />
      <rect x="64" y="136" width="110" height="22" rx="5" fill={C.accent} />
      <text x="86" y="151" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="9.5" fill="#FFFFFF">Get started</text>

      <rect x="290" y="86" width="100" height="90" rx="8" fill={C.fillTint} stroke={C.border} strokeWidth="0.9" />

      <line x1="64" y1="190" x2="396" y2="190" stroke={C.border} strokeWidth="0.8" />
      <rect x="64" y="206" width="150" height="44" rx="6" fill="#FFFFFF" stroke={C.border} strokeWidth="0.8" />
      <rect x="76" y="216" width="100" height="6" rx="2" fill="rgba(14,22,32,0.07)" />
      <rect x="76" y="228" width="80" height="6" rx="2" fill="rgba(14,22,32,0.05)" />

      <rect x="226" y="206" width="170" height="44" rx="6" fill="#FFFFFF" stroke={C.borderHi} strokeWidth="1" />
      <text x="240" y="222" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.08em">ENQUIRY FORM</text>
      <rect x="240" y="230" width="142" height="10" rx="2" fill="none" stroke={C.border} strokeWidth="0.6" />

      <g className="shv-pulse-layer">
        <circle r="2.4" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M120 60 L120 260" />
        </circle>
        <circle r="2.4" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="3.4s" repeatCount="indefinite" begin="1.1s" path="M340 60 L340 260" />
        </circle>
      </g>

      <Tag x="40" y="320" text="Mobile-first" accent />
      <Tag x="150" y="320" text="SEO-ready" />
      <Tag x="240" y="320" text="Lead capture" />
    </svg>
  );
}

/* 2 — SEO: search result cards + map pin, animated dots along ranking lines */
function SeoVisual() {
  const W = 460, H = 360;
  const results = [
    { y: 50, accent: true },
    { y: 110, accent: false },
    { y: 170, accent: false },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="SEO and local search service diagram">
      <Grid w={W} h={H} id="seo-grid" />

      {results.map((r, i) => (
        <g key={i}>
          <rect x="30" y={r.y} width="240" height="48" rx="6"
            fill={C.bg} stroke={r.accent ? C.borderHi : C.border} strokeWidth={r.accent ? 1.2 : 0.8} />
          {r.accent && <rect x="30" y={r.y} width="3" height="48" fill={C.accent} />}
          <rect x="42" y={r.y + 10} width="120" height="7" rx="2" fill={r.accent ? 'rgba(14,22,32,0.14)' : 'rgba(14,22,32,0.07)'} />
          <rect x="42" y={r.y + 22} width="160" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
          <rect x="42" y={r.y + 32} width="90" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
          {r.accent && (
            <g>
              <rect x="196" y={r.y + 8} width="56" height="16" rx="3" fill="rgba(20,120,168,0.1)" stroke={C.border} strokeWidth="0.7" />
              <text x="224" y={r.y + 19} textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.accent}>#1</text>
            </g>
          )}
        </g>
      ))}

      <rect x="296" y="50" width="134" height="168" rx="10" fill={C.bg} stroke={C.border} strokeWidth="1" />
      <line x1="296" y1="100" x2="430" y2="100" stroke={C.border} strokeWidth="0.5" />
      <line x1="296" y1="150" x2="430" y2="150" stroke={C.border} strokeWidth="0.5" />
      <line x1="363" y1="50" x2="363" y2="218" stroke={C.border} strokeWidth="0.5" />
      <circle cx="363" cy="125" r="10" fill="rgba(20,120,168,0.14)" stroke={C.accent} strokeWidth="1.3" />
      <circle cx="363" cy="125" r="3.6" fill={C.accent} />
      <circle cx="395" cy="90" r="4.5" fill="rgba(20,120,168,0.08)" stroke={C.border} strokeWidth="0.7" />
      <circle cx="330" cy="170" r="4.5" fill="rgba(20,120,168,0.08)" stroke={C.border} strokeWidth="0.7" />

      <g className="shv-pulse-layer">
        <circle r="2.4" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M30 74 L296 134" />
        </circle>
      </g>

      <Tag x="30" y="252" text="Local SEO" accent />
      <Tag x="120" y="252" text="Search intent" />
      <Tag x="222" y="252" text="Google Business" />
    </svg>
  );
}

/* 3 — Paid advertising: campaign cards + funnel, dots flowing toward a lead node */
function PaidAdsVisual() {
  const W = 460, H = 360;
  const stages = [
    { x: 30, w: 86, label: 'Click', col: C.textSec },
    { x: 150, w: 86, label: 'Landing', col: C.accent },
    { x: 270, w: 86, label: 'Enquiry', col: C.accentLight },
    { x: 390, w: 60, label: 'Lead', col: C.gold },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="Paid advertising and lead generation service diagram">
      <Grid w={W} h={H} id="pa-grid" />

      {['Google Search', 'Meta · FB/IG', 'LINE Ads'].map((label, i) => (
        <g key={i}>
          <rect x={30 + i * 145} y="30" width="130" height="48" rx="6"
            fill={C.bg} stroke={i < 2 ? C.borderHi : C.border} strokeWidth={i < 2 ? 1.1 : 0.8} />
          <text x={42 + i * 145} y="50" fontFamily="'DM Mono',monospace" fontSize="7" fill={C.textDim} letterSpacing="0.06em">{label.toUpperCase()}</text>
          <rect x={42 + i * 145} y="58" width="44" height="12" rx="3"
            fill={i < 2 ? 'rgba(20,120,168,0.1)' : 'rgba(139,152,163,0.1)'} stroke={i < 2 ? C.border : 'rgba(139,152,163,0.2)'} strokeWidth="0.6" />
          <text x={64 + i * 145} y="67" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6" fill={i < 2 ? C.accent : C.textDim}>{i < 2 ? 'ACTIVE' : 'PAUSED'}</text>
        </g>
      ))}

      {stages.map((s, i) => (
        <g key={i}>
          {i > 0 && <path d={`M${s.x - 6} 152 L${s.x + 2} 152`} stroke="rgba(20,120,168,0.3)" strokeWidth="1" />}
          <rect x={s.x} y="120" width={s.w} height="64" rx="6"
            fill={C.bg} stroke={i >= 2 ? C.borderHi : C.border} strokeWidth={i >= 2 ? 1.2 : 0.8} />
          <text x={s.x + s.w / 2} y="148" textAnchor="middle" fontFamily="'Syne',sans-serif" fontWeight="600" fontSize="9" fill={s.col}>{s.label}</text>
        </g>
      ))}

      <g className="shv-pulse-layer">
        <circle r="2.4" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M73 184 L420 152" />
        </circle>
      </g>

      <rect x="30" y="208" width="400" height="52" rx="6" fill={C.bg} stroke={C.border} strokeWidth="0.8" />
      <text x="50" y="226" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">TRACKING & ATTRIBUTION</text>
      {['CTR', 'CPL', 'Spend', 'Leads'].map((m, i) => (
        <g key={i}>
          <rect x={50 + i * 90} y="234" width="70" height="18" rx="3" fill="rgba(20,120,168,0.05)" stroke={C.border} strokeWidth="0.6" />
          <text x={85 + i * 90} y="247" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7" fill={i === 2 ? C.textSec : C.accent}>{m}</text>
        </g>
      ))}

      <Tag x="30" y="296" text="Google Ads" accent />
      <Tag x="128" y="296" text="Meta" />
      <Tag x="196" y="296" text="Attribution" />
    </svg>
  );
}

/* 4 — SMM: content calendar + publishing schedule, dots crossing the workflow */
function SmmVisual() {
  const W = 460, H = 360;
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const filled = [
    [0, 0], [2, 0], [4, 0],
    [1, 1], [3, 1], [6, 1],
    [0, 2], [2, 2], [5, 2],
  ];
  const cellW = 56, cellH = 40, startX = 30, startY = 70;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="SMM and content systems service diagram">
      <Grid w={W} h={H} id="smm-grid" />

      <text x="30" y="30" fontFamily="'DM Mono',monospace" fontSize="7" fill={C.textDim} letterSpacing="0.12em">CONTENT CALENDAR</text>
      {days.map((d, i) => (
        <text key={i} x={startX + i * cellW + cellW / 2} y="56" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill={C.textDim}>{d}</text>
      ))}

      {Array.from({ length: 3 }).flatMap((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <rect key={`${row}-${col}`}
            x={startX + col * cellW} y={startY + row * cellH}
            width={cellW - 2} height={cellH - 2} rx="4"
            fill="#FFFFFF" stroke={C.border} strokeWidth="0.6" />
        ))
      )}

      {filled.map(([col, row], i) => (
        <g key={i}>
          <rect x={startX + col * cellW + 1} y={startY + row * cellH + 1}
            width={cellW - 4} height={cellH - 4} rx="4"
            fill="rgba(20,120,168,0.08)" stroke={C.borderHi} strokeWidth="0.8" />
          <circle cx={startX + col * cellW + cellW - 10} cy={startY + row * cellH + 9} r="3" fill={C.accentLight} opacity="0.8" />
        </g>
      ))}

      <g className="shv-pulse-layer">
        <circle r="2.2" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="4s" repeatCount="indefinite" path={`M${startX + 28} ${startY + 20} L${startX + 6 * cellW + 28} ${startY + 2 * cellH + 20}`} />
        </circle>
      </g>

      {['Instagram', 'Facebook', 'LINE OA'].map((p, i) => (
        <Tag key={p} x={30 + i * 110} y="234" text={p} accent={i === 0} />
      ))}

      <rect x="30" y="254" width="400" height="36" rx="6" fill={C.bg} stroke={C.border} strokeWidth="0.8" />
      <text x="50" y="276" fontFamily="'DM Mono',monospace" fontSize="7" fill={C.textSec}>Consistent schedule · Brand voice · Platform-adapted format</text>
    </svg>
  );
}

/* 5 — Analytics: dashboard panels + chart, gentle pulse on data points */
function AnalyticsVisual() {
  const W = 460, H = 360;
  const pts = [[30, 200], [70, 185], [110, 190], [150, 168], [190, 160], [230, 148], [270, 138], [310, 125], [350, 115], [390, 100]];
  const polyline = pts.map(p => p.join(',')).join(' ');
  const area = `M ${pts[0][0]} ${pts[0][1]} ` + pts.slice(1).map(p => `L ${p[0]} ${p[1]}`).join(' ') + ` L 390 250 L 30 250 Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="Analytics and reporting service diagram">
      <Grid w={W} h={H} id="an-grid" />
      <defs>
        <linearGradient id="an-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(20,120,168,0.16)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0)" />
        </linearGradient>
      </defs>

      <rect x="20" y="30" width="420" height="270" rx="10" fill={C.bg} stroke={C.border} strokeWidth="1" />

      {[
        { x: 30, label: 'Sessions', val: '—' },
        { x: 145, label: 'Conversions', val: '—' },
        { x: 260, label: 'Cost / Lead', val: 'CPL' },
        { x: 375, label: 'Source', val: 'UTM' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="42" width="100" height="38" rx="5" fill="rgba(20,120,168,0.04)" stroke={C.border} strokeWidth="0.7" />
          <text x={s.x + 10} y="58" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.08em">{s.label.toUpperCase()}</text>
          <text x={s.x + 10} y="73" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="13" fill={i < 2 ? C.textSec : C.accent}>{s.val}</text>
        </g>
      ))}

      <path d={area} fill="url(#an-area)" />
      <polyline points={polyline} fill="none" stroke={C.accentLight} strokeWidth="1.8" />
      {pts.filter((_, i) => i % 3 === 0).map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill={C.bg} stroke={C.accentLight} strokeWidth="1.3" className="shv-soft-pulse" />
      ))}

      <line x1="30" y1="250" x2="400" y2="250" stroke={C.border} strokeWidth="0.8" />

      <text x="30" y="274" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">CONVERSION PATH</text>
      {['Organic', 'Ad click', 'Page view', 'Form fill', 'Lead'].map((s, i) => (
        <g key={i}>
          {i > 0 && <line x1={30 + (i - 1) * 76 + 56} y1="288" x2={30 + i * 76} y2="288" stroke="rgba(20,120,168,0.22)" strokeWidth="0.8" strokeDasharray="3 3" />}
          <rect x={30 + i * 76} y="280" width="52" height="16" rx="3" fill={i === 4 ? 'rgba(20,120,168,0.1)' : '#FFFFFF'} stroke={i === 4 ? C.borderHi : C.border} strokeWidth="0.7" />
          <text x={56 + i * 76} y="291" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6" fill={i === 4 ? C.accent : C.textDim}>{s.toUpperCase()}</text>
        </g>
      ))}
    </svg>
  );
}

/* 6 — Market research: positioning grid, dots moving between research nodes */
function MarketResearchVisual() {
  const W = 460, H = 360;
  const competitors = [
    { x: 80, y: 90, label: 'Competitor A', size: 18, dim: true },
    { x: 200, y: 130, label: 'Competitor B', size: 13, dim: true },
    { x: 340, y: 80, label: 'Competitor C', size: 11, dim: true },
    { x: 150, y: 210, label: 'Your brand', size: 17, dim: false },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="Market research and competitor analysis service diagram">
      <Grid w={W} h={H} id="mr-grid" />

      <line x1="30" y1="190" x2="430" y2="190" stroke={C.border} strokeWidth="1" strokeDasharray="4 5" />
      <line x1="230" y1="40" x2="230" y2="300" stroke={C.border} strokeWidth="1" strokeDasharray="4 5" />
      <text x="36" y="186" fontFamily="'DM Mono',monospace" fontSize="7" fill={C.textDim} letterSpacing="0.08em">LOCAL</text>
      <text x="392" y="186" fontFamily="'DM Mono',monospace" fontSize="7" fill={C.textDim} letterSpacing="0.08em">INTL</text>

      {competitors.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r={c.size}
            fill={c.dim ? 'rgba(20,120,168,0.05)' : 'rgba(20,120,168,0.14)'}
            stroke={c.dim ? C.border : C.borderHi} strokeWidth={c.dim ? 0.8 : 1.5} />
          <text x={c.x} y={c.y + c.size + 12} textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7" fill={c.dim ? C.textDim : C.accent}>{c.label.toUpperCase()}</text>
        </g>
      ))}

      <g className="shv-pulse-layer">
        <circle r="2.3" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="3.8s" repeatCount="indefinite" path="M150 210 L340 80" />
        </circle>
      </g>

      {[
        { x: 280, y: 70, title: 'Search demand', rows: ['Keyword volume', 'Intent mapping'] },
        { x: 280, y: 168, title: 'Offer gaps', rows: ['Positioning', 'Price points'] },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={card.y} width="150" height="70" rx="6" fill={C.bg} stroke={C.border} strokeWidth="0.8" />
          <text x={card.x + 12} y={card.y + 16} fontFamily="'DM Mono',monospace" fontSize="7" fill={C.textDim} letterSpacing="0.1em">{card.title.toUpperCase()}</text>
          {card.rows.map((r, j) => (
            <g key={j}>
              <circle cx={card.x + 16} cy={card.y + 28 + j * 16} r="2.5" fill={C.accent} />
              <text x={card.x + 26} y={card.y + 32 + j * 16} fontFamily="'Inter',sans-serif" fontSize="8.5" fill={C.textSec}>{r}</text>
            </g>
          ))}
        </g>
      ))}

      <Tag x="30" y="330" text="Competitors" accent />
      <Tag x="128" y="330" text="Audience" />
      <Tag x="206" y="330" text="Offer" />
    </svg>
  );
}

/* 7 — AI production: pipeline with human review checkpoint, dots flowing through */
function AiProductionVisual() {
  const W = 460, H = 360;
  const pipeline = [
    { x: 30, label: 'Brief', sub: 'Human input', accent: false },
    { x: 135, label: 'Generate', sub: 'AI draft', accent: true },
    { x: 240, label: 'Review', sub: 'Human QA', accent: false },
    { x: 345, label: 'Launch', sub: 'Production', accent: false },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="shv-svg" role="img" aria-label="AI-assisted marketing production service diagram">
      <Grid w={W} h={H} id="ai-grid" />

      {pipeline.map((p, i) => (
        <g key={i}>
          {i > 0 && <line x1={pipeline[i - 1].x + 85} y1="82" x2={p.x + 5} y2="82" stroke="rgba(20,120,168,0.28)" strokeWidth="1.2" />}
          <rect x={p.x} y="50" width="90" height="64" rx="7"
            fill={C.bg} stroke={p.accent ? C.borderHi : C.border} strokeWidth={p.accent ? 1.5 : 0.8} />
          {p.accent && <rect x={p.x} y="50" width="90" height="4" rx="2" fill={C.accent} opacity="0.6" />}
          <text x={p.x + 45} y="78" textAnchor="middle" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="10" fill={p.accent ? C.text : C.textSec}>{p.label}</text>
          <text x={p.x + 45} y="94" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7" fill={p.accent ? C.accent : C.textDim}>{p.sub.toUpperCase()}</text>
        </g>
      ))}

      <g className="shv-pulse-layer">
        <circle r="2.4" fill={C.accentLight} className="shv-pulse-dot">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M30 82 L405 82" />
        </circle>
      </g>

      <text x="30" y="142" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.12em">OUTPUT TYPES</text>
      {[
        { x: 30, y: 155, label: 'Landing page copy' },
        { x: 230, y: 155, label: 'Ad variants' },
        { x: 30, y: 198, label: 'Social posts' },
        { x: 230, y: 198, label: 'Translations' },
      ].map((item, i) => (
        <g key={i}>
          <rect x={item.x} y={item.y - 12} width="180" height="32" rx="5" fill={C.bg} stroke={C.border} strokeWidth="0.8" />
          <circle cx={item.x + 14} cy={item.y + 4} r="3" fill={C.accent} opacity="0.7" />
          <text x={item.x + 26} y={item.y + 8} fontFamily="'Inter',sans-serif" fontSize="9" fill={C.textSec}>{item.label}</text>
        </g>
      ))}

      <rect x="30" y="240" width="400" height="70" rx="8" fill={C.bg} stroke={C.border} strokeWidth="0.8" />
      <rect x="30" y="240" width="3" height="70" rx="1" fill="rgba(138,113,72,0.6)" />
      <text x="46" y="258" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.gold} letterSpacing="0.1em">HUMAN REVIEW REQUIRED</text>
      <text x="46" y="274" fontFamily="'Inter',sans-serif" fontSize="8.5" fill={C.textSec}>AI accelerates production. Strategy, quality control</text>
      <text x="46" y="288" fontFamily="'Inter',sans-serif" fontSize="8.5" fill={C.textSec}>and local market judgement remain human-led.</text>
    </svg>
  );
}

const VARIANTS = {
  'landing-pages-websites': LandingPagesVisual,
  'seo-local-search': SeoVisual,
  'paid-advertising-lead-gen': PaidAdsVisual,
  'smm-content-systems': SmmVisual,
  'analytics-reporting': AnalyticsVisual,
  'market-research': MarketResearchVisual,
  'ai-assisted-production': AiProductionVisual,
};

export default function ServiceHeroVisual({ serviceId }) {
  const Visual = VARIANTS[serviceId];
  if (!Visual) return null;
  return (
    <div className="shv-wrap" aria-hidden="true">
      <Visual />
    </div>
  );
}
