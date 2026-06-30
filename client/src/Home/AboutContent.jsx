import React from 'react'
import { useReveal } from './useReveal.js'
import { useTextScramble } from './useTextScramble.js'
import { useRevealWords } from './useRevealWords.js'
import CountUp from '../shared/CountUp.jsx'
import '../About/About.css'

/* Shared by both the Home page and the dedicated /about page. */
const AboutContent = () => {
  const [block1Ref, block1Visible] = useReveal(0.15)
  const [block2Ref, block2Visible] = useReveal(0.15)
  const [block3Ref, block3Visible] = useReveal(0.15)
  const [block4Ref, block4Visible] = useReveal(0.15)

  const sub1Ref   = useTextScramble('ABOUT SRC', block1Visible, 0.1)
  const title1Ref = useRevealWords(block1Visible, 0.35)
  const sub2Ref   = useTextScramble('CONFERENCE', block2Visible, 0.1)
  const title2Ref = useRevealWords(block2Visible, 0.35)
  const sub3Ref   = useTextScramble('ABOUT AIChE', block3Visible, 0.1)
  const title3Ref = useRevealWords(block3Visible, 0.35)
  const sub4Ref    = useTextScramble('AIChE RGIPT', block4Visible, 0.1)
  const title4aRef = useRevealWords(block4Visible, 0.35)
  const title4bRef = useRevealWords(block4Visible, 0.55)

  return (
    <div className="src-section-ref">

      <div ref={block1Ref} className={`ref-block block-right-image ${block1Visible ? 'visible' : ''}`}>
        <div className="ref-image-wrapper img-right">
          <img src="https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=600&auto=format&fit=crop&q=60" alt="Wind turbines" className="ref-img" loading="lazy" decoding="async" />
        </div>
        <div className="ref-text-content">
          <div className="ref-subtitle"><span className="ref-line" /><span ref={sub1Ref} className="sub-text">ABOUT SRC</span></div>
          <h2 ref={title1Ref} className="ref-title">Student Regional Conference</h2>
          <div className="ref-desc">
            <p>
              The AIChE Student Regional Conference (SRC) is the flagship annual gathering of AIChE
              student chapters across India — a platform for <strong>technical competitions, research
              presentations, and professional networking</strong>. Winners earn the opportunity to
              represent India at AIChE's global student events.
            </p>
            <p>
              Following a successful bid, AIChE India SRC 2026 will be hosted for the first time at
              RGIPT — an Institute of National Importance recognised for excellence in Chemical,
              Petroleum, and Energy Engineering.
            </p>
          </div>
        </div>
      </div>

      <div ref={block2Ref} className={`ref-block block-left-image ${block2Visible ? 'visible' : ''}`}>
        <div className="ref-image-wrapper img-left">
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop" alt="Sustainable energy" className="ref-img" loading="lazy" decoding="async" />
        </div>
        <div className="ref-text-content">
          <div className="ref-subtitle"><span className="ref-line" /><span ref={sub2Ref} className="sub-text">CONFERENCE</span></div>
          <h2 ref={title2Ref} className="ref-title">VIPLAV — AIChE India SRC 2026</h2>
          <div className="ref-desc">
            <p>
              <em>"Every great advancement begins with a revolution of thought."</em>
            </p>
            <p>
              <strong>Viplav</strong> — Sanskrit for transformation, revolution, and progressive change
              — captures the spirit of SRC 2026. Hosted at RGIPT, this edition calls the next
              generation of engineers to transform ideas into impact and ambition into innovation.
            </p>
          </div>
        </div>
      </div>

      <div ref={block3Ref} className={`ref-block block-right-image ${block3Visible ? 'visible' : ''}`}>
        <div className="ref-image-wrapper img-right">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="Global network" className="ref-img" loading="lazy" decoding="async" />
        </div>
        <div className="ref-text-content">
          <div className="ref-subtitle"><span className="ref-line" /><span ref={sub3Ref} className="sub-text">ABOUT AIChE</span></div>
          <h2 ref={title3Ref} className="ref-title">About AIChE</h2>
          <div className="ref-desc">
            <p>
              The American Institute of Chemical Engineers (AIChE) is the world's leading organisation
              for chemical engineering professionals and students — connecting innovators, researchers,
              and industry leaders across 110+ countries to shape the future of the discipline.
            </p>
          </div>
          <div className="ref-stats-row">
            <div className="ref-stat">
              <span className="ref-stat-num"><CountUp value={60000} suffix="+" /></span>
              <span className="ref-stat-label">Members</span>
            </div>
            <div className="ref-stat">
              <span className="ref-stat-num"><CountUp value={110} suffix="+" /></span>
              <span className="ref-stat-label">Countries</span>
            </div>
            <div className="ref-stat">
              <span className="ref-stat-num"><CountUp value={14} /></span>
              <span className="ref-stat-label">Global Regions</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={block4Ref} className={`ref-block block-left-image ${block4Visible ? 'visible' : ''}`}>
        <div className="ref-image-wrapper img-left">
          <img src="/teams.jpg" alt="AIChE RGIPT team" className="ref-img" loading="lazy" decoding="async" />
        </div>
        <div className="ref-text-content">
          <div className="ref-subtitle"><span className="ref-line" /><span ref={sub4Ref} className="sub-text">AIChE RGIPT</span></div>
          <h2 ref={title4aRef} className="ref-title">AIChE RGIPT Student Chapter:</h2>
          <h2 ref={title4bRef} className="ref-title">From Excellence to Eminence</h2>
          <div className="ref-desc">
            <p>
              Established in 2016, the AIChE RGIPT Student Chapter has grown into one of India's
              most decorated chapters — a two-time recipient of the <strong>AIChE Outstanding Student
              Chapter Award</strong>, a proud AIChE Regional Center, and a community of
              over <CountUp value={500} suffix="+" /> members driving innovation at every level.
            </p>
            <p>
              With 200+ dedicated volunteers and strong industry partnerships with IndianOil, GAIL,
              ISRO, and CSIR, the chapter is proud to host <strong>Viplav</strong> — AIChE India
              SRC 2026.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutContent
