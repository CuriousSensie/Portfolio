// ============================================================
// ProjectsSection - Personal projects showcase
// ============================================================

import { motion } from 'framer-motion';
import { PROJECTS, SECTIONS, ANIMATION_CONFIG } from '@/constants';
import { SectionHeader, TechTag } from '@/components/shared';
import type { Project } from '@/types';

// ============================================================
// Sub-components
// ============================================================

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** Individual project card */
const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * ANIMATION_CONFIG.staggerDelay }}
    className="group border border-border rounded-sm overflow-hidden bg-card/50 hover:glow-border transition-all duration-500 flex flex-col"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="font-mono text-sm text-primary bg-background/80 px-4 py-2 rounded-sm border border-primary/30">
          {'>'} open_project
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <TechTag key={tech} name={tech} size="sm" />
        ))}
      </div>
    </div>
  </motion.a>
);

// ============================================================
// Main Component
// ============================================================

const ProjectsSection = () => {
  const { tag, title } = SECTIONS.projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag={tag} title={title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
