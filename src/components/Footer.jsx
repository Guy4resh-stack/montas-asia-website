import { Link } from 'react-router-dom';

const MAIN_WEBSITE_URL = '#'; // ← replace with real URL

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Mont<span>as</span></div>
            <p className="footer-tagline">Digital marketing studio for businesses building presence in Southeast Asia.</p>
            <a href={MAIN_WEBSITE_URL} className="footer-main-link" target="_blank" rel="noopener noreferrer">
              Main website ↗
            </a>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#cases">Cases</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#process">Process</a></li>
              <li><a href="/#why-asia">Why Asia</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@montas.co">hello@montas.co</a></li>
              <li><span>LINE: [add ID]</span></li>
              <li><span>WhatsApp: [add number]</span></li>
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
