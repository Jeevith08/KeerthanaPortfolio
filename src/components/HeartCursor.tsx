import { useEffect, useRef, useState } from 'react';

const HeartCursor = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // 1024px is typical desktop breakpoint
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Don't add event listeners on mobile

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseout', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseout', hide);
    };
  }, [isDesktop]);

  // Hide cursor on text inputs/areas
  useEffect(() => {
    if (!isDesktop) return; // Don't add event listeners on mobile

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isDesktop]);

  if (!isDesktop) return null; // Don't render cursor on mobile

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s',
      }}
    >
      <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
        <g>
          <path
            d="M14 24c-.3 0-.6-.1-.8-.3C8.2 19.1 4 15.2 4 11.5 4 8.5 6.5 6 9.5 6c1.6 0 3.1.8 4 2.1C14.9 6.8 16.4 6 18 6c3 0 5.5 2.5 5.5 5.5 0 3.7-4.2 7.6-9.2 12.2-.2.2-.5.3-.8.3z"
            fill="url(#heartGradient)"
            style={{ filter: 'drop-shadow(0 0 4px #f9a8d4aa)' }}
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.08;1"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </g>
        <defs>
          <linearGradient id="heartGradient" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9a8d4" />
            <stop offset="1" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeartCursor; 