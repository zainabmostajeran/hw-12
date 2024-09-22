/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
      "green":"#4CAF4F",
      gray:"#F5F7FA",
      black:"#263238",
      text:"#717171",
    },
    fontFamily:{
      "Inter":["Inter", "sans-serif"]
    }
    },
  },
  plugins: [],
}
