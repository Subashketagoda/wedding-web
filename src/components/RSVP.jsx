import React from 'react';
import './RSVP.css';

const RSVP = () => {
  return (
    <section id="rsvp" className="section rsvp-section">
      <div className="rsvp-inner">
        <div className="rsvp-card fade-in">
          <div className="rsvp-header">
            <h2 className="section-title">RSVP</h2>
            <p className="rsvp-subtitle">KINDLY RESPOND BY</p>
            <p className="rsvp-deadline">November 15th, 2026</p>
          </div>

          <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" id="name" placeholder="Name(s)" required />
            </div>
            
            <div className="form-group">
              <select id="attendance" required defaultValue="">
                <option value="" disabled>Will you attend?</option>
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div className="form-group">
              <input type="number" id="guests" placeholder="Number of Guests" min="1" max="5" />
            </div>

            <div className="form-group">
              <textarea id="message" placeholder="Leave a message for the couple..." rows="3"></textarea>
            </div>

            <button type="submit" className="btn rsvp-btn">Send RSVP</button>
          </form>
          
          <div className="rsvp-decorative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 8H10L12 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M12 16V22" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
