import { useState, useEffect, useRef } from 'react';

const MSG_LIST = [
  'مرحبا انا جايدر انا هنا لاجلك ❤️\u200f❤️',
  'انا اتمني لك رحلة سعيدة وممتعه'
];

const CHAR_SPEED = 50;
const HOLD_TIME = 5000;
const ERASE_SPEED = 25;
const IDLE_GAP = 5000;

const TiT0Chat = () => {
  const [phase, setPhase] = useState('idle');
  const [buf, setBuf] = useState('');
  const [showDots, setShowDots] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  
  const msgIdxRef = useRef(0);
  const idx = useRef(0);

  useEffect(() => {
    let active = true;
    
    const run = async () => {
      // Initial delay
      await new Promise(r => setTimeout(r, 1000));

      while (active) {
        const currentIdx = msgIdxRef.current;
        const target = MSG_LIST[currentIdx];

        // 1. Show thinking dots
        setShowDots(true);
        await new Promise(r => setTimeout(r, 1200));
        if (!active) break;

        // 2. Transition to bubble
        setShowBubble(true);
        setShowDots(false);
        await new Promise(r => setTimeout(r, 300));
        if (!active) break;

        // 3. Typing phase
        setPhase('typing');
        idx.current = 0;
        while (idx.current < target.length) {
          if (!active) break;
          setBuf(target.slice(0, idx.current + 1));
          idx.current++;
          await new Promise(r => setTimeout(r, CHAR_SPEED + Math.random() * 15));
        }
        if (!active) break;

        // 4. Holding phase (5 seconds)
        setPhase('holding');
        await new Promise(r => setTimeout(r, HOLD_TIME));
        if (!active) break;

        // 5. Erasing phase
        setPhase('erasing');
        while (idx.current > 0) {
          if (!active) break;
          idx.current--;
          setBuf(target.slice(0, idx.current));
          await new Promise(r => setTimeout(r, ERASE_SPEED));
        }
        if (!active) break;

        // 6. Reset to idle
        setBuf('');
        setPhase('idle');
        setShowBubble(false);

        // Move to next index (loop back after last)
        msgIdxRef.current = (currentIdx + 1) % MSG_LIST.length;

        // 7. Idle gap (5 seconds) before next message starts
        await new Promise(r => setTimeout(r, IDLE_GAP));
      }
    };

    run();

    return () => {
      active = false;
    };
  }, []);

  const isTyping = phase === 'typing';

  return (
    <div className="relative flex flex-col items-center justify-end w-max max-w-[200px] sm:max-w-[260px] select-none pointer-events-none">
      {/* Bouncing dots container */}
      <div
        className={`absolute bottom-2 transition-all duration-300 ${
          showDots ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
        }`}
      >
        <div className="flex gap-1.5 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] border border-white/20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a2a4a] animate-bounce" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a2a4a] animate-bounce [animation-delay:0.15s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a2a4a] animate-bounce [animation-delay:0.3s]" />
        </div>
      </div>

      {/* Message Bubble */}
      <div
        className={`transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          showBubble ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.6] translate-y-3 pointer-events-none'
        }`}
      >
        <div className="relative bg-gradient-to-b from-white to-[#f4f7fa] rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] px-4 py-2.5 border border-white/30 text-center">
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#1a2a4a] font-bold whitespace-normal break-words dir-rtl">
            {buf}
            {isTyping && (
              <span className="inline-block w-[1.5px] h-[1em] bg-[#1a2a4a] ml-0.5 align-middle animate-[blink_0.75s_step-end_infinite]" />
            )}
          </p>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#f4f7fa] filter drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]" />
        </div>
      </div>
    </div>
  );
};

export default TiT0Chat;
