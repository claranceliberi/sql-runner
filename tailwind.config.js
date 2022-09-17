/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00111c",
          200: "#001523",
          300: "#001a2c",
          400: "#002137",
          500: "#00253e",
          600: "#002945",
        },
        text: "#f8f9fa",
      },
    },
  },
  plugins: [],
};
