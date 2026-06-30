import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal.js'
import './Events.css'

const eventData = [
  { id: 1, title: "Chem-E-Jeopardy", desc: "Test your chemical engineering knowledge", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80" },
  { id: 2, title: "Chem-E-Car", desc: "Design & race a chemical-powered car", img: "https://www.aiche.org/sites/default/files/images/conference/event/23370477461_f16f1dd228_z.jpg" },
  { id: 3, title: "Poster Presentation", desc: "Showcase your research to industry experts", img: "https://images.unsplash.com/photo-1515603403036-f3d35f75ca52?q=80&w=1170&auto=format&fit=crop" },
  { id: 4, title: "Paper Presentation", desc: "Present your technical research & findings", img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1170&auto=format&fit=crop" },
  { id: 5, title: "K-12 STEM", desc: "Inspiring the next generation of engineers", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80" }
]

/* Double the array for seamless infinite loop */
const loopedData = [...eventData, ...eventData]

const Events = () => {
  const [ref, isVisible] = useReveal(0.1)
  const mobileTrackRef = useRef(null)

  return (
    <section className="events-section" ref={ref}>
      <div className={`events-header ${isVisible ? 'visible' : ''}`}>
        <div>
          <span className="events-eyebrow">Events</span>
          <h2 className="events-title">Featured Events</h2>
        </div>
        <Link to="/events" className="events-view-all">View All →</Link>
      </div>

      {/* ── Desktop: CSS auto-scroll marquee (no JS needed) ── */}
      <div className="events-marquee-wrap">
        <div className="events-track">
          {loopedData.map((event, i) => (
            <Link
              key={`${event.id}-${i}`}
              to="/events"
              className="event-card"
              tabIndex={i >= eventData.length ? -1 : 0}
              aria-hidden={i >= eventData.length}
            >
              <div className="event-card-img-wrap">
                <img
                  src={event.img}
                  alt={event.title}
                  className="event-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="event-card-body">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-desc">{event.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile: native horizontal scroll with snap ── */}
      <div className="events-mobile-scroll" ref={mobileTrackRef}>
        {eventData.map((event) => (
          <Link
            key={event.id}
            to="/events"
            className="event-card"
          >
            <div className="event-card-img-wrap">
              <img
                src={event.img}
                alt={event.title}
                className="event-card-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="event-card-body">
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-desc">{event.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Events
