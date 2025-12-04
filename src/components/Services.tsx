import React from 'react';
import '../assets/styles/Services.scss';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
        title: 'Civil',
        description: 'Asesoría en contratos, propiedad y conflictos civiles de manera segura.',
        icon: '⚖️'
    },
    {
        title: 'Penal',
        description: 'Defensa legal en procesos penales, garantizando tus derechos.',
        icon: '🛡️'
    },
    {
        title: 'Familiar',
        description: 'Trámites de divorcio, patria potestad y acuerdos familiares con cuidado.',
        icon: '👨‍👩‍👧‍👦'
    },
    {
        title: 'Cooperativa',
        description: 'Asesoría en constitución, administración y conflictos de cooperativas.',
        icon: '🏢'
    },
    {
        title: 'Laboral',
        description: 'Resolución de conflictos laborales y protección de derechos de trabajadores.',
        icon: '💼'
    },
    {
        title: 'Minera',
        description: 'Asesoría legal en permisos, regulaciones y conflictos del sector minero.',
        icon: '⛏️'
    }
    ];


  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-label">¿QUÉ HACEMOS?</span>
          <h2 className="section-title">Nuestros <span className="highlight">Servicios</span></h2>
          <p className="section-description">
            Ofrecemos soluciones legales especializadas para cada necesidad, protegiendo tus derechos con eficacia y compromiso
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;