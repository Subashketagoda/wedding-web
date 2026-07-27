import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="section events-section">
      <div className="events-inner">

        {/* Ceremony Card */}
        <div className="event-card fade-in">
          <div className="event-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L28 16H20L24 4Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <rect x="12" y="16" width="24" height="24" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M20 40V28H28V40" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M24 16V4" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="24" y1="2" x2="24" y2="4" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="24" cy="1.5" r="1" fill="currentColor"/>
              <rect x="16" y="20" width="4" height="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <rect x="28" y="20" width="4" height="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            </svg>
          </div>
          <h3 className="event-title">Ceremony</h3>
          <div className="event-time">16:00</div>
          <div className="event-venue">ST. MARY'S CHURCH</div>
          <div className="event-address">Colombo 04, Sri Lanka</div>
          <a href="#" className="btn event-btn">View Details</a>
        </div>

        {/* Decorative separator */}
        <div className="events-separator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 8H10L12 2Z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M12 16V22" stroke="currentColor" strokeWidth="0.8"/>
          </svg>
        </div>

        {/* Reception Card */}
        <div className="event-card fade-in">
          <div className="event-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 32C16 24 20 20 24 18C28 20 32 24 32 32" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="20" y1="40" x2="28" y2="40" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M14 32C14 22 18 16 24 14C30 16 34 22 34 32" stroke="currentColor" strokeWidth="0.6" fill="none" strokeDasharray="2 2"/>
              <circle cx="18" cy="14" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="30" cy="14" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <path d="M19 12L21 8" stroke="currentColor" strokeWidth="0.8"/>
              <path d="M29 12L27 8" stroke="currentColor" strokeWidth="0.8"/>
            </svg>
          </div>
          <h3 className="event-title">Reception</h3>
          <div className="event-time">18:30</div>
          <div className="event-venue">SHANGRI-LA HOTEL</div>
          <div className="event-address">Colombo 01, Sri Lanka</div>
          <a href="#" className="btn event-btn">View Details</a>
        </div>
      </div>
    </section>
  );
};

export default Events;
