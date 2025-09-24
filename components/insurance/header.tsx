"use client";

import useThemeStore from "@/store/themeStore";
import "@/styles/header.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import tiltLine from "@/public/images/tiltLine.svg";
import headerSecondImg from "@/public/images/headerSecondImg.svg";

interface IHeaderResponse {
  cta: { link: string; label: string };
  items: { label: string; link: string; position: number; icon: string }[];
  logo: string;
  dark_logo: string;
}

export default function Header({ data }: { data: IHeaderResponse }) {
  const pathname = usePathname();
  const { updateTheme, updateSticky } = useThemeStore();

  useEffect(() => {
    updateTheme("light");
  }, [pathname]);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 0) {
        navbar.classList.add("sticky");
        updateSticky(true);
      } else {
        navbar.classList.remove("sticky");
        updateSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return null;

  return (
    <nav
      className={`navbar h-[4.5rem] transition-colors duration-300 bg-white`}
    >
      <div className={`headerContainer flex items-center font-manrope`}>
        {/* <Link prefetch={true} href="/" className="h-full inline-block"> */}
        <div className="relative h-full w-[90px]">
          <Image
            className="relative z-[14] slide-in pl-2 md:pl-0 md:ml-0 float-left"
            src={pathname == "/ask-jai" ? data.dark_logo : data.logo}
            alt="jUMPP"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* </Link> */}
        <div className="pb-3 flex items-start gap-2">
          <Image src={tiltLine} alt="" />
          <Image src={headerSecondImg} alt="" />
        </div>
      </div>
    </nav>
  );
}
