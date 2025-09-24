"use client";

import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  jsonData: string;
}

const LoadJsonAnimation = ({ jsonData }: IProps) => {
  const [animationData, setAnimationData] = useState(null);
  const fetchLottieFiles = async () => {
    try {
      const Data = await fetch(jsonData).then((res) => res.json());
      setAnimationData(Data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchLottieFiles();
  }, []);

  const lottieContainer = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when in view
    threshold: 0.5, // Play animation when 50% of the component is visible
  });

  useEffect(() => {
    if (inView && typeof window !== "undefined" && lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true, // Change to true if you need a looping animation
        autoplay: true,
        animationData: animationData, // Adjust path as needed
      });
      animation.setSpeed(0.6); // Set the animation speed as desired

      return () => {
        // Properly clean up the animation on component unmount or re-initialization
        animation.destroy();
      };
    }
  }, [inView]); // The effect re-runs when 'inView' changes

  return (
    <div ref={ref}>
      <div ref={lottieContainer} />{" "}
      {/* The Lottie animation is rendered here */}
    </div>
  );
};

export default LoadJsonAnimation;
