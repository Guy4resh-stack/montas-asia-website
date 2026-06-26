/**
 * TeamImageGrid — four labelled placeholder panels reserved for real team /
 * studio images. Each panel is an intentional light card with a centred
 * frame icon and a label, not a broken-looking grey box, so the layout
 * reads as designed even before real photos are added.
 */

const SLOTS = [
  { label: 'Team photo' },
  { label: 'Studio work' },
  { label: 'Project session' },
  { label: 'Client workshop' },
];

function FrameIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="22" height="18" rx="2.5" stroke="#1478A8" strokeWidth="1.4" opacity="0.55" />
      <circle cx="9.5" cy="11" r="2.3" stroke="#1478A8" strokeWidth="1.3" opacity="0.6" />
      <path d="M5 19.5 L11 13.5 L15.5 17.5 L19 13 L23 17.5"
        stroke="#1478A8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

export default function TeamImageGrid() {
  return (
    <div className="tig-grid" role="list" aria-label="Reserved spaces for team and studio photography">
      {SLOTS.map((slot) => (
        <div key={slot.label} role="listitem" className="tig-panel">
          <div className="tig-frame">
            <FrameIcon />
          </div>
          <span className="tig-label">{slot.label}</span>
        </div>
      ))}
    </div>
  );
}
