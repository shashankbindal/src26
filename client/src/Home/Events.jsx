import React from 'react'
import { Link } from 'react-router-dom'
import StaggerText from '../shared/StaggerText'
import { useReveal } from './useReveal.js'
import './Events.css'

const eventData = [
  { id: 1, title: "Chem-E-Jeopardy", bg: "#00a651", color: "#fff" },
  { id: 2, title: "Chem-E-Car", bg: "#ff7e40", color: "#000" },
  { id: 3, title: "Poster Presentation", bg: "#f5eedc", color: "#000" },
  { id: 4, title: "Technical Paper Presentation", bg: "#00a651", color: "#fff" },
  { id: 5, title: "Flagship Event", bg: "#000", color: "#fff" },
  { id: 6, title: "K-12 STEM Event", bg: "#ff7e40", color: "#000" }
]

const Events = () => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <div className="rm-events-section" ref={ref}>
      <div className={`rm-events-header reveal-left ${isVisible ? 'visible' : ''}`}>
        <h3 className="rm-events-title">Featured Events</h3>
        <Link to="/events" className="rm-view-all-link">
          View All &#8594;
        </Link>
      </div>
      
      <div className="rm-events-grid">
        {eventData.map((event, index) => (
          <div 
            key={event.id} 
            className={`rm-event-block rm-event-block-${index} reveal-scale reveal-d${index + 1} ${isVisible ? 'visible' : ''}`}
            style={{ backgroundColor: event.bg, color: event.color }}
          >
            <h4 className="rm-event-block-title">{event.title}</h4>
            <div className="rm-event-block-icon">★</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
