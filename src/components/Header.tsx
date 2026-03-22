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
        {/* 테마 전환 버튼 */}
        <ThemeToggle />
      </div>
    </header>
  )
}
