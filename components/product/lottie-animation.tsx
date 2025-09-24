"use client";

import lottie from "lottie-web";
import { useEffect, useRef } from "react";

import React from "react";

const LottieAnimation: React.FC<AnimationComponentProps> = ({
  file,
  speed,
  delay,
  loop,
  autoplay,
}) => {
  const Animation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        lottie.loadAnimation({
          container: Animation.current!,
          renderer: "svg",
          loop: loop,
          autoplay: autoplay,
          animationData: require(file),
        });
        lottie.setSpeed(speed);
      }, delay);
    }
  }, []);
  return <div ref={Animation}></div>;
};

export default LottieAnimation;
