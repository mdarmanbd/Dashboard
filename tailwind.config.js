/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorCarcol: '#DC3434',
        colorPrimary: '#262A41',
        colorSecondary: '#101010',
        lightGray : '#F9FAFC',
        lightBlack : '#273240',
        
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
      },
      width:{
        45 : '45%',
      },
      backgroundImage:{
        'pitha' : "url('https://images.deliveryhero.io/image/fd-bd/LH/wlig-listing.jpg?width=400&height=225')",
        'cafe' : "url('https://images.deliveryhero.io/image/fd-bd/LH/s8xy-listing.jpg?width=400&height=225')",
        'chicking' : "url('https://images.deliveryhero.io/image/fd-bd/LH/xe64-listing.jpg?width=400&height=225')",
        'kudos' : "url('https://images.deliveryhero.io/image/fd-bd/LH/huf9-listing.jpg?width=400&height=225')",
        'kabab' : "url('https://images.deliveryhero.io/image/fd-bd/LH/netd-listing.jpg?width=400&height=225')",
        'barger' : "url('https://images.deliveryhero.io/image/fd-bd/LH/e2qk-listing.jpg?width=400&height=225')",
        'nori' : "url('https://images.deliveryhero.io/image/fd-bd/LH/oxpe-listing.jpg?width=400&height=225')",
        'dalifarnce' : "url('https://images.deliveryhero.io/image/fd-bd/LH/k7tq-listing.jpg?width=400&height=225')",
      }
    },
  },
  plugins: [],
}
