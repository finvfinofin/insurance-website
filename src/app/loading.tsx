"use client";

import loadingFile from "@/public/images/loading_generic.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Loading = () => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        autoplay: true,
        animationData: loadingFile, // Adjust path as needed
      });
      animation.setSpeed(0.6); // Set the animation speed as desired

      return () => {
        // Properly clean up the animation on component unmount or re-initialization
        animation.destroy();
      };
    }
  }, []); // The effect re-runs when 'inView' changes

  return (
    <div className="h-[calc(100vh-4.5rem)] w-screen flex items-center justify-center">
      <div className="h-56" ref={lottieContainer} />
    </div>
  );
};

export default Loading;
