/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold:     { 50:'#FDF8EC', 300:'#E8C97A', 500:'#C9A227', 700:'#8A6D18', 900:'#3A2D0A' },
        obsidian: { 50:'#F2F0ED', 300:'#8C8880', 500:'#4A4640', 700:'#28251F', 900:'#0F0D0B' },
        ivory:    { 50:'#FEFCF7', 300:'#F5EDD6', 500:'#EAD9A8', 700:'#C9B36C', 900:'#6B5A27' },
        sage:     { 50:'#EEF3ED', 300:'#9DB89A', 500:'#5A8055', 700:'#2D5229', 900:'#0F1E0D' },
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '28px',
        full: '9999px',
      },
      boxShadow: {
        'gold':    '0 0 24px rgba(201,162,39,0.22)',
        'gold-lg': '0 0 48px rgba(201,162,39,0.32)',
        'card':    '0 8px 40px rgba(10,8,4,0.18)',
        'card-lg': '0 16px 64px rgba(10,8,4,0.24)',
        'glass':   '0 4px 32px rgba(10,8,4,0.12)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E8C97A 50%, #C9A227 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0F0D0B 0%, #28251F 100%)',
        'hero-overlay':  'linear-gradient(to bottom, rgba(15,13,11,0.3) 0%, rgba(15,13,11,0.65) 100%)',
      },
    },
  },
  plugins: [],
}
