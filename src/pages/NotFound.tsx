
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/10 via-background to-background"></div>
      
      {/* Global mouse light effect */}
      <div 
        className="fixed w-96 h-96 bg-white/[0.015] rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none -z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      
      {/* Floating light orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-500/3 to-gray-500/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-gray-500/3 to-slate-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-slate-600/3 to-gray-600/3 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Moving space stars effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, i) => {
            const baseLeft = Math.random() * 100;
            const baseTop = Math.random() * 100;
            const moveX = (mousePosition.x / window.innerWidth - 0.5) * 0.1;
            const moveY = (mousePosition.y / window.innerHeight - 0.5) * 0.1;
            
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse transition-all duration-1000 ease-out"
              style={{
                left: `${baseLeft + moveX}%`,
                top: `${baseTop + moveY}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                animation: `float-star ${1 + Math.random() * 4}s linear infinite`,
              }}
            ></div>
          );
        })}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/15 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-slate-400/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-8 bg-gradient-to-t from-transparent to-slate-400/30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-1 bg-gradient-to-r from-transparent to-slate-300/30 animate-pulse delay-1500"></div>
      </div>

      {/* 3D Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] border border-white/5 rounded-full animate-spin-slow transform-gpu" style={{ 
            transform: 'rotateX(60deg) rotateY(0deg)',
            animation: 'spin-3d-slow 30s linear infinite',
            zIndex: 1
          }}></div>
          <div className="absolute w-[300px] sm:w-[400px] md:w-[450px] lg:w-[550px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] border border-white/8 rounded-full animate-spin-slow transform-gpu" style={{ 
            transform: 'rotateX(60deg) rotateY(0deg)',
            animationDirection: 'reverse', 
            animationDuration: '45s',
            animation: 'spin-3d-slow 45s linear infinite reverse',
            zIndex: 1
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-8 relative z-20">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-200 to-slate-400 animate-gradient-x mb-8">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-6 mb-8">
            The page you're looking for seems to have drifted into the digital void. 
            Let's get you back on track.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-300 px-6 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <button 
            onClick={() => window.history.back()}
            className="group relative border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:border-slate-400 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-slate-300 transition-colors duration-300">Go Back</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-800/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
