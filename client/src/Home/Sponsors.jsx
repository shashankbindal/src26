import React from 'react'
import './Sponsors.css'

const Sponsors = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="sponsors-marquee-wrapper">
        <div className="sponsors-marquee-track">
          
          {[...dummyData, ...dummyData].map((item, index) => (
            <div key={index} className="sponsor-card">
              <span className="sponsor-text">Sponsor {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
