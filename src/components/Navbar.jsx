import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#story" onClick={() => setIsMobileMenuOpen(false)}>Story</a>
          <a href="#events" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="#rsvp" onClick={() => setIsMobileMenuOpen(false)}>RSVP</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
