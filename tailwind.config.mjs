/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'container',
    'mx-auto',
    'w-screen',
    'h-screen',
    'bg-gradient-to-b',
    'bg-gradient-to-t',
    'from-sky-500',
    'to-indigo-500',
    'bg-linear-to-bl',
    'from-violet-500',
    'to-fuchsia-500',
    'h-px',
    'h-96',
    'h-full',
    'px-1',
    'px-2',
    'px-4',
    'px-6',
    'md:px-2',
    'md:px-4',
    'md:px-2',
    'xl:px-6',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
};
