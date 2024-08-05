/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        dimgray: {
          100: "#727272",
          200: "#535353",
        },
        gray: {
          100: "#8c8c8c",
          200: "#282828",
          300: "#181818",
          400: "rgba(0, 0, 0, 0.5)",
          500: "rgba(255, 255, 255, 0.3)",
          600: "rgba(140, 140, 140, 0.09)",
        },
        white: "#fff",
        darkgray: {
          100: "#b3b3b3",
          200: "#a7a7a7",
        },
        gainsboro: "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        "481xl": "500px",
        "6xs-4": "6.4px",
        "8xs-4": "4.4px",
      },
    },
    fontSize: {
      smi: "13px",
      "2xs": "11px",
      "3xs": "10px",
      sm: "14px",
      mini: "15px",
      base: "16px",
      xl: "20px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
