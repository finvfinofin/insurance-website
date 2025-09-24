"use client";

import arrowBtn from "@/public/lottie/arrow-btn.json";
import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
// import arrowBtn from "@/public/lottie/arrow-btn.json";

const ArrowButton = () => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const lottieAnimation = useRef<AnimationItem | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && typeof window !== "undefined" && lottieContainer.current) {
      lottieAnimation.current = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: arrowBtn,
      });
      lottieAnimation.current.setSpeed(0.8);

      return () => {
        // Clean up the animation when the component is unmounted
        if (lottieAnimation.current) {
          lottieAnimation.current.destroy();
          lottieAnimation.current = null;
        }
      };
    }
  }, [inView]); //runs when 'inView' changes

  useEffect(() => {
    const handleMouseEnter = () => {
      if (lottieAnimation.current) {
        lottieAnimation.current.goToAndPlay(0, true); // Restart the animation from the beginning
      }
    };

    if (lottieContainer.current) {
      const container = lottieContainer.current;
      container.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, []);

  return (
    <div ref={ref} className="w-[58px] h-[58px] md:h-[88px] md:w-[88px]">
      <div ref={lottieContainer} />
    </div>
  );
};

export default ArrowButton;
