/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
        mooli : "'Mooli', sans-serif",
        script : "Style Script', cursive",

      },
      backgroundImage : {
        'navBg': "url(../src/assets/nav.png)",
        'footerBg': "url(../public/assets/footer.jpg)",
        'bannerBg': "url(../public/assets/bannner-rest.jpg)",
        'detailBg': "url(../src/assets/back5.jpg)",
        'menuBg': "url(../public/assets/menu.jpg)",
        'slider_1': "url(../../public/assets/slider_1.avif)",
        'slider_2': "url(../../public/assets/slider_2.avif)",
        'slider_3': "url(../../public/assets/slider_3.avif)",
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}


