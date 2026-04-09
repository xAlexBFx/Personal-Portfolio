import { useEffect, useRef, useState, ReactNode } from 'react';
import useScrollProgress from '@/hooks/useScrollProgress';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const { scrollY } = useScrollProgress();

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how far the element is from the viewport center
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;
    
    // Only apply parallax when element is in or near viewport
    const isInViewport = rect.bottom >= 0 && rect.top <= windowHeight;
    
    let transformValue = '';
    
    if (isInViewport) {
      // Calculate parallax based on position relative to viewport center
      const parallaxAmount = distanceFromCenter * speed * 0.1; // Reduce intensity for smoother scrolling
      
      switch (direction) {
        case 'up':
          transformValue = `translateY(${-parallaxAmount}px)`;
          break;
        case 'down':
          transformValue = `translateY(${parallaxAmount}px)`;
          break;
        case 'left':
          transformValue = `translateX(${-parallaxAmount}px)`;
          break;
        case 'right':
          transformValue = `translateX(${parallaxAmount}px)`;
          break;
      }
    }

    setTransform(transformValue);
  }, [scrollY, speed, direction]);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ transform }}>
      {children}
    </div>
  );
};

export default ParallaxSection;
