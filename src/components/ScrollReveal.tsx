import { useEffect, useRef, useState, ReactNode } from 'react';
import useScrollProgress from '@/hooks/useScrollProgress';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur' | 'rotate' | 'slide-rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  stagger?: boolean;
}

const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.2,
  stagger = false
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { velocity, isScrolling } = useScrollProgress();

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          
          // Adjust duration based on scroll velocity
          const adjustedDuration = isScrolling && velocity > 0.5 
            ? duration * 0.7 // Faster animation when scrolling quickly
            : duration;
          
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, hasAnimated, isScrolling, velocity, duration]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(80px)' };
      case 'fade-down':
        return { opacity: 0, transform: 'translateY(-80px)' };
      case 'fade-left':
        return { opacity: 0, transform: 'translateX(-80px)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translateX(80px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.7)' };
      case 'blur':
        return { opacity: 0, filter: 'blur(15px)' };
      case 'rotate':
        return { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' };
      case 'slide-rotate':
        return { opacity: 0, transform: 'translateX(-100px) rotate(-5deg)' };
      default:
        return { opacity: 0, transform: 'translateY(80px)' };
    }
  };

  const getFinalStyles = () => {
    switch (animation) {
      case 'fade-up':
      case 'fade-down':
      case 'fade-left':
      case 'fade-right':
        return { opacity: 1, transform: 'translateY(0) translateX(0)' };
      case 'scale':
        return { opacity: 1, transform: 'scale(1)' };
      case 'blur':
        return { opacity: 1, filter: 'blur(0px)' };
      case 'rotate':
        return { opacity: 1, transform: 'rotate(0deg) scale(1)' };
      case 'slide-rotate':
        return { opacity: 1, transform: 'translateX(0) rotate(0deg)' };
      default:
        return { opacity: 1, transform: 'translateY(0)' };
    }
  };

  const adjustedDuration = isScrolling && velocity > 0.5 ? duration * 0.7 : duration;
  
  return (
    <div
      ref={ref}
      className={`${className} ${stagger ? 'stagger-animation' : ''}`}
      style={{
        ...getInitialStyles(),
        transitionProperty: 'all',
        transitionDuration: `${adjustedDuration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        ...(isVisible ? getFinalStyles() : {})
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
