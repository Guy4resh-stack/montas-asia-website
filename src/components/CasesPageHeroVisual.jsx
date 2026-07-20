/**
 * CasesPageHeroVisual — light, premium "case study archive" hero graphic
 * for the /cases page. Stacked preview cards with status tags, communicating
 * structured templates prepared for client-approved publication. No fake
 * metrics, no claimed results. Pure SVG + CSS animation, no dependencies.
 */

export default function CasesPageHeroVisual() {
  const W = 460, H = 420;

  const stack = [
    { y: 240, w: 300, label: 'Legal & visa · trust-led SEO', opacity: 0.4 },
    { y: 196, w: 320, label: 'Education · lead generation', opacity: 0.6 },
    { y: 152, w: 340, label: 'B2B services · Thailand entry', opacity: 0.82 },
  ];

  const topCard = { y: 60, w: 360 };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="cphv-svg"
      role="img"
      aria-label="Stacked case study template cards, illustrating structured project examples prepared for client-approved publication"
    >
      <defs>
        <pattern id="cphv-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.1)" />
        </pattern>
        <filter id="cphv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#cphv-dots)" className="cphv-shimmer" />
      <ellipse cx={W / 2} cy="180" rx="190" ry="120" fill="rgba(20,120,168,0.07)" filter="url(#cphv-blur)" />

      {stack.map((c, i) => (
        <g key={i}>
          <rect x={(W - c.w) / 2} y={c.y} width={c.w} height="64" rx="10"
            fill="#FFFFFF" stroke="rgba(20,120,168,0.18)" strokeWidth="1" opacity={c.opacity} />
          <text x={(W - c.w) / 2 + 20} y={c.y + 24}
            fontFamily="'DM Mono',monospace" fontSize="7"
            fill="#8B98A3" letterSpacing="0.08em" opacity={c.opacity}>
            {c.label.toUpperCase()}
          </text>
        </g>
      ))}

      <rect x={(W - topCard.w) / 2} y={topCard.y} width={topCard.w} height="110" rx="12"
        fill="#FFFFFF" stroke="rgba(20,120,168,0.34)" strokeWidth="1.4" className="cphv-top-card" />

      <rect x={(W - topCard.w) / 2} y={topCard.y} width={topCard.w} height="30" rx="12" fill="rgba(20,120,168,0.06)" />
      <text x={(W - topCard.w) / 2 + 20} y={topCard.y + 19}
        fontFamily="'DM Mono',monospace" fontSize="7.5"
        fill="#51606E" letterSpacing="0.1em">REAL ESTATE · CONCEPT CASE</text>

      <rect x={(W - topCard.w) / 2 + 20} y={topCard.y + 42} width="220" height="9" rx="2" fill="rgba(14,22,32,0.12)" />
      <rect x={(W - topCard.w) / 2 + 20} y={topCard.y + 58} width="160" height="7" rx="2" fill="rgba(14,22,32,0.06)" />

      <rect x={(W - topCard.w) / 2 + 20} y={topCard.y + 78} width="172" height="20" rx="10"
        fill="rgba(20,120,168,0.08)" stroke="rgba(20,120,168,0.26)" strokeWidth="0.8" />
      <circle cx={(W - topCard.w) / 2 + 34} cy={topCard.y + 88} r="3" fill="#1478A8" className="cphv-status-dot" />
      <text x={(W - topCard.w) / 2 + 44} y={topCard.y + 92}
        fontFamily="'DM Mono',monospace" fontSize="6.5"
        fill="#1478A8" letterSpacing="0.06em">PENDING APPROVAL</text>

      <g className="cphv-pulse-layer">
        <line x1={(W - topCard.w) / 2 + 250} y1={topCard.y + 30} x2={(W - topCard.w) / 2 + 250} y2={topCard.y + 80}
          stroke="rgba(20,120,168,0.18)" strokeWidth="0.8" />
        <circle r="2.2" fill="#2FA0D6" className="cphv-pulse-dot">
          <animateMotion dur="3.2s" repeatCount="indefinite"
            path={`M${(W - topCard.w) / 2 + 250} ${topCard.y + 30} L${(W - topCard.w) / 2 + 250} ${topCard.y + 80}`} />
        </circle>
      </g>

      <text x={W / 2} y={H - 22} textAnchor="middle"
        fontFamily="'DM Mono',monospace" fontSize="7"
        fill="#8B98A3" letterSpacing="0.08em">SELECTED CLIENT WORK</text>
    </svg>
  );
}
