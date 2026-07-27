import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section id="story" className="section story-section">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        
        <div className="story-content">
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop" 
              alt="Yohaan and Tanya" 
            />
          </div>
          
          <div className="story-text">
            <h3>How We Met</h3>
            <p>
              It all started in a small coffee shop on a rainy afternoon. What was supposed to be a quick meeting turned into hours of endless conversation, shared laughter, and a connection that felt instantly familiar.
            </p>
            <p>
              Over the years, we've traveled together, supported each other through life's ups and downs, and built a beautiful life surrounded by our amazing friends and family. 
            </p>
            
            <h3 className="mt-4">The Proposal</h3>
            <p>
              On a quiet evening by the beach, exactly where we had our first real date, Yohaan asked the question that would change our lives forever. It was simple, intimate, and absolutely perfect.
            </p>
            <p className="signature">We can't wait to celebrate our special day with you!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
