'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

// ── 사이드바 데이터 구조 (서버에서 precompute) ──
export interface SidebarChapter {
  title: string
  href: string          // "/docs/<category>/<slug>"
  slug: string
  category: string
  num: string           // "1.1", "1.2" ...
}
export interface SidebarPart {
  id: string
  num: string           // "PART 1"
  title: string         // "클로드 왕초보"
  subtitle: string
  chapters: SidebarChapter[]
}

interface SidebarProps {
  parts: SidebarPart[]
  activeHref?: string   // 현재 페이지 href
}

// ── 크림 목차 사이드바 ──
// 검색 · 읽음 체크 · 진행바 · A-/A/A+ · 유튜브 CTA · 모바일 햄버거
export default function Sidebar({ parts, activeHref }: SidebarProps) {
  const [query, setQuery] = useState('')
  const [readDocs, setReadDocs] = useState<Set<string>>(new Set())
  const [fs, setFs] = useState<'small' | 'med' | 'large'>('med')
  const [mobileOpen, setMobileOpen] = useState(false)

  // localStorage 부트 — 읽음 기록 + 폰트 크기
  useEffect(() => {
    try {
      const raw = localStorage.getItem('read-docs')
      if (raw) {
        const arr = JSON.parse(raw) as string[]
        setReadDocs(new Set(arr))
      }
      const savedFs = (localStorage.getItem('fs') || 'med') as 'small' | 'med' | 'large'
      setFs(savedFs)
    } catch { /* ignore */ }
  }, [])

  // 현재 페이지 자동 체크 (활성 href가 바뀔 때 읽음 처리)
  useEffect(() => {
    if (!activeHref) return
    setReadDocs(prev => {
      if (prev.has(activeHref)) return prev
      const next = new Set(prev)
      next.add(activeHref)
      try { localStorage.setItem('read-docs', JSON.stringify([...next])) } catch {}
      return next
    })
  }, [activeHref])

  // 폰트 크기 DOM 반영 + 저장
  const applyFs = (v: 'small' | 'med' | 'large') => {
    setFs(v)
    document.documentElement.setAttribute('data-fs', v)
    try { localStorage.setItem('fs', v) } catch {}
  }

  // 진행률
  const totalChapters = useMemo(
    () => parts.reduce((n, p) => n + p.chapters.length, 0),
    [parts]
  )
  const readCount = useMemo(
    () => [...readDocs].filter(h => h.startsWith('/docs/')).length,
    [readDocs]
  )
  const progressPct = totalChapters > 0
    ? Math.min(100, Math.round((readCount / totalChapters) * 100))
    : 0

  // 검색 필터 — 제목 기준
  const q = query.trim().toLowerCase()
  const filteredParts = useMemo(() => {
    if (!q) return parts
    return parts
      .map(p => ({
        ...p,
        chapters: p.chapters.filter(c =>
          c.title.toLowerCase().includes(q) ||
          c.num.includes(q)
        ),
      }))
      .filter(p => p.chapters.length > 0)
  }, [parts, q])

  // 체크박스 토글
  const toggleRead = (href: string) => {
    setReadDocs(prev => {
      const next = new Set(prev)
      if (next.has(href)) next.delete(href)
      else next.add(href)
      try { localStorage.setItem('read-docs', JSON.stringify([...next])) } catch {}
      return next
    })
  }

  return (
    <>
      {/* 모바일 햄버거 */}
      <button
        className="hamburger"
        onClick={() => setMobileOpen(true)}
        aria-label="목차 열기"
        type="button"
      >
        ☰
      </button>

      {/* 모바일 scrim */}
      <div
        className={`scrim ${mobileOpen ? 'on' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside className={`sidebar ${mobileOpen ? 'on' : ''}`}>
        {/* 상단 — 브랜드 + 제목 */}
        <div className="sidebar-head">
          <Link href="/" className="brand-row">
            <div className="brand-stamp">CE</div>
            <div className="brand-text">CLAUDE ENCYCLOPEDIA</div>
          </Link>
          <h1 className="book-title">최신 클로드 백과사전</h1>
          <p className="book-sub">2026년 4월판 · 40~60대 눈높이</p>
        </div>

        {/* 검색 */}
        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="챕터 제목 검색"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="목차 검색"
          />
        </div>

        {/* 진행바 */}
        <div className="progress-wrap">
          <span>{readCount} / {totalChapters}</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <span>{progressPct}%</span>
        </div>

        {/* TOC */}
        <nav className="toc" aria-label="전체 목차">
          {filteredParts.length === 0 && (
            <div style={{ padding: '24px 16px', color: 'var(--muted)', fontSize: 14 }}>
              "{query}" 에 해당하는 챕터가 없어요.
            </div>
          )}
          {filteredParts.map(part => (
            <div key={part.id} className="toc-part">
              <div className="toc-part-head">
                <span className="toc-part-num">{part.num}</span>
                <span className="toc-part-title">{part.title}</span>
              </div>
              <div className="toc-chapters">
                {part.chapters.map(ch => {
                  const isActive = ch.href === activeHref
                  const isDone = readDocs.has(ch.href)
                  return (
                    <div key={ch.href} style={{ display: 'flex', alignItems: 'stretch', gap: 4 }}>
                      <Link
                        href={ch.href}
                        className={`toc-item ${isActive ? 'active' : ''}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="toc-num">{ch.num}</span>
                        <span className="toc-title">{ch.title}</span>
                      </Link>
                      <button
                        className={`toc-check ${isDone ? 'done' : ''}`}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleRead(ch.href) }}
                        aria-label={isDone ? '읽음 해제' : '읽음 표시'}
                        type="button"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* 하단 — A-/A/A+ + 유튜브 */}
        <div className="sidebar-foot">
          <a
            href="https://youtube.com/@nomore_manual"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-cta"
          >
            <span className="yt-ico" aria-hidden="true" />
            <span className="yt-text">
              노모어매뉴얼
              <span className="yt-sub">YouTube 채널</span>
            </span>
          </a>
          <div className="font-controls" role="group" aria-label="글자 크기">
            <span className="fc-label">글자 크기</span>
            <div className="fc-buttons">
              <button
                className={`fc-btn a-small ${fs === 'small' ? 'active' : ''}`}
                onClick={() => applyFs('small')}
                aria-label="작게"
                type="button"
              >A-</button>
              <button
                className={`fc-btn a-med ${fs === 'med' ? 'active' : ''}`}
                onClick={() => applyFs('med')}
                aria-label="보통"
                type="button"
              >A</button>
              <button
                className={`fc-btn a-large ${fs === 'large' ? 'active' : ''}`}
                onClick={() => applyFs('large')}
                aria-label="크게"
                type="button"
              >A+</button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
