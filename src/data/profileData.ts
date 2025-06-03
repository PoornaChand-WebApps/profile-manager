import type { ProfileData } from '../types/types';
import reactLogo from '../assets/profile.jpg';

export const profileData: ProfileData = {
  name: "Poorna Chand Yanamadala",
  title: "Full Stack Developer",
  bio: "Turning ideas into elegant, high-performing web applications with code and creativity.",
  avatar: reactLogo,
  contact: {
    email: "poornachand621@gmail.com",
    phone: "+1 (475) 237-7881",
    location: "Cedar Rapids, IA",
    linkedin: "linkedin.com/in/poorna-chand-y",
    // github: "https://github.com/PoornaChand-WebApps",
    // twitter: "twitter.com/janedoe"
  },
  about: {
    summary: "I'm a passionate Full Stack Developer with over 6 years of experience building scalable web applications, combining responsive, intuitive user interfaces with robust and efficient back-end systems.",
    details: [
      "Proficient in Java (Spring Boot) for building robust, scalable back-end APIs and microservices",
      "Skilled in Vue.js for crafting dynamic, responsive, and component-based front-end applications",
      "Experienced in full CI/CD pipelines using tools like Jenkins, GitLab CI, Docker, and Kubernetes",
      "Familiar with DevOps practices including containerization, infrastructure as code (Terraform, Ansible), and system monitoring",
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "Vue", proficiency: 95 },
        { name: "React", proficiency: 90 },
        { name: "Angular", proficiency: 85 },
        { name: "TypeScript", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "Tailwind CSS", proficiency: 90 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java", proficiency: 80 },
        { name: "SQL", proficiency: 80 },
        { name: "Node.js", proficiency: 80 },
        { name: "Express", proficiency: 75 },
        { name: "GraphQL", proficiency: 70 },
        { name: "REST APIs", proficiency: 85 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 70 },
        { name: "CI/CD - GitLab CI", proficiency: 75 },
        { name: "Kubernetes", proficiency: 75 },
        { name: "Jenkins", proficiency: 75 },
        { name: "Testing- JUnit, Jest", proficiency: 80 }
      ]
    }
  ],
  experience: [
    {
      company: "Advithri Technologies",
      position: "Java Full Stack Developer",
      period: "2022 - Present",
      description: "Contributed to the full stack development of a scalable SaaS platform using Java, Vue.js, and PostgreSQL. Implemented scalable REST APIs and modular frontend components, improving deployment speed and maintainability by 35%.",
      technologies: ["Java","SprintBoot","SQL","Vue", "TypeScript", "REST APIs","AWS"]
    },
    {
      company: "IVY Works LLC",
      position: "Java Full stack Developer",
      period: "2019 - 2021",
      description: "Developed responsive web applications for enterprise clients. Collaborated with UX designers to implement pixel-perfect interfaces.",
      technologies: ["Java","SprintBoot","SQL","React", "JavaScript", "SCSS", "REST APIs"]
    },
  ],
  education: [
    {
      institution: "Northwest Missouri State University",
      degree: "M.S. in Applied Computer Science",
      period: "2021 - 2023",
      description: "Specialized training in modern JavaScript frameworks and tools"
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://example.com/project1"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team functionality",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Firebase", "Material UI"],
      link: "https://example.com/project2"
    },
    {
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and health metrics",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "TypeScript", "GraphQL"],
      link: "https://example.com/project3"
    }
  ]
};