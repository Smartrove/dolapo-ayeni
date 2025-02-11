/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
       sm_tab:"480px",
       tab:"920px",
       laptop:"1440px"
     },
     
     colors: {
       "pry-black": "#131723",
        "pry-blue": "#0286F1",
       
     },
     fontFamily: {
       bebas: "Bebas Neue, sans-serif",
       poppins: "Poppins, sans-serif",
       stixTwo: "STIX Two Text, sans-serif",
       manrope: "Manrope, sans-serif",
       pridi: "Pridi, serif",
     },
    },
  },
  plugins: [require("daisyui")],
};
