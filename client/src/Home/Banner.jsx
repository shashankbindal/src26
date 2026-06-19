import React, { useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import StaggerText from '../shared/StaggerText'
import './Banner.css'

const PuzzleBackground = () => {
  const columns = 24;
  const rows = 14;
  const size = 80;

  const pieces = useMemo(() => {
    const pseudoRand = (seed) => {
      const x = Math.sin(seed) * 10000;
      return (x - Math.floor(x));
    }
    
    let seed = 1;
    const hJoints = Array(rows).fill(0).map(() => Array(columns).fill(0).map(() => pseudoRand(seed++) > 0.5 ? 1 : -1));
    const vJoints = Array(rows).fill(0).map(() => Array(columns).fill(0).map(() => pseudoRand(seed++) > 0.5 ? 1 : -1));

    const arr = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const top = r === 0 ? (pseudoRand(seed++) > 0.5 ? 1 : -1) : -hJoints[r-1][c];
        const bottom = r === rows - 1 ? (pseudoRand(seed++) > 0.5 ? 1 : -1) : hJoints[r][c];
        const left = c === 0 ? (pseudoRand(seed++) > 0.5 ? 1 : -1) : -vJoints[r][c-1];
        const right = c === columns - 1 ? (pseudoRand(seed++) > 0.5 ? 1 : -1) : vJoints[r][c];
        
        const randMissing = pseudoRand(seed++);
        const isMissing = randMissing > 0.82; 
        const isFloating = randMissing > 0.92; 

        arr.push({
          id: `${r}-${c}`,
          r, c, x: c * size, y: r * size,
          top, right, bottom, left,
          isMissing,
          isFloating
        });
      }
    }
    return arr;
  }, []);

  const getPiecePath = (x, y, size, top, right, bottom, left) => {
    const ts = size / 3; 
    const tr = size / 6; 
    let d = `M ${x} ${y} `;
    
    if (top === 1) d += `L ${x+ts} ${y} A ${tr} ${tr} 0 0 0 ${x+2*ts} ${y} L ${x+size} ${y} `;
    else if (top === -1) d += `L ${x+ts} ${y} A ${tr} ${tr} 0 0 1 ${x+2*ts} ${y} L ${x+size} ${y} `;
    else d += `L ${x+size} ${y} `;

    if (right === 1) d += `L ${x+size} ${y+ts} A ${tr} ${tr} 0 0 0 ${x+size} ${y+2*ts} L ${x+size} ${y+size} `;
    else if (right === -1) d += `L ${x+size} ${y+ts} A ${tr} ${tr} 0 0 1 ${x+size} ${y+2*ts} L ${x+size} ${y+size} `;
    else d += `L ${x+size} ${y+size} `;

    if (bottom === 1) d += `L ${x+2*ts} ${y+size} A ${tr} ${tr} 0 0 0 ${x+ts} ${y+size} L ${x} ${y+size} `;
    else if (bottom === -1) d += `L ${x+2*ts} ${y+size} A ${tr} ${tr} 0 0 1 ${x+ts} ${y+size} L ${x} ${y+size} `;
    else d += `L ${x} ${y+size} `;

    if (left === 1) d += `L ${x} ${y+2*ts} A ${tr} ${tr} 0 0 0 ${x} ${y+ts} L ${x} ${y} `;
    else if (left === -1) d += `L ${x} ${y+2*ts} A ${tr} ${tr} 0 0 1 ${x} ${y+ts} L ${x} ${y} `;
    else d += `L ${x} ${y} `;

    return d + 'Z';
  }

  return (
    <div className="hero-bg-puzzle">
      <svg width="100%" height="100%" viewBox="0 0 1920 1120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g stroke="var(--text-secondary)" strokeWidth="0.75" fill="none">
          {pieces.map(p => {
            if (p.isMissing && !p.isFloating) return null;
            
            const path = getPiecePath(0, 0, size, p.top, p.right, p.bottom, p.left);
            
            let transform = `translate(${p.x}, ${p.y})`;
            let opacity = 0.08;
            let fill = "none";
            let stroke = "var(--text-secondary)";
            
            if (p.isFloating) {
               const dx = (Math.sin(p.r * 12.3 + p.c) * 120);
               const dy = (Math.cos(p.r * 8.1 + p.c) * 120);
               const rot = (Math.sin(p.r + p.c) * 45);
               transform = `translate(${p.x + dx}, ${p.y + dy}) rotate(${rot} ${size/2} ${size/2})`;
               opacity = 0.4;
               stroke = "none";
               fill = "var(--primary-glow-strong)";
            } else {
               if (Math.sin(p.r * 7 + p.c * 11) > 0.85) {
                 fill = "var(--primary-glow)";
                 opacity = 0.3;
               }
            }

            return (
              <path key={p.id} d={path} transform={transform} fill={fill} stroke={stroke} opacity={opacity} />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

const Banner = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.classList.add('clicked');
    setTimeout(() => {
      navigate('/register');
    }, 400);
  };

  return (
    <div className="hero-section">
      <PuzzleBackground />

      <div className="hero-content">
        <div className="hero-subtitle-wrapper">
          <span className="hero-subtitle">At RGIPT for the first time</span>
        </div>

        <div className="hero-bg-text-wrapper">
          <h1 className="hero-bg-text">IT IS HAPPENING</h1>
        </div>

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            <span className="hero-title-main">SRC</span>
            <span className="hero-title-accent">'26</span>
          </h1>
        </div>

        <div className="hero-footer">
          <div className="hero-metadata">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Date</span>
              <span className="hero-meta-value">21st-23rd August 2026</span>
            </div>
            
            <div className="hero-meta-divider"></div>
            
            <div className="hero-meta-item">
              <span className="hero-meta-label">Venue</span>
              <span className="hero-meta-value">Rajiv Gandhi Institute of Petroleum Technology</span>
            </div>
          </div>
          
          <button className="register-btn hero-cta-btn" onClick={handleRegisterClick}>
            <StaggerText text="Register&nbsp;&#8594;" hoverColor="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
