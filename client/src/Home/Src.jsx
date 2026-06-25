import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Src.css'

gsap.registerPlugin(ScrollTrigger)

const Src = () => {
  const containerRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.set(card2Ref.current, { x: "100vw", opacity: 0.5 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=200%", 
          pin: true,
          scrub: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      })

      tl.to(card1Ref.current, {
        scale: 0.9,
        xPercent: -5,
        opacity: 0.5,
        duration: 1
      }, 0)

      tl.to(card2Ref.current, {
        x: "0vw",
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, 0)

    }, containerRef)

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 500)
    document.fonts.ready.then(() => ScrollTrigger.refresh())

    return () => {
      clearTimeout(timeout)
      ctx.revert()
    }
  }, [])

  return (
    <div className="src-section">
      <div className="pin-container" ref={containerRef}>
        <div className="info-cards-wrapper">
        <div className="info-card card-1" ref={card1Ref}>
          <div className="info-card-content">
            <h2 className="info-card-title">
              Student Regional Conference (SRC)
            </h2>
            <div className="info-card-text">
              <p>The AIChE Student Regional Conference (SRC) is the flagship annual gathering of AIChE student chapters across the India Region. Bringing together hundreds of students, researchers, academicians, and industry professionals, SRC serves as a platform for <strong>technical competitions, research presentations, professional networking, and leadership development</strong>. The conference provides participants with opportunities to showcase their innovations, exchange ideas, and engage with emerging trends shaping the future of chemical engineering and allied industries. Winners of several SRC competitions also earn the opportunity to represent the region at AIChE's global student events.</p>
              <p>In India, SRC has been previously hosted by esteemed institutions such as <strong>AIChE-VIT’s SRC</strong> , <strong>MIT-WPU’s SYNTROPY</strong> , <strong>NIT Rourkela’s STHITIVARTANA</strong>, <strong>Ahmedabad University’s ALCHEMY</strong> , <strong>SVNIT Surat’s SYNERGICON</strong> , <strong>ICT IOCB’s NAIMISHYA</strong>. </p>
              <p><em>"Following a successful bid, AIChE India SRC 2026 will be hosted for the first time at RGIPT, a premier Institute of National Importance recognized for its excellence in Chemical, Petroleum, and Energy Engineering. This milestone reflects the growing prominence of both RGIPT and its award-winning AIChE Student Chapter on the national stage."</em></p>
            </div>
          </div>
        </div>

        <div className="info-card card-2" ref={card2Ref}>
          <div className="info-card-content">
            <h2 className="info-card-title">
              VIPLAV - AIChE India SRC 2026
            </h2>
            <div className="info-card-text">
              <p><em>"Every great advancement begins with a revolution of thought. This year, AIChE India SRC 2026 proudly presents <strong>Viplav</strong> - a call to transform ideas into impact, challenges into opportunities, and ambition into innovation."</em></p>
              <p><em><strong>Viplav</strong></em>, a Sanskrit term signifying <strong>transformation, revolution, and progressive change</strong>, captures the spirit of AIChE India SRC 2026.</p>
              <p><strong>Hosted by Rajiv Gandhi Institute of Petroleum Technology (RGIPT) - an Institute of National Importance renowned for its excellence in Chemical Engineering, Petroleum Engineering, and Energy studies - this theme reflects the institute's commitment to innovation, academic rigour, and industry-oriented learning.</strong></p>
              <p>SRC 2026 aims to inspire the next generation of engineers while addressing the evolving challenges and opportunities in the chemical, energy, and process industries. More than a conference, <strong>Viplav</strong> is a celebration of transformation, innovation, and the collective vision shaping the future of engineering.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Src
