/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: "hsl(209, 23%, 22%)",
        darkBlue: "hsl(207, 26%, 17%)",
        veryDarkBlue: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
      boxShadow: {
        1: "rgba(0, 0, 0, 0.2) 0px 2px 8px",
      },
    },
  },
  plugins: [],
};
