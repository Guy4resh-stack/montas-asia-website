/**
 * ServiceStackVisual — "Marketing operating system" diagram for the /services
 * hero. Distinct from the homepage GrowthSystemVisual: vertical stacked
 * modules feeding into one output, no markets, no radial layout.
 */

const MODULES = [
  { id: 'landing',  label: 'Landing pages' },
  { id: 'seo',       label: 'SEO' },
  { id: 'paid',      label: 'Paid media' },
  { id: 'content',   label: 'Content' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'research',  label: 'Research' },
  { id: 'ai',        label: 'AI production' },
];

export default function ServiceStackVisual() {
  const W = 420, H = 480;
  const stackX = 50, stackW = 200;
  const rowH = 34, rowGap = 8;
  const startY = 36;
  const outputY = startY + MODULES.length * (rowH + rowGap) + 26;
  const outputCx = stackX + stackW + 90;
  const outputCy = startY + (MODULES.length * (rowH + rowGap)) / 2 - rowGap / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="ssv-svg"
      role="img"
      aria-label="Diagram showing seven Montas service modules — landing pages, SEO, paid media, content, analytics, research and AI production — feeding into a single market entry system"
    >
      <defs>
        <pattern id="ssv-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.12)" />
        </pattern>
        <filter id="ssv-pin-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#ssv-dots)" className="ssv-shimmer-layer" />

      {/* Connector lines: each module → output node */}
      {MODULES.map((m, i) => {
        const y = startY + i * (rowH + rowGap) + rowH / 2;
        return (
          <path key={`line-${m.id}`}
            d={`M ${stackX + stackW} ${y} C ${stackX + stackW + 45} ${y}, ${outputCx - 45} ${outputCy}, ${outputCx - 14} ${outputCy}`}
            fill="none"
            stroke="rgba(20,120,168,0.2)" strokeWidth="1" />
        );
      })}

      {/* Animated light travelling along two of the connector lines */}
      <g className="ssv-pulse-layer">
        {[1, 4].map((idx, i) => {
          const y = startY + idx * (rowH + rowGap) + rowH / 2;
          const path = `M ${stackX + stackW} ${y} C ${stackX + stackW + 45} ${y}, ${outputCx - 45} ${outputCy}, ${outputCx - 14} ${outputCy}`;
          return (
            <circle key={`pulse-${idx}`} r="2.2" fill="#2FA0D6" className="ssv-pulse-dot">
              <animateMotion dur="3.6s" repeatCount="indefinite" begin={`${i * 1.8}s`} path={path} />
            </circle>
          );
        })}
      </g>

      {/* Module rows */}
      {MODULES.map((m, i) => {
        const y = startY + i * (rowH + rowGap);
        return (
          <g key={`mod-${m.id}`}>
            <rect x={stackX} y={y} width={stackW} height={rowH} rx="8"
              fill="#FFFFFF" stroke="rgba(20,120,168,0.22)" strokeWidth="1.1" />
            <rect x={stackX} y={y} width="4" height={rowH} rx="2" fill="#1478A8" opacity="0.7" />
            <text x={stackX + 16} y={y + rowH / 2 + 1}
              fontFamily="'DM Mono',monospace" fontSize="7"
              fill="#8B98A3" letterSpacing="0.08em">{`0${i + 1}`}</text>
            <text x={stackX + 42} y={y + rowH / 2 + 4}
              fontFamily="'Syne',sans-serif" fontWeight="600"
              fontSize="10.5" fill="#0E1620" letterSpacing="0.01em">{m.label}</text>
          </g>
        );
      })}

      {/* Output node */}
      <g className="ssv-output">
        <circle cx={outputCx} cy={outputCy} r="56" fill="#FFFFFF"
          stroke="rgba(20,120,168,0.3)" strokeWidth="1.4" className="ssv-output-ring" />
        <circle cx={outputCx} cy={outputCy} r="46" fill="none"
          stroke="rgba(20,120,168,0.14)" strokeWidth="1" />
        <text x={outputCx} y={outputCy - 14} textAnchor="middle"
          fontFamily="'DM Mono',monospace" fontSize="7"
          fill="#1478A8" letterSpacing="0.1em">OUTPUT</text>
        <text x={outputCx} y={outputCy + 3} textAnchor="middle"
          fontFamily="'Syne',sans-serif" fontWeight="700"
          fontSize="12" fill="#0E1620">Market entry</text>
        <text x={outputCx} y={outputCy + 19} textAnchor="middle"
          fontFamily="'Syne',sans-serif" fontWeight="700"
          fontSize="12" fill="#0E1620">system</text>
      </g>

      {/* Base label */}
      <text x={stackX} y={H - 18}
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill="#8B98A3" letterSpacing="0.1em">MODULAR SERVICE STACK</text>
    </svg>
  );
}
