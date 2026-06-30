import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReveal } from './useReveal.js'
import './Events.css'

const eventData = [
  { id: 1, slug: 'chem-e-car',   title: "Chem-E-Car",         desc: "Design & race a chemical-powered car",         img: "https://www.aiche.org/sites/default/files/images/conference/event/23370477461_f16f1dd228_z.jpg" },
  { id: 2, slug: 'k-12',         title: "K-12 STEM",           desc: "Inspiring the next generation of engineers",   img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80" },
  { id: 3, slug: 'jeopardy',     title: "Chem-E-Jeopardy",    desc: "Test your chemical engineering knowledge",      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80" },
  { id: 4, slug: 'poster',       title: "Poster Presentation", desc: "Showcase your research to industry experts",   img: "https://images.unsplash.com/photo-1515603403036-f3d35f75ca52?q=80&w=1170&auto=format&fit=crop" },
  { id: 5, slug: 'paper',        title: "Paper Presentation",  desc: "Present your technical research & findings",   img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1170&auto=format&fit=crop" },
]

const TX  = [0, 108, 196]
const SCL = [1, 0.82, 0.66]
const OPC = [1, 0.72, 0.42]

const getCardStyle = (offset) => {
  const abs  = Math.abs(offset)
  const sign = Math.sign(offset)
  if (abs > 2) return { opacity: 0, pointerEvents: 'none', transform: `translateX(${sign * 260}%) scale(0.5)`, zIndex: 1 }
  return {
    transform: `translateX(${sign * TX[abs]}%) scale(${SCL[abs]})`,
    zIndex: 10 - abs,
    opacity: OPC[abs],
    pointerEvents: 'auto',
  }
}

const Events = () => {
  const [ref, isVisible] = useReveal(0.1)
  const [active, setActive] = useState(2)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isVisible) return
    const t = setInterval(() => setActive(p => (p + 1) % eventData.length), 4000)
    return () => clearInterval(t)
  }, [isVisible])

  const handleCardClick = useCallback((index) => {
    const offset = Math.abs(index - active)
    if (offset === 0) {
      // Centre card → go to the events page anchored to this event
      navigate(`/events#event-${eventData[index].id}`)
    } else {
      setActive(index)
    }
  }, [active, navigate])

  return (
    <section className="fan-section" ref={ref}>
      <div className={`fan-header ${isVisible ? 'visible' : ''}`}>
        <div className="fan-header-left">
          <span className="fan-eyebrow">Events</span>
          <h2 className="fan-title">Featured Events</h2>
        </div>
        <button className="fan-explore-btn" onClick={() => navigate('/events')}>
          View All →
        </button>
      </div>

      <div className={`fan-stage ${isVisible ? 'visible' : ''}`}>
        <p className="fan-hint">Tap the centre card to explore</p>

        <div className="fan-track">
          {eventData.map((event, i) => {
            let offset = i - active
            if (offset < -2) offset += eventData.length
            if (offset > 2) offset -= eventData.length
            const isCenter = offset === 0

            return (
              <div
                key={event.id}
                className={`fan-card${isCenter ? ' fan-card--active' : ''}`}
                style={getCardStyle(offset)}
                onClick={() => handleCardClick(i)}
                role="button"
                tabIndex={isCenter ? 0 : -1}
                aria-label={isCenter ? `Open ${event.title}` : `Go to ${event.title}`}
                onKeyDown={e => e.key === 'Enter' && handleCardClick(i)}
              >
                <img src={event.img} alt={event.title} className="fan-card-img" loading="lazy" decoding="async" />
                <div className="fan-card-overlay" />
                {isCenter && (
                  <div className="fan-card-label">
                    <span className="fan-card-tag">AIChE SRC 2026</span>
                    <h3 className="fan-card-name">{event.title}</h3>
                    <p className="fan-card-desc">{event.desc}</p>
                  </div>
                )}
                {isCenter && <span className="fan-card-cta">Explore →</span>}
              </div>
            )
          })}
        </div>

        <div className="fan-dots">
          {eventData.map((_, i) => (
            <button
              key={i}
              className={`fan-dot${i === active ? ' fan-dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${eventData[i].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
