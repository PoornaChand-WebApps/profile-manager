import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { profileData } from '../data/profileData';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: profileData.contact.linkedin ? `https://${profileData.contact.linkedin}` : null,
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      url: profileData.contact.github ? `https://${profileData.contact.github}` : null,
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: profileData.contact.twitter ? `https://${profileData.contact.twitter}` : null,
      icon: <Twitter className="w-5 h-5" />
    }
  ].filter(link => link.url !== null);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              {profileData.name.split(' ')[0]}
              <span className="text-blue-400">.</span>
            </div>
            <p className="text-gray-400 max-w-md">
              {profileData.bio}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm flex items-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>&copy; {year} {profileData.name}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;