import React from 'react';
import '../assets/styles/Team.scss';

interface TeamMember {
  name: string;
  position: string;
  specialty: string;
  image: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Michael Shaffer',
      position: 'Senior Partner',
      specialty: 'Corporate Law',
      image: 'YOUR_LAWYER1_IMAGE_URL'
    },
    {
      name: 'Sarah Johnson',
      position: 'Partner',
      specialty: 'Family Law',
      image: 'YOUR_LAWYER2_IMAGE_URL'
    },
    {
      name: 'David Martinez',
      position: 'Associate',
      specialty: 'Criminal Defense',
      image: 'YOUR_LAWYER3_IMAGE_URL'
    },
    {
      name: 'Emily Chen',
      position: 'Partner',
      specialty: 'Real Estate',
      image: 'YOUR_LAWYER4_IMAGE_URL'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="section-header">
          <span className="section-label">OUR TEAM</span>
          <h2 className="section-title">Meet Our <span className="highlight">Expert Attorneys</span></h2>
          <p className="section-description">
            Experienced professionals dedicated to providing exceptional legal representation
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="social-icons">
                    <a href="#" className="social-icon">in</a>
                    <a href="#" className="social-icon">@</a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <span className="team-specialty">{member.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;