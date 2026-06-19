import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Aiche.css'

gsap.registerPlugin(ScrollTrigger)

const Aiche = () => {
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
          end: "+=150%", 
          pin: true,
          scrub: 1, 
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
    <div className="aiche-section">
      <div className="pin-container" ref={containerRef}>
        <div className="aiche-cards-wrapper">
        <div className="aiche-card card-1" ref={card1Ref}>
          <div className="aiche-card-content">
            <h2 className="aiche-card-title">
              About AIChE
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className="aiche-card card-2" ref={card2Ref}>
          <div className="aiche-card-content">
            <h2 className="aiche-card-title">
              About AIChE at RGIPT
            </h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Aiche
