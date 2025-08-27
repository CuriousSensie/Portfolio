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
        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-center pb-8 lg:pb-0 lg:pt-4"
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
        <TechnologiesMarquee />
      </motion.div>
    </div>
  );
};

export default Technologies;
