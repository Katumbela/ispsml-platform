/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4396BAFF',
          DEFAULT: '#0045A4',
          dark: '#005B99',
          footer: '#212121',
        },
        secondary: {
          light: '#FFB74D',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
      },
      containers: {
        center: true,
        padding: "10px",
        screens: {
          sm: "776px",
          md: "968px",
          lg: "1192px",
          xl: "1400px",
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;