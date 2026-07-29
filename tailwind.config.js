/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F9F3E8',
          200: '#F5EFE6',
          300: '#EDE3D4',
          400: '#DDD0BB',
        },
        forest: {
          50: '#E8F0EC',
          100: '#C5D9CB',
          200: '#8FB5A0',
          300: '#5A9175',
          400: '#2E7050',
          500: '#1B4D35',
          600: '#163D2A',
          700: '#112E20',
          800: '#0C2018',
          900: '#081510',
        },
        gold: {
          100: '#F7EDD0',
          200: '#EDD898',
          300: '#DFC068',
          400: '#C9A84C',
          500: '#B8941E',
          600: '#9A7C18',
          700: '#7D6413',
          800: '#614D0E',
          900: '#45370A',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
