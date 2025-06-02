/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Optional: if using Next.js app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],

}
