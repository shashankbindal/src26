import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import CountUp from '../shared/CountUp.jsx'
import './ScrollCards.css'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    tag: 'VIPLAV 2026',
    title: 'A Revolution of\nThought',
    text: "VIPLAV — Sanskrit for transformation and progressive change — is more than a conference. A call to transform ideas into impact and ambition into innovation.",
    img: '/hero-refinery.png',
    stat: null,
    link: '/about',
  },
  {
    tag: 'About SRC',
    title: 'Student Regional\nConference',
    text: 'The flagship annual gathering of AIChE student chapters across India — a platform for technical competitions, research presentations, and professional networking.',
    img: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=900&auto=format&fit=crop&q=80',
    stat: null,
    link: '/about',
  },
  {
    tag: 'About AIChE',
    title: '60,000+ Engineers\nWorldwide',
    text: 'The American Institute of Chemical Engineers unites innovators, researchers, and industry leaders across 110+ countries and 14 global regions.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    stat: { value: 60000, suffix: '+', label: 'AIChE Members' },
    link: '/about',
  },
  {
    tag: 'AIChE RGIPT Chapter',
    title: 'From Excellence\nto Eminence',
    text: 'Award-winning student chapter at Rajiv Gandhi Institute of Petroleum Technology — a two-time AIChE Outstanding Chapter Award winner, proudly hosting Viplav 2026.',
    img: '/teams.jpg',
    stat: { value: 500, suffix: '+', label: 'Chapter Members' },
    link: '/about',
  },
]

const ScrollCards = () => {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const cardRefs = useRef([])

  useGSAP(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outer,
        pin: inner,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.8,
      },
    })

    /* First card: already visible, push back slightly as 2nd comes in */
    cardRefs.current.forEach((card, i) => {
      if (!card || i === 0) return

      /* Incoming card: scale up from 0.8 + fade in */
      tl.fromTo(
        card,
        { scale: 0.8, autoAlpha: 0, yPercent: 6 },
        { scale: 1, autoAlpha: 1, yPercent: 0, ease: 'power2.inOut', duration: 0.8 },
        (i - 1) * 0.9
      )

      /* Previous card: scale down slightly + darken */
      if (cardRefs.current[i - 1]) {
        tl.to(
          cardRefs.current[i - 1],
          { scale: 0.94, filter: 'brightness(0.55)', ease: 'power1.inOut', duration: 0.5 },
          (i - 1) * 0.9
        )
      }
    })
  }, { scope: outerRef, dependencies: [] })

  return (
    <section className="sc-outer" ref={outerRef} id="about">
      <div className="sc-inner" ref={innerRef}>
        {/* Decorative index counter */}
        <div className="sc-counter" aria-hidden="true">
          {cards.map((_, i) => (
            <span key={i} className="sc-counter-dot" />
          ))}
        </div>

        <div className="sc-stack">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sc-card"
              ref={el => cardRefs.current[i] = el}
            >
              <div className="sc-card-image-side">
                <img
                  src={card.img}
                  alt={card.title}
                  className="sc-img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="sc-img-scrim" />
              </div>

              <div className="sc-card-text-side">
                <span className="sc-tag">{card.tag}</span>
                <h2 className="sc-title">
                  {card.title.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h2>
                <p className="sc-text">{card.text}</p>
                {card.stat && (
                  <div className="sc-stat">
                    <span className="sc-stat-num">
                      <CountUp value={card.stat.value} suffix={card.stat.suffix} />
                    </span>
                    <span className="sc-stat-label">{card.stat.label}</span>
                  </div>
                )}
                <Link to={card.link} className="sc-btn">
                  Read More →
                </Link>
              </div>

              <div className="sc-card-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollCards
