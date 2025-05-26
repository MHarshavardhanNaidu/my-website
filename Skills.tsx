import React, { useEffect, useState, useRef } from 'react';
import { Code, Globe, Database, PenTool as Tool } from 'lucide-react';

type Skill = {
  category: string;
  icon: React.ReactNode;
  skills: string;
  color: string;
};

const skillsData: Skill[] = [
  {
    category: 'Programming',
    icon: <Code size={24} />,
    skills: 'C, C++, Java, Python',
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Web Dev',
    icon: <Globe size={24} />,
    skills: 'HTML, CSS, JavaScript',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Data Science',
    icon: <Database size={24} />,
    skills: 'Pandas, Excel, Tableau',
    color: 'from-green-500 to-teal-500',
  },
  {
    category: 'Tools',
    icon: <Tool size={24} />,
    skills: 'Git, Canva, Photoshop',
    color: 'from-orange-500 to-yellow-500',
  },
];

const Skills: React.FC = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills
          </h2>
          <div className={`h-1 w-20 bg-cyan-400 mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.category}
              className={`bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-cyan-400/10 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg mb-5 flex items-center justify-center bg-gradient-to-br ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{skill.category}</h3>
              <p className="text-gray-400">{skill.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
