import Link from 'next/link'
import PixelLogo from './PixelLogo'
import ThemeToggle from './ThemeToggle'

// ── 브레드크럼 아이템 타입 ──
interface BreadcrumbItem {
  label: string
  href?: string // href 없으면 현재 페이지(클릭 불가)
}

// ── 헤더 컴포넌트 ──
// sticky top 고정, 브레드크럼 네비게이션 + 테마 토글 포함
export default function Header({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItem[] }) {
  return (
    <header
      className="sticky top-0 z-50 h-14 border-b"
      style={{
        background: 'var(--bg-primary)',
        borderColor: 'var(--border)',
        backdropFilter: 'blur(8px)', // 스크롤 시 배경 블러 효과
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
        {/* 브레드크럼 네비게이션 — 홈 > 카테고리 > 문서 구조 */}
        <nav className="flex items-center gap-2 text-sm min-w-0 overflow-hidden">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <PixelLogo size="sm" />
          </Link>
          <Link href="/" className="font-semibold text-[15px] shrink-0" style={{ color: 'var(--text-primary)' }}>
            Claude Code 입문
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2 min-w-0">
              {/* 구분자 */}
              <span style={{ color: 'var(--border)', fontSize: '16px' }}>/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="breadcrumb-link shrink-0">
                  {crumb.label}
                </Link>
              ) : (
                /* 현재 페이지 — 클릭 불가, 텍스트 잘림 처리 */
                <span className="font-medium truncate" style={{ color: 'var(--text-primary)', fontSize: '14px' }}>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        {/* 우측 — 브랜드 링크 + 테마 전환 */}
        <div className="flex items-center gap-3 shrink-0">
          {/* 노모어매뉴얼 브랜드 링크 — 항상 노출 */}
          <a
            href="https://youtube.com/@nomore_manual"
            target="_blank"
            rel="noopener noreferrer"
            className="nmm-brand-link flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          >
            {/* 유튜브 아이콘 */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            노모어매뉴얼
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
