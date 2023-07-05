/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#04091c",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background_image.gif')",
        "about-me": "linear-gradient(to right, #0f0c29, #302b63 , #24243e)",
        "experience": "linear-gradient(to top, #00416a, #e4e5e6)",
        "tech":"linear-gradient(to bottom, #200122, #290301)"
      },
    },
  },
  plugins: [],
};
