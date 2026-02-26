// ============================================================
// HeroSection - Main hero/about section of the portfolio
// ============================================================

import { motion } from 'framer-motion';
import profileImg from '@/assets/profile.jpg';
import { TypeWriter } from '@/components/shared';
import { HERO_CONTENT } from '@/constants';

// ============================================================
// Animation Configurations
// ============================================================

const ANIMATION_DELAYS = {
  terminal: 0,
  terminalCommand: 800,
  name: 1.8,
  tagline: 2.2,
  description: 2.5,
  cta: 3.1,
  profileImage: 2,
} as const;

// ============================================================
// Sub-components
// ============================================================

/** Terminal-style command line display */
const TerminalPrompt = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="font-mono text-sm text-muted-foreground"
  >
    <span className="text-terminal-green">hasnaat@dev</span>
    <span className="text-muted-foreground">:</span>
    <span className="text-primary">~</span>
    <span className="text-muted-foreground">$ </span>
    <TypeWriter text={HERO_CONTENT.terminalCommand} delay={ANIMATION_DELAYS.terminalCommand} />
  </motion.div>
);

/** Animated name heading */
const HeroName = () => (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: ANIMATION_DELAYS.name }}
    className="text-5xl md:text-7xl font-display font-bold leading-tight"
  >
    <span className="text-foreground">{HERO_CONTENT.name.first}</span>
    <br />
    <span className="text-gradient-primary">{HERO_CONTENT.name.last}</span>
  </motion.h1>
);

/** Tagline display */
const HeroTagline = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: ANIMATION_DELAYS.tagline }}
    className="text-lg md:text-xl font-display text-accent glow-text"
  >
    {HERO_CONTENT.tagline}
  </motion.p>
);

/** Description paragraphs */
const HeroDescription = () => (
  <>
    {HERO_CONTENT.description.map((paragraph, index) => (
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: ANIMATION_DELAYS.description + index * 0.3 }}
        className={`${
          index === 0 ? 'text-base' : 'text-sm'
        } text-muted-foreground leading-relaxed max-w-xl`}
      >
        {paragraph}
      </motion.p>
    ))}
  </>
);

/** Call-to-action buttons */
const HeroCTA = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: ANIMATION_DELAYS.cta }}
    className="flex gap-4 pt-2"
  >
    <a
      href="#projects"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-sm hover:shadow-[0_0_20px_hsl(175_80%_50%/0.4)] transition-all duration-300"
    >
      {'>'} view_projects
    </a>
    <a
      href="#contact"
      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-mono text-sm rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
    >
      {'>'} contact_me
    </a>
  </motion.div>
);

/** Profile image with decorative frame */
const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: ANIMATION_DELAYS.profileImage }}
    className="lg:col-span-2 flex justify-center"
  >
    <div className="relative">
      {/* Decorative borders */}
      <div className="absolute -inset-3 border border-primary/20 rounded-sm" />
      <div className="absolute -inset-6 border border-primary/10 rounded-sm" />

      {/* Corner markers */}
      {[
        '-top-3 -left-3 border-t-2 border-l-2',
        '-top-3 -right-3 border-t-2 border-r-2',
        '-bottom-3 -left-3 border-b-2 border-l-2',
        '-bottom-3 -right-3 border-b-2 border-r-2',
      ].map((position, i) => (
        <div key={i} className={`absolute ${position} w-6 h-6 border-primary`} />
      ))}

      {/* Image container */}
      <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-sm relative">
        <img
          src={profileImg}
          alt={`${HERO_CONTENT.name.first} ${HERO_CONTENT.name.last}`}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Status indicator */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 font-mono text-xs text-terminal-green flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
        {HERO_CONTENT.statusText}
      </div>
    </div>
  </motion.div>
);

// ============================================================
// Main Component
// ============================================================

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 scanline">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(175 80% 50%), transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 space-y-6">
            <TerminalPrompt />
            <HeroName />
            <HeroTagline />
            <HeroDescription />
            <HeroCTA />
          </div>

          {/* Right content - Profile */}
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
