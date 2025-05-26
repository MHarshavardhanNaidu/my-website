import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSkills = () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50"></div>
      
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 z-10 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-medium text-gray-400 mb-2">Hi, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">M </span>
              <span className="text-cyan-400">Harsha Vardhan </span>
              <span className="text-white">Naidu</span>
            </h1>
            
            <div className="h-1 w-20 bg-cyan-400 mb-6 mx-auto md:mx-0"></div>
            
            <p className="text-xl text-gray-300 mb-3">Aspiring Data Scientist & Tech Enthusiast</p>
            <p className="text-gray-400 mb-8">B.Tech CSE @ LPU | Python • Java • C • Web Dev</p>
            
            <div classNa
