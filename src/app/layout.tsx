import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '최신 클로드 백과사전 — 노모어매뉴얼',
  description: 'Claude의 모든 기능을 40~60대 눈높이로 풀어낸 최신 백과사전 · 웹/코드/코워크/디자인 전부',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        {/* NOMORE MANUAL v2 — warm paper 폰트 트리오 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Nanum+Gothic:wght@400;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* A-/A/A+ 폰트 크기 · 레거시 data-theme 정리 — FOUC 방지 */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){
            try {
              var fs = localStorage.getItem('fs') || 'med';
              document.documentElement.setAttribute('data-fs', fs);
              // 디자인 전환 — 기존 다크 테마 잔상 정리
              localStorage.removeItem('theme');
              document.documentElement.removeAttribute('data-theme');
            } catch(_) {}
          })();`
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
