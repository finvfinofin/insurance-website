"use client";
import React, { useEffect, useRef, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold }
    );

    const elementVar = elementRef.current;

    if (elementVar) {
      observer.observe(elementVar);
    }

    return () => {
      if (elementVar) {
        observer.unobserve(elementVar);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={isVisible ? "main-text" : "opacity-0"} // Apply the animation class when visible
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
