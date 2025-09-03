import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';

const Projects = () => {
  const { isDark } = useTheme();
  const projects = [
    {
      title: 'Stock Trend Predictor',
      description: 'Collected and preprocessed historical stock market data.',
      image: `${import.meta.env.BASE_URL}icons/stock-trend.svg`,
      tags: ['ML', 'Data'],
      liveLink: '#',
      githubLink: '#',
      badge: 'Mini Project',
    },
    {
      title: 'Library management system in Java',
      description: 'Prepared technical documentation for maintenance and user training.',
      image: `${import.meta.env.BASE_URL}icons/library.svg`,
      tags: ['Java'],
      liveLink: '#',
      githubLink: '#',
      badge: 'Mini Project',
    },
    {
      title: 'IOT based theft and motion detection',
      description: 'Integrated wireless communication for alerts; built and tested a prototype.',
      image: `${import.meta.env.BASE_URL}icons/iot-motion.svg`,
      tags: ['IoT'],
      liveLink: '#',
      githubLink: '#',
      badge: 'Mini Project',
    },
    {
      title: 'IOT based under ground cable fault detector',
      description: 'Utilized IoT sensors for real‑time underground cable fault detection.',
      image: `${import.meta.env.BASE_URL}icons/iot-cable.svg`,
      tags: ['IoT'],
      liveLink: '#',
      githubLink: '#',
      badge: 'Mini Project',
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselApiRef = React.useRef<{ selectedScrollSnap: () => number; on: (event: string, callback: () => void) => void } | null>(null);

  const handleSetApi = React.useCallback((api: { selectedScrollSnap: () => number; on: (event: string, callback: () => void) => void } | null) => {
    carouselApiRef.current = api;
    if (api) {
      setCurrentIndex(api.selectedScrollSnap());
      api.on('select', () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4
      }
    }
  };

  const tagVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(168, 85, 247, 0.3)",
      transition: {
        duration: 0.2
      }
    }
  };

  const iconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-visible lg:overflow-hidden">
      {/* Background effects */}
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:pointer-events-auto">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-200 to-purple-100"></div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:pointer-events-auto">
            <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </>
      )}

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto z-0">
        {[
          { left: '18%', top: '75%', delay: 0, size: 13 },
          { left: '65%', top: '80%', delay: 2, size: 13 },
          { left: '90%', top: '60%', delay: 4, size: 13 },
          { left: '30%', top: '20%', delay: 1.5, size: 10 },
          { left: '80%', top: '30%', delay: 3, size: 11 },
          { left: '55%', top: '10%', delay: 2.5, size: 9 },
          { left: '10%', top: '40%', delay: 5, size: 12 },
          { left: '35%', top: '60%', delay: 1.6, size: 12 },
          { left: '85%', top: '20%', delay: 3.9, size: 10 },
          { left: '75%', top: '55%', delay: 4.1, size: 13 },
          { left: '40%', top: '30%', delay: 2.3, size: 11 },
          { left: '60%', top: '25%', delay: 1.4, size: 12 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            initial={{ opacity: 0, y: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.5, 0], y: [-10, -40, -80], scale: [0.7, 1, 0.7] }}
            transition={{ duration: 10, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={pos.size} className={isDark ? 'text-pink-400/60' : 'text-pink-500/60'} fill={isDark ? 'pink' : '#f472b6'} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-light text-white mb-2">
            Mini <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm text-gray-400">Highlights from my mini projects</p>
        </motion.div>
        
        <div className="relative max-w-md mx-auto">
          <Carousel setApi={handleSetApi} className="">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <motion.div 
                    variants={projectVariants}
                    whileHover="hover"
                    className={`group w-80 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border ${isDark ? 'border-white/10 hover:border-purple-500/50' : 'border-gray-200 hover:border-pink-400/50'} transition-all duration-300 shadow-lg`}
                  >
                    <div className="relative h-40">
                      <motion.img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        variants={imageVariants}
                        whileHover="hover"
                      />
                    </div>
                    <div className="p-4">
                      <motion.h3 
                        className={`text-base font-light ${isDark ? 'text-white group-hover:text-purple-400' : 'text-gray-800 group-hover:text-pink-500'} transition-colors duration-300`}
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className={`text-xs leading-relaxed mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                      {/* Glassmorphism Buttons for UI Notes */}
                      <div className="mt-4 flex gap-3 justify-start">
                        <span className={`px-4 py-1.5 rounded-full shadow-md border backdrop-blur-md text-xs font-light ${
                          isDark
                            ? 'bg-white/10 border-pink-400/20 text-pink-200'
                            : 'bg-white/60 border-pink-200/60 text-pink-500'
                        }`}>
                          Fully responsive
                        </span>
                        <span className={`px-4 py-1.5 rounded-full shadow-md border backdrop-blur-md text-xs font-light ${
                          isDark
                            ? 'bg-white/10 border-pink-400/20 text-pink-200'
                            : 'bg-white/60 border-pink-200/60 text-pink-500'
                        }`}>
                          Creative UI
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Badge Button that updates per project */}
          <motion.button
            className={`inline-block px-6 py-2 rounded-full text-sm font-semibold shadow-md border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-400/40 transition-all duration-300 ${
              isDark
                ? 'bg-pink-500/10 border-pink-400/20 text-pink-200'
                : 'bg-pink-100/60 border-pink-200/40 text-pink-500'
            }`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop' }}
            style={{ filter: isDark ? 'drop-shadow(0 0 4px rgba(244, 114, 182, 0.3))' : 'drop-shadow(0 0 4px rgba(249, 168, 212, 0.3))' }}
            tabIndex={0}
          >
            {projects[currentIndex]?.badge || '✨ New'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
