import { motion } from 'framer-motion';
import { Heart, Palette, Code, Brain } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';

const Skills = () => {
  const { isDark } = useTheme();

  // Responsive chart size
  const [chartSize, setChartSize] = useState({ width: 400, height: 320, padding: 50 });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartSize({ width: 320, height: 220, padding: 32 });
      } else {
        setChartSize({ width: 400, height: 320, padding: 50 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Skill data
  const skills = [
    { name: 'Java', level: 80 },
    { name: 'Web Dev', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'Logical', level: 99 },
  ];

  // Chart dimensions
  const { width, height, padding } = chartSize;
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;
  const yMax = 100;
  const xCount = skills.length;

  // Calculate points for the line
  const points = skills.map((skill, i) => {
    const x = padding + (i * (chartWidth / (xCount - 1)));
    const y = padding + chartHeight - (skill.level / yMax) * chartHeight;
    return { x, y };
  });

  // SVG polyline points string
  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');

  // Feminine theme colors
  const gridColor = isDark ? '#f9a8d4' : '#f472b6'; // pink-300/500
  const lineColor = isDark ? '#f472b6' : '#ec4899'; // pink-500/600
  const pointColor = isDark ? '#fbcfe8' : '#f9a8d4'; // pink-200/300
  const axisColor = isDark ? '#f472b6' : '#be185d'; // pink-500/800

  // Tooltip state
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Updated tools
  const tools = [
    'HTML/CSS', 'JavaScript', 'Git', 'VS Code'
  ];

  return (
    <section id="skills" className={`py-20 px-6 relative ${isDark ? 'bg-gray-900/50' : 'bg-white'} overflow-visible lg:overflow-hidden`}>
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12" 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className={`text-3xl lg:text-5xl font-light mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className={isDark ? 'text-rose-300' : 'text-rose-500'}>Skills</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and abilities I'm passionate about
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Radar/Line Chart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <svg width={width} height={height} className="block">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4, 5].map(i => (
                <line
                  key={i}
                  x1={padding}
                  x2={width - padding}
                  y1={padding + (chartHeight / 5) * i}
                  y2={padding + (chartHeight / 5) * i}
                  stroke={gridColor}
                  strokeWidth={1}
                  opacity={0.3}
                />
              ))}
              {/* Vertical grid lines */}
              {skills.map((_, i) => (
                <line
                  key={i}
                  y1={padding}
                  y2={height - padding}
                  x1={padding + (i * (chartWidth / (xCount - 1)))}
                  x2={padding + (i * (chartWidth / (xCount - 1)))}
                  stroke={gridColor}
                  strokeWidth={1}
                  opacity={0.3}
                />
              ))}
              {/* Y axis */}
              <line
                x1={padding}
                x2={padding}
                y1={padding}
                y2={height - padding}
                stroke={axisColor}
                strokeWidth={2}
              />
              {/* X axis */}
              <line
                x1={padding}
                x2={width - padding}
                y1={height - padding}
                y2={height - padding}
                stroke={axisColor}
                strokeWidth={2}
              />
              {/* Y axis labels */}
              {[0, 1, 2, 3, 4, 5].map(i => (
                <text
                  key={i}
                  x={padding - 10}
                  y={padding + (chartHeight / 5) * i + 5}
                  fontSize="11"
                  fill={axisColor}
                  textAnchor="end"
                  fontWeight="400"
                >
                  {yMax - (yMax / 5) * i}
                </text>
              ))}
              {/* X axis labels */}
              {skills.map((skill, i) => (
                <text
                  key={skill.name}
                  x={padding + (i * (chartWidth / (xCount - 1)))}
                  y={height - padding + 22}
                  fontSize="12"
                  fill={axisColor}
                  textAnchor="middle"
                  fontWeight="400"
                >
                  {skill.name}
                </text>
              ))}
              {/* Animated polyline for skill levels */}
              <motion.polyline
                fill="none"
                stroke={lineColor}
                strokeWidth={2.2}
                points={polylinePoints}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{ filter: 'drop-shadow(0 1px 8px #f9a8d4)', transition: 'filter 0.3s' }}
                animate={{ filter: hoveredIdx !== null ? 'drop-shadow(0 0px 16px #f472b6)' : 'drop-shadow(0 1px 8px #f9a8d4)' }}
              />
              {/* Points with dynamic effects */}
              {points.map((p, i) => (
                <g key={i}>
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r={7}
                    fill={pointColor}
                    stroke={lineColor}
                    strokeWidth={1.5}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    animate={hoveredIdx === i ? { scale: 1.25, filter: 'drop-shadow(0 0 12px #f472b6)' } : { scale: 1, filter: 'drop-shadow(0 0 0 #fff0)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  />
                  {/* Pulse animation */}
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r={hoveredIdx === i ? 13 : 10}
                    fill="none"
                    stroke={lineColor}
                    strokeWidth={0.8}
                    animate={{ opacity: [0.5, 0.1, 0.5], scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', delay: i * 0.2 }}
                    pointerEvents="none"
                  />
                  {/* Tooltip */}
                  {hoveredIdx === i && (
                    <foreignObject x={p.x - 40} y={p.y - 48} width="80" height="36">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="rounded-xl px-2 py-1 text-xs text-white shadow-lg"
                        style={{ background: 'linear-gradient(90deg,#f472b6,#fbcfe8)' }}
                      >
                        <div className="font-medium">{skills[i].name}</div>
                        <div className="font-light">{skills[i].level}%</div>
                      </motion.div>
                    </foreignObject>
                  )}
                </g>
              ))}
            </svg>
          </motion.div>
          {/* Description/Tools */}
          <motion.div 
            className="space-y-6 max-w-xs"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={{ initial: { scale: 1 }, hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } } }}
              >
                <Palette className={`${isDark ? 'text-pink-300' : 'text-pink-500'}`} size={20} />
              </motion.div>
              <h3 className={`text-xl font-light ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Tools & Technologies
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className={`${
                    isDark 
                      ? 'bg-white/5 border-rose-500/20 hover:bg-white/10' 
                      : 'bg-white/70 border-rose-100 hover:bg-white'
                  } backdrop-blur-sm rounded-xl p-3 border transition-all duration-300 text-center`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, -2, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <span className={`text-xs font-light ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
            {/* Additional info */}
            <motion.div 
              className={`${
                isDark 
                  ? 'bg-rose-500/10 border-rose-500/20' 
                  : 'bg-rose-100/50 border-rose-200'
              } rounded-2xl p-5 border`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  variants={{ initial: { scale: 1 }, hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } } }}
                >
                  <Brain className={`${isDark ? 'text-rose-300' : 'text-rose-500'}`} size={16} />
                </motion.div>
                <h4 className={`text-lg font-light ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Problem Solving
                </h4>
              </div>
              <p className={`text-xs leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Strong analytical and problem-solving abilities, with a focus on writing clean, 
                efficient code and finding optimal solutions to complex challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
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
            { left: '35%', top: '35%', delay: 1.4, size: 12 },
            { left: '85%', top: '25%', delay: 3.6, size: 10 },
            { left: '75%', top: '45%', delay: 4.4, size: 13 },
            { left: '40%', top: '80%', delay: 2.7, size: 11 },
            { left: '60%', top: '15%', delay: 1.5, size: 12 },
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

export default Skills;
