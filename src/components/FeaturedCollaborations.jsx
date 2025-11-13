"use client";
import React, { useState, useEffect } from "react";
import { COLLABORATIONS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
} from "react-icons/fa";

const FeaturedCollaborations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === COLLABORATIONS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === COLLABORATIONS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? COLLABORATIONS.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentCollaboration = COLLABORATIONS[currentIndex];

  return (
    <div className="border-b border-neutral-700 py-16 w-full h-screen">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Featured Projects and Collaborations
            </h2>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-xl mx-auto h-[60vh]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => {
            setIsAutoPlaying(true);
            setShowButton(false);
          }}
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-xl bg-neutral-900 shadow-lg border border-neutral-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                onMouseEnter={() => setShowButton(true)}
              >
                {/* Image */}
                <div className="relative h-2/3">
                  <img
                    src={currentCollaboration.image}
                    alt={currentCollaboration.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* overlay is now scoped to the image area, doesn't catch clicks */}
                  <div className="pointer-events-none absolute inset-0 z-0 " />
                </div>

                {/* Content */}
                <div className="relative z-10 p-2 md:p-4 flex flex-col justify-between gap-3">
                  <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-semibold text-white"
                    >
                      {currentCollaboration.title}
                    </motion.h3>

                    {/* Role */}
                    <span className="inline-block bg-slate-200 text-purple-500 px-3 py-1 rounded-full text-xs font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                      {currentCollaboration.role}
                    </span>
                  </div>

                  {/* Caption (compact, expands on hover) */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-neutral-300 text-sm leading-relaxed line-clamp-1 hover:line-clamp-none transition-all duration-300"
                  >
                    {currentCollaboration.description}
                  </motion.p>

                  {/* Live Site Link */}
                  <motion.a
                    href={currentCollaboration.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-fit mx-auto justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Live Site <FaExternalLinkAlt className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {showButton && (
            <>
              <motion.button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronRight className="w-4 h-4" />
              </motion.button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-2 md:mt-6"
        >
          {COLLABORATIONS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-500 scale-125"
                  : "bg-neutral-600 hover:bg-neutral-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCollaborations;
