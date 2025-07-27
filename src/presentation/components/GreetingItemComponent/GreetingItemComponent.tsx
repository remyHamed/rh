import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const GreetingItemComponent: React.FC = () => {
  const greetingRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!greetingRef.current || !illustrationRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      greetingRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );

    tl.fromTo(
      illustrationRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 },
      "-=0.7"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="item-1-greating">
      <div className="text-greeting-container" ref={greetingRef}>
        <span className="greeting">BONJOUR !</span>
        <div className="white-text">
          Je suis
          <span className="yellow-text"> Remy Hamed</span>
          , développeur full-stack.
        </div>
      </div>
      <div className="illustration_coding" ref={illustrationRef}></div>
    </div>
  );
};