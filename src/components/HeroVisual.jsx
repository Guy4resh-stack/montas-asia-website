/**
 * HeroVisual — page-specific abstract hero graphics for Montas Asia.
 * Pure SVG, zero dependencies, fully responsive.
 * Variants: 'services' | 'cases' | 'about' | 'process' | 'contact'
 */

/* ─── Shared tokens ─── */
const C = {
  bg:        'rgba(15,26,18,0.95)',
  bgDeep:    '#0C0E0B',
  border:    'rgba(74,154,102,0.18)',
  borderHi:  'rgba(74,154,102,0.32)',
  green:     '#4A9A66',
  greenGlow: '#7FBA9A',
  burg:      '#7A1E2E',
  burgLight: '#A8324A',
  gold:      '#C9A96E',
  textPri:   '#E8E4DC',
  textSec:   'rgba(158,155,148,0.85)',
  textDim:   'rgba(92,90,85,0.8)',
  gridLine:  'rgba(74,154,102,0.055)',
};

/* ─── Shared sub-components ─── */
function Grid({ w, h }) {
  return (
    <>
      <defs>
        <pattern id="hv-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d={`M 28 0 L 0 0 0 28`} fill="none"
            stroke={C.gridLine} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="url(#hv-grid)" opacity="1"/>
    </>
  );
}

function Chip({ x, y, w = 72, h = 28, code, label, accent = false }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="5"
        fill={C.bg} stroke={accent ? C.borderHi : C.border} strokeWidth="1"/>
      <text x={x + 10} y={y + 11}
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="9" fill={accent ? C.greenGlow : C.textPri} letterSpacing="0.04em">
        {code}
      </text>
      {label && (
        <text x={x + 10} y={y + 21}
          fontFamily="'DM Mono',monospace"
          fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">
          {label.toUpperCase()}
        </text>
      )}
    </g>
  );
}

function Tag({ x, y, text, accent = false }) {
  const w = text.length * 6 + 16;
  return (
    <g>
      <rect x={x} y={y - 11} width={w} height={18} rx="4"
        fill={accent ? 'rgba(74,154,102,0.1)' : 'rgba(15,26,18,0.9)'}
        stroke={accent ? C.borderHi : C.border} strokeWidth="0.8"/>
      <text x={x + 8} y={y + 1}
        fontFamily="'DM Mono',monospace"
        fontSize="7" fill={accent ? C.green : C.textDim}
        letterSpacing="0.1em">
        {text.toUpperCase()}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────
   SERVICES — growth system / market network
   ───────────────────────────────────────────── */
function ServicesVisual() {
  const W = 480, H = 380;
  const hub = { x: 240, y: 195 };

  const markets = [
    { x: 60,  y: 80,  code: 'TH', label: 'Thailand'  },
    { x: 355, y: 65,  code: 'VN', label: 'Vietnam'   },
    { x: 30,  y: 210, code: 'KH', label: 'Cambodia'  },
    { x: 370, y: 195, code: 'SG', label: 'Singapore', accent: true },
    { x: 70,  y: 310, code: 'ID', label: 'Indonesia' },
    { x: 355, y: 305, code: 'MY', label: 'Malaysia'  },
  ];

  const services = [
    { x: 185, y: 108, text: 'Landing pages' },
    { x: 142, y: 195, text: 'Local SEO'    },
    { x: 188, y: 278, text: 'Paid media'   },
    { x: 290, y: 148, text: 'Analytics'    },
    { x: 288, y: 248, text: 'Content'      },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="hv-svg" aria-label="Services overview graphic" role="img">
      <Grid w={W} h={H}/>
      <defs>
        <radialGradient id="sv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(42,92,58,0.22)"/>
          <stop offset="100%" stopColor="rgba(42,92,58,0)"/>
        </radialGradient>
        <filter id="sv-blur"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>

      {/* Atmosphere */}
      <ellipse cx={hub.x} cy={hub.y} rx="160" ry="130"
        fill="url(#sv-glow)" filter="url(#sv-blur)"/>

      {/* Lines: markets → hub */}
      {markets.map((m, i) => {
        const mx = m.x + 36, my = m.y + 14;
        return <line key={i} x1={mx} y1={my} x2={hub.x} y2={hub.y}
          stroke="rgba(74,154,102,0.14)" strokeWidth="1" strokeDasharray="4 5"/>;
      })}

      {/* Lines: service tags → hub */}
      {services.map((s, i) => {
        const sw = s.text.length * 6 + 16;
        return <line key={i} x1={s.x + sw / 2} y1={s.y} x2={hub.x} y2={hub.y}
          stroke="rgba(74,154,102,0.07)" strokeWidth="0.8"/>;
      })}

      {/* Market chips */}
      {markets.map((m, i) => (
        <g key={i}>
          <circle cx={m.x + 36} cy={m.y + 14} r="2.5"
            fill={m.accent ? C.greenGlow : C.green} opacity="0.7"/>
          <Chip x={m.x} y={m.y} code={m.code} label={m.label} accent={m.accent}/>
        </g>
      ))}

      {/* Service tags */}
      {services.map((s, i) => <Tag key={i} x={s.x} y={s.y} text={s.text} accent={i===0}/>)}

      {/* Hub */}
      <circle cx={hub.x} cy={hub.y} r="48"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1.2"/>
      <circle cx={hub.x} cy={hub.y} r="40"
        fill="none" stroke={C.border} strokeWidth="0.8"/>
      <circle cx={hub.x} cy={hub.y} r="3.5"
        fill={C.green}/>
      <text x={hub.x} y={hub.y - 8} textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="10" fill={C.textPri} letterSpacing="0.06em">GROWTH</text>
      <text x={hub.x} y={hub.y + 6} textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="10" fill={C.textPri} letterSpacing="0.06em">SYSTEM</text>
      <text x={hub.x} y={hub.y + 20} textAnchor="middle"
        fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.green} letterSpacing="0.14em">MONTAS</text>

      {/* Corner burgundy accent */}
      <circle cx={W - 30} cy={30} r="28"
        fill="none" stroke="rgba(122,30,46,0.12)" strokeWidth="1"/>
      <circle cx={W - 30} cy={30} r="3" fill="rgba(168,50,74,0.4)"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   CASES — stacked template cards / pending approval
   ───────────────────────────────────────────── */
function CasesVisual() {
  const W = 480, H = 360;

  const cards = [
    { y: 230, label: 'B2B Services · Southeast Asia',   alpha: 0.45 },
    { y: 180, label: 'Tourism & Hospitality · Thailand', alpha: 0.65 },
    { y: 130, label: 'Wellness & Clinics · Phuket',     alpha: 0.82 },
  ];

  const topCard = { y: 70 };

  const rows = [
    { label: 'EXAMPLE CHALLENGE', val: 'No local digital presence',  col: C.textSec },
    { label: 'PLANNED APPROACH',  val: 'Landing page + SEO setup',   col: C.textSec },
    { label: 'MEASUREMENT',       val: 'GA4 + conversion tracking',  col: C.textSec },
    { label: 'STATUS',            val: 'Pending client approval',     col: C.gold    },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="hv-svg" aria-label="Cases overview graphic" role="img">
      <Grid w={W} h={H}/>
      <defs>
        <filter id="cs-blur"><feGaussianBlur stdDeviation="6"/></filter>
      </defs>

      {/* Glow behind stack */}
      <ellipse cx="240" cy="180" rx="140" ry="100"
        fill="rgba(42,92,58,0.1)" filter="url(#cs-blur)"/>

      {/* Stacked background cards */}
      {cards.map((c, i) => (
        <rect key={i}
          x={80 + i * 8} y={c.y} width={320 - i * 16} height={140}
          rx="8" fill={C.bg}
          stroke={`rgba(74,154,102,${0.1 + i * 0.04})`} strokeWidth="1"
          opacity={c.alpha}/>
      ))}
      {cards.map((c, i) => (
        <text key={i} x={100 + i * 8} y={c.y + 20}
          fontFamily="'DM Mono',monospace"
          fontSize="7" fill={C.textDim} letterSpacing="0.1em" opacity={c.alpha}>
          {c.label.toUpperCase()}
        </text>
      ))}

      {/* Top / active card */}
      <rect x="80" y={topCard.y} width="320" height="148" rx="8"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1.2"/>

      {/* Card header */}
      <rect x="80" y={topCard.y} width="320" height="32" rx="8"
        fill="rgba(74,154,102,0.07)"/>
      <rect x="80" y={topCard.y + 20} width="320" height="12"
        fill="rgba(74,154,102,0.07)"/>
      <text x="96" y={topCard.y + 21}
        fontFamily="'DM Mono',monospace"
        fontSize="7.5" fill={C.textDim} letterSpacing="0.14em">
        REAL ESTATE · BANGKOK
      </text>
      <circle cx="380" cy={topCard.y + 16} r="5"
        fill="none" stroke={C.gold} strokeWidth="1.2"/>
      <text x="376" y={topCard.y + 20}
        fontFamily="'DM Mono',monospace" fontSize="7" fill={C.gold}>?</text>

      {/* Card rows */}
      {rows.map((r, i) => (
        <g key={i}>
          <text x="96" y={topCard.y + 50 + i * 26}
            fontFamily="'DM Mono',monospace"
            fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">
            {r.label}
          </text>
          <text x="96" y={topCard.y + 62 + i * 26}
            fontFamily="'Inter',sans-serif"
            fontSize="9" fill={r.col}>
            {r.val}
          </text>
          {i < rows.length - 1 && (
            <line x1="96" y1={topCard.y + 68 + i * 26}
              x2="384" y2={topCard.y + 68 + i * 26}
              stroke={C.border} strokeWidth="0.6"/>
          )}
        </g>
      ))}

      {/* Status badge */}
      <rect x="240" y={topCard.y + 114} width="148" height="22" rx="4"
        fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.25)" strokeWidth="0.8"/>
      <circle cx="253" cy={topCard.y + 125} r="3"
        fill={C.gold} opacity="0.7"/>
      <text x="262" y={topCard.y + 129}
        fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.gold} letterSpacing="0.08em">
        APPROVAL PENDING
      </text>

      {/* Corner note */}
      <text x={W - 20} y={H - 16} textAnchor="end"
        fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.08em">
        CASE DATA ADDED AFTER APPROVAL
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   ABOUT — studio operating model / four pillars
   ───────────────────────────────────────────── */
function AboutVisual() {
  const W = 480, H = 360;

  const pillars = [
    { x: 60,  label: 'Strategy',     sub: 'Brief & market context'  },
    { x: 180, label: 'Production',   sub: 'Pages, copy, creative'   },
    { x: 300, label: 'Distribution', sub: 'SEO, ads, social'        },
    { x: 420, label: 'Analytics',    sub: 'Data & reporting'        },
  ];

  const barH = [110, 145, 130, 95];
  const baseY = 260;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="hv-svg" aria-label="About Montas graphic" role="img">
      <Grid w={W} h={H}/>
      <defs>
        <filter id="ab-blur"><feGaussianBlur stdDeviation="14"/></filter>
        <linearGradient id="ab-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(74,154,102,0.55)"/>
          <stop offset="100%" stopColor="rgba(74,154,102,0.08)"/>
        </linearGradient>
        <linearGradient id="ab-bar-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(127,186,154,0.75)"/>
          <stop offset="100%" stopColor="rgba(74,154,102,0.15)"/>
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="240" cy="260" rx="200" ry="80"
        fill="rgba(42,92,58,0.12)" filter="url(#ab-blur)"/>

      {/* Horizontal baseline */}
      <line x1="30" y1={baseY} x2={W - 30} y2={baseY}
        stroke={C.border} strokeWidth="1"/>

      {/* Central hub above bars */}
      <rect x="160" y="22" width="160" height="52" rx="8"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1.2"/>
      <text x="240" y="44" textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="11" fill={C.textPri} letterSpacing="0.05em">MONTAS STUDIO</text>
      <text x="240" y="60" textAnchor="middle"
        fontFamily="'DM Mono',monospace"
        fontSize="7.5" fill={C.green} letterSpacing="0.14em">OPERATING MODEL</text>

      {/* Lines from hub to bars */}
      {pillars.map((p, i) => (
        <line key={i}
          x1="240" y1="74"
          x2={p.x} y2={baseY - barH[i]}
          stroke="rgba(74,154,102,0.12)" strokeWidth="0.8" strokeDasharray="3 4"/>
      ))}

      {/* Pillar bars */}
      {pillars.map((p, i) => {
        const accent = i === 1;
        return (
          <g key={i}>
            <rect x={p.x - 28} y={baseY - barH[i]} width="56" height={barH[i]} rx="4"
              fill={accent ? 'url(#ab-bar-accent)' : 'url(#ab-bar)'}
              stroke={accent ? C.borderHi : C.border} strokeWidth="0.8"/>
            {/* Top cap */}
            <rect x={p.x - 28} y={baseY - barH[i]} width="56" height="4" rx="2"
              fill={accent ? C.greenGlow : C.green} opacity={accent ? 0.9 : 0.6}/>
            {/* Label */}
            <text x={p.x} y={baseY + 16} textAnchor="middle"
              fontFamily="'Syne',sans-serif" fontWeight="600"
              fontSize="8.5" fill={accent ? C.textPri : C.textSec}
              letterSpacing="0.04em">{p.label}</text>
            <text x={p.x} y={baseY + 28} textAnchor="middle"
              fontFamily="'DM Mono',monospace"
              fontSize="6.5" fill={C.textDim} letterSpacing="0.06em">{p.sub}</text>
          </g>
        );
      })}

      {/* Connecting horizontal line at bar tops */}
      <polyline
        points={pillars.map((p, i) => `${p.x},${baseY - barH[i]}`).join(' ')}
        fill="none" stroke="rgba(74,154,102,0.2)" strokeWidth="1" strokeDasharray="3 3"/>

      {/* Corner accent */}
      <circle cx={W - 25} cy="25" r="20"
        fill="none" stroke="rgba(122,30,46,0.1)" strokeWidth="1"/>
      <circle cx={W - 25} cy="25" r="3" fill="rgba(168,50,74,0.35)"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   PROCESS — numbered pipeline / workflow stages
   ───────────────────────────────────────────── */
function ProcessVisual() {
  const W = 480, H = 360;

  const steps = [
    { n: '01', label: 'Brief',      sub: 'Market context'   },
    { n: '02', label: 'Positioning',sub: 'Offer & audience' },
    { n: '03', label: 'Structure',  sub: 'Page wireframe'   },
    { n: '04', label: 'Build',      sub: 'Design & dev'     },
    { n: '05', label: 'Launch',     sub: 'Analytics setup'  },
    { n: '06', label: 'Optimise',   sub: 'SEO & campaigns'  },
    { n: '07', label: 'Report',     sub: 'Growth review'    },
  ];

  const startX = 48, stepW = 56, gap = 12;
  const lineY = 152;
  const activeIdx = 4; // "Launch" highlighted

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="hv-svg" aria-label="Process overview graphic" role="img">
      <Grid w={W} h={H}/>
      <defs>
        <filter id="pr-blur"><feGaussianBlur stdDeviation="10"/></filter>
        <linearGradient id="pr-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(74,154,102,0.05)"/>
          <stop offset="60%" stopColor="rgba(74,154,102,0.45)"/>
          <stop offset="100%" stopColor="rgba(74,154,102,0.1)"/>
        </linearGradient>
      </defs>

      {/* Glow */}
      <ellipse cx="240" cy={lineY} rx="220" ry="40"
        fill="rgba(42,92,58,0.1)" filter="url(#pr-blur)"/>

      {/* Progress line */}
      <line x1={startX} y1={lineY} x2={W - startX} y2={lineY}
        stroke="url(#pr-line)" strokeWidth="1.5"/>

      {steps.map((s, i) => {
        const cx = startX + i * (stepW + gap) + stepW / 2;
        const active = i === activeIdx;
        const done = i < activeIdx;
        const nodeR = active ? 14 : 9;
        const nodeCol = active ? C.greenGlow : done ? C.green : C.textDim;
        const nodeFill = active
          ? 'rgba(127,186,154,0.15)'
          : done ? 'rgba(74,154,102,0.1)' : 'rgba(15,26,18,0.9)';
        const labelY = i % 2 === 0 ? lineY - 32 : lineY + 46;
        const subY   = i % 2 === 0 ? lineY - 20 : lineY + 58;
        const numY   = i % 2 === 0 ? lineY - 46 : lineY + 62;

        return (
          <g key={i}>
            {/* Connector tick */}
            <line x1={cx} y1={lineY - nodeR} x2={cx}
              y2={i % 2 === 0 ? lineY - 28 : lineY + 28}
              stroke={active ? C.borderHi : C.border} strokeWidth="0.8"/>

            {/* Node */}
            <circle cx={cx} cy={lineY} r={nodeR}
              fill={nodeFill} stroke={active ? C.borderHi : C.border}
              strokeWidth={active ? 1.5 : 1}/>
            {active && (
              <circle cx={cx} cy={lineY} r={nodeR + 6}
                fill="none" stroke="rgba(127,186,154,0.18)" strokeWidth="1"/>
            )}
            <circle cx={cx} cy={lineY} r={active ? 4 : 2.5} fill={nodeCol}/>

            {/* Step number */}
            <text x={cx} y={i % 2 === 0 ? lineY - 60 : lineY + 75}
              textAnchor="middle"
              fontFamily="'Syne',sans-serif" fontWeight="800"
              fontSize="10" fill={active ? C.green : C.textDim}
              letterSpacing="0.04em">{s.n}</text>

            {/* Label */}
            <text x={cx} y={labelY} textAnchor="middle"
              fontFamily="'Syne',sans-serif" fontWeight="600"
              fontSize="8.5" fill={active ? C.textPri : C.textSec}
              letterSpacing="0.03em">{s.label}</text>

            {/* Sub */}
            <text x={cx} y={subY} textAnchor="middle"
              fontFamily="'DM Mono',monospace"
              fontSize="6.5" fill={C.textDim} letterSpacing="0.06em">{s.sub}</text>
          </g>
        );
      })}

      {/* Active label callout */}
      <rect x="168" y="260" width="144" height="38" rx="6"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1"/>
      <text x="240" y="276" textAnchor="middle"
        fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.1em">CURRENT STAGE</text>
      <text x="240" y="291" textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="600"
        fontSize="10" fill={C.green} letterSpacing="0.04em">Launch & Analytics</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   CONTACT — lead intake / CRM-ready flow
   ───────────────────────────────────────────── */
function ContactVisual() {
  const W = 480, H = 360;

  const fields = [
    { label: 'Market of interest', val: 'Thailand / Southeast Asia' },
    { label: 'Service needed',     val: 'Landing page + SEO'        },
    { label: 'Brief',              val: 'Entering new market...'    },
  ];

  const pipeline = [
    { x: 290, y: 100, label: 'CRM',      sub: 'Pipeline entry'  },
    { x: 380, y: 160, label: 'Email',    sub: 'Auto-notify'     },
    { x: 380, y: 240, label: 'Proposal', sub: 'Sent within 24h' },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="hv-svg" aria-label="Contact page graphic" role="img">
      <Grid w={W} h={H}/>
      <defs>
        <filter id="ct-blur"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>

      {/* Glow */}
      <ellipse cx="160" cy="200" rx="130" ry="110"
        fill="rgba(42,92,58,0.1)" filter="url(#ct-blur)"/>

      {/* Form card */}
      <rect x="30" y="55" width="220" height="240" rx="10"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1.2"/>

      {/* Form header */}
      <rect x="30" y="55" width="220" height="34" rx="10"
        fill="rgba(74,154,102,0.08)"/>
      <rect x="30" y="75" width="220" height="14"
        fill="rgba(74,154,102,0.08)"/>
      <text x="46" y="78"
        fontFamily="'DM Mono',monospace"
        fontSize="7.5" fill={C.textDim} letterSpacing="0.12em">PROJECT REQUEST</text>

      {/* Form fields */}
      {fields.map((f, i) => (
        <g key={i}>
          <text x="46" y={107 + i * 62}
            fontFamily="'DM Mono',monospace"
            fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">
            {f.label.toUpperCase()}
          </text>
          <rect x="46" y={112 + i * 62} width="188" height="24" rx="4"
            fill="rgba(255,255,255,0.03)" stroke={C.border} strokeWidth="0.8"/>
          <text x="54" y={128 + i * 62}
            fontFamily="'Inter',sans-serif"
            fontSize="8.5" fill={C.textSec}>
            {f.val}
          </text>
        </g>
      ))}

      {/* Send button */}
      <rect x="46" y="270" width="188" height="28" rx="5"
        fill="rgba(74,154,102,0.2)" stroke={C.borderHi} strokeWidth="1"/>
      <text x="140" y="289" textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="9" fill={C.greenGlow} letterSpacing="0.06em">SEND PROJECT REQUEST</text>

      {/* Arrow from form to pipeline */}
      <path d="M 255 200 Q 272 200 280 180" fill="none"
        stroke="rgba(74,154,102,0.3)" strokeWidth="1.2"
        markerEnd="url(#ct-arrow)"/>
      <defs>
        <marker id="ct-arrow" markerWidth="6" markerHeight="6"
          refX="3" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="rgba(74,154,102,0.5)"/>
        </marker>
      </defs>

      {/* Pipeline nodes */}
      {pipeline.map((p, i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={pipeline[i-1].x + 38} y1={pipeline[i-1].y + 14}
              x2={p.x} y2={p.y}
              stroke="rgba(74,154,102,0.15)" strokeWidth="0.8"
              strokeDasharray="3 4"/>
          )}
          <rect x={p.x} y={p.y - 14} width="76" height="36" rx="6"
            fill={C.bg} stroke={i === 0 ? C.borderHi : C.border} strokeWidth="1"/>
          <text x={p.x + 38} y={p.y + 3} textAnchor="middle"
            fontFamily="'Syne',sans-serif" fontWeight="600"
            fontSize="9" fill={i === 0 ? C.textPri : C.textSec}
            letterSpacing="0.04em">{p.label}</text>
          <text x={p.x + 38} y={p.y + 15} textAnchor="middle"
            fontFamily="'DM Mono',monospace"
            fontSize="6.5" fill={C.textDim} letterSpacing="0.07em">{p.sub}</text>
        </g>
      ))}

      {/* Integration note */}
      <rect x="285" y="288" width="162" height="22" rx="4"
        fill="rgba(201,169,110,0.07)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.8"/>
      <text x="366" y="303" textAnchor="middle"
        fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.gold} letterSpacing="0.08em">CRM INTEGRATION READY</text>

      {/* Corner dot */}
      <circle cx={W - 24} cy="28" r="3" fill="rgba(168,50,74,0.35)"/>
      <circle cx={W - 24} cy="28" r="12"
        fill="none" stroke="rgba(122,30,46,0.1)" strokeWidth="1"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main export
   ───────────────────────────────────────────── */
const VARIANTS = {
  services: ServicesVisual,
  cases:    CasesVisual,
  about:    AboutVisual,
  process:  ProcessVisual,
  contact:  ContactVisual,
};

export default function HeroVisual({ variant }) {
  const Visual = VARIANTS[variant];
  if (!Visual) return null;
  return (
    <div className="hv-wrap" aria-hidden="true">
      <Visual />
    </div>
  );
}
