module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};