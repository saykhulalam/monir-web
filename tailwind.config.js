/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pera: ["'Tiro Bangla' , serif;"],
        bangla: ["'Anek Bangla' , sans-serif;"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
