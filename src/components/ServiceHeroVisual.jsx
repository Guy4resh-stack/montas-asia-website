/**
 * ServiceHeroVisual — unique hero graphics for each service detail page.
 * Pure SVG, zero dependencies, fully responsive.
 */

const C = {
  bg:       'rgba(15,26,18,0.96)',
  border:   'rgba(74,154,102,0.18)',
  borderHi: 'rgba(74,154,102,0.32)',
  green:    '#4A9A66',
  greenHi:  '#7FBA9A',
  burg:     'rgba(168,50,74,0.35)',
  burgLine: 'rgba(122,30,46,0.15)',
  gold:     '#C9A96E',
  textPri:  '#E8E4DC',
  textSec:  'rgba(158,155,148,0.85)',
  textDim:  'rgba(92,90,85,0.85)',
  grid:     'rgba(74,154,102,0.055)',
};

function Grid({ w, h, id = 'shv-grid' }) {
  return (
    <>
      <defs>
        <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke={C.grid} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill={`url(#${id})`}/>
    </>
  );
}

function Tag({ x, y, text, accent = false }) {
  const w = text.length * 6.2 + 16;
  return (
    <g>
      <rect x={x} y={y - 11} width={w} height={18} rx="4"
        fill={accent ? 'rgba(74,154,102,0.1)' : 'rgba(10,16,11,0.9)'}
        stroke={accent ? C.borderHi : C.border} strokeWidth="0.8"/>
      <text x={x + 8} y={y + 1}
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill={accent ? C.green : C.textDim} letterSpacing="0.1em">
        {text.toUpperCase()}
      </text>
    </g>
  );
}

function Glow({ cx, cy, rx = 150, ry = 120, id }) {
  return (
    <>
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(42,92,58,0.2)"/>
          <stop offset="100%" stopColor="rgba(42,92,58,0)"/>
        </radialGradient>
        <filter id={`${id}-blur`}><feGaussianBlur stdDeviation="12"/></filter>
      </defs>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
        fill={`url(#${id})`} filter={`url(#${id}-blur)`}/>
    </>
  );
}

/* ─── 1. LANDING PAGES & WEBSITES ─── */
function LandingPagesVisual() {
  const W = 460, H = 360;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="Landing pages service visual">
      <Grid w={W} h={H} id="lp-grid"/>
      <Glow cx={230} cy={180} rx={160} ry={130} id="lp-glow"/>

      {/* Browser chrome */}
      <rect x="60" y="40" width="340" height="270" rx="10"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1.2"/>
      {/* Title bar */}
      <rect x="60" y="40" width="340" height="28" rx="10" fill="rgba(74,154,102,0.07)"/>
      <rect x="60" y="56" width="340" height="12" fill="rgba(74,154,102,0.07)"/>
      <circle cx="80" cy="54" r="4" fill="rgba(168,50,74,0.4)"/>
      <circle cx="95" cy="54" r="4" fill="rgba(201,169,110,0.3)"/>
      <circle cx="110" cy="54" r="4" fill="rgba(74,154,102,0.35)"/>
      {/* URL bar */}
      <rect x="125" y="46" width="200" height="16" rx="3"
        fill="rgba(255,255,255,0.03)" stroke={C.border} strokeWidth="0.7"/>
      <text x="133" y="58" fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.06em">montas-client.com</text>

      {/* Hero block */}
      <rect x="80" y="84" width="180" height="14" rx="3"
        fill="rgba(232,228,220,0.12)"/>
      <rect x="80" y="104" width="140" height="10" rx="3"
        fill="rgba(232,228,220,0.06)"/>
      <rect x="80" y="118" width="120" height="10" rx="3"
        fill="rgba(232,228,220,0.06)"/>

      {/* CTA button */}
      <rect x="80" y="138" width="88" height="26" rx="5"
        fill="rgba(74,154,102,0.25)" stroke={C.borderHi} strokeWidth="1"/>
      <text x="124" y="155" textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="8.5" fill={C.greenHi} letterSpacing="0.05em">GET IN TOUCH</text>

      {/* Divider */}
      <line x1="80" y1="178" x2="380" y2="178"
        stroke={C.border} strokeWidth="0.7"/>

      {/* Feature row */}
      {[
        { x: 80,  icon: '⬡', label: 'Fast load'    },
        { x: 175, icon: '◎', label: 'Mobile-first'  },
        { x: 270, icon: '◈', label: 'Lead capture'  },
      ].map((f, i) => (
        <g key={i}>
          <text x={f.x} y={200} fontFamily="'Inter',sans-serif"
            fontSize="12" fill={C.green} opacity="0.7">{f.icon}</text>
          <text x={f.x + 18} y={200} fontFamily="'DM Mono',monospace"
            fontSize="7.5" fill={C.textSec} letterSpacing="0.05em">
            {f.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Mobile frame */}
      <rect x="300" y="84" width="114" height="188" rx="10"
        fill="rgba(10,16,11,0.9)" stroke={C.border} strokeWidth="1"/>
      <rect x="300" y="84" width="114" height="22" rx="10"
        fill="rgba(74,154,102,0.07)"/>
      <rect x="300" y="96" width="114" height="10" fill="rgba(74,154,102,0.07)"/>
      {/* Mobile hero */}
      <rect x="310" y="116" width="94" height="8" rx="2" fill="rgba(232,228,220,0.1)"/>
      <rect x="310" y="128" width="70" height="6" rx="2" fill="rgba(232,228,220,0.06)"/>
      <rect x="310" y="144" width="60" height="18" rx="3"
        fill="rgba(74,154,102,0.2)" stroke={C.border} strokeWidth="0.7"/>
      <text x="340" y="157" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="6" fill={C.green}>ENQUIRE</text>
      {/* Mobile content */}
      <rect x="310" y="174" width="94" height="5" rx="2" fill="rgba(232,228,220,0.05)"/>
      <rect x="310" y="183" width="80" height="5" rx="2" fill="rgba(232,228,220,0.04)"/>
      <rect x="310" y="192" width="86" height="5" rx="2" fill="rgba(232,228,220,0.04)"/>

      {/* Form card */}
      <rect x="80" y="218" width="200" height="74" rx="6"
        fill="rgba(10,16,11,0.9)" stroke={C.border} strokeWidth="0.8"/>
      <text x="92" y="234" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">ENQUIRY FORM</text>
      {[
        { y: 244, ph: 'Name' },
        { y: 257, ph: 'Email' },
        { y: 270, ph: 'Message' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="92" y={r.y - 9} width="176" height="12" rx="2"
            fill="rgba(255,255,255,0.03)" stroke={C.border} strokeWidth="0.6"/>
          <text x="98" y={r.y} fontFamily="'DM Mono',monospace"
            fontSize="6" fill={C.textDim} letterSpacing="0.06em">{r.ph}</text>
        </g>
      ))}

      {/* Tags */}
      <Tag x={80} y={330} text="Mobile-first" accent/>
      <Tag x={195} y={330} text="SEO-ready"/>
      <Tag x={290} y={330} text="Lead capture"/>
    </svg>
  );
}

/* ─── 2. SEO & LOCAL SEARCH ─── */
function SeoVisual() {
  const W = 460, H = 360;
  const results = [
    { y: 68,  title: 'Your business · Bangkok', url: 'yourbusiness.com', rank: 1, accent: true },
    { y: 128, title: 'Competitor A',             url: 'competitor-a.co.th', rank: 2 },
    { y: 188, title: 'Competitor B',             url: 'competitor-b.com', rank: 3 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="SEO service visual">
      <Grid w={W} h={H} id="seo-grid"/>
      <Glow cx={180} cy={180} rx={160} ry={130} id="seo-glow"/>

      {/* Search bar */}
      <rect x="30" y="22" width="260" height="32" rx="6"
        fill={C.bg} stroke={C.borderHi} strokeWidth="1.2"/>
      <text x="46" y="43" fontFamily="'DM Mono',monospace"
        fontSize="8" fill={C.textSec} letterSpacing="0.06em">clinic phuket expats</text>
      <text x="278" y="43" fontFamily="'DM Mono',monospace"
        fontSize="9" fill={C.green}>⌕</text>

      {/* Search result cards */}
      {results.map((r, i) => (
        <g key={i}>
          <rect x="30" y={r.y} width="260" height="52" rx="6"
            fill={C.bg}
            stroke={r.accent ? C.borderHi : C.border}
            strokeWidth={r.accent ? 1.2 : 0.8}/>
          {r.accent && (
            <rect x="30" y={r.y} width="3" height="52" rx="1"
              fill={C.green} opacity="0.7"/>
          )}
          <text x="42" y={r.y + 16} fontFamily="'DM Mono',monospace"
            fontSize="7" fill={C.textDim} letterSpacing="0.08em">
            {`${r.url} · #${r.rank}`}
          </text>
          <text x="42" y={r.y + 30}
            fontFamily="'Syne',sans-serif" fontWeight="600"
            fontSize="10" fill={r.accent ? C.textPri : C.textSec}>
            {r.title}
          </text>
          <text x="42" y={r.y + 44} fontFamily="'Inter',sans-serif"
            fontSize="8" fill={C.textDim}>
            {r.accent ? 'Best aesthetic clinic for expats in Phuket' : 'Services · Contact · About'}
          </text>
          {r.accent && (
            <rect x="200" y={r.y + 8} width="72" height="16" rx="3"
              fill="rgba(74,154,102,0.12)" stroke={C.border} strokeWidth="0.7"/>
          )}
          {r.accent && (
            <text x="236" y={r.y + 20} textAnchor="middle"
              fontFamily="'DM Mono',monospace" fontSize="6.5"
              fill={C.green} letterSpacing="0.08em">OPTIMISED</text>
          )}
        </g>
      ))}

      {/* Map panel */}
      <rect x="310" y="22" width="130" height="218" rx="8"
        fill={C.bg} stroke={C.border} strokeWidth="1"/>
      {/* Map grid */}
      <line x1="310" y1="80" x2="440" y2="80" stroke={C.border} strokeWidth="0.5"/>
      <line x1="310" y1="138" x2="440" y2="138" stroke={C.border} strokeWidth="0.5"/>
      <line x1="310" y1="180" x2="440" y2="180" stroke={C.border} strokeWidth="0.5"/>
      <line x1="370" y1="22" x2="370" y2="240" stroke={C.border} strokeWidth="0.5"/>
      <text x="375" y="40" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">LOCAL MAP</text>
      {/* Map pin */}
      <circle cx="365" cy="118" r="10"
        fill="rgba(74,154,102,0.15)" stroke={C.green} strokeWidth="1.2"/>
      <circle cx="365" cy="118" r="4" fill={C.green}/>
      <line x1="365" y1="128" x2="365" y2="140"
        stroke={C.green} strokeWidth="1" opacity="0.6"/>
      {/* Secondary pins */}
      <circle cx="400" cy="90" r="5"
        fill="rgba(74,154,102,0.1)" stroke={C.border} strokeWidth="0.8"/>
      <circle cx="400" cy="90" r="2" fill={C.textDim}/>
      <circle cx="330" cy="150" r="5"
        fill="rgba(74,154,102,0.1)" stroke={C.border} strokeWidth="0.8"/>
      <circle cx="330" cy="150" r="2" fill={C.textDim}/>
      {/* GBP label */}
      <rect x="320" y="196" width="100" height="26" rx="4"
        fill="rgba(74,154,102,0.08)" stroke={C.border} strokeWidth="0.7"/>
      <text x="370" y="207" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="6" fill={C.textDim} letterSpacing="0.08em">
        GOOGLE BUSINESS
      </text>
      <text x="370" y="218" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.green} letterSpacing="0.08em">
        PROFILE ✓
      </text>

      {/* Tags */}
      <Tag x={30} y={310} text="Local SEO" accent/>
      <Tag x={120} y={310} text="Search intent"/>
      <Tag x={220} y={310} text="Indexing"/>
      <Tag x={300} y={310} text="Maps"/>
    </svg>
  );
}

/* ─── 3. PAID ADVERTISING & LEAD GEN ─── */
function PaidAdsVisual() {
  const W = 460, H = 360;
  const stages = [
    { x: 30,  w: 80,  label: 'Ad click',   sub: 'Search / Meta', col: C.textSec },
    { x: 150, w: 80,  label: 'Landing',     sub: 'Page view',     col: C.green   },
    { x: 270, w: 80,  label: 'Enquiry',     sub: 'Form / LINE',   col: C.greenHi },
    { x: 390, w: 56,  label: 'Lead',        sub: 'CRM entry',     col: C.gold    },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="Paid advertising service visual">
      <Grid w={W} h={H} id="pa-grid"/>
      <Glow cx={230} cy={200} rx={180} ry={120} id="pa-glow"/>

      {/* Campaign cards */}
      {[
        { x: 30,  y: 30, label: 'Google Search', status: 'Active' },
        { x: 175, y: 30, label: 'Meta · FB/IG',  status: 'Active' },
        { x: 320, y: 30, label: 'LINE Ads',       status: 'Paused' },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="120" height="52" rx="6"
            fill={C.bg} stroke={i < 2 ? C.borderHi : C.border}
            strokeWidth={i < 2 ? 1.1 : 0.8}/>
          <text x={c.x + 10} y={c.y + 18} fontFamily="'DM Mono',monospace"
            fontSize="7" fill={C.textDim} letterSpacing="0.08em">{c.label.toUpperCase()}</text>
          <rect x={c.x + 10} y={c.y + 26} width={i < 2 ? 44 : 38} height="14" rx="3"
            fill={i < 2 ? 'rgba(74,154,102,0.12)' : 'rgba(92,90,85,0.12)'}
            stroke={i < 2 ? C.border : 'rgba(92,90,85,0.2)'} strokeWidth="0.7"/>
          <text x={c.x + 32} y={c.y + 37} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="6.5"
            fill={i < 2 ? C.green : C.textDim} letterSpacing="0.1em">{c.status.toUpperCase()}</text>
        </g>
      ))}

      {/* Funnel pipeline */}
      <text x="230" y="108" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill={C.textDim} letterSpacing="0.14em">CONVERSION PIPELINE</text>

      {stages.map((s, i) => (
        <g key={i}>
          {/* Arrow */}
          {i > 0 && (
            <path d={`M ${s.x - 6} ${162} L ${s.x + 2} ${162}`}
              stroke="rgba(74,154,102,0.3)" strokeWidth="1"
              markerEnd="url(#pa-arr)"/>
          )}
          {/* Stage box */}
          <rect x={s.x} y={130} width={s.w} height={64} rx="6"
            fill={C.bg}
            stroke={i === 3 ? 'rgba(201,169,110,0.35)' : i === 2 ? C.borderHi : C.border}
            strokeWidth={i >= 2 ? 1.2 : 0.8}/>
          <text x={s.x + s.w / 2} y={158} textAnchor="middle"
            fontFamily="'Syne',sans-serif" fontWeight="600"
            fontSize="9" fill={s.col} letterSpacing="0.04em">{s.label}</text>
          <text x={s.x + s.w / 2} y={172} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="6.5"
            fill={C.textDim} letterSpacing="0.07em">{s.sub}</text>
        </g>
      ))}

      <defs>
        <marker id="pa-arr" markerWidth="5" markerHeight="5"
          refX="4" refY="2.5" orient="auto">
          <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="rgba(74,154,102,0.4)"/>
        </marker>
      </defs>

      {/* Tracking row */}
      <rect x="30" y="218" width="400" height="52" rx="6"
        fill={C.bg} stroke={C.border} strokeWidth="0.8"/>
      <text x="50" y="236" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.textDim} letterSpacing="0.12em">TRACKING & ATTRIBUTION</text>
      {['CTR', 'CPL', 'Spend', 'Leads', 'ROAS'].map((m, i) => (
        <g key={i}>
          <rect x={50 + i * 76} y={244} width="60" height="18" rx="3"
            fill="rgba(74,154,102,0.06)" stroke={C.border} strokeWidth="0.7"/>
          <text x={80 + i * 76} y={257} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill={i === 2 ? C.textSec : C.green} letterSpacing="0.1em">{m}</text>
        </g>
      ))}

      {/* Tags */}
      <Tag x={30}  y={320} text="Google Ads" accent/>
      <Tag x={120} y={320} text="Meta"/>
      <Tag x={186} y={320} text="LINE Ads"/>
      <Tag x={256} y={320} text="Attribution"/>
    </svg>
  );
}

/* ─── 4. SMM & CONTENT SYSTEMS ─── */
function SmmVisual() {
  const W = 460, H = 360;
  const days = ['M','T','W','T','F','S','S'];
  const posts = [
    { col: 0, row: 0, type: 'Article', col2: C.green    },
    { col: 2, row: 0, type: 'Story',   col2: C.textSec  },
    { col: 4, row: 0, type: 'Reel',    col2: C.gold     },
    { col: 1, row: 1, type: 'Post',    col2: C.green    },
    { col: 3, row: 1, type: 'Poll',    col2: C.textSec  },
    { col: 6, row: 1, type: 'Article', col2: C.green    },
    { col: 0, row: 2, type: 'Story',   col2: C.textSec  },
    { col: 2, row: 2, type: 'Reel',    col2: C.gold     },
    { col: 5, row: 2, type: 'Post',    col2: C.green    },
  ];
  const cellW = 56, cellH = 44, startX = 30, startY = 70;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="SMM service visual">
      <Grid w={W} h={H} id="smm-grid"/>
      <Glow cx={230} cy={180} rx={180} ry={130} id="smm-glow"/>

      {/* Calendar header */}
      <text x="30" y="30" fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.14em">CONTENT CALENDAR</text>
      <rect x="30" y="36" width="400" height="20" rx="4"
        fill="rgba(74,154,102,0.06)" stroke={C.border} strokeWidth="0.7"/>
      {days.map((d, i) => (
        <text key={i} x={startX + i * cellW + cellW / 2} y="51"
          textAnchor="middle" fontFamily="'DM Mono',monospace"
          fontSize="7.5" fill={C.textDim} letterSpacing="0.1em">{d}</text>
      ))}

      {/* Calendar cells */}
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <rect key={`${row}-${col}`}
            x={startX + col * cellW} y={startY + row * cellH}
            width={cellW - 2} height={cellH - 2} rx="4"
            fill="rgba(10,16,11,0.6)" stroke={C.border} strokeWidth="0.6"/>
        ))
      )}

      {/* Filled post cells */}
      {posts.map((p, i) => (
        <g key={i}>
          <rect
            x={startX + p.col * cellW + 1} y={startY + p.row * cellH + 1}
            width={cellW - 4} height={cellH - 4} rx="4"
            fill={`rgba(74,154,102,0.09)`}
            stroke={p.col2 === C.gold ? 'rgba(201,169,110,0.25)' : C.border}
            strokeWidth="0.8"/>
          <text
            x={startX + p.col * cellW + (cellW - 2) / 2}
            y={startY + p.row * cellH + (cellH - 2) / 2 - 2}
            textAnchor="middle" fontFamily="'DM Mono',monospace"
            fontSize="6.5" fill={p.col2} letterSpacing="0.06em">{p.type.toUpperCase()}</text>
          <circle
            cx={startX + p.col * cellW + cellW - 10}
            cy={startY + p.row * cellH + 9}
            r="3" fill={p.col2} opacity="0.6"/>
        </g>
      ))}

      {/* Platform tags */}
      {[
        { x: 30,  y: 232, label: 'Instagram' },
        { x: 118, y: 232, label: 'Facebook'  },
        { x: 200, y: 232, label: 'LINE OA'   },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y - 12} width={80} height={22} rx="4"
            fill={C.bg} stroke={C.border} strokeWidth="0.8"/>
          <text x={p.x + 40} y={p.y + 2} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill={C.textSec} letterSpacing="0.06em">{p.label.toUpperCase()}</text>
        </g>
      ))}

      {/* Publishing rhythm note */}
      <rect x="30" y="254" width="400" height="40" rx="6"
        fill={C.bg} stroke={C.border} strokeWidth="0.8"/>
      <text x="50" y="270" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">PUBLISHING SYSTEM</text>
      <text x="50" y="286" fontFamily="'Inter',sans-serif"
        fontSize="8.5" fill={C.textSec}>
        Consistent schedule · Brand voice · Platform-adapted format
      </text>

      {/* Tags */}
      <Tag x={30}  y={335} text="Content system" accent/>
      <Tag x={145} y={335} text="Short-form"/>
      <Tag x={225} y={335} text="Publishing"/>
    </svg>
  );
}

/* ─── 5. ANALYTICS & REPORTING ─── */
function AnalyticsVisual() {
  const W = 460, H = 360;
  // Chart points — abstract upward trend
  const pts = [
    [30, 180], [70, 165], [110, 170], [150, 148], [190, 140],
    [230, 128], [270, 118], [310, 105], [350, 95], [390, 80],
  ];
  const polyline = pts.map(p => p.join(',')).join(' ');
  const area = `M ${pts[0][0]} ${pts[0][1]} ` +
    pts.slice(1).map(p => `L ${p[0]} ${p[1]}`).join(' ') +
    ` L 390 230 L 30 230 Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="Analytics service visual">
      <Grid w={W} h={H} id="an-grid"/>
      <Glow cx={230} cy={150} rx={180} ry={120} id="an-glow"/>
      <defs>
        <linearGradient id="an-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(74,154,102,0.2)"/>
          <stop offset="100%" stopColor="rgba(74,154,102,0)"/>
        </linearGradient>
        <filter id="an-line-glow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Dashboard frame */}
      <rect x="20" y="22" width="420" height="290" rx="10"
        fill={C.bg} stroke={C.border} strokeWidth="1"/>

      {/* Top stat cards */}
      {[
        { x: 30,  label: 'Sessions',    val: '—'    },
        { x: 145, label: 'Conversions', val: '—'    },
        { x: 260, label: 'Cost / Lead', val: 'CPL'  },
        { x: 375, label: 'Source',      val: 'UTM'  },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={32} width="100" height="38" rx="5"
            fill="rgba(74,154,102,0.05)" stroke={C.border} strokeWidth="0.7"/>
          <text x={s.x + 10} y={48} fontFamily="'DM Mono',monospace"
            fontSize="6.5" fill={C.textDim} letterSpacing="0.09em">
            {s.label.toUpperCase()}
          </text>
          <text x={s.x + 10} y={63} fontFamily="'Syne',sans-serif"
            fontWeight="700" fontSize="13" fill={i < 2 ? C.textSec : C.green}>
            {s.val}
          </text>
        </g>
      ))}

      {/* Chart area */}
      <path d={area} fill="url(#an-area)"/>
      <polyline points={polyline} fill="none"
        stroke={C.greenHi} strokeWidth="1.8"
        filter="url(#an-line-glow)"/>

      {/* Event nodes on chart */}
      {pts.filter((_, i) => i % 3 === 0).map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3.5"
          fill={C.bg} stroke={C.greenHi} strokeWidth="1.2"/>
      ))}

      {/* Axes */}
      <line x1="30" y1="230" x2="400" y2="230"
        stroke={C.border} strokeWidth="0.8"/>
      <line x1="30" y1="85" x2="30" y2="230"
        stroke={C.border} strokeWidth="0.8"/>

      {/* Conversion path */}
      <text x="30" y="256" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.textDim} letterSpacing="0.1em">CONVERSION PATH</text>
      {['Organic', 'Ad click', 'Page view', 'Form fill', 'Lead'].map((s, i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={30 + (i - 1) * 82 + 58} y1={273}
              x2={30 + i * 82} y2={273}
              stroke="rgba(74,154,102,0.2)" strokeWidth="0.8"
              strokeDasharray="3 3"/>
          )}
          <rect x={30 + i * 82} y={264} width={56} height={18} rx="3"
            fill={i === 4 ? 'rgba(74,154,102,0.12)' : 'rgba(10,16,11,0.9)'}
            stroke={i === 4 ? C.borderHi : C.border} strokeWidth="0.7"/>
          <text x={58 + i * 82} y={277} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="6.5"
            fill={i === 4 ? C.green : C.textDim} letterSpacing="0.06em">
            {s.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Tags */}
      <Tag x={30}  y={340} text="GA4" accent/>
      <Tag x={80}  y={340} text="UTM"/>
      <Tag x={130} y={340} text="Dashboard"/>
      <Tag x={215} y={340} text="CPA"/>
    </svg>
  );
}

/* ─── 6. MARKET RESEARCH ─── */
function MarketResearchVisual() {
  const W = 460, H = 360;
  const competitors = [
    { x: 60,  y: 90,  label: 'Competitor A', size: 22, dim: true  },
    { x: 200, y: 140, label: 'Competitor B', size: 16, dim: true  },
    { x: 340, y: 80,  label: 'Competitor C', size: 14, dim: true  },
    { x: 130, y: 220, label: 'Your brand',   size: 20, dim: false },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="Market research service visual">
      <Grid w={W} h={H} id="mr-grid"/>
      <Glow cx={230} cy={160} rx={180} ry={130} id="mr-glow"/>

      {/* Positioning axes */}
      <line x1="30" y1="190" x2="430" y2="190"
        stroke={C.border} strokeWidth="1" strokeDasharray="4 5"/>
      <line x1="230" y1="30" x2="230" y2="310"
        stroke={C.border} strokeWidth="1" strokeDasharray="4 5"/>
      <text x="35" y="186" fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.08em">LOCAL</text>
      <text x="395" y="186" fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.08em">INTL</text>
      <text x="234" y="40" fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.08em">PREMIUM</text>
      <text x="234" y="308" fontFamily="'DM Mono',monospace"
        fontSize="7" fill={C.textDim} letterSpacing="0.08em">BUDGET</text>

      {/* Competitor bubbles */}
      {competitors.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r={c.size}
            fill={c.dim ? 'rgba(74,154,102,0.06)' : 'rgba(74,154,102,0.15)'}
            stroke={c.dim ? C.border : C.borderHi} strokeWidth={c.dim ? 0.8 : 1.5}/>
          <text x={c.x} y={c.y + c.size + 12} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill={c.dim ? C.textDim : C.green} letterSpacing="0.06em">
            {c.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Research cards */}
      {[
        { x: 280, y: 150, title: 'Search demand',  rows: ['Keyword volume', 'Intent mapping'] },
        { x: 280, y: 234, title: 'Offer gaps',     rows: ['Positioning', 'Price points']     },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={card.y} width="160" height="72" rx="6"
            fill={C.bg} stroke={C.border} strokeWidth="0.8"/>
          <text x={card.x + 12} y={card.y + 16}
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill={C.textDim} letterSpacing="0.1em">{card.title.toUpperCase()}</text>
          {card.rows.map((r, j) => (
            <g key={j}>
              <circle cx={card.x + 16} cy={card.y + 28 + j * 16} r="2.5" fill={C.green}/>
              <text x={card.x + 26} y={card.y + 32 + j * 16}
                fontFamily="'Inter',sans-serif" fontSize="8.5" fill={C.textSec}>{r}</text>
            </g>
          ))}
        </g>
      ))}

      {/* Tags */}
      <Tag x={30}  y={335} text="Competitors" accent/>
      <Tag x={130} y={335} text="Audience"/>
      <Tag x={210} y={335} text="Offer"/>
      <Tag x={270} y={335} text="Search demand"/>
    </svg>
  );
}

/* ─── 7. AI-ASSISTED PRODUCTION ─── */
function AiProductionVisual() {
  const W = 460, H = 360;
  const pipeline = [
    { x: 30,  label: 'Brief',    sub: 'Human input',   accent: false },
    { x: 135, label: 'Generate', sub: 'AI draft',      accent: true  },
    { x: 240, label: 'Review',   sub: 'Human QA',      accent: false },
    { x: 345, label: 'Launch',   sub: 'Production',    accent: false },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg"
      className="shv-svg" role="img" aria-label="AI production service visual">
      <Grid w={W} h={H} id="ai-grid"/>
      <Glow cx={230} cy={160} rx={180} ry={120} id="ai-glow"/>
      <defs>
        <marker id="ai-arr" markerWidth="5" markerHeight="5"
          refX="4" refY="2.5" orient="auto">
          <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="rgba(74,154,102,0.4)"/>
        </marker>
      </defs>

      {/* Pipeline nodes */}
      {pipeline.map((p, i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={pipeline[i-1].x + 85} y1={82}
              x2={p.x + 5} y2={82}
              stroke="rgba(74,154,102,0.25)" strokeWidth="1.2"
              markerEnd="url(#ai-arr)"/>
          )}
          <rect x={p.x} y={50} width={90} height={64} rx="7"
            fill={C.bg}
            stroke={p.accent ? C.borderHi : C.border}
            strokeWidth={p.accent ? 1.5 : 0.8}/>
          {p.accent && (
            <rect x={p.x} y={50} width={90} height={4} rx="2"
              fill={C.green} opacity="0.5"/>
          )}
          <text x={p.x + 45} y={78} textAnchor="middle"
            fontFamily="'Syne',sans-serif" fontWeight="700"
            fontSize="10" fill={p.accent ? C.textPri : C.textSec}
            letterSpacing="0.04em">{p.label}</text>
          <text x={p.x + 45} y={94} textAnchor="middle"
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill={p.accent ? C.green : C.textDim} letterSpacing="0.08em">
            {p.sub.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Output types */}
      <text x="30" y="142" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.textDim} letterSpacing="0.12em">OUTPUT TYPES</text>
      {[
        { x: 30,  y: 155, label: 'Landing page copy' },
        { x: 200, y: 155, label: 'Ad variants'       },
        { x: 30,  y: 198, label: 'Social posts'      },
        { x: 200, y: 198, label: 'Translations'      },
      ].map((item, i) => (
        <g key={i}>
          <rect x={item.x} y={item.y - 12} width={155} height={32} rx="5"
            fill={C.bg} stroke={C.border} strokeWidth="0.8"/>
          <circle cx={item.x + 14} cy={item.y + 4} r="3" fill={C.green} opacity="0.6"/>
          <text x={item.x + 26} y={item.y + 8}
            fontFamily="'Inter',sans-serif" fontSize="9" fill={C.textSec}>
            {item.label}
          </text>
        </g>
      ))}

      {/* Human review callout */}
      <rect x="30" y="240" width="400" height="70" rx="8"
        fill={C.bg} stroke={C.border} strokeWidth="0.8"/>
      <rect x="30" y="240" width="3" height="70" rx="1"
        fill="rgba(201,169,110,0.5)"/>
      <text x="46" y="258" fontFamily="'DM Mono',monospace"
        fontSize="6.5" fill={C.gold} letterSpacing="0.1em">HUMAN REVIEW REQUIRED</text>
      <text x="46" y="274" fontFamily="'Inter',sans-serif"
        fontSize="8.5" fill={C.textSec}>
        AI accelerates production. Strategy, quality control
      </text>
      <text x="46" y="288" fontFamily="'Inter',sans-serif"
        fontSize="8.5" fill={C.textSec}>
        and local market judgement remain human-led.
      </text>
      <rect x="340" y="252" width="74" height="40" rx="5"
        fill="rgba(201,169,110,0.07)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.8"/>
      <text x="377" y="268" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.gold}>STRATEGY</text>
      <text x="377" y="282" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.gold}>HUMAN ✓</text>

      {/* Tags */}
      <Tag x={30}  y={340} text="Prompts" accent/>
      <Tag x={100} y={340} text="Content"/>
      <Tag x={168} y={340} text="QA"/>
      <Tag x={208} y={340} text="Speed"/>
    </svg>
  );
}

/* ─── Main export ─── */
const VARIANTS = {
  'landing-pages-websites':   LandingPagesVisual,
  'seo-local-search':         SeoVisual,
  'paid-advertising-lead-gen': PaidAdsVisual,
  'smm-content-systems':      SmmVisual,
  'analytics-reporting':      AnalyticsVisual,
  'market-research':          MarketResearchVisual,
  'ai-assisted-production':   AiProductionVisual,
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
