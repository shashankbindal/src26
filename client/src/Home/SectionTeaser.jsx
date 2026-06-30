import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal.js'
import CountUp from '../shared/CountUp.jsx'
import './SectionTeaser.css'

const SectionTeaser = ({ eyebrow, title, description, ctaLabel, ctaHref, stats, avatars, avatarLabel, reverse }) => {
  const [ref, isVisible] = useReveal(0.15)

  return (
    <section className={`teaser-section ${reverse ? 'reverse' : ''}`} ref={ref}>
      <div className={`teaser-grid ${isVisible ? 'visible' : ''}`}>
        <div className="teaser-content">
          <div className="teaser-eyebrow">
            <span className="teaser-eyebrow-dot" />
            {eyebrow}
          </div>
          <h2 className="teaser-title">{title}</h2>
          <p className="teaser-desc">{description}</p>
          <Link to={ctaHref} className="teaser-btn">
            {ctaLabel}
            <span className="teaser-btn-arrow">→</span>
          </Link>
        </div>

        <div className="teaser-panel">
          <span className="teaser-panel-corner" aria-hidden="true" />

          {stats && stats.length > 0 && (
            <div className="teaser-stats">
              {stats.map((stat, i) => (
                <div key={i} className="teaser-stat">
                  <span className="teaser-stat-num">
                    {stat.display ?? <CountUp value={stat.value} suffix={stat.suffix || ''} />}
                  </span>
                  <span className="teaser-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {avatars && avatars.length > 0 && (
            <div className="teaser-avatar-block">
              <div className="teaser-avatars">
                {avatars.map((src, i) => (
                  <span key={i} className="teaser-avatar" style={{ zIndex: avatars.length - i }}>
                    {src && <img src={src} alt="" loading="lazy" decoding="async" />}
                  </span>
                ))}
              </div>
              {avatarLabel && <span className="teaser-avatar-label">{avatarLabel}</span>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SectionTeaser
