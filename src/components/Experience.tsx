import React from 'react';
import { BriefcaseIcon, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profileData';
import AnimatedSection from './AnimatedSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {profileData.experience.map((job, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-900 -ml-4 md:ml-0 md:-translate-x-1/2 flex items-center justify-center">
                    <BriefcaseIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6 transform transition-transform duration-300 hover:scale-[1.02]">
                      <div className="flex flex-wrap justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.position}</h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                          {job.period}
                        </span>
                      </div>
                      
                      <h4 className="text-gray-700 dark:text-gray-300 mb-4">{job.company}</h4>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                      
                      {job.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        <AnimatedSection delay={400}>
          <h2 className="text-3xl font-bold text-center my-12 text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profileData.education.map((edu, index) => (
              <AnimatedSection key={index} delay={600 + index * 200}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6 transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="ml-14">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mb-3">
                      {edu.period}
                    </span>
                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;