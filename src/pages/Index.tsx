
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
        {/* Animated background effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/10 via-background to-background"></div>
        
        {/* Global mouse light effect - subtle white behind everything */}
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
        
        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <ScrollToTop />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
