import { useTheme } from '@/contexts/ThemeContext';

const quotes = [
  'Believe in yourself',
  'Shine with kindness',
  'Dream big, work hard',
  'You are capable of amazing things',
  'Stay positive, work hard, make it happen',
  'Embrace your journey',
  'Radiate confidence and grace',
];

const FeminineMarquee = () => {
  const { isDark } = useTheme();

  // Build the marquee string with a middot and space as separator
  const marqueeText = quotes.join('  ·  ') + '  ·  ';

  return (
    <div
      className={`w-full overflow-visible lg:overflow-hidden relative z-20`}
      style={{ height: 38 }}
    >
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none`}
        style={{
          borderRadius: 16,
          boxShadow: isDark
            ? '0 2px 16px 0 rgba(236,72,153,0.10)'
            : '0 2px 16px 0 rgba(236,72,153,0.08)',
          background: isDark
            ? 'linear-gradient(90deg, rgba(36,18,54,0.92) 0%, rgba(124,58,237,0.13) 60%, rgba(236,72,153,0.10) 100%)'
            : 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(236,72,153,0.10) 60%, rgba(124,58,237,0.08) 100%)',
        }}
      />
      <div
        className="relative w-full h-full flex items-center"
        style={{ minHeight: 38 }}
      >
        <div
          className="whitespace-nowrap flex items-center animate-marquee font-light text-xs sm:text-sm tracking-wide"
          style={{
            color: isDark ? '#f9a8d4' : '#be185d',
            fontFamily: 'Comforter, cursive',
            textShadow: isDark ? '0 1px 8px #f472b6' : '0 1px 8px #f9a8d4',
            letterSpacing: '0.04em',
          }}
        >
          {marqueeText.repeat(4)}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          display: inline-block;
          will-change: transform;
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default FeminineMarquee; 