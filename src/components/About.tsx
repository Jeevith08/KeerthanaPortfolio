import { Heart, Sparkles, Star, Coffee } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { isDark } = useTheme();

  return (
    <motion.section
      id="about"
      className={`py-16 px-6 ${isDark ? 'bg-gray-900' : 'bg-white'} overflow-visible lg:overflow-hidden`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className={`text-3xl lg:text-5xl font-light mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            About <span className={isDark ? 'text-rose-300' : 'text-rose-500'}>Me</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            I’m an enthusiastic web designer & MERN‑Stack developer focused on crafting clean, user‑friendly experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4" data-aos="fade-right">
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I’m a dedicated and skilled programmer proficient in Java and full‑stack development with a fervent passion for continuous learning and exploration within technology.
            </p>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Eager to delve deeper into the technical world, with a strong desire to contribute as a programmer. Committed to honing my skills and embracing new challenges in the dynamic field of programming.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            <div className={`${
              isDark 
                ? 'bg-white/5 border-rose-500/20 hover:bg-white/10' 
                : 'bg-rose-50 border-rose-100 hover:bg-rose-100'
            } backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300 transform hover:scale-105 text-center`}>
              <div className="flex justify-center mb-2">
                <Star className={`${isDark ? 'text-rose-300' : 'text-rose-500'} fill-current`} size={20} />
              </div>
              <h3 className={`text-2xl font-light mb-1 ${isDark ? 'text-rose-300' : 'text-rose-500'}`}>8.8</h3>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>CGPA</p>
            </div>
            <div className={`${
              isDark 
                ? 'bg-white/5 border-pink-500/20 hover:bg-white/10' 
                : 'bg-pink-50 border-pink-100 hover:bg-pink-100'
            } backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300 transform hover:scale-105 text-center`}>
              <div className="flex justify-center mb-2">
                <Heart className={`${isDark ? 'text-pink-300' : 'text-pink-500'} fill-current`} size={20} />
              </div>
              <h3 className={`text-2xl font-light mb-1 ${isDark ? 'text-pink-300' : 'text-pink-500'}`}>4th</h3>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Year Student</p>
            </div>
            <div className={`${
              isDark 
                ? 'bg-white/5 border-rose-500/20 hover:bg-white/10' 
                : 'bg-rose-50 border-rose-100 hover:bg-rose-100'
            } backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300 transform hover:scale-105 text-center`}>
              <div className="flex justify-center mb-2">
                <Sparkles className={`${isDark ? 'text-rose-300' : 'text-rose-500'}`} size={20} />
              </div>
              <h3 className={`text-2xl font-light mb-1 ${isDark ? 'text-rose-300' : 'text-rose-500'}`}>100%</h3>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Dream Big</p>
            </div>
            <div className={`${
              isDark 
                ? 'bg-white/5 border-pink-500/20 hover:bg-white/10' 
                : 'bg-pink-50 border-pink-100 hover:bg-pink-100'
            } backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300 transform hover:scale-105 text-center`}>
              <div className="flex justify-center mb-2">
                <Coffee className={`${isDark ? 'text-pink-300' : 'text-pink-500'}`} size={20} />
              </div>
              <h3 className={`text-2xl font-light mb-1 ${isDark ? 'text-pink-300' : 'text-pink-500'}`}>100%</h3>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Never Give Up</p>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto z-0">
        {[
          { left: '15%', top: '70%', delay: 0, size: 13 },
          { left: '60%', top: '80%', delay: 2, size: 13 },
          { left: '80%', top: '60%', delay: 4, size: 13 },
          { left: '25%', top: '30%', delay: 1.5, size: 10 },
          { left: '75%', top: '20%', delay: 3, size: 12 },
          { left: '50%', top: '10%', delay: 2.5, size: 9 },
          { left: '10%', top: '40%', delay: 5, size: 11 },
          { left: '35%', top: '15%', delay: 1.2, size: 12 },
          { left: '85%', top: '35%', delay: 3.7, size: 10 },
          { left: '65%', top: '55%', delay: 4.3, size: 13 },
          { left: '40%', top: '60%', delay: 2.8, size: 11 },
          { left: '55%', top: '25%', delay: 1.9, size: 12 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.left, top: pos.top }}
            initial={{ opacity: 0, y: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.5, 0], y: [-10, -40, -80], scale: [0.7, 1, 0.7] }}
            transition={{ duration: 10, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
            viewport={{ once: false }}
          >
            <Heart size={pos.size} className={isDark ? 'text-pink-400/60' : 'text-pink-500/60'} fill={isDark ? 'pink' : '#f472b6'} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
