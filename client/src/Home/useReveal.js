import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref to attach to an element and a boolean `isVisible`.
 * @param {number} threshold - 0 to 1, how much of the element must be visible
 * @param {boolean} once - if true, stays visible after first reveal
 */
export const useReveal = (threshold = 0.15, once = true) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, once]);

  return [ref, isVisible];
};
