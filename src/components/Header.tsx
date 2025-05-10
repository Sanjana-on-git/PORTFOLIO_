import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, GithubLogo, Linkedin} from '../components/Icons';

interface HeaderProps {
  scrollPosition: number;
}

export const Header: React.FC<HeaderProps> = ({ scrollPosition }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'about', label: 'About', href: '#about' },
    
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-bold text-xl md:text-2xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <span className="text-indigo-600 dark:text-indigo-400">{'<'}</span>
          Sanjana Chatterjee
          <span className="text-indigo-600 dark:text-indigo-400">{'/>'}</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="px-4 py-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center ml-4 space-x-2">
            <a 
              href="https://github.com/Sanjana-on-git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sanjana-chatterjee-a87aa6296/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
           
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-40 bg-white dark:bg-slate-900 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="#home" className="font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                <span className="text-indigo-600 dark:text-indigo-400">{'<'}</span>
                Sanjana Chatterjee
                <span className="text-indigo-600 dark:text-indigo-400">{'/>'}</span>
              </a>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <div className="mt-auto">
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://github.com/sanjana-on-git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubLogo className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sanjana-chatterjee-a87aa6296/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};