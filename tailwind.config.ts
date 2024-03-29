import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-white":"linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))"
      },
      backgroundColor: {
        'rgba-blue': 'rgba(10, 104, 255, 0.2)',
      },
      colors: {
        'rgb-gray': 'rgb(128, 128, 137)',
      },
    },
    screens: {
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
