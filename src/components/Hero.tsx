import React from 'react';
import { ArrowDown } from 'lucide-react';
import { profileData } from '../data/profileData';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center px-4 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30 dark:opacity-20">
          {/* Background gradient elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl z-10">
        <AnimatedSection delay={100}>
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <img 
              src={profileData.avatar} 
              alt={profileData.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {profileData.name}
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={500}>
          <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {profileData.title}
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={700}>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10">
            {profileData.bio}
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={900}>
          <button 
            onClick={handleScrollDown}
            className="animate-bounce mt-12 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;