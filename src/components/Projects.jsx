import React from "react";
import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-700 py-20 w-full lg:flex lg:flex-row">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-4 text-center pb-8 lg:pb-0 lg:text-left lg:w-1/3">
        My Recent Projects
      </h1>
      
      {/* Projects Section */}
      <div className="w-full">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row md:justify-between w-full items-center md:items-start">
            {/* Project Image */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="rounded-lg shadow-md mx-auto"
              />
            </div>

            {/* Project Text */}
            <div className="w-full max-w-xl md:w-3/4 text-center md:text-left">
              <a href={project.link} target="_blank" className="text-xl font-semibold mb-3 flex gap-2 items-center cursor-pointer justify-center md:justify-start">
                {project.title}
                <FaExternalLinkAlt />
              </a>
              <p className="mb-4 text-neutral-400 w-3/4 mx-auto md:w-full">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
