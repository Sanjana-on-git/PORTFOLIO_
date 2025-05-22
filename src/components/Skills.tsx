import React from 'react';
import { Code, Monitor, Server } from './Icons';
import { Helmet } from 'react-helmet-async';
interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3/SASS', 'JavaScript/TypeScript', 'React','Tailwind CSS']
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Backend and Database',
      skills: [ 'Python', 'MySQL']
    },

    {
      icon: <Monitor className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'UI/UX & Design',
      skills: ['Figma', 'Responsive Design', 'Wireframing', 'Prototyping', 'Accessibility', 'User Testing', 'Design Systems']
    },
    
  ];


  return (
    <>
            <Helmet>
                <title>About | Sanjana Chatterjee</title>
                <meta name="description" content="About Sanjana, a frontend developer skilled in React, TypeScript, and Tailwind." />
              </Helmet>
    
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical toolkit has been refined over years of building web applications and solving complex problems.
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
    </>
  );
};