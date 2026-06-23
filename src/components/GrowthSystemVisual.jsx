/**
 * GrowthSystemVisual — premium abstract business graphic for the homepage hero.
 * Shows Montas services and Southeast Asian markets connected to a central
 * "Growth system" node. Pure SVG + CSS animation, no dependencies, no map.
 */

const SERVICES = [
  { id: 'landing',   label: 'Landing pages', angle: -150, r: 118 },
  { id: 'seo',        label: 'SEO',           angle: -95,  r: 118 },
  { id: 'paid',       label: 'Paid media',    angle: -35,  r: 118 },
  { id: 'content',    label: 'Content',       angle: 30,   r: 118 },
  { id: 'analytics',  label: 'Analytics',     angle: 90,   r: 118 },
  { id: 'research',   label: 'Research',      angle: 145,  r: 118 },
  { id: 'ai',         label: 'AI production', angle: 200,  r: 118 },
];

const MARKETS = [
  { code: 'TH', name: 'Thailand',    angle: -160, rx: 188, ry: 196 },
  { code: 'VN', name: 'Vietnam',     angle: -95,  rx: 188, ry: 196 },
  { code: 'KH', name: 'Cambodia',    angle: -25,  rx: 188, ry: 196 },
  { code: 'SG', name: 'Singapore',   angle: 50,   rx: 188, ry: 196, major: true },
  { code: 'MY', name: 'Malaysia',    angle: 115,  rx: 188, ry: 196 },
  { code: 'ID', name: 'Indonesia',   angle: 165,  rx: 188, ry: 196 },
  { code: 'PH', name: 'Philippines', angle: 215,  rx: 188, ry: 196 },
];

const toXY = (cx, cy, angleDeg, rx, ry) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
};

export default function GrowthSystemVisual() {
  const W = 520, H = 560;
  const cx = W / 2, cy = H / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="gsv-svg"
      role="img"
      aria-label="Diagram showing Montas services — landing pages, SEO, paid media, content, analytics, research and AI production — connected to a central growth system, linked to markets across Southeast Asia: Thailand, Vietnam, Cambodia, Singapore, Malaysia, Indonesia and the Philippines"
    >
      <defs>
        <pattern id="gsv-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.14)" />
        </pattern>
        <radialGradient id="gsv-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(20,120,168,0.22)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0)" />
        </radialGradient>
        <filter id="gsv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="gsv-pin-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Shimmering dot background */}
      <g className="gsv-shimmer-layer">
        <rect x="0" y="0" width={W} height={H} fill="url(#gsv-dots)" />
      </g>

      {/* Soft glow behind central node */}
      <circle cx={cx} cy={cy} r="150" fill="url(#gsv-core-glow)" filter="url(#gsv-blur)" />

      {/* ── Outer ring: market cards ── */}
      {MARKETS.map((m) => {
        const pos = toXY(cx, cy, m.angle, m.rx, m.ry);
        return (
          <line key={`mline-${m.code}`}
            x1={cx} y1={cy} x2={pos.x} y2={pos.y}
            stroke="rgba(20,120,168,0.16)" strokeWidth="0.9"
            strokeDasharray="2 5" />
        );
      })}

      {/* ── Inner ring: service connector lines ── */}
      {SERVICES.map((s) => {
        const pos = toXY(cx, cy, s.angle, s.r, s.r);
        return (
          <line key={`sline-${s.id}`}
            x1={cx} y1={cy} x2={pos.x} y2={pos.y}
            stroke="rgba(20,120,168,0.26)" strokeWidth="1" />
        );
      })}

      {/* ── Animated light travelling along 3 selected service lines ── */}
      <g className="gsv-pulse-layer">
        {SERVICES.filter((_, i) => i % 2 === 0).slice(0, 3).map((s, i) => {
          const pos = toXY(cx, cy, s.angle, s.r, s.r);
          return (
            <circle key={`pulse-${s.id}`} r="2.4" fill="#2FA0D6" className="gsv-pulse-dot">
              <animateMotion
                dur="4.5s"
                repeatCount="indefinite"
                begin={`${i * 1.4}s`}
                path={`M ${cx} ${cy} L ${pos.x} ${pos.y}`}
              />
            </circle>
          );
        })}
      </g>

      {/* ── Central "Growth system" node ── */}
      <g className="gsv-core">
        <circle cx={cx} cy={cy} r="58" fill="#FFFFFF"
          stroke="rgba(20,120,168,0.3)" strokeWidth="1.4" className="gsv-core-ring" />
        <circle cx={cx} cy={cy} r="48" fill="none"
          stroke="rgba(20,120,168,0.14)" strokeWidth="1" />
        <text x={cx} y={cy - 6} textAnchor="middle"
          fontFamily="'Syne',sans-serif" fontWeight="700"
          fontSize="13" fill="#0E1620" letterSpacing="0.01em">Growth</text>
        <text x={cx} y={cy + 11} textAnchor="middle"
          fontFamily="'Syne',sans-serif" fontWeight="700"
          fontSize="13" fill="#0E1620" letterSpacing="0.01em">system</text>
        <text x={cx} y={cy + 26} textAnchor="middle"
          fontFamily="'DM Mono',monospace"
          fontSize="7" fill="#1478A8" letterSpacing="0.12em">MONTAS</text>
      </g>

      {/* ── Service module chips (inner ring) ── */}
      {SERVICES.map((s) => {
        const pos = toXY(cx, cy, s.angle, s.r, s.r);
        const boxW = s.label.length * 5.6 + 18;
        return (
          <g key={`svc-${s.id}`} transform={`translate(${pos.x - boxW / 2}, ${pos.y - 11})`}>
            <rect width={boxW} height="22" rx="11"
              fill="#FFFFFF" stroke="rgba(20,120,168,0.22)" strokeWidth="1" />
            <circle cx="13" cy="11" r="3" fill="#1478A8" opacity="0.8" />
            <text x="22" y="14.5"
              fontFamily="'DM Mono',monospace" fontSize="7.2"
              fill="#33414C" letterSpacing="0.03em">{s.label}</text>
          </g>
        );
      })}

      {/* ── Market cards (outer ring) ── */}
      {MARKETS.map((m) => {
        const pos = toXY(cx, cy, m.angle, m.rx, m.ry);
        const boxW = Math.max(m.name.length * 6.2 + 36, 92);
        const boxH = 34;
        return (
          <g key={`mkt-${m.code}`}
            transform={`translate(${pos.x - boxW / 2}, ${pos.y - boxH / 2})`}
            className={`gsv-market-card${m.major ? ' gsv-market-card--major' : ''}`}
          >
            <rect width={boxW} height={boxH} rx="8"
              fill="#FFFFFF" className="gsv-market-border" strokeWidth="1.2" />
            <circle cx="16" cy={boxH / 2} r="3.4" fill="#2FA0D6" className="gsv-market-dot" />
            <text x="27" y={boxH / 2 - 2}
              fontFamily="'Syne',sans-serif" fontWeight="700"
              fontSize="9.5" fill="#0E1620" letterSpacing="0.01em">{m.name}</text>
            <text x="27" y={boxH / 2 + 11}
              fontFamily="'DM Mono',monospace" fontSize="7"
              fill="#51606E" letterSpacing="0.06em">{m.code}</text>
          </g>
        );
      })}
    </svg>
  );
}
