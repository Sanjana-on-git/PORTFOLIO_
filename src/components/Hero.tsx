import React, { useEffect, useRef } from 'react';
import sanjana from '../images/sanjana-canva.jpg'; 
import { MoveRight, Download } from './Icons';
import resume from '../images/resume.pdf'; 
export const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  // Text typing animation effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const roles = ['Web Developer', 'UI/UX Designer', 'React Expert'];
    let currentRoleIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentLetterIndex - 1);
          currentLetterIndex--;
        }
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentLetterIndex + 1);
          currentLetterIndex++;
        }
        typingSpeed = 150;
      }
      
      if (!isDeleting && currentLetterIndex === currentRole.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && currentLetterIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 opacity-0 animate-fade-in">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-200">
              Sanjana Chatterjee
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-4 min-h-[2rem] opacity-0 animate-fade-in animation-delay-400">
              I'm a <span ref={textRef} className="text-indigo-600 dark:text-indigo-400"></span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-lg opacity-0 animate-fade-in animation-delay-600">
              I design and develop responsive websites where technologies meet creativity. With a strong focus on React, TypeScript, and modern design principles, I build engaging user experiences that drive results.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-800">
              <a 
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors flex items-center group"
              >
                Get in Touch
                <MoveRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={resume}
                download
                className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full font-medium transition-colors flex items-center"
               > 
                Download CV
                <Download className="ml-2 w-5 h-5" />
                </a>
            </div>
          </div>
          <div className="md:w-1/2 relative opacity-0 animate-fade-in animation-delay-1000">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-full opacity-20 dark:opacity-30 animate-blob-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full opacity-20 dark:opacity-30 animate-blob-slow animation-delay-2000 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-teal-500 rounded-full opacity-20 dark:opacity-30 animate-blob-slow animation-delay-4000"></div>
              <img 
                src={sanjana}
                alt="Sanjana Chatterjee" 
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
