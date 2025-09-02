
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, delay: isComplete ? 0.5 : 0 }}
    >
      <div className="text-center relative">
        {/* Central Heart */}
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-16 h-16 mx-auto"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={64} className="text-rose-400 fill-rose-400" />
          </motion.div>
          
          {/* Floating Stars */}
          <motion.div
            className="absolute -top-4 -right-6 text-pink-300"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star size={16} fill="currentColor" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-8 text-rose-300"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -360]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <Star size={12} fill="currentColor" />
          </motion.div>
          
          <motion.div
            className="absolute top-2 left-8 text-pink-200"
            animate={{ 
              y: [0, -6, 0],
              x: [0, 3, 0]
            }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
          >
            <Sparkles size={14} />
          </motion.div>
          
          <motion.div
            className="absolute -top-2 right-2 text-rose-200"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <Sparkles size={10} />
          </motion.div>
        </motion.div>
        
        {/* Progress Ring */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-rose-100"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              className="text-rose-400"
              style={{
                strokeDasharray: 283,
                strokeDashoffset: 283 - (283 * progress) / 100,
              }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              className="text-rose-400 text-sm font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
        
        <motion.p
          className="text-rose-300 text-xs font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
