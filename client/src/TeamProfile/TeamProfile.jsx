import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bentoCards } from './teamsData';
import './TeamProfile.css';

const TeamProfile = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const team = bentoCards.find(t => t.id === teamId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReturn = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (!team) {
    return (
      <div className="team-profile-not-found">
        <h2>Team not found</h2>
        <button className="back-btn" onClick={handleReturn}>RETURN TO HOME</button>
      </div>
    );
  }

  return (
    <div className="team-profile-container" style={{ '--team-color': team.color || 'var(--primary)' }}>
      <div className="team-profile-header">
        <button className="back-btn" onClick={handleReturn}>
          RETURN TO HOME
        </button>
      </div>
      
      <div className="team-profile-content">

        <div className="team-profile-left">
          <h1 
            className="team-profile-title"
            style={team.name.length > 18 ? { fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' } : {}}
          >
            {team.name.toUpperCase()}
          </h1>
          <p className="team-profile-subtitle">2026 &nbsp;&nbsp; The minds behind SRC '26.</p>

          <div className="team-image-container">

            <div className="team-image-placeholder">
              <h2 style={team.name.length > 18 ? { fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' } : {}}>
                {team.name.toUpperCase()}
              </h2>
              <p>SRC 2026</p>
            </div>
          </div>
        </div>


        <div className="team-profile-right">
          <section className="profile-section">
            <h3 className="section-title">DESCRIPTION</h3>
            <p className="section-text">{team.description}</p>
          </section>

          <div className="profile-details-grid">
            <section className="profile-section">
              <h3 className="section-title">LEADERSHIP</h3>
              <ul className="details-list">
                {team.chairs.map((chairObj, index) => (
                  <li key={index}>{chairObj.role}: {chairObj.name}</li>
                ))}
              </ul>
            </section>

            {team.coordinators && team.coordinators.length > 0 && (
              <section className="profile-section">
                <h3 className="section-title">COORDINATORS</h3>
                <ul className="details-list">
                  {team.coordinators.map((coordObj, index) => (
                    <li key={index}>{coordObj.role}: {coordObj.name}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
