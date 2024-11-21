import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealHook = ({ children, options = {}, interval = 200 }) => {
  const revealRef = useRef(null);
  useEffect(() => {
    if (revealRef.current) {
      const sr = ScrollReveal(options);
      sr.reveal(revealRef.current.children, { interval });
    }
  }, [options, interval]);

  return <div ref={revealRef}>{children}</div>;
};

export default ScrollRevealHook;
