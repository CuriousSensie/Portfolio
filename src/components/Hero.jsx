import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants/index";
import profileImage from "../assets/profilePicture.jpg";
import { TypingAnimation } from "../components/magicui/typing-animation";

const Hero = () => {
  const texts = ["From Ideas to Execution", "Full Stack Developer", "Mobile and Web Dev"];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [key, setKey] = useState(Date.now()); // Used to reset TypingAnimation when text changes

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length); 
      setKey(Date.now());  // Reset key to trigger TypingAnimation restart
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className='flex flex-col  border-b border-neutral-700'>
      <div className="flex flex-col items-center justify-centerpy-4 lg:py-8">
        <div className="container px-4 mx-auto flex flex-col lg:flex-row-reverse items-center justify-between mb-16">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img 
              src={profileImage} 
              alt="profile image" 
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full" 
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight mb-4'>Hasnaat Khalid</h1>
            {/* Typing Animation Component */}
            <TypingAnimation  
              className="bg-gradient-to-r from-purple-500 via-slate-500 to-purple-900 bg-clip-text text-transparent text-3xl md:text-4xl tracking-tight mb-4 block"
            >
              {texts[currentTextIndex]}
            </TypingAnimation>
            <p className='text-lg max-w-xl mx-auto lg:mx-0 font-light'>{HERO_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
