import React, { useEffect, useState } from 'react';

export const MouseParallax: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
        style={{
          transform: `translate(${position.x * 30}px, ${position.y * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
        style={{
          transform: `translate(${-position.x * 30}px, ${-position.y * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      ></div>
    </div>
  );
};
