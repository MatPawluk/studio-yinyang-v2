import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText = ({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 3000 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const wordsRef = useRef(words);
  
  // Sync wordsRef to avoid resetting on parent re-renders with new array literals
  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  // Use refs for internal state to avoid re-triggering the effect unnecessarily
  const stateRef = useRef({
    wordIndex: 0,
    isDeleting: false,
    isPaused: false
  });

  useEffect(() => {
    if (!wordsRef.current?.length) return;

    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const { wordIndex, isDeleting } = stateRef.current;
      const currentFullWord = wordsRef.current[wordIndex];
      
      if (!currentFullWord) {
        stateRef.current.wordIndex = 0;
        timeoutId = setTimeout(tick, typingSpeed);
        return;
      }

      setDisplayText(prev => {
        if (!isDeleting) {
          // Typing phase
          if (prev.length < currentFullWord.length) {
            const nextText = currentFullWord.slice(0, prev.length + 1);
            
            // If we just finished typing the word, set pause for next tick
            if (nextText.length === currentFullWord.length) {
              stateRef.current.isPaused = true;
            }
            
            timeoutId = setTimeout(tick, stateRef.current.isPaused ? pauseDuration : typingSpeed);
            stateRef.current.isPaused = false; // Reset pause flag for use in next tick
            return nextText;
          } else {
            // Should have been handled by pause logic above, but safety fallback
            stateRef.current.isDeleting = true;
            timeoutId = setTimeout(tick, deletingSpeed);
            return prev;
          }
        } else {
          // Deleting phase
          if (prev.length > 0) {
            const nextText = prev.slice(0, -1);
            timeoutId = setTimeout(tick, deletingSpeed);
            return nextText;
          } else {
            // Finished deleting, move to next word
            stateRef.current.isDeleting = false;
            stateRef.current.wordIndex = (wordIndex + 1) % wordsRef.current.length;
            timeoutId = setTimeout(tick, typingSpeed);
            return prev;
          }
        }
      });
    };

    timeoutId = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [typingSpeed, deletingSpeed, pauseDuration]);

  if (!words?.length) return null;

  return (
    <span className="inline-block">
      {displayText}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typewriter-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
      <span className="typewriter-cursor inline-block w-[3px] h-[1em] bg-lime ml-1 align-middle" />
    </span>
  );
};
