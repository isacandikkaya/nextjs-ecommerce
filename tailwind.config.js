/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: "#181818",
        textColor: "#282825",
        btncolor: "#FFB338",
        textblack: "#181813",
        bgsl: "#C9C9C9",
        bga: "#292929",
        maincolor:"#40514E",
        textaqua:"#30E3CA",
      },
      screens: {
        sm: "700px",
        md: "900px",
      },
    },
  },
  plugins: [],
};
