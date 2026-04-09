import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = targetId ? document.querySelector(targetId) : null;
        
        if (targetElement) {
          const offset = 80; // Adjust for fixed header
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click event listener
    document.addEventListener('click', handleAnchorClick);
    
    // Custom smooth scroll easing
    const smoothScrollTo = (targetY: number, duration: number = 1000) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (ease-in-out)
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startY + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    // Expose smooth scroll function globally
    (window as any).smoothScrollTo = smoothScrollTo;

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;
