
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show nav at top of page
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
    }`}>
      <div className={`glass-nav px-6 py-3 transition-all duration-500 ${
        isScrolled ? 'glass-glow' : ''
      }`}>
        <div className="flex justify-between items-center gap-8">
          <div className="text-xl font-black text-foreground group cursor-pointer">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-200 group-hover:from-gray-300 group-hover:to-slate-300 transition-all duration-300">
              Dev
            </span>
            <span className="group-hover:text-muted-foreground transition-colors duration-300">Betances</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group px-4 py-2 rounded-full hover:bg-white/5"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-gray-300 group-hover:w-8 transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
