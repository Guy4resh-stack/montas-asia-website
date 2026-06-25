/**
 * MarketingGoalsVisual — light, premium "services connect to marketing
 * goals" diagram for the /services hero. Pure SVG + CSS animation, no
 * dependencies. Replaces the old dark-green HeroVisual on this page only.
 */

const SERVICES = [
  { id: 'landing',   label: 'Landing pages', angle: -150 },
  { id: 'seo',        label: 'SEO',           angle: -98.6 },
  { id: 'paid',       label: 'Paid media',    angle: -47.1 },
  { id: 'content',    label: 'Content',       angle: 4.3 },
  { id: 'analytics',  label: 'Analytics',     angle: 55.7 },
  { id: 'research',   label: 'Research',      angle: 107.1 },
  { id: 'ai',         label: 'AI production', angle: 158.6 },
];

const GOALS = ['More enquiries', 'Better visibility', 'Clearer positioning', 'Measurable campaigns'];

const toXY = (cx, cy, angleDeg, r) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

export default function MarketingGoalsVisual() {
  const W = 460, H = 460;
  const cx = W / 2, cy = H / 2;
  const r = 168;

  /* Pick 3 of the 7 connector lines to carry a slow travelling light pulse,
     evenly spaced so the motion reads as part of the system, not random. */
  const pulseIds = ['seo', 'analytics', 'ai'];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="mgv-svg"
      role="img"
      aria-label="Diagram showing Montas services — landing pages, SEO, paid media, content, analytics, research and AI production — connecting to central marketing goals: more enquiries, better visibility, clearer positioning and measurable campaigns"
    >
      <defs>
        <pattern id="mgv-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.1)" />
        </pattern>
        <radialGradient id="mgv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(20,120,168,0.16)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0)" />
        </radialGradient>
        <filter id="mgv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Background shimmer */}
      <rect x="0" y="0" width={W} height={H} fill="url(#mgv-dots)" className="mgv-shimmer-layer" />

      {/* Glow behind central card */}
      <circle cx={cx} cy={cy} r="120" fill="url(#mgv-glow)" filter="url(#mgv-blur)" />

      {/* Connector lines */}
      {SERVICES.map((s) => {
        const pos = toXY(cx, cy, s.angle, r);
        return (
          <line key={`line-${s.id}`}
            x1={cx} y1={cy} x2={pos.x} y2={pos.y}
            stroke="rgba(20,120,168,0.22)" strokeWidth="1" />
        );
      })}

      {/* Travelling light pulses on 3 lines */}
      <g className="mgv-pulse-layer">
        {SERVICES.filter((s) => pulseIds.includes(s.id)).map((s, i) => {
          const pos = toXY(cx, cy, s.angle, r);
          return (
            <circle key={`pulse-${s.id}`} r="2.4" fill="#2FA0D6" className="mgv-pulse-dot">
              <animateMotion
                dur="4.2s"
                repeatCount="indefinite"
                begin={`${i * 1.4}s`}
                path={`M ${pos.x} ${pos.y} L ${cx} ${cy}`}
              />
            </circle>
          );
        })}
      </g>

      {/* Service chips */}
      {SERVICES.map((s) => {
        const pos = toXY(cx, cy, s.angle, r);
        const boxW = Math.max(s.label.length * 5.6 + 18, 52);
        return (
          <g key={`svc-${s.id}`} transform={`translate(${pos.x - boxW / 2}, ${pos.y - 11})`}>
            <rect width={boxW} height="22" rx="11"
              fill="#FFFFFF" stroke="rgba(20,120,168,0.24)" strokeWidth="1" />
            <circle cx="13" cy="11" r="3" fill="#1478A8" opacity="0.85" />
            <text x="22" y="14.5"
              fontFamily="'DM Mono',monospace" fontSize="7.2"
              fill="#33414C" letterSpacing="0.03em">{s.label}</text>
          </g>
        );
      })}

      {/* Central Marketing Goals card */}
      <g className="mgv-core">
        <rect x={cx - 92} y={cy - 64} width="184" height="128" rx="14"
          fill="#FFFFFF" stroke="rgba(20,120,168,0.32)" strokeWidth="1.4" className="mgv-core-border" />
        <text x={cx} y={cy - 36} textAnchor="middle"
          fontFamily="'Syne',sans-serif" fontWeight="700"
          fontSize="13" fill="#0E1620" letterSpacing="0.01em">Marketing</text>
        <text x={cx} y={cy - 20} textAnchor="middle"
          fontFamily="'Syne',sans-serif" fontWeight="700"
          fontSize="13" fill="#0E1620" letterSpacing="0.01em">goals</text>

        <line x1={cx - 70} y1={cy - 8} x2={cx + 70} y2={cy - 8} stroke="rgba(20,120,168,0.14)" strokeWidth="1" />

        {GOALS.map((g, i) => (
          <g key={g}>
            <circle cx={cx - 78} cy={cy + 4 + i * 14.5} r="2.2" fill="#1478A8" opacity="0.8" />
            <text x={cx - 68} y={cy + 7 + i * 14.5}
              fontFamily="'DM Mono',monospace" fontSize="7"
              fill="#51606E" letterSpacing="0.02em">{g}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
