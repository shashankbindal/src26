import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { bentoCards } from '../TeamProfile/teamsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Teams.css'

gsap.registerPlugin(ScrollTrigger)

const Teams = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const row = rowRef.current;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: () => `+=${row.scrollWidth}`,
          scrub: 1,
          pin: true,
        }
      });

      tl.to(row, {
        x: () => -(row.scrollWidth - window.innerWidth + 100),
        ease: "none",
      });

    }, sectionRef);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      clearTimeout(timeout);
      ctx.revert();
    }
  }, []);

  return (
    <div className="teams-section" ref={sectionRef}>
      <div className="teams-header-carousel">
        <h2 className="teams-title">Leadership & Team</h2>
        <p className="teams-subtitle">The minds behind SRC '26</p>
      </div>
      
      <div className="teams-carousel-wrapper">
        <div className="teams-carousel-row" ref={rowRef}>
          {bentoCards.map((card, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <div key={card.id} className="carousel-card" style={{ '--team-color': card.color || 'var(--primary)' }}>
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
