import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blackout: {
          DEFAULT: '#0A0A0A',
          950: '#050505',
          900: '#101010',
          800: '#1B1B1B',
          700: '#272727',
          600: '#3A3A3A',
        },
        blood: {
          DEFAULT: '#E01B2E',
          light: '#FF4757',
          dark: '#9C0F1E',
        },
        gold: {
          DEFAULT: '#D8A63C',
          light: '#F2C766',
        },
        bone: '#F4F1EA',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'blood-gradient': 'linear-gradient(135deg, #9C0F1E 0%, #E01B2E 55%, #FF4757 100%)',
        'gold-gradient': 'linear-gradient(135deg, #A6772A 0%, #D8A63C 50%, #F2C766 100%)',
        'stripes':
          'repeating-linear-gradient(-45deg, rgba(224,27,46,0.08) 0px, rgba(224,27,46,0.08) 2px, transparent 2px, transparent 18px)',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;
