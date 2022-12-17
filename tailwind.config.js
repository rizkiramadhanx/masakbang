/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: { sans: ['var(--font-inter)'] },
    },
  },
};
