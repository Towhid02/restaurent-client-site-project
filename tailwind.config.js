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
        'loginBg': "url(../public/assets/login.jpg)",
        'footerBg': "url(../public/assets/footer.jpg)",
        'bannerBg': "url(../public/assets/banner-5.jpg)",
        'detailBg': "url(../src/assets/back5.jpg)",
        'menuBg': "url(../public/assets/menu.jpg)",
        'experienceBg': "url(../public/assets/bg_experience.jpg)",
        'foodBg': "url(../public/assets/client.jpg)",
        'backBg': "url(../public/assets/banner-2.avif)",
        'addFoodBg': "url(../public/assets/addFood.jpg)",
        'headerBg' : "url(../public/assets/bannerBg.jpg)",
        'categoryBg' : "url(../public/assets/menu1.avif)",
        'cardBg' : "url(../public/assets/bg-2.avif)",
        'expertBg' : "url(../public/assets/bg4.avif)",
        'customerBg' : "url(../public/assets/bg5.jpg)",
        'sliderBg' : "url(../public/assets/sliderBg.jpg)"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}


