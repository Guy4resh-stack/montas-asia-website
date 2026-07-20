/**
 * CasesPageHeroVisual — light, premium "client work" hero graphic for /cases.
 * A stacked set of case preview cards naming real published engagements.
 * No invented metrics: the featured card shows a navigation chip, not a result.
 * Pure SVG + CSS animation, no dependencies.
 */

export default function CasesPageHeroVisual() {
  const W = 460, H = 420;

  // Background stack — real published cases, receding upwards in opacity.
  const stack = [
    { y: 304, w: 300, label: 'MarTech · Clipstorm',        opacity: 0.42 },
    { y: 252, w: 320, label: 'Industrial B2B · Rippa',     opacity: 0.62 },
    { y: 200, w: 340, label: 'B2B logistics · MB TRADE',   opacity: 0.84 },
  ];

  const card = { x: 50, y: 56, w: 360, h: 132 };
  const pad = 20;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="cphv-svg"
      role="img"
      aria-label="Stacked case study cards representing published Montas client work across yachting, logistics, industrial B2B and MarTech projects"
    >
      <defs>
        <pattern id="cphv-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.1)" />
        </pattern>
        <filter id="cphv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <clipPath id="cphv-card-clip">
          <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="12" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#cphv-dots)" className="cphv-shimmer" />
      <ellipse cx={W / 2} cy="180" rx="190" ry="120" fill="rgba(20,120,168,0.07)" filter="url(#cphv-blur)" />

      {/* Receding stack of published cases */}
      {stack.map((c) => (
        <g key={c.label} opacity={c.opacity}>
          <rect x={(W - c.w) / 2} y={c.y} width={c.w} height="44" rx="10"
            fill="#FFFFFF" stroke="rgba(20,120,168,0.18)" strokeWidth="1" />
          <text x={(W - c.w) / 2 + 18} y={c.y + 26}
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill="#8B98A3" letterSpacing="0.08em">
            {c.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Featured case card */}
      <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="12"
        fill="#FFFFFF" stroke="rgba(20,120,168,0.34)" strokeWidth="1.4" className="cphv-top-card" />

      {/* Header strip, clipped so its square corners never escape the rounded card */}
      <g clipPath="url(#cphv-card-clip)">
        <rect x={card.x} y={card.y} width={card.w} height="32" fill="rgba(20,120,168,0.06)" />
      </g>
      <line x1={card.x} y1={card.y + 32} x2={card.x + card.w} y2={card.y + 32}
        stroke="rgba(20,120,168,0.14)" strokeWidth="1" />
      <text x={card.x + pad} y={card.y + 20}
        fontFamily="'DM Mono',monospace" fontSize="7.5"
        fill="#51606E" letterSpacing="0.1em">YACHTING · SUPREME YACHTS</text>

      {/* Title placeholder lines */}
      <rect x={card.x + pad} y={card.y + 48} width="228" height="9" rx="2" fill="rgba(14,22,32,0.12)" />
      <rect x={card.x + pad} y={card.y + 64} width="164" height="7" rx="2" fill="rgba(14,22,32,0.06)" />

      {/* Navigation chip — no invented performance data */}
      <rect x={card.x + pad} y={card.y + 86} width="128" height="22" rx="11"
        fill="rgba(20,120,168,0.08)" stroke="rgba(20,120,168,0.26)" strokeWidth="0.8" />
      <circle cx={card.x + pad + 14} cy={card.y + 97} r="3" fill="#1478A8" className="cphv-status-dot" />
      <text x={card.x + pad + 24} y={card.y + 100}
        fontFamily="'DM Mono',monospace" fontSize="6.5"
        fill="#1478A8" letterSpacing="0.06em">VIEW CASE STUDY</text>

      {/* Connector with travelling dot, kept fully inside the card */}
      <g className="cphv-pulse-layer">
        <line x1={card.x + 286} y1={card.y + 48} x2={card.x + 286} y2={card.y + 104}
          stroke="rgba(20,120,168,0.18)" strokeWidth="0.8" />
        <circle r="2.2" fill="#2FA0D6" className="cphv-pulse-dot">
          <animateMotion dur="3.2s" repeatCount="indefinite"
            path={`M${card.x + 286} ${card.y + 48} L${card.x + 286} ${card.y + 104}`} />
        </circle>
      </g>

      <text x={W / 2} y={H - 22} textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill="#8B98A3" letterSpacing="0.08em">SELECTED CLIENT WORK</text>
    </svg>
  );
}
