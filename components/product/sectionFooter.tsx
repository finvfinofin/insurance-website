"use client";
import { validateEmail, validateInternationalPhoneNumber } from "@/utils";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ISectionProps {
  header?: string;
  title: string;
  description: string;
  data: any;
  bgImgUrl: string;
}

const SectionFooter: NextPage<ISectionProps> = (props) => {
  const styles = {
    header: "text-xl md:text-4xl",
    name: "text-3xl leading-[4rem] max-md:leading-[44px] font-saira md:text-5xl font-semibold",
    description: "p1 mt-3 mb-8 md:max-w-[600px] w-full mx-auto",
    content: "flex justify-center md:justify-start pt-2",
    sectionImage: "w-126 h-128",
  };

  function withLineBreaks(text: string): JSX.Element {
    const checkYesBankImage =
      '<img src="/images/yes-bank.svg" alt="Yes Bank" />';

    return (
      <>
        {text?.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line.split("{{check Yes Bank}}").map((part: string, partIndex) => (
              <React.Fragment key={partIndex}>
                {validateInternationalPhoneNumber(part) ? (
                  <Link href={`tel:${part}`}>{part}</Link>
                ) : validateEmail(part) ? (
                  <Link href={`mailto:${part}`}>{part}</Link>
                ) : (
                  <span>{part}</span>
                )}

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
  }
  return (
    <div className="flex align-center justify-center text-center font-manrope -mt-15 md:-mt-[200px] max-md:px-[16px]">
      <div
        className="bg-arylide-yellow px-[175px] pt-[45px] pb-[60px] max-xl:px-[140px] max-lg:px-[80px] max-md2:px-[20px] rounded-2xl bg-no-repeat bg-[length:0_0] md:bg-[length:auto_120%]"
        style={{
          backgroundImage: `url(${props.bgImgUrl})`,
          backgroundPosition: `right -30px`,
        }}
      >
        <div className="max-w-[714px] max-md2:max-w-[640px]">
          <p className={styles.header}>{props.header || ""}</p>
          <h2 className={styles.name}>{props.title || ""}</h2>
          <p className={styles.description}>
            {withLineBreaks(props.description)}
          </p>
          <div className="flex md:flex-row flex-col gap-y-6 md:gap-x-6 justify-center items-center md:items-stretch">
            {props.data.map((value: any) => {
              return (
                <div
                  key={value.title || Math.random()}
                  className="flex items-center md:items-start align-self max-md:gap-4 md:flex-col bg-white p-4 rounded-xl w-full md:w-[204px] xl:w-[240px]"
                >
                  <div className="flex-shrink-0 relative h-[55px] w-[55px]">
                    <Image
                      className="relative z-[14] slide-in pl-2 md:pl-0 md:ml-0 float-left"
                      src={value.icon}
                      alt={value.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <p className="text-base text-black font-bold my-1 text-left">
                      {value.title}
                    </p>
                    <p className="text-sm text-left text-black min-h-[32px]">
                      {withLineBreaks(value.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFooter;
