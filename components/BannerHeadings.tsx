import { addLineBreaks } from "@/utils";
import React, { ReactElement } from "react";

interface IProps {
  heading: string | ReactElement;
  subHeading: string;
}

export default function BannerHeadings({ heading, subHeading }: IProps) {
  return (
    <>
      <h1
        className={`slide-in-bottom capitalize md:leading-15 md:text-[3.5rem] text-4xl max-md:text-center`}
      >
        {heading}
      </h1>
      <div className="slide-in-bottom mt-4 max-md:text-center text-dark-black text-xl max-lg:text-base font-manrope">
        {addLineBreaks(subHeading)}
      </div>
    </>
  );
}
