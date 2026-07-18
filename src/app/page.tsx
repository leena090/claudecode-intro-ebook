import Link from 'next/link'
import { LEARNING_TABS, getAllCategories, getDocsByCategory } from '@/lib/docs'
import { buildSidebarParts } from '@/lib/sidebar-parts'
import SearchButton from '@/components/SearchButton'

function cleanTitle(title: string): string {
  return title.replace(/^\[.*?\]\s*/g, '').trim()
}

export default function HomePage() {
  const allCats = getAllCategories()
  const latestDocs = getDocsByCategory('next')
    .slice()
    .sort((a, b) => (b.order ?? 0) - (a.order ?? 0))
    .slice(0, 6)
  const stories = getDocsByCategory('stories').slice(0, 6)
  const parts = buildSidebarParts()
  const totalDocs = allCats.reduce((n, c) => n + c.docCount, 0)
  const firstChapter = parts[0]?.chapters[0]

  return (
    <div className="wz-root">

      {/* ── TOPBAR ── */}
      <header className="wz-topbar">
        <div className="wz-topbar-inner">
          <Link href="/" className="wz-topbar-brand">
            <span className="wz-stamp">CE</span>
            <span className="wz-brand-text">클로드 백과사전</span>
          </Link>

          <nav className="wz-topbar-nav" aria-label="카테고리 탐색">
            {LEARNING_TABS.slice(0, 5).map(tab => (
              <Link
                key={tab.id}
                href={`/docs/${tab.categories[0]}`}
                className="wz-topbar-link"
              >
                {tab.icon} {tab.title}
              </Link>
            ))}
            <Link href="/docs/stories" className="wz-topbar-link">
              🎬 실전 이야기
            </Link>
          </nav>

          <div className="wz-topbar-actions">
            <SearchButton />
            <a
              href="https://www.youtube.com/@NomoreManual"
              target="_blank"
              rel="noopener noreferrer"
              className="wz-yt-btn"
              aria-label="유튜브 채널"
            >
              ▶ 유튜브
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="wz-hero">
        <div className="wz-hero-inner">
          <div className="wz-hero-main">
            <div className="wz-eyebrow">최신 클로드 백과사전 · 2026년판 · {totalDocs}편 가이드</div>
            <h1 className="wz-headline">
              컴퓨터가 무서웠던 분도,<br />
              <span className="wz-mark">AI에게 일을 시킵니다</span>.
            </h1>
            <p className="wz-hero-sub">
              Claude의 모든 기능을 40~60대 눈높이로 정리한 백과사전.<br />
              초5 수준 친근한 대화체로 — 찾고 싶은 건 반드시 있습니다.
            </p>
            <div className="wz-hero-cta-row">
              {firstChapter && (
                <Link href={firstChapter.href} className="wz-cta-primary">
                  📖 1장부터 시작하기
                </Link>
              )}
              <Link href="/docs/stories" className="wz-cta-secondary">
                🌱 실전 이야기 먼저 보기
              </Link>
            </div>
          </div>

          <div className="wz-hero-quick">
            <div className="wz-quick-label">빠른 탐색</div>
            <div className="wz-quick-grid">
              {allCats.slice(0, 8).map(cat => (
                <Link key={cat.slug} href={`/docs/${cat.slug}`} className="wz-quick-card">
                  <span className="wz-quick-icon">{cat.icon}</span>
                  <span className="wz-quick-title">{cat.title}</span>
                  <span className="wz-quick-count">{cat.docCount}편</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST UPDATES ── */}
      <section className="wz-section">
        <div className="wz-section-inner">
          <div className="wz-section-head">
            <h2 className="wz-section-title">🆕 최신 업데이트</h2>
            <Link href="/docs/next" className="wz-see-all">전체보기 →</Link>
          </div>
          <div className="wz-update-grid">
            {latestDocs.map(doc => (
              <Link
                key={doc.slug}
                href={`/docs/next/${doc.slug}`}
                className="wz-update-card"
              >
                {doc.lastUpdated && (
                  <span className="wz-update-date">{doc.lastUpdated}</span>
                )}
                <h3 className="wz-update-title">{cleanTitle(doc.title)}</h3>
                <p className="wz-update-desc">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING PATHS ── */}
      <section className="wz-section wz-section--alt">
        <div className="wz-section-inner">
          <div className="wz-section-head">
            <h2 className="wz-section-title">📚 학습 경로</h2>
            <span className="wz-section-sub">내 수준에 맞는 코스를 선택하세요</span>
          </div>
          <div className="wz-paths-grid">
            {LEARNING_TABS.map((tab, i) => (
              <Link
                key={tab.id}
                href={`/docs/${tab.categories[0]}`}
                className={`wz-path-card${tab.id === 'design' ? ' wz-path-card--special' : ''}`}
              >
                <span className="wz-path-step">{i < 5 ? `STEP ${i + 1}` : 'SPECIAL ★'}</span>
                <span className="wz-path-icon">{tab.icon}</span>
                <h3 className="wz-path-title">{tab.title}</h3>
                <p className="wz-path-sub">{tab.subtitle}</p>
                <span className="wz-path-cats">{tab.categories.length}개 카테고리</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL CATEGORIES ── */}
      <section className="wz-section">
        <div className="wz-section-inner">
          <div className="wz-section-head">
            <h2 className="wz-section-title">🗂️ 전체 카테고리</h2>
            <span className="wz-section-sub">총 15개 카테고리 · {totalDocs}편 가이드</span>
          </div>
          <div className="wz-cat-grid">
            {allCats.map(cat => (
              <Link key={cat.slug} href={`/docs/${cat.slug}`} className="wz-cat-card">
                <span className="wz-cat-icon">{cat.icon}</span>
                <div className="wz-cat-body">
                  <h3 className="wz-cat-title">{cat.title}</h3>
                  <p className="wz-cat-desc">{cat.description}</p>
                </div>
                <span className="wz-cat-count">{cat.docCount}편</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="wz-section wz-section--alt">
        <div className="wz-section-inner">
          <div className="wz-section-head">
            <h2 className="wz-section-title">🎬 실전 사용 이야기</h2>
            <Link href="/docs/stories" className="wz-see-all">전체보기 →</Link>
          </div>
          <div className="wz-stories-grid">
            {stories.map(doc => (
              <Link
                key={doc.slug}
                href={`/docs/stories/${doc.slug}`}
                className="wz-story-card"
              >
                <h3 className="wz-story-title">{cleanTitle(doc.title)}</h3>
                <p className="wz-story-desc">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="wz-footer">
        <div className="wz-footer-inner">
          <div className="wz-footer-brand">
            <span className="wz-stamp wz-stamp--sm">CE</span>
            <span className="wz-footer-title">클로드 백과사전</span>
          </div>
          <p className="wz-footer-sub">
            40~60대 눈높이로 정리한 Claude 완전 가이드 · Nomore Manual
          </p>
          <div className="wz-footer-nav">
            {allCats.slice(0, 8).map(cat => (
              <Link key={cat.slug} href={`/docs/${cat.slug}`} className="wz-footer-link">
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
