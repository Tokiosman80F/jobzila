/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary-color':"#1967d2",
        'secondary-color':'#eaf1fb', 
        'custom-black':'#17171d',
        'custom-text-grey':'#3c3c3c'

      },
      fontFamily:{
        rubik:"'Rubik', sans-serif",
      }
    },
  },
  plugins: [
    function({addBase}){
      addBase({
        'body':{fontFamily:"'Rubik',sans-serif"}
      })
    }

  ],
};
