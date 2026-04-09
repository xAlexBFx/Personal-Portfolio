import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/data/projects";
import LazyImage from "@/components/LazyImage";
import useIsMobile from "@/hooks/useIsMobile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);



  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[120vw] sm:pt-[100vw] md:pt-80 pb-16 md:pb-48">      
      {/* Enhanced glassmorphism background that blends with global theme */}
      <div className="absolute inset-0">
        {/* Subtle overlay that enhances global background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-muted/20 to-background/40"></div>
        <div className="absolute inset-0 backdrop-blur-xl"></div>
        
        {/* Enhanced versions of global orbs with more intensity for Hero section */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-slate-500/8 to-gray-500/8 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-gray-500/8 to-slate-500/8 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-slate-600/4 to-gray-600/4 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        
        {/* Hero-specific subtle accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/15 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-slate-400/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-8 bg-gradient-to-t from-transparent to-slate-400/30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-1 bg-gradient-to-r from-transparent to-slate-300/30 animate-pulse delay-1500"></div>
      </div>

      {/* 3D Orbital rings with circular rotation - properly centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[600px] sm:w-[700px] md:w-[800px] lg:w-[1000px] h-[600px] sm:h-[700px] md:h-[800px] lg:h-[1000px] border border-white/5 rounded-full animate-spin-slow transform-gpu" style={{ 
            transform: 'rotateX(60deg) rotateY(0deg)',
            animation: 'spin-3d-slow 30s linear infinite',
          }}></div>
          <div className="absolute w-[450px] sm:w-[550px] md:w-[600px] lg:w-[750px] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[750px] border border-white/8 rounded-full animate-spin-slow transform-gpu" style={{ 
            transform: 'rotateX(60deg) rotateY(0deg)',
            animationDirection: 'reverse', 
            animationDuration: '45s',
            animation: 'spin-3d-slow 45s linear infinite reverse',
          }}></div>
          <div className="absolute w-[350px] sm:w-[500px] md:w-[480px] lg:w-[600px] h-[350px] sm:h-[500px] md:h-[480px] lg:h-[600px] border border-gray-300/15 rounded-full animate-spin-slow transform-gpu" style={{ 
            transform: 'rotateX(45deg) rotateY(0deg)',
            animation: 'spin-3d-slow 60s linear infinite',
          }}></div>
        </div>
      </div>


      
      {/* Central content with much more spacing for mobile */}
      <div className="text-center space-y-24 sm:space-y-20 md:space-y-12 relative z-20">
        {/* Image with vanishing effect - much more spacing for mobile */}
        <ScrollReveal animation="scale" duration={800}>
          <div className={`flex justify-center mb-32 sm:mb-24 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-80' : 'translate-y-20 opacity-0'
          }`}>
            <LazyImage
              src="/lovable-uploads/me.png"
              alt="Betances Picture"
              className="w-[80%] h-[80%] md:w-[55%] md:h-[55%] lg:w-[70%] lg:h-[70%] object-cover"
              style={{
                maskImage: 'radial-gradient(ellipse 70% 80% at center, black 40%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at center, black 40%, transparent 85%)'
              }}
            />
          </div>
        </ScrollReveal>

        {/* Text content with more spacing on mobile */}
        <ScrollReveal animation="fade-up" delay={200} duration={800}>
          <div className={`space-y-16 sm:space-y-12 md:space-y-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-black text-foreground leading-tight">
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">Betances</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-200 to-slate-400 block animate-gradient-x">
                Full-Stack Dev
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-6 md:px-4">
              Crafting digital experiences with modern technologies. 
              Passionate about creating innovative solutions and beautiful designs.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Buttons below the content with more spacing */}
        <ScrollReveal animation="fade-up" delay={400} duration={800}>
          <div className={`flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center mt-24 sm:mt-20 md:mt-12 transform transition-all duration-1000 delay-500 px-6 md:px-4 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <button 
              className="group relative bg-gradient-to-r from-slate-600 to-gray-700 text-white px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/25 transform"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10">Explore Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a 
              href="/assets/resume/Alex Betances Work Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:border-slate-400 overflow-hidden text-center"
            >
              <span className="relative z-10 group-hover:text-slate-300 transition-colors duration-300">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-800/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <button 
              className="group relative border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:border-slate-400 overflow-hidden"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 group-hover:text-slate-300 transition-colors duration-300">Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-800/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
