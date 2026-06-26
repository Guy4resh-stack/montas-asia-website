/**
 * AboutValues — compact value/principle cards for the merged "Who we are"
 * section on /about. Distinct class names from the homepage's .pillar
 * system so this can be styled independently without affecting HomePage.
 */

const VALUES = [
  {
    title: 'Clarity first',
    desc: 'We define the offer, audience and market context before production starts.',
  },
  {
    title: 'Built for enquiries',
    desc: 'Websites and campaigns are structured around real user actions, not just presentation.',
  },
  {
    title: 'Local market logic',
    desc: 'We adapt messaging, trust signals and digital channels to the way buyers behave in Southeast Asian markets.',
  },
  {
    title: 'Measured execution',
    desc: 'Tracking, reporting and CRM-ready intake are part of the system from the beginning.',
  },
  {
    title: 'Fast but reviewed',
    desc: 'AI can speed up production, but human review keeps quality, accuracy and brand logic under control.',
  },
  {
    title: 'Practical collaboration',
    desc: 'The process is designed around clear deliverables, feedback loops and business outcomes.',
  },
];

export default function AboutValues() {
  return (
    <div className="av-grid">
      {VALUES.map((v) => (
        <div key={v.title} className="av-card">
          <div className="av-card-title">{v.title}</div>
          <p className="av-card-text">{v.desc}</p>
        </div>
      ))}
    </div>
  );
}
