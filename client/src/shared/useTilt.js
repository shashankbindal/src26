import { useCallback } from 'react';

/**
 * Reusable 3D tilt-on-hover. Returns onMouseMove/onMouseLeave handlers
 * that set --rx/--ry CSS vars on the hovered element — pair with CSS:
 *
 *   .your-card:hover {
 *     transform: translateY(-6px) perspective(800px)
 *                rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
 *   }
 *
 * @param {number} max - maximum tilt in degrees
 */
export function useTilt(max = 5) {
  const onTiltMove = useCallback((e) => {
    const el = e.currentTarget;
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
    const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
    el.style.setProperty('--rx', `${-dy * max}deg`);
    el.style.setProperty('--ry', `${dx  * max}deg`);
  }, [max]);

  const onTiltLeave = useCallback((e) => {
    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  }, []);

  return { onTiltMove, onTiltLeave };
}
