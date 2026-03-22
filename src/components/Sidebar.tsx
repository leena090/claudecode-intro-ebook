import Link from 'next/link'
import { CATEGORIES, getDocsByCategory } from '@/lib/docs'

interface SidebarProps {
  category: string    // 현재 카테고리 slug
  activeSlug: string  // 현재 활성화된 문서 slug
}

// ── 사이드바 컴포넌트 ──
// 데스크탑(lg 이상)에서만 표시, 카테고리 내 문서 목록 네비게이션
export default function Sidebar({ category, activeSlug }: SidebarProps) {
  const docs = getDocsByCategory(category)
  const catMeta = CATEGORIES[category]

  return (
    <aside className="hidden lg:block w-60 shrink-0">
      {/* sticky로 고정 — 스크롤해도 사이드바 유지 */}
      <div className="sticky top-20">
        {/* 카테고리 헤더 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="icon-box w-6 h-6 rounded-md text-sm">
            {catMeta?.icon || '📄'}
          </div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            {catMeta?.title || category}
          </h3>
        </div>

        {/* 문서 링크 목록 — 활성 슬러그는 sidebar-link-active 클래스 적용 */}
        <nav className="space-y-0.5">
          {docs.map(doc => (
            <Link
              key={doc.slug}
              href={`/docs/${category}/${doc.slug}`}
              className={`sidebar-link ${activeSlug === doc.slug ? 'sidebar-link-active' : ''}`}
            >
              {doc.title}
            </Link>
          ))}
        </nav>

        {/* 카테고리 전체 목록으로 돌아가는 링크 */}
        <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
          <Link
            href={`/docs/${category}`}
            className="breadcrumb-link flex items-center gap-1 text-xs"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            전체 목록
          </Link>
        </div>
      </div>
    </aside>
  )
}
