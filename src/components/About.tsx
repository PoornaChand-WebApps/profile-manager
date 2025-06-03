import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { profileData } from '../data/profileData';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const contactIcons = {
    email: <Mail className="w-5 h-5" />,
    phone: <Phone className="w-5 h-5" />,
    location: <MapPin className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    github: <Github className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={200}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 lg:p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{profileData.about.summary}</p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Highlights</h3>
              <ul className="space-y-2">
                {profileData.about.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 lg:p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-md">
                  {contactIcons.email}
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href={`mailto:${profileData.contact.email}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-md">
                  {contactIcons.phone}
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href={`tel:${profileData.contact.phone}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {profileData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-md">
                  {contactIcons.location}
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">{profileData.contact.location}</p>
                  </div>
                </div>

                {profileData.contact.linkedin && (
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-md">
                    {contactIcons.linkedin}
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                      <a 
                        href={`https://${profileData.contact.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {profileData.contact.linkedin.replace('linkedin.com/', '')}
                      </a>
                    </div>
                  </div>
                )}

                {profileData.contact.github && (
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-md">
                    {contactIcons.github}
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                      <a 
                        href={`https://${profileData.contact.github}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {profileData.contact.github.replace('github.com/', '')}
                      </a>
                    </div>
                  </div>
                )}

                {profileData.contact.twitter && (
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-md">
                    {contactIcons.twitter}
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Twitter</p>
                      <a 
                        href={`https://${profileData.contact.twitter}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {profileData.contact.twitter.replace('twitter.com/', '@')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;