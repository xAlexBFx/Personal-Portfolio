import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ReactIcon from "../assets/icons/react-original.svg";
import TypeScriptIcon from "../assets/icons/typescript-original.svg";
import TensorflowIcon from "../assets/icons/tensorflow-original.svg";
import SQLOriginalIcon from "../assets/icons/sql-original.svg";
import MongooseIcon from "../assets/icons/mongoose-original.svg";
import NodeIcon from "../assets/icons/nodejs-original.svg";
import PythonIcon from "../assets/icons/python-original.svg";
import MongoDBIcon from "../assets/icons/mongodb-original.svg";
import JavaScriptIcon from "../assets/icons/javascript-original.svg";
import HTML5Icon from "../assets/icons/html5-original.svg";
import CSSIcon from "../assets/icons/css3.svg";
import GitIcon from "../assets/icons/git.svg";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [popoutVisible, setPopoutVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [enableCursorTracking, setEnableCursorTracking] = useState(false);

  const skills = [
    { 
      name: "React", 
      icon: ReactIcon,
      color: "#61DAFB",
      description: "React is a JavaScript library for building user interfaces. Expert in component architecture, state management, and building reusable UI components. Experience with React Router, Redux, and modern React patterns.",
      level: "Expert"
    },
    { 
      name: "Mongoose", 
      icon: MongooseIcon,
      color: "#880000",
      description: "Mongoose is a MongoDB object data modeling (ODM) library for Node.js. Expert in schema design, complex queries, aggregation pipelines, and virtual properties. Proficient in handling relationships between documents and implementing efficient data models.",
      level: "Expert"
    },
    { 
      name: "Node.js", 
      icon: NodeIcon,
      color: "#339933",
      description: "Node.js is a JavaScript runtime for building scalable applications. Expert in Express.js, RESTful APIs, middleware architecture, and asynchronous programming. Proficient in handling streams, file systems, and building real-time applications with Socket.io.",
      level: "Expert"
    },
    { 
      name: "Python", 
      icon: PythonIcon,
      color: "#3776AB",
      description: "Python is a general-purpose programming language with emphasis on readability. Proficient in data structures, algorithms, and object-oriented programming. Experience with Django/Flask frameworks, web scraping, data analysis, and automation scripts. Strong understanding of Python's standard library and popular packages.",
      level: "Expert"
    },
    { 
      name: "TensorFlow", 
      icon: TensorflowIcon,
      color: "#FF6F00",
      description: "TensorFlow is an open-source machine learning framework developed by Google. Proficient in building neural networks, deep learning models, and computer vision applications. Experience with TensorFlow Lite for mobile deployment, model optimization, and integrating ML capabilities into web and mobile applications.",
      level: "Intermediate"
    },
    { 
      name: "MongoDB", 
      icon: MongoDBIcon,
      color: "#47A248",
      description: "MongoDB is a NoSQL document database for scalable applications. Expert in schema design, indexing strategies, and aggregation pipelines. Proficient in handling large datasets, implementing sharding, and optimizing query performance. Experience with MongoDB Atlas and database administration.",
      level: "Advanced"
    },
    { 
      name: "JavaScript", 
      icon: JavaScriptIcon,
      color: "#F7DF1E",
      description: "JavaScript is the core programming language of the web. Expert in ES6+ features, DOM manipulation, and event handling. Proficient in functional programming, async/await, and modern JavaScript patterns. Strong understanding of browser APIs and cross-browser compatibility.",
      level: "Expert"
    },
    { 
      name: "TypeScript", 
      icon: TypeScriptIcon,
      color: "#3178C6",
      description: "TypeScript is a strongly typed programming language that builds on JavaScript. Expert in type definitions, generics, and advanced type patterns. Proficient in building type-safe applications, interfaces, and leveraging TypeScript's type system for better code quality and maintainability.",
      level: "Expert"
    },
    { 
      name: "SQL", 
      icon: SQLOriginalIcon,
      color: "#00758F",
      description: "SQL is a domain-specific language used for managing relational databases. Advanced in writing complex queries, joins, subqueries, and stored procedures. Proficient in database design, optimization, indexing strategies, and working with various database systems like MySQL, PostgreSQL, and SQL Server.",
      level: "Advanced"
    },
    { 
      name: "HTML5", 
      icon: HTML5Icon,
      color: "#E34F26",
      description: "HTML5 is the latest version of the HTML standard. Expert in creating accessible, responsive layouts using HTML5 semantic elements. Proficient in form handling, multimedia integration, and modern web APIs. Strong understanding of SEO best practices and web accessibility guidelines.",
      level: "Expert"
    },
    { 
      name: "CSS3", 
      icon: CSSIcon,
      color: "#2965F1",
      description: "CSS3 is the latest version of the CSS standard. Expert in CSS Grid, Flexbox, and responsive design. Proficient in CSS preprocessors (SASS/SCSS), CSS animations, and transitions. Strong understanding of CSS architecture (BEM, SMACSS) and performance optimization techniques.",
      level: "Expert"
    },
    { 
      name: "Git", 
      icon: GitIcon,
      color: "#F05032",
      description: "Git is a distributed version control system. Expert in branching strategies, merge workflows, and repository management. Proficient in Git hooks, rebasing, and resolving conflicts. Strong understanding of Git best practices and collaboration workflows.",
      level: "Expert"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setHoveredSkill(null);
      
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  useEffect(() => {
    setPopoutVisible(hoveredSkill !== null);
  }, [hoveredSkill]);

  useEffect(() => {
    if (!isMobile) return;
    
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      setPopoutVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const update = () => setEnableCursorTracking(mediaQuery.matches);
    update();

    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enableCursorTracking) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableCursorTracking]);

  const getRadius = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 120;
      if (width < 768) return 150;
      if (width < 1024) return 180;
      return 200;
    }
    return 200;
  };

  const [radius, setRadius] = useState(getRadius());

  useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const centerX = 0;
  const centerY = 0;

  const styles = `
    @keyframes popout {
      from {
        opacity: 0;
        transform: translateY(-50%) translateY(20px) scale(0.9);
      }
      to {
        opacity: 1;
        transform: translateY(-50%) translateY(0) scale(1);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section 
        id="skills" 
        className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
        style={{
          '--popout-visible': popoutVisible ? '1' : '0'
        } as React.CSSProperties}
      >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-4 sm:mb-6 lg:mb-8">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-200">Arsenal</span>
              </h2>
              <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-slate-400 to-gray-300 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Hover over each technology to learn more about my expertise
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="scale" delay={200} duration={1000}>
            <div className="relative flex items-center justify-center h-64 sm:h-80 md:h-96">
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);

              return (
                <div
                  key={skill.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`w-14 h-14 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-slate-400/50 ${
                    hoveredSkill === index ? 'z-50' : 'z-10'
                  }`}>
                    <div className="flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 sm:w-14 h-14 lg:w-18 h-18"
                        style={{
                          color: `${skill.color}`
                        }}
                      />
                    </div>
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r from-slate-600/0 to-gray-600/0 group-hover:from-slate-600/20 group-hover:to-gray-600/20 rounded-full blur transition-all duration-500 opacity-0 group-hover:opacity-100`}>
                  </div>
                </div>
              );
            })}

            <div className="absolute w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-slate-400 to-gray-300 rounded-full animate-pulse shadow-lg shadow-slate-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-gray-300 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
          </ScrollReveal>

          {/* Fixed Technology Info Panel - shows on hover */}
          <div
            className="fixed z-50 pointer-events-none transition-all duration-300 ease-out
              left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
            style={{
              opacity: hoveredSkill !== null && !isScrolling ? 1 : 0,
              transform: hoveredSkill !== null && !isScrolling
                ? 'translateY(0) translateX(0)'
                : 'translateY(20px) translateX(0)',
            }}
          >
            <div className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl w-full sm:w-72 md:w-80 glass-glow mx-auto sm:mx-0 max-w-md">
              {hoveredSkill !== null && (
                <>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${skills[hoveredSkill].color}20, ${skills[hoveredSkill].color}10)`,
                        border: `1px solid ${skills[hoveredSkill].color}40`
                      }}
                    >
                      <img
                        src={skills[hoveredSkill].icon}
                        alt={skills[hoveredSkill].name}
                        className="w-7 h-7 sm:w-8 sm:h-8"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground truncate">{skills[hoveredSkill].name}</h3>
                      <span
                        className="text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full inline-block"
                        style={{
                          background: `${skills[hoveredSkill].color}20`,
                          color: skills[hoveredSkill].color
                        }}
                      >
                        {skills[hoveredSkill].level}
                      </span>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-3 sm:mb-4"></div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {skills[hoveredSkill].description}
                  </p>
                  <div className="absolute -inset-px bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-2xl blur opacity-50 -z-10"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
