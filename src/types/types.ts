export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  about: {
    summary: string;
    details: string[];
  };
  skills: {
    category: string;
    items: {
      name: string;
      proficiency: number; // 0-100
    }[];
  }[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
    technologies?: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    description?: string;
  }[];
  projects: {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    link?: string;
  }[];
}