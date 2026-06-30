import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SectionRail.css'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'events', label: 'Events' },
  { id: 'team', label: 'Team' },
  { id: 'faq', label: 'FAQ' },
]

/* Desktop-only wayfinding rail for the homepage — tracks which section is in
   view and jumps to a section on click. Hidden on narrow viewports via CSS,
   so it never has to deal with touch/hover quirks. */
const SectionRail = () => {
  const location = useLocation()
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const elements = SECTIONS
      .map(s => document.getElementById(s.id))
      .filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActiveId(topMost.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  if (!isHome) return null

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -20, duration: 1.3 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="section-rail" aria-label="Page sections">
      {SECTIONS.map(s => (
        <button
          key={s.id}
          type="button"
          className={`section-rail-dot ${activeId === s.id ? 'active' : ''}`}
          onClick={() => handleClick(s.id)}
          aria-label={`Jump to ${s.label}`}
        >
          <span className="section-rail-tooltip">{s.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default SectionRail
