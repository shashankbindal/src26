import React from 'react'
import { Link } from 'react-router-dom'
import StaggerText from '../shared/StaggerText'
import './Events.css'

const eventData = [
  { id: 1, title: "Chem-E-Jeopardy", cardHeight: "250px" },
  { id: 2, title: "Chem-E-Car", cardHeight: "200px" },
  { id: 3, title: "Poster Presentation", cardHeight: "300px" },
  { id: 4, title: "Technical Paper Presentation", cardHeight: "220px" },
  { id: 5, title: "Flagship Event", cardHeight: "260px" },
  { id: 6, title: "K-12 STEM Event", cardHeight: "240px" }
]

const Events = () => {
  return (
    <div className="events-section">
      <div className="events-header">
        <div className="events-header-text">
          <h2 className="events-title">Featured Events</h2>
          <p className="events-subtitle">Discover what's happening at SRC '26</p>
        </div>
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
          >
            <h3 className="event-card-title">{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
