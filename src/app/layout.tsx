import type { Metadata } from 'next'
import './globals.css'

// ── 사이트 메타데이터 ──
export const metadata: Metadata = {
  title: 'Claude Code 입문 — 노모어매뉴얼',
  description: '비개발자도 이해하는 Claude Code 완전 입문 가이드',
}

// ── 루트 레이아웃 ──
// suppressHydrationWarning: 테마 스크립트의 서버/클라이언트 불일치 억제
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 핀치 줌 허용 — 모바일 접근성 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        {/* Pretendard 가변 폰트 — 한국어 최적화 */}
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
        {/* JetBrains Mono — 코드 블록용 */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* 테마 초기화 스크립트 — FOUC(Flash of Unstyled Content) 방지 */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
            })();
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
