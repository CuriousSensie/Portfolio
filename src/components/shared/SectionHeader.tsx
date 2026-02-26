// ============================================================
// SectionHeader - Reusable section header component
// ============================================================

import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/constants';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Section tag displayed above the title (e.g., "## Projects") */
  tag: string;
  /** Main section title */
  title: string;
  /** Optional description text */
  description?: string;
  /** Center align the content (for contact section) */
  centered?: boolean;
  /** Optional icon to display after the title */
  icon?: ReactNode;
}

export const SectionHeader = ({
  tag,
  title,
  description,
  centered = false,
  icon,
}: SectionHeaderProps) => {
  return (
    <motion.div
      {...ANIMATION_CONFIG.fadeInUp}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <div className="font-mono text-sm text-muted-foreground mb-3">
        <span className="text-primary">##</span> {tag}
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
        {title} {icon}
      </h2>
      {description && (
        <p
          className={`text-muted-foreground mt-4 ${
            centered ? 'max-w-lg mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
