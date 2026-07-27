import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner fade-in">
        <h2 className="footer-initials">Y & T</h2>
        <p className="footer-date">15 . 12 . 2026</p>
        <p className="footer-thanks">Thank you for being part of our story.</p>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Yohaan & Tanya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
