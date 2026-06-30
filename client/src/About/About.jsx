import React from 'react'
import { useReveal } from '../Home/useReveal.js'
import { useTextScramble } from '../Home/useTextScramble.js'
import { useRevealWords } from '../Home/useRevealWords.js'
import CountUp from '../shared/CountUp.jsx'
import '../Home/animations.css'
import './About.css'

const About = () => {
  const [headerRef, headerVisible] = useReveal(0.1)

  const [block1Ref, block1Visible] = useReveal(0.15)
  const [block2Ref, block2Visible] = useReveal(0.15)
  const [block3Ref, block3Visible] = useReveal(0.15)
  const [block4Ref, block4Visible] = useReveal(0.15)

  /* ── Block 1 animations ── */
  const sub1Ref   = useTextScramble('ABOUT SRC', block1Visible, 0.1)
  const title1Ref = useRevealWords(block1Visible, 0.35)

  /* ── Block 2 animations ── */
  const sub2Ref   = useTextScramble('CONFERENCE', block2Visible, 0.1)
  const title2Ref = useRevealWords(block2Visible, 0.35)

  /* ── Block 3 animations ── */
  const sub3Ref   = useTextScramble('ABOUT AIChE', block3Visible, 0.1)
  const title3Ref = useRevealWords(block3Visible, 0.35)

  /* ── Block 4 animations ── */
  const sub4Ref    = useTextScramble('AIChE RGIPT STUDENT CHAPTER', block4Visible, 0.1)
  const title4aRef = useRevealWords(block4Visible, 0.35)
  const title4bRef = useRevealWords(block4Visible, 0.55)

  return (
    <>
      <div className="about-hero">
        <div ref={headerRef} className={`about-hero-content reveal-scale ${headerVisible ? 'visible' : ''}`}>
          <span className="about-hero-eyebrow">About</span>
          <h1 className="about-hero-title">VIPLAV — AIChE India SRC 2026</h1>
        </div>
      </div>

      <div className="src-section-ref">

        {/* Block 1 — Text Left, Image Right */}
        <div ref={block1Ref} className={`ref-block block-right-image ${block1Visible ? 'visible' : ''}`}>
          <div className="ref-image-wrapper img-right">
            <img
              src="https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=600&auto=format&fit=crop&q=60"
              alt="Wind turbines landscape"
              className="ref-img"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ref-text-content">
            <div className="ref-subtitle">
              <span className="ref-line" />
              <span ref={sub1Ref} className="sub-text">ABOUT SRC</span>
            </div>
            <h2 ref={title1Ref} className="ref-title">
              Student Regional Conference (SRC)
            </h2>
            <div className="ref-desc">
              <p>
                The AIChE Student Regional Conference (SRC) is the flagship annual gathering of
                AIChE student chapters across the India Region. Bringing together hundreds of
                students, researchers, academicians, and industry professionals, SRC serves as a
                platform for <strong>technical competitions, research presentations, professional
                networking, and leadership development</strong>. The conference provides participants
                with opportunities to showcase their innovations, exchange ideas, and engage with
                emerging trends shaping the future of chemical engineering and allied industries.
                Winners of several SRC competitions also earn the opportunity to represent the
                region at AIChE's global student events.
              </p>
              <p>
                In India, SRC has been previously hosted by esteemed institutions such as
                AIChE-VIT's SRC, MIT-WPU's SYNTROPY, Ahmedabad
                University's ALCHEMY, SVNIT Surat's SYNERGICON, NIT Rourkela's STHITIVARTANA, ICT IOCB's NAIMISHYA.
              </p>
              <p>
                <em>
                  "Following a successful bid, AIChE India SRC 2026 will be hosted for the first
                  time at RGIPT, a premier Institute of National Importance recognized for its
                  excellence in Chemical, Petroleum, and Energy Engineering. This milestone reflects
                  the growing prominence of both RGIPT and its award-winning AIChE Student Chapter
                  on the national stage."
                </em>
              </p>
            </div>
          </div>
        </div>

        {/* Block 2 — Image Left, Text Right */}
        <div ref={block2Ref} className={`ref-block block-left-image ${block2Visible ? 'visible' : ''}`}>
          <div className="ref-image-wrapper img-left">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop"
              alt="Sustainable energy landscape"
              className="ref-img"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ref-text-content">
            <div className="ref-subtitle">
              <span className="ref-line" />
              <span ref={sub2Ref} className="sub-text">CONFERENCE</span>
            </div>
            <h2 ref={title2Ref} className="ref-title">
              VIPLAV — AIChE India SRC 2026
            </h2>
            <div className="ref-desc">
              <p>
                <em>
                  "Every great advancement begins with a revolution of thought. This year, AIChE
                  India SRC 2026 proudly presents Viplav — a call to transform ideas into impact,
                  challenges into opportunities, and ambition into innovation."
                </em>
              </p>
              <p>
                <strong>Viplav</strong>, a Sanskrit term signifying transformation, revolution,
                and progressive change, captures the spirit of AIChE India SRC 2026.
              </p>
              <p>
                Hosted by Rajiv Gandhi Institute of Petroleum Technology (RGIPT) — an Institute
                of National Importance renowned for its excellence in Chemical Engineering,
                Petroleum Engineering, and Energy studies — this theme reflects the institute's
                commitment to innovation, academic rigour, and industry-oriented learning.
              </p>
              <p>
                SRC 2026 aims to inspire the next generation of engineers while addressing the
                evolving challenges and opportunities in the chemical, energy, and process
                industries. More than a conference, <strong>Viplav</strong> is a celebration of
                transformation, innovation, and the collective vision shaping the future of
                engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Block 3 — Text Left, Image Right */}
        <div ref={block3Ref} className={`ref-block block-right-image ${block3Visible ? 'visible' : ''}`}>
          <div className="ref-image-wrapper img-right">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
              alt="Global tech network"
              className="ref-img"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ref-text-content">
            <div className="ref-subtitle">
              <span className="ref-line" />
              <span ref={sub3Ref} className="sub-text">ABOUT AIChE</span>
            </div>
            <h2 ref={title3Ref} className="ref-title">
              About AIChE
            </h2>
            <div className="ref-desc">
              <p>
                The American Institute of Chemical Engineers (AIChE) is the world's leading
                organization for chemical engineering professionals and students. With a global
                network, AIChE promotes innovation, knowledge exchange, professional growth, and
                technological advancement through conferences, publications, competitions, and
                leadership opportunities.
              </p>
              <p>
                With over 60,000 members from 110+ countries and a presence in 14 global regions,
                AIChE unites students, researchers, and industry leaders to shape the future of
                chemical engineering across core industries and emerging fields.
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

        {/* Block 4 — Image Left, Text Right */}
        <div ref={block4Ref} className={`ref-block block-left-image ${block4Visible ? 'visible' : ''}`}>
          <div className="ref-image-wrapper img-left">
            <img
              src="/teams.jpg"
              alt="AIChE RGIPT team"
              className="ref-img"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ref-text-content">
            <div className="ref-subtitle">
              <span className="ref-line" />
              <span ref={sub4Ref} className="sub-text">AIChE RGIPT STUDENT CHAPTER</span>
            </div>
            <h2 ref={title4aRef} className="ref-title">
              AIChE RGIPT STUDENT CHAPTER:
            </h2>
            <h2 ref={title4bRef} className="ref-title">
              From Excellence to Eminence
            </h2>
            <div className="ref-desc">
              <p>
                <em>
                  "Having earned the privilege of hosting AIChE India SRC 2026, RGIPT stands ready
                  to welcome the nation's brightest minds to a campus synonymous with academic
                  excellence, innovation, and leadership in Chemical and Petroleum Engineering."
                </em>
              </p>
              <p>
                Established in 2016, the AIChE RGIPT Student Chapter has grown into one of India's
                most distinguished and dynamic student chapters, building a strong community of
                over <CountUp value={500} suffix="+" /> members over the years. Based at the Rajiv Gandhi Institute of Petroleum
                Technology (RGIPT), an Institute of National Importance renowned for Chemical,
                Petroleum, and Energy Engineering, the chapter has consistently fostered
                innovation, leadership, and professional excellence.
              </p>
              <p>
                Recognized with the prestigious AIChE Outstanding Student Chapter Award for two
                consecutive years, the chapter serves as a proud AIChE Regional Center and has
                maintained a strong international presence through multiple members serving on the
                AIChE Executive Student Committee (ESC). The chapter has also strengthened global
                engagement through collaborations with international student chapters, including
                its former sister chapter, AIChE UI Indonesia.
              </p>
              <p>
                Over the years, AIChE RGIPT has successfully organised numerous technical,
                professional, and outreach initiatives while building strong relationships with
                leading organisations such as IndianOil, GAIL, HPCL, ONGC, MRPL, NRL, Indorama,
                ISRO, and CSIR. Today, with the collective efforts of 200+ dedicated student
                volunteers, the chapter is proudly hosting AIChE India SRC 2026 –{' '}
                <strong>Viplav</strong>, striving to deliver one of the most impactful and
                memorable editions of the conference while continuing its tradition of excellence,
                leadership, and innovation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
