import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github, Lock, Film, BarChart3 } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  gradient: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Password Generator',
    description: 'Python-based password generator with customizable features.',
    icon: <Lock size={24} />,
    tags: ['Python', 'Security', 'CLI'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'Movie Booking System',
    description: 'Java project with user input and database simulation.',
    icon: <Film size={24} />,
    tags: ['Java', 'Database', 'UI/UX'],
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    id: 3,
    title: 'HR Analytics Dashboard',
    description: 'Tableau project to visualize employee insights.',
    icon: <BarChart3 size={24} />,
    tags: ['Tableau', 'Data Viz', 'Analytics'],
    gradient: 'from-green-600 to-teal-500',
  },
];

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-950"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Projects
          </h2>
          <div className={`h-1 w-20 bg-cyan-400 mx-auto mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <p className={`text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Here are some of my noteworthy projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 transform group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 700}ms` }}
            >
              <div className={`h-3 w-full bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                      <Github size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com/MHarshavardhanNaidu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-md hover:bg-cyan-400/10 transition-all duration-300"
          >
            <Github size={18} />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
