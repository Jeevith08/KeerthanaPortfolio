import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import EnhancedHero from '@/components/EnhancedHero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Inspiration from '@/components/Inspiration';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AIChatbot from '@/components/AIChatbot';
import Hero from '@/components/Hero';
import FeminineMarquee from '@/components/FeminineMarquee';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-rose-50 via-pink-50 to-white'
    }`}>
      <Navbar />
      <EnhancedHero />
      <FeminineMarquee />
      <About />
      <Journey />
      <Inspiration />
      <Skills />
      <Projects />
      <Contact />
      <AIChatbot />
    </div>
  );
};

export default Index;
