module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#eab308",

          "secondary": "#facc15",

          "accent": "#3b82f6",

          "neutral": "#3D4451",

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
    },
  },
  plugins: [require("daisyui")],
}
