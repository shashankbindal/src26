import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Banner.css';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const Banner = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7, delay: 0.3 })
      .from('.hero-title', { y: 40, opacity: 0, duration: 0.9 }, '-=0.3')
      .from('.hero-tagline', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
      .from('.hero-accent', { scaleX: 0, transformOrigin: 'left', duration: 0.5 }, '-=0.4')
      .from('.hero-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-meta-item', { y: 16, opacity: 0, stagger: 0.12, duration: 0.5 }, '-=0.3')
      .from('.hero-cta-row', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-right', { x: 40, opacity: 0, duration: 1 }, '-=0.9')
  }, { scope: containerRef });

  return (
    <section className="hero-section" ref={containerRef}>
      {/* Subtle geometric dot pattern */}
      <div className="hero-pattern" aria-hidden="true" />

      {/* ── LEFT — text content ── */}
      <div className="hero-left">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          AIChE India SRC 2026
        </span>

        <div className="hero-title-wrap">
          <h1 className="hero-title">VIPLAV</h1>
          <span className="hero-hindi" lang="hi">विप्लव</span>
        </div>

        <p className="hero-tagline">Transforming Ideas. Creating Impact.</p>
        <span className="hero-accent" aria-hidden="true" />

        <p className="hero-desc">
          A revolution of thought, innovation, and ambition.
          Together, let's engineer a sustainable future.
        </p>

        <div className="hero-meta">
          <span className="hero-meta-item">
            <CalendarIcon />
            21 – 23 August 2026
          </span>
          <span className="hero-meta-item">
            <PinIcon />
            <span>
              <strong>Rajiv Gandhi Institute of Petroleum Technology</strong>
              <br />Jais, Amethi, Uttar Pradesh
            </span>
          </span>
        </div>

        <div className="hero-cta-row">
          <Link to="/register" className="hero-btn-primary">
            Register Now →
          </Link>
          <Link to="/events" className="hero-btn-secondary">
            Explore Events
          </Link>
        </div>
      </div>

      {/* ── RIGHT — campus photo + refinery blueprint overlay ── */}
      <div className="hero-right">
        <div className="hero-image-wrap">
          <img
            src="/hero-refinery.png"
            alt="Petroleum refinery at golden sunset"
            className="hero-campus-img"
            fetchpriority="high"
            decoding="async"
          />
          <div className="hero-image-fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
