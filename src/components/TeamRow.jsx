import { teamMembers } from '../data/team.js';

/**
 * TeamRow — full-width horizontal team member strip for the /about page's
 * "Who we are" section. Shows all six approved Montas team members side by
 * side (photo, name, role) rather than one at a time — unlike the homepage
 * TeamCarousel. On desktop the row fits within the container at full
 * width; on narrower viewports it becomes a native horizontal scroll
 * (CSS scroll-snap, no JS) so nothing gets clipped or squeezed.
 */
export default function TeamRow() {
  return (
    <div className="team-row" role="list" aria-label="Montas team">
      {teamMembers.map((member, i) => (
        <div key={member.name} className="team-row-card" role="listitem">
          <div className="team-row-photo-wrap">
            <img
              src={member.image}
              alt={member.alt}
              width="900"
              height="1125"
              style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
          <div className="team-row-name">{member.name}</div>
          <div className="team-row-role">{member.role}</div>
        </div>
      ))}
    </div>
  );
}
