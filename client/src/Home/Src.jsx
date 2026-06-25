import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useReveal } from './useReveal.js'
import { useStaggerLines } from './useStaggerLines.js'
import './Src.css'

const Src = () => {
  const [card1Ref, card1Visible] = useReveal(0.15);
  const [card2Ref, card2Visible] = useReveal(0.15);
  const text1Ref = useStaggerLines('p', 0.15);
  const text2Ref = useStaggerLines('p', 0.15);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  // Title slam-in when card becomes visible
  useEffect(() => {
    if (card1Visible && title1Ref.current) {
      gsap.fromTo(title1Ref.current,
        { opacity: 0, x: -60, skewX: -5 },
        { opacity: 1, x: 0, skewX: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [card1Visible]);

  useEffect(() => {
    if (card2Visible && title2Ref.current) {
      gsap.fromTo(title2Ref.current,
        { opacity: 0, x: 60, skewX: 5 },
        { opacity: 1, x: 0, skewX: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [card2Visible]);

  return (
    <div className="src-section">
      <div className="info-cards-wrapper">
        <div ref={card1Ref} className={`info-card card-1 reveal-left ${card1Visible ? 'visible' : ''}`}>
          <div className="info-card-content">
            <h2 className="info-card-title" ref={title1Ref}>
              Student Regional Conference (SRC)
            </h2>
            <div className="info-card-text" ref={text1Ref}>
              <p>The AIChE Student Regional Conference (SRC) is the flagship annual gathering of AIChE student chapters across the India Region. Bringing together hundreds of students, researchers, academicians, and industry professionals, SRC serves as a platform for <strong>technical competitions, research presentations, professional networking, and leadership development</strong>. The conference provides participants with opportunities to showcase their innovations, exchange ideas, and engage with emerging trends shaping the future of chemical engineering and allied industries. Winners of several SRC competitions also earn the opportunity to represent the region at AIChE's global student events.</p>
              <p>In India, SRC has been previously hosted by esteemed institutions such as <strong>AIChE-VIT's SRC</strong> , <strong>MIT-WPU's SYNTROPY</strong> , <strong>NIT Rourkela's STHITIVARTANA</strong>, <strong>Ahmedabad University's ALCHEMY</strong> , <strong>SVNIT Surat's SYNERGICON</strong> , <strong>ICT IOCB's NAIMISHYA</strong>. </p>
              <p><em>"Following a successful bid, AIChE India SRC 2026 will be hosted for the first time at RGIPT, a premier Institute of National Importance recognized for its excellence in Chemical, Petroleum, and Energy Engineering. This milestone reflects the growing prominence of both RGIPT and its award-winning AIChE Student Chapter on the national stage."</em></p>
            </div>
          </div>
        </div>

        <div ref={card2Ref} className={`info-card card-2 reveal-right ${card2Visible ? 'visible' : ''}`}>
          <div className="info-card-content">
            <h2 className="info-card-title" ref={title2Ref}>
              VIPLAV - AIChE India SRC 2026
            </h2>
            <div className="info-card-text" ref={text2Ref}>
              <p><em>"Every great advancement begins with a revolution of thought. This year, AIChE India SRC 2026 proudly presents <strong>Viplav</strong> - a call to transform ideas into impact, challenges into opportunities, and ambition into innovation."</em></p>
              <p><em><strong>Viplav</strong></em>, a Sanskrit term signifying <strong>transformation, revolution, and progressive change</strong>, captures the spirit of AIChE India SRC 2026.</p>
              <p><strong>Hosted by Rajiv Gandhi Institute of Petroleum Technology (RGIPT) - an Institute of National Importance renowned for its excellence in Chemical Engineering, Petroleum Engineering, and Energy studies - this theme reflects the institute's commitment to innovation, academic rigour, and industry-oriented learning.</strong></p>
              <p>SRC 2026 aims to inspire the next generation of engineers while addressing the evolving challenges and opportunities in the chemical, energy, and process industries. More than a conference, <strong>Viplav</strong> is a celebration of transformation, innovation, and the collective vision shaping the future of engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Src
