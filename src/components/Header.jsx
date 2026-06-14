import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const path = location.pathname;
  const isActive = (href) => path === href || path.startsWith(href + '/');

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo">Mont<span>as</span></Link>
            <nav>
              <Link to="/services" className={isActive('/services') ? 'nav-active' : ''}>Services</Link>
              <Link to="/cases" className={isActive('/cases') ? 'nav-active' : ''}>Cases</Link>
              <Link to="/about" className={isActive('/about') ? 'nav-active' : ''}>About</Link>
              <Link to="/process" className={isActive('/process') ? 'nav-active' : ''}>Process</Link>
              <Link to="/contact" className={isActive('/contact') ? 'nav-active' : ''}>Contact</Link>
            </nav>
            <Link to="/contact" className="btn-primary">
              Start a project →
            </Link>
            <button
              className="hamburger"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <button className="close-nav" onClick={toggleMobile} aria-label="Close menu">✕</button>
        <Link to="/services">Services</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/about">About</Link>
        <Link to="/process">Process</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
