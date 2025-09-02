import { motion } from 'framer-motion';
import { Heart, Star, Coffee, Book, GraduationCap, Award, Target, Lightbulb } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Journey = () => {
  const { isDark } = useTheme();

  const milestones = [
    {
      year: "HSC/SSLC",
      title: "Mother's Matric Hr Sec School",
      description: "Where childhood meets enjoyment, school paves the path for future talents.",
      icon: Book
    },
    {
      year: "Degree",
      title: "SNS College of Engineering",
      description: "Where innovation meets excellence, SNS paves the path for future technocrats.",
      icon: GraduationCap
    },
    {
      year: "Internships",
      title: "MERN Stack Intern & SAE Web Dev",
      description: "Hands-on experience building web apps using MongoDB, Express.js, React.js, and Node.js; strong grounding in HTML, CSS, and JavaScript.",
      icon: Star
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently maintaining high academic performance"
    },
    {
      icon: Target,
      title: "Future Goals",
      description: "Aiming to become a skilled software engineer"
    },
    {
      icon: Lightbulb,
      title: "Learning Focus",
      description: "Passionate about technology and innovation"
    }
  ];

  const iconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="journey" className={`py-20 px-6 relative ${isDark ? 'bg-white/5' : 'bg-pink-50'} overflow-visible lg:overflow-hidden`}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-light mb-3 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className={isDark ? 'text-rose-300' : 'text-rose-500'}>Journey</span>
          </h2>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Educational Timeline
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline line with glowing hearts */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              isDark ? 'bg-rose-400/30' : 'bg-rose-200'
            }`} style={{ zIndex: 0 }}>
              {/* Fewer, subtle glowing hearts along the line */}
              {Array.from({ length: 5 }).map((_, i) => i === 0 ? null : (
                <div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ top: `calc(${i * 25}% - 25px)` }}
                >
                  {/* Masking circle to hide the line behind the heart */}
                  <span
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: isDark ? '#18122B' : '#fff',
                      zIndex: 1,
                    }}
                  />
                  <Heart
                    size={14}
                    className={isDark ? 'text-pink-300' : 'text-pink-500'}
                    fill={isDark ? 'pink' : '#f472b6'}
                    style={{
                      opacity: 0.5,
                      filter: isDark
                        ? 'drop-shadow(0 0 8px #f472b6)' 
                        : 'drop-shadow(0 0 8px #f9a8d4)',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center z-10 ${
                    isDark 
                      ? 'bg-gray-900 border-2 border-rose-400/30' 
                      : 'bg-white border-2 border-rose-200'
                  }`}>
                    <motion.div
                      whileHover="hover"
                      initial="initial"
                      variants={iconAnimation}
                    >
                      <milestone.icon 
                        size={20} 
                        className={`${isDark ? 'text-rose-300' : 'text-rose-500'} ${
                          milestone.icon === Heart ? 'fill-current' : ''
                        }`} 
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 pl-20">
                    <motion.div 
                      className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-light mb-1 ${
                        isDark 
                          ? 'bg-rose-500/10 text-rose-300 border border-rose-400/20' 
                          : 'bg-rose-100 text-rose-600 border border-rose-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {milestone.year}
                    </motion.div>
                    <h3 className={`text-base font-light mb-1 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      {milestone.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-8">
            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 border-rose-500/20' 
                  : 'bg-rose-50 border-rose-100'
              } border backdrop-blur-sm relative`}
            >
              {/* Animated hearts in top-right corner (hanging effect) */}
              <motion.span
                className="absolute top-2 right-3"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop' }}
                style={{ filter: isDark ? 'drop-shadow(0 0 8px #f472b6)' : 'drop-shadow(0 0 8px #f9a8d4)' }}
              >
                <Heart size={16} className={isDark ? 'text-pink-300' : 'text-pink-500'} fill={isDark ? 'pink' : '#f472b6'} style={{ opacity: 0.5, border: 'none' }} />
                <motion.span
                  className="absolute"
                  style={{ top: 12, right: -6 }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
                >
                  <Heart size={9} className={isDark ? 'text-pink-200' : 'text-pink-400'} fill={isDark ? 'pink' : '#f472b6'} style={{ opacity: 0.4 }} />
                </motion.span>
              </motion.span>
              <h3 className={`text-lg font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Achievements & Goals</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={`p-2 rounded-full ${
                      isDark ? 'bg-rose-500/10' : 'bg-rose-100'
                    }`}>
                      <achievement.icon 
                        size={18} 
                        className={isDark ? 'text-rose-300' : 'text-rose-500'} 
                      />
                    </div>
                    <div>
                      <h4 className={`text-sm font-light mb-1 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>{achievement.title}</h4>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 border-pink-500/20' 
                  : 'bg-pink-50 border-pink-100'
              } border backdrop-blur-sm relative`}
            >
              {/* Animated hearts in top-right corner (hanging effect) */}
              <motion.span
                className="absolute top-2 right-3"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop' }}
                style={{ filter: isDark ? 'drop-shadow(0 0 8px #f472b6)' : 'drop-shadow(0 0 8px #f9a8d4)' }}
              >
                <Heart size={16} className={isDark ? 'text-pink-300' : 'text-pink-500'} fill={isDark ? 'pink' : '#f472b6'} style={{ opacity: 0.5, border: 'none' }} />
                <motion.span
                  className="absolute"
                  style={{ top: 12, right: -6 }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
                >
                  <Heart size={9} className={isDark ? 'text-pink-200' : 'text-pink-400'} fill={isDark ? 'pink' : '#f472b6'} style={{ opacity: 0.4 }} />
                </motion.span>
              </motion.span>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-full ${
                  isDark ? 'bg-pink-500/10' : 'bg-pink-100'
                }`}>
                  <Lightbulb 
                    size={18} 
                    className={isDark ? 'text-pink-300' : 'text-pink-500'} 
                  />
                </div>
                <h3 className={`text-lg font-light ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>My Vision</h3>
              </div>
              <p className={`text-sm italic ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "Every step in my educational journey is a building block towards becoming a skilled professional. 
                I believe in continuous learning and growth, embracing challenges as opportunities to excel."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none md:pointer-events-auto z-0">
          {[
            { left: '12%', top: '80%', delay: 0, size: 13 },
            { left: '55%', top: '75%', delay: 2, size: 13 },
            { left: '88%', top: '60%', delay: 4, size: 13 },
            { left: '30%', top: '20%', delay: 1.5, size: 10 },
            { left: '80%', top: '30%', delay: 3, size: 12 },
            { left: '60%', top: '10%', delay: 2.5, size: 9 },
            { left: '15%', top: '40%', delay: 5, size: 11 },
            { left: '25%', top: '10%', delay: 1.1, size: 12 },
            { left: '75%', top: '15%', delay: 3.3, size: 10 },
            { left: '90%', top: '45%', delay: 4.7, size: 13 },
            { left: '45%', top: '65%', delay: 2.4, size: 11 },
            { left: '65%', top: '25%', delay: 1.6, size: 12 },
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
      </div>
    </section>
  );
};

export default Journey;
