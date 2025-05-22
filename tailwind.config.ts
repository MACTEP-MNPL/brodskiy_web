import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "4s fadeIn forwards",
        fadeOut: "4s fadeOut forwards",
        customRotate: "4s customRotate forwards",
        customRotateV2: "8s customRotateV2 infinite",
      },
      transitionProperty: {
        TRANSLATE_OPACITY: "transform, opacity",
      },
      keyframes: {
        customRotateV2: {
          "0%": {
            transform: "rotateX(0deg) translateY(0px) rotateZ(0deg)",
          },
          "30%": {
            transform: "translateX(10px) translateY(20px) rotateZ(7deg)",
          },
          "70%": {
            transform: "translateX(-10px) translateY(-10px) rotateZ(-5deg)",
          },
          "100%": {
            transform: "rotateX(0deg) translateY(0px) rotateZ(0deg)",
          },
        },

        customRotate: {
          "0%": {
            opacity: "0.2",
            transform: "rotateX(80deg) rotateZ(20deg) scale(190%)",
            filter: "blur(5px)",
          },
          "30%": {
            transform: "rotateX(60deg) rotateZ(20deg) scale(190%)",
            filter: "blur(0px)",
            opacity: "0.9",
          },

          "60%": {
            transform: "rotateX(70deg) rotateZ(-20deg) scale(180%)",
          },
          "100%": {
            opacity: "1",
            transform: "rotateX(0deg)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "20%": {
            opacity: "0.1",
          },
          "99%": {
            opacity: "0",
          },
          "100%": {
            dispaly: "none",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "0.9",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        mdPlus: "840px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        BLACK_500: "#1A191D",
        BLACK_250: "#302935",
        GRAY_800: "#635F66",
        GRAY_700: "#3A363E",
        BLACK_200: "#211C25",
        BLACK_400: "#1A191D",
        BLACK_450: "#201F25",
        BLACK_300: "#44434A",
        GRIN_500: "#4DB45F",
        WHITE_500: "#F3F2FA",
        WHITE_600: "#F5F5F5B2",
        BLACK_600: "#000212",
        GRAY_400: "#E0E0E0",
      },
    },
  },
  plugins: [],
} satisfies Config;
