/**
 * SoutheastAsiaMap — stylised, geographically recognisable Southeast Asia map
 * for the homepage hero. Pure SVG + CSS animation, no dependencies.
 *
 * Shapes are simplified original paths informed by the real relative
 * geography of the region (Indochina mainland, Malay Peninsula, Sumatra/
 * Java arc, Borneo, Philippine archipelago) — not traced from any source.
 */

const MARKETS = [
  {
    id: 'thailand',
    country: 'Thailand',
    city: 'Bangkok',
    cx: 158, cy: 200,
    labelX: 14, labelY: 176,
    side: 'left',
  },
  {
    id: 'vietnam',
    country: 'Vietnam',
    city: 'Ho Chi Minh City',
    cx: 248, cy: 246,
    labelX: 318, labelY: 230,
    side: 'right',
  },
  {
    id: 'cambodia',
    country: 'Cambodia',
    city: 'Phnom Penh',
    cx: 196, cy: 248,
    labelX: 14, labelY: 268,
    side: 'left',
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    cx: 176, cy: 350,
    labelX: 318, labelY: 352,
    side: 'right',
  },
  {
    id: 'singapore',
    country: 'Singapore',
    city: 'Singapore',
    cx: 192, cy: 378,
    labelX: 14, labelY: 398,
    side: 'left',
    major: true,
  },
  {
    id: 'indonesia',
    country: 'Indonesia',
    city: 'Jakarta',
    cx: 200, cy: 432,
    labelX: 14, labelY: 460,
    side: 'left',
  },
  {
    id: 'philippines',
    country: 'Philippines',
    city: 'Manila',
    cx: 330, cy: 168,
    labelX: 318, labelY: 130,
    side: 'right',
  },
];

/* Connection lines for the slow-travelling light pulse (subset, for restraint) */
const PULSE_LINES = [
  { from: 'thailand', to: 'singapore' },
  { from: 'vietnam', to: 'philippines' },
  { from: 'singapore', to: 'indonesia' },
];

const byId = (id) => MARKETS.find((m) => m.id === id);

export default function SoutheastAsiaMap() {
  const W = 460, H = 560;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="sea-map-svg"
      role="img"
      aria-label="Stylised map of Southeast Asia showing markets where Montas operates: Thailand, Vietnam, Cambodia, Malaysia, Singapore, Indonesia and the Philippines"
    >
      <defs>
        <radialGradient id="sea-glow" cx="48%" cy="55%" r="58%">
          <stop offset="0%" stopColor="rgba(20,120,168,0.09)" />
          <stop offset="100%" stopColor="rgba(20,120,168,0)" />
        </radialGradient>
        <filter id="sea-soft-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id="sea-pin-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="sea-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(20,120,168,0.16)" />
        </pattern>
      </defs>

      {/* ── Layer 0: dotted shimmer background, behind everything ── */}
      <g className="sea-shimmer-layer">
        <rect x="0" y="0" width={W} height={H} fill="url(#sea-dots)" />
      </g>

      {/* Ambient glow behind the landmass */}
      <ellipse cx={W * 0.46} cy={H * 0.5} rx="210" ry="250"
        fill="url(#sea-glow)" filter="url(#sea-soft-blur)" />

      {/* ── Layer 1: landmass shapes, informed by real SEA geography ── */}
      <g fill="rgba(20,120,168,0.08)" stroke="rgba(20,120,168,0.32)" strokeWidth="1.1">

        {/* Indochina mainland: Thailand body + long thin Kra peninsula tail */}
        <path d="M 140 88
                 C 168 84, 192 96, 200 122
                 C 206 142, 196 158, 202 178
                 C 207 196, 222 206, 218 224
                 C 214 240, 196 244, 186 232
                 C 174 218, 178 198, 166 182
                 C 152 164, 146 142, 142 122
                 C 139 108, 136 96, 140 88 Z" />

        {/* Kra Isthmus / upper Malay peninsula tail, thin and trailing south */}
        <path d="M 186 232
                 C 192 248, 188 266, 182 282
                 C 177 296, 184 308, 180 322
                 C 177 332, 168 332, 165 320
                 C 160 304, 166 288, 162 272
                 C 158 256, 162 240, 172 230
                 C 178 224, 183 226, 186 232 Z" />

        {/* Lower Malay Peninsula, widening toward Singapore tip */}
        <path d="M 165 320
                 C 170 332, 178 344, 184 358
                 C 188 368, 198 374, 196 384
                 C 194 392, 184 390, 178 382
                 C 168 368, 158 352, 154 336
                 C 151 326, 158 316, 165 320 Z" />

        {/* Vietnam: long coastal S-curve hugging the eastern edge */}
        <path d="M 222 110
                 C 246 122, 258 148, 252 172
                 C 248 190, 234 200, 240 218
                 C 246 234, 264 244, 262 262
                 C 260 276, 246 280, 238 270
                 C 226 254, 230 236, 220 220
                 C 208 202, 210 182, 216 164
                 C 222 146, 214 126, 222 110 Z" />

        {/* Cambodia: compact body west of southern Vietnam */}
        <path d="M 196 224
                 C 210 222, 222 232, 222 246
                 C 222 258, 210 266, 198 262
                 C 188 258, 184 244, 188 232
                 C 190 226, 193 224, 196 224 Z" />

        {/* Sumatra: long diagonal arc, lower-left */}
        <path d="M 60 400
                 C 95 392, 130 398, 162 412
                 C 178 419, 176 430, 160 428
                 C 126 422, 92 414, 64 416
                 C 52 417, 50 403, 60 400 Z" />

        {/* Java: thin arc continuing east from Sumatra */}
        <path d="M 162 412
                 C 195 420, 228 428, 256 438
                 C 266 442, 263 450, 252 448
                 C 222 442, 192 432, 164 422
                 C 156 419, 156 410, 162 412 Z" />

        {/* Borneo: rounded mass, centre-right, unlabelled landmark */}
        <path d="M 268 340
                 C 290 332, 312 340, 320 360
                 C 327 378, 316 396, 296 400
                 C 276 404, 258 392, 256 372
                 C 255 358, 258 346, 268 340 Z" />

        {/* Philippines: scattered island chain, upper-right */}
        <g>
          <ellipse cx="328" cy="140" rx="9" ry="20" transform="rotate(12 328 140)" />
          <ellipse cx="336" cy="178" rx="8" ry="16" transform="rotate(6 336 178)" />
          <ellipse cx="330" cy="210" rx="10" ry="14" transform="rotate(-8 330 210)" />
          <ellipse cx="318" cy="238" rx="7" ry="11" transform="rotate(-12 318 238)" />
        </g>
      </g>

      {/* Subtle coastline texture (a few extra contour hints) */}
      <g stroke="rgba(20,120,168,0.16)" strokeWidth="0.6" fill="none">
        <path d="M 150 100 C 170 118, 182 140, 188 160" />
        <path d="M 232 130 C 244 150, 246 172, 240 192" />
        <path d="M 178 340 C 182 354, 188 366, 192 376" />
      </g>

      {/* ── Layer 2: leader lines from hubs to label cards ── */}
      {MARKETS.map((m) => {
        const lx = m.side === 'left' ? m.labelX + 92 : m.labelX - 4;
        return (
          <line key={`line-${m.id}`}
            x1={m.cx} y1={m.cy}
            x2={lx} y2={m.labelY}
            stroke="rgba(20,120,168,0.32)" strokeWidth="0.8"
            strokeDasharray="3 4" />
        );
      })}

      {/* ── Layer 3: slow light pulses travelling along selected connections ── */}
      <g className="sea-pulse-layer">
        {PULSE_LINES.map((pl, i) => {
          const a = byId(pl.from), b = byId(pl.to);
          return (
            <g key={`pulse-${i}`}>
              <line x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
                stroke="rgba(20,120,168,0.14)" strokeWidth="0.9" />
              <circle r="2.6" fill="#2FA0D6" className="sea-pulse-dot">
                <animateMotion
                  dur="5.5s"
                  repeatCount="indefinite"
                  begin={`${i * 1.6}s`}
                  path={`M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`}
                />
              </circle>
            </g>
          );
        })}
      </g>

      {/* ── Layer 4: glowing hub points ── */}
      {MARKETS.map((m) => (
        <g key={`hub-${m.id}`} className={`sea-hub${m.major ? ' sea-hub--major' : ''}`}>
          <circle cx={m.cx} cy={m.cy} r={m.major ? 15 : 10.5}
            className="sea-hub-ring"
            fill="rgba(20,120,168,0.08)"
            stroke="rgba(20,120,168,0.28)" strokeWidth="1" />
          <circle cx={m.cx} cy={m.cy} r={m.major ? 5.5 : 4}
            className="sea-hub-core"
            fill="#1478A8" filter="url(#sea-pin-glow)" />
          <circle cx={m.cx} cy={m.cy} r={m.major ? 5.5 : 4}
            fill="#2FA0D6" opacity="0.92" />
        </g>
      ))}

      {/* ── Layer 5: country / city label cards ── */}
      {MARKETS.map((m) => {
        const boxW = Math.max(m.country.length, m.city.length) * 6.6 + 22;
        return (
          <g key={`label-${m.id}`}>
            <rect x={m.labelX} y={m.labelY - 16} width={boxW} height="33" rx="6"
              fill="#FFFFFF"
              stroke="rgba(20,120,168,0.24)" strokeWidth="1" />
            <text x={m.labelX + 11} y={m.labelY - 3}
              fontFamily="'Syne',sans-serif" fontWeight="700"
              fontSize="9.8" fill="#0E1620" letterSpacing="0.02em">
              {m.country}
            </text>
            <text x={m.labelX + 11} y={m.labelY + 11}
              fontFamily="'DM Mono',monospace"
              fontSize="7" fill="#51606E" letterSpacing="0.04em">
              {m.city}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
