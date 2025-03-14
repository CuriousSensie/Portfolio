import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const Nav = () => {
  // Social Links with icons and labels
  const socialLinks = [
    { href: "https://www.linkedin.com/in/muhammad-hasnaat-khalid-4aa383297/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/CuriousSensie", icon: FaGithub, label: "GitHub" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 lg:mb-8">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-200">H</motion.h1>
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-300">A</motion.h1>
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-400">S</motion.h1>
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-500">N</motion.h1>
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-400">A</motion.h1>
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-300">A</motion.h1>
        <motion.h1 whileHover={{ scale: 1.5, translateY: -10 }} whileTap={{ scale: 0.95 }} className="text-xl text-slate-200">T</motion.h1>
      </div>

      {/* Social Media and Contact Links */}
      <div className="flex items-center justify-center space-x-4">
        <TooltipProvider>
          {/* Social Media Icons */}
          {socialLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full p-2")}
                >
                  <link.icon className="w-6 h-6 text-slate-300 hover:text-slate-100 transition-all duration-300" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          
          {/* Contact Icon - Scroll to Contact Section */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" // Links to the Contact section by ID
                aria-label="Contact"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full p-2")}
              >
                <FaEnvelope className="w-6 h-6 text-slate-300 hover:text-slate-500 transition-all duration-300" />
              </motion.a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Nav;
