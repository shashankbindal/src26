import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Hook that staggers child elements (paragraphs) line-by-line
 * when the container scrolls into view. Uses IntersectionObserver
 * to trigger, NOT ScrollTrigger — no scroll conflicts.
 * 
 * @param {string} childSelector - CSS selector for children to stagger (default 'p')
 */
export const useStaggerLines = (childSelector = 'p', threshold = 0.2) => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set initial state: all children hidden
    const children = el.querySelectorAll(childSelector);
    gsap.set(children, { 
      opacity: 0, 
      y: 40,
      filter: 'blur(4px)'
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Stagger animate each paragraph
          gsap.to(children, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.2,
          });

          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [childSelector, threshold, hasAnimated]);

  return containerRef;
};
