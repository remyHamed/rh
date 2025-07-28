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
    <div className="flex mt-0 h-[120vw]">
      <div className="ml-[2vw] mt-[15vw] w-32 flex-1 h-[100vw]" ref={greetingRef}>
        <span className="text-[3vw] font-bold font-mono">BONJOUR !</span>
        <div className="text-black text-[3vw] font-bold font-mono">
          Je suis 
          <span className="ml-[1vw] text-yellow bg-sky-600">Remy Hamed</span>
          , développeur full-stack.
        </div>
      </div>
      <div className="
        w-32 
        flex-1
        bg-[url(/assets/ai-generated-8237711_1280.webp)] 
        h-[100vw]
        bg-no-repeat
        mt-[7vw]
        "
        ref={illustrationRef}>
      </div>
    </div>
  );
};