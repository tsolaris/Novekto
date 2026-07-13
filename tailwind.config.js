/** @type {import('tailwindcss').Config} */
/*
  Novekto design tokens - "Midnight & Cyan".
  Deep slate-navy base with an electric cyan accent. Edit here; it propagates everywhere.
*/
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces (deep midnight slate)
        espresso: '#0B0F17', // page background
        surface: '#121826',  // elevated cards / panels
        surface2: '#1A2234', // brightest card layer
        hairline: '#232B3A', // borders & dividers
        // Electric cyan accent family (one family only)
        accent: {
          DEFAULT: '#22D3EE', // primary cyan
          light: '#38BDF8',   // azure
          gold: '#67E8F9',    // bright highlight (sparing)
          deep: '#0E7490',    // deep teal edge
        },
        // Text (cool)
        cream: '#EAF0FA',
        ash: '#9FB0C3',
        muted: '#7C8BA0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.04em' },
      maxWidth: { content: '1200px' },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 18px 60px -18px rgba(34,211,238,0.5)',
      },
      keyframes: {
        'aura-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.06)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'aura-pulse': 'aura-pulse 9s ease-in-out infinite',
        'spin-slow': 'spin-slow 44s linear infinite',
      },
    },
  },
  plugins: [],
}
