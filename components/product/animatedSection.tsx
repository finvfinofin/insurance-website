"use-client";
import { ISection } from "@/utils/types";
import { NextPage } from "next";
import Image from "next/image";
import "../../styles/pages.css";
import ContentSection from "./contentSection";
import LoadJsonAnimation from "../animations/load-json-animation";

const styles = {
  header:
    "text-base font-light tracking-[0.33rem] text-manrope mb-2 text-yellow max-md:text-center",
  name: "text-4xl font-saira md2:text-[42px] lg:text-[46px] lg2:text-[56px]",
  description: "px-4 md:px-0 py-4 p1 semibold md:text-left text-center",
  content: "flex justify-center md:justify-start pb-4 pt-2",
  sectionImage: "h-auto w-auto content",
};

const AnimationSection = (props: ISection, styles: any) => (
  <div
    className={`col-span-full animation_section md:px-0 ${
      props.cssClass === "refer-earn" ? "px-0" : "px-6"
    } ${props.align === "center" ? "md:col-span-full mx-auto" : ""} flex ${
      props.align === "left"
        ? `${
            props.cssClass === "refer-earn"
              ? "md:col-start-7 md:col-span-6"
              : "md:col-start-7 md:col-span-5"
          } ${props.cssClass === "ai" ? "items-center" : "items-end"}`
        : props.align === "right"
        ? "order-2 md:order-1 md:col-start-2 md:col-span-5 justify-center items-center"
        : "items-center"
    } border-neutral-400 ${
      props.cssClass === "smartly" ? "min-h-[370px] md:min-h-[743px]" : ""
    } ${
      props.rightanimationfileUrl?.indexOf(".json") === -1
        ? ""
        : "justify-center"
    }`}
  >
    {props.rightanimationfileUrl?.indexOf(".json") === -1 ? (
      <Image
        className={`${styles.sectionImage} z-[1] ${
          props.align === "center"
            ? `!w-[450px] ${
                props.cssClass === "insurancePartner"
                  ? "md:!w-full"
                  : "md:!w-[650px] max-auto"
              }`
            : ""
        } !static`}
        src={props.rightanimationfileUrl}
        fill
        alt="Section-image"
      />
    ) : (
      props.rightanimationfileUrl && (
        <div className="bg-[url('/images/animatedLeftBG.png')] bg-cover bg-center bg-no-repeat w-[80%]">
          <LoadJsonAnimation jsonData={props.rightanimationfileUrl} />
        </div>
      )
    )}
  </div>
);

const AnimatedSections: NextPage<ISection> = (props) => {
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
          : `${
              props.cssClass === "save-on" ? "pb-[0px]" : "pb-0"
            } py-16 h-auto md:h-auto`
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
          <ContentSection props={props} styles={styles} />
          {AnimationSection(props, styles)}
        </>
      ) : (
        <>
          {AnimationSection(props, styles)}
          <ContentSection props={props} styles={styles} />
        </>
      )}
    </div>
  );
};

export default AnimatedSections;
