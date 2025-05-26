import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent! (This is a demo)');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-950"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Contact Me
          </h2>
          <div className={`h-1 w-20 bg-cyan-400 mx-auto mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <p className={`text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 h-full">
              <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <a href="mailto:mes.mharshavardhan@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      mes.mharshavardhan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <a href="tel:+917981459989" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      +91 7981459989
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/mullagura-harsha-vardhan-naidu-545b86294"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Profile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">GitHub</h4>
                    <a
                      href="https://github.com/MHarshavardhanNaidu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-gray-300 font-medium mb-4">Connect with Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/mullagura-harsha-vardhan-naidu-545b86294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/MHarshavardhanNaidu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
