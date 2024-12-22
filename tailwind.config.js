/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom Poppins font
      },
      fontSize: {
        // Custom Font Size Presets
        btn: ["14px", { fontWeight: "500", lineHeight: "1.2rem" }], // 14px-600
        "body-1": ["14px", { fontWeight: "400", lineHeight: "1.4rem" }], // 14px-400
        "body-2": ["16px", { fontWeight: "400", lineHeight: "1.5rem" }], // 16px-400
        "body-3": ["18px", { fontWeight: "400", lineHeight: "1.6rem" }], // 18px-400
        H3: ["24px", { fontWeight: "400", lineHeight: "1.8rem" }], // 24px-400
        "H3-bold": ["24px", { fontWeight: "700", lineHeight: "1.8rem" }], // 24px-700
        H2: ["32px", { fontWeight: "400", lineHeight: "2rem" }], // 32px-400
        "H2-bold": ["32px", { fontWeight: "600", lineHeight: "2.4rem" }], // 32px-600
        H1: ["42px", { fontWeight: "400", lineHeight: "3rem" }], // 48px-400
        "H1-bold": ["42px", { fontWeight: "600", lineHeight: "3.2rem" }], // 48px-600
      },
      colors: {
        primary: "#2958FF",
        primaryDark: "#1A45DD",
        primaryLight: "#F4F6FF",
        border: "#DDDEE2",
        text: {
          DEFAULT: "#020B28",
          light: "#4A5568",
          lighter: "#A0AEC0",
          dark: "#1A202C",
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/aspect-ratio")],
};
