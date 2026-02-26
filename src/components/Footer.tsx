// ============================================================
// Footer - Site footer with credits and links
// ============================================================

import { SOCIAL_LINKS, HERO_CONTENT } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const fullName = `${HERO_CONTENT.name.first} ${HERO_CONTENT.name.last}`;

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">©</span> {currentYear} {fullName}
          <span className="text-muted-foreground/50 ml-2">// All rights reserved</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon !== 'email' ? '_blank' : undefined}
              rel={link.icon !== 'email' ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
