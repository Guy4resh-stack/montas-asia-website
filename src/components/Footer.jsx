import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Mont<span>as</span></div>
            <p className="footer-tagline">Digital marketing studio for businesses building presence in Southeast Asia.</p>
            <Link to="/contact" className="footer-main-link">
              Start a project →
            </Link>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/cases">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@montas.co">hello@montas.co</a></li>
              <li><span>LINE — available on request</span></li>
              <li><span>WhatsApp — available on request</span></li>
              <li><span>Bangkok, Thailand</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Montas. All rights reserved.</p>
          <p>Marketing studio for Southeast Asian markets.</p>
        </div>
      </div>
    </footer>
  );
}
