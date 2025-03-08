import React from "react";
import TechnologiesMarquee from "./TechnologiesMarquee";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-700 py-20 w-full lg:flex lg:flex-row-reverse">
      {/* Title Section */}
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-4 text-center pb-8 lg:pb-0 lg:pt-4"
      >
        Technologies I Work With
      </motion.h1>

      {/* Technologies Marquee */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="relative w-3/4 lg:w-1/2 flex items-center justify-center mx-auto overflow-hidden"
      >
        {/* Left Fade Effect */}
        <div className="absolute left-0 top-0 h-full w-2/6 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-10"></div>

        <TechnologiesMarquee />

        {/* Right Fade Effect */}
        <div className="absolute right-0 top-0 h-full w-2/6 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10"></div>
      </motion.div>
    </div>
  );
};

export default Technologies;
