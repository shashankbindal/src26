import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal.js'
import './AboutTeaser.css'

const AboutTeaser = () => {
  const [ref, isVisible] = useReveal(0.15)

  return (
    <section className="about-teaser-wrapper" ref={ref}>
      <div className={`about-teaser-card ${isVisible ? 'visible' : ''}`}>
        <span className="about-teaser-glow" aria-hidden="true" />

        <div className="about-teaser-text">
          <span className="about-teaser-eyebrow">About SRC 2026</span>
          <h2 className="about-teaser-title">A Platform for Transformation</h2>
          <p className="about-teaser-desc">
            AIChE India SRC 2026 is more than a conference &mdash; it's a movement.
            "VIPLAV" represents the surge of innovation, the courage to challenge
            norms, and the commitment to build a sustainable future, hosted by the
            award-winning AIChE RGIPT Student Chapter.
          </p>
          <Link to="/about" className="about-teaser-btn">
            Know More
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>

        <div className="about-teaser-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop"
            alt="Energy and chemical engineering infrastructure"
            className="about-teaser-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutTeaser
