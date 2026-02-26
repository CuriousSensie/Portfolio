// ============================================================
// TypeWriter - Animated typing effect component
// ============================================================

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  /** Text to type out */
  text: string;
  /** Delay before starting to type (in ms) */
  delay?: number;
  /** Speed of typing (in ms per character) */
  speed?: number;
  /** Show blinking cursor while typing */
  showCursor?: boolean;
}

export const TypeWriter = ({
  text,
  delay = 0,
  speed = 40,
  showCursor = true,
}: TypeWriterProps) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        speed
      );
      return () => clearTimeout(timer);
    }
  }, [displayed, started, text, speed]);

  const isTyping = displayed.length < text.length;

  return (
    <span>
      {displayed}
      {showCursor && isTyping && <span className="terminal-cursor" />}
    </span>
  );
};

export default TypeWriter;
