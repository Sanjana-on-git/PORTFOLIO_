import React, { useEffect, useState } from 'react';
import { ArrowUp } from './Icons';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <a href="#home" className="font-bold text-xl mb-4 inline-block">
              <span className="text-indigo-400">{'<'}</span>
              SanjanaChatterjee
              <span className="text-indigo-400">{'/>'}</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-md">
              Creating beautiful, functional, and accessible websites is my passion. Let's work together to bring your vision to life.
            </p>
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Sanjana Chatterjee. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">
                <a href="mailto:sanjanachatterjee04@gmail.com" className="hover:text-indigo-400 transition-colors">sanjanachatterjee04@gmail.com</a>
              </li>
             
              <li className="text-slate-400">
                Delhi, India
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/Sanjana-on-git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/sanjana-chatterjee-a87aa6296/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
