// ============================================================
// FeaturedCollaborations - Carousel showcase of team projects
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaUsers } from 'react-icons/fa';
import { COLLABORATIONS, SECTIONS, ANIMATION_CONFIG } from '@/constants';
import { SectionHeader } from '@/components/shared';
import type { Collaboration } from '@/types';

// ============================================================
// Sub-components
// ============================================================

interface CollaborationCardProps {
  collaboration: Collaboration;
}

/** Individual collaboration card content */
const CollaborationCard = ({ collaboration }: CollaborationCardProps) => (
  <motion.div
    key={collaboration.id}
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -150 }}
  >
    {/* Image */}
    <div className="relative h-2/3">
      <img
        src={collaboration.image}
        alt={collaboration.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 z-0" />
    </div>

    {/* Content */}
    <div className="relative z-10 p-2 md:p-4 flex flex-col justify-between gap-3">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-white"
        >
          {collaboration.title}
        </motion.h3>

        <span className="inline-block bg-slate-200 text-primary px-3 py-1 rounded-full text-xs font-medium text-ellipsis overflow-hidden whitespace-nowrap">
          {collaboration.role}
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-neutral-300 text-sm leading-relaxed line-clamp-1 hover:line-clamp-none transition-all duration-300"
      >
        {collaboration.description}
      </motion.p>

      <motion.a
        href={collaboration.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-fit mx-auto justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Visit Live Site <FaExternalLinkAlt className="w-4 h-4" />
      </motion.a>
    </div>
  </motion.div>
);

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

/** Navigation arrow button */
const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  const Icon = direction === 'prev' ? FaChevronLeft : FaChevronRight;
  const positionClass = direction === 'prev' ? 'left-3' : 'right-3';

  return (
    <motion.button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
};

interface DotsIndicatorProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

/** Dots indicator for carousel position */
const DotsIndicator = ({ total, current, onSelect }: DotsIndicatorProps) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="flex justify-center space-x-2 md:mt-6"
  >
    {Array.from({ length: total }).map((_, index) => (
      <motion.button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          index === current
            ? 'bg-purple-500 scale-125'
            : 'bg-neutral-600 hover:bg-neutral-500'
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </motion.div>
);

// ============================================================
// Custom Hook for Carousel Logic
// ============================================================

const useCarousel = (itemCount: number, autoPlayInterval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showNavigation, setShowNavigation] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === itemCount - 1 ? 0 : prev + 1));
  }, [itemCount]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? itemCount - 1 : prev - 1));
  }, [itemCount]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, autoPlayInterval]);

  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
    setShowNavigation(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
    setShowNavigation(false);
  }, []);

  return {
    currentIndex,
    showNavigation,
    goToNext,
    goToPrevious,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
  };
};

// ============================================================
// Main Component
// ============================================================

const FeaturedCollaborations = () => {
  const { tag, title } = SECTIONS.collaborations;

  const {
    currentIndex,
    showNavigation,
    goToNext,
    goToPrevious,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarousel(COLLABORATIONS.length, ANIMATION_CONFIG.carouselInterval);

  const currentCollaboration = COLLABORATIONS[currentIndex];

  return (
    <div className="border-b border-neutral-700 py-16 w-full h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag={tag}
          title={title}
          icon={<FaUsers className="inline-block w-5 h-5 text-primary" />}
        />

        {/* Carousel Container */}
        <div
          className="relative max-w-xl mx-auto h-[60vh]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-xl bg-neutral-900 shadow-lg border border-neutral-800">
            <AnimatePresence mode="wait">
              <CollaborationCard
                key={currentCollaboration.id}
                collaboration={currentCollaboration}
              />
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {showNavigation && (
            <>
              <NavigationButton direction="prev" onClick={goToPrevious} />
              <NavigationButton direction="next" onClick={goToNext} />
            </>
          )}
        </div>

        {/* Dots Indicator */}
        <DotsIndicator
          total={COLLABORATIONS.length}
          current={currentIndex}
          onSelect={goToSlide}
        />
      </div>
    </div>
  );
};

export default FeaturedCollaborations;
