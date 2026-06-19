import React from 'react'
import { Link } from 'react-router-dom'
import StaggerText from '../shared/StaggerText'
import './Events.css'

const eventData = [
  { id: 1, cardHeight: "250px" },
  { id: 2, cardHeight: "200px" },
  { id: 3, cardHeight: "300px" },
  { id: 4, cardHeight: "220px" },
  { id: 5, cardHeight: "260px" },
  { id: 6, cardHeight: "240px" },
  { id: 7, cardHeight: "280px" },
  { id: 8, cardHeight: "180px" } 
]

const Events = () => {
  return (
    <div className="events-section">
      <div className="events-header">
        <h2 className="section-title">Featured Events</h2>
        <Link to="/events" className="view-all-link">
          <StaggerText text="View All Events" hoverColor="var(--primary)" />
        </Link>
      </div>
      
      <div className="events-masonry">
        {eventData.map(event => (
          <div 
            key={event.id} 
            className="event-card" 
            style={{ height: event.cardHeight }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Events
