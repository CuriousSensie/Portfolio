// ============================================================
// Centralized Constants for Portfolio Application
// ============================================================

import type {
  Collaboration,
  Project,
  TechCategory,
  NavItem,
  SocialLink,
  HeroContent,
  SectionConfig,
} from '@/types';

// Import project images
import eprocure365 from '@/assets/eprocure365.png';
import osmrtnica from '@/assets/projects/osmrtnica.png';
import genpage from '@/assets/projects/genpage.png';
import shieldSync from '@/assets/projects/shield_sync.png';
import menuforgeImg from '@/assets/menuforge.png';
import easyreadsImg from '@/assets/easyreads.png';
import translyImg from '@/assets/transly.png';

// ============================================================
// Hero Section Content
// ============================================================

export const HERO_CONTENT: HeroContent = {
  name: {
    first: 'Hasnaat',
    last: 'Khalid',
  },
  tagline: 'From Ideas to Execution',
  description: [
    `I'm a Full-Stack Engineer providing my services in Web & Mobile app development. 
I'm dedicated to crafting seamless, user-focused digital experiences. With a strong 
foundation in modern web and mobile technologies like React, React Native, Next.js, 
and robust back-end solutions with Node.js, MySQL, PostgreSQL, and MongoDB, I 
specialize in building efficient, scalable, and impactful applications.`,
    `I'm always excited to connect, learn, and contribute to projects that push 
boundaries — let's create something meaningful together!`,
  ],
  terminalCommand: 'cat about.md',
  statusText: 'available for work',
};

// ============================================================
// Collaborations / Team Projects
// ============================================================

export const COLLABORATIONS: Collaboration[] = [
  {
    id: 1,
    title: 'EProcure365',
    description:
      'Collaborated with a team of 7 developers to build a SaaS solution for AI enabled procurement management with multi-tenant support, separate dashboards, and AI integrations.',
    role: 'Full Stack Developer',
    image: eprocure365,
    technologies: ['Next', 'Node.js', 'MongoDB', 'OpenAI'],
    link: 'https://www.eprocure365.com/',
  },
  {
    id: 2,
    title: 'Osmrtnica - Obituary Management System',
    description:
      'Worked as the lead developer to develop features, and provide support to build a SaaS solution for Obituary Management System with multi-tenant support and separate dashboards. Managed the hosting through Hostinger.',
    role: 'Full Stack Developer and Hosting Manager',
    image: osmrtnica,
    technologies: ['Next', 'Node.js', 'SQL', 'Docker', 'Hostinger'],
    link: 'https://www.osmrtnica.com/',
  },
  {
    id: 3,
    title: 'GenPage.ai',
    description:
      'Helped implement the dashboard and integrate backend APIs for a SaaS platform for AI enabled Outreach, Campaigns and Lead Generation. Also, helped make the APIs Zapier compatible and integrate Zapier.',
    role: 'Frontend & Zapier Automation',
    image: genpage,
    technologies: ['Next.js', 'TailwindCSS', 'Php', 'Zapier'],
    link: 'https://genpage.ai',
  },
  {
    id: 4,
    title: 'ShieldSync',
    description:
      'Integrated Payload CMS for content management. Designed implemented and integrated the APIs for Blogs and Content Management System.',
    role: 'Full Stack Developer',
    image: shieldSync,
    technologies: ['Next.js', 'Payload CMS', 'Digital Ocean', 'Socket.io'],
    link: 'https://shield-sync.com/',
  },
];

// ============================================================
// Personal Projects
// ============================================================

export const PROJECTS: Project[] = [
  {
    title: 'MenuForge',
    image: menuforgeImg,
    description:
      'MenuForge is a full-stack SaaS platform that enables restaurants and businesses to create, customize, and launch their own fully functional online storefronts—without writing a single line of code.',
    technologies: ['Next.js', 'Amazon S3', 'Supabase (PostgreSQL)', 'TailwindCSS'],
    link: 'https://menuforge.vercel.app/',
  },
  {
    title: 'EasyReads',
    image: easyreadsImg,
    description:
      'An Open Source E-Library using Amazon Cloud Services for everyone to use. You can read books and contribute to the community by uploading epubs or pdfs of books.',
    technologies: ['React', 'NodeJS', 'MongoDB', 'Amazon S3'],
    link: 'https://easyreads.vercel.app',
  },
  {
    title: 'Transly',
    image: translyImg,
    description:
      'A Transcription and Translation service using Artificial Intelligence',
    technologies: ['OpenAI', 'Xenova/Transformers', 'React', 'Firebase'],
    link: 'https://translyml.netlify.app',
  },
];

// ============================================================
// Tech Stack Categories
// ============================================================

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: 'Frontend',
    technologies: ['React', 'React Native', 'Next.js', 'TailwindCSS', 'TypeScript'],
  },
  {
    label: 'Backend',
    technologies: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    label: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    label: 'Cloud & Tools',
    technologies: ['Amazon S3', 'Firebase', 'Git', 'Docker'],
  },
  {
    label: 'AI / ML',
    technologies: ['OpenAI', 'Xenova/Transformers'],
  },
];

// ============================================================
// Navigation Items
// ============================================================

export const NAV_ITEMS: NavItem[] = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'tech', href: '#tech' },
  { label: 'contact', href: '#contact' },
];

// ============================================================
// Social Links
// ============================================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/muhammad-hasnaat-khalid-4aa383297/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/CuriousSensie',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:hasnaatkhalid911@gmail.com',
    icon: 'email',
  },
];

// ============================================================
// Section Configurations
// ============================================================

export const SECTIONS: Record<string, SectionConfig> = {
  collaborations: {
    id: 'collaborations',
    tag: 'Featured Collaborations',
    title: 'Recents Projects with Teams',
  },
  projects: {
    id: 'projects',
    tag: 'Projects',
    title: 'My Recent Projects',
  },
  tech: {
    id: 'tech',
    tag: 'Tech Stack',
    title: 'Technologies I Work With',
  },
  contact: {
    id: 'contact',
    tag: 'Contact',
    title: 'Get in Touch',
    description: `I'd love to hear from you! Whether you have a question, want to collaborate, 
or just want to say hi, feel free to send me a message.`,
  },
};

// ============================================================
// Animation Configurations
// ============================================================

export const ANIMATION_CONFIG = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
  staggerDelay: 0.15,
  carouselInterval: 5000,
} as const;
