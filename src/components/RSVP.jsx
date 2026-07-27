import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    dietary: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your RSVP! We can't wait to celebrate with you.");
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guests: '1',
      dietary: '',
      message: ''
    });
  };

  return (
    <section id="rsvp" className="section rsvp-section">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        
        <div className="rsvp-container fade-in">
          <p className="rsvp-intro">Please let us know if you can make it by November 15, 2026.</p>
          
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="John & Jane Doe"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Will you attend?</label>
                <select 
                  name="attending"
                  className="form-input" 
                  value={formData.attending}
                  onChange={handleChange}
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              
              <div className="form-group half">
                <label className="form-label">Number of Guests</label>
                <select 
                  name="guests"
                  className="form-input"
                  value={formData.guests}
                  onChange={handleChange}
                  disabled={formData.attending === 'no'}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Dietary Requirements</label>
              <input 
                type="text" 
                name="dietary"
                className="form-input" 
                value={formData.dietary}
                onChange={handleChange}
                placeholder="e.g. Vegetarian, Gluten-free"
                disabled={formData.attending === 'no'}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message for the Couple (Optional)</label>
              <textarea 
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a wish or a song request!"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-submit">Send RSVP</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
