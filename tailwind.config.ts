import type { Config } from 'tailwindcss'

// Tailwind CSS 설정 — 폰트, 컬러, 사이즈 확장
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: '#DA7756',
      },
      maxWidth: {
        '3xl': '768px',
      },
    },
  },
}

export default config
