import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-12-15T15:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Couple"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">WE'RE GETTING MARRIED</p>

        <h1 className="hero-names">
          <span className="hero-name-script">Yohaan & Tanya</span>
        </h1>

        <p className="hero-date-text">15.12.2026</p>

        <div className="hero-decorative">
          <span>❦</span>
        </div>
      </div>

      {/* Torn edge */}
      <div className="hero-torn-edge"></div>

      {/* Countdown */}
      <div className="countdown-section">
        <div className="countdown-grid">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
