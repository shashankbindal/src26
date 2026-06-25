import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useReveal } from './useReveal.js'
import { useStaggerLines } from './useStaggerLines.js'
import './Aiche.css'

const Aiche = () => {
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
        { opacity: 0, x: 60, skewX: 5 },
        { opacity: 1, x: 0, skewX: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [card1Visible]);

  useEffect(() => {
    if (card2Visible && title2Ref.current) {
      gsap.fromTo(title2Ref.current,
        { opacity: 0, x: -60, skewX: -5 },
        { opacity: 1, x: 0, skewX: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [card2Visible]);

  return (
    <div className="aiche-section">
      <div className="aiche-cards-wrapper">
        <div ref={card1Ref} className={`aiche-card card-1 reveal-right ${card1Visible ? 'visible' : ''}`}>
          <div className="aiche-card-content">
            <h2 className="aiche-card-title" ref={title1Ref}>
              About AIChE
            </h2>
            <div className="aiche-card-text" ref={text1Ref}>
              <p>The American Institute of Chemical Engineers (AIChE) is the world's leading organization for chemical engineering professionals and students. With a global network , AIChE promotes innovation, knowledge exchange, professional growth, and technological advancement through conferences, publications, competitions, and leadership opportunities.</p>
              <p>With over 60,000 members from 110+ countries and a presence in 14 global regions, AIChE unites students, researchers, and industry leaders to shape the future of chemical engineering across core industries and emerging fields .</p>
            </div>
          </div>
        </div>

        <div ref={card2Ref} className={`aiche-card card-2 reveal-left ${card2Visible ? 'visible' : ''}`}>
          <div className="aiche-card-content">
            <h2 className="aiche-card-title" ref={title2Ref}>
              AIChE RGIPT STUDENT CHAPTER : From Excellence to Eminence
            </h2>
            <div className="aiche-card-text" ref={text2Ref}>
              <p><em>"Having earned the privilege of hosting AIChE India SRC 2026, RGIPT stands ready to welcome the nation's brightest minds to a campus synonymous with academic excellence, innovation, and leadership in Chemical and Petroleum Engineering."</em></p>
              <p><strong>Established in 2016, the AIChE RGIPT Student Chapter has grown into one of India's most distinguished and dynamic student chapters, building a strong community of over 500 members over the years. Based at the Rajiv Gandhi Institute of Petroleum Technology (RGIPT), an Institute of National Importance renowned for Chemical, Petroleum, and Energy Engineering, the chapter has consistently fostered innovation, leadership, and professional excellence.</strong></p>
              <p><strong>Recognized with the prestigious AIChE Outstanding Student Chapter Award for two consecutive years, the chapter serves as a proud AIChE Regional Center and has maintained a strong international presence through multiple members serving on the AIChE Executive Student Committee (ESC). The chapter has also strengthened global engagement through collaborations with international student chapters, including its former sister chapter, AIChE UI Indonesia.</strong></p>
              <p><strong>Over the years, AIChE RGIPT has successfully organised numerous technical, professional, and outreach initiatives while building strong relationships with leading organisations such as IndianOil, GAIL, HPCL, ONGC, MRPL, NRL, Indorama, ISRO, and CSIR. Today, with the collective efforts of 200+ dedicated student volunteers, the chapter is proudly hosting AIChE India SRC 2026 – Viplav, striving to deliver one of the most impactful and memorable editions of the conference while continuing its tradition of excellence, leadership, and innovation.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aiche
