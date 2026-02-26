// ============================================================
// Navbar - Main navigation component
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/constants';
import { SocialLinks } from '@/components/shared';

// ============================================================
// Sub-components
// ============================================================

/** Desktop navigation link */
const NavLink = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
  >
    <span className="text-primary opacity-50 mr-1">{'>'}</span>
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
  </a>
);

/** Mobile navigation link */
const MobileNavLink = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
  >
    <span className="text-primary mr-2">$</span>
    {label}
  </a>
);

/** Mobile menu toggle button */
const MobileMenuToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button onClick={onClick} className="md:hidden text-foreground" aria-label="Menu">
    <div className="font-mono text-primary text-sm">{isOpen ? '[x]' : '[=]'}</div>
  </button>
);

// ============================================================
// Custom Hook for Scroll Detection
// ============================================================

const useScrollDetection = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

// ============================================================
// Main Component
// ============================================================

const Navbar = () => {
  const scrolled = useScrollDetection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg font-bold text-primary glow-text tracking-wider"
        >
          ~/hasnaat
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <SocialLinks links={SOCIAL_LINKS} className="flex items-center gap-4" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <MobileMenuToggle isOpen={mobileOpen} onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <MobileNavLink key={item.label} {...item} onClick={closeMobileMenu} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
