import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Gowun Dodum', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        sans: ['Nanum Gothic', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: '#D97706',
        'brand-deep': '#92400E',
        'brand-soft': '#FEF3C7',
        'brand-mid': '#FDBA74',
        ink: '#1E1B16',
      },
      maxWidth: {
        '3xl': '768px',
      },
    },
  },
}

export default config
