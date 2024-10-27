import {  addDynamicIconSelectors } from "@iconify/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#22BBDF",
        secondary: "#15ABFFFF",
        blue:{
          primary:'#118BAE',
          secondary:'#1381A7'
        },
        background:{
          primary:'#05151D',//dark mode
          secondary:'#092330',
          tertiary:'#092330',
        },
        tertiary: "",
        Fire: "#FF9E06",
        Success: '#288747',
        Warning: 'rgba(220, 156, 34, 1)',
        Error: 'rgba(220, 34, 34, 1)',
      },
    }
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
  darkMode: 'class',
};
