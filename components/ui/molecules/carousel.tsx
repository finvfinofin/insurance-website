"use client";
import "@/styles/animations.css";
import "@/styles/pages.css";
import { ISection } from "@/utils/types";
import { NextPage } from "next";
import Image from "next/image";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import useThemeStore from "@/store/themeStore";

// Carousel component props
interface ICarousel {
  slides: ISection[];
  interval?: number;
  isNonCapital?: boolean;
}

const Carousel: NextPage<ICarousel> = memo(
  ({ slides, interval = 5000, isNonCapital }) => {
    const { theme } = useThemeStore();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically update the current slide at the given interval
    useEffect(() => {
      const duration = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);

      return () => clearInterval(duration);
    }, [slides.length, interval]);

    // Handle indicator click
    const handleIndicatorClick = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    // Swipe handlers for left and right swipes
    const handleSwipeLeft = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const handleSwipeRight = useCallback(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }, [slides.length]);

    const swipeHandlers = useSwipeable({
      onSwipedLeft: handleSwipeLeft,
      onSwipedRight: handleSwipeRight,
      trackMouse: true,
    });

    // Handle line breaks and dynamic content (e.g., Yes Bank logo)
    const withLineBreaks = useCallback((text: string): JSX.Element => {
      const checkYesBankImage =
        '<img src="/images/yes-bank.svg" alt="Yes Bank" />';
      return (
        <>
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line.split("{{check Yes Bank}}").map((part, partIndex) => (
                <React.Fragment key={partIndex}>
                  {part}
                  {partIndex < line.split("{{check Yes Bank}}").length - 1 && (
                    <span
                      className="inline-block"
                      dangerouslySetInnerHTML={{ __html: checkYesBankImage }}
                    />
                  )}
                </React.Fragment>
              ))}
              {index < text.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </>
      );
    }, []);

    // Banner section as a memoized component
    const BANNERSECTION = useMemo(() => {
      const MemoizedBannerSection = memo(
        ({
          header,
          name,
          description,
          description2,
          rightanimationfileUrl,
          cssClass,
          subheading,
        }: any) => {
          const styles = {
            header:
              "text-4xl font-light tracking-widest text-Saira mb-2 text-black",
            name: "pb-4 font-extrabold font-manrope",
            description: "text-base font-manrope",
          };

          return (
            <motion.div
              className={`relative flex items-center ${cssClass}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <div className={`basis-45 flex justify-center`}>
                {rightanimationfileUrl?.indexOf(".json") === -1 ? (
                  <Image
                    className="w-126 h-[464px] content max-lg2:h-[400px] max-lg:h-[320px] max-md:h-[280px] max-sm:h-[220px] max-xsm:h-[182px]"
                    src={rightanimationfileUrl}
                    height={464}
                    width={600}
                    alt="Section-image"
                  />
                ) : null}
              </div>
              <div className={`basis-55 pl-2.5 pr-[5%]`}>
                <p
                  className={styles.header}
                  style={{
                    fontSize: "38px",
                    letterSpacing: "-2px",
                    color: theme === "dark" ? "white" : "text-dark-gunmetal",
                  }}
                >
                  {header || ""}
                </p>
                <p
                  className={`text-2xl max-xsm:text-base font-medium font-saira ${
                    isNonCapital ? "" : "capitalize"
                  } ${theme === "dark" ? "text-white" : "text-dark-gunmetal"}`}
                >
                  {withLineBreaks(name || "")}
                </p>
                {subheading?.image ? (
                  <div className="mt-2 lg:mt-4 h-12 sm:h-16 lg:h-24 max-w-28 sm:max-w-36 lg:max-w-52 relative">
                    <Image
                      src={subheading.image}
                      alt="Description image"
                      fill
                    />
                  </div>
                ) : (
                  <p
                    className={`font-bold font-saira mt-4 text-2xl md:text-5xl max-xsm:mt-1 ${
                      theme === "dark" ? "text-white" : "text-dark-gunmetal"
                    }`}
                  >
                    {withLineBreaks(description || "")}
                  </p>
                )}
                {description2 && (
                  <p
                    className={`mt-3 text-xl max-xsm:text-sm max-xsm:line-clamp-3 max-xsm:mt-1 font-saira ${
                      isNonCapital ? "" : "capitalize"
                    } ${
                      theme === "dark" ? "text-white" : "text-dark-gunmetal"
                    }`}
                  >
                    {withLineBreaks(description2 || "")}
                  </p>
                )}
              </div>
            </motion.div>
          );
        }
      );

      MemoizedBannerSection.displayName = "BANNERSECTION";

      return MemoizedBannerSection;
    }, [theme, isNonCapital, withLineBreaks, currentIndex]);

    return (
      <div
        id="carousel"
        className="relative w-full px-20 max-md2:px-12 max-md:px-8 max-sm:px-4"
        {...swipeHandlers}
      >
        <div className="relative overflow-hidden md:block rounded-[50px] max-sm:rounded-[20px] bg-transparent">
          {slides[currentIndex].bgimgfileUrl && (
            <Image
              className="bg-transparent w-full video-background"
              src={slides[currentIndex].bgimgfileUrl || ""}
              height={464}
              width={200}
              alt="background image"
            />
          )}
          <BANNERSECTION {...slides[currentIndex]} />
        </div>
        <div className="absolute bottom-[-0.5rem] max-md:bottom-[-1.5rem] md:bottom-20 left-1/2 z-10 flex -translate-x-1/2 space-x-1 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`bg-slider-light-blue h-1.5 rounded-2xl ${
                index === currentIndex
                  ? "w-10 max-md:w-6 pulse"
                  : "opacity-40 h-1.5 w-6 max-md:w-4"
              }`}
              onClick={() => handleIndicatorClick(index)}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export default Carousel;
