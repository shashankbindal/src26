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
    <div className="src-section">
      <div className="pin-container" ref={containerRef}>
        <div className="info-cards-wrapper">
        <div className="info-card card-1" ref={card1Ref}>
          <div className="info-card-content">
            <h2 className="info-card-title">
              About <span className="target-src-placeholder">SRC</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className="info-card card-2" ref={card2Ref}>
          <div className="info-card-content">
            <h2 className="info-card-title">
              About Viplav
            </h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Src
