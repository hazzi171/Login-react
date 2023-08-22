/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#2148c0",
        white: "#fff",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
