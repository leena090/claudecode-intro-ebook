'use client'

import Link from 'next/link'

// ── 간이 헤더 (홈·용어사전·로그인 등 사이드바가 없는 페이지용) ──
// 사이드바가 있는 docs 페이지에서는 .reader-top 구조가 헤더 역할을 대신함.
interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Header({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItem[] }) {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(250,247,242,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line-soft)',
        height: 64,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '0 32px', height: 64 }}>
        <nav className="flex items-center gap-3 min-w-0">
          <Link href="/" className="brand-row" style={{ margin: 0 }}>
            <div className="brand-stamp">CC</div>
            <div className="brand-text">NOMORE MANUAL</div>
          </Link>
          {breadcrumbs.length > 0 && (
            <span className="breadcrumb" style={{ marginLeft: 8 }}>
              {breadcrumbs.map((c, i) => (
                <span key={i}>
                  <span className="bc-sep">/</span>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="bc-current">{c.label}</span>}
                </span>
              ))}
            </span>
          )}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://youtube.com/@nomore_manual"
            target="_blank"
            rel="noopener noreferrer"
            className="nmm-brand-link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
            </svg>
            노모어매뉴얼
          </a>
          <button
            onClick={async () => {
              await fetch('/api/auth', { method: 'DELETE' })
              window.location.href = '/login'
            }}
            style={{
              background: 'transparent', border: 0, cursor: 'pointer',
              padding: '6px 8px', color: 'var(--muted)',
            }}
            title="로그아웃"
            aria-label="로그아웃"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
