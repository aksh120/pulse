/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pulse: {
          bg: '#FFFFFF',
          surface: '#F7F7F5',
          primary: '#111111',
          secondary: '#686868',
          border: '#E7E7E4',
          accent: '#635BFF',
          'accent-hover': '#5048D8',
          success: '#22A06B',
          warning: '#D97706',
          danger: '#E5484D',
          // Dark mode counterparts
          'dark-bg': '#0B0C0E',
          'dark-surface': '#14161A',
          'dark-card': '#191B21',
          'dark-border': '#252830',
          'dark-primary': '#F3F4F6',
          'dark-secondary': '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'dashboard': '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'dashboard-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'card': '16px',
        'subtle': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'shimmer': 'shimmer 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'radar': 'radar 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'aurora-1': 'auroraOne 18s ease-in-out infinite alternate',
        'aurora-2': 'auroraTwo 14s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        radar: {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        auroraOne: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) rotate(18deg) scale(1.15)' },
          '100%': { transform: 'translate(-20px, 25px) rotate(-12deg) scale(0.95)' },
        },
        auroraTwo: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(-50px, 20px) rotate(-20deg) scale(1.2)' },
          '100%': { transform: 'translate(30px, -40px) rotate(15deg) scale(0.9)' },
        },
      }
    },
  },
  plugins: [],
}
