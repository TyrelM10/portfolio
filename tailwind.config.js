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
        "mob-hero": "url('/src/assets/background_mob.gif')",
        "about-me": "linear-gradient(to right, #0f0c29, #302b63 , #24243e)",
        // "about-me": "linear-gradient(#000000, #434343, #000000)",
        "experience": "linear-gradient(to top, #e4e5e6, #95cbed, #e4e5e6)",
        "tech":"linear-gradient(to bottom, #000000, #290301, #000000)",
        // "tech": "linear-gradient(#000000, #434343, #000000)",
        // "edu":"linear-gradient(to bottom, #200122, #290301)",
        "edu":"linear-gradient(#000000, #434343, #000000)",
        "cert":"linear-gradient(#ada996, #f2f2f2, #dbdbdb, #eaeaea)",
      },
    },
  },
  plugins: [],
};
