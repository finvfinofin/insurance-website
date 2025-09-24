"use client";

import { ISection } from "@/utils/types";
import React, { useEffect } from "react";
import FadeInOnScroll from "../animations/fade-in-text";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import useThemeStore from "@/store/themeStore";

const withLineBreaks = (text: string): JSX.Element => {
  const checkYesBankImage = '<img src="/images/yes-bank.svg" alt="Yes Bank" />';
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

interface IProps {
  props: ISection;
  styles: any;
}

export default function ContentSection({ props, styles }: IProps) {
  const { theme } = useThemeStore();

  // Define options to transform the anchor tag
  const parseOptions = {
    replace: (domNode: any) => {
      // Check if the node is an anchor tag with the expected href
      if (domNode.name === "a") {
        return (
          <a
            href={domNode.attribs.href}
            target="_blank"
            className="text-light-blue"
          >
            {domToReact(domNode.children)}
          </a>
        );
      }
      if (domNode.name === "y") {
        return (
          <span className="text-yellow">{domToReact(domNode.children)}</span>
        );
      }
    },
  };

  return (
    <div
      className={`content-section col-span-full ${
        props.align === "center"
          ? "md:col-span-8 md:col-start-3 text-center"
          : props.align === "right"
          ? "md:col-span-5"
          : "md:col-span-5"
      } my-auto ${
        props.align === "left"
          ? `md:col-start-2 ${
              props.cssClass === "invest-up" || props.cssClass === "refer-earn"
                ? "max-lg:mb-10"
                : ""
            }`
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
              ? { fontSize: "38px", fontWeight: 300, fontFamily: "Saira" }
              : {}
          }
        >
          {props.header || ""}
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <h2
          className={`relative px-5 md:px-0 ${
            props.align === "center"
              ? "md:max-w-[948px] md:mx-auto text-center"
              : "text-center md:text-left"
          } ${
            theme === "dark" ? "text-white" : ""
          } text-dark-gunmetal text-3xl md:text-5xl font-saira font-bold  md:!leading-13`}
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
            className={`px-4 md:px-0 pt-4 p1 semibold text-center${
              props.align === "center"
                ? "md:max-w-[70%] mx-auto"
                : "md:text-left"
            } ${
              theme === "dark" ? "themeDark" : "!text-dark-gunmetal"
            } max-md2:text-[18px]`}
          >
            {parse(props.description, parseOptions)}
          </p>
        )}
      </FadeInOnScroll>
      {props?.data && props?.cssClass === "buy-insurance" && (
        <FadeInOnScroll>
          <div className="flex flex-wrap gap-8 pt-15 md:w-[120%] md:-ml-[10%] max-md:mx-4">
            {props?.data?.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] p-4 pb-8 shadow-shadow2 rounded-xl"
              >
                {item.icon && (
                  <Image src={item.icon} alt="" height={48} width={48} />
                )}
                <div className="text-base font-bold py-3 font-saira text-start">
                  {item.title}
                </div>
                <div className="font-manrope text-start text-olive-black">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      )}

      <FadeInOnScroll>
        {props.bulletedList?.length > 0 && (
          <ul
            className={`flex gap-y-5 md:mb-6 my-4 mx-auto w-full md:w-auto ${
              props.align === "center"
                ? "flex-wrap mx-auto max-w-[80%] md:max-w-[70%] flex-col md:flex-row gap-x-7 justify-center"
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
                <p className={`p1 ${theme === "dark" ? "themeDark" : ""}`}>
                  {withLineBreaks(item.title)}
                </p>
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
                    props.align === "center"
                      ? "max-sm:h-10 max-md:h-12 h-15 max-md:mt-2 -mt-1"
                      : "h-6"
                  }`}
                  src={props.subheading.image}
                  height={500}
                  width={500}
                  alt={props.name}
                />
              )}
              {props.subheading.heading && (
                <span
                  className={`leading-5 ${
                    props.align === "center"
                      ? "md:leading-[30px] text-xl"
                      : "md:leading-6"
                  } font-medium !text-dark-gunmetal`}
                >
                  {parse(props.subheading.heading)}
                </span>
              )}

              {props.subheading.heading2 && (
                <span className="leading-5 max-md:text-center text-sm">
                  {parse(props.subheading.heading2)}
                </span>
              )}
            </span>
          </p>
        )}
      </FadeInOnScroll>
    </div>
  );
}
