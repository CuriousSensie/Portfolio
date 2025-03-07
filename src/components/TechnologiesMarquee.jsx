import React from "react";
import { FaHtml5, FaReact, FaCss3Alt, FaJs, FaVuejs, FaDatabase, FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { hover } from "motion";

// Array of technologies with their respective icons
const technologies = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB] text-5xl" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-[#E34F26] text-5xl" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-[#1572B6] text-5xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E] text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8] text-5xl" />,
  },
  {
    name: "Vue.js",
    icon: <FaVuejs className="text-[#42b883] text-5xl" />,
  },
  {
    name: "React Native",
    icon: <FaReact className="text-[#61DAFB] text-5xl" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine className="text-[#ffffff] text-5xl" />,
  },
  {
    name: "SQL",
    icon: <FaDatabase className="text-[#F29111] text-5xl" />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="text-[#47A248] text-5xl" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-[#000000] text-5xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql className="text-[#336791] text-5xl" />,
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs className="text-[#68A063] text-5xl" />,
  },
];

// TechnologyCard component to display each technology with its icon
const TechnologyCard = ({ tech }) => {
  return (
    <div className="h-16 w-16 lg:h-24 lg:w-24 flex items-center justify-center p-4 bg-gray-800 rounded-xl border-2 border-neutral-400 mx-4 hover:bg-transparent">
      {tech.icon}
    </div>
  );
};

const TechnologiesMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl my-auto">
      <div
        className="marquee-container flex items-center space-x-6"
        style={{
            animation: "marquee 10s linear infinite"
          }}
      >
        {technologies.concat(technologies).map((tech) => (
          <TechnologyCard key={tech.name} tech={tech} />
        ))}
      </div>

      {/* Gradient Effect on the sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-transparent to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-transparent via-transparent to-transparent"></div>
    </div>
  );
};

export default TechnologiesMarquee;
