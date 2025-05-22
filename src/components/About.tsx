import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download } from './Icons';
import resume from '../images/resume.pdf';
export const About: React.FC = () => {
  // Timeline data
  const timeline = [
    {
      id: 1,
      year: '2025 - Present',
      role: 'Full Stack Development Intern',
      company: 'NeuroLinkX IT Solutions',
      description: 'Contributing to the development of modern, responsive web applications using technologies like React and JavaScript. Collaborating with the tech team to improve UI/UX, optimize performance, and implement new features that enhance the overall user experience.'
    },
    {
      id: 2,
      year: '2023 - 2024',
      role: 'Frontend Development Intern',
      company: 'Univoc Foundation',
      description: 'Built complex web applications using React, Javascript, and Typescript. Worked directly with clients to deliver custom solutions.'
    },
    
  ];

  return (
    <>
    <Helmet>
        <title>About | Sanjana Chatterjee</title>
        <meta name="description" content="About Sanjana, a frontend developer skilled in React, TypeScript, and Tailwind." />
      </Helmet>
    <section id="about" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
              I'm Sanjana, a passionate web developer and B.Tech Information Technology student, dedicated to building creative, user-friendly digital experiences. My journey in web development started with crafting simple websites and has grown into a deep enthusiasm for building responsive, accessible, and engaging websites.
              </p>
              <p>
              I specialize in frontend development using HTML, CSS, JavaScript,Typescript and frameworks like React. I enjoy creating playful and purpose-driven websites—especially those that have a positive social impact, such as educational platforms for children and inclusive digital solutions.
              </p>
              <p>
              Beyond coding, I'm a committed learner who actively participates in hackathons and tech initiatives. I love exploring new technologies, contributing to meaningful projects, and continually enhancing my skills to stay ahead in the tech world.
              </p>
              <p>
                I'm always open to new opportunities and collaborations. Whether you need a complex web application, an e-commerce platform, or a custom solution for your business, I'm here to bring your vision to life.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href={resume}
                download
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
              >
                Download Full Resume
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">My Journey</h3>
            <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={item.id}
                  className="relative"
                >
                  <span className="absolute -left-10 flex items-center justify-center w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full border-2 border-indigo-500 dark:border-indigo-400">
                    <span className="h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  </span>
                  <div className={`pb-6 ${index !== timeline.length - 1 ? '' : 'pb-0'}`}>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1 text-slate-800 dark:text-white">{item.role}</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{item.company}</p>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};