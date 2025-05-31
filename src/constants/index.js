import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const HERO_CONTENT = `I am a passionate web and app developer with a deep enthusiasm for creating seamless, user-centric experiences. Although I’m still growing my expertise, I’m driven to expand my skills and learn through hands-on projects. My focus is on building efficient, scalable applications with modern web and mobile technologies such as React Native, React, Next.js, and backend solutions like Node.js, MySQL, PostgreSQL, and MongoDB. I am always eager to collaborate on innovative projects, share knowledge, and contribute to meaningful, real-world solutions that make an impact. Let's work together to build something great!`;


// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

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

// export const CONTACT = {
//   address: "767 Fifth Avenue, New York, NY 10153 ",
//   phoneNo: "+12 4555 666 00 ",
//   email: "me@example.com",
// };
