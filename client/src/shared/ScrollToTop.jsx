import React, { useState, useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (navigationType === 'POP') {
      const savedPosition = sessionStorage.getItem(`scroll-${location.key}`);
      if (savedPosition !== null) {
        const targetScroll = parseFloat(savedPosition);
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(targetScroll, { immediate: true });
          } else {
            window.scrollTo(0, targetScroll);
          }
        }, 50);
        
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(targetScroll, { immediate: true });
          } else {
            window.scrollTo(0, targetScroll);
          }
        }, 600);
      }
      return;
    }
    setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  }, [location.pathname, location.key, navigationType]);

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          sessionStorage.setItem(`scroll-${location.key}`, window.scrollY);
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [location.key]);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default ScrollToTop;
