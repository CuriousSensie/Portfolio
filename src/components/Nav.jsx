import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

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
        <h1 className="text-xl text-slate-200">H</h1>
        <h1 className="text-xl text-slate-300">A</h1>
        <h1 className="text-xl text-slate-400">S</h1>
        <h1 className="text-xl text-slate-500">N</h1>
        <h1 className="text-xl text-slate-400">A</h1>
        <h1 className="text-xl text-slate-300">A</h1>
        <h1 className="text-xl text-slate-200">T</h1>
      </div>

      {/* Social Media and Contact Links */}
      <div className="flex items-center justify-center space-x-4">
        <TooltipProvider>
          {/* Social Media Icons */}
          {socialLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full p-2")}
                >
                  <link.icon className="w-6 h-6 text-slate-300 hover:text-slate-100 transition-all duration-300" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          
          {/* Contact Icon - Scroll to Contact Section */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#contact" // Links to the Contact section by ID
                aria-label="Contact"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full p-2")}
              >
                <FaEnvelope className="w-6 h-6 text-slate-300 hover:text-slate-500 transition-all duration-300" />
              </a>
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
