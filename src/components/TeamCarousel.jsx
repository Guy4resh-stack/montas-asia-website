import { useCallback, useEffect, useRef, useState } from 'react';
import { teamMembers } from '../data/team.js';

/**
 * TeamCarousel — single-slide portrait carousel for the homepage
 * "Who We Are" section. Shows one Montas team member at a time with
 * arrow/indicator navigation, keyboard support, and pointer-based
 * drag/swipe. No autoplay, no external carousel dependency.
 */

const DRAG_THRESHOLD = 60; // px of horizontal movement needed to change slide
const DRAG_MAX = 140;      // px of visual "give" while dragging (resistance cap)

export default function TeamCarousel() {
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const total = teamMembers.length;

  const goTo = useCallback((index) => {
    setActive(((index % total) + total) % total);
  }, [total]);

  const goPrev = useCallback(() => goTo(active - 1), [goTo, active]);
  const goNext = useCallback(() => goTo(active + 1), [goTo, active]);

  // Warm the cache for the next portrait so navigating feels instant,
  // without eagerly downloading all six full-resolution files up front.
  useEffect(() => {
    const nextMember = teamMembers[(active + 1) % total];
    const preload = new Image();
    preload.src = nextMember.image;
  }, [active, total]);

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    startXRef.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startXRef.current;
    setDragX(Math.max(-DRAG_MAX, Math.min(DRAG_MAX, delta)));
  };

  const endDrag = () => {
    if (!isDragging) return;
    if (dragX <= -DRAG_THRESHOLD) goNext();
    else if (dragX >= DRAG_THRESHOLD) goPrev();
    setIsDragging(false);
    setDragX(0);
  };

  const handlePointerUp = () => endDrag();
  const handlePointerCancel = () => { setIsDragging(false); setDragX(0); };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
  };

  const member = teamMembers[active];

  return (
    <div
      className="tc-wrap"
      role="region"
      aria-roledescription="carousel"
      aria-label="Montas team"
      onKeyDown={handleKeyDown}
    >
      <div
        className={`tc-figure${isDragging ? ' tc-figure--dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={isDragging ? handlePointerUp : undefined}
        style={isDragging ? { transform: `translateX(${dragX}px)` } : undefined}
      >
        {/* key={member.name} remounts the slide on change so the CSS
            entrance animation (fade + small shift) replays each time. */}
        <div className="tc-slide" key={member.name}>
          <div className="tc-portrait">
            <img
              src={member.image}
              alt={member.alt}
              width="900"
              height="1125"
              style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
              loading="eager"
              // eslint-disable-next-line react/no-unknown-property -- React 18 needs the lowercase DOM attribute name
              fetchpriority={active === 0 ? 'high' : 'auto'}
              decoding="async"
              draggable="false"
            />
            <span className="tc-slide-number" aria-hidden="true">
              {String(active + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="tc-caption">
            <div className="tc-name">{member.name}</div>
            <div className="tc-role">{member.role}</div>
          </div>
        </div>
      </div>

      <div className="tc-controls">
        <button type="button" className="tc-arrow" onClick={goPrev} aria-label="Previous team member">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="tc-counter">
          <strong>{String(active + 1).padStart(2, '0')}</strong>
          <span className="tc-counter-sep">/</span>
          {String(total).padStart(2, '0')}
        </span>

        <button type="button" className="tc-arrow" onClick={goNext} aria-label="Next team member">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="tc-dots" role="tablist" aria-label="Team members">
        {teamMembers.map((m, i) => (
          <button
            key={m.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={m.name}
            className={`tc-dot${i === active ? ' tc-dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Live region: announces the active member without spamming AT users. */}
      <p className="sr-only" aria-live="polite">
        {`${member.name}, ${member.role}, slide ${active + 1} of ${total}`}
      </p>
    </div>
  );
}
