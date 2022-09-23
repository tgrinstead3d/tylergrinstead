module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#333",

          // "primary": "#ff7849",

          "secondary": "#f3f3f3",

          "accent": "#303030",

          "neutral": "#fff",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      alt: ['Raleway', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'herobg': "url('./assets/herobg.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}
