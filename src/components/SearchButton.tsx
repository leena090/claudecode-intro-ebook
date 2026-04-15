'use client'

// ── 검색 버튼 + 모달 통합 컴포넌트 ──
// 역할:
//   1. 헤더 안에 렌더링되는 검색 버튼 (클릭으로 모달 열기)
//   2. Cmd+K / Ctrl+K 전역 단축키 등록
//   3. SearchModal 상태 관리 (isOpen)
// 분리 이유: Header는 'use client'이지만 단독 컴포넌트로 관리해
//           나중에 다른 위치에서도 재사용 가능

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'

// ── SearchModal 동적 임포트 ──
// 검색 기능은 초기 페이지 로드에 필수가 아니므로 lazy load
// ssr: false — 클라이언트 전용 컴포넌트 (document, window 사용)
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false })

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false) // 검색 모달 열림 상태

  // ── Cmd+K (Mac) / Ctrl+K (Windows) 전역 단축키 등록 ──
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault() // 브라우저 기본 단축키(주소창 포커스 등) 차단
      setIsOpen(prev => !prev) // 토글: 열려있으면 닫고, 닫혀있으면 열기
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown) // 정리
  }, [handleKeyDown])

  // ── 모달 열기/닫기 핸들러 ──
  const openSearch = useCallback(() => setIsOpen(true), [])
  const closeSearch = useCallback(() => setIsOpen(false), [])

  // ── Mac 여부 감지 — 단축키 힌트 표시용 ──
  const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform)

  return (
    <>
      {/* ── 검색 버튼 ── */}
      {/* 40~60대 사용자 고려: 레이블 텍스트 + 단축키 힌트 명시 */}
      <button
        onClick={openSearch}
        className="search-trigger-btn"
        aria-label="문서 검색 열기"
        title={`문서 검색 (${isMac ? '⌘K' : 'Ctrl+K'})`}
      >
        {/* 돋보기 아이콘 */}
        <svg
          width="15" height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="search-trigger-label">검색</span>
        {/* 단축키 힌트 — 데스크탑에서만 표시 */}
        <kbd className="search-trigger-kbd">
          {isMac ? '⌘K' : 'Ctrl+K'}
        </kbd>
      </button>

      {/* ── 검색 모달 ── */}
      <SearchModal isOpen={isOpen} onClose={closeSearch} />
    </>
  )
}
