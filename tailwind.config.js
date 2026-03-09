/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Blue palette
        royal: {
          50:  '#eef3fb',
          100: '#d5e2f6',
          200: '#b0c8ef',
          300: '#7da5e4',
          400: '#4a7dd5',
          500: '#2b5fc4',
          600: '#1e4aaa',
          700: '#193d8e',
          800: '#153072',
          900: '#0e1f4d',
          950: '#070e26',
        },
        // Gold palette
        gold: {
          50:  '#fdf9ec',
          100: '#faf0cc',
          200: '#f5de93',
          300: '#efc855',
          400: '#e8b224',
          500: '#c9940e',
          600: '#a97209',
          700: '#87550b',
          800: '#6e4310',
          900: '#5c3812',
          950: '#341c06',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        body: ['"Crimson Pro"', '"Georgia"', 'serif'],
        ui: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'maharlika-pattern': "url('/patterns/baybayin-pattern.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
