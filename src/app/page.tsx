import Link from 'next/link'
import PixelLogo from '@/components/PixelLogo'
import ThemeToggle from '@/components/ThemeToggle'
import { getAllCategories } from '@/lib/docs'

// ── 홈페이지 ──
// 카테고리 그리드 레이아웃 — 6개 카테고리 카드 표시
export default function HomePage() {
  const categories = getAllCategories()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* 헤더 — sticky 고정 */}
      <header
        className="sticky top-0 z-50 h-14 border-b"
        style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PixelLogo size="sm" />
            <span className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
              Claude Code 입문
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* 히어로 섹션 — 픽셀 로고 + 제목 + 설명 */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-12 text-center">
        <div className="flex justify-center mb-6">
          <PixelLogo size="lg" />
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          Claude Code 입문 가이드
        </h1>
        <p className="text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
          비개발자도 이해하는 Claude Code 완전 입문<br />
          설치부터 실전 활용까지 단계별로 배웁니다
        </p>
        {/* 총 문서 수 표시 */}
        <div className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
          총 {categories.reduce((sum, c) => sum + c.docCount, 0)}개 가이드 · 6개 카테고리
        </div>
      </section>

      {/* 카테고리 그리드 — 2열 반응형 */}
      <main className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/docs/${cat.slug}`}
              className="card-hover group p-5 rounded-xl border"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border)',
                textDecoration: 'none',
              }}
            >
              {/* 아이콘 + 문서 수 뱃지 */}
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{cat.icon}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
                >
                  {cat.docCount}개
                </span>
              </div>
              <h2
                className="font-semibold text-[15px] mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {cat.title}
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer
        className="border-t py-6 text-center text-sm"
        style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
      >
        <div className="flex justify-center mb-2">
          <PixelLogo size="sm" />
        </div>
        <p>© 2026 노모어매뉴얼 · Claude Code 입문 가이드</p>
        <a
          href="https://youtube.com/@nomore_manual"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-2 text-xs transition-colors"
          style={{ color: 'var(--accent-text)' }}
        >
          {/* 유튜브 아이콘 */}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          @nomore_manual
        </a>
      </footer>
    </div>
  )
}
