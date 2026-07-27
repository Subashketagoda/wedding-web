import React from 'react';
import './OurStory.css';

const OurStory = () => {
  const timelineEvents = [
    { time: '15:00', label: 'Location arrival', icon: '📍' },
    { time: '16:00', label: 'Ceremony', icon: '⛪' },
    { time: '17:00', label: 'Toast', icon: '🥂' },
    { time: '18:30', label: 'Dinner', icon: '🍽️' },
    { time: '20:00', label: 'Party', icon: '🎵' },
  ];

  return (
    <section id="story" className="section story-section">
      <div className="story-inner">
        <h2 className="section-title">The Wedding Day</h2>

        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="timeline-icon">{event.icon}</div>
              <div className="timeline-line"></div>
              <div className="timeline-content">
                <span className="timeline-time">{event.time}</span>
                <span className="timeline-label">{event.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Couple photo */}
        <div className="story-photo-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop"
            alt="Yohaan and Tanya"
            className="story-photo"
          />
        </div>

        <div className="story-text">
          <h3>How We Met</h3>
          <p>
            It all started in a small coffee shop on a rainy afternoon. What was supposed to be a quick meeting turned into hours of endless conversation and a connection that felt instantly familiar.
          </p>
          <p className="story-signature">
            We can't wait to celebrate with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
