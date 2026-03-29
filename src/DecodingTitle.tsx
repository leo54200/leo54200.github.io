import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery } from './hooks/useMediaQuery';

const CHARS = '#$%&0123456789ABCDEF';

export default function DecodingTitle({ title }: { title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const [text, setText] = useState('');
  const [isDecoding, setIsDecoding] = useState(true);

  // Pre-fill with random characters to lock layout width
  useEffect(() => {
    setText(
      title
        .split('')
        .map(char => (char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join('')
    );
  }, [title]);

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    // Compress decoding time to 0.8s on mobile for snappier feel, 1.5s on desktop
    const targetDurationMs = isMobile ? 800 : 1500;
    const speed = 40; 
    const increment = title.length / (targetDurationMs / speed);

    const interval = setInterval(() => {
      setText(
        title
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration) {
              return letter;
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= title.length) {
        clearInterval(interval);
        setIsDecoding(false); // Trigger color change
      }

      iteration += increment; 
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, title]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center mb-12"
    >
      <h2 
        className={`text-2xl md:text-4xl font-mono font-bold transition-colors duration-500 ${
          isDecoding ? 'text-[#476C9B]' : 'text-[#22181C] dark:text-[#FFFFFA]'
        }`}
      >
        <span className="text-[#476C9B] transition-none">~/</span>{text}
      </h2>
    </motion.div>
  );
}