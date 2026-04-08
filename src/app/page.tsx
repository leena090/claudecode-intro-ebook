import Link from 'next/link'
import PixelLogo from '@/components/PixelLogo'
import ThemeToggle from '@/components/ThemeToggle'
import CategoryTabs from '@/components/CategoryTabs'
import { getAllCategories, LEARNING_TABS } from '@/lib/docs'

// ── 홈페이지 ──
// 2026-04-08 리디자인:
//  - 14개 카테고리를 5개 학습 레벨 탭으로 그룹화 (압도감 제거)
//  - 하단에 stories(실제 사용 사례) 전용 히어로 섹션
//  - 정확한 카테고리 수 자동 계산 (기존 "6개" 하드코딩 버그 수정)
export default function HomePage() {
  const categories = getAllCategories()
  const totalDocs = categories.reduce((sum, c) => sum + c.docCount, 0)
  const totalCategories = categories.length

  // stories 카테고리 — 홈 하단 별도 섹션용 (탭과 분리)
  const storiesCategory = categories.find(c => c.slug === 'stories')

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
              Claude Code 입문자 교육용
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* 히어로 섹션 — 픽셀 로고 + 제목 + 설명 + 통계 */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-10 text-center">
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
          비개발자도 이해하는 Claude · Claude Code · 코워크 완전 입문
          <br />
          설치부터 실전 활용 사례까지 단계별로 배웁니다
        </p>
        {/* 통계 — 총 문서·카테고리 수 + 업데이트 날짜 (더 이상 하드코딩 없음) */}
        <div className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
          총 {totalDocs}개 가이드 · {totalCategories}개 카테고리 · 2026-04-08 최신
        </div>
      </section>

      {/* 학습 레벨 탭 + 카테고리 그리드 (클라이언트 컴포넌트) */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-12">
        <div
          className="text-center mb-6 text-sm font-semibold"
          style={{ color: 'var(--text-secondary)' }}
        >
          🎯 어디부터 시작할까요?
        </div>
        <CategoryTabs tabs={LEARNING_TABS} categories={categories} />
      </main>

      {/* 🎬 실제 사용 사례 10편 — 별도 섹션 (다른 배경으로 강조) */}
      {storiesCategory && storiesCategory.docCount > 0 && (
        <section
          className="border-t border-b py-14 mb-12"
          style={{
            background: 'var(--bg-secondary)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">🎬</div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: 'var(--text-primary)', letterSpacing: '-0.015em' }}
              >
                실제 사용 사례 {storiesCategory.docCount}편
              </h2>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                김과장 · 배차장 · 남부장 · 이대표 · 차대리 · 정여사 · 유작가 · 서사장 · 한대리…
                <br />
                그리고 고3 아들과 엄마의 진로 탐색까지.
                <br />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  클로드·클로드 코드·코워크로 실제 어떻게 일하는지 짧은 이야기로 만나보세요
                </span>
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                href="/docs/stories"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all"
                style={{
                  background: 'var(--accent-text)',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                📖 사용 사례 보러가기
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

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
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          @nomore_manual
        </a>
      </footer>
    </div>
  )
}
