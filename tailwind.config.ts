import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800',
        secondary: '#1e40af',
        dark: '#0f172a',
        light: '#f8fafc',
        accent: '#FF9500',
        success: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-solar': 'linear-gradient(135deg, #FFB800 0%, #FF9500 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
      },
      boxShadow: {
        'solar': '0 10px 30px rgba(255, 184, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
