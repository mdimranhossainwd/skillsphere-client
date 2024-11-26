/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite GB S", "cursive"],
        arima: ["Arima", "system-ui"],
      },
      colors: {
        primary: "#7ed56f",
        secondary: "#28b485",
      },
    },
  },
  plugins: [require("daisyui")],
};
