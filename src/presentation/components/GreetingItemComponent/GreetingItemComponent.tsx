import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CvButton from "../CvButton/CvButton";

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
    <div className="flex mt-0">
    
      <div className="ml-[5%] mt-[15vw] w-32 flex-1" ref={greetingRef}>

        <span className="text-[3vw] font-bold font-mono">BONJOUR !</span>
        <div className="text-black text-[3vw] font-bold font-mono">
          Je suis 
          <span className="ml-[1vw] text-yellow bg-sky-600">Remy Hamed</span>
          , développeur full-stack.
        </div>
        <CvButton></CvButton>
      </div>
      <div className="
        w-32 
        flex-1
        bg-[url(/assets/ai-generated-8237711_1280.webp)] 
        bg-no-repeat
        h-screen
        w-full
        bg-cover
        bg-center
        mt-0
        "
        ref={illustrationRef}>
      </div>
    </div>
  );
};