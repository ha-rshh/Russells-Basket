/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    backgroundImage: {
      "hero-pattern": "url('src/assets/endless.svg')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
  darkMode: "class",
};
