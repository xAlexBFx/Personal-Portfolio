
const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-200">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-slate-400 to-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in cutting-edge web technologies. 
              I specialize in creating innovative, scalable applications that push the boundaries 
              of what's possible in modern web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on both technical excellence and stunning visual design, I transform 
              complex ideas into elegant digital solutions that drive real business value.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="group relative">
                <div className="text-center p-8 bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm border border-border/50 rounded-2xl group-hover:border-slate-400/50 transition-all duration-500">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-200 mb-3">
                    3+
                  </div>
                  <div className="text-muted-foreground font-medium">Years of Learning Path</div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/0 to-gray-600/0 group-hover:from-slate-600/20 group-hover:to-gray-600/20 rounded-2xl blur transition-all duration-500"></div>
              </div>
              <div className="group relative">
                <div className="text-center p-8 bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm border border-border/50 rounded-2xl group-hover:border-slate-400/50 transition-all duration-500">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-200 mb-3">
                    20+
                  </div>
                  <div className="text-muted-foreground font-medium">Projects Completed</div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/0 to-gray-600/0 group-hover:from-slate-600/20 group-hover:to-gray-600/20 rounded-2xl blur transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-8">Expertise</h3>
              <div className="space-y-6">
                <div className="group flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-gray-300 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg group-hover:text-slate-300 transition-colors duration-300">
                      Frontend Development
                    </h4>
                    <p className="text-muted-foreground">Modern React, JavaScript, Advanced HTML & CSS</p>
                  </div>
                </div>
                <div className="group flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-slate-300 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Backend Development
                    </h4>
                    <p className="text-muted-foreground">Node.js, MongoDB | Database Architecture</p>
                  </div>
                </div>
                <div className="group flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-gray-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg group-hover:text-slate-400 transition-colors duration-300">
                      Deployment & Version Control
                    </h4>
                    <p className="text-muted-foreground">Git, GitHub, Netlify</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
