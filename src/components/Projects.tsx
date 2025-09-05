import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, GithubLogo, MoveRight } from './Icons';
import Lexi from '../images/Lexi.png';
import buybetter from '../images/buybetter.png';
import weather from '../images/weather.png';
import chitchat from '../images/chitchat.png';
import urbanPalette from '../images/urbanPalette.png';
import TGF from '../images/TGF.png';
import EdTech from '../images/EdTech.png';
import Dashboard from '../images/Dashboard.png';
import Monster from '../images/Monster.png';

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
      title: 'BuyBetter - E-commerce Platform',
      description: 'A sleek and responsive e-commerce platform built using React, Tailwind CSS, and JavaScript. This project delivers a polished shopping experience with smooth animations, dynamic product listings, and interactive filtering systems. ',
      image: buybetter,
      technologies: ['HTML', 'Tailwind CSS', 'Vanilla CSS', 'JavaScript'],
      category: ['web'],
      demoUrl: 'https://buy-better.netlify.app/',
      githubUrl: 'https://github.com/Sanjana-on-git/E-commerce'
    },
    {
      id: 3,
      title: 'Mausam-o-Meter',
      description: 'A responsive weather web app platform that provides real-time weather updates and forecasts. Built with HTML,CSS, and JavaScript, it features a user-friendly interface and interactive elements for an engaging experience.',
      image: weather ,
      technologies: ['HTML', 'CSS', 'Javascript'],
      category: ['web'],
      demoUrl: 'https://mausam-o-meter.netlify.app/',
      githubUrl: 'https://github.com/Sanjana-on-git/Weather-app-2.git'
    },
    {
      id: 4,
      title: 'The Urban Palette',
      description: 'The urban palette is a restaurant website that showcases a modern and elegant design. It features a user-friendly interface, responsive layout, and interactive elements to enhance the dining experience.',
      image: urbanPalette,
      technologies: [ 'React', 'Typescript','Javascript' ],
      category: [ 'web'],
      demoUrl: 'https://the-urban-palette.netlify.app/',
      githubUrl: 'https://github.com/Sanjana-on-git/Restaurant-website'
    },
    {
      id: 5,
      title: 'The Gliding Fork',
      description: 'The Gliding Fork is a UI/UX project that showcases a modern and elegant design for a food ordering website. It features a user-friendly interface, responsive layout, and interactive elements to enhance the dining experience.',
      image: TGF,
      technologies: ['Figma', 'UI/UX Design','Prototyping'],
      category: ['ui'],
      demoUrl: 'https://www.figma.com/design/gL8NarMxqTloKvOqNbKeqj/TheGlidingFork?node-id=0-1&p=f&t=G58hSSMJjw0fHbKv-0',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Chit-Chat - Chat Bot',
      description: 'A virtual assistant chatbot that helps users with various queries.',
      image: chitchat,
      technologies: ['HTML', 'CSS', 'JS', 'Node.js'],
      category: ['web'],
      demoUrl: 'https://chit-chat-snap.netlify.app/',
      githubUrl: 'https://github.com/Sanjana-on-git/Basic-JS-Chatbot'
    },
      {
      id: 7,
      title: 'Lexi-Gamified Learning',
      description: 'Designed an interactive gamified learning platform tailored for dyslexic children, focusing on accessibility, engagement, and ease of use.',
      image: Lexi,
      technologies: ['Figma', 'Prototyping', 'Wireframing', 'UI/UX Design'],
      category: ['ui'],
      demoUrl: 'https://www.figma.com/proto/GVJBPNWJtW3cHkCVxkSUUS/Untitled?node-id=1-2&t=9euSnJQbl96m0zsT-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
      githubUrl: '#'
    },
      {
      id: 8,
      title: 'EdTech Authentication (Responsive)',
      description: 'Created child-friendly authentication pages (Login, Signup, and Forgot Password) for an EdTech platform designed for young learners. The UI uses bright colors, large buttons, and playful illustrations to make the process fun and unintimidating for kids.',
      image: EdTech,
      technologies: ['Figma', 'Prototyping', 'Wireframing', 'UI/UX Design'],
      category: ['ui'],
      demoUrl: 'https://www.figma.com/proto/rdAvrsKHJxDiHw2BkljmXo/SmarterTeens?node-id=1-2',
      githubUrl: '#'
    },
      {
      id: 9,
      title: 'Mentor Dashboard',
      description: 'Designed an intuitive Mentor Dashboard for an EdTech platform to help mentors track student progress and manage learning activities. The dashboard features a clean layout with performance analytics, assignment tracking, and communication tools, making it easy for mentors to guide and support students effectively.',
      image: Dashboard,
      technologies: ['Figma', 'Prototyping', 'Wireframing', 'UI/UX Design'],
      category: ['ui'],
      demoUrl: 'https://www.figma.com/design/e03jFJqYr4cTc21x7z8SVe/Untitled?node-id=0-1&p=f&t=2BjZZRKhGlUHN70e-0',
      githubUrl: '#'
    },
    {
      id: 10,
      title: 'Monster Website Redesigned',
      description: 'I reimagined Monster Energy with a striking new look that pushes the brand beyond its classic identity. The redesign introduces sleeker layouts, vibrant gradients, and modern typography while still keeping the raw, high-energy vibe Monster is known for. Each flavor has a distinct color system and visual language, making it instantly recognizable while standing out on the shelves.',
      image: Monster,
      technologies: ['Figma', 'Prototyping', 'Wireframing', 'UI/UX Design'],
      category: ['ui'],
      demoUrl: 'https://www.figma.com/proto/BohE3acbNZLSGzybTw5nls/Untitled?node-id=4-43&t=GUvpxavwaJa0ql1r-0&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=1%3A2',
      githubUrl: '#'
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
    <>
      <Helmet>
        <title>About | Sanjana Chatterjee</title>
        <meta name="description" content="About Sanjana, a frontend developer skilled in React, TypeScript, and Tailwind." />
      </Helmet>
  
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
                {/* Image Container with 16:10 Aspect Ratio */}
                <div className="relative overflow-hidden aspect-w-16 aspect-h-10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
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
              href="https://github.com/Sanjana-on-git?tab=repositories&q=&type=source&language=&sort=" 
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
    </>
  );
};
