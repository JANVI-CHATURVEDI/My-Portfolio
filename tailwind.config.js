/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF9F5',
          100: '#FAF7F2',
          200: '#F3EFE6',
        },
        ink: {
          800: '#262322',
          900: '#1C1917',
          950: '#171615',
        },
        terracotta: {
          500: '#EA580C',
          600: '#C2410C',
          700: '#9A3412',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        'prose-narrow': '48rem', // ~768px (max-w-3xl)
        'prose-compact': '42rem', // ~672px (max-w-2xl)
      },
    },
  },
  plugins: [],
}
