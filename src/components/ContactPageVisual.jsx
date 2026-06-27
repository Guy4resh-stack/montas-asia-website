/**
 * ContactPageVisual — light, blue/cyan restyle of the /contact hero graphic.
 * Same lead-intake concept as the original dark-green version: a project
 * request form preview feeding into a CRM-ready pipeline (Request received
 * → Service fit → Next step), ending in a "CRM-ready" status tag. Pure
 * SVG + CSS animation, no dependencies. Decorative only — no real fields,
 * emails, names or backend.
 */

const FIELDS = [
  { label: 'Market of interest', val: 'Thailand / Southeast Asia' },
  { label: 'Service needed',     val: 'Landing page + SEO'        },
  { label: 'Project brief',      val: 'Entering new market...'    },
];

const PIPELINE = [
  { x: 290, y: 96,  label: 'Request received', sub: 'Form submitted'   },
  { x: 380, y: 156, label: 'Service fit',       sub: 'Reviewed'         },
  { x: 380, y: 236, label: 'Next step',         sub: 'Proposal drafted' },
];

export default function ContactPageVisual() {
  const W = 480, H = 360;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="cpv-svg"
      role="img"
      aria-label="Illustration of a project request form feeding into a CRM-ready pipeline: request received, service fit, next step"
    >
      <defs>
        <filter id="cpv-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <pattern id="cpv-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(20,120,168,0.08)" />
        </pattern>
        <marker id="cpv-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="rgba(20,120,168,0.5)" />
        </marker>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#cpv-dots)" className="cpv-shimmer" />
      <ellipse cx="160" cy="200" rx="130" ry="110" fill="rgba(20,120,168,0.08)" filter="url(#cpv-blur)" />

      {/* Form card */}
      <rect x="30" y="55" width="220" height="240" rx="10"
        fill="#FFFFFF" stroke="rgba(20,120,168,0.34)" strokeWidth="1.2" className="cpv-form-card" />

      <rect x="30" y="55" width="220" height="34" rx="10" fill="rgba(20,120,168,0.06)" />
      <rect x="30" y="75" width="220" height="14" fill="rgba(20,120,168,0.06)" />
      <text x="46" y="78" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#51606E" letterSpacing="0.12em">PROJECT REQUEST</text>

      {FIELDS.map((f, i) => (
        <g key={i}>
          <text x="46" y={107 + i * 62} fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#8B98A3" letterSpacing="0.1em">
            {f.label.toUpperCase()}
          </text>
          <rect x="46" y={112 + i * 62} width="188" height="24" rx="4" fill="rgba(20,120,168,0.03)" stroke="rgba(20,120,168,0.2)" strokeWidth="0.8" />
          <text x="54" y={128 + i * 62} fontFamily="'Inter',sans-serif" fontSize="8.5" fill="#51606E">{f.val}</text>
        </g>
      ))}

      {/* Send button */}
      <rect x="46" y="270" width="188" height="28" rx="5" fill="rgba(20,120,168,0.12)" stroke="rgba(20,120,168,0.34)" strokeWidth="1" className="cpv-send-glow" />
      <text x="140" y="289" textAnchor="middle" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="9" fill="#1478A8" letterSpacing="0.06em">SEND PROJECT REQUEST</text>

      {/* Arrow from form to pipeline */}
      <path d="M 255 200 Q 272 200 280 180" fill="none" stroke="rgba(20,120,168,0.4)" strokeWidth="1.2" markerEnd="url(#cpv-arrow)" />

      {/* Travelling light pulse along the pipeline connectors */}
      <g className="cpv-pulse-layer">
        <circle r="2.3" fill="#2FA0D6" className="cpv-pulse-dot">
          <animateMotion dur="4.6s" repeatCount="indefinite"
            path={`M ${PIPELINE[0].x + 38} ${PIPELINE[0].y + 14} L ${PIPELINE[1].x} ${PIPELINE[1].y}
                   M ${PIPELINE[1].x + 38} ${PIPELINE[1].y + 14} L ${PIPELINE[2].x} ${PIPELINE[2].y}`} />
        </circle>
      </g>

      {/* Pipeline nodes */}
      {PIPELINE.map((p, i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={PIPELINE[i - 1].x + 38} y1={PIPELINE[i - 1].y + 14}
              x2={p.x} y2={p.y}
              stroke="rgba(20,120,168,0.2)" strokeWidth="0.8" strokeDasharray="3 4" />
          )}
          <rect x={p.x} y={p.y - 14} width="76" height="36" rx="6"
            fill="#FFFFFF" stroke={i === 0 ? 'rgba(20,120,168,0.4)' : 'rgba(20,120,168,0.22)'} strokeWidth="1"
            className={i === 0 ? 'cpv-active-node' : ''} />
          <text x={p.x + 38} y={p.y + 3} textAnchor="middle" fontFamily="'Syne',sans-serif" fontWeight="600"
            fontSize="9" fill={i === 0 ? '#0E1620' : '#51606E'} letterSpacing="0.04em">{p.label}</text>
          <text x={p.x + 38} y={p.y + 15} textAnchor="middle" fontFamily="'DM Mono',monospace"
            fontSize="6.5" fill="#8B98A3" letterSpacing="0.07em">{p.sub}</text>
        </g>
      ))}

      {/* Integration note */}
      <rect x="285" y="288" width="162" height="22" rx="4" fill="rgba(20,120,168,0.06)" stroke="rgba(20,120,168,0.2)" strokeWidth="0.8" className="cpv-callout" />
      <text x="366" y="303" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#1478A8" letterSpacing="0.08em">CRM-READY</text>
    </svg>
  );
}
