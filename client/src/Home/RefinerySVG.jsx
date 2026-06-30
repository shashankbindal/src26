import React from 'react'

/* Simplified chemical plant / refinery line-art used as a decorative
   blueprint overlay on the hero campus photo. */
const RefinerySVG = () => (
  <svg
    className="hero-refinery-svg"
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Main distillation column */}
      <rect x="80" y="40" width="36" height="220" rx="4" />
      <ellipse cx="98" cy="40" rx="18" ry="6" />
      <ellipse cx="98" cy="260" rx="18" ry="6" />
      <line x1="98" y1="260" x2="98" y2="320" />
      <rect x="76" y="320" width="44" height="16" rx="2" />

      {/* Second column */}
      <rect x="160" y="80" width="28" height="170" rx="4" />
      <ellipse cx="174" cy="80" rx="14" ry="5" />
      <ellipse cx="174" cy="250" rx="14" ry="5" />
      <line x1="174" y1="250" x2="174" y2="310" />
      <rect x="158" y="310" width="32" height="12" rx="2" />

      {/* Third column — tallest */}
      <rect x="240" y="20" width="32" height="260" rx="4" />
      <ellipse cx="256" cy="20" rx="16" ry="5.5" />
      <ellipse cx="256" cy="280" rx="16" ry="5.5" />
      <line x1="256" y1="280" x2="256" y2="340" />
      <rect x="238" y="340" width="36" height="14" rx="2" />

      {/* Horizontal vessel / heat exchanger */}
      <rect x="320" y="160" width="120" height="44" rx="22" />
      <line x1="320" y1="182" x2="200" y2="182" />
      <line x1="440" y1="182" x2="460" y2="182" />
      <circle cx="330" cy="182" r="6" />
      <circle cx="370" cy="182" r="6" />
      <circle cx="410" cy="182" r="6" />

      {/* Connecting pipes */}
      <line x1="116" y1="140" x2="160" y2="140" />
      <line x1="188" y1="160" x2="240" y2="160" />
      <line x1="272" y1="120" x2="320" y2="150" />
      <line x1="116" y1="200" x2="240" y2="200" />
      <line x1="174" y1="250" x2="256" y2="250" />

      {/* Pipeline at ground level */}
      <line x1="60" y1="360" x2="480" y2="360" />
      <line x1="98" y1="336" x2="98" y2="360" />
      <line x1="174" y1="322" x2="174" y2="360" />
      <line x1="256" y1="354" x2="256" y2="360" />

      {/* Structural framework */}
      <line x1="60" y1="380" x2="60" y2="40" />
      <line x1="60" y1="380" x2="480" y2="380" />
      <line x1="480" y1="380" x2="480" y2="150" />

      {/* Overhead line / cable */}
      <line x1="80" y1="38" x2="272" y2="18" />
      <line x1="272" y1="18" x2="460" y2="150" />

      {/* Small valves */}
      <circle cx="136" cy="140" r="4" />
      <circle cx="214" cy="160" r="4" />
      <circle cx="280" cy="120" r="4" />
      <circle cx="135" cy="200" r="4" />

      {/* Flanges on columns */}
      <line x1="74" y1="100" x2="118" y2="100" />
      <line x1="74" y1="160" x2="118" y2="160" />
      <line x1="74" y1="220" x2="118" y2="220" />
      <line x1="156" y1="130" x2="204" y2="130" />
      <line x1="156" y1="190" x2="204" y2="190" />
      <line x1="236" y1="80" x2="290" y2="80" />
      <line x1="236" y1="150" x2="290" y2="150" />
      <line x1="236" y1="220" x2="290" y2="220" />

      {/* Chimney / stack */}
      <rect x="370" y="60" width="16" height="100" rx="2" />
      <ellipse cx="378" cy="60" rx="8" ry="3" />
      {/* Smoke wisps */}
      <path d="M378 57 Q382 48 376 40 Q370 32 376 24" strokeDasharray="3 3" />
      <path d="M382 55 Q388 46 382 38" strokeDasharray="2 3" />

      {/* Control room box */}
      <rect x="400" y="290" width="70" height="50" rx="3" />
      <rect x="408" y="298" width="16" height="12" rx="1" />
      <rect x="432" y="298" width="16" height="12" rx="1" />
      <rect x="408" y="318" width="54" height="4" rx="1" />
    </g>
  </svg>
)

export default RefinerySVG
