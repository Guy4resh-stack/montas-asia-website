/**
 * MarketVisual — abstract Southeast Asia market network graphic.
 * Pure SVG, no dependencies, fully responsive.
 * Used in hero sections on / and /services.
 */
export default function MarketVisual({ compact = false }) {
  const h = compact ? 320 : 420;

  // Node positions [cx, cy, code, label, accent]
  const nodes = [
    { cx: 260, cy: 80,  code: 'TH', label: 'Thailand',   accent: false },
    { cx: 390, cy: 155, code: 'VN', label: 'Vietnam',    accent: false },
    { cx: 160, cy: 185, code: 'SG', label: 'Singapore',  accent: true  },
    { cx: 300, cy: 260, code: 'ID', label: 'Indonesia',  accent: false },
    { cx: 100, cy: 290, code: 'KH', label: 'Cambodia',   accent: false },
    { cx: 420, cy: 290, code: 'MY', label: 'Malaysia',   accent: false },
  ];

  // Centre hub
  const hub = { cx: 255, cy: 195 };

  // Service labels orbiting the hub
  const serviceLabels = [
    { x: 230, y: 148, text: 'Landing pages' },
    { x: 155, y: 230, text: 'Local SEO'     },
    { x: 265, y: 340, text: 'Paid media'    },
    { x: 350, y: 215, text: 'Analytics'     },
  ];

  return (
    <div className="market-visual-wrap" aria-hidden="true">
      <svg
        viewBox={`0 0 520 ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        className="market-visual-svg"
        role="img"
        aria-label="Southeast Asian markets network diagram"
      >
        <defs>
          {/* Grid pattern */}
          <pattern id="mv-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(74,154,102,0.07)" strokeWidth="0.5"/>
          </pattern>

          {/* Glow filters */}
          <filter id="mv-glow-green" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="mv-glow-hub" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Clip */}
          <clipPath id="mv-clip">
            <rect width="520" height={h} rx="16"/>
          </clipPath>
        </defs>

        <g clipPath="url(#mv-clip)">

          {/* Background grid */}
          <rect width="520" height={h} fill="url(#mv-grid)"/>

          {/* Outer atmosphere glow */}
          <ellipse cx="255" cy={h / 2} rx="200" ry="150"
            fill="rgba(42,92,58,0.10)" filter="url(#mv-glow-hub)"/>

          {/* Connection lines: nodes → hub */}
          {nodes.map((n, i) => (
            <line key={`line-${i}`}
              x1={n.cx} y1={n.cy} x2={hub.cx} y2={hub.cy}
              stroke="rgba(74,154,102,0.18)" strokeWidth="1"
              strokeDasharray="4 5"
            />
          ))}

          {/* Service label connector lines */}
          {serviceLabels.map((s, i) => (
            <line key={`sl-${i}`}
              x1={s.x + 35} y1={s.y - 4} x2={hub.cx} y2={hub.cy}
              stroke="rgba(74,154,102,0.08)" strokeWidth="0.8"
            />
          ))}

          {/* Hub ring */}
          <circle cx={hub.cx} cy={hub.cy} r="52"
            fill="rgba(15,26,18,0.85)"
            stroke="rgba(74,154,102,0.25)" strokeWidth="1.2"/>
          <circle cx={hub.cx} cy={hub.cy} r="44"
            fill="none"
            stroke="rgba(74,154,102,0.10)" strokeWidth="1"/>

          {/* Hub dot */}
          <circle cx={hub.cx} cy={hub.cy} r="4"
            fill="#4A9A66" filter="url(#mv-glow-green)"/>

          {/* Hub label */}
          <text x={hub.cx} y={hub.cy - 10}
            textAnchor="middle"
            fontFamily="'Syne', sans-serif" fontWeight="700"
            fontSize="11" fill="#E8E4DC" letterSpacing="0.06em">
            GROWTH
          </text>
          <text x={hub.cx} y={hub.cy + 7}
            textAnchor="middle"
            fontFamily="'DM Mono', monospace"
            fontSize="8.5" fill="#4A9A66" letterSpacing="0.14em">
            SYSTEM
          </text>
          <text x={hub.cx} y={hub.cy + 22}
            textAnchor="middle"
            fontFamily="'DM Mono', monospace"
            fontSize="7" fill="rgba(92,90,85,0.9)" letterSpacing="0.1em">
            SEA MARKETS
          </text>

          {/* Market node chips */}
          {nodes.map((n, i) => {
            const chipW = 76, chipH = 36;
            const x = n.cx - chipW / 2;
            const y = n.cy - chipH / 2;
            const borderColor = n.accent
              ? 'rgba(127,186,154,0.5)'
              : 'rgba(74,154,102,0.2)';
            const dotColor = n.accent ? '#7FBA9A' : '#4A9A66';
            return (
              <g key={`node-${i}`}>
                {/* Node dot on line endpoint */}
                <circle cx={n.cx} cy={n.cy} r="3"
                  fill={dotColor} opacity="0.7"/>

                {/* Chip background */}
                <rect x={x} y={y} width={chipW} height={chipH}
                  rx="6"
                  fill="rgba(15,26,18,0.92)"
                  stroke={borderColor} strokeWidth="1"/>

                {/* Code */}
                <text x={n.cx - 18} y={n.cy + 1}
                  textAnchor="middle"
                  fontFamily="'Syne', sans-serif" fontWeight="700"
                  fontSize="11" fill="#E8E4DC" letterSpacing="0.04em">
                  {n.code}
                </text>

                {/* Separator */}
                <line x1={n.cx - 4} y1={n.cy - 8} x2={n.cx - 4} y2={n.cy + 8}
                  stroke="rgba(74,154,102,0.2)" strokeWidth="0.8"/>

                {/* Label */}
                <text x={n.cx + 14} y={n.cy + 1}
                  textAnchor="middle"
                  fontFamily="'DM Mono', monospace"
                  fontSize="7" fill="rgba(158,155,148,0.9)" letterSpacing="0.08em">
                  {n.label.toUpperCase()}
                </text>

                {/* Active dot for accent node */}
                {n.accent && (
                  <circle cx={x + chipW - 8} cy={y + 8} r="2.5"
                    fill="#7FBA9A" opacity="0.9"/>
                )}
              </g>
            );
          })}

          {/* Service labels */}
          {serviceLabels.map((s, i) => (
            <g key={`svc-${i}`}>
              <rect x={s.x} y={s.y - 13} width={s.text.length * 6.2 + 14} height={18}
                rx="4"
                fill="rgba(10,16,11,0.85)"
                stroke="rgba(74,154,102,0.12)" strokeWidth="0.8"/>
              <text x={s.x + 7} y={s.y}
                fontFamily="'DM Mono', monospace"
                fontSize="7.5" fill="rgba(74,154,102,0.8)" letterSpacing="0.1em">
                {s.text.toUpperCase()}
              </text>
            </g>
          ))}

          {/* Corner accent — top right burgundy dot cluster */}
          <circle cx="480" cy="50" r="40"
            fill="none" stroke="rgba(122,30,46,0.12)" strokeWidth="1"/>
          <circle cx="480" cy="50" r="3"
            fill="rgba(168,50,74,0.4)"/>
          <circle cx="460" cy="65" r="1.5"
            fill="rgba(168,50,74,0.25)"/>
          <circle cx="495" cy="38" r="1.5"
            fill="rgba(168,50,74,0.25)"/>

          {/* Bottom-left subtle arc */}
          <path d="M 0 350 Q 80 280 160 320"
            fill="none" stroke="rgba(74,154,102,0.06)" strokeWidth="1.5"/>

        </g>
      </svg>
    </div>
  );
}
