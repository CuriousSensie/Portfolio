// ============================================================
// TechStack - Technologies showcase section
// ============================================================

import { motion } from 'framer-motion';
import { TECH_CATEGORIES, SECTIONS, ANIMATION_CONFIG } from '@/constants';
import { SectionHeader, TechTag } from '@/components/shared';
import type { TechCategory } from '@/types';

// ============================================================
// Sub-components
// ============================================================

interface TechCategoryCardProps {
  category: TechCategory;
  index: number;
}

/** Individual technology category card */
const TechCategoryCard = ({ category, index }: TechCategoryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="border border-border rounded-sm p-6 bg-card/50 hover:glow-border transition-all duration-300 group"
  >
    <div className="font-mono text-xs text-primary mb-4 uppercase tracking-wider">
      {'// '}
      {category.label}
    </div>
    <div className="flex flex-wrap gap-2">
      {category.technologies.map((tech) => (
        <TechTag key={tech} name={tech} />
      ))}
    </div>
  </motion.div>
);

// ============================================================
// Main Component
// ============================================================

const TechStack = () => {
  const { tag, title } = SECTIONS.tech;

  return (
    <section id="tech" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader tag={tag} title={title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((category, index) => (
            <TechCategoryCard key={category.label} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
