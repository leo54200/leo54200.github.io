import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { Home, Briefcase, GraduationCap, FolderGit2, Mail, Sun, Moon, Menu, X, ChevronLeft, ChevronRight, Wrench, User } from 'lucide-react';
import { SHOW_EXPERIENCE } from './data';

interface SidebarProps {
  isDesktopOpen: boolean;
  toggleDesktop: () => void;
}

export default function Sidebar({ isDesktopOpen, toggleDesktop }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: FolderGit2, href: '#projects' },
    ...(SHOW_EXPERIENCE ? [{ name: 'Experience', icon: Briefcase, href: '#experience' }] : []),
    { name: 'Education', icon: GraduationCap, href: '#education' },
    { name: 'Skills', icon: Wrench, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => l.href.substring(1));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu when clicked
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const desktopNavLinks = links.map((link) => {
    const Icon = link.icon;
    const isActive = activeSection === link.href.substring(1);
    
    return (
      <a 
        key={link.name} 
        href={link.href}
        onClick={(e) => scrollTo(e, link.href)}
        className={`p-3 md:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-all duration-300 group relative ${
          isActive 
            ? 'text-[#476C9B] dark:text-[#476C9B] scale-110 bg-[#476C9B]/10' 
            : 'text-gray-600 dark:text-gray-400 hover:text-[#476C9B] dark:hover:text-[#476C9B] hover:bg-[#476C9B]/5'
        }`}
      >
        <Icon size={24} />
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#476C9B] text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          {link.name}
        </span>
      </a>
    );
  });

  const mobileNavLinks = links.map((link) => {
    const Icon = link.icon;
    const isActive = activeSection === link.href.substring(1);
    
    return (
      <a 
        key={link.name} 
        href={link.href}
        onClick={(e) => scrollTo(e, link.href)}
        className={`p-4 w-64 min-h-[44px] flex items-center gap-4 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'text-[#476C9B] dark:text-[#476C9B] bg-[#476C9B]/10 scale-105' 
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        <Icon size={28} />
        <span className="font-mono text-lg font-semibold tracking-wide">
          {link.name}
        </span>
      </a>
    );
  });

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[60] bg-[#FFFFFA]/80 dark:bg-[#22181C]/80 backdrop-blur-md border-b border-[#476C9B]/20 p-4 px-6 flex justify-between items-center transition-colors">
        <div className="text-[#476C9B] font-bold font-mono text-xl">LC.</div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl active:scale-95 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-400 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-50 bg-[#FFFFFA]/95 dark:bg-[#22181C]/95 backdrop-blur-lg transition-colors overflow-y-auto overflow-x-hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-24 gap-4 w-full">
              {mobileNavLinks}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <AnimatePresence>
        {isDesktopOpen ? (
          <motion.nav 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="hidden md:flex fixed z-50 flex-col items-center
                       top-0 left-0 w-24 h-screen 
                       bg-[#FFFFFA]/70 dark:bg-[#22181C]/70 
                       border-r border-[#476C9B]/20 
                       backdrop-blur-md py-8 transition-colors duration-300 overflow-y-auto overflow-x-hidden"
          >
            <div className="text-[#476C9B] font-bold font-mono text-xl mb-8 flex-shrink-0">
              LC.
            </div>

            <div className="flex flex-col gap-8 w-auto justify-start flex-shrink-0">
              {desktopNavLinks}
            </div>

            <div className="flex flex-col gap-4 mt-auto pt-8 flex-shrink-0">
              <button 
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-[#476C9B] dark:hover:text-[#476C9B] transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-[#476C9B]/10"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button 
                onClick={toggleDesktop}
                className="text-gray-600 dark:text-gray-400 hover:text-[#476C9B] dark:hover:text-[#476C9B] transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-[#476C9B]/10 group relative"
                aria-label="Hide Sidebar"
              >
                <ChevronLeft size={24} />
                <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#476C9B] text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
                  Hide Sidebar
                </span>
              </button>
            </div>
          </motion.nav>
        ) : (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="hidden md:flex fixed z-50 top-1/2 left-4 -translate-y-1/2"
          >
            <button 
              onClick={toggleDesktop}
              className="bg-[#FFFFFA] dark:bg-[#22181C] border border-[#476C9B]/20 text-gray-600 dark:text-gray-400 hover:text-[#476C9B] dark:hover:text-[#476C9B] transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-[#476C9B]/10 shadow-lg group relative"
              aria-label="Show Sidebar"
            >
              <ChevronRight size={24} />
              <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#476C9B] text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
                Show Sidebar
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}