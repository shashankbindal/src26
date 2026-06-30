import React from 'react'
import { useReveal } from '../Home/useReveal.js'
import AboutContent from '../Home/AboutContent.jsx'
import '../Home/animations.css'
import './About.css'

const About = () => {
  const [headerRef, headerVisible] = useReveal(0.1)

  return (
    <>
      <div className="about-hero">
        <div ref={headerRef} className={`about-hero-content reveal-scale ${headerVisible ? 'visible' : ''}`}>
          <span className="about-hero-eyebrow">About</span>
          <h1 className="about-hero-title">VIPLAV — AIChE India SRC 2026</h1>
        </div>
      </div>

      <AboutContent />
    </>
  )
}

export default About
