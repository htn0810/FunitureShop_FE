import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      unique: "39% 61% 40% 60% / 63% 57% 43% 37% ",
      ...defaultTheme.borderRadius,
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },

    fontFamily: {
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Lato", "sans-serif"],
      tertiary: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        pinkC: "#FB2E86",
        redC: "#FB2448",
        blueC: "#2F1AC4",
        offNavyBlueC: "#3F509E",
        lightGreenC: "#05E6B7",
        navyBlueC: "#151875",
        skyBlueC: "linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%)",
        pantonePurpleC: "#E0D3F5",
        purpleC: "#7E33E0",
        offPurpleC: "#9F63B5",
        offBlueC: "#151875",
        subTextC: "#8A8FB9",
        primaryTextC: "#1A0B5B",
        overlayModal: "rgba(0,0,0,.5)",
        overlay: "rgba(0,0,0,.05)",
        grayDarkC: "#24262b",
        grayC: "#9DA0AE",
        graySoftC: "#9096B2",
        grayF6: "#f6f6f6",
        purpleBannerC: "#F6F5FF",
        softYellow: "#fef5ef",
        lightYellow: "#e6d6b9",
        darkYellow: "#b19361",
      },
      keyframes: {
        fadeIntoUp: {
          "0%": {
            opacity: "0",
            "-webkit-transform": "translate3d(0, 100%, 0)",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: "1",
            "-webkit-transform": "translateZ(0)",
            transform: "translateZ(0)",
          },
        },
        fadeIntoRight: {
          "0%": {
            opacity: "0",
            "-webkit-transform": "translate3d(-100%, 0, 0)",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            "-webkit-transform": "translateX(0)",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeInUpSoon: "fadeIntoUp 1.5s ease-out",
        fadeInUpLate: "fadeIntoUp 2s ease-out",
        fadeInRight: "fadeIntoRight 1.5s ease-out",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
