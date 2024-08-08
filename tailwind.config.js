/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: {
          "100": "#e7e8ea",
          "200": "#e0e0e0",
        },
        slategray: "#787486",
        gray: "#0d062d",
        white: "#fff",
        black: "#000",
        indianred: "#d25b68",
        mistyrose: "#f4d7da",
        blueviolet: {
          "100": "#5030e5",
          "200": "rgba(80, 48, 229, 0.08)",
          "300": "rgba(80, 48, 229, 0.59)",
          "400": "rgba(80, 48, 229, 0.06)",
        },
        mediumseagreen: "#68b267",
        darkseagreen: "rgba(131, 194, 157, 0.2)",
        silver: {
          "100": "#c4c4c4",
          "200": "rgba(196, 196, 196, 0.3)",
        },
        peru: "#d58d49",
        burlywood: "rgba(223, 168, 116, 0.2)",
        cornflowerblue: "#76a5ea",
        orange: "#ffa500",
        gold: "rgba(252, 214, 74, 0.7)",
        dimgray: "#625f6d",
        whitesmoke: "#f5f5f5",
        thistle: "#e4ccfd",
        lightgreen: "#7ac555",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
