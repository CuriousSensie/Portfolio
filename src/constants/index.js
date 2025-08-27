import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import eprocure365 from "../assets/projects/eprocure365.png";
import shield_sync from "../assets/projects/shield_sync.png";
import genpage from "../assets/projects/genpage.png";

export const HERO_CONTENT = `I’m a Full-Stack Engineer providing my services in Web & Mobile app development. I’m dedicated to crafting seamless, user-focused digital experiences. With a strong foundation in modern web and mobile technologies like React, React Native, Next.js, and robust back-end solutions with Node.js, MySQL, PostgreSQL, and MongoDB, I specialize in building efficient, scalable, and impactful applications.

While I’m continuously expanding my expertise, I thrive on hands-on projects, collaboration, and solving real-world challenges. My goal is to transform ideas into high-performing products that deliver real value.

I’m always excited to connect, learn, and contribute to projects that push boundaries — let’s create something meaningful together!`;

export const COLLABORATIONS = [
  {
    id: 1,
    title: "EProcure365",
    description: "Collaborated with a team of 7 developers to build a SaaS solution for AI enabled procurement management with multi-tenant support, separate dashboards, and AI integrations.",
    role: "Full Stack Developer",
    image: eprocure365,
    technologies: ["Next", "Node.js", "MongoDB", "OpenAI"],
    link: "https://www.eprocure365.com/"
  },
  {
    id: 2,
    title: "GenPage.ai",
    description: "Helped implement the dashboard and integrate backend APIs for a SaaS platform for AI enabled Outreach, Campaigns and Lead Generation. Also, helped make the APIs Zapier compatible and integrate Zapier.",
    role: "Frontend & Zapier Automation",
    image: genpage,
    technologies: ["Next.js", "TailwindCSS", "Php", "Zapier" ],
    link: "https://genpage.ai"
  },
  {
    id: 3,
    title: "ShieldSync",
    description: "Integrated Payload CMS for content management. Designed implemented and integrated the APIs for Blogs and Content Management System.",
    role: "Full Stack Developer",
    image: shield_sync,
    technologies: ["Next.js", "Payload CMS", "Digital Ocean" , "Socket.io"],
    link: "https://shield-sync.com/"
  }
];

export const PROJECTS = [
  {
    title: 'MenuForge',
    image: project3,
    description: 
      "MenuForge is a full-stack SaaS platform that enables restaurants and businesses to create, customize, and launch their own fully functional online storefronts—without writing a single line of code.",
    technologies: ["Next.js", "Amazon S3", "Supabase (PostgreSQL)", "TailwindCSS"],
    link: "https://menuforge.vercel.app/"
  },
  {
    title: "EasyReads",
    image: project1,
    description:
      "An Open Source E-Library using Amazon Cloud Services for everyone to use. You can read books and contribute to the community by uploading epubs or pdfs of books.",
    technologies: ["React", "NodeJS", "MongoDB", "Amazon S3"],
    link: "https://easyreads.vercel.app"
  },
  {
    title: "Transly",
    image: project2,
    description:
      "A Transcription and Translation service using Artificial Intelligence",
    technologies: ["OpenAI", "Xenova/Transformers", "React", "Firebase", ],
    link: "https://translyml.netlify.app"
  },
];