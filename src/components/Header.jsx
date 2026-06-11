import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MAIN_WEBSITE_URL = '#'; // ← replace with real URL

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const isHome = location.pathname === '/';

  // On homepage, use hash links; on other pages, use route links back to home sections
  const navLink = (hash, label) =>
    isHome
      ? <a href={hash} onClick={() => setMobileOpen(false)}>{label}</a>
      : <Link to={`/${hash}`}>{label}</Link>;

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo">Mont<span>as</span></Link>
            <nav>
              <a href={isHome ? '#services' : '/#services'}>Services</a>
              <a href={isHome ? '#cases' : '/#cases'}>Cases</a>
              <a href={isHome ? '#about' : '/#about'}>About</a>
              <a href={isHome ? '#process' : '/#process'}>Process</a>
              <a href={isHome ? '#cta' : '/#cta'}>Contact</a>
            </nav>
            <a href={MAIN_WEBSITE_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Visit main website ↗
            </a>
            <button
              className="hamburger"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={mobileOpen ? 'open' : ''} />
              <span className={mobileOpen ? 'open' : ''} />
              <span className={mobileOpen ? 'open' : ''} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <button className="close-nav" onClick={toggleMobile} aria-label="Close menu">✕</button>
        <a href={isHome ? '#services' : '/#services'}>Services</a>
        <a href={isHome ? '#cases' : '/#cases'}>Cases</a>
        <a href={isHome ? '#about' : '/#about'}>About</a>
        <a href={isHome ? '#process' : '/#process'}>Process</a>
        <a href={isHome ? '#cta' : '/#cta'}>Contact</a>
      </div>
    </>
  );
}
