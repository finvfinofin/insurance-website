import { NextPage } from "next";
import Image from "next/image";
import React, { useMemo } from "react";
import parse from "html-react-parser";
import FadeInOnScroll from "../animations/fade-in-text";

import { ISection } from "@/utils/types";

const ProjectSection: NextPage<ISection> = (props) => {
  const withLineBreaks = (text: string): JSX.Element => {
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
  };

  const styles = useMemo(
    () => ({
      header:
        "text-base font-light tracking-[0.33rem] text-manrope mb-2 text-yellow",
      name: "text-4xl font-saira md:text-[55px]",
      description: "px-4 md:px-0 py-4 p1 semibold md:text-left text-center",
      content: "flex justify-center md:justify-start pb-4 pt-2",
      sectionImage: "h-auto w-auto content",
    }),
    []
  );

  const ContentSection = () => (
    <div
      className={`content-section col-span-full ${
        props.align === "center"
          ? "md:col-span-8 md:col-start-3 text-center"
          : props.align === "right"
          ? "md:col-span-5"
          : "md:col-span-4"
      } my-auto ${
        props.align === "left"
          ? "md:col-start-3"
          : props.align === "right"
          ? "order-1 md:order-2 md:col-start-7"
          : "pt-16 pb-9"
      } border-neutral-400 ${
        props.bgimgfileUrl || props.bgvidfileUrl ? "content" : ""
      }`}
    >
      <FadeInOnScroll>
        <p
          className={styles.header}
          style={
            props.isSlide
              ? {
                  fontSize: "38px",
                  fontWeight: 300,
                  fontFamily: "Saira",
                  color: " ",
                }
              : {}
          }
        >
          {props.header || ""}
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <h2
          className={`relative px-5 md:px-0 ${styles.name} ${
            props.align === "center"
              ? "mb-6 md:max-w-[948px] md:mx-auto text-center"
              : "text-center md:text-left"
          }`}
          style={props.bgvidfileUrl ? { color: "white" } : {}}
        >
          {props.headingImageFile && (
            <>
              <Image
                src={props.headingImageFile}
                height={500}
                width={500}
                className="md:block hidden left-0 absolute w-auto"
                alt={props.name}
              />
              <div className="img-container absolute block md:hidden">
                <Image
                  src={props.headingImageFile}
                  height={500}
                  width={500}
                  className=""
                  alt={props.name}
                />
              </div>
            </>
          )}
          {withLineBreaks(props.name || "")}
        </h2>
      </FadeInOnScroll>
      <FadeInOnScroll>
        {props.description && (
          <p
            className={`${
              props.align === "center"
                ? "md:max-w-[70%] px-4 md:px-0 py-4 p1 semibold text-center mx-auto"
                : "px-4 md:px-0 py-4 p1 semibold md:text-left text-center"
            }`}
          >
            {withLineBreaks(props.description)}
          </p>
        )}
      </FadeInOnScroll>
      <FadeInOnScroll>
        {props.bulletedList?.length > 0 && (
          <ul
            className={`flex gap-y-5 mb-4 px-4 md:px-4 md:mb-6 mt-2 mx-auto w-full md:w-auto ${
              props.align === "center"
                ? "flex-wrap mx-auto md:max-w-[70%] flex-col md:flex-row gap-x-7 justify-center"
                : "md:mx-0 max-w-[80%] flex-col md:max-w-[500px]"
            }`}
          >
            {props.bulletedList.map((item, index) => (
              <li
                className={`flex gap-x-4 text-left ${
                  props.align === "center" ? "md:max-w-[50%] max-w-full" : ""
                }`}
                key={index}
              >
                <Image
                  src={item.bullet}
                  alt="Icon"
                  className="flex self-start align-start mt-1.5"
                  height={18}
                  width={18}
                />
                <p className="p1">{withLineBreaks(item.title)}</p>
              </li>
            ))}
          </ul>
        )}
      </FadeInOnScroll>
      <FadeInOnScroll>
        {props.subheading && (
          <p className="sub-heading p1 mb-4 md:mb-8 flex flex-col">
            <span
              className={`justify-center flex gap-x-2 relative ${
                props.align === "center"
                  ? "items-start text-3xl font-medium"
                  : "items-end md:justify-start"
              }`}
            >
              {props.subheading.image && (
                <Image
                  className={`w-auto ${
                    props.align === "center" ? "h-15 -mt-1" : "h-6"
                  }`}
                  src={props.subheading.image}
                  height={500}
                  width={500}
                  alt={props.name}
                />
              )}
              <span
                className={`leading-5 ${
                  props.align === "center"
                    ? "md:leading-[30px] text-xl"
                    : "md:leading-6"
                }`}
              >
                {parse(props.subheading.heading)}
              </span>
            </span>
            {props.subheading.heading2 && (
              <span className="leading-5 md:leading-6 mt-2">
                {parse(props.subheading.heading2)}
              </span>
            )}
          </p>
        )}
      </FadeInOnScroll>
    </div>
  );

  return (
    <div
      className={`relative text-center mx-auto sm:text-left grid grid-cols-12 md:gap-x-9 ${
        props.cssClass
      } ${
        props.bgvidfileUrl
          ? "h-auto md:h-833 py-16 md:py-0"
          : props.isSlide
          ? "h-auto md:h-556"
          : props.align === "center"
          ? "h-auto"
          : "py-16 pb-0 md:py-6 h-auto md:h-auto"
      }`}
    >
      {props.bgvidfileUrl && (
        <video autoPlay muted loop className="video-background">
          <source src={props.bgvidfileUrl} type="video/mp4" />
          {/* Add additional <source> elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
      )}
      {props.bgimgfileUrl && (
        <Image
          className="h-833 w-screen video-background"
          src={props.bgimgfileUrl}
          height={200}
          width={200}
          alt="background image"
        />
      )}
      {props.align === "left" || props.align === "center" ? (
        <>
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
        </>
      )}
    </div>
  );
};
export default ProjectSection;
