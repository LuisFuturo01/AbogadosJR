import React, { useState } from 'react';
import '../assets/styles/Portafolio.scss';

interface Case {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  result: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases: Case[] = [
    {
      id: 1,
      title: 'Corporate Merger Success',
      category: 'corporate',
      client: 'Tech Industries Inc.',
      year: '2024',
      description: 'Successfully facilitated a complex merger between two major technology companies.',
      result: '$50M merger completed',
      image: 'YOUR_CASE1_IMAGE_URL'
    },
    {
      id: 2,
      title: 'Family Estate Resolution',
      category: 'family',
      client: 'Private Client',
      year: '2023',
      description: 'Resolved complex estate dispute involving multiple beneficiaries.',
      result: 'Amicable settlement reached',
      image: 'YOUR_CASE2_IMAGE_URL'
    },
    {
      id: 3,
      title: 'Criminal Defense Victory',
      category: 'criminal',
      client: 'Confidential',
      year: '2024',
      description: 'Successfully defended client in high-profile criminal case.',
      result: 'All charges dismissed',
      image: 'YOUR_CASE3_IMAGE_URL'
    },
    {
      id: 4,
      title: 'Commercial Real Estate Deal',
      category: 'realestate',
      client: 'Property Group LLC',
      year: '2023',
      description: 'Negotiated favorable terms for large commercial property acquisition.',
      result: '$25M property secured',
      image: 'YOUR_CASE4_IMAGE_URL'
    },
    {
      id: 5,
      title: 'Patent Protection Case',
      category: 'ip',
      client: 'Innovation Corp',
      year: '2024',
      description: 'Protected client\'s intellectual property rights in patent dispute.',
      result: 'Patent rights upheld',
      image: 'YOUR_CASE5_IMAGE_URL'
    },
    {
      id: 6,
      title: 'Business Contract Dispute',
      category: 'corporate',
      client: 'Global Solutions Inc.',
      year: '2023',
      description: 'Resolved complex international business contract dispute.',
      result: '$5M settlement',
      image: 'YOUR_CASE6_IMAGE_URL'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'family', label: 'Family' },
    { id: 'criminal', label: 'Criminal' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'ip', label: 'IP' }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="section-label">OUR WORK</span>
          <h1 className="portfolio-title">Case <span className="highlight">Portfolio</span></h1>
          <p className="portfolio-description">
            Explore our track record of successful legal outcomes and client victories
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="portfolio-container">
          <div className="portfolio-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="cases-grid">
            {filteredCases.map(caseItem => (
              <div key={caseItem.id} className="case-card">
                <div className="case-image">
                  <img src={caseItem.image} alt={caseItem.title} />
                  <div className="case-overlay">
                    <span className="case-category">{caseItem.category}</span>
                  </div>
                </div>
                <div className="case-content">
                  <div className="case-meta">
                    <span className="case-year">{caseItem.year}</span>
                    <span className="case-client">{caseItem.client}</span>
                  </div>
                  <h3 className="case-title">{caseItem.title}</h3>
                  <p className="case-description">{caseItem.description}</p>
                  <div className="case-result">
                    <span className="result-label">Result:</span>
                    <span className="result-text">{caseItem.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;