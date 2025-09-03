import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Download, Heart, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const EMAIL = 'keerthanasubbu5@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/keerthana-s004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const INSTAGRAM_URL = 'https://www.instagram.com/_k.eerthuu._?igsh=MWZ6NHFkc204bDRvOQ==';
  const [showGithubMsg, setShowGithubMsg] = useState(false);
  const iconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-visible lg:overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[{ left: '10%', top: '80%', delay: 0 }, { left: '70%', top: '75%', delay: 2 }, { left: '85%', top: '60%', delay: 4 }].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            initial={{ opacity: 0, y: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.5, 0], y: [-10, -40, -80], scale: [0.7, 1, 0.7] }}
            transition={{ duration: 10, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={13} className={isDark ? 'text-pink-400/60' : 'text-pink-500/60'} fill={isDark ? 'pink' : '#f472b6'} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hello, I'm
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Keerthana
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              FullStack Developer
            </p>
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            I'm a fullstack developer with experience in web and mobile applications, focused on crafting clean, user‑friendly experiences.
          </p>
          
          {/* Social links */}
          <div className="flex items-center space-x-6">
            <motion.a 
              href={LINKEDIN_URL} 
              target="_blank" rel="noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:text-purple-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                <Github size={24} />
              </motion.div>
            </motion.a>
            <motion.a 
              href={LINKEDIN_URL} 
              target="_blank" rel="noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:text-purple-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                <Linkedin size={24} />
              </motion.div>
            </motion.a>
            <motion.a 
              href={`mailto:${EMAIL}`} 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:text-purple-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                <Mail size={24} />
              </motion.div>
            </motion.a>
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank" rel="noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:text-purple-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                <Instagram size={24} />
              </motion.div>
            </motion.a>
            {/* GitHub info message */}
            {showGithubMsg && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs px-3 py-1 rounded-full border ml-2 bg-white/10 text-pink-200 border-white/20"
              >
                Still not added...!
              </motion.span>
            )}
          </div>
          {/* Override GitHub to show message instead of link */}
          <script dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function(){
                const githubBtn = document.querySelector('section .flex.items-center.space-x-6 a');
                if(githubBtn){
                  githubBtn.addEventListener('click', function(e){
                    e.preventDefault();
                  });
                }
              });
            `
          }} />
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center justify-center">
                View My Work
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button 
              className="group relative px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center justify-center">
                Download CV
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download size={18} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
        
        {/* Right side - Profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30"></div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <img 
                src={`${import.meta.env.BASE_URL}IMG_20250902_220617.jpg`}
                alt="Chibi Girl Waving"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
