import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Registration.css'

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="reg-simple-container">
      <h1 className="reg-simple-title">Registration Not Yet Started</h1>
      <p className="reg-simple-desc">Event registration has not started yet. Please check back later.</p>
      
      <button className="reg-simple-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  )
}

export default Registration
