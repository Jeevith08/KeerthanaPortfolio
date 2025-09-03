import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, X, Linkedin, Instagram, Github } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { isDark } = useTheme();

  const PHONE_NUMBER = '+91 9345966973';
  const EMAIL = 'keerthanasubbu5@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/keerthana-s004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const INSTAGRAM_URL = 'https://www.instagram.com/_k.eerthuu._?igsh=MWZ6NHFkc204bDRvOQ==';
  const GITHUB_URL = 'https://github.com/';

  const handleCallClick = () => {
    setShowActions((prev) => !prev);
  };

  const handleCloseForm = () => {
    setIsCalling(false);
  };

  const callIconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  const ringVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.2, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const formVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-visible lg:overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto z-0">
        {/* Always-on soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 via-pink-100/20 to-white/0 dark:from-purple-900/20 dark:to-pink-900/20"></div>
        {/* Light mode extra shapes and decorations */}
        {!isDark && (
          <>
            {/* Large floating blurs */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-200/40 rounded-full blur-3xl animate-float-medium"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-100/60 rounded-full blur-2xl animate-float-fast" style={{ transform: 'translate(-50%, -50%)' }}></div>
            <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white/40 rounded-full blur-2xl animate-float-slow"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-pink-300/30 rounded-full blur-2xl animate-float-medium"></div>
            {/* Extra feminine shapes: hearts, sparkles, dots */}
            <div className="absolute top-16 right-1/3 animate-float-fast">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 21s-6.5-4.35-9-7.5C.5 10.5 2 7 5 7c1.54 0 3.04.99 4 2.44C10.96 7.99 12.46 7 14 7c3 0 4.5 3.5 2 6.5-2.5 3.15-9 7.5-9 7.5z" fill="#f9a8d4"/></svg>
            </div>
            <div className="absolute bottom-24 left-1/5 animate-float-medium">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#f3e8ff" opacity=".5"/></svg>
            </div>
            <div className="absolute top-1/3 left-1/3 animate-float-slow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-6.5-4.35-9-7.5C.5 10.5 2 7 5 7c1.54 0 3.04.99 4 2.44C10.96 7.99 12.46 7 14 7c3 0 4.5 3.5 2 6.5-2.5 3.15-9 7.5-9 7.5z" fill="#fbcfe8"/></svg>
            </div>
            <div className="absolute bottom-10 right-1/5 animate-float-fast">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#f9a8d4" opacity=".3"/></svg>
            </div>
            <div className="absolute top-1/6 left-1/6 animate-float-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s-6.5-4.35-9-7.5C.5 10.5 2 7 5 7c1.54 0 3.04.99 4 2.44C10.96 7.99 12.46 7 14 7c3 0 4.5 3.5 2 6.5-2.5 3.15-9 7.5-9 7.5z" fill="#f472b6"/></svg>
            </div>
            {/* Sparkle */}
            <div className="absolute top-1/2 right-1/4 animate-float-slow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01L12 2z" fill="#f9a8d4"/></svg>
            </div>
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-light mb-2">
            Don't be <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">shy!</span>
          </h2>
          <p className="text-sm text-gray-400">Feel free to get in touch. Open to projects and ideas.</p>
        </motion.div>

        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <AnimatePresence>
            <motion.div
              key="call-icon"
              className="relative cursor-pointer"
              onClick={handleCallClick}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-md shadow-lg border border-pink-100/60"
                variants={ringVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className={`relative p-6 rounded-full bg-white/60 backdrop-blur-lg shadow-md border border-pink-100/70 flex flex-col items-center justify-center`}
                variants={callIconVariants}
                whileHover="hover"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="url(#pinkGradient)" fillOpacity="0.12" />
                  <defs>
                    <linearGradient id="pinkGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f472b6" />
                      <stop offset="1" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                  <path d="M17.707 15.293l-2.387-2.387a1 1 0 0 0-1.414 0l-.793.793a8.014 8.014 0 0 1-3.293-3.293l.793-.793a1 1 0 0 0 0-1.414l-2.387-2.387a1 1 0 0 0-1.414 0l-.793.793c-.39.39-.586.902-.586 1.414 0 5.523 4.477 10 10 10 .512 0 1.024-.196 1.414-.586l.793-.793a1 1 0 0 0 0-1.414z" fill="url(#pinkGradient)"/>
                </svg>
              </motion.div>
            </motion.div>

            {showActions && (
              <motion.div
                key="quick-actions"
                className="mt-6 flex items-center gap-4 flex-wrap justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-3 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="LinkedIn">
                  <Linkedin size={18} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-3 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="Instagram">
                  <Instagram size={18} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                </a>
                <a href={`mailto:${EMAIL}`} className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-3 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="Email">
                  <Mail size={18} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className={`px-4 py-2 rounded-full text-xs font-light border transition-colors ${
                    isDark
                      ? 'bg-white/5 border-white/20 text-pink-200 hover:bg-white/10'
                      : 'bg-white/70 border-pink-200 text-pink-600 hover:bg-white'
                  }`}
                >
                  {EMAIL}
                </a>
              </motion.div>
            )}

            {isCalling && (
              <motion.div
                key="contact-form"
                className="w-full max-w-md"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={`relative p-8 rounded-2xl transition-all duration-300 ${isDark
                  ? 'bg-white/5'
                  : 'bg-white/30 border border-pink-100/70 shadow-2xl backdrop-blur-[10px] glass-form'}
                `}>
                  {/* Light mode glass gradient overlay */}
                  {!isDark && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-pink-100/40 to-purple-100/30 opacity-80 mix-blend-lighten" />
                  )}
                  <motion.button
                    onClick={handleCloseForm}
                    className={`absolute top-4 right-4 p-2 rounded-full ${isDark ? 'hover:bg-white/10' : 'hover:bg-pink-50'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} className={isDark ? 'text-white' : 'text-gray-600'} />
                  </motion.button>
                  
                  {/* Contact quick actions */}
                  <div className="space-y-4 mb-4 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail size={14} className={isDark ? 'text-pink-300' : 'text-pink-500'} />
                      <a href={`mailto:${EMAIL}`} className={isDark ? 'text-pink-200 hover:underline' : 'text-pink-600 hover:underline'}>{EMAIL}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className={isDark ? 'text-pink-300' : 'text-pink-500'} />
                      <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className={isDark ? 'text-pink-200 hover:underline' : 'text-pink-600 hover:underline'}>{PHONE_NUMBER}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className={isDark ? 'text-pink-300' : 'text-pink-500'} />
                      <span className={isDark ? 'text-pink-200' : 'text-pink-600'}>Coimbatore, India</span>
                    </div>
                    <div className="flex items-center justify-start gap-3 pt-2">
                      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-2 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="LinkedIn">
                        <Linkedin size={16} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                      </a>
                      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-2 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="Instagram">
                        <Instagram size={16} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                      </a>
                      <a href={`mailto:${EMAIL}`} className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-2 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="Email">
                        <Mail size={16} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                      </a>
                      <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={`${isDark ? 'bg-white/10' : 'bg-pink-100/80'} p-2 rounded-full border ${isDark ? 'border-white/20 hover:bg-white/20' : 'border-pink-200 hover:bg-pink-100'} transition-colors`} aria-label="GitHub">
                        <Github size={16} className={isDark ? 'text-pink-200' : 'text-pink-600'} />
                      </a>
                    </div>
                  </div>

                  <form className="space-y-4 text-xs">
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <div className="w-1/2">
                        <label className={`block mb-1 ml-2 font-medium ${isDark ? 'text-pink-200' : 'text-pink-500'}`}>First Name</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 rounded-full border-none ${isDark ? 'bg-white/10 text-white placeholder-pink-200' : 'bg-white/60 text-pink-600 placeholder-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-pink-50 transition-all duration-300 shadow-sm text-xs`}
                          placeholder="First name"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className={`block mb-1 ml-2 font-medium ${isDark ? 'text-pink-200' : 'text-pink-500'}`}>Last Name</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 rounded-full border-none ${isDark ? 'bg-white/10 text-white placeholder-pink-200' : 'bg-white/60 text-pink-600 placeholder-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-pink-50 transition-all duration-300 shadow-sm text-xs`}
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <div className="w-1/2">
                        <label className={`block mb-1 ml-2 font-medium ${isDark ? 'text-pink-200' : 'text-pink-500'}`}>Email</label>
                        <input
                          type="email"
                          className={`w-full px-4 py-2 rounded-full border-none ${isDark ? 'bg-white/10 text-white placeholder-pink-200' : 'bg-white/60 text-pink-600 placeholder-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-pink-50 transition-all duration-300 shadow-sm text-xs`}
                          placeholder="keerthanasubbu5@gmail.com"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className={`block mb-1 ml-2 font-medium ${isDark ? 'text-pink-200' : 'text-pink-500'}`}>Phone <span className="text-pink-300">(optional)</span></label>
                        <input
                          type="tel"
                          className={`w-full px-4 py-2 rounded-full border-none ${isDark ? 'bg-white/10 text-white placeholder-pink-200' : 'bg-white/60 text-pink-600 placeholder-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-pink-50 transition-all duration-300 shadow-sm text-xs`}
                          placeholder="9345966973"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block mb-1 ml-2 font-medium ${isDark ? 'text-pink-200' : 'text-pink-500'}`}>Message</label>
                      <textarea
                        className={`w-full px-4 py-2 rounded-2xl border-none ${isDark ? 'bg-white/10 text-white placeholder-pink-200' : 'bg-white/60 text-pink-600 placeholder-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-pink-50 transition-all duration-300 shadow-sm text-xs`}
                        rows={3}
                        placeholder="Your message..."
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <input type="checkbox" id="terms" className="accent-pink-400 w-3 h-3 rounded-full border-none focus:ring-2 focus:ring-pink-300" />
                      <label htmlFor="terms" className={`text-[11px] ${isDark ? 'text-pink-200' : 'text-pink-500'}`}>I agree to the <a href="#" className="underline hover:text-pink-400">terms & privacy</a></label>
                    </div>
                    <motion.button
                      type="submit"
                      className={`w-full py-2 rounded-full bg-gradient-to-r from-pink-300 via-pink-400 to-purple-300 text-white font-medium flex items-center justify-center space-x-2 relative overflow-hidden shadow-md text-xs mt-2`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-pink-200 via-pink-300 to-purple-200 opacity-0"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="relative z-10">Send Message</span>
                      <Send size={14} className="relative z-10" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="w-full flex justify-center mt-10">
        <div className="px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-pink-100 via-pink-200 to-purple-100 border border-pink-200/60">
          <span className="text-xs font-light text-pink-500 tracking-wide">© 2025 Keerthana. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
