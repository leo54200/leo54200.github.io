import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { identity, SHOW_EXPERIENCE } from './data';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#22181C] text-gray-300 py-12 px-6 md:px-16 lg:px-24 border-t border-[#476C9B]/20 w-full"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Identity */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-[#FFFFFA] text-2xl font-mono font-bold tracking-tight">
            {identity.name}
          </h3>
          <p className="text-gray-400 leading-relaxed font-sans text-sm md:text-base">
            Bridging the gap between Complex AI Research and Production-Ready Systems.          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono text-gray-400">Seeking AI & Software Engineering Internships</span>
          </div>
        </div>

        {/* Column 2: Quick Nav */}
        <div className="flex flex-col space-y-4 md:pl-8">
          <h4 className="text-[#FFFFFA] text-lg font-mono font-bold mb-2">Quick Links</h4>
          <div className="grid grid-cols-2 gap-4">
            <nav className="flex flex-col space-y-3">
              {[
                'Home', 'About', 'Projects', 
                ...(SHOW_EXPERIENCE ? ['Experience'] : [])
              ].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="w-fit text-gray-400 hover:text-[#476C9B] transition-all duration-300 hover:underline underline-offset-4 decoration-[#476C9B]/50 font-sans"
                >
                  {item}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col space-y-3">
              {[
                'Education', 'Skills', 'Contact'
              ].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="w-fit text-gray-400 hover:text-[#476C9B] transition-all duration-300 hover:underline underline-offset-4 decoration-[#476C9B]/50 font-sans"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Column 3: Social/Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-[#FFFFFA] text-lg font-mono font-bold mb-2">Connect</h4>
          <div className="flex flex-col space-y-3">
            <a 
              href={identity.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 w-fit text-gray-400 hover:text-[#476C9B] transition-all duration-300 hover:underline underline-offset-4 decoration-[#476C9B]/50"
            >
              <FaLinkedin size={18} />
              <span className="font-sans">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/leo54200" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 w-fit text-gray-400 hover:text-[#476C9B] transition-all duration-300 hover:underline underline-offset-4 decoration-[#476C9B]/50"
            >
              <FaGithub size={18} />
              <span className="font-sans">GitHub</span>
            </a>
            <a 
              href={`mailto:${identity.email}`} 
              className="flex items-center gap-3 w-fit text-gray-400 hover:text-[#476C9B] transition-all duration-300 hover:underline underline-offset-4 decoration-[#476C9B]/50"
            >
              <Mail size={18} />
              <span className="font-sans">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Location */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#476C9B]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm text-gray-500 font-mono">
          © {new Date().getFullYear()} Leonardo Cavallaro - Built with React & Tailwind.
        </p>
        <p className="text-sm text-gray-500 font-mono">
          Current Location: PoliTo, Italy
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;