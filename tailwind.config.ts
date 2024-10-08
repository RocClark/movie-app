import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     // Add custom animation here
     keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '20%, 60%': { transform: 'translateX(-10px)' },
        '40%, 80%': { transform: 'translateX(10px)' },
      },
    },
    animation: {
      shake: 'shake 0.5s ease-in-out',
    },
  },
},
  plugins: [],
}
export default config
