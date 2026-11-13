const ch = (v) => `rgb(var(${v}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: ch('--t-fg'),
        black: ch('--t-ink'),
        emerald: {
          DEFAULT: ch('--t-accent'),
          300: ch('--t-hi'),
          400: ch('--t-accent'),
          500: ch('--t-accent'),
          600: ch('--t-accent'),
          900: ch('--t-bg2'),
          950: ch('--t-bg2'),
        },
        cyan: {
          400: ch('--t-hi'),
          500: ch('--t-hi'),
          900: ch('--t-bg2'),
        },
        amber: {
          400: ch('--t-hi'),
          950: ch('--t-bg2'),
        },
      },
      fontFamily: {
        sans:  ['var(--font-manrope)','system-ui','sans-serif'],
        serif: ['var(--font-cormorant)','ui-serif','Georgia','serif'],
        mono:  ['var(--font-jetbrains)','"Fira Code"','ui-monospace','monospace'],
      },
    },
  },
  plugins: [],
};
