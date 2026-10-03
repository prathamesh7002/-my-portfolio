import type { LucideIcon } from 'lucide-react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Mail, 
  Trophy, 
  GraduationCap, 
  Building2, 
  FileText,
  ShieldCheck,
  Sparkles,
  Database,
  Server,
  Layers,
  Code2,
  Cpu
} from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#achievements', label: 'Achievements' },
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
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React 19', 'Next.js 15 (App Router)', 'Tailwind CSS', 'ShadCN UI', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Django 5', 'Django REST Framework', 'SimpleJWT', 'Flask', 'Node.js', 'Express', 'RESTful APIs'],
  },
  {
    name: 'Databases & Storage',
    skills: ['PostgreSQL', 'Supabase Storage', 'SQLite', 'MySQL', 'Firebase Firestore'],
  },
  {
    name: 'AI & Cloud Services',
    skills: ['Google Gemini 2.0 Flash', 'Genkit', 'OCR Integration', 'Firebase Auth', 'Vercel', 'Render', 'Netlify'],
  },
  {
    name: 'Tools & Security',
    skills: ['Git & GitHub', 'Postman', 'Vite', 'JWT Auth & RBAC', 'VS Code', 'Figma', 'Canva'],
  },
];

export interface ProjectLink {
  type: 'github' | 'live' | 'details' | 'docs';
  url?: string;
  icon: LucideIcon;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeType?: 'winner' | 'capstone' | 'featured' | 'regular';
  role?: string;
  category?: 'all' | 'featured' | 'fullstack' | 'ai' | 'python' | 'frontend';
  techStack: string[];
  description: string;
  highlights?: string[];
  links: ProjectLink[];
  imageSrc?: string;
  imageHint?: string;
}

export const projectsData: Project[] = [
  {
    id: 'medisafe-locker',
    title: 'MediSafe – AI-Powered Health Record Locker',
    subtitle: '🏆 SuPrathon 2K25 National Winner (1st Place)',
    badge: '🏆 SuPrathon 2K25 National Champion',
    badgeType: 'winner',
    role: 'Backend Developer & Database Specialist',
    category: 'featured',
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Google Gemini AI',
      'Firebase Auth',
      'Supabase Storage',
      'Tailwind CSS',
      'ShadCN UI',
      'OCR'
    ],
    description: 'National award-winning health document vault that secured 1st place in India’s biggest virtual hackathon — SuPrathon 2K25. Built to revolutionize medical record management with automated OCR text extraction, Google Gemini AI clinical summaries, natural language health Q&A assistant, time-bounded encrypted document sharing, and an instant dynamic emergency medical QR code profile for paramedics and emergency rooms.',
    highlights: [
      'Secured 1st Place nationally at SuPrathon 2K25 among thousands of participants across India',
      'Architected backend data models, Firebase authentication, and Supabase encrypted storage with strict RLS policies',
      'Integrated Google Gemini 2.0 Flash for multi-lingual clinical summarization and intelligent auto-tagging',
      'Developed instant emergency health profile generation with scannable QR codes for emergency first responders',
      'Engineered time-decaying shared links with access logging to guarantee patient privacy'
    ],
    links: [
      { type: 'live', url: 'https://medisafe-locker.netlify.app/', icon: ExternalLink, text: 'Live Demo' },
      { type: 'github', url: 'https://github.com/prathamesh7002/medisafe-health-locker', icon: Github, text: 'GitHub Repo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'medical ai vault'
  },
  {
    id: 'hostel-portal',
    title: 'Government Hostel Admission Management Portal',
    subtitle: '🎓 Diploma Major Capstone Project (Production-Grade Full Stack)',
    badge: '🎓 Diploma Major Capstone (95.75% Aggregate)',
    badgeType: 'capstone',
    role: 'Full-Stack Architect & Backend Lead',
    category: 'featured',
    techStack: [
      'React 19',
      'Django 5',
      'Django REST Framework',
      'Tailwind CSS 3',
      'Vite 7',
      'SimpleJWT',
      'PostgreSQL / SQLite',
      'Axios'
    ],
    description: 'Comprehensive, production-ready digital ecosystem engineered to manage government hostel admissions end-to-end. Modernizes traditional manual workflows with student self-registration, email OTP verification, multi-year hostel applications, strict file upload validation (15KB–225KB), automated provisional & final merit list generation with reservation category quota seat allotment (OPEN, SC, ST, OBC, DT/NT/VJ, SEBC), and 3-tier warden review access controls.',
    highlights: [
      'Engineered full-stack architecture coupling React 19 SPA with Django 5 REST Framework API via SimpleJWT auth',
      'Developed algorithmic seat allotment engine distributing OPEN and reserved quota seats with unfilled redistribution',
      'Implemented 3-tier Role-Based Access Control: Super Admin, Boys Warden, and Girls Warden with gender-scoped filtering',
      'Built multi-year application states, email OTP verification, and automated status change notifications',
      'Authored exhaustive technical documentation comprising 15+ architectural blueprints, API endpoints, and workflow schemas'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/hostel', icon: Github, text: 'GitHub Repo' },
      { type: 'details', icon: FileText, text: 'Architecture Docs' }
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'hostel portal dashboard'
  },
  {
    id: 'carbon-footprint',
    title: 'Carbon Footprint Calculator',
    subtitle: 'Eco-Impact Assessment Web Application',
    badge: 'Django Full-Stack',
    badgeType: 'regular',
    role: 'Full-Stack Developer',
    category: 'python',
    techStack: ['Django', 'Python', 'Bootstrap', 'Render', 'SQLite'],
    description: 'A web application built to calculate user carbon footprints based on transportation, energy consumption, and lifestyle metrics, offering actionable insights for reducing emissions.',
    highlights: [
      'Custom algorithm for localized CO2 factor estimations',
      'Responsive interface with real-time score updates and breakdown analysis'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/co2-footprint-calculator', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://co2-footprint-calculator.onrender.com', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'eco calculator'
  },
  {
    id: 'digital-library',
    title: 'Digital Library Management System',
    subtitle: 'Online Book Catalog & Lending Portal',
    badge: 'Django Web App',
    badgeType: 'regular',
    role: 'Full-Stack Developer',
    category: 'python',
    techStack: ['Django', 'Python', 'SQLite', 'HTML5', 'CSS3', 'Render'],
    description: 'A complete digital library platform for cataloging books, managing student memberships, tracking borrowings and returns, and automatically calculating overdue fines.',
    highlights: [
      'Admin inventory management with multi-category book sorting',
      'User borrowing history and dynamic reservation status'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/digital-library', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://digital-library-k5h0.onrender.com', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'online library'
  },
  {
    id: 'notes-app',
    title: 'Cloud Notes App (Full CRUD)',
    subtitle: 'Lightweight Note & Idea Vault',
    badge: 'Flask & Python',
    badgeType: 'regular',
    role: 'Backend & Frontend Developer',
    category: 'python',
    techStack: ['Flask', 'Python', 'Jinja2', 'SQLite', 'Render'],
    description: 'Fast and responsive CRUD application enabling users to draft, organize, tag, edit, and search their thoughts and code snippets effortlessly.',
    highlights: [
      'Instant search and tag-based filtering',
      'Lightweight database queries with minimal load latency'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/Notes_app', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://notes-app-pprp.onrender.com', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'note taking'
  },
  {
    id: 'jobringer-redesign',
    title: 'Jobringer Platform UI/UX Redesign',
    subtitle: 'Modern Job Board Interface',
    badge: 'UI/UX Redesign',
    badgeType: 'regular',
    role: 'Frontend Developer & UI Designer',
    category: 'frontend',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Vercel'],
    description: 'Complete UI/UX revamp of the Jobringer employment portal. Translated Figma wireframes into high-fidelity responsive frontend code with modern typography and interactive filters.',
    highlights: [
      'Redesigned job seeker dashboard and search interface',
      'Mobile-first responsive styling with zero external frameworks'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/redesign-assignment', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://redesign-assignment-jobringer.vercel.app/', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'job platform'
  },
  {
    id: 'login-signup',
    title: 'Modern Authentication Portal',
    subtitle: 'Secure Form & UI Interaction',
    badge: 'Frontend Essentials',
    badgeType: 'regular',
    role: 'Frontend Developer',
    category: 'frontend',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    description: 'Clean, elegant authentication interface with client-side regex validation, password visibility toggles, and animated transitions.',
    highlights: [
      'Accessible form controls with real-time feedback',
      'Sleek glassmorphism aesthetic and dark mode styling'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/login-page', icon: Github, text: 'GitHub' },
      { type: 'live', url: 'https://login-page-4tbv8bofr-prathamesh7002s-projects.vercel.app/', icon: ExternalLink, text: 'Live Demo' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'authentication interface'
  },
  {
    id: 'scientific-converter',
    title: 'Scientific Unit Converter',
    subtitle: 'Precision Multi-Unit Desktop Tool',
    badge: 'Python GUI',
    badgeType: 'regular',
    role: 'Python Developer',
    category: 'python',
    techStack: ['Python', 'Tkinter'],
    description: 'Desktop GUI tool engineered for rapid scientific conversion between physics and engineering units, including thermodynamic temperatures, pressure, length, and power metrics.',
    highlights: [
      'High-precision calculation formulas',
      'Native desktop GUI built using Python Tkinter'
    ],
    links: [
      { type: 'github', url: 'https://github.com/prathamesh7002/microproject', icon: Github, text: 'GitHub' },
      { type: 'details', icon: Mail, text: 'Details on request' },
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'unit conversion'
  },
];

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  badge: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: 'hackathon-winner',
    title: 'National Winner (1st Place)',
    subtitle: 'India\'s Biggest Virtual Hackathon',
    organization: 'SuPrathon 2K25',
    badge: '🏆 1st Place National Champion',
    icon: Trophy,
    description: 'Secured 1st Place nationally in SuPrathon 2K25 with our flagship project "MediSafe". Recognized by the jury for real-world healthcare impact, advanced technical architecture, Google Gemini AI integration, and robust database design.',
    highlights: [
      'Role: Backend Developer & Database Specialist',
      'Collaborated with a 4-member cross-functional team',
      'Integrated Google Gemini 2.0 Flash, OCR, and Supabase encrypted storage',
      'Live deployed PWA utilized for national judging rounds'
    ]
  },
  {
    id: 'diploma-distinction',
    title: '95.75% Aggregate in Diploma (IT)',
    subtitle: 'Academic Distinction & Rank Holder',
    organization: 'Government Polytechnic, Nagpur',
    badge: '🎓 95.75% Distinction',
    icon: GraduationCap,
    description: 'Completed 3-year Diploma in Information Technology with an exceptional 95.75% aggregate score. Consistently stood out for academic excellence while building practical, production-level software outside the classroom.',
    highlights: [
      'Graduated with First Class with Distinction (95.75%)',
      'Major Capstone: Government Hostel Admission Management Portal',
      'Mastered core CS principles: OOP, Data Structures, RDBMS, and Web Engineering',
      'Qualified for Direct Second Year admission to top engineering colleges'
    ]
  },
  {
    id: 'vit-pune',
    title: 'Computer Engineering @ VIT Pune',
    subtitle: 'B.Tech in Computer Engineering',
    organization: 'Vishwakarma Institute of Technology (VIT), Pune',
    badge: '🏛️ Premier Engineering Institute',
    icon: Building2,
    description: 'Currently pursuing Bachelor of Technology in Computer Engineering at VIT Pune. Actively applying systems engineering, cloud architecture, and modern full-stack development to solve real-world problems.',
    highlights: [
      'Direct Second Year Entry based on stellar diploma merit',
      'Specializing in Distributed Systems, Full-Stack Architecture, and AI Applications',
      'Active contributor to hackathon builds and open-source initiatives'
    ]
  }
];

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/prathamesh7002', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prathamesh-saharkar-99563a2b0', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/prathameshsaharkar/?hl=en', icon: Instagram },
];

export const RESUME_PATH = "/Prathamesh_Saharkar_Resume.pdf";
