/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: {
          3: "#CCE4E8",
          2: "#99C9D1",
          1: "#66AEBA",
          DEFAULT: "#66AEBA",
        },
        DEFAULT: "#00788C",
        dark: {
          DEFAULT: "#005A69",
          1: "#005A69",
          2: "#003C46",
        },
      },
      yellow: {
        light: {
          2: "#F9EDCC",
          1: "#EECA66",
          DEFAULT: "#EECA66",
        },
        DEFAULT: "#E2A600",
        dark: {
          DEFAULT: "#AA7D00",
          1: "#AA7D00",
          2: "#715300",
        },
      },
      red: {
        DEFAULT: "#8C3326",
        light: "#E8D6D4",
      },
      black: "#2D2D2D",
      white: {
        DEFAULT: "#FFFFFF",
        1: "#FFFFFF",
        2: "#F6F6F6",
        background: "#F6F6F6",
      },
      grey: {
        DEFAULT: "#B3B3B3",
        light: "#E1E1E1",
        1: "#E1E1E1",
        2: "#B3B3B3",
        3: "#868686",
        4: "#5A5A5A",
        dark: "#5A5A5A",
      },
      primary: {
        DEFAULT: "#E2A600",
        hover: "#AA7D00",
        pressed: "#715300",
      },
      secondary: {
        DEFAULT: "#00788C",
        hover: "#005A69",
        pressed: "#003C46",
      },
    },
    extend: {
      fontFamily: {
        sans: ["GTAmerica", ...defaultTheme.fontFamily.sans],
        serif: ["GTSectra", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
