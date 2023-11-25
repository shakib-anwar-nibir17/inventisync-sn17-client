/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-main": "#FFD42E",
        "custom-main2": "#4FB5FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
