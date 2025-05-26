import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-cyan-400">MHVN</a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#achievements" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Achievements
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Harsha Vardhan. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
