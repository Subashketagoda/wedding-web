import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content fade-in">
        <h4 className="hero-subtitle">WE'RE GETTING MARRIED</h4>
        <h1 className="hero-title">Yohaan & Tanya</h1>
        <div className="hero-date">
          <span>SAVE THE DATE</span>
          <p>DECEMBER 15, 2026 • COLOMBO, SRI LANKA</p>
        </div>
        <a href="#rsvp" className="btn hero-btn">RSVP Now</a>
      </div>
    </section>
  );
};

export default Hero;
