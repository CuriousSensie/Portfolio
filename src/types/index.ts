// ============================================================
// Type Definitions for Portfolio Application
// ============================================================

/** Collaboration/Team project data structure */
export interface Collaboration {
  id: number;
  title: string;
  description: string;
  role: string;
  image: string;
  technologies: string[];
  link: string;
}

/** Personal project data structure */
export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

/** Technology category for tech stack section */
export interface TechCategory {
  label: string;
  technologies: string[];
}

/** Navigation item */
export interface NavItem {
  label: string;
  href: string;
}

/** Social link */
export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'email';
}

/** Hero section content */
export interface HeroContent {
  name: {
    first: string;
    last: string;
  };
  tagline: string;
  description: string[];
  terminalCommand: string;
  statusText: string;
}

/** Contact form field values */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/** Section header configuration */
export interface SectionConfig {
  id: string;
  tag: string;
  title: string;
  description?: string;
}
