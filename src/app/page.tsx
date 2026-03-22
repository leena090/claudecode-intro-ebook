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
      </footer>
    </div>
  )
}
