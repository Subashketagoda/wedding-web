import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="gallery-inner">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item fade-in">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Share the Love */}
        <div className="share-love">
          <div className="share-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
          </div>
          <h3 className="share-title">SHARE THE LOVE</h3>
          <p className="share-text">
            Help us capture our special day by sharing your photos and stories.
          </p>
          <div className="share-hashtag">
            <span>#YohaanAndTanya</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
