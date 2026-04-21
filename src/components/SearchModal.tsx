'use client'

// ── 전체 문서 검색 모달 컴포넌트 ──
// 기능:
//   - Cmd+K (Mac) / Ctrl+K (Windows) 단축키로 열기/닫기
//   - ESC 키로 닫기
//   - 실시간 클라이언트사이드 필터링 (백엔드 없음)
//   - 제목·설명·태그·카테고리·본문 발췌문 대상 검색
//   - 40~60대 사용자 최적화: 큰 글씨, 명확한 레이블, 간단한 UI
// 참고: 검색 인덱스는 /api/search에서 최초 1회 로드

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { matchSearchQuery, expandTerm } from '@/lib/search-synonyms'

// ── 검색 인덱스 아이템 타입 (api/search/route.ts와 동일 구조) ──
interface SearchItem {
  title: string
  description: string
  category: string
  categoryTitle: string
  categoryIcon: string
  slug: string
  href: string
  tags: string[]
  excerpt: string
}

// ── SearchModal Props ──
interface SearchModalProps {
  isOpen: boolean       // 모달 열림 상태
  onClose: () => void   // 닫기 콜백
}

// ── 텍스트 하이라이트 유틸 ──
// 검색어와 일치하는 부분을 <mark> 태그로 감싸 강조 표시
function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  // 특수문자 이스케이프 후 정규식으로 매칭
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'))
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
          ? <mark key={i} style={{ background: 'rgba(218,119,86,0.25)', color: 'var(--accent-text)', borderRadius: '3px', padding: '0 2px' }}>{part}</mark>
          : part
      )}
    </>
  )
}

// ── 검색 필터 로직 ──
// matchSearchQuery(공용) — 복수 단어 AND + 한/영 동의어 확장 자동 처리
// 필드별 가중치로 점수 계산 후 상위 8개 반환
function filterItems(items: SearchItem[], query: string): SearchItem[] {
  const q = query.trim()
  if (!q) return []

  const scored = items
    .map(item => {
      let score = 0
      const title = item.title
      const desc = item.description
      const tags = item.tags.join(' ')
      const catTitle = item.categoryTitle
      const excerpt = item.excerpt

      if (matchSearchQuery(title, q)) score += 100
      // 제목 시작 일치 보너스: 첫 단어가 제목의 앞 variant와 일치
      const firstWord = q.toLowerCase().split(/\s+/)[0] || ''
      const variants = expandTerm(firstWord)
      if (variants.some(v => title.toLowerCase().startsWith(v))) score += 50
      if (matchSearchQuery(desc, q)) score += 40
      if (matchSearchQuery(tags, q)) score += 30
      if (matchSearchQuery(catTitle, q)) score += 20
      if (matchSearchQuery(excerpt, q)) score += 10

      return { item, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.map(({ item }) => item).slice(0, 8)
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  // ── 상태 관리 ──
  const [query, setQuery] = useState('')                         // 검색어
  const [index, setIndex] = useState<SearchItem[]>([])          // 전체 문서 인덱스
  const [results, setResults] = useState<SearchItem[]>([])      // 필터링된 결과
  const [loading, setLoading] = useState(false)                 // 인덱스 로딩 중
  const [activeIdx, setActiveIdx] = useState(-1)                // 키보드 포커스 인덱스

  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // ── 검색 인덱스 로드 ──
  // 모달이 처음 열릴 때 한 번만 API 호출 (이후 캐시 사용)
  useEffect(() => {
    if (!isOpen || index.length > 0) return // 이미 로드된 경우 재요청 방지

    setLoading(true)
    fetch('/api/search')
      .then(res => res.json())
      .then((data: SearchItem[]) => {
        setIndex(data)
        setLoading(false)
      })
      .catch(() => setLoading(false)) // 오류 시 조용히 처리
  }, [isOpen, index.length])

  // ── 모달 열릴 때 입력창 자동 포커스 ──
  useEffect(() => {
    if (isOpen) {
      // 약간의 지연으로 트랜지션 후 포커스
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')    // 이전 검색어 초기화
      setResults([])  // 이전 결과 초기화
      setActiveIdx(-1)
    }
  }, [isOpen])

  // ── 검색어 변경 시 실시간 필터링 ──
  useEffect(() => {
    setResults(filterItems(index, query))
    setActiveIdx(-1) // 검색어 바뀌면 키보드 선택 초기화
  }, [query, index])

  // ── ESC 키로 모달 닫기 ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      }

      // 키보드 상하 방향키로 결과 탐색
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIdx(prev => Math.min(prev + 1, results.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIdx(prev => Math.max(prev - 1, -1))
      }

      // 엔터키로 선택된 결과 이동
      if (e.key === 'Enter' && activeIdx >= 0 && results[activeIdx]) {
        window.location.href = results[activeIdx]!.href
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, results, activeIdx])

  // ── 활성 결과 항목이 보이도록 스크롤 ──
  useEffect(() => {
    if (activeIdx >= 0 && listRef.current) {
      const el = listRef.current.children[activeIdx] as HTMLElement
      el?.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIdx])

  // ── 바깥 클릭으로 닫기 ──
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  // 모달이 닫혀 있으면 렌더링 없음
  if (!isOpen) return null

  const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform)

  return (
    // ── 오버레이 (반투명 배경) ──
    <div
      className="search-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="문서 검색"
    >
      {/* ── 검색 패널 ── */}
      <div className="search-panel">

        {/* ── 검색 입력 영역 ── */}
        <div className="search-input-wrap">
          {/* 돋보기 아이콘 */}
          <svg
            className="search-icon"
            width="20" height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="찾고 싶은 내용을 입력하세요 (예: 설치, 명령어, 파일 만들기)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />

          {/* 닫기 버튼 — 크고 명확하게 (40~60대 고려) */}
          <button
            onClick={onClose}
            className="search-close-btn"
            aria-label="검색 닫기"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="search-close-label">닫기</span>
          </button>
        </div>

        {/* ── 결과 영역 ── */}
        <div className="search-results-area">

          {/* 로딩 상태 */}
          {loading && (
            <div className="search-empty">
              <div className="search-empty-icon">⏳</div>
              <p className="search-empty-text">가이드 목록 불러오는 중...</p>
            </div>
          )}

          {/* 초기 안내 — 검색어 없을 때 */}
          {!loading && !query && (
            <div className="search-empty">
              <div className="search-empty-icon">🔍</div>
              <p className="search-empty-text">
                검색어를 입력하면 바로 결과가 나옵니다
              </p>
              <p className="search-empty-hint">
                예: "설치", "첫 대화", "파일 만들기", "권한", "MCP"
              </p>
              <p className="search-shortcut-hint">
                {isMac ? '⌘K' : 'Ctrl+K'} 단축키로 언제든지 열 수 있어요
              </p>
            </div>
          )}

          {/* 검색 결과 없음 */}
          {!loading && query && results.length === 0 && (
            <div className="search-empty">
              <div className="search-empty-icon">😕</div>
              <p className="search-empty-text">
                &ldquo;{query}&rdquo;에 대한 결과가 없습니다
              </p>
              <p className="search-empty-hint">
                다른 단어로 검색해보세요. 예: 설치, 명령어, 오류, 팁
              </p>
            </div>
          )}

          {/* 검색 결과 목록 */}
          {!loading && results.length > 0 && (
            <ul ref={listRef} className="search-result-list" role="listbox">
              {results.map((item, i) => (
                <li key={item.href} role="option" aria-selected={i === activeIdx}>
                  <Link
                    href={item.href}
                    className={`search-result-item${i === activeIdx ? ' search-result-item--active' : ''}`}
                    onClick={onClose}
                    tabIndex={0}
                  >
                    {/* 카테고리 뱃지 */}
                    <div className="search-result-meta">
                      <span className="search-result-category">
                        {item.categoryIcon} {item.categoryTitle}
                      </span>
                    </div>

                    {/* 제목 */}
                    <div className="search-result-title">
                      {highlight(item.title, query)}
                    </div>

                    {/* 설명 */}
                    {item.description && (
                      <div className="search-result-desc">
                        {highlight(item.description, query)}
                      </div>
                    )}

                    {/* 태그 — 검색어가 태그에 매칭된 경우에만 표시 */}
                    {item.tags.length > 0 && item.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) && (
                      <div className="search-result-tags">
                        {item.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="search-result-tag">
                            {highlight(tag, query)}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── 하단 단축키 안내 ── */}
        <div className="search-footer">
          <span className="search-footer-tip">
            <kbd>↑</kbd><kbd>↓</kbd> 이동
          </span>
          <span className="search-footer-tip">
            <kbd>Enter</kbd> 선택
          </span>
          <span className="search-footer-tip">
            <kbd>ESC</kbd> 닫기
          </span>
        </div>

      </div>
    </div>
  )
}
