import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { buildSidebarParts } from '@/lib/sidebar-parts'

// ── 홈 = ebook 표지 ──
// 좌측 크림 사이드바 + 우측 표지(대형 타이틀 + PART 목차)
export default function HomePage() {
  const parts = buildSidebarParts()
  const totalDocs = parts.reduce((n, p) => n + p.chapters.length, 0)

  // 첫 챕터 (시작하기 CTA 대상)
  const firstChapter = parts[0]?.chapters[0]

  return (
    <div className="app">
      <Sidebar parts={parts} activeHref="/" />

      <main className="reader">
        {/* 배경 대형 레터링 + cover */}
        <section className="cover">
          <div className="cover-bg-letters" aria-hidden="true">CC</div>

          <div className="cover-eyebrow">클로드코드 입문 · 2026 최신판</div>

          <h1 className="cover-mega">
            컴퓨터가 무서웠던 분도,<br />
            지금은 <span className="marker">AI에게 일을 시킵니다</span>.
          </h1>

          <p className="cover-sub">
            설치부터 실전까지. 40~60대 눈높이에 맞춰, 손으로 하나하나 짚어주는
            대한민국 유일의 Claude Code 입문 교실.
          </p>

          <div className="cover-badges">
            <span className="cover-badge"><span className="d" /> {totalDocs}편 가이드</span>
            <span className="cover-badge"><span className="d" /> 15편 실전 이야기</span>
            <span className="cover-badge"><span className="d" /> Mac · Windows 병기</span>
            <span className="cover-badge"><span className="d" /> 초5 수준 · 친근 대화체</span>
          </div>

          <div className="cover-cta-row">
            {firstChapter && (
              <Link href={firstChapter.href} className="cover-cta">
                📖 1장부터 시작하기
              </Link>
            )}
            <Link href="/docs/stories" className="cover-cta secondary">
              🌱 실전 이야기로 먼저 보기
            </Link>
          </div>

          {/* PART 목차 */}
          <nav className="cover-toc" aria-label="목차">
            {parts.map(part => {
              const firstCh = part.chapters[0]
              const href = firstCh ? firstCh.href : '/'
              return (
                <Link key={part.id} href={href} className="ct-part">
                  <span className="ct-num">{part.num.replace('PART ', '').replace('SPECIAL', '⭐')}</span>
                  <span>
                    <span className="ct-title">{part.title}</span>
                    <span className="ct-desc">{part.subtitle} · 총 {part.chapters.length}챕터</span>
                  </span>
                  <span className="ct-dots">· · · · ·</span>
                </Link>
              )
            })}
          </nav>
        </section>
      </main>
    </div>
  )
}
