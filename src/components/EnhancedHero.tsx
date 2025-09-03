import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Play, Heart, Sparkles, ChevronDown, Share2, Instagram } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import '@/styles/comforter-font.css';

const EnhancedHero = () => {
  const { isDark } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSocial, setShowSocial] = useState(false);
  const [showCvMessage, setShowCvMessage] = useState(false);
  const [showGithubMessage, setShowGithubMessage] = useState(false);
  const EMAIL = 'keerthanasubbu5@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/keerthana-s004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const INSTAGRAM_URL = 'https://www.instagram.com/_k.eerthuu._?igsh=MWZ6NHFkc204bDRvOQ==';
  const texts = useMemo(() => ['FullStack Developer', 'UI/UX Designer', 'MERN Stack Developer'], []);
  
  useEffect(() => {
    const text = texts[currentIndex];
    let charIndex = 0;
    const typingTimer = setInterval(() => {
      if (charIndex <= text.length) {
        setTypedText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [currentIndex]);

  return (
    <section id="home" className={`min-h-screen relative overflow-visible lg:overflow-hidden flex items-center justify-center pt-16 pb-6 px-3 sm:pt-8 lg:pt-16 lg:pb-12 lg:px-6 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-rose-50 via-pink-50 to-white'
    }`}>

      {/* Minimal Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto z-0">
        {([
          { left: '20%', top: '60%', delay: 0, size: 16 },
          { left: '50%', top: '70%', delay: 2, size: 16 },
          { left: '75%', top: '55%', delay: 4, size: 16 },
          { left: '10%', top: '30%', delay: 1.5, size: 12 },
          { left: '60%', top: '20%', delay: 3, size: 13 },
          { left: '80%', top: '40%', delay: 2.5, size: 10 },
          { left: '35%', top: '80%', delay: 5, size: 14 },
          { left: '15%', top: '15%', delay: 1, size: 11 },
          { left: '70%', top: '10%', delay: 3.5, size: 12 },
          { left: '85%', top: '65%', delay: 4.5, size: 13 },
          { left: '40%', top: '50%', delay: 2.2, size: 10 },
          { left: '55%', top: '35%', delay: 1.8, size: 12 },
        ].filter((_, i) => i < 3 || typeof window !== 'undefined' && window.innerWidth > 768)) // Show fewer on mobile
        .map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            initial={{ opacity: 0, y: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.7, 0], y: [-10, -60, -120], scale: [0.7, 1, 0.7] }}
            transition={{ duration: 10, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={pos.size} className={isDark ? 'text-pink-400/60' : 'text-pink-500/60'} fill={isDark ? 'pink' : '#f472b6'} />
          </motion.div>
        ))}
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
        <div
          className={`absolute top-20 left-20 w-32 h-32 ${
            isDark ? 'bg-rose-500/5' : 'bg-rose-200/20'
          } rounded-full blur-3xl md:blur-3xl blur-sm`}
        />
        <div
          className={`absolute bottom-20 right-20 w-48 h-48 ${
            isDark ? 'bg-pink-500/5' : 'bg-pink-200/20'
          } rounded-full blur-3xl md:blur-3xl blur-sm`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* Status Badge */}
          <div className={`inline-flex items-center space-x-2 px-3 py-1.5 ${
            isDark 
              ? 'bg-rose-500/10 border-rose-500/20 text-rose-300' 
              : 'bg-rose-100 border-rose-200 text-rose-600'
          } border rounded-full`}>
            <span><Heart size={12} className={isDark ? 'text-rose-400' : 'text-rose-500'} fill={isDark ? 'pink' : '#f472b6'} /></span>
            <span className="text-[11px] font-light tracking-wide">Focused Developer</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3">
            <h1
              className={`text-lg sm:text-xl md:text-2xl font-extralight leading-tight ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Hello, I'm
              <span className={`block font-normal ${
                isDark ? 'text-rose-300' : 'text-rose-500'
              } font-comforter`} style={{ fontSize: '1.5em', lineHeight: 1.7 }}>
                Keerthana
              </span>
            </h1>
            
            <div className="h-12">
              <p
                className={`text-base sm:text-lg md:text-xl font-light ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } flex items-center`}
              >
                {typedText}
                {typedText && (
                  <Heart size={16} className={`ml-2 ${isDark ? 'text-rose-400' : 'text-rose-500'}`} fill={isDark ? 'pink' : '#f472b6'} />
                )}
                <span
                  className={`inline-block w-0.5 h-6 ml-1 ${
                    isDark ? 'bg-rose-400' : 'bg-rose-500'
                  }`}
                />
              </p>
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-xs sm:text-sm md:text-base leading-relaxed max-w-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            I’m a fullstack developer with experience in web and mobile applications, focused on crafting clean, user‑friendly experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="text-center">
              <div className={`text-xl font-light ${isDark ? 'text-rose-300' : 'text-rose-500'}`}>8.8</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>CGPA</div>
            </div>
            <div className="text-center">
              <div className={`text-xl font-light ${isDark ? 'text-pink-300' : 'text-pink-500'}`}>4th</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}> Year Student</div>
            </div>
            <div className="text-center">
              <div className={`text-xl font-light ${isDark ? 'text-rose-300' : 'text-rose-500'}`}>100%</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Focus</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 sm:gap-3">
            <button
              className={`group px-3 py-1.5 sm:px-4 sm:py-2 ${
                isDark 
                  ? 'bg-rose-500 hover:bg-rose-600 text-white' 
                  : 'bg-rose-500 hover:bg-rose-600 text-white'
              } rounded-full text-xs font-light transition-all duration-300 flex items-center justify-center space-x-2`}
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play size={16} />
              <span>View My Work</span>
            </button>
            
            <button
              className={`group px-3 py-1.5 sm:px-4 sm:py-2 border ${
                isDark 
                  ? 'border-rose-400/30 text-rose-300 hover:bg-rose-500/10' 
                  : 'border-rose-300 text-rose-600 hover:bg-rose-50'
              } rounded-full text-xs font-light transition-all duration-300 flex items-center justify-center space-x-2`}
              onClick={() => {
                setShowCvMessage(true);
                setTimeout(() => setShowCvMessage(false), 1000);
              }}
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
            
            {showCvMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-xs px-3 py-1 rounded-full ${
                  isDark 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-400/30' 
                    : 'bg-rose-100 text-rose-600 border border-rose-200'
                } transition-all duration-300`}
              >
                Still not added...!
              </motion.div>
            )}
          </div>

          {/* Collapsible Social Links */}
          <div className="flex flex-col items-start">
            <button
              onClick={() => setShowSocial(!showSocial)}
              className={`p-2.5 ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 text-rose-300 hover:text-rose-200' 
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-600'
              } backdrop-blur-sm rounded-full transition-all duration-300 flex items-center gap-2`}
            >
              <Share2 size={18} />
              <span className="text-xs">Connect</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${showSocial ? 'rotate-180' : ''}`}
              />
            </button>

            {showSocial && (
              <div className="flex items-center space-x-4 mt-3">
                <button
                  onClick={() => {
                    setShowGithubMessage(true);
                    setTimeout(() => setShowGithubMessage(false), 1200);
                  }}
                  className={`${isDark 
                    ? 'bg-white/5 hover:bg-white/10 text-rose-300 hover:text-rose-200' 
                    : 'bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-600'
                  } p-2.5 rounded-full backdrop-blur-sm transition-all duration-300`}
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </button>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${isDark 
                    ? 'bg-white/5 hover:bg-white/10 text-rose-300 hover:text-rose-200' 
                    : 'bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-600'
                  } p-2.5 rounded-full backdrop-blur-sm transition-all duration-300`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className={`${isDark 
                    ? 'bg-white/5 hover:bg-white/10 text-rose-300 hover:text-rose-200' 
                    : 'bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-600'
                  } p-2.5 rounded-full backdrop-blur-sm transition-all duration-300`}
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`${isDark 
                    ? 'bg-white/5 hover:bg-white/10 text-rose-300 hover:text-rose-200' 
                    : 'bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-600'
                  } p-2.5 rounded-full backdrop-blur-sm transition-all duration-300`}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                {showGithubMessage && (
                  <motion.span
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-rose-500/20 text-rose-200 border border-rose-400/30' : 'bg-rose-100 text-rose-600 border border-rose-200'}`}
                  >
                    Still not added...!
                  </motion.span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Content - Decorative Elements */}
        <motion.div
          className="relative order-1 lg:order-2 flex justify-center mt-8 mb-8 lg:mt-0 lg:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative">
            {/* Main Profile Image */}
            <motion.div
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className={`absolute inset-0 ${
                isDark ? 'bg-rose-500/20' : 'bg-rose-200/30'
              } rounded-full blur opacity-30 animate-pulse`}></div>
              <div className={`relative w-full h-full rounded-full overflow-hidden border-2 ${
                isDark ? 'border-rose-400/20' : 'border-rose-200/50'
              } backdrop-blur-sm`}>
                <img 
                  src="/IMG_20250902_220617.jpg"
                  alt="Keerthana"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${
                  isDark ? 'bg-gradient-to-t from-rose-900/20' : 'bg-gradient-to-t from-rose-100/20'
                } to-transparent`}></div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className={`absolute -top-3 -right-3 p-3 ${
                isDark ? 'bg-white/5' : 'bg-white/80'
              } backdrop-blur-sm rounded-2xl border ${
                isDark ? 'border-rose-400/20' : 'border-rose-200/30'
              }`}
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={20} className={isDark ? 'text-rose-300' : 'text-rose-500'} />
            </motion.div>

            <motion.div
              className={`absolute -bottom-3 -left-3 p-3 ${
                isDark ? 'bg-white/5' : 'bg-white/80'
              } backdrop-blur-sm rounded-2xl border ${
                isDark ? 'border-rose-400/20' : 'border-rose-200/30'
              }`}
              animate={{ 
                y: [0, 3, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Instagram size={18} className={isDark ? 'text-pink-300' : 'text-pink-500'} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isDark ? 'text-rose-300/60' : 'text-rose-400/60'
        }`}
      >
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default EnhancedHero;
