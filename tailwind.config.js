/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Lora', 'serif'],
        
      },
      colors: {
      
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
