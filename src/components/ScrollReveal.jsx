import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Only run the observer if we are on a desktop screen (width >= 768px)
    // This completely bypasses observer logic on mobile phones
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -120px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`
        /* Mobile: default plain layout with zero animation overhead */
        w-full block opacity-100 translate-y-0
        
        /* Desktop: attach transitions conditionally based on visibility state */
        ${isVisible 
          ? 'md:opacity-100 md:translate-y-0 md:transition-all md:duration-700 md:ease-out' 
          : 'md:opacity-0 md:translate-y-8 md:pointer-events-none'
        }
      `}
    >
      {children}
    </div>
  );
}
