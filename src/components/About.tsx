import React from 'react';
import '../assets/styles/About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://abogadosaccidentesinglewood.com/wp-content/uploads/2018/02/Oficina-de-Asuntos-Legales.jpg" alt="Law Office" />
              <div className="image-overlay"></div>
            </div>
            <div className="stats-box">
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-number">100+</h3>
                <p className="stat-label">Casos trabajados</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <span className="section-label">Sobre Nosotros</span>
            <h2 className="section-title">
              Excellence in <span className="highlight">Compromiso y Experiencia</span>
            </h2>
            <p className="about-description">
              En Abogados-Alianza-J_R, trabajamos para brindar soluciones legales confiables y personalizadas. Cada caso es único, y nuestro equipo combina experiencia y dedicación para proteger tus derechos con profesionalismo. Nos caracterizamos por:
            </p>
            
            <div className="features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Experiencia comprobada</h4>
                  <p>años de práctica en distintas áreas del derecho.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Compromiso</h4>
                  <p>cada cliente recibe atención cercana y personalizada.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Transparencia</h4>
                  <p>comunicación clara en todo momento, sin sorpresas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;