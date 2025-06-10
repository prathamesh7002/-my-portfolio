import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Instagram, ExternalLink, Mail } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'C', 'C++'],
  },
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'React.js', 'Bootstrap'],
  },
  {
    name: 'Backend',
    skills: ['Django', 'Flask', 'Node.js (in progress)'],
  },
  {
    name: 'Database',
    skills: ['SQLite', 'MySQL'],
  },
  {
    name: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Netlify'],
  },
  {
    name: 'Design Tools',
    skills: ['Figma', 'Canva'],
  },
];

export interface ProjectLink {
  type: 'github' | 'live' | 'details';
  url?: string;
  icon: LucideIcon;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string;
  links: ProjectLink[];
  imageSrc?: string;
  imageHint?: string;
}

export const projectsData: Project[] = [
  {
    id: 'login-signup',
    title: 'Login/Signup System',
    techStack: ['HTML', 'CSS'],
    description: 'A responsive login and signup system with basic form validation, showcasing fundamental web development skills.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Login-Signup-System', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://login-signup-system-psi.vercel.app/', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'authentication interface'
  },
  {
    id: 'carbon-footprint',
    title: 'Carbon Footprint Calculator',
    techStack: ['Django'],
    description: 'A web application to calculate carbon footprint based on user inputs, built with Django framework.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Carbon-Footprint-Calculator', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://carboncalculator.example.com', icon: ExternalLink, text: 'Live Demo' }, // Placeholder URL
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'eco calculator'
  },
  {
    id: 'digital-library',
    title: 'Digital Library',
    techStack: ['Django'],
    description: 'A digital library system for managing books and user interactions, developed using Django.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Digital-Library', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://digitallibrary.example.com', icon: ExternalLink, text: 'Live Demo' }, // Placeholder URL
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'online library'
  },
  {
    id: 'notes-app',
    title: 'Notes App (CRUD)',
    techStack: ['Flask'],
    description: 'A CRUD application for creating, reading, updating, and deleting notes, built with Flask.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Notes-App-Flask', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://notesapp.example.com', icon: ExternalLink, text: 'Live Demo' }, // Placeholder URL
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'note taking'
  },
  {
    id: 'scientific-converter',
    title: 'Scientific Unit Converter',
    techStack: ['Python', 'Tkinter'],
    description: 'A desktop application for converting various scientific units, using Python and Tkinter for the GUI.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Scientific-Unit-Converter', icon: Github, text: 'GitHub' },
      { type: 'details', icon: Mail, text: 'Details on request' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'unit conversion'
  },
  {
    id: 'car-rental',
    title: 'Car Rental System',
    techStack: ['MySQL', 'Python'],
    description: 'A system for managing car rentals, customers, and bookings, with a MySQL database backend.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Car-Rental-System', icon: Github, text: 'GitHub' },
      { type: 'details', icon: Mail, text: 'Details on request' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'vehicle rental'
  },
  {
    id: 'jobringer-redesign',
    title: 'Jobringer Redesign Assignment',
    techStack: ['HTML', 'CSS', 'Figma'],
    description: 'A redesign of the Jobringer platform, focusing on UI/UX improvements. Implemented frontend based on Figma design.',
    links: [
      { type: 'github', url: 'https://github.com/prathameshsaharkar/Jobringer-Redesign', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://jobringer-redesign.vercel.app/', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'job platform'
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/prathameshsaharkar', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/prathamesh-saharkar', icon: Linkedin }, // Placeholder URL
  { name: 'Instagram', url: 'https://instagram.com/prathamesh.saharkar_', icon: Instagram }, // Placeholder URL
];

export const RESUME_PATH = "/Prathamesh_Saharkar_Resume.pdf"; // User needs to add this file to /public
