import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h2 className="footer-title">Yohaan & Tanya</h2>
        <p className="footer-date">December 15, 2026</p>
        <p className="footer-hashtag">#YohaanAndTanyaSayIzy</p>
        
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#story">Our Story</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#rsvp">RSVP</a>
        </div>
        
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Yohaan & Tanya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
