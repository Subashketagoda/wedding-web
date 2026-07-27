import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="section events-section">
      <div className="container">
        <h2 className="section-title">When & Where</h2>
        
        <div className="events-grid">
          {/* Ceremony */}
          <div className="event-card fade-in">
            <div className="event-image">
              <img src="https://images.unsplash.com/photo-1544253995-17dcad1a0173?q=80&w=2070&auto=format&fit=crop" alt="Ceremony location" />
            </div>
            <div className="event-details">
              <h3>The Ceremony</h3>
              
              <div className="event-info">
                <div className="info-item">
                  <Calendar className="icon" size={20} />
                  <span>Tuesday, December 15, 2026</span>
                </div>
                <div className="info-item">
                  <Clock className="icon" size={20} />
                  <span>3:00 PM - 4:30 PM</span>
                </div>
                <div className="info-item">
                  <MapPin className="icon" size={20} />
                  <span>St. Mary's Church<br/>Colombo 04, Sri Lanka</span>
                </div>
              </div>
              
              <p className="event-desc">
                Join us as we exchange our vows and start our new journey together. Please arrive 15 minutes early to find a seat.
              </p>
              
              <a href="#" className="btn btn-secondary">Get Directions</a>
            </div>
          </div>

          {/* Reception */}
          <div className="event-card fade-in">
            <div className="event-image">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Reception location" />
            </div>
            <div className="event-details">
              <h3>The Reception</h3>
              
              <div className="event-info">
                <div className="info-item">
                  <Calendar className="icon" size={20} />
                  <span>Tuesday, December 15, 2026</span>
                </div>
                <div className="info-item">
                  <Clock className="icon" size={20} />
                  <span>6:30 PM onwards</span>
                </div>
                <div className="info-item">
                  <MapPin className="icon" size={20} />
                  <span>Shangri-La Hotel<br/>Colombo 01, Sri Lanka</span>
                </div>
              </div>
              
              <p className="event-desc">
                Let's celebrate! Join us for dinner, drinks, and a night of dancing to celebrate our newly tied knot. Formal attire requested.
              </p>
              
              <a href="#" className="btn btn-secondary">Get Directions</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
