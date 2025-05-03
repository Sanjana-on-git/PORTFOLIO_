import React, { useState } from 'react';
import { ExternalLink, GithubLogo, MoveRight } from './Icons';
import Lexi from '../images/Lexi.png';
import buybetter from '../images/buybetter.png';
// Project types
type ProjectCategory = 'all' | 'web' | 'ui' | 'other';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory[];
  demoUrl: string;
  githubUrl: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  // Define projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'Lexi-Gamified Learning',
      description: 'A React-based educational platform with fun, accessible games to help children with dyslexia improve reading and writing. Features include phonics and word-building games, progress tracking, and blogs for parents and educators.',
      image: Lexi,
      technologies: ['React', 'TypeScript', 'JavaScript'],
      category: ['web'],
      demoUrl: 'https://lexi-edu.vercel.app/',
      githubUrl: 'https://github.com/Sanjana-on-git/Lexi'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A sleek and responsive e-commerce platform built using React, Tailwind CSS, and JavaScript. This project delivers a polished shopping experience with smooth animations, dynamic product listings, and interactive filtering systems. ',
      image: buybetter,
      technologies: ['HTML', 'Tailwind CSS', 'Vanilla CSS', 'JavaScript'],
      category: ['web'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Travel Blog Platform',
      description: 'A responsive blog platform focused on travel content with a custom CMS and interactive maps.',
      image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity.io', 'MapBox'],
      category: ['web', 'ui'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Dashboard UI Kit',
      description: 'A comprehensive UI kit for admin dashboards with 50+ components and dark/light mode support.',
      image: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Figma', 'React', 'Storybook', 'CSS Modules'],
      category: ['ui', 'web'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Task Management Tool',
      description: 'Collaborative task management application with real-time updates and team workspaces.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Vue.js', 'Supabase', 'Vite', 'TailwindCSS'],
      category: ['web'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Weather forecasting application with beautiful visualizations and location-based data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React Native', 'OpenWeather API', 'Expo', 'D3.js'],
      category: ['web'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
  ];
  
  // Filter projects based on active category
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category.includes(activeCategory)
  );
  
  // Category options
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Websites' },
    { value: 'ui', label: 'UI/UX' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project presented unique challenges and opportunities for growth.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex space-x-2">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-900" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      aria-label="View source code"
                    >
                      <GithubLogo className="w-4 h-4 text-slate-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full font-medium transition-colors"
          >
            View More on GitHub
            <MoveRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};