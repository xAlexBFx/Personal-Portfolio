import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: 'I am interested in making a...'
  });

  const [errors, setErrors] = useState({
    name: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  useEffect(() => {
    // Check if all fields are valid
    const isValid = Object.values(errors).every(error => !error) && 
                  formData.name.trim() !== '' && 
                  formData.message.trim() !== 'I am interested in making a...';
    setIsFormValid(isValid);
  }, [errors, formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) return;

    const subject = "Interested Client from Portfolio";
    const body = `Hello Alex, I'm ${formData.name}.

${formData.message}

Best regards,
${formData.name}`;

    const mailtoUrl = `mailto:alexbetancesx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate the field that changed
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-gray-200">Connect</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-slate-400 to-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create something extraordinary together?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm always excited about new opportunities and innovative projects. 
                Let's discuss how we can bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div className="group flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">@</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Email</h4>
                    <p className="text-muted-foreground">alexbetancesx@gmail.com</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Phone</h4>
                    <p className="text-muted-foreground">+1 (857) 346-8284</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-gray-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Location</h4>
                    <p className="text-muted-foreground">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/alex-betances-1435b6361/" className="group flex-1 bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-slate-400/50 transition-all duration-300 text-center">
                <div className="text-slate-300 font-bold text-lg group-hover:text-foreground transition-colors duration-300">LinkedIn</div>
              </a>
              <a href="https://github.com/xAlexBFx" className="group flex-1 bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-gray-400/50 transition-all duration-300 text-center">
                <div className="text-gray-300 font-bold text-lg group-hover:text-foreground transition-colors duration-300">GitHub</div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-8">Send Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-muted-foreground mb-3">
                    Your Name {errors.name && <span className="text-red-500 text-sm font-normal"> - {errors.name}</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-6 py-4 bg-background/50 border ${errors.name ? 'border-red-500' : 'border-border'} rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-slate-400/20 transition-all duration-300`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-muted-foreground mb-3">
                    Message {errors.message && <span className="text-red-500 text-sm font-normal"> - {errors.message}</span>}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-6 py-4 bg-background/50 border ${errors.message ? 'border-red-500' : 'border-border'} rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-slate-400/20 transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isFormValid 
                      ? 'bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:from-slate-700 hover:to-gray-800 hover:shadow-slate-500/25'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  Send Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Glowing circle in footer background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gradient-to-t from-slate-500/20 via-gray-500/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <footer className="mt-20 pt-8 border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Betances. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
