import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '150%': '150%',
      '100%': '100%',
    },
    colors: {
      primary: {
        100: '#F2B705',
        200: '#F28F16',
        500: '#D9601A',
        700: '#BF2B0A',
        900: '#8C0303',
      },
      gray: '#8c8c8c',
      tundora: '#444444',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      carbon: '#232323',
      white: '#ffffff'
    },
    extend: {
      keyframes: {
        infinite: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-180px * 6))' },
        }
      },
      padding: {
        btx: '69px',
        bty: '19px',
      },
      aspectRatio: {
        'half-glass': '320 / 1600',
        'glass': '740 / 1600',
        'logo': '5 / 3',
        'banner': '64 / 25',
        'beer': '382 / 626',
        'mini-glass': '66 / 116',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shadow-left": "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        "shadow-right": "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        "shadow-bottom": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        "shadow-top": "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        "shadow-left-intense": "linear-gradient(270deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 50%)"
      },
      boxShadow: {
        "inner": "0px 4px 4px 0px rgba(0,0,0,0.24) inset;",
        "selector": "0px 4px 4px 0px rgba(0,0,0,0.24);",
        "footer": "-1px -26px 38px 6px rgba(0,0,0,1);",
        "carousel": "0 3px 10px -3px rgba(0, 0, 0, 0.3)",
        "legal": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "stripe": "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"

      }
    },
  },
  plugins: [],
};
export default config;

