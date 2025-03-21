// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Par exemple : animations pour Radix UI
      keyframes: {
        'zoom-in-90': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'zoom-out-95': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
      },
      animation: {
        'zoom-in-90': 'zoom-in-90 0.3s ease-out',
        'zoom-out-95': 'zoom-out-95 0.3s ease-in',
      },
    },
  },
  plugins: [],
}
