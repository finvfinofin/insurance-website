import React from "react";
import BannerHeadings from "./BannerHeadings";
import Image from "next/image";

const BannerSection = (bannerProps: any) => {
  return (
    <div
      className="flex max-md:flex-col justify-between items-center custom-container gap-8 md:gap-16 pt-4"
      style={
        bannerProps.bgimgfileUrl
          ? { backgroundImage: `url(${bannerProps.bgimgfileUrl})` }
          : {}
      }
    >
      <div className="md:py-12">
        <BannerHeadings
          heading={bannerProps.name}
          subHeading={bannerProps.description}
        />
      </div>
      <div
        className={`basis-2/5 align-baseline md:self-end 
          ${
            bannerProps.isNews
              ? "max-md:w-80 basis-[25%] max-xl:basis-[40%]"
              : ""
          }
        `}
      >
        <Image
          src={bannerProps.rightanimationfileUrl}
          className="!static max-md:max-h-[300px]"
          fill
          style={{ objectFit: "contain" }}
          alt="banner-here"
        />
      </div>
    </div>
  );
};

export default BannerSection;
