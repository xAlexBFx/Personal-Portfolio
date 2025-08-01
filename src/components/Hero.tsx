import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating info cards data - focused on skills and projects rather than experience
  const floatingInfo = [
    { text: "Full-Stack", subtitle: "Developer", position: { top: "25%", left: "8%" }, delay: "0s" },
    { text: "React Expert", subtitle: "Frontend", position: { top: "35%", right: "10%" }, delay: "0.5s" },
    { text: "JavaScript", subtitle: "Pro", position: { bottom: "45%", left: "6%" }, delay: "1s" },
    { text: "Node.js", subtitle: "Backend", position: { bottom: "35%", right: "8%" }, delay: "1.5s" },
    { text: "UI/UX", subtitle: "Design", position: { top: "55%", left: "3%" }, delay: "2s" },
    { text: "MongoDB", subtitle: "Database", position: { top: "65%", right: "5%" }, delay: "2.5s" },
  ];

  // Projects data (same as Projects component)
  const projects = [
    {
      title: "Music Reproduction Platform",
      description: "S-Services is an AI-based music reproduction platform that allows users to listen to music from around the world. Allowing the user to interact with other users, settings, profile setup, and more.",
      tech: ["JavaScript", "Node.js", "MongoDB", "CSS", "HTML"],
      image: "https://github.com/user-attachments/assets/10453940-a64e-4839-b71c-c5af38e5847d",
      github: "https://github.com/xAlexBFx/S-Music-Website",
      deployed: false,
    },
    {
      title: "Image Manipulator App",
      description: "An image manipulation app that allows users to upload and experience AI training tools like Convolutional kernels in image processing etc.",
      tech: ["React", "Python", "Flask", "HTML", "CSS", "TypeScript"],
      image: "https://github.com/user-attachments/assets/2ba5be81-1f34-40ab-b301-a5f8b2510c07",
      github: "https://github.com/xAlexBFx/Image_Manipulator",
      deployed: true,
      deployedLink: "https://image-manipulator.windsurf.build/"
    },
    {
      title: "High School Website",
      description: "A website for my high school that allows users to interact with other users through a publication system.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      image: "https://github.com/user-attachments/assets/a1a155c9-862b-400f-9b1c-8caf7694b6b7",
      github: "https://github.com/xAlexBFx/BINcA-Website",
      deployed: false,
    },
    {
      title: "Task Manager App",
      description: "A task manager app that allows users to manage their tasks and to-dos with a user-friendly interface and a database to store their tasks.",
      tech: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: "https://github.com/user-attachments/assets/36fa52cc-2fd4-45ed-ae72-ff1df0ffc2c8",
      github: "https://github.com/xAlexBFx/Tasks-Manager",
      deployed: false,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[200vw] sm:pt-[160vw] md:pt-80 pb-16 md:pb-48">      
      {/* Moving space stars effect - much slower movement */}
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

      {/* Floating info cards with better spacing - NO HOVER EFFECTS */}
      {floatingInfo.map((info, index) => (
        <div
          key={index}
          className={`absolute transform transition-all duration-1000 hidden md:block ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            ...info.position,
            animationDelay: info.delay,
          }}
        >
          <div className="relative">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center shadow-2xl min-w-[120px]">
              <div className="text-xl font-black text-foreground mb-2">
                {info.text}
              </div>
              <div className="text-sm text-muted-foreground">
                {info.subtitle}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile info cards in a grid - with much more spacing */}
      <div className="md:hidden absolute top-[100vw] sm:top-[100vw] left-4 right-4 grid grid-cols-2 gap-6 z-10">
        {floatingInfo.slice(0, 4).map((info, index) => (
          <div
            key={index}
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center shadow-xl">
              <div className="text-sm font-bold text-foreground mb-2">
                {info.text}
              </div>
              <div className="text-xs text-muted-foreground">
                {info.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Central content with much more spacing for mobile */}
      <div className="text-center space-y-24 sm:space-y-20 md:space-y-12 relative z-20">
        {/* Image with vanishing effect - much more spacing for mobile */}
        <div className={`flex justify-center mb-48 sm:mb-40 md:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-80' : 'translate-y-20 opacity-0'
        }`}>
          <img
            src="/lovable-uploads/me.png"
            alt="Betances Picture"
            className="w-[80%] h-[80%] md:w-[55%] md:h-[55%] lg:w-[70%] lg:h-[70%] object-cover"
            style={{
              maskImage: 'radial-gradient(ellipse 70% 80% at center, black 40%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at center, black 40%, transparent 85%)'
            }}
          />
        </div>

        {/* Text content with more spacing on mobile */}
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
        
        {/* Buttons below the content with more spacing */}
        <div className={`flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center mt-24 sm:mt-20 md:mt-12 transform transition-all duration-1000 delay-500 px-6 md:px-4 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative bg-gradient-to-r from-slate-600 to-gray-700 text-white px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/25 transform">
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-none w-screen h-screen p-0 bg-background border-0">
              <DialogHeader className="p-6 border-b border-border/50">
                <DialogTitle className="text-3xl font-bold text-foreground">All Projects</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-full p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="group relative bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-slate-400/50 shadow-lg hover:shadow-xl cursor-pointer mt-[4%]"
                      onClick={() => handleProjectClick(index)}
                    >
                      {/* Image container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Tech stack overlay */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                          {project.tech.slice(0, 2).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-slate-300 rounded-full border border-slate-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 2 && (
                            <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-muted-foreground rounded-full border border-border/50">
                              +{project.tech.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-slate-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Full tech stack */}
                        <div className="flex flex-wrap gap-1 pt-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-muted/50 text-xs font-medium text-muted-foreground rounded-full group-hover:bg-slate-400/10 group-hover:text-slate-300 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="pt-4 flex gap-4">
                          <button 
                            className="flex-1 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border border-slate-400/30 text-slate-300 py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:from-slate-600/20 hover:to-gray-600/20 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/20 hover:scale-105 transform hover:translate-y-[-1px] cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <svg className="w-5 h-5 inline-block mr-2 transition-transform duration-300 hover:scale-110 hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.083.682-.233.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                            GitHub
                          </button>
                          <button 
                            className={`flex-1 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border border-slate-400/30 text-slate-300 py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:from-slate-600/20 hover:to-gray-600/20 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/20 hover:scale-105 transform hover:translate-y-[-1px] ${!project.deployed ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              project.deployed && window.open(project.deployedLink, '_blank');
                            }}
                            title={!project.deployed ? 'Not Deployed Yet' : ''}
                          >
                            <svg className="w-5 h-5 inline-block mr-2 transition-transform duration-300 hover:scale-110 hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 13v10h-6v-6H3v-2h12V3h6v10h-3z"/>
                            </svg>
                            Browse
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <button 
            className="group relative border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:border-slate-400 overflow-hidden"
            onClick={() => {
              const subject = "Interested Person from Portfolio";
              const body = `Hi Alex,

I'm interested in...

Best regards,`;
              const mailtoUrl = `mailto:alexbetancesx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.location.href = mailtoUrl;
            }}
          >
            <span className="relative z-10 group-hover:text-slate-300 transition-colors duration-300">Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-800/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
