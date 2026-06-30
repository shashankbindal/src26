import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal.js'
import { useTilt } from '../shared/useTilt.js'
import './AboutTeaser.css'

const AboutTeaser = () => {
  const [ref, isVisible] = useReveal(0.15)
  const { onTiltMove, onTiltLeave } = useTilt(4)

  return (
    <section
      className={`about-fused-section ${isVisible ? 'visible' : ''}`}
      ref={ref}
      onMouseMove={onTiltMove}
      onMouseLeave={onTiltLeave}
    >
      <div className="about-fused-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop"
          alt="Energy and chemical engineering infrastructure"
          className="about-fused-image"
          loading="lazy"
          decoding="async"
        />
        <span className="about-fused-overlay" aria-hidden="true" />
      </div>

      <div className="about-fused-content">
        <span className="about-fused-eyebrow">About SRC 2026</span>
        <h2 className="about-fused-title">A Platform for Transformation</h2>
        <p className="about-fused-desc">
          AIChE India SRC 2026 is more than a conference &mdash; it's a movement.
          "VIPLAV" represents the surge of innovation, the courage to challenge
          norms, and the commitment to build a sustainable future, hosted by the
          award-winning AIChE RGIPT Student Chapter.
        </p>
        <Link to="/about" className="about-fused-btn">
          Know More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
      </div>
    </section>
  )
}

export default AboutTeaser
