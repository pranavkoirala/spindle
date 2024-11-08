/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Noto Sans Mono", "IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
