import { useEffect, useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Inspiration = () => {
  const { isDark } = useTheme();
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "She believed she could, so she did.",
      author: "R.S. Grey"
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Strong women don't have attitudes, they have standards.",
      author: "Marilyn Monroe"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-16 px-6 ${
      isDark ? 'bg-gray-800/50' : 'bg-rose-50/30'
    }`}>
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <Star size={16} className={`${isDark ? 'text-rose-300' : 'text-rose-400'} fill-current`} />
              <Heart size={14} className={`${isDark ? 'text-pink-300' : 'text-pink-400'} fill-current`} />
              <Star size={16} className={`${isDark ? 'text-rose-300' : 'text-rose-400'} fill-current`} />
            </div>
          </div>

          <h2 className={`text-2xl lg:text-3xl font-light mb-8 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Daily <span className={isDark ? 'text-rose-300' : 'text-rose-500'}>Inspiration</span>
          </h2>

          <div className="relative min-h-[120px] flex items-center justify-center">
            <div key={currentQuote} className="animate-fade-in">
              <blockquote className={`text-lg lg:text-xl font-light italic mb-4 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                "{quotes[currentQuote].text}"
              </blockquote>
              <cite className={`text-sm ${
                isDark ? 'text-rose-300' : 'text-rose-500'
              }`}>
                — {quotes[currentQuote].author}
              </cite>
            </div>
          </div>

          {/* Quote indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? (isDark ? 'bg-rose-400' : 'bg-rose-500')
                    : (isDark ? 'bg-gray-600' : 'bg-gray-300')
                }`}
              />
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <Sparkles size={18} className={`${isDark ? 'text-pink-300' : 'text-pink-400'}`} />
          </div>

          {/* Floating Hearts Animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[
              { left: '10%', top: '85%', delay: 0, size: 13 },
              { left: '60%', top: '80%', delay: 2, size: 13 },
              { left: '90%', top: '65%', delay: 4, size: 13 },
              { left: '25%', top: '30%', delay: 1.5, size: 10 },
              { left: '75%', top: '20%', delay: 3, size: 12 },
              { left: '50%', top: '10%', delay: 2.5, size: 9 },
              { left: '15%', top: '40%', delay: 5, size: 11 },
              { left: '35%', top: '25%', delay: 1.3, size: 12 },
              { left: '85%', top: '55%', delay: 3.8, size: 10 },
              { left: '70%', top: '35%', delay: 4.2, size: 13 },
              { left: '40%', top: '70%', delay: 2.6, size: 11 },
              { left: '55%', top: '15%', delay: 1.7, size: 12 },
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
      </div>
    </section>
  );
};

export default Inspiration;
