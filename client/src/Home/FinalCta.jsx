import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal.js'
import './FinalCta.css'

const FinalCta = () => {
  const [ref, isVisible] = useReveal(0.2)

  return (
    <section className="final-cta-wrapper" ref={ref}>
      <div className="final-cta-band">
        <span className="final-cta-mark final-cta-mark-tl" aria-hidden="true" />
        <span className="final-cta-mark final-cta-mark-br" aria-hidden="true" />

        <div className={`final-cta-content ${isVisible ? 'visible' : ''}`}>
          <span className="final-cta-eyebrow">Viplav &mdash; विप्लव &mdash; Revolution</span>
          <h2 className="final-cta-title">Ready to be part of the revolution?</h2>
          <p className="final-cta-desc">
            Join hundreds of chemical engineering students, researchers, and industry leaders
            at RGIPT this August for AIChE India SRC 2026.
          </p>
          <Link to="/register" className="final-cta-btn">
            Register Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
