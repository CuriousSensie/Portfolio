import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants/index";
import profileImage from "../assets/profilePicture.jpg";
import { TypingAnimation } from "../components/magicui/typing-animation";
import { motion } from "framer-motion";
import { WordRotate } from "./magicui/word-rotate";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  const texts = [
    "From Ideas to Execution",
    "Full Stack Engineer",
    "Mobile and Web Dev",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [key, setKey] = useState(Date.now()); // Used to reset TypingAnimation when text changes

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey(Date.now()); // Reset key to trigger TypingAnimation restart
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex flex-col  border-b border-neutral-700 md:h-screen">
      <div className="flex flex-col items-center justify-center py-4 lg:py-8">
        <div className="container px-4 mx-auto flex flex-col lg:flex-row-reverse items-center justify-between mb-16">
          {/* Image Container */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Gradient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl animate-pulse"></div>

              <img
                src={profileImage}
                alt="profile image"
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-2 border-slate-800"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-justify flex flex-col items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4"
            >
              Hasnaat Khalid
            </motion.h1>
            {/* Typing Animation Component */}
            <WordRotate
              words={texts}
              className="bg-gradient-to-r from-purple-500 via-slate-500 to-purple-900 bg-clip-text text-transparent text-3xl md:text-4xl tracking-tight mb-4 block"
            />
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-lg max-w-xl mx-auto lg:mx-0 font-light p-3"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
