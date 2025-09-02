import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, Sun, Moon, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import '@/styles/comforter-font.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const iconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300
        ${scrolled
          ? isDark
            ? 'backdrop-blur-xl bg-gray-900/80'
            : 'backdrop-blur-xl bg-white/80'
          : isDark
            ? 'backdrop-blur-sm bg-gray-900/60'
            : 'backdrop-blur-sm bg-white/60'}
        ${isDark ? 'border-rose-500/20' : 'border-rose-200/30'} shadow-lg
        ${isOpen ? '' : 'rounded-full'} md:rounded-full
        ${!isDark ? 'backdrop-blur-md bg-white/40 border border-white/30' : 'backdrop-blur-md bg-gray-900/60'}
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="px-2 py-2 md:px-6 md:py-3">
        <div className="flex items-center justify-between">
          {/* Keerthu Logo */}
          <div className="flex items-center">
            <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <Heart size={10} className={isDark ? 'text-pink-300' : 'text-pink-500'} fill={isDark ? 'pink' : '#f472b6'} style={{ opacity: 0.5, filter: isDark ? 'drop-shadow(0 0 4px #f472b6)' : 'drop-shadow(0 0 4px #f9a8d4)' }} />
            </span>
            <span className="font-comforter text-xl sm:text-2xl text-pink-500 drop-shadow-sm select-none ml-2 mr-4" style={{ letterSpacing: '0.04em' }}>
              Keerthu
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  isDark ? 'text-gray-300 hover:text-rose-300' : 'text-gray-600 hover:text-rose-500'
                } transition-colors relative group text-xs font-light tracking-wide`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.name}</span>
                <motion.div
                  className={`absolute -bottom-1 left-0 h-0.5 ${
                    isDark ? 'bg-rose-400' : 'bg-rose-500'
                  } rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-rose-50 hover:bg-rose-100'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                {isDark ? (
                  <Sun size={14} className="text-rose-300" />
                ) : (
                  <Moon size={14} className="text-rose-500" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex items-center justify-end md:hidden gap-x-3 w-full">
            <motion.button
              className={`p-2 rounded-full ${
                isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-rose-50 hover:bg-rose-100'
              } transition-colors`}
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                {isDark ? (
                  <Sun size={16} className="text-rose-300" />
                ) : (
                  <Moon size={16} className="text-rose-500" />
                )}
              </motion.div>
            </motion.button>
            <motion.button
              className={`p-2 rounded-full ${
                isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-rose-50 hover:bg-rose-100'
              } transition-colors`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconAnimation}
              >
                {isOpen ? (
                  <X size={16} className={isDark ? 'text-rose-300' : 'text-rose-500'} />
                ) : (
                  <Menu size={16} className={isDark ? 'text-rose-300' : 'text-rose-500'} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center space-x-3 w-full p-3 rounded-xl ${
                  isDark 
                    ? 'bg-gray-800/30 hover:bg-gray-700/30 text-gray-300 hover:text-rose-300'
                    : 'bg-rose-50/50 hover:bg-rose-100/50 text-gray-600 hover:text-rose-500'
                } transition-colors text-xs font-light`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  variants={iconAnimation}
                >
                  <item.icon size={16} />
                </motion.div>
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;