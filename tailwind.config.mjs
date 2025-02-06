/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: 'Source Sans 3',
        serif: ['Source Serif 4 Variable', 'ui-serif', 'Georgia', 'serif'],
        mono: [
          'Fira Mono',
          'ui-monospace',
          'Cascadia Mono',
          'Segoe UI Mono',
          'Menlo',
          'monospace',
        ],
        display: [
          'Rubik Mono One',
          'Source Sans 3',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        script: ['Marck Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
