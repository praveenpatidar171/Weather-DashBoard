
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage : {
        'farmer' : "url('/src/assets/farmer.jpeg')",
        'traveller' : "url('/src/assets/traveller.avif')",
        'event' : "url('/src/assets/event.jpg')",

      }
    },
  },
  plugins: [],
}

