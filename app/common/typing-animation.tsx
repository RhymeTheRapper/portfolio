'use client';

import { useEffect, useState } from 'react';
import styles from './typing-animation.module.scss';

export default function TypingAnimation() {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'Hello! My name is Rhyme Dochterman.';

  useEffect(() => {
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        {displayedText}
        <div className={`${styles.cursor} ${isComplete ? styles.blink : ''}`} />
      </h1>
    </div>
  );
}
