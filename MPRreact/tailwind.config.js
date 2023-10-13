/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#897979",
          "200": "#14213d",
          "300": "#111",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(255, 255, 255, 0)",
        },
        orange: "#fca311",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f0f0f0",
        },
        black: "#000",
        gainsboro: "#e6e6e6",
        pink: "#e1b8b8",
        silver: "#c1c1c1",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "33xl": "52px",
      "13xl": "32px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "23xl": "42px",
      lgi: "19px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
