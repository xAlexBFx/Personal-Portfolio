import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-200 to-slate-400 animate-gradient-x">Work</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-slate-400 to-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects showcasing modern web development and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(index)}
            >
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-600/0 via-gray-600/0 to-slate-600/0 group-hover:from-slate-600/20 group-hover:via-gray-600/20 group-hover:to-slate-600/20 rounded-3xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:border-slate-400/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-slate-500/10">
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Tech stack overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
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
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-slate-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Full tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted/50 text-xs font-medium text-muted-foreground rounded-full group-hover:bg-slate-400/10 group-hover:text-slate-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex gap-4">
                    <button 
                      className={`flex-1 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border border-slate-400/30 text-slate-300 py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:from-slate-600/20 hover:to-gray-600/20 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/20 hover:scale-105 transform hover:translate-y-[-1px] cursor-pointer`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <svg className="w-5 h-5 inline-block mr-2 transition-transform duration-300 hover:scale-110 hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.083.682-.233.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      GitHub
                    </button>
                    <button 
                      className={`flex-1 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border border-slate-400/30 text-slate-300 py-2 px-4 rounded-xl font-medium transition-all duration-300 hover:from-slate-600/20 hover:to-gray-600/20 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/20 hover:scale-105 transform hover:translate-y-[-1px] ${!project.deployed ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      onClick={() => project.deployed && window.open(project.deployedLink, '_blank')}
                      title={!project.deployed ? 'Not Deployed Yet' : ''}
                    >
                      <svg className="w-5 h-5 inline-block mr-2 transition-transform duration-300 hover:scale-110 hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 13v10h-6v-6H3v-2h12V3h6v10h-3z"/>
                      </svg>
                      Browse
                    </button>
                  </div>
                </div>

                {/* Floating corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-400/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && closeModal()}>
          <DialogContent className="max-w-6xl w-[95vw] h-[95vh] max-h-[95vh] bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden p-0 flex flex-col">
            {selectedProject !== null && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full overflow-y-auto">
                {/* Left column - Image */}
                <div className="relative h-full min-h-[40vh] lg:min-h-full bg-muted/20">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                </div>
                
                {/* Right column - Content */}
                <div className="flex flex-col h-full">
                  {/* Fixed header */}
                  <div className="p-8 pb-0 lg:p-10 lg:pb-0">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {projects[selectedProject].title}
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-slate-400 to-gray-300 mb-6"></div>
                  </div>
                  
                  {/* Scrollable content */}
                  <div className="flex-1 overflow-y-auto p-8 pt-4 lg:p-10 lg:pt-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-500/30 scrollbar-track-transparent hover:scrollbar-thumb-slate-500/40 scrollbar-thumb-rounded-full transition-colors">
                    <p className="text-muted-foreground leading-relaxed">
                      {projects[selectedProject].description}
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-muted/50 text-sm font-medium text-muted-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action buttons - fixed at the bottom of scrollable area */}
                    <div className="pt-4 pb-6 sticky bottom-0 bg-background/95 backdrop-blur-sm -mx-8 px-8 lg:-mx-10 lg:px-10">
                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/50">
                        <a
                          href={projects[selectedProject].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border border-slate-400/30 text-foreground py-2.5 px-4 rounded-xl font-medium transition-all duration-300 hover:from-slate-600/20 hover:to-gray-600/20 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/20 hover:scale-[1.02]"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.083.682-.233.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                          </svg>
                          View on GitHub
                        </a>
                        {projects[selectedProject].deployed && (
                          <a
                            href={projects[selectedProject].deployedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border border-slate-400/30 text-foreground py-2.5 px-4 rounded-xl font-medium transition-all duration-300 hover:from-slate-600/20 hover:to-gray-600/20 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/20 hover:scale-[1.02]"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 13v10h-6v-6H3v-2h12V3h6v10h-3z"/>
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative bg-gradient-to-r from-slate-600 to-gray-700 text-white px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/25 transform">
                <span className="relative z-10">View All Projects</span>
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
                      className="group relative bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-slate-400/50 shadow-lg hover:shadow-xl cursor-pointer mt-[3%]"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
