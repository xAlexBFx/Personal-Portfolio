import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.2
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(60px)' };
      case 'fade-down':
        return { opacity: 0, transform: 'translateY(-60px)' };
      case 'fade-left':
        return { opacity: 0, transform: 'translateX(-60px)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translateX(60px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.8)' };
      case 'blur':
        return { opacity: 0, filter: 'blur(10px)' };
      default:
        return { opacity: 0, transform: 'translateY(60px)' };
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
      default:
        return { opacity: 1, transform: 'translateY(0)' };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getInitialStyles(),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        ...(isVisible ? getFinalStyles() : {})
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
