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
          gray: "bg-gray-900",
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "6px", // Aplicado a todas as telas
          sm: "20px", // Aumenta o padding para telas maiores que `sm`
        },
        screens: {
          sm: "476px",
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
