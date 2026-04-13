import Link from 'next/link'
import PixelLogo from '@/components/PixelLogo'
import ThemeToggle from '@/components/ThemeToggle'
import GlossarySearch from '@/components/GlossarySearch'

// ── 한국어 용어 사전 페이지 ──
// 40~60대 왕초보를 위한 Claude Code 용어 사전
// 실시간 검색 + 가나다/알파벳 순 정렬 + 일상 비유
export default function GlossaryPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* 헤더 */}
      <header
        className="sticky top-0 z-50 h-14 border-b"
        style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
              <PixelLogo size="sm" />
              <span className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
                Claude Code 입문자 교육용
              </span>
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
              용어 사전
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-2xl mx-auto px-5 sm:px-8 pt-10 pb-16">
        {/* 페이지 헤더 */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">📖</div>
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            한국어 용어 사전
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Claude Code에서 나오는 어려운 용어를 쉬운 말과 비유로 풀어놨어요
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            가이드를 읽다가 모르는 단어가 나오면 여기서 검색하세요
          </p>
        </div>

        {/* 검색 + 용어 목록 (클라이언트 컴포넌트) */}
        <GlossarySearch />

        {/* 하단 네비게이션 */}
        <div
          className="mt-12 pt-6 border-t flex justify-between items-center"
          style={{ borderColor: 'var(--border)' }}
        >
          <Link
            href="/"
            className="text-sm transition-colors"
            style={{ color: 'var(--accent-text)', textDecoration: 'none' }}
          >
            ← 홈으로 돌아가기
          </Link>
          <Link
            href="/docs/reference"
            className="text-sm transition-colors"
            style={{ color: 'var(--accent-text)', textDecoration: 'none' }}
          >
            전체 레퍼런스 →
          </Link>
        </div>
      </main>
    </div>
  )
}
