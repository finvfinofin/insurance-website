import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "440px",
      sm: "640px",
      md: "768px",
      md1: "860px",
      md2: "950px",
      lg: "1024px",
      lg2: "1120px",
      xl: "1280px",
      "mid-xl": "1440px",
      "2xl": "1536px",
    },
    colors: {
      black: "#171717",
      "text-black": "#2F2F2F",
      yellow: "#ECE273",
      bannerYellow: "#E8DD5C",
      ballYellow: "#f8f5ce",
      "yellow-border": "#D8CF6E",
      "pale-yellow": "#FDFDF1",
      turquoise: "#19B1F9",
      "light-blue": "#8DC1DB",
      "bright-gray": "#efefef",
      "dark-gunmetal": "#172A33",
      white: "#fff",
      "white-100": "rgba(255,255,255,0.1)",
      "white-800": "rgba(255,255,255,0.8)",
      "white-500": "rgba(255,255,255,0.5)",
      "arylide-yellow": "#E9DE5C",
      "eerie-black": "#1A1D1F",
      "corn-slik": "#FFFCD8",
      "olive-black": "#3A3A3A",
      "dark-black": "#5a5a5a",
      "alice-blue": "#EDF6FB",
      "dark-gray": "#d9d9d9",
      "slider-light-blue": "#259CCF",
      "dark-jungle-green": "#122129",
      "slite-black": "#545454",
      "columbia-blue": "#C9DAE4",
      arsenic: "#424242",
      "button-blue": "#2CB4F1",
      gray: "#C1C1C1",
      inputBg: "#FBFBFB",
      inputBorder: "#EAEAEA",
      inputPlaceholder: "#848484",
      buttonHover: "#D9CA21",
      checkbox: "#55C1F7",
      "button-disable": "#DDDDDD",
      "button-disable-shadow": "#BABABA",
      dark: "#0D222D",
      aiBgColor: "#142830",
      popUpHeading: "#172A32",
      errorRed: "#cc0000",
    },
    extend: {
      minHeight: {
        "md-page-h": "calc(100vh - 4.5rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "47": "188px",
      },
      spacing: {
        "5.5": "22px",
        "15": "60px",
        "13": "52px",
        "12.5": "50px",
        "24": "6rem", // 96px
        "32": "8rem", // 128px
        "54": "13.5rem", // 216px
        "70": "17.5rem", // 280px
        "76": "19rem", // 304px
        "128": "38rem",
        "126": "32rem",
        "150": "37.5rem", // 600px
        "778": "48.625rem",
        "833": "52rem",
        "556": "34.75rem",
      },
      lineHeight: {
        "13": "3.5rem", // 56px
        "15": "4rem", // 64px
      },
      boxShadow: {
        shadow1: "0px 2px 40px 0px rgba(0, 0, 0, 0.08)",
        shadow2: "0px 3.47px 17.35px 0px rgba(0, 0, 0, 0.06)",
      },
      flexBasis: {
        "45": "45%",
        "55": "55%",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
export default config;
