/**
 * CaseVisualMockup — abstract CSS/SVG website-mockup visuals for the homepage
 * Case Studies carousel. No stock photos, no copyrighted images. Each variant
 * is a simple illustrative frame suggesting the type of page being described.
 */

const C = {
  bg: '#FFFFFF',
  border: 'rgba(20,120,168,0.22)',
  borderHi: 'rgba(20,120,168,0.38)',
  accent: '#1478A8',
  accentLight: '#2FA0D6',
  text: '#0E1620',
  textDim: '#8B98A3',
  fillTint: 'rgba(20,120,168,0.06)',
};

function FrameChrome({ w = 360, label }) {
  return (
    <>
      <rect x="0" y="0" width={w} height="26" rx="8" fill={C.fillTint} />
      <circle cx="16" cy="13" r="3" fill={C.borderHi} opacity="0.5" />
      <circle cx="28" cy="13" r="3" fill={C.borderHi} opacity="0.35" />
      <circle cx="40" cy="13" r="3" fill={C.borderHi} opacity="0.25" />
      {label && (
        <text x={w / 2} y="17" textAnchor="middle"
          fontFamily="'DM Mono',monospace" fontSize="7.5"
          fill={C.textDim} letterSpacing="0.06em">{label}</text>
      )}
    </>
  );
}

/* 1 — Real estate: building silhouette + skyline hint + property card + enquiry form */
function RealEstateMockup() {
  const W = 380, H = 320;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cvm-svg" role="img" aria-label="Real estate landing page mockup — replaceable visual placeholder">
      <rect x="0" y="0" width={W} height={H} rx="14" fill={C.bg} stroke={C.border} strokeWidth="1.2" />
      <FrameChrome w={W} label="circle-living-prototype.com" />

      {/* Skyline hint */}
      <g fill={C.fillTint} stroke={C.border} strokeWidth="0.8">
        <rect x="20" y="100" width="22" height="70" />
        <rect x="46" y="80" width="26" height="90" />
        <rect x="76" y="115" width="20" height="55" />
        <rect x="100" y="60" width="30" height="110" />
        <rect x="134" y="95" width="22" height="75" />
      </g>
      {/* Building silhouette (hero subject) */}
      <path d="M150 170 L150 64 L172 50 L194 64 L194 170 Z"
        fill="rgba(20,120,168,0.1)" stroke={C.accent} strokeWidth="1.2" />
      <line x1="158" y1="80" x2="186" y2="80" stroke={C.accent} strokeWidth="0.6" opacity="0.5" />
      <line x1="158" y1="100" x2="186" y2="100" stroke={C.accent} strokeWidth="0.6" opacity="0.5" />
      <line x1="158" y1="120" x2="186" y2="120" stroke={C.accent} strokeWidth="0.6" opacity="0.5" />

      {/* Hero text block */}
      <rect x="20" y="190" width="150" height="10" rx="2" fill="rgba(14,22,32,0.12)" />
      <rect x="20" y="206" width="110" height="7" rx="2" fill="rgba(14,22,32,0.06)" />
      <rect x="20" y="220" width="90" height="18" rx="4" fill={C.accent} opacity="0.85" />
      <text x="35" y="232" fontFamily="'Syne',sans-serif" fontWeight="700"
        fontSize="8" fill="#FFFFFF" letterSpacing="0.03em">Enquire now</text>

      {/* Property card */}
      <rect x="210" y="190" width="150" height="106" rx="8" fill={C.bg} stroke={C.border} strokeWidth="1" />
      <rect x="222" y="202" width="126" height="36" rx="4" fill={C.fillTint} />
      <rect x="222" y="246" width="80" height="7" rx="2" fill="rgba(14,22,32,0.1)" />
      <rect x="222" y="258" width="100" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
      {/* Enquiry form module */}
      <rect x="222" y="272" width="126" height="14" rx="3" fill="none" stroke={C.border} strokeWidth="0.8" />
      <text x="230" y="282" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim}>Name / Email</text>
    </svg>
  );
}

/* 2 — Clinic / local search visibility board */
function ClinicMockup() {
  const W = 380, H = 320;
  const results = [
    { y: 64, accent: true },
    { y: 122, accent: false },
    { y: 180, accent: false },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cvm-svg" role="img" aria-label="Local search visibility board mockup — replaceable visual placeholder">
      <rect x="0" y="0" width={W} height={H} rx="14" fill={C.bg} stroke={C.border} strokeWidth="1.2" />
      <FrameChrome w={W} label="local search results" />

      {results.map((r, i) => (
        <g key={i}>
          <rect x="20" y={r.y} width="220" height="48" rx="6"
            fill={C.bg} stroke={r.accent ? C.borderHi : C.border} strokeWidth={r.accent ? 1.2 : 0.8} />
          {r.accent && <rect x="20" y={r.y} width="3" height="48" fill={C.accent} opacity="0.7" />}
          <rect x="32" y={r.y + 10} width="120" height="7" rx="2" fill={r.accent ? 'rgba(14,22,32,0.14)' : 'rgba(14,22,32,0.07)'} />
          <rect x="32" y={r.y + 22} width="160" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
          <rect x="32" y={r.y + 32} width="90" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
          {r.accent && (
            <>
              <rect x="178" y={r.y + 8} width="50" height="14" rx="3" fill="rgba(20,120,168,0.1)" stroke={C.border} strokeWidth="0.7" />
              <text x="203" y={r.y + 18} textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6" fill={C.accent}>#1</text>
            </>
          )}
        </g>
      ))}

      {/* Map panel */}
      <rect x="256" y="64" width="104" height="164" rx="8" fill={C.bg} stroke={C.border} strokeWidth="1" />
      <line x1="256" y1="110" x2="360" y2="110" stroke={C.border} strokeWidth="0.5" />
      <line x1="256" y1="156" x2="360" y2="156" stroke={C.border} strokeWidth="0.5" />
      <line x1="308" y1="64" x2="308" y2="228" stroke={C.border} strokeWidth="0.5" />
      <circle cx="308" cy="133" r="9" fill="rgba(20,120,168,0.15)" stroke={C.accent} strokeWidth="1.2" />
      <circle cx="308" cy="133" r="3.5" fill={C.accent} />
      <circle cx="332" cy="100" r="4" fill="rgba(20,120,168,0.08)" stroke={C.border} strokeWidth="0.7" />
      <circle cx="280" cy="170" r="4" fill="rgba(20,120,168,0.08)" stroke={C.border} strokeWidth="0.7" />

      {/* FAQ block */}
      <rect x="20" y="244" width="220" height="56" rx="6" fill="none" stroke={C.border} strokeWidth="0.8" />
      <text x="32" y="260" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.08em">FAQ</text>
      <rect x="32" y="268" width="190" height="6" rx="2" fill="rgba(14,22,32,0.06)" />
      <rect x="32" y="280" width="160" height="6" rx="2" fill="rgba(14,22,32,0.06)" />
    </svg>
  );
}

/* 3 — Resort booking funnel */
function ResortMockup() {
  const W = 380, H = 320;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cvm-svg" role="img" aria-label="Resort direct booking page mockup — replaceable visual placeholder">
      <rect x="0" y="0" width={W} height={H} rx="14" fill={C.bg} stroke={C.border} strokeWidth="1.2" />
      <FrameChrome w={W} label="book direct" />

      {/* Hero band with abstract horizon */}
      <rect x="20" y="40" width="340" height="92" rx="8" fill={C.fillTint} />
      <path d="M20 110 Q120 90 190 100 Q280 112 360 96" fill="none" stroke={C.accent} strokeWidth="1" opacity="0.5" />
      <rect x="32" y="56" width="140" height="9" rx="2" fill="rgba(14,22,32,0.14)" />
      <rect x="32" y="72" width="100" height="6" rx="2" fill="rgba(14,22,32,0.06)" />
      <rect x="32" y="104" width="96" height="16" rx="4" fill={C.accent} />
      <text x="48" y="116" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="8" fill="#FFFFFF">Book direct</text>

      {/* Room highlight cards */}
      {[20, 142, 264].map((x, i) => (
        <g key={i}>
          <rect x={x} y="146" width="106" height="80" rx="6" fill={C.bg} stroke={C.border} strokeWidth="0.9" />
          <rect x={x + 8} y="154" width="90" height="40" rx="4" fill={C.fillTint} />
          <rect x={x + 8} y="200" width="60" height="6" rx="2" fill="rgba(14,22,32,0.08)" />
          <rect x={x + 8} y="210" width="40" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
        </g>
      ))}

      {/* Trust block */}
      <rect x="20" y="238" width="340" height="34" rx="6" fill="none" stroke={C.border} strokeWidth="0.8" />
      {['Free cancellation', 'Best rate guarantee', 'Direct support'].map((t, i) => (
        <g key={i}>
          <circle cx={36 + i * 115} cy="255" r="3" fill={C.accentLight} opacity="0.8" />
          <text x={46 + i * 115} y="258" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim}>{t}</text>
        </g>
      ))}

      {/* Offer / booking bar */}
      <rect x="20" y="282" width="340" height="22" rx="4" fill="rgba(20,120,168,0.07)" stroke={C.border} strokeWidth="0.8" />
      <text x="32" y="296" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.accent} letterSpacing="0.06em">CHECK AVAILABILITY →</text>
    </svg>
  );
}

/* 4 — B2B positioning / market research board */
function B2BMockup() {
  const W = 380, H = 320;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cvm-svg" role="img" aria-label="B2B positioning and market research board mockup — replaceable visual placeholder">
      <rect x="0" y="0" width={W} height={H} rx="14" fill={C.bg} stroke={C.border} strokeWidth="1.2" />
      <FrameChrome w={W} label="market positioning board" />

      {/* Positioning grid */}
      <line x1="40" y1="160" x2="280" y2="160" stroke={C.border} strokeWidth="1" strokeDasharray="3 4" />
      <line x1="160" y1="48" x2="160" y2="272" stroke={C.border} strokeWidth="1" strokeDasharray="3 4" />
      <text x="44" y="56" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim}>LOCAL</text>
      <text x="240" y="56" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim}>GLOBAL</text>

      {/* Competitor + brand bubbles */}
      <circle cx="100" cy="100" r="16" fill="rgba(20,120,168,0.05)" stroke={C.border} strokeWidth="0.8" />
      <circle cx="220" cy="90" r="12" fill="rgba(20,120,168,0.05)" stroke={C.border} strokeWidth="0.8" />
      <circle cx="190" cy="200" r="20" fill="rgba(20,120,168,0.14)" stroke={C.borderHi} strokeWidth="1.4" />
      <text x="190" y="204" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.accent}>YOU</text>
      <circle cx="120" cy="230" r="10" fill="rgba(20,120,168,0.05)" stroke={C.border} strokeWidth="0.8" />

      {/* Research cards */}
      <rect x="300" y="48" width="64" height="2" />
      {[
        { y: 56, label: 'SEARCH DEMAND' },
        { y: 110, label: 'OFFER GAPS' },
        { y: 164, label: 'MESSAGING' },
        { y: 218, label: 'LEAD CAPTURE' },
      ].map((card, i) => (
        <g key={i}>
          <rect x="300" y={card.y} width="64" height="44" rx="5" fill={C.bg} stroke={C.border} strokeWidth="0.8" />
          <text x="310" y={card.y + 14} fontFamily="'DM Mono',monospace" fontSize="5.6" fill={C.textDim} letterSpacing="0.04em">{card.label}</text>
          <rect x="310" y={card.y + 22} width="44" height="5" rx="2" fill="rgba(14,22,32,0.07)" />
          <rect x="310" y={card.y + 30} width="32" height="5" rx="2" fill="rgba(14,22,32,0.05)" />
        </g>
      ))}

      <rect x="40" y="284" width="240" height="20" rx="4" fill="rgba(20,120,168,0.07)" stroke={C.border} strokeWidth="0.8" />
      <text x="52" y="297" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.accent} letterSpacing="0.05em">REQUEST A PROPOSAL →</text>
    </svg>
  );
}

/* 5 — Education / campaign board */
function EducationMockup() {
  const W = 380, H = 320;
  const days = ['M', 'T', 'W', 'T', 'F'];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cvm-svg" role="img" aria-label="Education campaign board mockup — replaceable visual placeholder">
      <rect x="0" y="0" width={W} height={H} rx="14" fill={C.bg} stroke={C.border} strokeWidth="1.2" />
      <FrameChrome w={W} label="enquiry & campaign board" />

      {/* Course landing card */}
      <rect x="20" y="40" width="160" height="120" rx="8" fill={C.bg} stroke={C.border} strokeWidth="0.9" />
      <rect x="30" y="50" width="140" height="50" rx="4" fill={C.fillTint} />
      <rect x="30" y="108" width="100" height="8" rx="2" fill="rgba(14,22,32,0.1)" />
      <rect x="30" y="122" width="120" height="6" rx="2" fill="rgba(14,22,32,0.05)" />
      <rect x="30" y="138" width="70" height="14" rx="3" fill={C.accent} />
      <text x="40" y="148" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="7" fill="#FFFFFF">Enquire</text>

      {/* Content calendar */}
      <rect x="200" y="40" width="160" height="120" rx="8" fill={C.bg} stroke={C.border} strokeWidth="0.9" />
      <text x="212" y="56" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.06em">CONTENT CALENDAR</text>
      {days.map((d, i) => (
        <g key={i}>
          <text x={216 + i * 28} y="70" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6" fill={C.textDim}>{d}</text>
          <rect x={206 + i * 28} y="76" width="22" height="22" rx="3"
            fill={i % 2 === 0 ? 'rgba(20,120,168,0.1)' : C.bg}
            stroke={C.border} strokeWidth="0.7" />
          <rect x={206 + i * 28} y="102" width="22" height="22" rx="3"
            fill={i % 2 !== 0 ? 'rgba(20,120,168,0.1)' : C.bg}
            stroke={C.border} strokeWidth="0.7" />
        </g>
      ))}
      <rect x="212" y="132" width="136" height="18" rx="3" fill="rgba(20,120,168,0.06)" stroke={C.border} strokeWidth="0.6" />
      <text x="222" y="144" fontFamily="'DM Mono',monospace" fontSize="6" fill={C.accent}>Posts · Emails · Ads</text>

      {/* Enquiry funnel */}
      <rect x="20" y="178" width="340" height="100" rx="8" fill="none" stroke={C.border} strokeWidth="0.8" />
      <text x="32" y="194" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.08em">ENQUIRY → CRM</text>
      {['Interest', 'Enquiry form', 'Follow-up', 'Enrolment'].map((s, i) => (
        <g key={i}>
          <rect x={32 + i * 80} y="206" width="68" height="48" rx="5"
            fill={i === 3 ? 'rgba(20,120,168,0.1)' : C.bg}
            stroke={i === 3 ? C.borderHi : C.border} strokeWidth={i === 3 ? 1.1 : 0.8} />
          <text x={66 + i * 80} y="234" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6" fill={i === 3 ? C.accent : C.textDim}>{s}</text>
          {i < 3 && <path d={`M${100 + i * 80} 230 L${112 + i * 80} 230`} stroke={C.border} strokeWidth="1" />}
        </g>
      ))}
    </svg>
  );
}

/* 6 — Legal / visa trust-led service page */
function LegalMockup() {
  const W = 380, H = 320;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cvm-svg" role="img" aria-label="Legal and visa service page mockup — replaceable visual placeholder">
      <rect x="0" y="0" width={W} height={H} rx="14" fill={C.bg} stroke={C.border} strokeWidth="1.2" />
      <FrameChrome w={W} label="consultation request" />

      {/* Service hierarchy */}
      <rect x="20" y="40" width="340" height="46" rx="6" fill={C.fillTint} />
      <rect x="34" y="52" width="160" height="9" rx="2" fill="rgba(14,22,32,0.14)" />
      <rect x="34" y="68" width="220" height="6" rx="2" fill="rgba(14,22,32,0.06)" />
      <rect x="290" y="54" width="56" height="18" rx="4" fill={C.accent} />
      <text x="300" y="66" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="7" fill="#FFFFFF">Consult</text>

      {/* Trust blocks */}
      {['Licensed advisors', 'Transparent pricing', 'Confidential intake'].map((t, i) => (
        <g key={i}>
          <rect x={20 + i * 115} y="98" width="106" height="56" rx="6" fill={C.bg} stroke={C.border} strokeWidth="0.9" />
          <circle cx={20 + i * 115 + 18} cy="118" r="9" fill="rgba(20,120,168,0.1)" stroke={C.border} strokeWidth="0.8" />
          <path d={`M${20 + i * 115 + 14} 118 L${20 + i * 115 + 17} 121 L${20 + i * 115 + 23} 114`}
            stroke={C.accent} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x={20 + i * 115 + 34} y="115" fontFamily="'DM Mono',monospace" fontSize="6" fill={C.text}>{t.split(' ')[0]}</text>
          <text x={20 + i * 115 + 34} y="125" fontFamily="'DM Mono',monospace" fontSize="6" fill={C.textDim}>{t.split(' ').slice(1).join(' ')}</text>
        </g>
      ))}

      {/* FAQ */}
      <rect x="20" y="168" width="220" height="78" rx="6" fill="none" stroke={C.border} strokeWidth="0.8" />
      <text x="32" y="184" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.08em">FAQ</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1="32" y1={194 + i * 16} x2="228" y2={194 + i * 16} stroke={C.border} strokeWidth="0.6" />
          <rect x="32" y={198 + i * 16} width={150 - i * 20} height="6" rx="2" fill="rgba(14,22,32,0.06)" />
        </g>
      ))}

      {/* Consultation form */}
      <rect x="256" y="168" width="104" height="120" rx="6" fill={C.bg} stroke={C.borderHi} strokeWidth="1" />
      <text x="266" y="184" fontFamily="'DM Mono',monospace" fontSize="6.5" fill={C.textDim} letterSpacing="0.06em">REQUEST CONSULT</text>
      {['Name', 'Email', 'Visa type'].map((ph, i) => (
        <rect key={i} x="266" y={194 + i * 22} width="84" height="14" rx="3" fill="none" stroke={C.border} strokeWidth="0.7" />
      ))}
      <rect x="266" y="262" width="84" height="16" rx="4" fill={C.accent} />
      <text x="282" y="273" fontFamily="'Syne',sans-serif" fontWeight="700" fontSize="7" fill="#FFFFFF">Send</text>
    </svg>
  );
}

const MOCKUPS = {
  realEstate: RealEstateMockup,
  clinic: ClinicMockup,
  resort: ResortMockup,
  b2b: B2BMockup,
  education: EducationMockup,
  legal: LegalMockup,
};

export default function CaseVisualMockup({ type }) {
  const Mockup = MOCKUPS[type] || RealEstateMockup;
  return (
    <div className="cvm-wrap">
      <Mockup />
      <span className="cvm-replaceable-note">Illustrative mockup — replaceable image slot</span>
    </div>
  );
}
