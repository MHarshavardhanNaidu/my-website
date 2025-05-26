import React, { useEffect, useState, useRef } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const achievementsData = [
  'Responsive Web Design Certificate – FreeCodeCamp',
  'Advanced C/C++ – Coursera',
  'Data Science & Engineering – LPU',
];

const Achievements: React.FC = () => {
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
      id="achievements"
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
            Achievements
          </h2>
          <div className={`h-1 w-20 bg-cyan-400 mx-auto mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={`relative w-full max-w-3xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Award size={32} className="text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-white pl-12 pt-2">Certifications & Awards</h3>
            
            <ul className="space-y-4 mt-8">
              {achievementsData.map((achievement, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className={`mt-8 text-center transition-all duration-1000 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                View All Achievements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
