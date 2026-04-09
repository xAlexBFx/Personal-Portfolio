import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      
      // More precise mobile detection - exclude tablets and laptops with touch
      const isPhone = /android(?!.*tablet)|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      
      // Only consider it mobile if it's actually a phone device OR small screen without mouse support
      const hasMouse = window.matchMedia('(pointer: fine)').matches;
      
      setIsMobile(isPhone || (isSmallScreen && !hasMouse));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default useIsMobile;
