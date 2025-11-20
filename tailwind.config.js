/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#0a0a0a',
        'slate-grey': '#1a1a1a',
        'neon-cyan': '#00f3ff',
        'survival-amber': '#ffaa00',
        'danger-crimson': '#ff003c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
