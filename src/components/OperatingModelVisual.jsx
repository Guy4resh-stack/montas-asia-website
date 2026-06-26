/**
 * OperatingModelVisual — light "Montas operating model" graphic for the
 * /about hero. Four pillars (Strategy, Production, Distribution, Analytics)
 * connect to a central "Montas studio" card. Pure SVG + CSS animation,
 * no dependencies. Restyled from the old dark-green concept into the
 * current white/blue/cyan palette.
 */

const PILLARS = [
  { x: 70,  label: 'Strategy',     sub: 'Brief & market context' },
  { x: 190, label: 'Production',   sub: 'Pages, copy, creative'  },
  { x: 310, label: 'Distribution', sub: 'SEO, ads, social'       },
  { x: 430, label: 'Analytics',    sub: 'Data & reporting'       },
];

const BAR_HEIGHTS = [108, 142, 128, 96];
const BASE_Y = 270;

export default function OperatingModelVisual() {
  const W = 500, H = 360;
  const cx = W / 2, cardY = 26, cardW = 180, cardH = 56;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="omv-svg"
      role="img"
      aria-label="Diagram showing the Montas operating model: strategy, production, distribution and analytics connected to one central studio system"
    >
      <defs>
        <pattern id="omv-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.1)" />
        </pattern>
        <linearGradient id="omv-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(20,120,168,0.5)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0.06)" />
        </linearGradient>
        <linearGradient id="omv-bar-accent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(47,160,214,0.65)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0.12)" />
        </linearGradient>
        <filter id="omv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#omv-dots)" className="omv-shimmer" />
      <ellipse cx={cx} cy={BASE_Y - 60} rx="210" ry="90" fill="rgba(20,120,168,0.08)" filter="url(#omv-blur)" />

      <line x1="30" y1={BASE_Y} x2={W - 30} y2={BASE_Y} stroke="rgba(20,120,168,0.18)" strokeWidth="1" />

      {/* Central card */}
      <rect x={cx - cardW / 2} y={cardY} width={cardW} height={cardH} rx="10"
        fill="#FFFFFF" stroke="rgba(20,120,168,0.34)" strokeWidth="1.4" className="omv-core-border" />
      <text x={cx} y={cardY + 24} textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="12" fill="#0E1620" letterSpacing="0.01em">Montas studio</text>
      <text x={cx} y={cardY + 40} textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="7.5"
        fill="#1478A8" letterSpacing="0.12em" className="omv-core-pulse">OPERATING MODEL</text>

      {/* Connector lines from card to each pillar top */}
      {PILLARS.map((p, i) => (
        <line key={`line-${i}`}
          x1={cx} y1={cardY + cardH}
          x2={p.x} y2={BASE_Y - BAR_HEIGHTS[i]}
          stroke="rgba(20,120,168,0.16)" strokeWidth="0.9" strokeDasharray="3 4" />
      ))}

      {/* Travelling light pulses on 2 connector lines */}
      <g className="omv-pulse-layer">
        {[0, 2].map((idx, i) => (
          <circle key={`pulse-${idx}`} r="2.3" fill="#2FA0D6" className="omv-pulse-dot">
            <animateMotion
              dur="4s" repeatCount="indefinite" begin={`${i * 1.6}s`}
              path={`M ${cx} ${cardY + cardH} L ${PILLARS[idx].x} ${BASE_Y - BAR_HEIGHTS[idx]}`} />
          </circle>
        ))}
      </g>

      {/* Pillar bars */}
      {PILLARS.map((p, i) => {
        const accent = i === 1;
        return (
          <g key={i}>
            <rect x={p.x - 28} y={BASE_Y - BAR_HEIGHTS[i]} width="56" height={BAR_HEIGHTS[i]} rx="4"
              fill={accent ? 'url(#omv-bar-accent)' : 'url(#omv-bar)'}
              stroke={accent ? 'rgba(20,120,168,0.36)' : 'rgba(20,120,168,0.18)'} strokeWidth="0.9" />
            <rect x={p.x - 28} y={BASE_Y - BAR_HEIGHTS[i]} width="56" height="4" rx="2"
              fill={accent ? '#2FA0D6' : '#1478A8'} opacity={accent ? 0.95 : 0.6} />
            <text x={p.x} y={BASE_Y + 20} textAnchor="middle"
              fontFamily="'Syne',sans-serif" fontWeight="600"
              fontSize="9.5" fill={accent ? '#0E1620' : '#51606E'} letterSpacing="0.02em">{p.label}</text>
            <text x={p.x} y={BASE_Y + 33} textAnchor="middle"
              fontFamily="'DM Mono',monospace" fontSize="6.8"
              fill="#8B98A3" letterSpacing="0.04em">{p.sub}</text>
          </g>
        );
      })}

      <polyline
        points={PILLARS.map((p, i) => `${p.x},${BASE_Y - BAR_HEIGHTS[i]}`).join(' ')}
        fill="none" stroke="rgba(20,120,168,0.22)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}
