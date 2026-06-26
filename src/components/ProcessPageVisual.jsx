/**
 * ProcessPageVisual — light, blue/cyan restyle of the /process hero graphic.
 * Same pipeline concept as the original dark-green version: 7 numbered
 * nodes on a horizontal line, alternating label position, one node
 * highlighted as the active stage, with a callout box below. Pure SVG +
 * CSS animation, no dependencies.
 */

const STEPS = [
  { n: '01', label: 'Brief',       sub: 'Market context'   },
  { n: '02', label: 'Positioning', sub: 'Offer & audience' },
  { n: '03', label: 'Structure',   sub: 'Page wireframe'   },
  { n: '04', label: 'Build',       sub: 'Design & dev'     },
  { n: '05', label: 'Launch',      sub: 'Analytics setup'  },
  { n: '06', label: 'Optimise',    sub: 'SEO & campaigns'  },
  { n: '07', label: 'Report',      sub: 'Growth review'    },
];

const ACTIVE_IDX = 4; // "Launch" highlighted, matching the original concept

export default function ProcessPageVisual() {
  const W = 480, H = 360;
  const startX = 48, stepW = 56, gap = 12;
  const lineY = 152;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="ppv-svg"
      role="img"
      aria-label="Process pipeline graphic showing seven connected stages, with the launch and analytics stage highlighted as the current focus"
    >
      <defs>
        <pattern id="ppv-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.1)" />
        </pattern>
        <filter id="ppv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <linearGradient id="ppv-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(20,120,168,0.06)" />
          <stop offset="60%" stopColor="rgba(20,120,168,0.5)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0.12)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#ppv-dots)" className="ppv-shimmer" />

      <ellipse cx="240" cy={lineY} rx="220" ry="40" fill="rgba(20,120,168,0.08)" filter="url(#ppv-blur)" />

      <line x1={startX} y1={lineY} x2={W - startX} y2={lineY} stroke="url(#ppv-line)" strokeWidth="1.5" />

      {/* Travelling light pulse along the main line */}
      <g className="ppv-pulse-layer">
        <circle r="2.4" fill="#2FA0D6" className="ppv-pulse-dot">
          <animateMotion dur="5s" repeatCount="indefinite" path={`M ${startX} ${lineY} L ${W - startX} ${lineY}`} />
        </circle>
      </g>

      {STEPS.map((s, i) => {
        const cx = startX + i * (stepW + gap) + stepW / 2;
        const active = i === ACTIVE_IDX;
        const done = i < ACTIVE_IDX;
        const nodeR = active ? 14 : 9;
        const nodeCol = active ? '#2FA0D6' : done ? '#1478A8' : '#8B98A3';
        const nodeFill = active
          ? 'rgba(47,160,214,0.14)'
          : done ? 'rgba(20,120,168,0.08)' : '#FFFFFF';
        const labelY = i % 2 === 0 ? lineY - 32 : lineY + 46;
        const subY   = i % 2 === 0 ? lineY - 20 : lineY + 58;
        const numY   = i % 2 === 0 ? lineY - 46 : lineY + 62;

        return (
          <g key={i}>
            <line x1={cx} y1={lineY - nodeR} x2={cx}
              y2={i % 2 === 0 ? lineY - 28 : lineY + 28}
              stroke={active ? 'rgba(20,120,168,0.36)' : 'rgba(20,120,168,0.2)'} strokeWidth="0.8" />

            <circle cx={cx} cy={lineY} r={nodeR}
              fill={nodeFill} stroke={active ? 'rgba(20,120,168,0.4)' : 'rgba(20,120,168,0.2)'}
              strokeWidth={active ? 1.5 : 1} className={active ? 'ppv-active-ring' : ''} />
            {active && (
              <circle cx={cx} cy={lineY} r={nodeR + 6}
                fill="none" stroke="rgba(47,160,214,0.22)" strokeWidth="1" className="ppv-active-glow" />
            )}
            <circle cx={cx} cy={lineY} r={active ? 4 : 2.5} fill={nodeCol} />

            <text x={cx} y={numY} textAnchor="middle"
              fontFamily="'Syne',sans-serif" fontWeight="800"
              fontSize="10" fill={active ? '#1478A8' : '#8B98A3'} letterSpacing="0.04em">{s.n}</text>

            <text x={cx} y={labelY} textAnchor="middle"
              fontFamily="'Syne',sans-serif" fontWeight="600"
              fontSize="8.5" fill={active ? '#0E1620' : '#51606E'} letterSpacing="0.03em">{s.label}</text>

            <text x={cx} y={subY} textAnchor="middle"
              fontFamily="'DM Mono',monospace"
              fontSize="6.5" fill="#8B98A3" letterSpacing="0.06em">{s.sub}</text>
          </g>
        );
      })}

      {/* Active label callout */}
      <rect x="168" y="260" width="144" height="38" rx="6"
        fill="#FFFFFF" stroke="rgba(20,120,168,0.32)" strokeWidth="1" className="ppv-callout" />
      <text x="240" y="276" textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill="#8B98A3" letterSpacing="0.1em">CURRENT STAGE</text>
      <text x="240" y="291" textAnchor="middle"
        fontFamily="'Syne',sans-serif" fontWeight="600"
        fontSize="10" fill="#1478A8" letterSpacing="0.04em">Launch & Analytics</text>
    </svg>
  );
}
