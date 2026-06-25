import React from 'react'
import { useNavigate } from 'react-router-dom'
import { bentoCards } from '../TeamProfile/teamsData'
import { useReveal } from './useReveal.js'
import './Teams.css'

const Teams = () => {
  const navigate = useNavigate();
  const [ref, isVisible] = useReveal(0.1);

  return (
    <div className="teams-section" ref={ref}>
      <div className={`teams-header-carousel reveal-left ${isVisible ? 'visible' : ''}`}>
        <h2 className="teams-title">Leadership & Team</h2>
        <p className="teams-subtitle">The minds behind SRC '26</p>
      </div>
      
      <div className="teams-carousel-wrapper">
        <div className="teams-carousel-row">
          {bentoCards.map((card, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <div 
                key={card.id} 
                className={`carousel-card reveal-scale reveal-d${Math.min(index + 1, 8)} ${isVisible ? 'visible' : ''}`}
                style={{ '--team-color': card.color || 'var(--primary)' }}
              >
                <div className="carousel-card-number">{num}</div>
                <div className="carousel-card-inner">
                  <h3 className="carousel-team-name">{card.name}</h3>
                  <button className="carousel-know-more" onClick={() => navigate(`/team-profile/${card.id}`)}>
                    <span className="text">View Profile</span> <span className="arrow">&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Teams
