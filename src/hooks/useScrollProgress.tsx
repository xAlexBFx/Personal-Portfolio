import { useState, useEffect } from 'react';

interface ScrollProgress {
  scrollY: number;
  scrollProgress: number;
  scrollDirection: 'up' | 'down';
  isScrolling: boolean;
  velocity: number;
}

const useScrollProgress = () => {
  const [scrollData, setScrollData] = useState<ScrollProgress>({
    scrollY: 0,
    scrollProgress: 0,
    scrollDirection: 'down',
    isScrolling: false,
    velocity: 0
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;
    let velocityTimer: NodeJS.Timeout;
    let lastTimestamp = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      const timeDelta = currentTimestamp - lastTimestamp;
      
      // Calculate scroll velocity
      const velocity = Math.abs(currentScrollY - lastScrollY) / timeDelta;
      
      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (currentScrollY / documentHeight) * 100;
      
      // Determine scroll direction
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollData({
        scrollY: currentScrollY,
        scrollProgress: Math.min(100, Math.max(0, scrollProgress)),
        scrollDirection,
        isScrolling: true,
        velocity
      });

      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set scrolling to false after scroll ends
      scrollTimeout = setTimeout(() => {
        setScrollData(prev => ({ ...prev, isScrolling: false, velocity: 0 }));
      }, 150);

      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(velocityTimer);
    };
  }, []);

  return scrollData;
};

export default useScrollProgress;
