import React from 'react';
import { useCountUp } from './useCountUp.js';

/**
 * Inline animated number. Drop in place of a static digit inside prose —
 * it occupies the same spot and just counts up once scrolled into view.
 *
 * <CountUp value={60000} prefix="" suffix="+" /> -> "60,000+"
 */
export default function CountUp({ value, prefix = '', suffix = '', duration = 1800, locale = 'en-IN' }) {
  const [ref, current] = useCountUp(value, duration);
  return (
    <span ref={ref} className="count-up">
      {prefix}{current.toLocaleString(locale)}{suffix}
    </span>
  );
}
