module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Deep Space Infrastructure Color Palette
        primary: "#0A0E1A", // Deep space foundation, terminal authenticity
        secondary: "#1A1F2E", // Elevated surfaces, subtle depth layering
        accent: "#00E0FF", // Interactive elements, digital precision focus
        background: "#0F1419", // Content canvas, optimal code readability
        surface: "#252A35", // Component containers, gentle elevation
        text: {
          primary: "#FFFFFF", // Maximum readability, crisp contrast
          secondary: "#A0A9B8", // Clear hierarchy, reduced emphasis
        },
        success: "#00FF88", // System health, positive metrics
        warning: "#FFB000", // Attention without alarm, status indicators
        error: "#FF4757", // Critical alerts, helpful problem identification
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'], // Headlines and CTAs
        sans: ['IBM Plex Sans', 'sans-serif'], // Body text
        'mono-accent': ['IBM Plex Mono', 'monospace'], // Code snippets and accents
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      boxShadow: {
        'glow': '0 4px 20px rgba(0, 224, 255, 0.1)',
        'terminal': 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
        'glow-lg': '0 8px 32px rgba(0, 224, 255, 0.15)',
        'glow-xl': '0 12px 48px rgba(0, 224, 255, 0.2)',
      },
      animation: {
        'terminal-cursor': 'terminal-cursor 1s infinite',
        'count-up': 'count-up 1200ms ease-out',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        'terminal-cursor': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'count-up': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slideUp': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'glowPulse': {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(0, 224, 255, 0.1)' },
          '50%': { boxShadow: '0 8px 32px rgba(0, 224, 255, 0.2)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'terminal': '0.375rem',
      },
      backdropBlur: {
        'terminal': '8px',
      },
      backgroundImage: {
        'gradient-terminal': 'linear-gradient(135deg, #0A0E1A, #1A1F2E)',
        'gradient-accent': 'linear-gradient(135deg, #00E0FF, #00FF88)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}