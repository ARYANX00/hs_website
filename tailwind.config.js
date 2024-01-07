/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/images/Image2.png')",
      },
      fontFamily: {
        konstarica: "Konstarica, sans-serif",
        kurye: "Kurye, sans-serif",
      },
      colors: {},
    },
  },
  plugins: [],
};
