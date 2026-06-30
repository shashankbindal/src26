import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up from 0 to `target` once the attached
 * element scrolls into view. Uses easeOutExpo via requestAnimationFrame
 * (GPU/CPU-light — no GSAP needed for a single numeric tween).
 *
 * @param {number} target    - final value to count up to
 * @param {number} duration  - ms
 * @param {number} threshold - IntersectionObserver threshold
 * @returns {[ref, value]}   - ref to attach + current animated value
 */
export function useCountUp(target, duration = 1800, threshold = 0.4) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const start = performance.now();
        const ease = (t) => 1 - Math.pow(1 - t, 4); // easeOutQuart

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * ease(progress)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [target, duration, threshold]);

  return [ref, value];
}
