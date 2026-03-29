import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, UserCircle, Mail, Globe, Download } from 'lucide-react';
import { ThemeProvider } from './ThemeContext';
import { useMediaQuery } from './hooks/useMediaQuery';
import Sidebar from './Sidebar';
import Footer from './Footer';
import DecodingTitle from './DecodingTitle';
import { identity, projects, experience, education, technicalSkills, languages, SHOW_EXPERIENCE } from './data';

const MagneticButton = ({ href, children, title }: { href: string, children: React.ReactNode, title?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  
  const reset = () => setPosition({ x: 0, y: 0 });
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="text-gray-400 hover:text-[#476C9B] transition-colors p-3 min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg"
      title={title}
    >
      {children}
    </motion.a>
  );
};

const CVButton = () => {
  return (
    <motion.a
      href="/cv.pdf" 
      download="Leonardo_Cavallaro_CV.pdf"
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", stiffness: 400, damping: 10,
        opacity: { delay: 0.2, duration: 0.8 },
        y: { delay: 0.2, duration: 0.8 }
      }}
      className="flex flex-row items-center gap-3 px-6 py-3 bg-[#476C9B] text-[#FFFFFA] rounded-lg font-mono font-bold shadow-lg shadow-[#476C9B]/20 hover:shadow-[#476C9B]/40 transition-shadow w-fit"
    >
      <Download size={20} className="animate-pulse" />
      Download CV
    </motion.a>
  );
};

const DiffusionProcessText = ({ text }: { text: string }) => {
  const words = text.split(' ');
  let globalIndex = 0;

  // Generate stable random offsets for each character
  const [offsets] = useState(() => {
    const arr = [];
    for (let i = 0; i < text.replace(/ /g, '').length; i++) {
      const signX = Math.random() > 0.5 ? 1 : -1;
      const signY = Math.random() > 0.5 ? 1 : -1;
      arr.push({
        x: signX * (10 + Math.random() * 10),
        y: signY * (10 + Math.random() * 10)
      });
    }
    return arr;
  });

  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    },
  };

  return (
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-mono font-bold text-[#22181C] dark:text-[#FFFFFA] tracking-tight mb-4 flex flex-wrap gap-x-3 md:gap-x-5 transition-colors duration-300"
      variants={container} 
      initial="hidden" 
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex flex-nowrap whitespace-nowrap">
          {Array.from(word).map((char) => {
            const currentIndex = globalIndex++;
            return (
              <motion.span 
                key={currentIndex}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    filter: 'blur(20px)', 
                    x: offsets[currentIndex]?.x || 0, 
                    y: offsets[currentIndex]?.y || 0 
                  },
                  visible: { 
                    opacity: 1, 
                    filter: 'blur(0px)', 
                    x: 0, 
                    y: 0, 
                    transition: { 
                      type: 'spring', 
                      damping: 20, 
                      stiffness: 100,
                      mass: 2
                    } 
                  }
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.h1>
  );
};

function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#FFFFFA] dark:bg-[#22181C] text-[#22181C] dark:text-[#FFFFFA] selection:bg-[#476C9B] selection:text-[#FFFFFA] font-sans transition-colors duration-300">
      <Sidebar isDesktopOpen={isDesktopSidebarOpen} toggleDesktop={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)} />
      
      <main className={`${isDesktopSidebarOpen ? 'md:ml-24' : 'md:ml-0'} transition-all duration-300`}>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 mb-16 md:mb-0 relative overflow-hidden scroll-mt-20 md:scroll-mt-0 w-full">
          <div className="absolute top-[-20%] right-[-10%] md:right-[-5%] w-[500px] h-[500px] bg-[#476C9B]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full relative z-10 pt-20 md:pt-0" style={{ minHeight: "150px" }}>
            <DiffusionProcessText text={identity.name} />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-xl md:text-3xl text-[#476C9B] font-mono font-semibold mb-6"
            >
              {identity.role}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-base md:text-xl max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-[#476C9B]/40 pl-4 transition-colors duration-300"
            >
              {identity.angle}
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-20 md:scroll-mt-0">
          <div className="max-w-7xl mx-auto">
            <DecodingTitle title="About Me" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-4 flex justify-center md:justify-start"
              >
                <div className="relative w-48 h-64 md:w-full md:max-w-[280px] md:aspect-[3/4] group">
                  <div className="absolute inset-0 bg-[#476C9B] rounded-xl translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 dark:opacity-80" />
                  <div className="absolute inset-0 border-2 border-[#476C9B] rounded-xl bg-white dark:bg-[#1a1215] flex items-center justify-center overflow-hidden transition-colors duration-300">
                    <img src="/profile_picture.jpg" alt="Profile" className="w-full h-full object-cover" onError={(e) => {
                      // Fallback to icon if image is not yet uploaded
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                    <UserCircle size={120} strokeWidth={1} className="text-[#476C9B]/30 hidden" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-8 flex flex-col items-start gap-6"
              >
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 font-sans">
                  {identity.aboutMe}
                </p>
                <CVButton />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50/50 dark:bg-[#1a1215]/50 transition-colors duration-300 scroll-mt-20 md:scroll-mt-0">
          <div className="max-w-7xl mx-auto">
            <DecodingTitle title="Projects" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={!isMobile ? { y: -4 } : {}}
                  whileTap={{ scale: isMobile ? 0.98 : 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-[#22181C] p-6 md:p-8 rounded-xl border border-gray-200 dark:border-[#476C9B]/20 md:hover:border-[#476C9B]/50 hover:shadow-xl dark:shadow-none transition-colors duration-300 group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-mono font-bold md:group-hover:text-[#476C9B] transition-colors">
                      {project.title}
                    </h3>
                    <MagneticButton href={project.github} title="View Source Code">
                      <Code2 size={20} />
                    </MagneticButton>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#476C9B]/10 text-[#476C9B] text-xs font-mono tracking-wide rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {SHOW_EXPERIENCE && (
          <section id="experience" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-20 md:scroll-mt-0">
            <div className="max-w-7xl mx-auto">
              <DecodingTitle title="Experience" />
              <div className="space-y-8 md:space-y-12">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={exp.id} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    whileTap={{ scale: isMobile ? 0.98 : 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white/50 dark:bg-[#22181C]/50 p-6 md:p-8 rounded-xl border border-gray-100 dark:border-[#476C9B]/10 hover:border-gray-200 dark:hover:border-[#476C9B]/30 transition-colors duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 md:mb-2">
                      <h3 className="text-xl md:text-2xl font-bold font-mono text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        {exp.role} <span className="text-[#476C9B] block md:inline mt-1 md:mt-0 whitespace-nowrap">@ {exp.company}</span>
                      </h3>
                      <span className="font-mono text-sm text-[#476C9B] mt-2 md:mt-0 bg-[#476C9B]/10 px-3 py-1 rounded inline-block self-start md:self-auto">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl transition-colors duration-300 mt-4 md:mt-0">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        <section id="education" className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50/50 dark:bg-[#1a1215]/50 transition-colors duration-300 scroll-mt-20 md:scroll-mt-0">
          <div className="max-w-7xl mx-auto">
            <DecodingTitle title="Education" />
            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  whileTap={{ scale: isMobile ? 0.98 : 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/50 dark:bg-[#22181C]/50 p-6 md:p-8 rounded-xl border border-gray-100 dark:border-[#476C9B]/10 hover:border-gray-200 dark:hover:border-[#476C9B]/30 transition-colors duration-300 relative pl-6 md:pl-8 border-l-2 md:border-l border-l-[#476C9B]/30"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 md:mb-2">
                    <h3 className="text-xl md:text-2xl font-bold font-mono text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-sm text-[#476C9B] mt-2 md:mt-0 bg-[#476C9B]/10 px-3 py-1 rounded inline-block self-start md:self-auto">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base md:text-lg text-[#476C9B] font-mono mb-4 font-semibold">{edu.institution}</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl transition-colors duration-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Languages Section */}
        <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-20 md:scroll-mt-0">
          <div className="max-w-7xl mx-auto">
            <DecodingTitle title="Skills & Languages" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white/50 dark:bg-[#22181C]/50 p-6 md:p-8 rounded-xl border border-gray-100 dark:border-[#476C9B]/20 hover:border-[#476C9B] dark:hover:border-[#476C9B] transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold font-mono text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-[#476C9B]/5 hover:bg-[#476C9B]/10 text-[#476C9B] text-sm font-mono rounded-lg transition-colors cursor-default border border-[#476C9B]/10"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/50 dark:bg-[#22181C]/50 p-6 md:p-8 rounded-xl border border-gray-100 dark:border-[#476C9B]/20 transition-colors duration-300 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <h3 className="text-xl font-bold font-mono text-gray-900 dark:text-gray-100 whitespace-nowrap">
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Globe size={18} className="text-[#476C9B]" />
                    <span className="font-mono text-sm md:text-base">
                      <strong className="text-gray-900 dark:text-gray-100">{lang.name}</strong> 
                      <span className="opacity-70 ml-1">({lang.proficiency})</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 scroll-mt-20 md:scroll-mt-0">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 md:mb-6">Let's Connect</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 md:mb-10 text-base md:text-lg">
                I’m always looking to discuss the future of Generative RL, data-driven architectures, or new opportunities. Whether you have a specific project in mind or just want to exchange ideas, my inbox is always open.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <a 
                  href={`mailto:${identity.email}`}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-[#476C9B] text-white rounded-lg hover:bg-[#34537a] transition-all hover:-translate-y-1 font-mono min-w-[160px] min-h-[44px] w-full sm:w-auto"
                >
                  <Mail size={20} />
                  Say Hello
                </a>
                <a 
                  href={identity.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 border border-[#476C9B] text-[#476C9B] dark:text-[#FFFFFA] rounded-lg hover:bg-[#476C9B]/10 transition-all hover:-translate-y-1 font-mono min-w-[160px] min-h-[44px] w-full sm:w-auto"
                >
                  <UserCircle size={20} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}