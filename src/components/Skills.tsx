import React from 'react';
import { profileData } from '../data/profileData';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {profileData.skills.map((skillCategory, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 100}>
              <div className="mb-12 last:mb-0">
                <h3 className="text-xl font-semibold underline mb-6 mt-3 text-gray-900 dark:text-white">
                  {skillCategory.category}
                </h3>
                
                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300  font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.proficiency}%`,
                            animation: `growRight 1.5s ease-out ${skillIndex * 0.1}s forwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes growRight {
          from { width: 0; }
          to { width: var(--final-width); }
        }
      `}</style>
    </section>
  );
};

export default Skills;