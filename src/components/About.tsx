import React from 'react';
import { Download } from './Icons';

export const About: React.FC = () => {
  // Timeline data
  const timeline = [
    {
      id: 1,
      year: '2023 - Present',
      role: 'Senior Frontend Developer',
      company: 'TechNova Solutions',
      description: 'Lead the frontend development team, architecting scalable React applications and implementing company-wide design systems.'
    },
    {
      id: 2,
      year: '2020 - 2023',
      role: 'Full Stack Developer',
      company: 'DigitalCraft Agency',
      description: 'Built complex web applications using React, Node.js, and MongoDB. Worked directly with clients to deliver custom solutions.'
    },
    {
      id: 3,
      year: '2018 - 2020',
      role: 'Web Developer',
      company: 'Innovate Studios',
      description: 'Created responsive websites and e-commerce platforms for various clients, focusing on UI/UX and performance optimization.'
    },
    {
      id: 4,
      year: '2016 - 2018',
      role: 'Junior Developer',
      company: 'StartHub Tech',
      description: 'Assisted in front-end development, learned industry best practices, and contributed to numerous client projects.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                I'm Alex, a passionate web developer with over 7 years of experience creating engaging digital experiences. My journey in web development began with simple HTML and CSS websites, but quickly evolved into a deep passion for creating interactive, user-centered applications.
              </p>
              <p>
                I specialize in building modern web applications using React, TypeScript, and Next.js, with a strong emphasis on performance, accessibility, and clean code. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community forums. I believe in continuous learning and staying on the cutting edge of web development trends.
              </p>
              <p>
                I'm always open to new opportunities and collaborations. Whether you need a complex web application, an e-commerce platform, or a custom solution for your business, I'm here to bring your vision to life.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="/resume.pdf"
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
  );
};