import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#E8EEF7',
          100: '#C5D2E8',
          200: '#8FAECE',
          300: '#5888B3',
          400: '#2D6398',
          500: '#1B3A5C',
          600: '#163050',
          700: '#102444',
          800: '#0B1933',
          900: '#0F2044',
          950: '#060D20',
        },
        gold: {
          50:  '#FDF9F0',
          100: '#F5EDD8',
          200: '#EBD9AF',
          300: '#E0C284',
          400: '#D4AB5A',
          500: '#C9A96E',
          600: '#B8903A',
          700: '#9A762E',
          800: '#7C5D23',
          900: '#5E4619',
        },
        cream: '#F8F6F1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
