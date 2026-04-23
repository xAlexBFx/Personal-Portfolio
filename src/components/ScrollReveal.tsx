import { useEffect, useRef, useState, ReactNode } from 'react';

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
  duration = 500,
  threshold = 0.1,
  stagger = false
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(30px)' };
      case 'fade-down':
        return { opacity: 0, transform: 'translateY(-30px)' };
      case 'fade-left':
        return { opacity: 0, transform: 'translateX(-30px)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translateX(30px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.95)' };
      case 'blur':
        return { opacity: 0, filter: 'blur(8px)' };
      case 'rotate':
        return { opacity: 0, transform: 'rotate(-3deg) scale(0.95)' };
      case 'slide-rotate':
        return { opacity: 0, transform: 'translateX(-40px) rotate(-2deg)' };
      default:
        return { opacity: 0, transform: 'translateY(30px)' };
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

  return (
    <div
      ref={ref}
      className={`${className} ${stagger ? 'stagger-animation' : ''}`}
      style={{
        ...getInitialStyles(),
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
        ...(isVisible ? getFinalStyles() : {})
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
