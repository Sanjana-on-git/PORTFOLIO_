import React from 'react';
import { Code, Monitor, Server, Database, Smartphone } from './Icons';

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
      skills: ['HTML5', 'CSS3/SASS', 'JavaScript/TypeScript', 'React', 'Vue.js', 'Next.js', 'Redux', 'Tailwind CSS']
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Authentication', 'Security']
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Database & DevOps',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Docker', 'CI/CD', 'AWS', 'Vercel/Netlify']
    },
    {
      icon: <Monitor className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'UI/UX & Design',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing', 'Prototyping', 'Accessibility', 'User Testing', 'Design Systems']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS/Android Basics', 'Responsive Patterns', 'Native Integration', 'Push Notifications']
    }
  ];

  // Skill proficiency for the horizontal bars
  const proficientSkills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'UI/UX Design', level: 75 },
  ];

  return (
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
        
        {/* Proficiency Levels */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficientSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `progressAnimation 1.5s ease-out ${index * 0.2}s` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};