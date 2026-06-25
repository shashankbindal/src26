import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="rm-banner-section">
      <div className="rm-banner-header">
        <h2 className="rm-banner-theme">
          Engineering the<br/>
          Decarbonization<br/>
          Revolution
        </h2>
      </div>

      <div className="rm-postits-container">
        <div className="rm-postit rm-postit-c1">
          <h3>Date</h3>
          <p>21st - 23rd August 2026</p>
        </div>
        
        <div className="rm-postit rm-postit-c2">
          <h3>Venue</h3>
          <p>Rajiv Gandhi Institute of Petroleum Technology</p>
        </div>

        <div className="rm-postit rm-postit-c3">
          <h3>Vision</h3>
          <p>Bold, transformative, and driven by innovation.</p>
        </div>

        <div className="rm-postit rm-postit-c4">
          <h3>Goal</h3>
          <p>Accelerating the transition toward a sustainable, low-carbon future.</p>
        </div>
        
        <div className="rm-postit rm-postit-c5">
          <h3>Join Us</h3>
          <p>Be a part of the revolution!</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
