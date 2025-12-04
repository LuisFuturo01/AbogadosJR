import React from 'react';
import '../assets/styles/Hero.scss';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gold-stripe"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="text-content">
              <h1 className="hero-title">
                AUREA<br />
                <span className="highlight">LEGAL & TECH</span>
              </h1>
              <p className="hero-description">
                AUREA, #1 en abogados, ayudamos en todo
              </p>
              <button className="cta-button">CONTACTANOS</button>
            </div>
            <div className="scales-image">
              <img src="./src/assets/images/lawyer/logo.png" alt="Justice Scales" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;